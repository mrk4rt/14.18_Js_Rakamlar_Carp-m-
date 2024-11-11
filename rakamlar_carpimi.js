let sayi = prompt("Bir sayı girin: ");
sayi = parseInt(sayi);

if (isNaN(sayi) || sayi <= 0) {
  console.log("Geçerli bir pozitif tam sayı girin.");
} else {
  let carpım = 1;
  let gecici = sayi;

  while (gecici > 0) {
    let rakam = gecici % 10; // Sayının son basamağını alıyoruz.
    carpım *= rakam; // Çarpım ile bu rakamı çarpıyoruz.
    gecici = Math.floor(gecici / 10); // Sonra sayıyı 10'a bölüyoruz.
  }

  console.log(`Sayının rakamlarının çarpımı: ${carpım}`);
}
