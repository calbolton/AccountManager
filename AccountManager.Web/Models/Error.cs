namespace StatementHelper.Web.Models
{
    public class Error
    {
        // ERROR CODES
        // Please note - all business errors used in this file must come from the BusinessException class
        public static readonly string UNHANDLED_EXCEPTION = "UNHNDLED";

        public Error()
        {

        }

        public Error(string message)
        {
            Message = message;
        }

        public Error(string message, string description)
        {
            Message = message;
            Description = description;
        }

        public string Message { get; set; }

        public string Description { get; set; }
    }
}