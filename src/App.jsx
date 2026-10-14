import { useState, useEffect } from "react";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListe from "./components/KitapListe";
import FavoriPaneli from "./components/FavoriPaneli";
import "./App.css";

const SABIT_KITAPLAR = [
  { id: 1, baslik: "React'e Giriş", yazar: "D. Usta", kategori: "Web" },
  { id: 2, baslik: "İleri JavaScript", yazar: "S. Kılıç", kategori: "Web" },
  { id: 3, baslik: "Veri Yapıları", yazar: "A. Demir", kategori: "CS" },
  { id: 4, baslik: "Algoritmalar", yazar: "E. Kaya", kategori: "CS" },
  { id: 5, baslik: "UI/UX Temelleri", yazar: "N. Akın", kategori: "Tasarım" }
];

function App() {
  // localStorage'dan son arama metnini okuma
  const [aramaMetni, setAramaMetni] = useState(() => {
    return localStorage.getItem("sonAramaMetni") || "";
  });

  const [kategori, setKategori] = useState("Tümü");

  // localStorage'dan favorileri okuma (ID dizisi olarak)
  const [favoriler, setFavoriler] = useState(() => {
    const kayitliFavoriler = localStorage.getItem("favoriler");
    return kayitliFavoriler ? JSON.parse(kayitliFavoriler) : [];
  });

  // aramaMetni değiştikçe localStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem("sonAramaMetni", aramaMetni);
  }, [aramaMetni]);

  // favoriler değiştikçe localStorage'a kaydetme
  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  // Favori Ekle / Çıkar
  const toggleFavori = (id) => {
    setFavoriler((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    );
  };

  // Filtreleme mantığı (Başlık ve Yazara göre arama + Kategori)
  const filtrelenmisKitaplar = SABIT_KITAPLAR.filter((kitap) => {
    const aramaUyumlu =
      kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase()) ||
      kitap.yazar.toLowerCase().includes(aramaMetni.toLowerCase());

    const kategoriUyumlu =
      kategori === "Tümü" || kitap.kategori === kategori;

    return aramaUyumlu && kategoriUyumlu;
  });

  // Favori olarak seçilen kitapların tam nesne listesi
  const favoriKitaplar = SABIT_KITAPLAR.filter((k) => favoriler.includes(k.id));

  return (
    <div className="container">
      <h1>Mini Kitaplık</h1>
      
      <div className="filtre-alani">
        <AramaCubugu aramaMetni={aramaMetni} setAramaMetni={setAramaMetni} />
        <KategoriFiltre kategori={kategori} setKategori={setKategori} />
      </div>

      <div className="icerik-alani">
        <KitapListe
          kitaplar={filtrelenmisKitaplar}
          favoriler={favoriler}
          onToggleFavori={toggleFavori}
        />
        <FavoriPaneli
          favoriKitaplar={favoriKitaplar}
          onToggleFavori={toggleFavori}
        />
      </div>
    </div>
  );
}

export default App;