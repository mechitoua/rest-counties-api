# REST Countries API with Theme Switcher

A modern web application that displays information about countries using the REST Countries API. Built with React, TypeScript, and Tailwind CSS.

![Preview](./public/desktop-preview.jpg)

## Features

- 🌍 View all countries from the API on the homepage
- 🔍 Search for a country using an input field
- 🗺️ Filter countries by region
- 🌙 Toggle between light and dark mode
- 📱 Fully responsive design
- ⚡ Fast performance with static data
- 🎨 Clean and modern UI
- ♿ Accessible design

## Tech Stack

- **React** - Frontend framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Vite** - Build tool

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- pnpm (v6 or higher)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/rest-countries-api.git
cd rest-countries-api
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Project Structure

```
rest-countries-api/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable UI components
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript types
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
└── package.json        # Dependencies and scripts
```

## Components

- **Header** - App title and theme switcher
- **SearchBar** - Country search functionality
- **RegionFilter** - Region-based filtering
- **CountryCard** - Country preview card
- **CountryDetail** - Detailed country information

## Custom Hooks

- **useDarkMode** - Theme management
- **useCountries** - Countries data and filtering
- **useCountryDetail** - Single country data

## Development

```bash
# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [REST Countries API](https://restcountries.com) for the country data
- [Frontend Mentor](https://www.frontendmentor.io) for the design inspiration
