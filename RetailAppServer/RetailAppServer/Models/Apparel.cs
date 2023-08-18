using RetailAppServer.Shared.Enums;
using System.ComponentModel.DataAnnotations;

namespace RetailAppServer.Models
{
    public class Apparel
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string ProductName { get; set; }

        [Required]
        public int Price { get; set; }
        
        public ApparelCategoryEnum Category { get; set; }

        public string ImageName { get; set; }

        public string ImageUrl { get; set; }

    }
}
