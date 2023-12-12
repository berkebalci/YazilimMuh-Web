// Startup.cs

using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using FirebaseAdmin;
using Google.Cloud.Firestore;
using Google.Apis.Auth.OAuth2;
public class Startup
{

    

    public void ConfigureServices(IServiceCollection services)
    {   services.AddControllers();
        FirebaseApp.Create(new AppOptions
    {
        Credential = GoogleCredential.FromFile("talaskutuphaneleri-firebase-adminsdk-b6jxl-d2aa91a8e2.json"),
    });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    if (env.IsDevelopment())
    {
        app.UseDeveloperExceptionPage();
    }

    app.UseRouting();

    app.UseEndpoints(endpoints =>
    {
        endpoints.MapControllerRoute(
            name: "default",
            pattern: "{controller=Home}/{action=Index}/{id?}"
        );
        
        string projectId = "talaskutuphaneleri";

        // Firestore bağlantısı oluşturma
        var firestore = FirestoreDb.Create(projectId);
        Console.WriteLine("Firestore bağlantısı başarıyla oluşturuldu.");

        // "kutuphaneler" koleksiyonunu referans alma
        CollectionReference kutuphanelerCollection = firestore.Collection("kutuphaneler");

        QuerySnapshot kutuphaneSnapshot = kutuphanelerCollection.GetSnapshotAsync().Result;

        // Her belge için Id ve değerleri yazdırma
        foreach (DocumentSnapshot documentSnapshot in kutuphaneSnapshot.Documents)
        {
            string kutuphaneId = documentSnapshot.Id;
            Console.WriteLine($"Kütüphane Id: {kutuphaneId}");

            // Belge içeriğini almak ve Kutuphane sınıfına map etmek
            Kutuphane kutuphane = documentSnapshot.ConvertTo<Kutuphane>();

            // Kütüphane adı ve kapasitesini yazdırmak
            Console.WriteLine($"Kütüphane Adı: {kutuphane.KutuphaneAdi}");

            CollectionReference bolumlerCollection = documentSnapshot.Reference.Collection("bolumler");
            QuerySnapshot bolumlerSnapshot = bolumlerCollection.GetSnapshotAsync().Result;

            // Her belge için Id ve değerleri yazdır
            foreach (DocumentSnapshot bolumSnapshot in bolumlerSnapshot.Documents)
            {
                string bolumId = bolumSnapshot.Id;
                Console.WriteLine($"Bolum Id: {bolumId}");

                Dictionary<string, object> bolumData = bolumSnapshot.ToDictionary();
                foreach (var field in bolumData)
                {
                    Console.WriteLine($"{field.Key}: {field.Value}");
                }
            }

            Console.WriteLine();
        }
    });
}


}
