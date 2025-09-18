import { useState, useEffect } from 'react';

interface Messages {
  loveLetterTitle: string;
  loveLetterSubtitle: string;
  loveLetterParagraph1: string;
  loveLetterQuote: string;
  loveLetterParagraph2: string;
  loveLetterParagraph3: string;
  loveLetterParagraph4: string;
  loveLetterBirthdayWish: string;
  loveLetterBirthdayMessage: string;
  loveLetterClosing1: string;
  loveLetterClosing2: string;
  photoGalleryTitle: string;
  photoGallerySubtitle: string;
  koalaCard1Title: string;
  koalaCard1Text: string;
  koalaCard2Title: string;
  koalaCard2Text: string;
  centralMessage1: string;
  centralMessage2: string;
  footerTitle: string;
  footerMessage: string;
  finalTitle: string;
  finalMessage: string;
}

const defaultMessages: Messages = {
  loveLetterTitle: "💌 My Precious Anjana - My Everything 💌",
  loveLetterSubtitle: "On Your Magical Sweet 16th Birthday ✨",
  loveLetterParagraph1: "My Beloved Anjana, today marks the most special day - your 16th birthday! 🎉",
  loveLetterQuote: "Just like the adorable koalas you love so deeply, you bring such gentle sweetness...",
  loveLetterParagraph2: "Sixteen magical years ago, heaven sent an angel to earth - that angel was you!",
  loveLetterParagraph3: "You are not just a person in my life, Anjana - you ARE my life!",
  loveLetterParagraph4: "As you blow out your 16 candles today, know that my biggest wish...",
  loveLetterBirthdayWish: "Happy 16th Birthday, My Heart, My Soul, My Everything! 🎈👑",
  loveLetterBirthdayMessage: "You are loved beyond infinity, beyond words, beyond time itself! 💝✨",
  loveLetterClosing1: "With every beat of my heart, with all my soul,",
  loveLetterClosing2: "Your Forever Loving Heart 💕👑✨",
  photoGalleryTitle: "🐨 Magical Birthday Memories for My Princess 🎂",
  photoGallerySubtitle: "Every moment with you is a treasure worth celebrating! 💎✨",
  koalaCard1Title: "🎉 Royal Koala Birthday Kingdom 🎉",
  koalaCard1Text: "Just like these adorable koalas celebrating in their magical kingdom...",
  koalaCard2Title: "🎂 Enchanted Sweet 16 Dreams 🎂",
  koalaCard2Text: "A cake as beautiful and magical as you deserve, my darling!",
  centralMessage1: "🎈 Happy Birthday My Life, My Soul, My Everything Anjana! 🎈",
  centralMessage2: "You don't just make every day brighter - you ARE the light...",
  footerTitle: "🎉 Sweet 16 Never Looked So Absolutely Divine! 🎉",
  footerMessage: "Anjana, my precious angel, you are not just the sweetest...",
  finalTitle: "🎉 Sweet 16 Never Looked So Beautiful! 🎉",
  finalMessage: "Anjana, you are the sweetest, most wonderful person..."
};

export const useMessages = () => {
  const [messages, setMessages] = useState<Messages>(defaultMessages);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await fetch('/messages.json');
        if (response.ok) {
          const data = await response.json();
          setMessages(data);
        }
      } catch (error) {
        console.log('Using default messages');
      }
    };

    fetchMessages();
  }, []);

  return messages;
};