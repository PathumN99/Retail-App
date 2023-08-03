using Microsoft.EntityFrameworkCore;

namespace RetailAppServer.Models
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions options) : base(options)
        {
        }       

        public DbSet<User> User { get; set; }
        public DbSet<Shoe> Shoe { get; set; }
    }
}
