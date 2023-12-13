    // Veri çekme işlemini validate() fonksiyonunun çağrılmasından sonra gerçekleştirin
    const belirliAlanRef = firebase.firestore().collection('kutuphaneler').doc('talasKutuphanesi').collection('adminler').doc('admin1');
    
    belirliAlanRef.get().then((doc) => {
      if (doc.exists) {
        kullaniciAdiData = doc.data().kullaniciAdi;
        sifreData = doc.data().sifre;
      } 
      else {
        console.log('Belge bulunamadı!');
      }
    }).catch((error) => {
      console.error('Veri çekme hatası:', error);
    });
    
    // Kullanıcı adı ve parola doğrulama işlemini daha güvenli hale getirin
    function validate() {
        var username = document.getElementById("username").value.toLowerCase();
        var password = document.getElementById("password").value.toLowerCase();
    
        // Kullanıcı adı ve şifreyi doğrulama
        if (username === kullaniciAdiData.toLowerCase() && password === sifreData.toLowerCase()) {
            location.href = "control.html"; // Doğru ise başka bir sayfaya yönlendir
            return false;
        } else {
            alert("Giriş başarısız");
        }
    }
    