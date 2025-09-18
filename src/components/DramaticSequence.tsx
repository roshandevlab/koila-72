import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import koalaBirthday from '@/assets/koala-birthday.jpg';
import girlKoalaWaving from '@/assets/girl-koala-waving.jpg';
import girlKoalaHugging from '@/assets/girl-koala-hugging.jpg';
import girlKoalaKissing from '@/assets/girl-koala-kissing.jpg';
import girlKoalaCute from '@/assets/girl-koala-cute.jpg';
import girlKoalaCake from '@/assets/girl-koala-cake.jpg';
import girlKoalaSpecial from '@/assets/girl-koala-special.jpg';
import boyKoalaWaving from '@/assets/boy-koala-waving.jpg';
import boyKoalaHugging from '@/assets/boy-koala-hugging.jpg';
import boyKoalaKissing from '@/assets/boy-koala-kissing.jpg';
import boyKoalaCute from '@/assets/boy-koala-cute.jpg';
import boyKoalaBirthday from '@/assets/boy-koala-birthday.jpg';
import boyKoalaSpecial from '@/assets/boy-koala-special.jpg';
import koalasHuggingGifts from '@/assets/koalas-hugging-gifts.jpg';

interface DramaticSequenceProps {
  onSequenceComplete: () => void;
}

