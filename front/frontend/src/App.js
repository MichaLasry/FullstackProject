import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import PostTitle from './components/postTitle/postTitle';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <PostTitle></PostTitle>


      </Provider>
    </div>
  );
}

export default App;
