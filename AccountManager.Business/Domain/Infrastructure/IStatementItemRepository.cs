using System.Collections.Generic;
using AccountManager.Business.Domain.Models;

namespace AccountManager.Business.Domain.Infrastructure
{
    public interface IStatementItemRepository
    {
        ICollection<StatementItem> GetStatementItems();
    }
}
