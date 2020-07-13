using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace VMGAssessment.Models
{
    public class Vehicle
    {
        [Key]
        public long Id { get; set; }
        [Required]
        public string Client { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public string BookingDate { get; set; }
        public string Notes { get; set; }

    }
}
