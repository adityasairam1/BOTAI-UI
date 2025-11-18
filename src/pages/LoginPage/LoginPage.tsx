import { Link, useNavigate } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import type { Field } from "../../components/DynamicForm/DynamicForm";
import { login } from "../../api/auth"; // <-- IMPORT LOGIN API
import { useState } from "react";
import "./LoginPage.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const loginFields: Field[] = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
    },
  ];

  const handleLogin = async (data: any) => {
    setError("");

    try {
      const result = await login(data); // <-- CALL API
      console.log("Login success:", result);

      alert("Login successful!");

      // Optional: save user to localStorage
      localStorage.setItem("user", JSON.stringify(result.user));

      // Redirect to dashboard or home
      navigate("/dashboard");
    } catch (err: any) {
      console.error("Login error:", err);
      setError(err.message);
    }
  };

  return (
    <div className="page-container">
      <div className="form-wrapper">

        <h2 className="form-title">Login</h2>

        {/* Show error */}
        {error && <p className="error-text">{error}</p>}

        <DynamicForm
          fields={loginFields}
          submitText="Login"
          onSubmit={handleLogin}
        />

        <p className="form-footer">
          Don't have an account? <Link to="/">Create one</Link>
        </p>
      </div>
    </div>
  );
}
