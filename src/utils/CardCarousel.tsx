import React, { ReactNode, useState } from 'react';

interface CardCarouselProps {
  children: ReactNode; // Accept any valid ReactNode as children
}

const CardCarousel: React.FC<CardCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const childArray = React.Children.toArray(children);
  const totalCards = childArray.length;
  // Rotation sequence to ensure no two cards have the same angle
  const rotations = [5,10,15];
  // Get the rotation of a specific index
  const getRotation = (index: number): number => rotations[index % rotations.length];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalCards);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalCards) % totalCards);
  };

  return (
    <div className='carousel'>
      <button onClick={prevCard} className="arrow left">{"<"}</button>

      <div className="relative w-64 h-80 mx-auto">
      {childArray.map((child, index) => {
          // Determine the card's position in the stack
          const relativeIndex = (index - currentIndex + totalCards) % totalCards;
          
          let rotation = getRotation(index);

          // The top card (active card) should be at rotation 0
          if (relativeIndex === 0) {
            rotation = 0;
          } 
          // The outgoing card (previous top) should match the new incoming rotation
          else if (relativeIndex === totalCards - 1) {
            rotation = getRotation((currentIndex + 1) % totalCards);
          }
          return (
            <div
              key={index}
              className='skills_card_container'
              style={{
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.5s ease-in-out', 
                zIndex: relativeIndex === 0 ? 1 : 0, // Top card gets highest z-index
                filter: relativeIndex === 0 ? 'blur(0px)' : 'blur(1px)', // Only top card is clear
              }}
            >
              {child}
            </div>
          );
        })}
      </div>

      <button onClick={nextCard} className="arrow right">{">"}</button>
    </div>
  );
};

export default CardCarousel;
