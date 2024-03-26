using System;

namespace Graduation_project.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int NumOfGuests { get; set; }

        //forgien key venue
        public int VenueId { get; set; }

        // Add other properties as needed
        public string SpecialRequests { get; set; }

        //navigation property
        public Venue Venue { get; set; }

        public Payment payment { get; set; }
    }
}
