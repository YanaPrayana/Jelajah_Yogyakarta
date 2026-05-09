import './index.css'; // Menghubungkan CSS yang sudah kita buat di atas

function App() {
  return (
    <>
      {/* NAVBAR */}
      {/* Mengapa pakai className? Karena 'class' adalah kata kunci cadangan di JavaScript */}
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3" href="/">Jelajah Jogja</a>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Wisata</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Open Trip</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Budaya</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Artikel</a></li>
              <li className="nav-item"><a className="nav-link" href="#">About</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
              <li className="nav-item"><a className="nav-link" href="#">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section className="hero-ghaffan">
          {/* Overlay untuk menggelapkan gambar background */}
          <div className="hero-overlay-ghaffan"></div>
          
          <div className="hero-content-ghaffan">
            <div className="salam-ghaffan">Sugeng Rawuh</div>
            
            {/* Tag <br /> harus ditutup sendiri di React agar tidak error */}
            <h1>Yogyakarta:<br />Harmoni Rasa, Jiwa, dan Tradisi</h1>
            
            <p>Jelajahi setiap sudut yang menyimpan cerita, nilai luhur, dan warisan tak ternilai.</p>
            
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-warning rounded-pill px-4 py-2 fw-bold">Jelajahi Budaya !</button>
              <button className="btn btn-outline-light rounded-pill px-4 py-2">Lihat Trip</button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;