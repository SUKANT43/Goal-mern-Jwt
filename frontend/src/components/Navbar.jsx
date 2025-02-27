import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <nav className="flex justify-between p-4 bg-gray-800 text-white">
            <h2 className="text-lg font-bold">MERN Goals</h2>
            <div>
                {localStorage.getItem("token") ? (
                    <>
                        <Link className="mr-4" to="/">Home</Link>
                        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
                    </>
                ) : (
                    <>
                        <Link className="mr-4" to="/login">Login</Link>
                        <Link className="mr-4" to="/register">Register</Link>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
