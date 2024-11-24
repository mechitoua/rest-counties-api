import { Link } from 'react-router-dom';
import { Country } from '@/types';

interface CountryCardProps {
  country: Country;
}

function CountryCard({ country }: CountryCardProps) {
  return (
    <Link
      to={`/country/${country.cca3}`}
      className="bg-white dark:bg-dark-blue rounded-md shadow-sm overflow-hidden hover:shadow-md 
                transition-shadow duration-300"
    >
      <div className="aspect-[5/3] overflow-hidden">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 pb-8">
        <h2 className="font-extrabold text-lg mb-4">{country.name.common}</h2>
        <div className="space-y-1 text-sm">
          <p>
            <span className="font-semibold">Population: </span>
            {country.population.toLocaleString()}
          </p>
          <p>
            <span className="font-semibold">Region: </span>
            {country.region}
          </p>
          <p>
            <span className="font-semibold">Capital: </span>
            {country.capital?.join(', ') || 'N/A'}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default CountryCard;
