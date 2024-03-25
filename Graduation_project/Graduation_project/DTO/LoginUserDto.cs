using System.ComponentModel.DataAnnotations;

namespace Graduation_project.DTO
{
    
        public class LoginUserDto
        {
            [Required]
            public string UserName { get; set; }
            [Required]
            public string Password { get; set; }
        }
    
}
