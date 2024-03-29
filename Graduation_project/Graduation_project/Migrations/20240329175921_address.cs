using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Graduation_project.Migrations
{
    /// <inheritdoc />
    public partial class address : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Venues",
                newName: "VenueLocation");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Users",
                newName: "UserLocation");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "VenueLocation",
                table: "Venues",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "UserLocation",
                table: "Users",
                newName: "Location");
        }
    }
}
