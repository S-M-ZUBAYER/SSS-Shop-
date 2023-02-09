import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import img from "../../../Assets/img/sss.jpg"

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)
    return (
        <div className="sticky top-0 z-40">
            <div className="navbar text-slate-400 bg-gradient-to-t from-black via-slate-800 to-gray-900">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/products'>products</Link></li>
                            <li><Link to='/dashboard'>Dashboard</Link></li>
                            <li><Link to='/blog'>Blog</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl"><img className="w-12 h-12 rounded-xl mr-2" src={img} ></img>SSS Shop</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/products'>products</Link></li>
                        <li><Link to='/dashboard'>Dashboard</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>
                {/* <input type="checkbox" className="toggle toggle-sm ml-10" checked /> */}
                <div className="navbar-end ">
                    {user?.uid ?
                        <>
                            <img title={user.displayName} className="w-8 h-8 rounded-2xl mr-2" src={user?.photoURL} ></img>
                            <button onClick={() => logout()} className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-red-400 via-amber-300 to-lime-300 text-black lg:mr-3">Log Out</button>
                        </> :
                        <Link to='/login' className="btn-small px-3 py-1 rounded-tl-xl rounded-br-xl bg-gradient-to-t from-lime-400 via-teal-300 to-emerald-600 text-black lg:mr-3">Log In</Link>
                    }


                </div>

            </div>

        </div>
    );
};

export default Navbar;