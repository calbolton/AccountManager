using System.Collections.Generic;
using AccountManager.Business.Domain.Models;

namespace AccountManager.Business.Domain.Infrastructure
{
    public interface IStatementProcessor
    {
        /// <summary>
        /// Process the statement items
        /// </summary>
        ICollection<StatementItem> ProcessStatements(string statementJson);
    }
}