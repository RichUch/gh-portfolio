import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import './styles/styles.css';
import Navbar from "./components/ui/Navbar";
import Footer from "../src/components/ui/Footer";
import './i18n';
import { useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-200">
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen}/>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-10"
          onClick={() => setIsOpen(false)} // Clicking it closes the menu
        ></div>
      )}
      <Home />
      <Footer/>
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
