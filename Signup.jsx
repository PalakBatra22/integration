import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = () => {
    if (!email) return alert("Enter email");

    setLoading(true);

    setTimeout(() => {
      localStorage.setItem("user", email);
      navigate("/home");
    }, 600);
  };

  return (
    <div className="container">
      <h1>Welcome 👋</h1>

      <input
        type="email"
        placeholder="you@github.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="button" onClick={handleSignup} disabled={loading}>
        {loading ? "Signing you in..." : "Continue"}
      </button>
    </div>
  );
}

export default Signup;
