import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavigationLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: gray;
  transition: color 0.3s ease;

  :hover,
  :focus {
    color: rgb(0, 126, 165);
  }

  &.active {
    color: rgb(0, 126, 165);
  }
`;
