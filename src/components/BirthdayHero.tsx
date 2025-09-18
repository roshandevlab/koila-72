import { Button } from '@/components/ui/button';
import { useState } from 'react';
import koalaBirthday from '@/assets/koala-birthday.jpg';

interface BirthdayHeroProps {
  onRevealSurprise: () => void;
}

const BirthdayHero = ({ onRevealSurprise }: BirthdayHeroProps) => {
  const [showMessage, setShowMessage] = useState(false);

  const handleReveal = () => {
    setShowMessage(true);
    setTimeout(() => onRevealSurprise(), 1000);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center gradient-romantic overflow-hidden">
      {/* Background koala */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={koalaBirthday} 
          alt="Birthday Koala" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="animate-bounce-in">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            🎉 SURPRISE! 🎉
          </h1>
          
          <div className="text-2xl md:text-4xl text-birthday-cream mb-8 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <p className="mb-2">Happy Sweet 16th Birthday</p>
            <p className="text-4xl md:text-6xl font-bold text-birthday-gold animate-heart-beat">
              ANJANA! 💝
            </p>
          </div>
          
          <div className="text-xl md:text-2xl text-birthday-cream mb-12 animate-slide-up" style={{ animationDelay: '1s' }}>
            <p>🐨 From someone who loves you dearly 🐨</p>
          </div>
        </div>
        
        {!showMessage ? (
          <Button 
            onClick={handleReveal}
            size="lg"
            className="bg-birthday-pink hover:bg-birthday-pink/80 text-white font-bold py-4 px-8 rounded-full text-xl shadow-romantic animate-pulse"
            style={{ animationDelay: '1.5s' }}
          >
            Click for Your Special Surprise! 🎁
          </Button>
        ) : (
          <div className="animate-bounce-in text-birthday-gold text-2xl font-bold">
            Preparing your love letter... 💌
          </div>
        )}
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float">🎈</div>
      <div className="absolute top-32 right-16 text-3xl animate-float" style={{ animationDelay: '1s' }}>🎂</div>
      <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{ animationDelay: '2s' }}>🐨</div>
      <div className="absolute bottom-32 right-10 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>💕</div>
    </div>
  );
};

export default BirthdayHero;