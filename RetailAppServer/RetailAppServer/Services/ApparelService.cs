using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;
using RetailAppServer.ServiceInterfaces;

namespace RetailAppServer.Services
{
    public class ApparelService : IApparelService
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
        public async Task<IEnumerable<Apparel>> getAll()
        {
            var result = await _context.Apparel.ToListAsync();
            return result;
        }
    }
}
