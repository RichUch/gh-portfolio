import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from "./pages/Home";
import './styles/styles.css';
import Navbar from "./components/ui/Navbar"; // Importing Navbar component
import Footer from "../src/components/ui/Footer";


function App() {
  return (
    <div>
      <Navbar />
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
