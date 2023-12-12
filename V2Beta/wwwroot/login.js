let kullaniciAdiData,sifreData; // Global düzeyde tanımladık
//const firebase = require("firebase");
const firestore = firebase.firestore();
    // Belirli bir koleksiyon, belge ve alan için referans oluşturma
    // Firebase yapılandırması ve Firestore başlatma işlemleri...

const belirliAlanRef = firestore.collection('kutuphaneler').doc('talasKutuphanesi').collection('adminler').doc('admin1');

belirliAlanRef.get().then((doc) => {
  if (doc.exists) {
    kullaniciAdiData = doc.data().kullaniciAdi;
    sifreData = doc.data().sifre;
    // Veri çekme işlemi tamamlandıktan sonra validate() fonksiyonunu çağırın
    // Her ihtimale karşı bu aşamada verilerin atanıp atanmadığını kontrol edin
   validate();
  } 
  else {
    console.log('Belge bulunamadı!');
  }
}).catch((error) => {
  console.error('Veri çekme hatası:', error);
});

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kullanıcı adı ve şifreyi doğrulama
    if (username === kullaniciAdiData && password === sifreData) {
        location.href = "control.html"; // Doğru ise başka bir sayfaya yönlendir
        return false;
    } else {
        alert("Giriş başarısız");
    }
}

// Diğer fonksiyonlar...

    
    function show() {
        let password = document.getElementById("password");
        let visibility = document.querySelector(".visibility");
        
        if (password.type === "password") {
            password.type = "text"; // Şifre alanını metin olarak göster
            visibility.style.color = "rgb(98, 98, 98)";
        } else {
            password.type = "password"; // Metni gizle
            visibility.style.color = "#F9F6F4";
        }
    }
    
