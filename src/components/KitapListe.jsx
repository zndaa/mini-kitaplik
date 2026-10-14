import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListe({ kitaplar, favoriler, onToggleFavori }) {
  return (
    <div className="kitap-listesi">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          id={kitap.id}
          baslik={kitap.baslik}
          yazar={kitap.yazar}
          kategori={kitap.kategori}
          favorideMi={favoriler.includes(kitap.id)}
          onToggleFavori={onToggleFavori}
        />
      ))}
    </div>
  );
}

export default KitapListe;