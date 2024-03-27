using System.ComponentModel.DataAnnotations;

namespace Graduation_project.DTO
{
    public class ForgetPasswordDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}
