import './index.css';
import Main from './pages/Main';
import Provider from './store/Provider';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
