import styled from '@emotion/styled';

export const StopwatchButton = styled.button`
  display: flex;
  justify-content: center;
  width: 150px;
  align-items: center;
  padding: 8px 10px;
  border: 1px solid #c9c1c1;
  border-radius: 14px;
  font-style: italic;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.03em;
  text-align: center;
  color: #5c6061;
  background-color: #dddbb5a1;
  box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.37) inset;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 15px;
  }
  &:hover {
    background-color: #edda9f;
  }
`;
