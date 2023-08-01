using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
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

        [HttpPost]
        [Route("image-upload")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UploadFile(IFormFile file, CancellationToken cancellationToken)
        {
            var result = await WriteFile(file);
            return Ok(result);
        }

        private async Task<string> WriteFile(IFormFile file)
        {
            string fileName = "";
            try
            {
                //var originalFileName = file.FileName;
                var extension = '.' + file.FileName.Split('.')[file.FileName.Split('.').Length - 1]; //retrieves the last element of the aplitted array
                //fileName = originalFileName + extension;
                fileName = DateTime.Now.Ticks.ToString() + extension;

                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images\\Shoes");

                if(!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }

                var exactPath = Path.Combine(Directory.GetCurrentDirectory(), "Images\\Shoes", fileName);
                
                using (var stream = new FileStream(exactPath, FileMode.Create)) 
                {
                    await file.CopyToAsync(stream); //asynchronously copies the contents of the uploaded file
                }
                //FileMode.Create parameter indicates that if the file already exists, it will be overwritten.
                //If the file doesn't exist, a new file will be created.

            }
            catch (Exception ex)
            {                
            }
            return fileName;

        }

        [HttpGet]
        [Route("download-image")]
        public async Task<IActionResult> DownloadFile(string fileName)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "Images\\Shoes", fileName);

            var provider = new FileExtensionContentTypeProvider();

            if(!provider.TryGetContentType(filePath, out var contenttype))
            {
                contenttype = "application/octet-stream";
            }

            var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
            return File(bytes, contenttype, Path.GetFileName(fileName));

        }

    }
}
