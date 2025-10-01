import { useState } from "react";
import neLogo from "./ne.svg";

const App = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  const login = async (event) => {
    event.preventDefault();

    try {
      console.log(process.env.REACT_APP_API_BASEURL);
      const response = await fetch(`${process.env.REACT_APP_API_BASEURL}/api/user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword,
        }),
      });

      const data = await response.json();
      console.log("Login Response:", data);

      if (data?.isSuccess) {
        alert(data.message);
        // localStorage.setItem("token", data.responseData?.token);
        // window.location.href = "https://your-dashboard-url.com";
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Error submitting login.");
    }
  };

  const signup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://server-eight-nu-19.vercel.app/api/user/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: signupEmail,
          password: signupPassword,
        }),
      });

      const data = await response.json();
      console.log("Signup Response:", data);

      if (data?.isSuccess) {
        alert(data.message);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("Error submitting signup.");
    }
  };

  const getUsers = async () => {
    try {
      
      const res = await fetch(`${process.env.REACT_APP_API_BASEURL}/api/user/profile`);
      const data = await res.json();
      console.log("Users:", data?.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="formdiv">
      {/* Login Form */}
      <form style={{ padding: "32px" }} onSubmit={login}>
        <div className="form2">
          <img src={neLogo} height="42px" width="24px" alt="Emblem" />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontWeight: 400, lineHeight: "18px" }}>महाराष्ट्र राज्य विधी सेवा</span>
            <strong style={{ fontSize: "18px" }}>Maharashtra State Legal Services Authority</strong>
            <span style={{ fontWeight: 400, lineHeight: "18px" }}>Government of Maharashtra</span>
          </div>
        </div>

        <div className="formTitle">Log in to your account!</div>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div>
            <label className="formFieldLabel">Email</label>
            <input
              type="email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="formFieldLabel">Password</label>
            <input
              type="password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" style={{ marginTop: "40px", marginBottom: "16px" }} className="btn-text">
          Login
        </button>

        <button type="button" className="btn-text" onClick={getUsers}>
          Get Users
        </button>
      </form>

    </div>
  );
};

export default App;
