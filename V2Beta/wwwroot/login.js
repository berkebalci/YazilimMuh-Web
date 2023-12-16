    const show=()=>{
        let password=document.getElementById("password");
        let visibility=document.querySelector(".visibility");
        if(password.type=== "password"){
            password.type="password";
            visibility.style.color="rgb(98,98,98)"
        }
        else{
            password.type="password";
            visibility.style.color="#F9F6F4"
        }
    }
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
        } else{
        // alert("Giriş başarısız")
        toast();
     } 
     }
     function toast() {
        // Get the snackbar DIV
        var x = document.getElementById("snackbar");
      
        // Add the "show" class to DIV
        x.className = "show";
      
        // After 3 seconds, remove the show class from DIV
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 1000);
      }
    