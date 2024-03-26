namespace Graduation_project.DTO
{
    public class ReservationDto
    {
        public int Id { get; set; }
        //forgien key venue
        public int VenueId { get; set; }
        public DateTime Date { get; set; }
        public int NumOfGuests { get; set; }

        // Add other properties as needed
        public string SpecialRequests { get; set; }
    }
}
