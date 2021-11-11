import { useState, useRef, useEffect } from 'react';
import { Observable } from 'rxjs';
import timeСonversion from '../../helpers/timeСonversion';
import Scoreboard from '../Scoreboard';
import Button from '../Button';
import { AppWrap, WrapperButton } from './App.styled';

const initialStateTime = { hours: '00', mins: '00', secs: '00' };

export default function App() {
  const [time, setTime] = useState(initialStateTime);
  const [isStart, setIsStart] = useState(false);
  const [counter, setCounter] = useState(0);
  const [isReset, setIsReset] = useState(false);
  const [previousTime, setPreviousTime] = useState(0);

  let subscription = useRef();

  useEffect(() => {
    const objTime = timeСonversion(counter * 1000);
    setTime({ ...objTime });
  }, [counter]);

  useEffect(() => {
    if (isReset) {
      start();
      setIsReset(false);
    }
  }, [isReset]);

  const timer = new Observable((observer) => {
    let counterObs = 1 + counter;
    setInterval(() => {
      observer.next(counterObs++);
    }, 1000);
  });

  const start = () => {
    if (isStart) {
      stop();
      return;
    }
    setIsStart(true);
    subscription.current = timer.subscribe({
      next: (time) => {
        setCounter(time);
      },
    });
  };

  const stop = () => {
    subscription.current && subscription.current.unsubscribe();
    setTime(initialStateTime);
    setIsStart(false);
    setCounter(0);
    subscription.current = null;
  };

  const reset = () => {
    if (!subscription.current) return;
    stop();
    setIsReset(true);
  };

  const wait = () => {
    subscription.current && subscription.current.unsubscribe();
    setIsStart(false);
  };

  const doubleTap = () => {
    if (!previousTime) {
      setPreviousTime(Date.now());
    } else {
      let currentTime = Date.now();
      if (currentTime - previousTime <= 300) {
        wait();
      }
      setPreviousTime(currentTime);
    }
  };

  return (
    <AppWrap>
      <Scoreboard time={time} />
      <WrapperButton>
        <Button titel="Start / Stop" handelOnClick={start} />
        <Button titel="Wait" handelOnClick={doubleTap} />
        <Button titel="Reset" handelOnClick={reset} />
      </WrapperButton>
    </AppWrap>
  );
}
