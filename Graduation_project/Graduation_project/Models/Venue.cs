using System.Text.Json.Serialization;

namespace Graduation_project.Models
{
    public class Venue
    {
        public string Name { get; set; }
        public int VenueId { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public string VenueLocation { get; set; }
        public int Capacity { get; set; }
        public int Price { get; set; }
<<<<<<< HEAD
    
        public int ValidDate { get; set; }
        public Byte[] ImagesData { get; set; }
=======
        //public bool IsAvailable { get; set; }
>>>>>>> f23f108a0f9d264325b6461fe59e6f2c35eb7927
        //navigation property
        //[JsonIgnore]
        public ICollection<Reservation> Reservations { get; set; }
    }
}

