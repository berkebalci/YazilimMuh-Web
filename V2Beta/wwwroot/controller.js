const baseUrl = 'http://localhost:7037';
const apiPath = '/api/lib';
  
  var db = firebase.firestore()
  var talasKutuphanesiRef = db.collection('kutuphaneler').doc('talasKutuphanesi')
  var bolumlerCollectionRef = talasKutuphanesiRef.collection('bolumler');
  
var sesliBolumDocRef = bolumlerCollectionRef.doc('sesliBolum');
var sesliBolumKapasite;
sesliBolumDocRef.onSnapshot(function(doc) {
    if (doc.exists) {
        var doluKoltukDegeri = doc.data().doluKoltuk;
        sesliBolumKapasite = doc.data().kapasite; 
        document.getElementById('sesli').textContent = doluKoltukDegeri;
    } else {
        console.log("Belge bulunamadı");
    }
}, function(error) {
    console.error("Belge okuma hatası: ", error);
});


  var sessizBolumDocRef = bolumlerCollectionRef.doc('sessizBolum');
  var sessizBolumKapasite;
  sessizBolumDocRef.onSnapshot(function(doc) {
    if (doc.exists) {
        var doluKoltukDegeri = doc.data().doluKoltuk;
        sessizBolumKapasite = doc.data().kapasite;
        document.getElementById('sessiz').textContent = doluKoltukDegeri;
    } else {
        console.log("Belge bulunamadı");
    }
}, function(error) {
    console.error("Belge okuma hatası: ", error);
});

  var akademikKisimDocRef = bolumlerCollectionRef.doc('akademikKisim');
  var akademikKisimKapasite;
  akademikKisimDocRef.onSnapshot(function(doc) {
    if (doc.exists) {
        var doluKoltukDegeri = doc.data().doluKoltuk;
        akademikKisimKapasite = doc.data().kapasite;
        document.getElementById('akademik').textContent = doluKoltukDegeri;
    } else {
        console.log("Belge bulunamadı");
    }
}, function(error) {
    console.error("Belge okuma hatası: ", error);
});

window.addEventListener("DOMContentLoaded", (event) => {
  const plus1 = document.querySelector('.button1');
  const minus1 = document.querySelector('.button2');
  const plus2 = document.querySelector('.button3');
  const minus2 = document.querySelector('.button4');
  const plus3 = document.querySelector('.button5');
  const minus3 = document.querySelector('.button6');
  
  if (plus1) {
    plus1.addEventListener('click', () => {
            if (+document.getElementById('sesli').textContent < sesliBolumKapasite) {
              sesliBolumDocRef.update({
                doluKoltuk: +document.getElementById('sesli').textContent+1
              })
            } else {
              alert("Sesli bölümde boş koltuk kalmadı.");
            }
    })
  }
  if (minus1) {
    minus1.addEventListener('click', () => {
          if (+document.getElementById('sesli').textContent > 0) {
            sesliBolumDocRef.update({
              doluKoltuk: +document.getElementById('sesli').textContent-1
            })
          } else {
            alert("Sesli bölümdeki öğrenci sayısı zaten 0");
          }
          
  })
  }
  if (plus2) {
    plus2.addEventListener('click', () => {
            if (+document.getElementById('sessiz').textContent < sessizBolumKapasite) {
              sessizBolumDocRef.update({
                doluKoltuk: +document.getElementById('sessiz').textContent+1
              })
            } else {
              alert("Sessiz bölümde boş koltuk kalmadı.");
            }
            
    })
  }
  if (minus2) {
    minus2.addEventListener('click', () => {
          if (+document.getElementById('sessiz').textContent > 0) {
            sessizBolumDocRef.update({
              doluKoltuk: +document.getElementById('sessiz').textContent-1
            })
          } else {
            alert("Sessiz bölümdeki öğrenci sayısı zaten 0");
          }
          
  })
  }
  if (plus3) {
    plus3.addEventListener('click', () => {
            if (+document.getElementById('akademik').textContent < akademikKisimKapasite) {
              akademikKisimDocRef.update({
                doluKoltuk: +document.getElementById('akademik').textContent+1
              })
            } else {
              alert("Akademik Kısımda boş koltuk kalmadı.");
            }
            
    })
    
  }
  if (minus3) {
    minus3.addEventListener('click', () => {
          // eğer dolu koltuk sayısı 0'dan büyükse, azalt
          if (+document.getElementById('akademik').textContent > 0) {
            akademikKisimDocRef.update({
              doluKoltuk: +document.getElementById('akademik').textContent-1
            })
          } else {
            // eğer dolu koltuk sayısı 0'a eşit veya küçükse, uyarı ver
            alert("Akademik Kısımdaki öğrenci sayısı zaten 0");
          }
          
  })
  }
});
