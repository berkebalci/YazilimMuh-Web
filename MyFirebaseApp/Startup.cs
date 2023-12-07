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
        // Servis konfigürasyonları buraya eklenebilir.
        // Örneğin Firebase konfigürasyonu burada yapılabilir.
        FirebaseApp.Create(new AppOptions
    {
        Credential = GoogleCredential.FromFile("test.json"),
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

            // Firestore bağlantısı oluşturma
            var firestore = FirestoreDb.Create("talaskutuphaneleri");

            // "students" koleksiyonunu referans alma
            CollectionReference collection = firestore.Collection("students");

            // Koleksiyondaki belge sayısını al
            Task.Run(async () =>
        {
            QuerySnapshot snapshot = await collection.GetSnapshotAsync();

            int studentCount = snapshot.Documents.Count;

            // Öğrenci sayısını kullanarak işlemlerinizi gerçekleştirin
            Console.WriteLine($"Number of Students: {studentCount}");
        }).Wait();



        });
    }
}
