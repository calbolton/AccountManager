using System.Collections.Generic;
using AccountManager.Business.Domain.Infrastructure;
using AccountManager.Business.Domain.Models;
using AccountManager.Business.Infrastructure.Utilities;

namespace AccountManager.Business.Infrastructure.Repositories.File
{
    public class FileStatementItemRepository : IStatementItemRepository
    {
        public ICollection<StatementItem> GetStatementItems()
        {
            return IOHelper.LoadStatementItems();
        }

        public ICollection<Category> GetAllCategories()
        {
            throw new System.NotImplementedException();
        }
    }
}
