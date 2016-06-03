using AccountManager.Business.Api;
using AccountManager.Business.Api.Models;
using AccountManager.Business.Application.Mappers;
using AccountManager.Business.Domain.Infrastructure;

namespace AccountManager.Business.Application
{
    public class StatementService : IStatementService
    {
        private readonly IStatementItemRepository _statementItemRepository;
        public StatementService(IStatementItemRepository statementItemRepository)
        {
            _statementItemRepository = statementItemRepository;
        }

        public GetStatementItemsResponse GetStatementItems()
        {
            var statementItems = _statementItemRepository.GetStatementItems();

            return GetStatementItemsResponseMapper.Map(statementItems);
        }
    }
}
