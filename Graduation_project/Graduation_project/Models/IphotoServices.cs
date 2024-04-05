using CloudinaryDotNet.Actions;
using CloudinaryDotNet;

namespace Graduation_project.Models
{
    public interface IphotoServices
    {
       
        Task<ImageUploadResult>AddPlaceAsync(IFormFile file);
    }
}
