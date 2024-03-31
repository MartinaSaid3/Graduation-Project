using Graduation_project.Models;

namespace Graduation_project.DTO
{
    public class VenueDto
    {
        public string Name { get; set; }
        public int VenueId { get; set; }
        public string Location { get; set; }
        public int Capacity { get; set; }
        public int Price { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }


        public int ValidDate { get; set; }

        public Byte[] ImagesData { get; set; }

        public virtual List<int> Reservations { get; set; } = new List<int>();

    }
}
