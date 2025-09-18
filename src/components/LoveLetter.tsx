import { Card } from '@/components/ui/card';
import girlKoalaBirthday from '@/assets/girl-koala-cake.jpg';

const LoveLetter = () => {
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
                 💌 My Precious Anjana - My Everything 💌
               </h2>
             </div>
             
             <p className="text-xl md:text-2xl font-playfair text-black animate-slide-up italic">
              On Your Magical Sweet 16th Birthday ✨
            </p>
          </div>

           {/* Main letter content with enhanced beauty */}
           <div className="space-y-6 text-black font-poppins leading-relaxed">
            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm">
              <p className="text-lg md:text-xl mb-4">
                My Beloved Anjana, today marks the most special day - your 16th birthday! 🎉 As I write this letter, my heart overflows with endless love and pure joy to celebrate you, the most precious soul who has become my entire universe.
              </p>
            </div>

            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.3s'}}>
              <p className="text-lg md:text-xl mb-4 font-dancing text-black italic">
                "Just like the adorable koalas you love so deeply, you bring such gentle sweetness, infinite warmth, and pure magic to my world. Your smile is my sunrise, your laugh is my favorite symphony, and your love is my greatest treasure." 🐨💕✨
              </p>
            </div>

            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.6s'}}>
              <p className="text-lg md:text-xl mb-4">
                Sixteen magical years ago, heaven sent an angel to earth - that angel was you! Today, I celebrate not just your birthday, but every breathtaking moment of your existence - your incredible kindness, your beautiful soul, your gentle heart, and the way you make everything around you sparkle with love and happiness.
              </p>
            </div>

            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '0.9s'}}>
              <p className="text-lg md:text-xl mb-4">
                You are not just a person in my life, Anjana - you ARE my life! You are my dream come true, my heart's deepest wish, and the reason my soul feels complete. Every day with you feels like a beautiful fairy tale that I never want to end.
              </p>
            </div>

            <div className="bg-pink-50/80 rounded-lg p-6 border border-pink-200/50 animate-fade-in backdrop-blur-sm" style={{animationDelay: '1.2s'}}>
              <p className="text-lg md:text-xl mb-4">
                As you blow out your 16 candles today, know that my biggest wish is to see your beautiful smile forever, to celebrate countless more birthdays together, and to create infinite magical memories with the love of my life. You deserve all the happiness in the universe! 🎂✨💫
              </p>
            </div>

            <div className="text-center bg-gradient-to-r from-pink-100/80 to-purple-100/80 rounded-lg p-8 border-2 border-pink-300/50 animate-heart-beat">
               <h3 className="text-2xl md:text-3xl font-dancing text-black mb-4">
                 Happy 16th Birthday, My Heart, My Soul, My Everything! 🎈👑
               </h3>
               <p className="text-xl md:text-2xl font-vibes text-black">
                You are loved beyond infinity, beyond words, beyond time itself! 💝✨
              </p>
            </div>

            <div className="text-center">
               <p className="text-xl md:text-2xl font-dancing text-black mb-4 animate-bounce-in">
                 With every beat of my heart, with all my soul,
               </p>
               <p className="text-2xl md:text-3xl font-vibes text-black animate-heart-beat">
                Your Forever Loving Heart 💕👑✨
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default LoveLetter;