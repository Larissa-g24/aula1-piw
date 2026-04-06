import React, { useState, useEffect } from "react";

function CityCard({ nome, imagem, votos }) {
  return (
    <div style={styles.card}>
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} style={styles.img} />
      <p>VOTOS: {votos}</p>
    </div>
  );
}

function App() {
  const [votos, setVotos] = useState({
    quixada: 0,
    quixeramobim: 0,
    banabuiu: 0,
    iguatu: 0,
  });

  const [encerrado, setEncerrado] = useState(false);

  function votar(cidade) {
    if (encerrado) return;

    setVotos((prev) => ({
      ...prev,
      [cidade]: prev[cidade] + 1,
    }));
  }

  useEffect(() => {
    const valores = Object.values(votos);
    const max = Math.max(...valores);

    if (max >= 10) {
      setEncerrado(true);

      const cidades = Object.keys(votos);

      const maisVotada = cidades.reduce((a, b) =>
        votos[a] > votos[b] ? a : b
      );

      const menosVotada = cidades.reduce((a, b) =>
        votos[a] < votos[b] ? a : b
      );

      alert(`🥇 Mais votada: ${maisVotada}\n🥉 Menos votada: ${menosVotada}`);
    }
  }, [votos]);

  return (
    <div style={styles.container}>
      <h1>Sistema de Votação</h1>

      <div style={styles.cards}>
        <CityCard
          nome="Quixadá"
          imagem="https://upload.wikimedia.org/https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZMFTE9EcuwHpdqvHe9F4eQK50Qz0_HCZ5Qg&swikipedia/commons/5/5c/Quixada.jpg"
          votos={votos.quixada}
        />

        <CityCard
          nome="Quixeramobim"
          imagem="https://upload.wikimedia.org/wikipedia/commons/2/2b/Quixeramobim.jpg"
          votos={votos.quixeramobim}
        />

        <CityCard
          nome="Banabuiú"
          imagem="https://upload.wikimedia.org/wikipedia/commons/0/0c/Banabuiu.jpg"
          votos={votos.banabuiu}
        />

        <CityCard
          nome="Iguatu"
          imagem="https://upload.wikimedia.org/wikipedia/commons/7/7b/Iguatu.jpg"
          votos={votos.iguatu}
        />
      </div>

      <div style={styles.botoes}>
        <button onClick={() => votar("quixada")}>Quixadá</button>
        <button onClick={() => votar("quixeramobim")}>Quixeramobim</button>
        <button onClick={() => votar("banabuiu")}>Banabuiú</button>
        <button onClick={() => votar("iguatu")}>Iguatu</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    width: "200px",
  },
  img: {
    width: "100%",
    height: "120px",
    objectFit: "cover",
  },
  botoes: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
};

export default App;
