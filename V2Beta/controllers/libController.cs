// libController.cs

using Microsoft.AspNetCore.Mvc;
using Google.Cloud.Firestore;

[Route("api/[controller]")]
[ApiController]
public class libController : ControllerBase
{
    private readonly FirestoreDb _firestoreDb;

    public libController()
    {
        _firestoreDb = FirestoreDb.Create("talaskutuphaneleri");
    }
    //event
    [HttpGet]
    public async Task<IActionResult> GetlibCount([FromQuery]string kutuphaneAdi)
    {
        var collection = _firestoreDb.Collection("kutuphaneler");
        var kutuphaneSnapshot = await collection.GetSnapshotAsync();

        foreach (DocumentSnapshot documentSnapshot in kutuphaneSnapshot.Documents)
        {
            string kutuphaneId = documentSnapshot.Id;
            Console.WriteLine($"Kütüphane Id: {kutuphaneId}");

            // Belge içeriğini almak ve Kutuphane sınıfına map etmek
            Kutuphane kutuphane = documentSnapshot.ConvertTo<Kutuphane>();
            if(kutuphaneId==kutuphaneAdi){

                CollectionReference bolumlerCollection = documentSnapshot.Reference.Collection("bolumler");
                QuerySnapshot bolumlerSnapshot = bolumlerCollection.GetSnapshotAsync().Result;
                var bolumData=new List< Dictionary<string, object>>();
                foreach (DocumentSnapshot bolumSnapshot in bolumlerSnapshot.Documents)
                {   
                    bolumData.Add(bolumSnapshot.ToDictionary());  
                }   
                return Ok(bolumData);
            }
    
        }

        return Ok(null);
    }

    [HttpPut("increaseFullness")]
public async Task<IActionResult> IncreaseFullness([FromQuery] string kutuphaneAdi, [FromQuery] string bolumAdi)
{
    var collection = _firestoreDb.Collection("kutuphaneler");
    var kutuphaneQuery = collection.WhereEqualTo("kutuphaneAdi", kutuphaneAdi);
    var kutuphaneSnapshot = await kutuphaneQuery.GetSnapshotAsync();

    if (kutuphaneSnapshot.Count == 0)
    {
        return NotFound($"Kütüphane '{kutuphaneAdi}' bulunamadı.");
    }

    var kutuphaneDoc = kutuphaneSnapshot.Documents[0];
    var bolumlerCollection = kutuphaneDoc.Reference.Collection("bolumler");
    //var bolumQuery = bolumlerCollection.WhereEqualTo("sesliBolum", bolumAdi);
    var bolumQuery = bolumlerCollection.WhereEqualTo("bolumAdi", bolumAdi); // Değişiklik burada (pembe)

    var bolumSnapshot = await bolumQuery.GetSnapshotAsync();

    if (bolumSnapshot.Count == 0)
    {
        return NotFound($"Bölüm '{bolumAdi}' bulunamadı.");
    }

    var bolumDoc = bolumSnapshot.Documents[0];
    var doluKoltuk = bolumDoc.GetValue<int>("doluKoltuk");
    var kapasite = bolumDoc.GetValue<int>("kapasite");

    if (doluKoltuk < kapasite)
    {
        // Doluluk oranını artır
        doluKoltuk++;

        // Firestore'da güncelleme yap
        var updateData = new Dictionary<string, object>
        {
            { "doluKoltuk", doluKoltuk }
        };
        await bolumDoc.Reference.UpdateAsync(updateData);

        return Ok($"Doluluk oranı artırıldı. Yeni doluluk: {doluKoltuk}/{kapasite}");
    }

    else
    {
        return BadRequest("Bölüm dolu. Doluluk oranını artıramazsınız.");
    }
}

 [HttpPut("decreaseFullness")]
public async Task<IActionResult> DecreaseFullness([FromQuery] string kutuphaneAdi, [FromQuery] string bolumAdi)
{
    var collection = _firestoreDb.Collection("kutuphaneler");
    var kutuphaneQuery = collection.WhereEqualTo("kutuphaneAdi", kutuphaneAdi);
    var kutuphaneSnapshot = await kutuphaneQuery.GetSnapshotAsync();
    if (kutuphaneSnapshot.Count == 0)
    {
        return NotFound($"Kütüphane '{kutuphaneAdi}' bulunamadı.");
    }

    var kutuphaneDoc = kutuphaneSnapshot.Documents[0];
    var bolumlerCollection = kutuphaneDoc.Reference.Collection("bolumler");
    var bolumQuery = bolumlerCollection.WhereEqualTo("bolumAdi", bolumAdi);
    var bolumSnapshot = await bolumQuery.GetSnapshotAsync();

    if (bolumSnapshot.Count == 0)
    {
        return NotFound($"Bölüm '{bolumAdi}' bulunamadı.");
    }

    var bolumDoc = bolumSnapshot.Documents[0];
    var doluKoltuk = bolumDoc.GetValue<int>("doluKoltuk");
    var kapasite = bolumDoc.GetValue<int>("kapasite");

    
    if (doluKoltuk > 0)
    {
        // Doluluk oranını azalt
        doluKoltuk--;

        // Firestore'da güncelleme yap
        var updateData = new Dictionary<string, object>
        {
            { "doluKoltuk", doluKoltuk }
        };
        await bolumDoc.Reference.UpdateAsync(updateData);

        return Ok($"Doluluk oranı azaltıldı. Yeni doluluk: {doluKoltuk}/{kapasite}");
    }

    else
    {
        return BadRequest("Bölüm boş. Doluluk oranını azaltamazsınız.");
    }
}


[HttpPost("login")]
public IActionResult Login([FromBody] LoginRequest loginRequest)
{
    
    if (string.IsNullOrEmpty(loginRequest.UserName) || string.IsNullOrEmpty(loginRequest.Password))
    {
        return BadRequest("Kullanıcı adı ve şifre boş olamaz");
    }

    // Kullanıcı adı ve şifre kontrolü yapılır.
    // Örnek bir kontrol, kullanıcı adının "admin" ve şifrenin "password" olduğunu düşünelim.
    if (loginRequest.UserName == "talas1" && loginRequest.Password == "12345")
    {


      /*  var response = HttpContext.Response;
        response.Redirect("/wwwroot/control.html");*/


        // Kullanıcı doğrulandı, bir token veya başka bir kimlik doğrulama yöntemi oluşturabilirsiniz.
        // Bu örnekte basitçe bir mesaj dönüyoruz.
        return Ok("Giriş başarılı");
    }
    else
    {
        // Kullanıcı adı veya şifre hatalı ise hata mesajı döndürülebilir.
        return Unauthorized("Kullanıcı adı veya şifre hatalı");
    }
}


}
