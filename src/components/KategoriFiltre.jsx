import React from "react";

function KategoriFiltre({ kategori, setKategori }) {
  return (
    <select
      className="kategori-select"
      value={kategori}
      onChange={(e) => setKategori(e.target.value)}
    >
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="CS">CS</option>
      <option value="Tasarım">Tasarım</option>
    </select>
  );
}

export default KategoriFiltre;