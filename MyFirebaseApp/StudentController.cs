// StudentsController.cs

using Microsoft.AspNetCore.Mvc;
using Google.Cloud.Firestore;

[Route("api/[controller]")]
[ApiController]
public class StudentsController : ControllerBase
{
    private readonly FirestoreDb _firestoreDb;

    public StudentsController()
    {
        _firestoreDb = FirestoreDb.Create("your-firebase-project-id");
    }

    [HttpGet]
    public async Task<IActionResult> GetStudentCount()
    {
        var collection = _firestoreDb.Collection("students");
        var snapshot = await collection.GetSnapshotAsync();

        var studentCount = snapshot.Documents.Count;

        var result = new StudentCount { Count = studentCount };

        return Ok(result);
    }
}
