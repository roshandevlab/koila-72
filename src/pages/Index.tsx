import { useState } from 'react';
import DramaticSequence from '@/components/DramaticSequence';
import LoveLetter from '@/components/LoveLetter';
import PhotoGallery from '@/components/PhotoGallery';
import FloatingHearts from '@/components/FloatingHearts';
import { useMessages } from '@/hooks/useMessages';

const Index = () => {
  const [showSurprise, setShowSurprise] = useState(false);
  const messages = useMessages();

  const handleSequenceComplete = () => {
    setShowSurprise(true);
  };

  return (
    <div className="min-h-screen">
      <FloatingHearts />
      
      {!showSurprise ? (
        <DramaticSequence onSequenceComplete={handleSequenceComplete} />
      ) : (
        <div className="animate-fade-in">
          {/* Love Letter Section */}
          <section className="py-16 px-6 gradient-birthday">
            <LoveLetter />
          </section>
          
          {/* Photo Gallery Section */}
          <section className="gradient-love">
            <PhotoGallery />
          </section>
          
          {/* Birthday Message Footer */}
          <footer className="py-12 text-center gradient-romantic">
            <div className="max-w-2xl mx-auto px-6">
               <h3 className="text-4xl font-dancing text-black mb-4 animate-heart-beat">
                 {messages.finalTitle}
               </h3>
               <p className="text-black text-lg mb-6 font-poppins">
                 {messages.finalMessage}
               </p>
              <div className="text-4xl animate-bounce-in font-vibes">
                🎂🎈🎁💝🐨💕🎉🎊
              </div>
            </div>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Index;
