using Microsoft.EntityFrameworkCore.Metadata.Internal;
using RetailAppServer.Shared.Enums;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetailAppServer.Models
{
    public class Shoe
    {
        [Key]
        public int Id { get; set; }
       
        public string ProductName { get; set; }

        public int Price { get; set; }
        
        public ShoeBrandEnum Brand { get; set; }
        
        public string ImageName { get; set; }
        
        public string ImageUrl { get; set; }


    }
}
