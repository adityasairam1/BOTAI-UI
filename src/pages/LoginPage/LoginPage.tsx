import { Link } from "react-router-dom";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import type { Field } from "../../components/DynamicForm/DynamicForm";
import "./LoginPage.css";

export default function LoginPage() {

  const loginFields: Field[] = [
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email"
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password"
    }
  ];

  const handleLogin = (data: any) => {
    console.log("Login data:", data);
  };

  return (
    <div className="page-container">
      <div className="form-wrapper">
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
