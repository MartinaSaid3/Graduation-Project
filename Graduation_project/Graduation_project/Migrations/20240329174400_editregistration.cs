using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Graduation_project.Migrations
{
    /// <inheritdoc />
    public partial class editregistration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Venues",
                newName: "Location");

            migrationBuilder.RenameColumn(
                name: "Address",
                table: "Users",
                newName: "Location");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Venues",
                newName: "Address");

            migrationBuilder.RenameColumn(
                name: "Location",
                table: "Users",
                newName: "Address");
        }
    }
}
