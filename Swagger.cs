using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;

using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;

/*

public void ConfigureServices(IServiceCollection services)
{
    // ...

    // Swagger dökümantasyonunu etkinleştirme
    services.AddSwaggerGen(c =>
    {
        c.SwaggerDoc("v1", new Info { Title = "Library API", Version = "v1" });
    });
}




public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
{
    // ...

    // Swagger UI'ı etkinleştirme
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Library API V1");
    });
}



/// <summary>
/// Kullanıcı işlemleri için API
/// </summary>
[Route("api/[controller]")]
[ApiController]
public class UserController : ControllerBase
{
    /// <summary>
    /// Kullanıcı bilgilerini alır.
    /// </summary>
    [HttpGet]
    public IActionResult GetUser()
    {
        // Kullanıcı bilgilerini döndürün
    }
}
*/