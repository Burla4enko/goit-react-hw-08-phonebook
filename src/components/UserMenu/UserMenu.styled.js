import styled from 'styled-components';

export const UserMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserName = styled.p`
  color: gray;
  font-weight: 700;
`;

export const UserMenuBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  color: gray;
  border-radius: 50%;
  outline: 0;
  z-index: 2;
  top: 44px;
  right: -24px;
  border: 3px solid rgb(52, 56, 61);
  background-color: rgb(28, 30, 33);

  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  :hover {
    color: rgb(0, 126, 165);
    box-shadow: 0 0 10px rgb(0, 126, 165);
    border-color: rgb(0, 126, 165);
  }

  svg {
    color: currentColor;
  }
`;
