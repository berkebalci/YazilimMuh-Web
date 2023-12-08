// StudentsController.cs

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

    [HttpGet]
    public async Task<IActionResult> GetlibCount()
    {
        var collection = _firestoreDb.Collection("kutuphaneler");
        var snapshot = await collection.GetSnapshotAsync();

        var libCount = snapshot.Documents.Count;

        var result = new libCount { Count = libCount };

        return Ok(result);
    }
}
