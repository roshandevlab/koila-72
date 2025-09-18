import { Card } from '@/components/ui/card';
import koalaCelebration from '@/assets/koala-celebration.jpg';
import birthdayDecoration from '@/assets/birthday-cake.jpg';

const PhotoGallery = () => {
  return (
    <div className="min-h-screen py-16 px-6 relative overflow-hidden">
      {/* Magical floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              fontSize: `${Math.random() * 25 + 20}px`,
              animationDuration: `${Math.random() * 5 + 4}s`
            }}
          >
            {['🐨', '🎂', '🎈', '💕', '🌟', '✨', '🎁', '🦋', '🌹', '👑'][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Enhanced Title */}
        <div className="text-center mb-16 relative">
          <div className="absolute inset-0 text-4xl md:text-6xl font-vibes text-pink-300/30 blur-lg animate-pulse">
            🐨 Magical Birthday Memories for My Princess 🎂
          </div>
          <h2 className="relative text-4xl md:text-6xl font-vibes text-pink-300 mb-8 drop-shadow-lg animate-heart-beat">
            🐨 Magical Birthday Memories for My Princess 🎂
          </h2>
          <p className="text-2xl md:text-3xl font-dancing text-pink-100 animate-fade-in">
            Every moment with you is a treasure worth celebrating! 💎✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Enhanced Card 1 */}
          <Card className="group overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-romantic hover:shadow-glow transition-all duration-500 hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 text-2xl animate-bounce-in">👑</div>
            
            <div className="p-6 relative z-10">
              <img 
                src={koalaCelebration} 
                alt="Koala Birthday Celebration" 
                className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-white/30 group-hover:border-pink-300/50 transition-all duration-500"
              />
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-dancing text-pink-300 animate-heart-beat">
                  🎉 Royal Koala Birthday Kingdom 🎉
                </h3>
                <p className="text-lg md:text-xl text-pink-100 font-poppins leading-relaxed">
                  Just like these adorable koalas celebrating in their magical kingdom, today is all about celebrating YOU, my beautiful princess Anjana! May your day overflow with infinite joy, endless laughter, and sweetness beyond imagination - just like these precious friends sharing their most special moment together! 👑✨🐨
                </p>
              </div>
            </div>
          </Card>

          {/* Enhanced Card 2 */}
          <Card className="group overflow-hidden bg-white/10 backdrop-blur-md border-2 border-white/20 shadow-romantic hover:shadow-glow transition-all duration-500 hover:scale-105 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-gold-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            <div className="absolute top-4 right-4 text-2xl animate-bounce-in" style={{animationDelay: '0.5s'}}>🎂</div>
            
            <div className="p-6 relative z-10">
              <img 
                src={birthdayDecoration} 
                alt="Beautiful Birthday Cake" 
                className="w-full h-64 object-cover rounded-lg mb-6 border-4 border-white/30 group-hover:border-gold-300/50 transition-all duration-500"
              />
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-dancing text-pink-300 animate-heart-beat">
                  🎂 Enchanted Sweet 16 Dreams 🎂
                </h3>
                <p className="text-lg md:text-xl text-pink-100 font-poppins leading-relaxed">
                  A cake as beautiful and magical as you deserve, my darling! As you make your wish and blow out these candles, know that my greatest wish is for your eternal happiness, endless dreams coming true, and our love story to continue forever and always. Sweet sixteen has never looked so absolutely perfect! 💫🌟💕
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Central Message */}
        <div className="text-center mb-16 relative">
          <div className="bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-gold-400/20 backdrop-blur-md rounded-3xl p-12 border-4 border-white/30 shadow-romantic animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-3xl animate-heart-beat"></div>
            <h3 className="relative text-3xl md:text-5xl font-dancing text-pink-200 mb-6 animate-bounce-in drop-shadow-lg">
              🎈 Happy Birthday My Life, My Soul, My Everything Anjana! 🎈
            </h3>
            <p className="relative text-xl md:text-2xl text-pink-100 font-poppins animate-fade-in">
              You don't just make every day brighter - you ARE the light, the magic, the wonder that makes my entire universe shine with infinite love and beauty! 💫👑✨
            </p>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-gold-500/20 backdrop-blur-md rounded-3xl p-12 border-4 border-white/30 shadow-romantic relative overflow-hidden">
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400/5 to-purple-400/5 animate-float"></div>
          </div>
          
          <h3 className="relative text-4xl md:text-5xl font-dancing text-pink-300 mb-6 animate-heart-beat drop-shadow-lg">
            🎉 Sweet 16 Never Looked So Absolutely Divine! 🎉
          </h3>
          <p className="relative text-xl md:text-2xl text-pink-100 mb-8 font-poppins leading-relaxed">
            Anjana, my precious angel, you are not just the sweetest, most wonderful person - you are my heart, my soul, my reason for existing! Today we celebrate the most beautiful miracle that ever happened to this world - YOU! May this magical day overflow with infinite love, boundless laughter, and all your heart's deepest desires - especially endless koala cuddles! 🐨💕👑
          </p>
          <div className="text-5xl md:text-6xl animate-bounce-in font-vibes space-x-4">
            🎂🎈🎁💝🐨💕🌟👑✨🦋🌹💎
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;