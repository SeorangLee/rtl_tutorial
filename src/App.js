import logo from './logo.svg';
import './App.css';
import NotFound from './NotFound';
import LoginForm from './LoginForm';
import Counter from './Counter';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <NotFound />
      <Counter />
    </div>
  );
}

export default App;
