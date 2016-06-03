using System.Collections.Generic;
using System.Linq;
using AccountManager.Business.Api.Models;
using AccountManager.Business.Domain.Models;

namespace AccountManager.Business.Application.Mappers
{
    public static class GetStatementItemsResponseMapper
    {
        public static GetStatementItemsResponse Map(ICollection<StatementItem> statementItems)
        {
            return new GetStatementItemsResponse()
            {
                StatementItems = statementItems.Select(x => new GetStatementItemsResponse.StatementItem()
                {
                    DateTime = x.DateTime,
                    Amount = x.Amount,
                    Balance = x.Balance,
                    Description = x.Description,
                    Category = new GetStatementItemsResponse.Category()
                    {
                        Id = x.Category.Id,
                        Name = x.Category.Name
                    }
                }).ToList()
            };
        }
    }
}
