using AccountManager.Business.Library.Domain;

namespace AccountManager.Business.Domain.Models
{
    public class Category : BaseEntity
    {
        public Category(int id, string name)
        {
            Id = id;
            Name = name;
        }

        /// <summary>
        /// The name of the category
        /// </summary>
        public string Name { get; set; }


    }
}