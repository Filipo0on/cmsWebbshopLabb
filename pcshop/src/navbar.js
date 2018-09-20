import React from 'react';
import { NavLink } from 'react-router-dom';
class Navbar extends React.Component{
    render () {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" to="/">Tech Masters</NavLink>

                    </div>
                    <ul className="nav navbar-nav">

                        <li><NavLink to="/datorer">Datorer</NavLink></li>
                        <li><NavLink to="/bild">Bild</NavLink></li>
                        <li><NavLink to="/ljud">Ljud</NavLink></li>



                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><NavLink to="/kundvagn"><span className="glyphicon glyphicon-shopping-cart"></span> Kundvagn</NavLink></li>


                    </ul>
                </div>
            </nav>
        );
    }

}
export default Navbar;