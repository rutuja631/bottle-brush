import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated } = useAuth0();
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <h1 className="appname">BottleBrush</h1>
      <div className="links">       
        <Link to="/"> Home </Link>
        {isAuthenticated && (
        <Link to="/contact"> ContactUs </Link>)}
        { isAuthenticated && (
        <p className="name">Welcome Rutuja Mane</p>
        )}
        {isAuthenticated && (
        <Link to="/cart"> </Link>
        )}
        { isAuthenticated && 
        <Button onClick={()=>navigate("/cart")} variant="contained" startIcon={<AddShoppingCartIcon />}>Cart</Button>
        }
     
        { isAuthenticated ? (
          <Button variant="contained" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
          </Button>
        ):(
          <Button variant="contained" onClick={() => {loginWithRedirect()
                                                      // navigate('/s')
                                                    }}>Log In</Button>
        )}
       
       
      </div>
    </div>
  );
};
