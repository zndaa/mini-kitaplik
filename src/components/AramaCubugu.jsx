import React from "react";

function AramaCubugu({ aramaMetni, setAramaMetni }) {
  return (
    <input
      type="text"
      className="arama-input"
      placeholder="Başlık veya yazar ara..."
      value={aramaMetni}
      onChange={(e) => setAramaMetni(e.target.value)}
    />
  );
}

export default AramaCubugu;