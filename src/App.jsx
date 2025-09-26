import { useEffect } from "react";
import * as Sentry from '@sentry/react';
import neLogo from "./ne.svg";

const App = () => {
  function login(event) {
    event.preventDefault();
    const username = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Dummy API endpoint
    const apiUrl = "https://server-eight-nu-19.vercel.app/api/user/create";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data?.isSuccess) {
          alert(data?.message);
          console.log("Response from API:", data);
          // localStorage.setItem("token", data.responseDate.token);
          // document.getElementById("responseMessage").innerText = "Logged in successfully!";
          // window.location.href = "https://upsthitee-dev-adminapp.internal.protossoft.com/";
        } else {
          alert(data?.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "Error submitting login.";
      });
  }
  function create(event) {
    event.preventDefault();
    const username = document.getElementById("cemail").value;
    const password = document.getElementById("cpassword").value;

    // Dummy API endpoint
    const apiUrl = "https://server-eight-nu-19.vercel.app/api/user/create";

    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: username,
        password: password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);

        if (data?.isSuccess) {
          alert(data?.message);
          console.log("Response from API:", data);
          // localStorage.setItem("token", data.responseDate.token);
          // document.getElementById("responseMessage").innerText = "Logged in successfully!";
          // window.location.href = "https://upsthitee-dev-adminapp.internal.protossoft.com/";
        } else {
          alert(data?.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
        document.getElementById("responseMessage").innerText = "Error submitting login.";
      });
  }

  const getUsers = () => {
    fetch("https://server-eight-nu-19.vercel.app/api/user/profile").then((res) => res.JSON()).then((res) => console.log(res))
  }

  return (
    <>
      <div className="formdiv">
        <form id="loginForm" style={{ padding: "32px" }} onSubmit={login}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="email" className="formFieldLabel">Email</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="password" className="formFieldLabel">Password</label>
              <input type="password" id="password" name="password" required />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="checkbox" name="RememberMe" id="RememberMe" className="checkBoxStyle2" />
              <label htmlFor="RememberMe" className="formFieldLabel">Remember Me</label>
            </div>
          </div>

          <button type="submit" style={{ marginTop: "40px", marginBottom: "16px" }} className="btn-text" >
            Login
          </button>

          <button className="btn-text"  onClick={getUsers}>Get Users</button>
        </form>
        <form id="loginForm" style={{ padding: "32px" }} onSubmit={login}>
          <div className="form2">
            <img src={neLogo} height="42px" width="24px" alt="Emblem" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 400, lineHeight: "18px" }}>महाराष्ट्र राज्य विधी सेवा</span>
              <strong style={{ fontSize: "18px" }}>Maharashtra State Legal Services Authority</strong>
              <span style={{ fontWeight: 400, lineHeight: "18px" }}>Government of Maharashtra</span>
            </div>
          </div>

          <div className="formTitle">Create your account!</div>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="email" className="formFieldLabel">Email</label>
              <input type="email" id="cemail" name="email" required />
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <label htmlFor="password" className="formFieldLabel">Password</label>
              <input type="password" id="cpassword" name="password" required />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <input type="checkbox" name="RememberMe" id="RememberMe" className="checkBoxStyle2" />
              <label htmlFor="RememberMe" className="formFieldLabel">Remember Me</label>
            </div>
          </div>

          <button type="submit" style={{ marginTop: "40px", marginBottom: "16px" }} className="btn-text" >
            Signup
          </button>

          <button className="btn-text"  onClick={create}>Get Users</button>
        </form>
      </div>
    </>
  );
};

export default App;
