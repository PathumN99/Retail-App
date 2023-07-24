﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RetailAppServer.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [Column(TypeName = "nvarchar(100)")]
        public string Name { get; set; } = ""; // Default value has a emtpy string

        public string Email { get; set; }

        public int PhoneNumber { get; set; }

        public string Address { get; set; }

    }
}
