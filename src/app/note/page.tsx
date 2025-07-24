'use client';
import AudioMiniPlayer from '../components/AudioMiniPlayer';
import ChatBubble from '../components/ChatBubble';
import Gallery from '../components/Gallery';
import LiveTimer from '../components/LiveTimer';
import React, { useRef, useEffect, useState } from 'react';

function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!ref.current || revealed) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Trigger when element center is in the middle 40% of the viewport
      const elemCenter = rect.top + rect.height / 2;
      if (elemCenter > windowHeight * 0.3 && elemCenter < windowHeight * 0.7) {
        setRevealed(true);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [revealed]);

  return (
    <div
      ref={ref}
      className={revealed ? "reveal-up" : "reveal-hidden"}
    >
      {children}
    </div>
  );
}

export default function Note() {
  return (
    <div className='font-[montserrat] text-center text-black p-8'>
      <RevealOnScroll>
        <div className='flex content-center max-w-6xl mx-auto'>
          <img src="/heroedit.png" alt="hero"/>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full fade-in-up'>
          <div className='flex justify-start mb-6'>
            <ChatBubble 
              message="my bun, it is you!! welcome to your 2nd anniversary gift!" 
              position="left" 
            />
          </div>
        </div>
      </RevealOnScroll>
      
      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full fade-in-up'>
          <div className='flex justify-end m-8'>
            <ChatBubble 
              message="i wanted to make something completely different for you, so i did it the way i know how :)" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>
      
      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-start m-8'>
            <ChatBubble
              message="with a bun-site! you shouldn't have :(" 
              position="left" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="let's start with our relationship stats!" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      {/* Move AudioMiniPlayer outside RevealOnScroll and make it fixed */}
      <AudioMiniPlayer
        audioSrc="/blessed.mp3"
        songTitle="the song we became official to :)"
        songSubtitle="Bun-iel Caesar"
        className="audio-mini-player-fixed"
      />

      <RevealOnScroll>
        <LiveTimer />
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="i still can't believe it's been that long. that's a whole lot of seconds as a bun!" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-start m-8'>
            <ChatBubble
              message="i know right, marco! im march btw! i love you and think your muscles are so big! yum!!!" 
              position="left" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="why thank you march! let's take a trip down memory lane together and remember all the good dates we've had!" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="i hope it makes you as emotional as it made me looking through all of these memories together again :')" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <Gallery />
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="that was sentimental :') i hope your tear ducts are flowing right about now!" 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-start m-8'>
            <ChatBubble
              message="im bawling ;-;" 
              position="left" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="i kiss you better! now for the grand finale... follow your heart and you'll know what to do..." 
              position="right" 
            />
          </div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        {/* Marco button and animated note section */}
        <MarcobuttNoteSection />
      </RevealOnScroll>
      <div className='max-w-6xl mx-auto w-full'>
          <div className='flex justify-end m-8'>
            <ChatBubble
              message="i love you so much mahal, happy 2nd marchie <3 hope you enjoyed!!" 
              position="right" 
            />
          </div>
        </div>
    </div>
  )
}

// Add this component at the bottom of the file
function MarcobuttNoteSection() {
  const [showNote, setShowNote] = React.useState(false);
  const [showConfetti, setShowConfetti] = React.useState(false);

  const handleClick = () => {
    setShowNote(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 2500); // Confetti lasts 2.5s
  };

  return (
    <div className="flex flex-col items-center my-12 relative">
      {showConfetti && (
        <ConfettiOverlay />
      )}
      <button
        onClick={handleClick}
        aria-label="Show Note"
        style={{
          background: "none",
          border: "none",
          padding: 0,
          cursor: "pointer",
          outline: "none"
        }}
        className="group"
      >
        <img
          src="/marcobutt.png"
          alt="Show Note"
          style={{
            width: "400px",
            height: "700px",
            borderRadius: "50%",
            transition: "transform 0.3s cubic-bezier(.4,2,.6,1)"
          }}
          className="shake-on-hover"
        />
      </button>
      <div
        style={{
          marginTop: "32px",
          transition: "transform 0.5s cubic-bezier(.4,2,.6,1), opacity 0.5s",
          transform: showNote ? "translateY(0)" : "translateY(100px)",
          opacity: showNote ? 1 : 0,
          pointerEvents: showNote ? "auto" : "none"
        }}
      >
        <img
          src="/note.jpg"
          alt="Note"
          style={{
            width: "550px",
            maxWidth: "90vw",
            borderRadius: "16px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.22)"
          }}
        />
      </div>
    </div>
  );
}

// Simple confetti overlay using absolutely positioned colored divs
function ConfettiOverlay() {
  // Generate 40 confetti pieces with random positions/colors
  const confetti = Array.from({ length: 40 }).map((_, i) => {
    const left = Math.random() * 100;
    const delay = Math.random();
    const size = 8 + Math.random() * 12;
    const colors = ["#FFD700", "#FF69B4", "#00CFFF", "#FF6347", "#7CFC00", "#FFB347"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const rotate = Math.random() * 360;
    return (
      <div
        key={i}
        style={{
          position: "absolute",
          top: "-20px",
          left: `${left}%`,
          width: `${size}px`,
          height: `${size * 2}px`,
          background: color,
          borderRadius: "3px",
          transform: `rotate(${rotate}deg)`,
          opacity: 0.85,
          animation: `confetti-fall 2.2s ${delay}s cubic-bezier(.4,2,.6,1) forwards`
        }}
      />
    );
  });

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "0",
        minHeight: "700px",
        zIndex: 10,
      }}
    >
      {confetti}
    </div>
  );
}
