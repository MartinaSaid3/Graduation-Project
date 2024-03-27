using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
namespace Graduation_project.Models

{
    public class ApplicationEntity :  IdentityDbContext<ApplicationUser>
    {
       public ApplicationEntity() { }

        public ApplicationEntity(DbContextOptions<ApplicationEntity> options) : base(options)
        {
        }

        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Payment> Payment { get; set; }
        public DbSet<Venue> Venues { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            modelBuilder.Entity<ApplicationUser>(entity =>
            {
                entity.ToTable(name: "Users");
                entity.Property(e => e.Id).HasColumnName("UserId");
                // Add any additional configuration for ApplicationUser entity
            });
        }
    }
}
