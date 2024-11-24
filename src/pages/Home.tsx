import SearchBar from '@/components/SearchBar';
import RegionFilter from '@/components/RegionFilter';
import CountryCard from '@/components/CountryCard';
import { useCountries } from '@/hooks/useCountries';

function Home() {
  const { countries, searchTerm, setSearchTerm, selectedRegion, setSelectedRegion } =
    useCountries();

  return (
    <div className="container">
      <div className="flex flex-col md:flex-row md:justify-between gap-10 mb-12">
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <RegionFilter selectedRegion={selectedRegion} onRegionChange={setSelectedRegion} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
}

export default Home;
