using Graduation_project.Models;
using System.ComponentModel.DataAnnotations;

namespace Graduation_project.DTO
{
    public class VenueDTO
    {

        [Required]
        [StringLength(15, MinimumLength = 3)]
        public string Name { get; set; }


        [Required]
        [RegularExpression(@"^[\w\s]+,[\w\s]+,[\w\s]+$", ErrorMessage = "Location format should be 'city, area, street'.")]
        public string Location { get; set; }


        [Required]
        public string Description { get; set; }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f3fcf42ca9138f6011847ccd20835c954d126b5d

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

        [Required]
        public List<IFormFile> ImagesData { get; set; }

<<<<<<< HEAD
        public Byte[] ImagesData { get; set; }
=======
        public virtual List<int> Reservations { get; set; } = new List<int>();
>>>>>>> f23f108a0f9d264325b6461fe59e6f2c35eb7927
=======
>>>>>>> f3fcf42ca9138f6011847ccd20835c954d126b5d
    }
}
