/*
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Controllers;
using Swashbuckle.AspNetCore.Swagger;
using Swashbuckle.AspNetCore.SwaggerUI;

using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;




[Route("api/[controller]")]
[ApiController]
public class LibraryController : ControllerBase
{
    // API endpointleri
    [HttpPost("increase-student-count")]
public IActionResult IncreaseStudentCount()
{
    // Öğrenci sayısını arttırma işlemi
    return Ok("Öğrenci sayısı arttırıldı.");
}

[HttpPost("decrease-student-count")]
public IActionResult DecreaseStudentCount()
{
    // Öğrenci sayısını azaltma işlemi
    return Ok("Öğrenci sayısı azaltıldı.");
}

}





/*

private int GetStudentCountFromDatabase()
{
    // Veritabanından öğrenci sayısını almak için gerekli kodu burada ekleyin.
    // Örneğin, Entity Framework kullanarak bir sorgu çalıştırabilirsiniz.
}

private void UpdateStudentCountInDatabase(int count)
{
    // Veritabanında öğrenci sayısını güncellemek için gerekli kodu burada ekleyin.
    // Örneğin, Entity Framework kullanarak bir güncelleme işlemi gerçekleştirebilirsiniz.
}

[HttpPost("increase-student-count")]
public IActionResult IncreaseStudentCount()
{
    var studentCount = GetStudentCountFromDatabase(); // Veritabanından mevcut öğrenci sayısını alın
    studentCount++; // Öğrenci sayısını arttırın
    UpdateStudentCountInDatabase(studentCount); // Veritabanına güncel öğrenci sayısını kaydedin
    return Ok("Öğrenci sayısı arttırıldı.");
}

[HttpPost("decrease-student-count")]
public IActionResult DecreaseStudentCount()
{
    var studentCount = GetStudentCountFromDatabase(); // Veritabanından mevcut öğrenci sayısını alın
    studentCount--; // Öğrenci sayısını azaltın
    UpdateStudentCountInDatabase(studentCount); // Veritabanına güncel öğrenci sayısını kaydedin
    return Ok("Öğrenci sayısı azaltıldı.");
}



[HttpGet("class-occupancy/audio")]
public IActionResult GetAudioClassOccupancy()
{
    var audioClassOccupancy = CalculateAudioClassOccupancy(); // Sesli sınıf doluluk oranını hesaplama
    return Ok(audioClassOccupancy);
}
[HttpGet("class-occupancy/quiet")]
public IActionResult GetQuietClassOccupancy()
{
    var quietClassOccupancy = CalculateQuietClassOccupancy(); // Sesli sınıf doluluk oranını hesaplama
    return Ok(quietClassOccupancy);
}
[HttpGet("class-occupancy/audio")]
public IActionResult GetAcademyClassOccupancy()
{
    var academyClassOccupancy = CalculateAcademyOccupancy(); // Sesli sınıf doluluk oranını hesaplama
    return Ok(academyClassOccupancy);
}


private double CalculateAudioClassOccupancy()
{
    // Sesli sınıf doluluk oranını hesaplamak için gerekli işlemi yapın
    // Örneğin, mevcut öğrenci sayısını sınıf kapasitesine bölebilirsiniz.
    return (double)GetStudentCountFromDatabase() / AudioClassCapacity;
}
private double CalculateQuietClassOccupancy()
{
    // Sesli sınıf doluluk oranını hesaplamak için gerekli işlemi yapın
    // Örneğin, mevcut öğrenci sayısını sınıf kapasitesine bölebilirsiniz.
    return (double)GetStudentCountFromDatabase() / QuietClassCapacity;
}
private double CalculateAcademyClassOccupancy()
{
    // Sesli sınıf doluluk oranını hesaplamak için gerekli işlemi yapın
    // Örneğin, mevcut öğrenci sayısını sınıf kapasitesine bölebilirsiniz.
    return (double)GetStudentCountFromDatabase() / AcademyClassCapacity;
}














//Yetkilendirme Kontrolleri 
[Authorize(Roles = "Admin")]
[HttpPost("admin-action")]
public IActionResult AdminAction()
{
    // Bu işlem yalnızca "Admin" rolüne sahip kullanıcılar için erişilebilir.
    return Ok("Yönetici işlemi gerçekleştirildi.");
}



//Kullanıcı Kimlik Servisleri
private readonly UserManager<ApplicationUser> userManager;
private readonly SignInManager<ApplicationUser> signInManager;

public LibraryController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager)
{
    this.userManager = userManager;
    this.signInManager = signInManager;
}




//İş Mantığı
[HttpPost("increase-student-count")]
public IActionResult IncreaseStudentCount()
{
    // Öğrenci sayısını arttırma işlemi
    var studentCount = GetStudentCountFromDatabase(); // Veritabanından mevcut öğrenci sayısını alın
    studentCount++; // Öğrenci sayısını arttırın
    UpdateStudentCountInDatabase(studentCount); // Veritabanına güncel öğrenci sayısını kaydedin
    return Ok("Öğrenci sayısı arttırıldı.");
}

[HttpPost("decrease-student-count")]
public IActionResult DecreaseStudentCount()
{
    // Öğrenci sayısını azaltma işlemi
    var studentCount = GetStudentCountFromDatabase(); // Veritabanından mevcut öğrenci sayısını alın
    studentCount--; // Öğrenci sayısını azaltın
    UpdateStudentCountInDatabase(studentCount); // Veritabanına güncel öğrenci sayısını kaydedin
    return Ok("Öğrenci sayısı azaltıldı.");
}






*/