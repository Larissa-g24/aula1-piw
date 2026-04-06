import React, { useState } from "react";

function MeuContador() {
  const [contador, setContador] = useState(0);

  function contar() {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "4em",
      }}
    >
      <h1>CONTADOR: {contador}</h1>
      <button onClick={contar}>CONTAR</button>
    </div>
  );
}

export default MeuContador;
