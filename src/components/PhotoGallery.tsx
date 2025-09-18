import { Card } from '@/components/ui/card';
import koalaCelebration from '@/assets/koala-celebration.jpg';
import birthdayDecoration from '@/assets/birthday-cake.jpg';
import { messages } from '@/messages';

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
           <h2 className="relative text-4xl md:text-6xl font-vibes text-black mb-8 drop-shadow-lg animate-heart-beat">
             {messages.photoGalleryTitle}
           </h2>
           <p className="text-2xl md:text-3xl font-dancing text-black animate-fade-in">
             {messages.photoGallerySubtitle}
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
                 <h3 className="text-2xl md:text-3xl font-dancing text-black animate-heart-beat">
                   {messages.koalaCard1Title}
                 </h3>
                 <p className="text-lg md:text-xl text-black font-poppins leading-relaxed">
                   {messages.koalaCard1Text}
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
                 <h3 className="text-2xl md:text-3xl font-dancing text-black animate-heart-beat">
                   {messages.koalaCard2Title}
                 </h3>
                 <p className="text-lg md:text-xl text-black font-poppins leading-relaxed">
                   {messages.koalaCard2Text}
                 </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Enhanced Central Message */}
        <div className="text-center mb-16 relative">
          <div className="bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-gold-400/20 backdrop-blur-md rounded-3xl p-12 border-4 border-white/30 shadow-romantic animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-300/10 to-purple-300/10 rounded-3xl animate-heart-beat"></div>
             <h3 className="relative text-3xl md:text-5xl font-dancing text-black mb-6 animate-bounce-in drop-shadow-lg">
               {messages.centralMessage1}
             </h3>
             <p className="relative text-xl md:text-2xl text-black font-poppins animate-fade-in">
               {messages.centralMessage2}
             </p>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-gold-500/20 backdrop-blur-md rounded-3xl p-12 border-4 border-white/30 shadow-romantic relative overflow-hidden">
          <div className="absolute inset-0 animate-pulse">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-400/5 to-purple-400/5 animate-float"></div>
          </div>
          
           <h3 className="relative text-4xl md:text-5xl font-dancing text-black mb-6 animate-heart-beat drop-shadow-lg">
             {messages.footerTitle}
           </h3>
           <p className="relative text-xl md:text-2xl text-black mb-8 font-poppins leading-relaxed">
             {messages.footerMessage}
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