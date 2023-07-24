using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;

namespace RetailAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;

        public UserController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers() 
        {
            return await _context.User.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(int id) 
        {
            var student  = await _context.User.FindAsync(id);

            if(student == null)
            {
                return NotFound();
            }

            return student;
        }

        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            _context.User.Add(user);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetUser", new { id = user.Id }, user);
        }

        private bool UserExists(int id)
        {
            return _context.User.Any(e => e.Id == id);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> UpdateUser(int id, User user) 
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
            _context.Entry(user).State = EntityState.Modified;

            try 
            {
                await _context.SaveChangesAsync();
            } 
            catch (DbUpdateConcurrencyException e) // If a user is trying to delete the record at the same time
            {
                if(!UserExists(id)) 
                {
                    return NotFound();
                } 
                else
                {
                    throw e;
                }
            }
            return NoContent();

        }

        [HttpDelete]
        public async Task<ActionResult> DeleteUser(int id)
        {
            var student = await _context.User.FindAsync(id);

            if (student == null)
            {
                return NotFound();
            }
            _context.User.Remove(student); // First the item will be deleted from the DbSet
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
