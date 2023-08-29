import { useEffect } from 'react';

const SoundPlayer = () => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key.toLowerCase() === 'k' || event.key.toLowerCase() === 'h') {
        console.log("press")
        playSound(event.key);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const playSound = (key) => {
    const audio = new Audio(`/sounds/${key}.mp3`);
    audio.play();
  };

  return null; 
};

export default SoundPlayer;
