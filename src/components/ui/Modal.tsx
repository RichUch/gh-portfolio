import type React from "react"
import { X } from "lucide-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState, useRef } from "react"
import { useCustomTranslation } from "../../hooks/useCustomTranslation"


interface ModalProps {
  skill: {
    name: string
    icon: React.ReactNode
    description: string
    experience: string
    projects: string[]
    resources: { name: string; url: string }[]
  } | null
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
  direction: "left" | "right" | null
}

export function Modal({ skill, isOpen, onClose, onNext, onPrevious, direction }: ModalProps) {
  const [animationClass, setAnimationClass] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useCustomTranslation();

  // Touch handling variables
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)
  const isDragging = useRef(false)
  const minSwipeDistance = 80 // Increased minimum distance required for a swipe
  const maxVerticalDistance = 50 // Maximum vertical movement allowed for horizontal swipe


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.body.style.overflow = "hidden"
      window.addEventListener("keydown", handleEscape)
    }

    return () => {
      document.body.style.overflowY = "auto"
      window.removeEventListener("keydown", handleEscape)
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (direction === "right") {
      setAnimationClass("animate-slide-out-left")
      setIsAnimating(true)
    } else if (direction === "left") {
      setAnimationClass("animate-slide-out-right")
      setIsAnimating(true)
    } else {
      setAnimationClass("animate-fade-in")
      setIsAnimating(false)
    }
  }, [direction, skill])

  if (!isOpen || !skill) return null

  const handleNext = () => {
    if (!isAnimating) {
      onNext()
    }
  }

  const handlePrevious = () => {
    if (!isAnimating) {
      onPrevious()
    }
  }

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't handle swipes on the content area (allow scrolling)
    if (e.target instanceof Node && contentRef.current?.contains(e.target)) {
      return
    }

    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
    isDragging.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    // Don't handle swipes on the content area (allow scrolling)
    if (e.target instanceof Node && contentRef.current?.contains(e.target)) {
      return
    }

    touchEndX.current = e.touches[0].clientX
    touchEndY.current = e.touches[0].clientY

    // If we've moved more than a small threshold, consider it a drag
    if (Math.abs(touchEndX.current - touchStartX.current) > 10) {
      isDragging.current = true
    }
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    // Don't handle swipes on the content area (allow scrolling)
    if (e.target instanceof Node && contentRef.current?.contains(e.target)) {
      return
    }

    if (!isAnimating && isDragging.current) {
      const horizontalDistance = touchStartX.current - touchEndX.current
      const verticalDistance = Math.abs(touchStartY.current - touchEndY.current)

      // Only trigger if:
      // 1. The horizontal distance is greater than the minimum swipe distance
      // 2. The vertical distance is less than the maximum allowed (to avoid triggering on diagonal scrolls)
      if (Math.abs(horizontalDistance) > minSwipeDistance && verticalDistance < maxVerticalDistance) {
        if (horizontalDistance > 0) {
          // Swiped left, go to next
          onNext()
        } else {
          // Swiped right, go to previous
          onPrevious()
        }
      }
    }

    // Reset the dragging state
    isDragging.current = false
  }


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div className="relative max-w-md w-full">
        {/* Desktop arrows */}
        {!isMobile && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="absolute left-0 top-1/2 -translate-x-24 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-light transition-colors z-10 dark:bg-light/20"
              aria-label={t("modal.previous")}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="absolute right-0 top-1/2 translate-x-24 -translate-y-1/2 p-2 bg-white rounded-full shadow-lg hover:bg-light transition-colors z-10 dark:bg-light/20"
              aria-label={t("modal.next")}
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}
        {/* Modal */}
        <div
          ref={modalRef}
          className={`bg-white rounded-lg shadow-xl max-w-md w-full max-h-[80vh] overflow-hidden flex flex-col text-black dark:bg-dark dark:text-white ${animationClass}`}
          onClick={(e) => e.stopPropagation()}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center justify-between p-4 border-b dark:border-light/20">
            <div className="flex items-center gap-2">
              <div className="text-blue-600">{skill.icon}</div>
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700" aria-label={t("modal.close")}>
              <X size={24} />
            </button>
          </div>

          <div className="p-4 space-y-4">
            <div>
              <h4 className="font-semibold text-lg">{t("modal.about")}</h4>
              <p className="text-gray-800 dark:text-white/90">{skill.description}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">{t("modal.experience")}</h4>
              <p className="text-gray-700 dark:text-white/90">{skill.experience}</p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">{t("modal.projects")}</h4>
              <ul className="list-disc pl-5 text-gray-700 dark:text-white/90">
                {skill.projects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg">{t("modal.learn")}</h4>
              <ul className="space-y-1">
                {skill.resources.map((resource, index) => (
                  <li key={index}>
                    <a
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline"
                    >
                      {resource.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        {/* Mobile navigation buttons at the bottom */}
        {isMobile && (
          <div className="flex justify-between items-center p-4 border-t dark:border-light/20">
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevious()
              }}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-light/20"
              aria-label={t("modal.previous")}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNext()
              }}
              className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors dark:bg-light/20"
              aria-label={t("modal.next")}
              >
                <ChevronRight size={24} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

