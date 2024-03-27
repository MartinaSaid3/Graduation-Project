using Graduation_project.DTO;
using Graduation_project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Graduation_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationController : ControllerBase
    {
        private readonly ApplicationEntity context;

        public ReservationController(ApplicationEntity _context)
        {
            context = _context;
        }

        // GET: api/Reservations
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations()
        {
            return await context.Reservations.ToListAsync();
        }

        // GET: api/Reservations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            var reservation = await context.Reservations.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            return reservation;
        }

        // POST: api/Reservations
        [HttpPost]
        public async Task<ActionResult<Reservation>> PostReservation(ReservationDto reservationDTO)
        {
            var reservation = new Reservation
            {
                VenueId = reservationDTO.VenueId,
                Date = reservationDTO.Date,
                NumOfGuests = reservationDTO.NumOfGuests,
                SpecialRequests = reservationDTO.SpecialRequests
                // Map other properties as needed
            };

            context.Reservations.Add(reservation);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetReservation), new { id = reservation.Id }, reservation);
        }

        // PUT: api/Reservations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation(int id, ReservationDto reservationDTO)
        {
            if (id != reservationDTO.Id)
            {
                return BadRequest();
            }

            var reservation = await context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            // Update reservation properties
            reservation.VenueId = reservationDTO.VenueId;
            reservation.Date = reservationDTO.Date;
            reservation.NumOfGuests = reservationDTO.NumOfGuests;
            reservation.SpecialRequests = reservationDTO.SpecialRequests;
            // Update other properties as needed

            context.Entry(reservation).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReservationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/Reservations/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            var reservation = await context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }

            context.Reservations.Remove(reservation);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool ReservationExists(int id)
        {
            return context.Reservations.Any(e => e.Id == id);
        }
    }
}
