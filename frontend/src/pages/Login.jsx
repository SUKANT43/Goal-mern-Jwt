import { use, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:2008/api/user/login", data);
             alert("Login Successful");
             navigate('/')
            localStorage.setItem("token", res.data.token);
        } catch (err) {
            alert("Invalid credentials");
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800">Login</h2>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                    type="email"
                    value={data.email}
                    placeholder="Email"
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <input
                    type="password"
                    value={data.password}
                    placeholder="Password"
                    onChange={(e) => setData({ ...data, password: e.target.value })}
                    className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 transition"
                >
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;
