using System;
using System.Collections.Generic;

namespace AccountManager.Business.Api.Models
{
    public class GetStatementItemsResponse
    {
        public ICollection<StatementItem> StatementItems { get; set; }

        public class StatementItem
        {
            public string Description { get; set; }

            public decimal Amount { get; set; }

            public decimal Balance { get; set; }

            public DateTime DateTime { get; set; }

            public Category Category { get; set; }
        }

        public class Category
        {
            public int Id { get; set; }

            public string Name { get; set; } 
        }
    }
}
