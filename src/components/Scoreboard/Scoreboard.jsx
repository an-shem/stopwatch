import { ScoreboardStopwatch } from './Scoreboard.styled';

export default function Scoreboard({ time }) {
  const { hours, mins, secs } = time;
  return <ScoreboardStopwatch>{` ${hours}  :  ${mins}  :  ${secs} `}</ScoreboardStopwatch>;
}
