import { useDarkMode } from '@/hooks/useDarkMode';
import Header from '@components/Header';
import CountryDetail from '@pages/CountryDetail';
import Home from '@pages/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <main>
      <div className="min-h-screen">
        <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <main className="py-6 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:countryCode" element={<CountryDetail />} />
          </Routes>
        </main>
      </div>
    </main>
  );
}

export default App;
