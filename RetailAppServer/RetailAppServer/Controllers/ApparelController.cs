using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;
using RetailAppServer.Services;

namespace RetailAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApparelController: ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _environment; //To access the project directory folders
        private readonly ApparelService _apparelService;

        public ApparelController(AppDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;        
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Apparel>>> GetApparelData()
        {
            return await _context.Apparel.ToListAsync();
        }

        [HttpPost]
        [Route("insert-product")]
        public async Task<ActionResult<Apparel>> CreateShoeProduct(Apparel apparel)
        {
            _context.Apparel.Add(apparel);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetApparelData", new { id = apparel.Id }, apparel);
        }

        //Image upload API
        [HttpPost]
        [Route("image-upload")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(typeof(string), StatusCodes.Status400BadRequest)]
        public async Task<IActionResult> UploadFile(IFormFile file, CancellationToken cancellationToken)
        {
            var result = await WriteFile(file);
            return Ok(result);
        }

        //Save image method
        private async Task<string> WriteFile(IFormFile file)
        {
            string fileName = "";
            try
            {
                fileName = file.FileName;
                //var extension = '.' + file.FileName.Split('.')[file.FileName.Split('.').Length - 1]; //retrieves the last element of the aplitted array
                //fileName = originalFileName + extension;
                //fileName = DateTime.Now.Ticks.ToString() + extension;

                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\Apparel");

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }

                var exactPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\Apparel", fileName);

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

    }
}
