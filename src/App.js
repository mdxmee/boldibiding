import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
          <Route path='/' element={<Navbar />} />
          <Route path='/Home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
