using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Graduation_project.Migrations
{
    /// <inheritdoc />
    public partial class resetforget : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Venue_VenueId",
                table: "Reservations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Venue",
                table: "Venue");

            migrationBuilder.RenameTable(
                name: "Venue",
                newName: "Venues");

            migrationBuilder.RenameColumn(
                name: "Capicty",
                table: "Venues",
                newName: "Capacity");

            migrationBuilder.AddColumn<bool>(
                name: "IsAvailable",
                table: "Venues",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Venues",
                table: "Venues",
                column: "VenueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Venues_VenueId",
                table: "Reservations",
                column: "VenueId",
                principalTable: "Venues",
                principalColumn: "VenueId",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Venues_VenueId",
                table: "Reservations");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Venues",
                table: "Venues");

            migrationBuilder.DropColumn(
                name: "IsAvailable",
                table: "Venues");

            migrationBuilder.RenameTable(
                name: "Venues",
                newName: "Venue");

            migrationBuilder.RenameColumn(
                name: "Capacity",
                table: "Venue",
                newName: "Capicty");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Venue",
                table: "Venue",
                column: "VenueId");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Venue_VenueId",
                table: "Reservations",
                column: "VenueId",
                principalTable: "Venue",
                principalColumn: "VenueId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
