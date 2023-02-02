import styled from 'styled-components';

export const HomeSectionWrapper = styled.section`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HomeParagraph = styled.p`
  display: flex;
  align-items: flex-end;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;

  svg {
    margin-left: 5px;
    color: gray;
    transition: color 0.3s ease;

    :hover {
      color: rgb(0, 126, 165);
    }
  }
`;
