import './App.css';
// import Layout from './Layout/Layout';
import { Route, Routes } from "react-router-dom";
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import About from './Pages/About';
import NotFound from './Pages/NotFound';
import Timetable from './Pages/TimeTable';
import ExploreCourse from './Pages/ExploreCourse'

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/class-time" element={<Timetable/>} />
    <Route path="/courses" element={<ExploreCourse/>} />

    {/* Route to handal: 404 Not-Found Page */}
    <Route path="*" element={<NotFound />} />
    </Routes>
    </>
  );
}

export default App;
