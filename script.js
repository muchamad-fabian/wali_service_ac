/* =========================================================
   GANTI NOMOR WHATSAPP DI SINI
   Format: kode negara 62 + nomor tanpa angka 0 di depan
   Contoh: nomor 0812-3456-7890 menjadi "6281234567890"
========================================================= */
const CONFIG = {
  whatsappNumber: "6282338149282", // <-- GANTI dengan nomor WhatsApp asli WALI TEHNIK
  displayNumber: "+62823-3814-9282" // <-- tampilan nomor di bagian kontak, samakan dengan nomor di atas
};

document.getElementById('year').textContent = new Date().getFullYear();

const displayEl = document.querySelector('[data-wa-number-display]');
if (displayEl) displayEl.textContent = CONFIG.displayNumber;

document.querySelectorAll('[data-wa]').forEach(function (el) {
  const msg = el.getAttribute('data-wa-msg') || 'Halo Admin WALI TEHNIK, saya ingin bertanya tentang layanan servis.';
  el.setAttribute('href', 'https://wa.me/' + CONFIG.whatsappNumber + '?text=' + encodeURIComponent(msg));
  el.setAttribute('target', '_blank');
  el.setAttribute('rel', 'noopener');
});
