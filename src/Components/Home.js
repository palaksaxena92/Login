import React from "react";

function Home() {
  const handleClick=()=>{
    localStorage.clear();
    window.location.reload();
    }
  return (
    <>
      <h1>Login Successfully</h1>
    <button onclick={handleClick}>Logout</button>
    </>
  );
}

export default Home;
