using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Graduation_project.Models
{
    public class Review
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public int ReservationId { get; set; }

        [ForeignKey("ReservationId")]
        public Reservation Reservation { get; set; }

        [Required]
        [Range(1, 5)]
        public int Rating { get; set; } // Rating on a scale of 1 to 5

        [Required]
        [MaxLength(500)]
        public string Comment { get; set; } // The client's review comment

        [Required]
        public DateTime ReviewDate { get; set; } // Date when the review was submitted
    }
}
