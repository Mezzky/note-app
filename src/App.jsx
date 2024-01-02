// eslint-disable-next-line no-unused-vars
import React from 'react'

const App = () => {
  return (
    <div className="app">
    <h1>Catatan Belanja 📝</h1>
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
    <div className="list">
      <ul>
        <li>
          <input type="checkbox" checked="true" />
          <span style="text-decoration: line-through;">1 Kopi</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>5 Gula Pasir</span>
          <button>&times;</button>
        </li>
        <li>
          <input type="checkbox" />
          <span>3 Air Mineral</span>
          <button>&times;</button>
        </li>
      </ul>
    </div>
    <div className="actions">
      <select>
        <option value="input">Urutkan berdasarkan urutan input</option>
        <option value="name">Urutkan berdasarkan nama barang</option>
        <option value="checked">Urutkan berdasarkan ceklis</option>
      </select>
      <button>Bersihkan Daftar</button>
    </div>
    <footer className="stats">Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)</footer>
  </div>
  )
}

export default App
