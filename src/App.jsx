import { Route, Routes } from 'react-router-dom';
import './App.css';
import * as Pages from './pages';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Pages.Home />} />
      </Routes>
    </>
  );
}

export default App;
