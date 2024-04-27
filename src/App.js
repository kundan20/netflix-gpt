import { useDispatch } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from './utils/userSlice';
import { auth } from './utils/firebase';
import Header from './components/Header';

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => { 
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    })
  }, []);

  return (
    <>
      <Header />
      <Outlet />
    </>
     
  );
}

export default App;
