import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/home";
import './styles/styles.css';
import Navbar from "./components/ui/navbar"; // Importing Navbar component


function App() {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
