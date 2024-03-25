
using Graduation_project.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;


namespace Graduation_project
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            builder.Services.AddDbContext<ApplicationEntity>(option => option.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

            builder.Services.AddIdentity<ApplicationUser, IdentityRole>()
           .AddEntityFrameworkStores<ApplicationEntity>()
           .AddDefaultTokenProviders();


            // Add UserManager service
            builder.Services.AddScoped<UserManager<ApplicationUser>>();

            // Add services to the container.

            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            ///////////////////////////
            
            //builder.Configuration.AddJsonFile("appsettings.json", optional: false, reloadOnChange: true);
            //string base64EncodedKey = Environment.GetEnvironmentVariable("JWT_SECRET");
            //byte[] key = Convert.FromBase64String(base64EncodedKey);

            //// Configure JWT authentication with the retrieved key
            //builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
            //    .AddJwtBearer(options =>
            //    {
            //        options.TokenValidationParameters = new TokenValidationParameters
            //        {
            //            ValidateIssuer = true,
            //            ValidateAudience = true,
            //            ValidateLifetime = true,
            //            ValidateIssuerSigningKey = true,
            //            ValidIssuer = builder.Configuration["JWT:ValidIssuer"],
            //            ValidAudience = builder.Configuration["JWT:ValidAudience"],
            //            IssuerSigningKey = new SymmetricSecurityKey(key)
            //        };
            //    });

            var app = builder.Build();


          

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();


            app.MapControllers();

            app.Run();
        }
    }
}
