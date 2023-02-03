import styled from 'styled-components';

export const ContactListUl = styled.ul`
  margin-top: 20px;
  padding-left: 10px;
`;

export const ContactListLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 8px;

  border: 2px solid gray;
  border-radius: 8px;

  font-weight: 500;

  span {
    text-transform: capitalize;
    display: inline-block;
    margin-right: 10px;
  }

  button {
    margin-left: 10px;
  }
`;

export const ContactListButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: gray;
  border-radius: 8px;
  outline: 0;
  z-index: 2;
  top: 44px;
  right: -24px;
  border: 3px solid rgb(52, 56, 61);
  background-color: rgb(28, 30, 33);

  cursor: pointer;
  transition: box-shadow 0.3s ease, border-color 0.3s ease, color 0.3s ease;

  :hover,
  :focus {
    color: rgb(0, 126, 165);
    box-shadow: 0 0 10px rgb(0, 126, 165);
    border-color: rgb(0, 126, 165);
  }

  svg {
    color: currentColor;
  }
`;
