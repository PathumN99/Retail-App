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

        [Required]
        public string ProductName { get; set; }

        [Required]
        public int Price { get; set; }

        [Required]
        public ShoeBrandEnum Brand { get; set; }
        
        public string ImageName { get; set; }
        
        public string ImageUrl { get; set; }


    }
}
