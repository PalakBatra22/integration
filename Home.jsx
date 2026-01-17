import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [repo, setRepo] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submitRepo = () => {
    if (!repo) return alert("Enter GitHub repository");

    setLoading(true);

    setTimeout(() => {
      console.log("Repo submitted:", repo);
      alert("Pipeline triggered 🚀");
      setLoading(false);
    }, 800);
  };

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div className="container">
      <h1>GitHub Repo</h1>

      <input
        type="text"
        placeholder="https://github.com/user/repo"
        value={repo}
        onChange={(e) => setRepo(e.target.value)}
      />

      <button type="button" onClick={submitRepo} disabled={loading}>
        {loading ? "Analyzing..." : "Submit"}
      </button>

      <button type="button" className="secondary" onClick={logout}>
        Logout
      </button>
    </div>
  );
}

export default Home;

