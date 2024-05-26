function jumlahVolumeDuaKubus(a, b) {
  var total, volumeA, volumeB;

  volumeA = a * a * a;
  volumeB = b * b * b;
  total = volumeA + volumeB;

  return total;
}

alert("ayo hitung volume 2 kubus !");

var lagi = true;
while (lagi == true) {
  var a = parseInt(prompt("Masukkan sisi kubus a : "));
  var b = parseInt(prompt("Masukkan sisi kubus b : "));

  alert("kubu sisi a : " + a + " dan kubus sisi b : " + b);

  alert("maka penjumlahan volume dari kedua kubus ialah " + jumlahVolumeDuaKubus(a, b));

  lagi = confirm("mau hitung lagi ?");
}

alert("terima kasih");
