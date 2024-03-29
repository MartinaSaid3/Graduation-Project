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
    
        public int ValidDate { get; set; }
        public Byte[] ImagesData { get; set; }
        //navigation property
        public ICollection<Reservation> Reservations { get; set; }
    }
}

