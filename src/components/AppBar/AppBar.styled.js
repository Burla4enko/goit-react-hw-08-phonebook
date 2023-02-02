import styled from 'styled-components';
export const Header = styled.header`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  position: relative;

  :after {
    display: block;
    content: '';
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 0;
    background-color: gray;
    border-radius: 2px;
  }
`;
