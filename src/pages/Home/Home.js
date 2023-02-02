// import { useSelector } from 'react-redux';
// import { Outlet } from 'react-router-dom';
// import { selectUser } from 'redux/auth/selectors';

export default function Home() {
  // const user = useSelector(selectUser);
  return (
    <div>
      <h1>
        Welcome to Phonebook!
        <br />
        Register or Log In to get started.
      </h1>
    </div>
  );
}
