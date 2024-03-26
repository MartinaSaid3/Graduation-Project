using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Graduation_project.Migrations
{
    /// <inheritdoc />
    public partial class reservation : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Time",
                table: "Reservations");

            migrationBuilder.AlterColumn<DateTime>(
                name: "Date",
                table: "Reservations",
                type: "datetime2",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<string>(
                name: "SpecialRequests",
                table: "Reservations",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SpecialRequests",
                table: "Reservations");

            migrationBuilder.AlterColumn<int>(
                name: "Date",
                table: "Reservations",
                type: "int",
                nullable: false,
                oldClrType: typeof(DateTime),
                oldType: "datetime2");

            migrationBuilder.AddColumn<int>(
                name: "Time",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
