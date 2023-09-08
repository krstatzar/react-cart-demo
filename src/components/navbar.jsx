import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import { ShopContext } from '../shop-context';
import logo from "../assets/Logo.svg";

export const Navbar = () => {

    const {getTotalCount } = useContext(ShopContext);
    const totalCount = getTotalCount();

return(
    <div className="navbar">
        <div className="logo"><Link to={"/"}><img src={logo} alt="Logo" /></Link></div>
        <div className="links">
<Link to={"/"}>Shop</Link>
<Link to={"/cart"}><ShoppingCart size={30} color="red"/></Link>
{totalCount > 0 ? (
<div className="nitems">
    <div className="innerNumber">{totalCount}</div>
   
    </div>
) : (<div className="nitems-zero">


</div>)
}


        </div>
    </div>
)
}

