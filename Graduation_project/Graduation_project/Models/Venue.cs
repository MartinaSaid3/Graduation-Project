using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace Graduation_project.Models
{
    public class Venue
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [StringLength(15, MinimumLength = 3)]
        public string Name { get; set; }


        [Required]
        [RegularExpression(@"^[\w\s]+,[\w\s]+,[\w\s]+$", ErrorMessage = "Location format should be 'city, area, street'.")]
        public string Location { get; set; }


        [Required]
        public string Description { get; set; }
<<<<<<< HEAD
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
=======

        [Required]
        public string OpenBuffet { get; set; }

        [Required]
        public string SetMenue { get; set; }

        [Required]
        public string HighTea { get; set; }

        [Required]
        public double MaxCapacity { get; set; }
        [Required]
        public double MinCapacity { get; set; }


        [Required]
        public double PriceOpenBuffetPerPerson { get; set; }

        [Required]
        public double PriceSetMenuePerPerson { get; set; }

        [Required]
        public double PriceHighTeaPerPerson { get; set; }

        public double MinPrice
        {
            get
            {
                return PriceHighTeaPerPerson * MinCapacity;
            }
            set
            {

            }
        }

        public double TotalPrice { get; set; }


        [Required]
        public List<byte[]> ImagesData { get; set; }


        //3shan maidfsh elreservation nafsha marten,, bt5ly el obj mawgoud mara w7da fel list
        public ICollection<Reservation> Reservations { get; set; } = new HashSet<Reservation>();
>>>>>>> f3fcf42ca9138f6011847ccd20835c954d126b5d
    }
}

