import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={`flex flex-col items-start ${className}`}>
      <img 
        src="/src/img/logo ultrabox transparente.png" 
        alt="Ultrabox Logo" 
        className="w-auto h-24 md:h-32"
      />
    </div>
  );
};

export default Logo;