using Google.Cloud.Firestore;
using System.Collections.Generic;

[FirestoreData]
public class SesliBolum
{
    [FirestoreProperty("doluKoltuk")]
    public int DoluKoltuk { get; set; }

    
}

[FirestoreData]
public class Bolumler
{
    [FirestoreProperty("sesliBolum")]
    public required SesliBolum SesliBolum { get; set; }

    
}

[FirestoreData]
public class Kutuphane
{
    [FirestoreProperty("kutuphaneAdi")]
    public required string KutuphaneAdi { get; set; }

    [FirestoreProperty("bolumler")]
    public required Dictionary<string, Bolumler> Bolumler { get; set; }

    
}
