using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Graduation_project.Models
{
    public class Reservation
    {
        [Key]
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public int NumOfGuests { get; set; }

        //forgien key venue
        [ForeignKey("Venue")]
        public int VenueId { get; set; }

        public string SpecialRequests { get; set; }
        public string Email { get; set; }

        public ApprovalStatusReservation Status { get; set; }
        public Reservation()
        {
            // Initialize status to Pending by default
            Status = ApprovalStatusReservation.Pending;
        }

        public enum ApprovalStatusReservation
        {
            Pending,
            Accepted,
            Rejected
        }

        //navigation property
        public Venue Venue { get; set; }

        public Payment payment { get; set; }
    }
}
