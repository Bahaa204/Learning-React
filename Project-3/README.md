# 🍳 CookLab

A delightful React application that brings cooking to life with an AI-powered bear chef named Daaboolos! CookLab features a comprehensive recipe collection, intelligent filtering, favorites management, and AI-integration through an interactive chatbot interface.

![CookLab Logo](assets/Images/logo.png)

## 📚 Project Information

This project is a port to react of a project developed as part of the **COSC333-Web Programming** course at RHU University in Lebanon.
**Repository**: [CookLab](https://github.com/Bahaa204/CookLab.git)

## ✨ Features

### 📚 Recipe Management

- **Extensive Recipe Collection**: Browse through a curated collection of delicious recipes
- **Smart Filtering**: Filter recipes by name, meal type, and preparation time
- **Favorites System**: Save your favorite recipes with local storage persistence
- **Detailed Recipe Cards**: View ingredients, instructions, and preparation details

### 🤖 AI-Powered Features

- **Daaboolos Chatbot**: Interactive AI bear chef that provides help to users and can generate recipes
- **Recipe Requests**: Submit custom recipe requests through an intuitive form
- **AI Integration**: Powered by Google's Gemini AI API for intelligent recipe help and generation

### 🎨 User Experience

- **Responsive Design**: Optimized for desktop and mobile devices
- **Intuitive Navigation**: Clean, user-friendly interface with React Router
- **Interactive Modals**: Detailed recipe viewing with modal overlays
- **Smooth Animations**: Engaging CSS animations and transitions

## 🛠️ Tech Stack

### Frontend

- **React 19** - Modern React with latest features
- **React Router DOM** - Client-side routing
- **React Icons** - Beautiful icon library
- **CSS Modules** - Scoped styling

### AI & APIs

- **Google Generative AI (Gemini)** - AI-powered recipe generation
- **Custom AI Helpers** - Specialized recipe AI logic

### Build & Development

- **Vite** - Fast build tool and dev server
- **ESLint** - Code linting and quality
- **Vite Plugin React** - Optimized React development

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Google Gemini API key (for AI features)

## 🚀 Getting Started

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/learning-react.git
   cd learning-react/Project-3
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:

   ```env
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to the link shown or press `o + enter` in the terminal

## 📁 Project Structure

```
Project-3/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Footer.jsx
│   │   ├── Form.jsx
│   │   ├── Header.jsx
│   │   ├── Modal.jsx
│   │   ├── NavBar.jsx
│   │   └── RecipeModal.jsx
│   ├── Pages/              # Route components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── RecipeBook.jsx
│   │   ├── Request.jsx
│   │   └── Daaboolos.jsx
│   ├── Helpers/            # Utility functions
│   │   ├── ai.js
│   │   ├── Data.json
│   │   └── Recipes.js
│   ├── assets/            # Static assets
│   │   ├── CSS/
│   │   ├── Images/
│   │   └── GIF/
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎯 Key Components

### Core Components

- **Header**: Navigation and branding
- **RecipeBook**: Main recipe browsing with filtering
- **RecipeModal**: Detailed recipe viewer
- **Daaboolos**: AI chatbot interface
- **Form**: Contact and recipe request forms

### AI Integration

- **Gemini AI**: Powers the Daaboolos chatbot for recipe generation
- **Smart Responses**: Context-aware recipe suggestions
- **Session Management**: Persistent chat history

## 🌟 Features in Detail

### Recipe Filtering System

- **Name Search**: Real-time recipe name filtering
- **Meal Type Filter**: Breakfast, Lunch, Dinner, Snacks
- **Prep Time Filter**: Quick recipes to elaborate meals

### AI Recipe Generation

- **Natural Language Processing**: Understand cooking requests
- **Custom Recipe Creation**: Generate recipes based on user preferences
- **Ingredient Suggestions**: Smart ingredient recommendations

### User Experience

- **Local Storage**: Persistent favorites across sessions
- **Responsive Design**: Mobile-first approach
- **Smooth Navigation**: Single-page application feel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- **Team**: Bahaa, Mohammad Hassanieh, Osama Ayoub - The creative minds behind CookLab
- **Daaboolos**: Our AI bear chef who makes cooking fun!
- **Google Gemini AI**: For powering intelligent recipe generation
- **React Community**: For the amazing framework and ecosystem

---

**Made with ❤️ by students who love good food and coding**
