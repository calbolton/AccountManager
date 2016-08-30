namespace StatementHelper.Web.Models
{
    public class Warning
    {
        public Warning()
        {

        }

        public Warning(string code)
        {
            Code = code;
        }

        public Warning(string code, string description)
        {
            Code = code;
            Description = description;
        }

        public string Code { get; set; }

        public string Description { get; set; }
    }
}