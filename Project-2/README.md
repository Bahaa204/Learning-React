# 🎬 MovieHub - Movie Discovery App

A modern React application for discovering and managing your favorite movies! MovieHub leverages The Movie Database (TMDb) API to provide users with an extensive collection of movies, powerful search capabilities, and a personalized favorites system.

## ✨ Features

### 🎭 Movie Discovery

- **Popular Movies**: Browse trending and popular movies sorted by release year
- **Movie Search**: Real-time search functionality across TMDb's extensive database
- **Detailed Movie Cards**: Rich movie information including posters, ratings, and release dates
- **Responsive Grid Layout**: Optimized viewing experience across all devices

### ⭐ Favorites Management

- **Add to Favorites**: Heart movies you love with one click
- **Persistent Storage**: Favorites saved locally and persist across sessions
- **Favorites Page**: Dedicated page to view all your favorite movies
- **Quick Access**: Easy navigation between discovery and favorites

### 🎨 User Experience

- **Modern UI**: Clean, intuitive interface with smooth animations
- **Loading States**: Elegant loading indicators during API calls
- **Error Handling**: User-friendly error messages and retry options
- **Mobile-First Design**: Fully responsive for mobile and desktop

## 🛠️ Tech Stack

### Frontend

- **React 19** - Latest React with modern hooks and features
- **React Router DOM** - Client-side routing for navigation
- **Context API** - Global state management for movies and favorites

### APIs & Data

- **TMDb API** - The Movie Database API for movie data
- **Local Storage** - Client-side persistence for favorites

### Build & Development

- **Vite** - Lightning-fast build tool and development server
- **ESLint** - Code quality and linting
- **Vite Plugin React** - Optimized React development experience

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- TMDb API key (free to obtain)

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/learning-react.git
   cd learning-react/Project-2
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_MOVIEDB_API_KEY=your_tmdb_api_key_here
   ```

   Get your free API key from [TMDb](https://www.themoviedb.org/settings/api)

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

## 📁 Project Structure

```
Project-2/
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── NavBar.jsx
│   │   └── SearchBar.jsx
│   ├── Pages/              # Route components
│   │   ├── Home.jsx
│   │   └── Favorites.jsx
│   ├── contexts/           # React Context providers
│   │   ├── Contexts.js     # Context definitions
│   │   └── MoviesContext.jsx # Movie state management
│   ├── helpers/            # Utility functions
│   │   └── api.js          # TMDb API integration
│   ├── assets/            # Static assets
│   │   ├── CSS/
│   │   └── Images/
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎯 Key Components

### Core Components

- **MovieCard**: Displays individual movie information with favorite toggle
- **MovieGrid**: Responsive grid layout for movie collections
- **SearchBar**: Real-time search with debounced API calls
- **NavBar**: Navigation between Home and Favorites pages

### State Management

- **MoviesContext**: Global state for movies, favorites, loading, and errors
- **Local Storage**: Persistence for user favorites across sessions

### API Integration

- **TMDb Popular Movies**: Fetches trending movies on app load
- **TMDb Search**: Real-time movie search functionality
- **Error Handling**: Graceful handling of API failures

## 🌟 Features in Detail

### Movie Discovery

- **Popular Movies Feed**: Automatically loads and displays popular movies
- **Search Functionality**: Instant search with results updating as you type
- **Movie Sorting**: Movies sorted by release year (newest first)

### Favorites System

- **One-Click Favorites**: Heart icon to add/remove favorites
- **Visual Feedback**: Clear indication of favorite status
- **Persistent Storage**: Favorites survive browser refreshes

### User Interface

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Loading States**: Smooth loading animations during data fetching
- **Error States**: User-friendly error messages with retry options

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **TMDb**: For providing the comprehensive movie database API
- **React Community**: For the amazing framework and ecosystem
- **Course Instructor**: For guidance in the COSC333-Web Programming course

---

**Built with ❤️ as part of web programming coursework**
