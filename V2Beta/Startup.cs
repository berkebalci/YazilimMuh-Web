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
    {
        services.AddControllers();
        FirebaseApp.Create(new AppOptions
        {
            Credential = GoogleCredential.FromFile("talaskutuphaneleri-firebase-adminsdk-b6jxl-d2aa91a8e2.json"),
        });
        services.AddCors(options =>
        {
            options.AddPolicy("AllowSpecificOrigin",
                              builder =>
                              {
                                  builder.WithOrigins("http://127.0.0.1:5500")
                                         .AllowAnyMethod()
                                         .AllowAnyHeader();
                              });
        });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
             app.UseDefaultFiles();
            app.UseStaticFiles();
        }
        app.UseCors("AllowSpecificOrigin");
        app.UseRouting();
        app.UseHttpsRedirection();
    
    }
}

