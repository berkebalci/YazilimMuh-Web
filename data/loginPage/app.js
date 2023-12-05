function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Burada kullanıcı adı ve şifre kontrolü yapılmalıdır
    // Eğer doğruysa, libraryInfo div'i gösterilir, loginForm div'i gizlenir
    // Eğer yanlışsa hata mesajı gösterilir
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("libraryInfo").style.display = "block";

    // Örnek veri ile doluluk oranları güncelleniyor
    updateLibraryInfo();
}

function increaseUserCount() {
    // Kullanıcı sayısını artırma işlemi burada yapılır
    updateLibraryInfo();
}

function decreaseUserCount() {
    // Kullanıcı sayısını azaltma işlemi burada yapılır
    updateLibraryInfo();
}

function showClassOccupancy() {
    // Sınıfların doluluk oranlarını gösterme işlemi burada yapılır
    updateLibraryInfo();
}

function updateLibraryInfo() {
    // Örnek veri ile doluluk oranları güncelleniyor
    document.getElementById("userCount").innerText = "10";
    document.getElementById("quietClass").innerText = "50%";
    document.getElementById("silentClass").innerText = "30%";
    document.getElementById("academicClass").innerText = "70%";
}
