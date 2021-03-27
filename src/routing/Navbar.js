import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link to="/Contactdata" className="nav-link">Contact App</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/RecipeApp" className="nav-link">Recipe App</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Table" className="nav-link">Table App</Link>
                    </li>
                    <li className="nav-item active">
                        <Link to="/Boot" className="nav-link">Boot App</Link>
                    </li>
                </ul>
            </div>
        </nav>  
        </>
    )
}
