using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using AccountManager.Business.Api;
using AccountManager.Business.Api.Models;
using AccountManager.Business.Application;
using AccountManager.Business.Infrastructure.Repositories.Mongo;
using StatementHelper.Web.Models;

namespace AccountManager.Web.Controllers
{
    public class StatementController : ApiController
    {
        private IStatementService _statementService;

        public StatementController()
        {
            var r = new StatementItemRepository();
            _statementService = new StatementService(r);
        }

        public ServiceResult GetStatementItems()
        {
            var response = _statementService.GetStatementItems();
            return new ServiceResult(response);
        }

        public ServiceResult GetCategories()
        {
            var response = _statementService.GetCategories();
            return new ServiceResult(response);
        }
    }
}
