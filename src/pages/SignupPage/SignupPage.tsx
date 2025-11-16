import DynamicForm from "../../components/DynamicForm/DynamicForm";
import type { Field } from "../../components/DynamicForm/DynamicForm";
import { signup } from "../../api/auth";
import "./SignupPage.css";

export default function SignupPage() {
  const signupFields: Field[] = [
    { name: "userName", label: "Username", type: "text", placeholder: "Choose a username" },
    { name: "email", label: "Email", type: "email", placeholder: "Enter your email" },
    { name: "password", label: "Password", type: "password", placeholder: "Enter a strong password" },
    { name: "firstName", label: "First Name", type: "text", placeholder: "Enter your first name" },
    { name: "lastName", label: "Last Name", type: "text", placeholder: "Enter your last name" },
  ];

  async function handleSignup(data: any) {
    try {
      console.log("Submitting signup data:", data);

      const result = await signup(data);

      console.log("Signup success:", result);
      alert("Account created successfully!");

      // redirect to login
      window.location.href = "/login";
    } catch (err: any) {
      console.error("Signup error:", err);
      alert("Signup failed: " + err.message);
    }
  }

  return (
    <div className="signup-page-container">
      <DynamicForm
        fields={signupFields}
        submitText="Create Account"
        onSubmit={handleSignup}
      />

      <p className="switch-text">
        Already registered? <a href="/login">Login</a>
      </p>
    </div>
  );
}
