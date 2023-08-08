using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.StaticFiles;
using Microsoft.EntityFrameworkCore;
using RetailAppServer.Models;

namespace RetailAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ShoeController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IWebHostEnvironment _environment; //To access the project directory folders
        string BaseUrl = "http://localhost:5105";        

        public ShoeController (AppDbContext context, IWebHostEnvironment environment)
        {
            _context = context;
            _environment = environment;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shoe>>> GetShoeData()
        {
            return await _context.Shoe.ToListAsync();
        }

        [HttpPost]
        [Route("insert-product")]
        public async Task<ActionResult<Shoe>> CreateShoeProduct(Shoe shoe)
        {
            _context.Shoe.Add(shoe);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetShoeData", new { id = shoe.Id }, shoe);
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

                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\Shoes");

                if (!Directory.Exists(filePath))
                {
                    Directory.CreateDirectory(filePath);
                }

                var exactPath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\Shoes", fileName);

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

        //Download Image
        [HttpGet]
        [Route("download-image")]
        public async Task<IActionResult> DownloadFile(string fileName)
        {
            var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot\\Images\\Shoes", fileName);

            var provider = new FileExtensionContentTypeProvider();

            if (!provider.TryGetContentType(filePath, out var contenttype))
            {
                contenttype = "application/octet-stream";
            }

            var bytes = await System.IO.File.ReadAllBytesAsync(filePath);
            return File(bytes, contenttype, Path.GetFileName(fileName));

        }

        [HttpGet]
        [Route("get-image-path")]
        public async Task<string> GetImagePath()
        {
            return this._environment.WebRootPath + ".jpg";
            //return this._environment.WebRootPath + "\\Imgaes\\Shoes" + productCode;
        }                

    }
}
