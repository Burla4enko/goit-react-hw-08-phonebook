import { useDispatch, useSelector } from 'react-redux';
import { FiLogOut } from 'react-icons/fi';
import { logOut } from 'redux/auth/authOperations';
import { selectUser } from 'redux/auth/authSelectors';
import { UserMenuBtn, UserMenuWrapper, UserName } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <UserMenuWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <UserMenuBtn type="button" onClick={() => dispatch(logOut())}>
        <FiLogOut />
      </UserMenuBtn>
    </UserMenuWrapper>
  );
};
