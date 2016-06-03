using AccountManager.Business.Api.Models;

namespace AccountManager.Business.Api
{
    public interface IStatementService
    {
        GetStatementItemsResponse GetStatementItems();
    }
}
