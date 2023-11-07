using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;


public class User
{
    public string Username { get ; set ; }
    public string Password { get; set; }
}

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    public IActionResult Login([FromBody] User user)
    {
        // Kullanıcı adı ve şifreyi doğrulama işlemi burada gerçekleştirilir.
        // Örneğin, veritabanında kullanıcı bilgilerini kontrol edebilirsiniz.

        if (user.Username == "admin" && user.Password == "password")
        {
            // Başarılı giriş
            // Burada bir JWT token veya başka bir kimlik doğrulama yöntemi döndürebilirsiniz.
            return Ok("Giriş başarılı.");
        }

        // Geçersiz giriş
        return Unauthorized("Kullanıcı adı veya şifre hatalı.");
    }

    private IActionResult Ok(string v)
    {
        throw new NotImplementedException();
    }
}
