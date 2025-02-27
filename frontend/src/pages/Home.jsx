import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
    const [goals, setGoals] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        loadGoals();
    }, []);

    const loadGoals = async () => {
        try {
            const token = localStorage.getItem("token");
            const res = await axios.get("http://localhost:2008/api/goal/get", {
                headers: { Authorization: `Bearer ${token}` }
            });
            setGoals(res.data.goals);
        } catch (err) {
            console.error(err);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!text) return;
        const token = localStorage.getItem("token");
        await axios.post("http://localhost:2008/api/goal/post", { text }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        setText("");
        loadGoals();
    };

    const handleDelete = async (id) => {
        const token = localStorage.getItem("token");
        await axios.delete(`http://localhost:2008/api/goal/delete/${id}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        loadGoals();
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl">Your Goals</h2>
            <form onSubmit={handleSubmit} className="mt-4">
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter goal..."
                    className="border p-2 mr-2"
                />
                <button className="bg-green-500 px-3 py-2 rounded text-white">Add Goal</button>
            </form>
            <ul className="mt-4">
                {goals.map(goal => (
                    <li key={goal._id} className="flex justify-between p-2 border-b">
                        {goal.text}
                        <button onClick={() => handleDelete(goal._id)} className="bg-red-500 px-3 py-1 rounded">Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Home;
