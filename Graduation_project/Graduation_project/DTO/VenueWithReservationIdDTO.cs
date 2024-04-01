namespace Graduation_project.DTO
{
    public class VenueWithReservationIdDTO
    {
        public string Name { get; set; }

        public string Description { get; set; }

        public string Location { get; set; }

        public string OpenBuffet { get; set; }


        public string SetMenue { get; set; }


        public string HighTea { get; set; }

        public double MaxCapacity { get; set; }

        public double MinCapacity { get; set; }


        public double PriceStartingFrom { get; set; }
        //public List<byte[]> Images { get; set; }

        //reference type hatb2a null lw 3mlt add feha hatdrab exception 
        public List<int> ReservationId { get; set; } = new List<int>();
    }
}
