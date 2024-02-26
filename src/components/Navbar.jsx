import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext";

const Navbar = () => {
  const { setView } = useContext(FavoritosContext);
  
  const handleNavLink = ( clickedSection ) => {
    setView(clickedSection)
  }
  return (
    <nav className="navbar">
      <Link to="/" onClick={() => handleNavLink('Home')}> Home </Link> | <Link to="/favoritos" onClick={() => handleNavLink('Favorites')}> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
