using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AccountManager.Business.Api.Models
{
    public class GetCategoriesResponse 
    {
        public ICollection<CategoryModel> Categories { get; set; }

        public class CategoryModel
        {
            public int Id { get; set; }

            public string Name { get; set; }
        }
    }
}
