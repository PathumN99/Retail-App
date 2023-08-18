using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;

namespace RetailAppServer.Services
{
    public class ApparelService
    {
        private readonly AppDbContext _context;

        public ApparelService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<Apparel>> GetApparelData()
        {
            return await _context.Apparel.ToListAsync();
        }
    }
}
