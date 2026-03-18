import { useNavigate } from "react-router-dom";

function Dashboard() {
    const Navigate = useNavigate();
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome to Eco Learning Platform 🌱</p>
      <button onClick={() => Navigate("/quiz")}>
        Start Quiz
      </button>
    </div>

    
  );
}

export default Dashboard;