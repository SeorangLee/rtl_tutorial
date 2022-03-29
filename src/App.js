import {Route, Routes} from 'react-router-dom';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import Counter from './Counter';
import Profile from './Profile';
import { Provider } from 'react-redux';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginForm/>}/>
      <Route path='/404' element={<NotFound/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path="profiles/:username" element={<Profile />}/>
    </Routes>
  );
}

export default App;
