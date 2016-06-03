using System;
using System.Collections.Generic;
using AccountManager.Business.Domain.Infrastructure;
using AccountManager.Business.Domain.Models;

namespace AccountManager.Business.Infrastructure
{
    public class NedbankStatementProcessor : IStatementProcessor
    {
        /// <summary>
        /// Process Nedbank statement items
        /// </summary>
        public ICollection<StatementItem> ProcessStatements(string statementJson)
        {
            throw new NotImplementedException();
        }
    }
}