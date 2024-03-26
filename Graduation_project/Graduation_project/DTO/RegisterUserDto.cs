using System.ComponentModel.DataAnnotations;

namespace Graduation_project.DTO
{
    public class RegisterUserDto
    {
        //make to not use application user to make custome proprty and add validation

        public string FullName { get; set; }
        public string Role { get; set; }
        public string Gender { get; set; }

        [Required(ErrorMessage = "Phone number is required")]
        public string Phone { get; set; }

        public string Address { get; set; }

        // Change type to string to preserve leading zeros and accommodate SSN formats
        public string SSN { get; set; }
        [Required(ErrorMessage = "Username is required")]
        public string UserName { get; set; }
        [Required(ErrorMessage = "Password is required")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
        [Required(ErrorMessage = "Confirm password is required")]
        [Compare("Password", ErrorMessage = "Passwords do not match")]
        public string ConfirmPassword { get; set; }
        public string Email { get; set; }
    }
}

