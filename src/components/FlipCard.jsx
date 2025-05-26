import React, { useState } from 'react';

const FlipCard = ({ logo, name, description = '', experience = '' }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className="group perspective h-24 w-24 sm:h-28 sm:w-28 md:h-32 md:w-32 cursor-pointer"
      onClick={handleClick}
    >
      <div className={`relative preserve-3d duration-500 w-full h-full ${isFlipped ? 'my-rotate-y-180' : ''}`}>
        {/* Front of card */}
        <div className="absolute backface-hidden w-full h-full flex flex-col items-center justify-center">
          <img src={logo} alt={name} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-2 group-hover:scale-110 transition-transform duration-300" />
          <span className="text-xs sm:text-sm">{name}</span>
        </div>
        
        {/* Back of card */}
        <div className="absolute my-rotate-y-180 backface-hidden w-full h-full bg-rn-gray rounded-lg p-3 flex flex-col items-center justify-center">
          <h4 className="text-[10px] sm:text-xs font-bold mb-1 text-center">{name}</h4>
          <p className="text-[8px] sm:text-xs text-gray-300 text-center">{description}</p>
          {experience && (
            <p className="text-[8px] sm:text-xs text-green-400 mt-1 text-center">{experience}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
