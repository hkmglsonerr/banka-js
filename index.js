let bakiye = 1000; // Başlangıçta varsayılan bakiye
let devam = true;
// parseint tam sayıya çevirir
while (devam) {
  // Kullanıcıya işlem seçeneklerini göster
  console.log("1. Bakiye sorgulama");
  console.log("2. Para çekme");
  console.log("3. Para yatırma");
  console.log("4. Çıkış yap");

  // Kullanıcıdan işlem seçmesini iste
  const secim = parseInt(prompt("Lütfen bir işlem seçin:"));

  if (secim === 1) {
    alert("Bakiyeniz: " + bakiye + " TL");
  } else if (secim === 2) {
    const cekilecekMiktar = parseInt(
      prompt("Çekmek istediğiniz miktarı girin:")
    );
    if (cekilecekMiktar <= 0) {
      alert("Geçersiz miktar! Lütfen pozitif bir miktar girin.");
    } else if (cekilecekMiktar > bakiye) {
      alert("Cebinde paran mı var köpeek");
    } else {
      bakiye -= cekilecekMiktar;
      alert(cekilecekMiktar + " TL çekildi. Yeni bakiyeniz: " + bakiye + " TL");
    }
  } else if (secim === 3) {
    const yatirilacakMiktar = parseInt(
      prompt("Yatırmak istediğiniz miktarı girin:")
    );
    if (yatirilacakMiktar <= 0) {
      alert("Geçersiz miktar! Lütfen pozitif bir miktar girin.");
    } else {
      bakiye += yatirilacakMiktar;
      alert(
        yatirilacakMiktar + " TL yatırıldı. Yeni bakiyeniz: " + bakiye + " TL"
      );
    }
  } else if (secim === 4) {
    devam = false;
    alert("Çıkış yapılıyor...");
  } else {
    alert("Geçersiz bir seçenek girdiniz. Lütfen tekrar deneyin.");
  }
}
