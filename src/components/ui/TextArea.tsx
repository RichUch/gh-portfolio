import { ChangeEventHandler } from "react"

interface TextareaProps {
  name: string,
  placeholder: string,
  rows?: number,
  cols?: number,
  className?: string,
  id?: string,
  onChange?: ChangeEventHandler<HTMLTextAreaElement>,
  required?: boolean,
  disabled?: boolean
}

function Textarea ({name, placeholder, rows = 20, cols=20, className, id, onChange, required, disabled}: TextareaProps) {
  return (
    <textarea name={name}
    placeholder={placeholder}
    rows={rows}
    cols={cols}
    className={`placeholder-black/50 bg-light dark:bg-dark/90 dark:text-white dark:border-dark dark:placeholder-white/70 ${className}`}
    id={id}
    onChange={onChange}
    required={required}
    disabled={disabled}
    />
  )
}

export default Textarea;