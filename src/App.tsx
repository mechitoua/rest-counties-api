import Header from '@components/Header';
import CountryDetail from '@pages/CountryDetail';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router-dom';
import { useDarkMode } from '@/hooks/useDarkMode';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className="min-h-screen">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="py-6 md:py-12">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryCode" element={<CountryDetail />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
