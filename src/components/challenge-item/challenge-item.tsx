import './challenge-item.css';
// import { useState, useRef } from 'react';

export interface IChallengeLabels {
  lable: string;
  value: string;
}

type IChallengeItem = {
  lable: string;
  onClick: () => void;
  active: boolean;
};

export function ChallengeItem({ lable, onClick, active }: IChallengeItem) {
  // const [, setCircles] = useState<any>([]);
  // const timerRef = useRef<any>(null);

  // const createCircleIcon = (posX: any, posY: any) => {
  //   const newCircle = {
  //     id: Date.now(),
  //     posX,
  //     posY,
  //   };
  //
  //   setCircles((prevCircles: any) => [...prevCircles, newCircle]);
  //
  //   timerRef.current = setTimeout(() => {
  //     setCircles((prevCircles: any) =>
  //       prevCircles.filter((circle: any) => circle.id !== newCircle.id)
  //     );
  //   }, 1000);
  // };

  // const handleButtonClick = (event: any) => {
  //   const offset = event.target.getBoundingClientRect();
  //   const posX = event.pageX - offset.left;
  //   const posY = event.pageY - offset.top;
  //   clearTimeout(timerRef.current);
  //
  //   createCircleIcon(posX, posY);
  // };

  return (
    <div className='wrap'>
      <div
        className={`challenge__item ${active ? 'challenge__active__item' : ''}`}
        onClick={onClick}
      >
        {lable}
      </div>
    </div>
  );
}
