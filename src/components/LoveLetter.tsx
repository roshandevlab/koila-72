import { Card } from '@/components/ui/card';
import girlKoalaBirthday from '@/assets/girl-koala-cake.jpg';
import { useMessages } from '@/hooks/useMessages';

const LoveLetter = () => {
  const messages = useMessages();
  return (
    <div className="max-w-4xl mx-auto px-6 relative bg-white min-h-screen">
      {/* Background Koala Girl Image */}
      <div className="absolute inset-0">
        <img 
          src={girlKoalaBirthday} 
          alt="Birthday Girl Koala" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-white/80"></div>
      </div>

      {/* Magical floating hearts around the letter */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${Math.random() * 20 + 15}px`,
              animationDuration: `${Math.random() * 4 + 3}s`
            }}
          >
            {['💕', '💖', '💗', '💝', '🌹', '✨', '🦋', '🌟'][Math.floor(Math.random() * 8)]}
          </div>
        ))}
      </div>

      <Card className="relative backdrop-blur-md bg-white/90 border-2 border-pink-200/50 shadow-romantic p-8 md:p-12 animate-fade-in overflow-hidden">
        {/* Beautiful background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/30 via-purple-100/30 to-pink-50/30 animate-pulse"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 text-3xl animate-heart-beat">🌹</div>
        <div className="absolute top-4 right-4 text-3xl animate-heart-beat" style={{animationDelay: '0.5s'}}>🌹</div>
        <div className="absolute bottom-4 left-4 text-3xl animate-heart-beat" style={{animationDelay: '1s'}}>🦋</div>
        <div className="absolute bottom-4 right-4 text-3xl animate-heart-beat" style={{animationDelay: '1.5s'}}>🦋</div>

        <div className="relative z-10">
          {/* Header with multiple animation layers */}
          <div className="text-center mb-8 relative">
            <div className="absolute inset-0 text-4xl md:text-5xl font-dancing text-pink-400/30 blur-sm animate-pulse">
              💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
            </div>
            <h1 className="relative text-4xl md:text-5xl font-dancing text-pink-500 mb-4 animate-heart-beat drop-shadow-lg">
              💕💕💕💕💕💕💕💕💕💕💕💕💕💕💕
            </h1>
            
            <div className="relative">
              <div className="absolute inset-0 text-3xl md:text-4xl font-vibes text-pink-400/40 blur-sm">
                💌 My Precious Anjana - My Everything 💌
              </div>
              <h2 className="relative text-3xl md:text-4xl font-vibes text-black mb-2 drop-shadow-lg animate-fade-in">
                 {messages.loveLetterTitle}
               </h2>
             </div>
             
             <p className="text-xl md:text-2xl font-playfair text-black animate-slide-up italic">
               {messages.loveLetterSubtitle}
             </p>
          </div>

           {/* Main letter content with enhanced beauty */}
           <div className="space-y-6 text-black font-poppins leading-relaxed">
             <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm">
               <p className="text-lg md:text-xl mb-4">
                 {messages.loveLetterParagraph1}
               </p>
             </div>

             <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.3s'}}>
               <p className="text-lg md:text-xl mb-4 font-dancing text-black italic">
                 {messages.loveLetterQuote}
               </p>
             </div>

             <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.6s'}}>
               <p className="text-lg md:text-xl mb-4">
                 {messages.loveLetterParagraph2}
               </p>
             </div>

             <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.9s'}}>
               <p className="text-lg md:text-xl mb-4">
                 {messages.loveLetterParagraph3}
               </p>
             </div>

             <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '1.2s'}}>
               <p className="text-lg md:text-xl mb-4">
                 {messages.loveLetterParagraph4}
               </p>
             </div>

             <div className="text-center bg-gradient-to-r from-pink-100/80 to-purple-100/80 rounded-lg p-8 border-2 border-pink-300/50 animate-heart-beat">
               <h3 className="text-2xl md:text-3xl font-dancing text-black mb-4">
                 {messages.loveLetterBirthdayWish}
               </h3>
               <p className="text-xl md:text-2xl font-vibes text-black">
                 {messages.loveLetterBirthdayMessage}
               </p>
             </div>

             <div className="text-center">
               <p className="text-xl md:text-2xl font-dancing text-black mb-4 animate-bounce-in">
                 {messages.loveLetterClosing1}
               </p>
               <p className="text-2xl md:text-3xl font-vibes text-black animate-heart-beat">
                 {messages.loveLetterClosing2}
               </p>
             </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoveLetter;