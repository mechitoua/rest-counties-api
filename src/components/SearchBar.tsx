interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
}

function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-dark-gray dark:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search for a country..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full md:w-[480px] py-4 pl-16 pr-4 rounded-md shadow-sm bg-white dark:bg-dark-blue 
                 text-very-dark-blue-light dark:text-white placeholder-dark-gray dark:placeholder-white
                 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      />
    </div>
  );
}

export default SearchBar;
