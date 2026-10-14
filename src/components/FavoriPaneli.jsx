import React from "react";

function FavoriPaneli({ favoriKitaplar, onToggleFavori }) {
  return (
    <div className="favori-paneli">
      <h2>Favoriler ({favoriKitaplar.length})</h2>
      {favoriKitaplar.length === 0 ? (
        <p className="bos-mesaj">Henüz favori eklenmedi.</p>
      ) : (
        <ul>
          {favoriKitaplar.map((kitap) => (
            <li key={kitap.id}>
              <span>{kitap.baslik}</span>
              <button onClick={() => onToggleFavori(kitap.id)}>Kaldır</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FavoriPaneli;