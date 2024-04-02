using Graduation_project.DTO;
using Graduation_project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Graduation_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {
        private readonly ApplicationEntity Context;

        public ReviewController(ApplicationEntity _context) 
        {
            Context = _context;
        }


        [HttpPost]
        public async Task<IActionResult> SubmitReview(ReviewDTO reviewDto)
        {
            // Check if the reviewDto is null or invalid
            if (reviewDto == null)
            {
                return BadRequest("Invalid review data.");
            }

            // Authenticate user (implement authentication logic here)

            // Check if the reservation associated with the review exists
            var reservation = await Context.Reservations.FindAsync(reviewDto.ReservationId);
            if (reservation == null)
            {
                return NotFound("Reservation not found.");
            }

            // Check if the current date is after the reservation date
            if (DateTime.Today < reservation.Date)
            {
                return BadRequest("You can only leave a review after your reservation date has passed.");
            }

            // Create a new Review entity and populate it with data from the DTO
            Review review = new Review
            {
                ReservationId = reviewDto.ReservationId,
                Rating = reviewDto.Rating,
                Comment = reviewDto.ReviewText,
              
            };

            // Save the review to the database
            Context.Reviews.Add(review);
            await Context.SaveChangesAsync();

            // Return a success response
            return Ok("Review submitted successfully.");
        }

    }
}
