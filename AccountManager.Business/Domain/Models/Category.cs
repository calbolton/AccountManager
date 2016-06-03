using AccountManager.Business.Library.Domain;

namespace AccountManager.Business.Domain.Models
{
    public class Category : BaseEntity
    {
        /// <summary>
        /// The name of the category
        /// </summary>
        public string Name { get; set; }
    }
}