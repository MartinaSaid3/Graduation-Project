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
        public async Task<ActionResult<IEnumerable<Reservation>>> GetAllReservations()
        {
            List<Reservation> reservations = await context.Reservations.ToListAsync();
            return Ok(reservations);
        }

        // GET: api/Reservations/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Reservation>> GetReservation(int id)
        {
            Reservation reservation = await context.Reservations.Include(s=>s.Venue).FirstOrDefaultAsync(r => r.Id == id);

            ReservationDto reservationDto = new ReservationDto();
            //reservationDto.Id = reservation.Id;
            reservationDto.VenueId = reservation.VenueId;
            reservationDto.Date = reservation.Date; 
            reservationDto.NumOfGuests = reservation.NumOfGuests;
            reservationDto.SpecialRequests = reservation.SpecialRequests;
            reservationDto.Email = reservation.Email;
            return Ok(reservationDto); 
        }

        // POST: api/Reservations
        [HttpPost]
        public async Task<ActionResult<ReservationDto>> CreateReservation(ReservationDto reservationDto)
        {
            // Check if the date is available for reservation
            if (!IsDateAvailable(reservationDto.Date, reservationDto.VenueId))
            {
                return BadRequest("The date is not available for reservation.");
            }

            // Check if there is already a reservation on the same day
            if (await context.Reservations.AnyAsync(r => r.Date.Date == reservationDto.Date.Date))
            {
                return BadRequest("A reservation already exists for the selected date.");
            }

            var reservation = new Reservation
            {
                Date = reservationDto.Date,
                NumOfGuests = reservationDto.NumOfGuests,
                VenueId = reservationDto.VenueId,
                SpecialRequests = reservationDto.SpecialRequests,
                Email = reservationDto.Email
            };

            context.Reservations.Add(reservation);
            await context.SaveChangesAsync();

            return CreatedAtAction("GetReservation", new { id = reservation.Id }, reservationDto);
        }

        private bool IsDateAvailable(DateTime date, int venueId)
        {
            // Check if there are any existing reservations for the given date and venue
            return !context.Reservations.Any(r => r.Date.Date == date.Date && r.VenueId == venueId);
        }

        // PUT: api/Reservations/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutReservation(int id, ReservationDto reservationDTO)
        {
            Reservation reservation = await context.Reservations.Include(s => s.Venue).FirstOrDefaultAsync(r => r.Id == id);

            //reservationDTO.Id = reservation.Id;
            //reservationDTO.VenueId = reservation.VenueId;
            //reservationDTO.Date = reservation.Date;
            //reservationDTO.NumOfGuests = reservation.NumOfGuests;
            //reservationDTO.SpecialRequests = reservation.SpecialRequests;
            //context.Reservations.Update(reservation);
            //await context.SaveChangesAsync();
            if (id != reservation.Id)
            {
                return BadRequest();
            }

            //var reservation = await context.Reservations.FindAsync(id);
            if (reservation == null)
            {
                return NotFound();
            }
            // Check if the date is available for reservation
            if (!IsDateAvailable(reservationDTO.Date, reservationDTO.VenueId))
            {
                return BadRequest("The date is not available for reservation.");
            }

            // Check if there is already a reservation on the same day
            if (await context.Reservations.AnyAsync(r => r.Date.Date == reservationDTO.Date.Date))
            {
                return BadRequest("A reservation already exists for the selected date.");
            }

            // Update reservation properties
            reservation.VenueId = reservationDTO.VenueId;
            reservation.Date = reservationDTO.Date;
            reservation.NumOfGuests = reservationDTO.NumOfGuests;
            reservation.SpecialRequests = reservationDTO.SpecialRequests;
            reservation.Email = reservationDTO.Email;
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

        [HttpPut("Accept/{id}")]
        public async Task<IActionResult> AcceptReservation(int id)
        {
            var reservation = await context.Reservations.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            reservation.Status = Reservation.ApprovalStatusReservation.Accepted;
            await context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPut("Reject/{id}")]
        public async Task<IActionResult> RejectReservation(int id)
        {
            var reservation = await context.Reservations.FindAsync(id);

            if (reservation == null)
            {
                return NotFound();
            }

            reservation.Status = Reservation.ApprovalStatusReservation.Rejected;
            await context.SaveChangesAsync();

            return NoContent();
        }

    }
}

