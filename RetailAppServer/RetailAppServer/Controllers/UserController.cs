using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace RetailAppServer.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        [HttpGet]
        public string GetMsg() 
        {
            return "Hello World!";
        }

    }
}
