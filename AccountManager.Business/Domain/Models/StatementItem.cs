using System;
using AccountManager.Business.Library.Domain;

namespace AccountManager.Business.Domain.Models
{
    public class StatementItem : BaseEntity
    {
        protected StatementItem()
        {
        }

        /// <summary>
        /// Create a new statement item
        /// </summary>
        /// <param name="amount">The amount of the entry</param>
        /// <param name="balance">The remaining balance after the entry was completed</param>
        /// <param name="description">A description of the transaction</param>
        /// <param name="dateTime">The date and time the transaction occurred</param>
        public StatementItem(decimal amount, decimal balance, string description, DateTime dateTime)
        {
            Amount = amount;
            Balance = balance;
            Description = description;
            DateTime = dateTime;
        }

        /// <summary>
        /// A description of the transaction
        /// </summary>
        public string Description { get; protected set; }

        /// <summary>
        /// The date and time the transaction occurred
        /// </summary>
        public DateTime DateTime { get; protected set; }
        /// <summary>
        /// The amount of the entry
        /// </summary>
        public decimal Amount { get; protected set; }
        /// <summary>
        /// The remaining balance after the entry was completed
        /// </summary>
        public decimal Balance { get; protected set; }
        /// <summary>
        /// The category of the transaction
        /// </summary>
        public Category Category { get; set; }
    }
}