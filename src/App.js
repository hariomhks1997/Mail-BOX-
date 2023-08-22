import { Fragment } from 'react';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import UserProfile from './components/UserProfile';


function App() {
  const IsAuth=useSelector(state=>state.auth.isAuthenciated)
  return (
    <Fragment>
      <Header></Header>
      {!IsAuth && <Auth></Auth>}
      {IsAuth && <UserProfile></UserProfile>}
 <Counter />
    </Fragment>
   
  );
}

export default App;
