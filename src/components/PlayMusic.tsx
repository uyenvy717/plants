import boop from '@/public/sounds/boop.mp3';

export const PlayMusic = () => {
  return (
    <div>
      <audio controls src={boop}></audio>
    </div>
  );
};