const DramaticSequence = ({ onSequenceComplete }: DramaticSequenceProps) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showLetter, setShowLetter] = useState(false);

  const messages = [
    {
      title: "💕 I want to say you something 💕",
      subtitle: "Something very special from my heart...",
      girlKoala: girlKoalaWaving,
      boyKoala: boyKoalaWaving,
      animation: "animate-wave-hands",
      font: "font-dancing",
      color: "text-birthday-pink",
      buttonText: "Tell me 💫"
    },
    {
      title: "🎉 HAPPY BIRTHDAY! 🎉",
      subtitle: "Today is your special day!",
      girlKoala: girlKoalaCake,
      boyKoala: boyKoalaBirthday,
      animation: "animate-koala-dance",
      font: "font-vibes",
      color: "text-birthday-gold",
      buttonText: "Next 🎂"
    },
    {
      title: "💕 You are CUTE 💕",
      subtitle: "The most adorable person in the world",
      girlKoala: girlKoalaCute,
      boyKoala: boyKoalaCute,
      animation: "animate-koala-dance",
      font: "font-dancing",
      color: "text-birthday-pink",
      buttonText: "Next 💖"
    },
    {
      title: "✨ You are the BEST ✨",
      subtitle: "Amazing, wonderful, and perfect in every way",
      girlKoala: girlKoalaHugging,
      boyKoala: boyKoalaHugging,
      animation: "animate-hug-arms",
      font: "font-playfair",
      color: "text-birthday-gold",
      buttonText: "Next ⭐"
    },
    {
      title: "🎉 You are SPECIAL 🎉",
      subtitle: "One in a million, absolutely incredible",
      girlKoala: girlKoalaSpecial,
      boyKoala: boyKoalaSpecial,
      animation: "animate-koala-dance",
      font: "font-vibes",
      color: "text-birthday-lavender",
      buttonText: "Next 💎"
    },
    {
      title: "💝 You are LOVED 💝",
      subtitle: "More than words can ever express",
      girlKoala: girlKoalaKissing,
      boyKoala: boyKoalaKissing,
      animation: "animate-blow-kiss",
      font: "font-dancing",
      color: "text-primary",
      buttonText: "🎁 SURPRISE! 🎁"
    }
  ];

  const handleNext = () => {
    if (currentStep < messages.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowLetter(true);
    }
  };

  const handleLetterClick = () => {
    onSequenceComplete();
  };

  return (
    <div className="min-h-screen flex items-center justify-center gradient-romantic relative overflow-hidden">
      {/* Background koala with overlay - only show after first step */}
      {currentStep > 0 && (
        <div className="absolute inset-0">
          <img 
            src={koalaBirthday} 
            alt="Birthday Koala" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-birthday-pink/30 via-birthday-lavender/20 to-birthday-gold/30"></div>
        </div>
      )}

      {/* Floating particles - only show after first step */}
      {currentStep > 0 && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                fontSize: `${Math.random() * 20 + 15}px`,
              }}
            >
              {['💕', '🎀', '🌟', '💫', '🎈', '🎂', '🐨'][Math.floor(Math.random() * 7)]}
            </div>
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        {!showLetter ? (
          <div className="animate-bounce-in">
            <div className="mb-8">
              {/* First step: Only Boy Koala */}
              {currentStep === 0 ? (
                <div className={`mb-8 ${messages[currentStep].animation}`}>
                  <img 
                    src={messages[currentStep].boyKoala} 
                    alt="Boy Koala" 
                    className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full object-cover shadow-romantic border-4 border-blue-300/50"
                  />
                  <div className="text-center mt-4 text-2xl">🤴</div>
                </div>
              ) : (
                /* Second step onwards: Boy and Girl Koalas */
                <div className={`mb-8 ${messages[currentStep].animation} flex items-center justify-center gap-8`}>
                  <div className="relative">
                    <img 
                      src={messages[currentStep].boyKoala} 
                      alt="Boy Koala" 
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-romantic border-4 border-blue-300/50"
                    />
                    <div className="absolute -top-2 -right-2 text-2xl">🤴</div>
                  </div>
                  <div className="text-4xl animate-heart-beat">💕</div>
                  <div className="relative">
                    <img 
                      src={messages[currentStep].girlKoala} 
                      alt="Girl Koala" 
                      className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-romantic border-4 border-pink-300/50"
                    />
                    <div className="absolute -top-2 -right-2 text-2xl">👸</div>
                  </div>
                </div>
              )}
              
              <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${messages[currentStep].font} ${messages[currentStep].color} drop-shadow-lg animate-fade-in`}>
                {messages[currentStep].title}
              </h1>
              
              <p className="text-xl md:text-3xl text-white font-poppins mb-12 animate-slide-up drop-shadow-md">
                {messages[currentStep].subtitle}
              </p>
            </div>

            <Button 
              onClick={handleNext}
              size="lg"
              className="bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-full text-xl shadow-romantic animate-pulse border-2 border-white/30 backdrop-blur-sm font-poppins"
            >
              {messages[currentStep].buttonText}
            </Button>
          </div>
        ) : (
          <div className="animate-bounce-in relative">
            {/* Magical Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(50)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-float opacity-70"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    fontSize: `${Math.random() * 30 + 20}px`,
                    animationDuration: `${Math.random() * 3 + 4}s`
                  }}
                >
                  {['✨', '🎊', '🎈', '💕', '🎂', '🌟', '💝', '🎀', '🎁', '🐨'][Math.floor(Math.random() * 10)]}
                </div>
              ))}
            </div>

            {/* Koalas Hugging with Gifts */}
            <div className="mb-8 animate-hug-arms relative">
              <img 
                src={koalasHuggingGifts} 
                alt="Koalas Hugging with Gifts" 
                className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full object-cover shadow-romantic border-8 border-gradient-to-r from-pink-300 to-purple-300 mb-6 hover:scale-110 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full animate-pulse"></div>
            </div>

            {/* Beautiful Title with Multiple Animations */}
            <div className="mb-8 relative">
              <div className="absolute inset-0 text-4xl md:text-6xl font-vibes text-birthday-gold/30 blur-sm animate-pulse">
                Happy Sweet 16 happy birthday sweet heart now you are turn 16
              </div>
              <h1 className="relative text-4xl md:text-6xl font-vibes text-birthday-gold mb-6 drop-shadow-lg animate-heart-beat">
                Happy Sweet 16 happy birthday sweet heart now you are turn 16
              </h1>
              
              <div className="absolute inset-0 text-5xl md:text-7xl font-dancing text-white/30 blur-sm animate-pulse" style={{ top: '80px' }}>
                Beautiful Anjana! 🎉
              </div>
              <h2 className="relative text-5xl md:text-7xl font-dancing text-white mb-4 drop-shadow-lg animate-bounce-in">
                Beautiful Anjana! 🎉
              </h2>
              
              
              <p className="text-2xl md:text-3xl text-birthday-cream font-poppins mb-12 animate-fade-in">
                🐨 Click on the magical letter to read your special surprise! 🐨
              </p>
            </div>

            {/* Floating Gift Animation Around Letter */}
            <div className="absolute top-10 left-10 text-5xl animate-bounce-in" style={{ animationDelay: '0.5s' }}>
              🎁
            </div>
            <div className="absolute top-20 right-10 text-5xl animate-bounce-in" style={{ animationDelay: '1s' }}>
              🎀
            </div>
            <div className="absolute bottom-32 left-16 text-5xl animate-bounce-in" style={{ animationDelay: '1.5s' }}>
              🎈
            </div>
            <div className="absolute bottom-32 right-20 text-5xl animate-bounce-in" style={{ animationDelay: '2s' }}>
              🎂
            </div>
            <div className="absolute top-1/2 left-5 text-4xl animate-float" style={{ animationDelay: '2.5s' }}>
              ✨
            </div>
            <div className="absolute top-1/2 right-5 text-4xl animate-float" style={{ animationDelay: '3s' }}>
              🌟
            </div>

            <div 
              onClick={handleLetterClick}
              className="relative cursor-pointer group animate-float hover:scale-110 transition-all duration-500"
            >
              <div className="text-8xl md:text-9xl mb-4 group-hover:animate-heart-beat">
                💌
              </div>
              <div className="absolute -inset-4 bg-white/10 rounded-full blur-xl group-hover:bg-white/20 transition-all duration-500"></div>
              <p className="text-birthday-gold font-dancing text-2xl font-bold animate-pulse">
                ✨ Click to Open Your Love Letter ✨
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Special effects for current step - only show after first step */}
      {currentStep > 0 && (
        <>
          <div className="absolute top-10 left-10 text-6xl animate-bounce-in" style={{ animationDelay: '0.5s' }}>
            🎈
          </div>
          <div className="absolute top-20 right-10 text-5xl animate-bounce-in" style={{ animationDelay: '1s' }}>
            🎂
          </div>
          <div className="absolute bottom-20 left-16 text-7xl animate-bounce-in" style={{ animationDelay: '1.5s' }}>
            🐨
          </div>
          <div className="absolute bottom-10 right-20 text-6xl animate-bounce-in" style={{ animationDelay: '2s' }}>
            💝
          </div>
        </>
      )}
    </div>
  );
};

export default DramaticSequence;