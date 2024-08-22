import { logoURL } from "../Constants/Constants";
import "./Header.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import {CategoryDataContext} from '../Context/Context'

const Header = () => {
  const listOfCategoryData = useContext(CategoryDataContext)
  return (
    <div>
      <header className="header">
        <img className="logo" alt="Logo" src={logoURL} />
        <nav className="nav">
          <ul>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Shop by category</button>
                <div class="dropdown-content">
                  {listOfCategoryData.map((item)=>(
                    <a key={item.itemNo} href={`/product/${item.categoryName}`}>{item.categoryName}</a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <div class="dropdown">
                <button class="dropbtn">Shop by style</button>
                <div class="dropdown-content">
                  <a href="/celeste">Celeste</a>
                  <a href="/modernpolki">Modern polki</a>
                  <a href="/glamdays">Glamdays</a>
                </div>
              </div>
            </li>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
