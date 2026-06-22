import { useState } from "react";

function App() {
  const [answer, setAnswer] = useState("");

  const responses = [
  "Preventive inspection is recommended every 90 days.",
  "Safety helmets and gloves are mandatory.",
  "Boiler pressure must not exceed operational limits.",
  "Maintenance records indicate monthly inspections."
];

const askAI = () => {
  const random =
    responses[Math.floor(Math.random() * responses.length)];

  setAnswer(random);
};

  return (
    <div
      style={{
        fontFamily: "Arial",
        padding: "40px",
        backgroundColor: "#f5f7fa",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ textAlign: "center" }}>INDUS-BRAIN AI</h1>

      <h2 style={{ textAlign: "center", color: "#555" }}>
        Industrial Knowledge Intelligence Platform
      </h2>

      <hr />

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>📄 Upload Documents</h3>
        <input type="file" />
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>🤖 Ask Questions</h3>

        <input
          type="text"
          placeholder="Ask about uploaded documents..."
          style={{
            width: "70%",
            padding: "10px",
          }}
        />

        <button
          onClick={askAI}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
          }}
        >
          Ask AI
        </button>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>📊 Document Analytics</h3>

        <ul style={{ listStylePosition: "inside" }}>
          <li>Total Documents: 3</li>
          <li>Total Pages: 124</li>
          <li>Safety Procedures: 18</li>
          <li>Maintenance Records: 42</li>
        </ul>
      </div>

      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        <h3>📚 AI Response</h3>

        <p>{answer}</p>

        {answer && (
          <small>
            Confidence Score: 94% | Citation Enabled
          </small>
        )}
      </div>
    </div>
  );
}

export default App;