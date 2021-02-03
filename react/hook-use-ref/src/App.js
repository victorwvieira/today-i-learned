import React, { useEffect, useState, useRef } from "react";

export default function App() {

  const [name, setName] = useState("");
  const countRender = useRef(0);

  useEffect(() => {
    countRender.current = countRender.current + 1;
  });
  
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <h2>{name}</h2>
      <h3>{countRender.current}</h3>
    </div>
  );
}