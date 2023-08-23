using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;
using RetailAppServer.ServiceInterfaces;

namespace RetailAppServer.Services
{
    public class AccessoryService: IAccessoryService
    {
        private readonly AppDbContext _context;

        public AccessoryService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Accessory>> GetAll()
        {
            var result = await _context.Accessory.ToListAsync();
            return result;
        }        
    }
}
