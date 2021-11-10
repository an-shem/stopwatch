import { StopwatchButton } from './Button.styled';

export default function Button({ titel, handelOnClick }) {
  return (
    <StopwatchButton type="button" onClick={handelOnClick}>
      {titel}
    </StopwatchButton>
  );
}
