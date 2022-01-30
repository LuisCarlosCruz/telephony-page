import './App.css';
import Main from './pages/Main';
import Provider from './store/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/main" element={<Main />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
