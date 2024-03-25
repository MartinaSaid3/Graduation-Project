using System.ComponentModel.DataAnnotations;

namespace Graduation_project.DTO
{
    public class RegisterUserDto
    {
         //make to not use application user to make custome proprty and add validation
    
        [Required]
        public string UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        [Compare("Password")]
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
    }
}

