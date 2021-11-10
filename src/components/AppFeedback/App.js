import { useState } from 'react';

import timeСonversion from '../../helpers/timeСonversion';

import Scoreboard from '../Scoreboard';
import Button from '../Button';

import { AppWrap, WrapperButton } from './App.styled';

export default function App() {
  const [time, setTime] = useState({});

  const start = () => {
    const startTime = Date.now();

    setInterval(() => {
      const currentTime = Date.now();
      const time = currentTime - startTime;
      const objTime = timeСonversion(time);
      console.log(objTime);
      setTime({ ...objTime });
      // const dataTime = this.getTimeComponents(time);
      // this.updateClockface(dataTime);
    }, 1000);
  };

  // const onLeaveFeedback = (e) => {
  //   const name = e.target.id;

  //   switch (name) {
  //     case 'good':
  //       setGood((prev) => prev + 1);
  //       break;

  //     case 'neutral':
  //       setNeutral((prev) => prev + 1);
  //       break;

  //     case 'bad':
  //       setBad((prev) => prev + 1);
  //       break;

  //     default:
  //       return;
  //   }
  // };

  return (
    <AppWrap>
      <Scoreboard time={time} />
      <WrapperButton>
        <Button titel="Start / Stop" handelOnClick={start} />
        <Button titel="Wait" handelOnClick={() => console.log('yyy')} />
        <Button titel="Reset" handelOnClick={() => console.log('nnn')} />
      </WrapperButton>
    </AppWrap>
  );
}
