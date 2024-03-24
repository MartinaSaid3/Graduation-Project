using System;

namespace Graduation_project.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public int Time {  get; set; }
        public int Date { get; set; }
        public int NumOfGuests { get; set; }

        //forgien key venue
        public int VenueId { get; set; }

        //navigation property
        public Venue Venue { get; set; }

        public Payment payment { get; set; }
    }
}
