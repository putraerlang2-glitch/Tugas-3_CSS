$(document).ready(function () {
  $('#toggleJadwal').click(function () {
    $('#jadwalTable').toggle();
  });

  $('#kontakForm').submit(function (event) {
    event.preventDefault();

    const nama = $('#nama').val().trim();
    const email = $('#email').val().trim();

    if (!nama || !email) {
      alert('Nama dan email wajib diisi!');
      return;
    }

    alert('Terima kasih, ' + nama + '!');
  });
});