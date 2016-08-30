using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccountManager.Business.Api.Models;
using AccountManager.Business.Domain.Models;

namespace AccountManager.Business.Application.Mappers
{
    public static class GetCategoriesResponseMapper
    {
        public static GetCategoriesResponse Map(ICollection<Category> categories)
        {
            return new GetCategoriesResponse()
            {
                Categories = categories.Select(Map).ToList()
            };
        }

        public static GetCategoriesResponse.CategoryModel Map(Category category)
        {
            return new GetCategoriesResponse.CategoryModel()
            {
                Id = category.Id,
                Name = category.Name
            };
        }
    }
}
