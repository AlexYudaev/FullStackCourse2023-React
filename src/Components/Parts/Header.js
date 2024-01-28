import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="navigation">
            <NavLink to="/">Products</NavLink>
            <NavLink to="/orders">Orders</NavLink>
            <NavLink to="/users">Users</NavLink>
        </div>
    )
}

export default Header