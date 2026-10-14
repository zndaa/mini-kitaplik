import React from "react";

function KitapKarti({ baslik, yazar, kategori, id, favorideMi, onToggleFavori }) {
  return (
    <div className={`kitap-karti ${favorideMi ? "favoride" : ""}`}>
      <div className="kitap-bilgi">
        <h3>{baslik}</h3>
        <p>{yazar} · {kategori}</p>
      </div>
      <button
        className={`favori-btn ${favorideMi ? "secili" : ""}`}
        onClick={() => onToggleFavori(id)}
      >
        {favorideMi ? "★ Favoride" : "☆ Favori Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;