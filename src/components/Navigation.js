import { NavLink } from "react-router-dom";
import css from './styles/Navigation.module.css';

function Navigation() {
    return(
        <nav className={css.navContainer}>
            <div>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/shop'}>Shop</NavLink>
                <NavLink to={'/cart'}>Cart</NavLink>
            </div>
        </nav>
    );
}

export default Navigation;