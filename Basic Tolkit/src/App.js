import Counter from './components/Counter';
import Header from '../src/components/Header'
import Auth from '../src/components/Auth';
import UserProfle from '../src/components/UserProfile';
import {useSelector,useDispatch}  from 'react-redux';
import  {authActions} from '../src/store/index';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
  return (
    <>
    <Header />
    {isAuthenticated && <UserProfle />}
    {!isAuthenticated &&<Auth />}
    <Counter />
    </>
  );
}

export default App;
