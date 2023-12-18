import { useState } from "react";
import "./App.css";
import QRCode from "react-qr-code";

function App() {
  const [text, setText] = useState("");
  function generateQR(e) {
    setText();
  }

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <body className="body" style={{ backgroundColor: "brown" }}>
      <h1 className="header">QR KOD OLUŞTURUCU</h1>
      <div className="App">
        <div className="qr-code">
          <QRCode value={text} className="QrCode" />
        </div>
        <div className="input-here">
          <h3>Write Here --> </h3>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
      </div>
    </body>
  );
}

export default App;
