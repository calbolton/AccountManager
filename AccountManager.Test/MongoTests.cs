using System;
using AccountManager.Business.Domain.Models;
using AccountManager.Business.Infrastructure.Repositories.Mongo;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace AccountManager.Test
{
    [TestClass]
    public class MongoTests
    {
        [TestMethod]
        public void DevTest()
        {
            var mDb = new MongoDb();

            //var si = new StatementItem(123,123,"Test desc", DateTime.Now)
            //{
            //    Id = 1
            //};

            //mDb.Insert(si);

            var all = mDb.GetAll<StatementItem>();
            var sir = mDb.Get<StatementItem>(1);
            var sit = mDb.Get<StatementItem>(0);
        }
    }
}
