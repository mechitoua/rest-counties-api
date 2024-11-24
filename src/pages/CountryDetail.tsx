import { useCountryDetail } from '@/hooks/useCountryDetail';
import { Link, useNavigate, useParams } from 'react-router-dom';

function CountryDetail() {
  const { countryCode } = useParams();
  const navigate = useNavigate();
  const { country, borderCountries } = useCountryDetail(countryCode);

  if (!country) return null;

  return (
    <div className="container py-12 md:py-20">
      <button
        onClick={() => navigate(-1)}
        className="mb-16 md:mb-20 px-8 py-2 bg-white dark:bg-dark-blue shadow-md rounded-md
                 flex items-center gap-3 hover:shadow-lg transition-shadow duration-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        Back
      </button>

      <div className="grid md:grid-cols-2 gap-8 md:gap-32">
        <img
          src={country.flags.svg}
          alt={country.flags.alt || `Flag of ${country.name.common}`}
          className="w-full h-auto shadow-md max-h-[400px] object-cover"
        />

        <div className="py-6 md:py-10">
          <h1 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8">
            {country.name.common}
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-x-24 mb-8 md:mb-16">
            <div className="space-y-3">
              <p>
                <span className="font-semibold">Native Name: </span>
                {Object.values(country.name.nativeName)
                  .map((name) => name.common)
                  .join(', ') || country.name.common}
              </p>
              <p>
                <span className="font-semibold">Population: </span>
                {country.population.toLocaleString()}
              </p>
              <p>
                <span className="font-semibold">Region: </span>
                {country.region}
              </p>
              <p>
                <span className="font-semibold">Sub Region: </span>
                {country.subregion}
              </p>
              <p>
                <span className="font-semibold">Capital: </span>
                {country.capital?.join(', ') || 'N/A'}
              </p>
            </div>

            <div className="space-y-3">
              <p>
                <span className="font-semibold">Top Level Domain: </span>
                {country.tld?.join(', ')}
              </p>
              <p>
                <span className="font-semibold">Currencies: </span>
                {Object.values(country.currencies)
                  .map((currency) => currency.name)
                  .join(', ')}
              </p>
              <p>
                <span className="font-semibold">Languages: </span>
                {Object.values(country.languages || {}).join(', ')}
              </p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
              <span className="font-semibold text-base whitespace-nowrap">Border Countries:</span>
              <div className="flex flex-wrap gap-2.5">
                {borderCountries.map((border) => (
                  <Link
                    key={border.cca3}
                    to={`/country/${border.cca3}`}
                    className="px-6 py-1.5 min-w-[96px] text-center bg-white dark:bg-dark-blue shadow-md rounded-sm
                             hover:shadow-lg transition-shadow duration-300 text-sm"
                  >
                    {border.name.common}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CountryDetail;
