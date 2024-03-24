namespace Graduation_project.Models
{
    public class Payment
    {
        public int Id { get; set; }
        public int Amount { get; set; }
        public string Method { get; set; }
        public int Date { get; set; }

        //navigation 
        public int ReservationId { get; set; }
        public Reservation Reservation { get; set; }
    }
}
