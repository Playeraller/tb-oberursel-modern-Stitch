import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TennisPage from './pages/TennisPage';
import BadmintonPage from './pages/BadmintonPage';
import PuttersParadisePage from './pages/PuttersParadisePage';
import TennisBookingPage from './pages/TennisBookingPage';
import BadmintonBookingPage from './pages/BadmintonBookingPage';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/tennis" element={<TennisPage />} />
          <Route path="/badminton" element={<BadmintonPage />} />
          <Route path="/putters-paradise" element={<PuttersParadisePage />} />
          <Route path="/tennis-booking" element={<TennisBookingPage />} />
          <Route path="/badminton-booking" element={<BadmintonBookingPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
