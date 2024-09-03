import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const linkClass = ({ isActive }) => 
        `text-white font-semibold `;

    return (
        <nav className="bg-indigo-700">
        <div>
            <div>
            <div className="flex-1 flex items-center justify-center ">
                <div className="md:ml-auto flex space-x-4">
                <NavLink to="/" className={linkClass}>Home</NavLink>
                <NavLink to="/users" className={linkClass}>Users</NavLink>
                <NavLink to="/comments" className={linkClass}>Comments</NavLink>
                <NavLink to="/photos" className={linkClass}>Photos</NavLink>
                </div>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
