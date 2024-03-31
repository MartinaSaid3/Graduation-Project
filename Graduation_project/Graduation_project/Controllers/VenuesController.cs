﻿using Graduation_project.DTO;
using Graduation_project.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Graduation_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VenuesController : ControllerBase
    {
        private readonly ApplicationEntity context;

        public VenuesController(ApplicationEntity _context)
        {
            context = _context;
        }

        // GET: api/Venues
        [HttpGet]
        public async Task<ActionResult<IEnumerable<VenueDto>>> GetVenues()
        {
            var venue = await context.Venues.ToListAsync();
            var venueDto = venue.Select(x=> new VenueDto
            {
                VenueId=x.VenueId,
                Name=x.Name,
                Price=x.Price,
                Capacity=x.Capacity,
                Description=x.Description,
            }).ToList();
            return Ok(venueDto);
        }

        // GET: api/Venues/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Venue>> GetVenue(int id)
        {
            Venue venue = await context.Venues.Include(s=>s.Reservations).FirstOrDefaultAsync(v=>v.VenueId == id);
            VenueDto venueDto = new VenueDto();
            venueDto.VenueId = venue.VenueId;
            venueDto.Description = venue.Description;
            venueDto.Name = venue.Name;
            venueDto.Price = venue.Price;
            venueDto.Capacity = venue.Capacity;
            foreach (var item in venue.Reservations)
            {
                venueDto.Reservations.Add(item.Id);
            }

            if (venueDto == null)
            {
                return NotFound();
            }

            return Ok(venueDto);
        }

        // POST: api/Venues
        [HttpPost]
        public async Task<ActionResult<Venue>> PostVenue(VenueDto venueDTO)
        {
            var venue = new Venue
            {
                Name = venueDTO.Name,
                Address = venueDTO.Location,
                Capacity = venueDTO.Capacity,
                Type = venueDTO.Type,
                Description = venueDTO.Description,
                Price = venueDTO.Price,
            };

            context.Venues.Add(venue);
            await context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetVenue), new { id = venue.VenueId }, venue);
        }

        // PUT: api/Venues/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVenue(int id, VenueDto venueDTO)
        {
            if (id != venueDTO.VenueId)
            {
                return BadRequest();
            }

            var venue = await context.Venues.FindAsync(id);
            if (venue == null)
            {
                return NotFound();
            }

            // Update venue properties
            venue.Name = venueDTO.Name;
            venue.Address = venueDTO.Location;
            venue.Capacity = venueDTO.Capacity;
            venue.Type = venueDTO.Type;
            venue.Description = venueDTO.Description;
            venue.Price = venueDTO.Price;

            context.Entry(venue).State = EntityState.Modified;

            try
            {
                await context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VenueExists(id))
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

        // DELETE: api/Venues/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVenue(int id)
        {
            var venue = await context.Venues.FindAsync(id);
            if (venue == null)
            {
                return NotFound();
            }

            context.Venues.Remove(venue);
            await context.SaveChangesAsync();

            return NoContent();
        }

        private bool VenueExists(int id)
        {
            return context.Venues.Any(e => e.VenueId == id);
        }
    }
}
