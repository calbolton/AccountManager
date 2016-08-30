using System;
using System.Collections.Generic;
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

            //" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" },
            //"" }

            var cat1 = new Category(1, "Bank Charges");
            var cat2 = new Category(2, "Credit Card");
            var cat3 = new Category(3, "Medical Aid");
            var cat4 = new Category(4, "Car Repayment");
            var cat5 = new Category(5, "Dad");
            var cat6 = new Category(6, "Other");
            var cat7 = new Category(7, "Car Insurance");
            var cat8 = new Category(8, "Car");
            var cat9 = new Category(9, "Food");
            var cat10 = new Category(10, "Data");
            var cat11 = new Category(11, "Airtime");
            var cat12 = new Category(12, "Income");
            var cat13 = new Category(13, "Withdrawals");
            var cat14 = new Category(14, "Investment");
            var cat15 = new Category(15, "Health");
            var cat16 = new Category(16, "Garage Card");

            mDb.InsertMany(new List<Category>()
            {
                cat1,
                cat2,
                cat3,
                cat4,
                cat5,
                cat6,
                cat7,
                cat8,
                cat9,
                cat10,
                cat11,
                cat12,
                cat13,
                cat14,
                cat15,
                cat16,
            });

            var cats = mDb.GetAll<Category>();

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
