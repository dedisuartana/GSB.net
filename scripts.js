// scripts.js

// Tunggu hingga seluruh konten DOM ter-load
document.addEventListener('DOMContentLoaded', () => {
  // Ambil semua tombol dalam menu-card
  document.querySelectorAll('.menu-card button').forEach(btn => {
    btn.addEventListener('click', function() {
      // Ambil elemen ikon di dalam tombol
      const icon = this.querySelector('i');
      let redirectUrl = '#';

      if (icon.classList.contains('fa-users')) {
        // Daftar anggota (Google Spreadsheet)
        redirectUrl = 'daftaranggota.html';
      }
      else if (icon.classList.contains('fa-file-alt')) {
        // Info Regulasi (ganti dengan path sebenarnya)
        redirectUrl = 'cageran.html';
      }
      else if (icon.classList.contains('fa-calendar-alt')) {
        // Event Terupdate (ganti dengan URL sistem Anda)
        redirectUrl = 'event.html';
      }

      // Buka URL di tab baru
      window.open(redirectUrl, '_blank');
    });
  });
});
