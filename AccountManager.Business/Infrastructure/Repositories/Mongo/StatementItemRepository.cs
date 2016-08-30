using System;
using System.Collections.Generic;
using AccountManager.Business.Domain.Infrastructure;
using AccountManager.Business.Domain.Models;
using AccountManager.Business.Library.Infrastructure.Mongo;

namespace AccountManager.Business.Infrastructure.Repositories.Mongo
{
    public class StatementItemRepository : BaseRepository, IStatementItemRepository
    {
        public ICollection<StatementItem> GetStatementItems()
        {
            return MongoDb.GetAll<StatementItem>();
        }

        public ICollection<Category> GetAllCategories()
        {
            return MongoDb.GetAll<Category>();
        }
    }
}
