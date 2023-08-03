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

        [HttpPost]
        [Route("upload")]
        public async Task<IActionResult> Upload(IFormFile image)
        {
            if (image == null || image.Length <= 0)
            {
                return BadRequest("Invalid file");
            }

            // Get the file extension (you can customize this based on your needs)
            var fileExtension = Path.GetExtension(image.FileName);

            // Generate a unique filename (you can use GUID or any other approach)
            var fileName = $"{System.Guid.NewGuid()}{fileExtension}";

            // Save the image to the server folder (you should configure the path)
            var filePath = Path.Combine("your-server-folder-path", fileName);

            using (var stream = new FileStream(filePath, FileMode.Create))
            {
                await image.CopyToAsync(stream);
            }

            return Ok(new { fileName });
        }

        /*private string GetImage(string productCode)
        {
            string ImageUrl = string.Empty;
            string HostUrl = "http://localhost:5105/";
            string filePath = GetFilePath(productCode);
            string ImagePath = filePath + "\\default.jpg";

            if (!System.IO.File.Exists(ImagePath))
            {
                ImageUrl = HostUrl + "/Images/Shoes/default.jpg";
            }
            else
            {
                ImageUrl = HostUrl + "/Images/Shoes/" + productCode + "/";
            }

            return ImageUrl;
        }*/

    }
}
