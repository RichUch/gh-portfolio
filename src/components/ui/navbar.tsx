const Navbar = () => {
    return (
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Richardnak Uch</div>
            <nav>
              <ul className="flex space-x-4">
                <li className="hover:bg-primary">
                  <a href="#about">
                    About
                  </a>
                </li>
                <li className="hover:bg-primary">
                  <a href="#skills">
                    Skills
                  </a>
                </li>
                <li className="hover:bg-primary">
                  <a href="#projects">
                    Projects
                  </a>
                </li>
                <li className="hover:bg-primary">
                  <a href="#contact">
                    Contact
                  </a>
                </li>
                
                <li className="hover:bg-primary">
                  <a href="https://richuch.github.io/gh-portfolio/" target="_blank" rel="noopener noreferrer">Github Pages</a>
                </li>
              </ul>
            </nav>
        </div>
      </header>
    );
  };
  
  export default Navbar;