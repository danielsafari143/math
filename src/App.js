import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Calculator from './components/Calculator';
import Quotes from './components/Quotes';
import Home from './components/Home/Home';
import Main from './components/Main';

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="calculator" element={<Calculator />} />
              <Route path="quote" element={<Quotes />} />
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
