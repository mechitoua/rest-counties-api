import { useState, useRef, useEffect } from 'react';

interface RegionFilterProps {
  selectedRegion: string;
  onRegionChange: (region: string) => void;
}

const regions = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function RegionFilter({ selectedRegion, onRegionChange }: RegionFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[200px] py-4 px-6 rounded-md shadow-sm bg-white dark:bg-dark-blue text-very-dark-blue-light 
                 dark:text-white flex items-center justify-between focus:outline-none focus:ring-2 
                 focus:ring-gray-200 dark:focus:ring-gray-700"
      >
        <span>{selectedRegion || 'Filter by Region'}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-[200px] rounded-md shadow-lg bg-white dark:bg-dark-blue">
          <ul className="py-2">
            {regions.map((region) => (
              <li key={region}>
                <button
                  onClick={() => {
                    onRegionChange(region);
                    setIsOpen(false);
                  }}
                  className="w-full px-6 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700
                           text-very-dark-blue-light dark:text-white"
                >
                  {region}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RegionFilter;
