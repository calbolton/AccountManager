using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AccountManager.Business.Library.Domain;
using MongoDB.Bson;
using MongoDB.Bson.Serialization;
using MongoDB.Driver;

namespace AccountManager.Business.Infrastructure.Repositories.Mongo
{
    public class MongoDb
    {
        protected static IMongoClient _client;
        protected static IMongoDatabase _database;

        public MongoDb()
        {
            _client = new MongoClient();
            _database = _client.GetDatabase("AccountManager");
        }

        public T Get<T>(int id) where T : BaseEntity
        {
            var typeName = typeof(T).ToString();

            var collection = _database.GetCollection<BsonDocument>(typeName);
            var filter = Builders<BsonDocument>.Filter.Eq("Id", id);
            var result = collection.Find(filter);

            var item = BsonSerializer.Deserialize<T>(result.Single());

            return item;
        }

        public ICollection<T> GetAll<T>() where T : BaseEntity
        {
            var typeName = typeof(T).ToString();

            var collection = _database.GetCollection<BsonDocument>(typeName);
            var filter = new BsonDocument();
            var result = collection.Find(filter);

            var items = result.ToList().Select(x => BsonSerializer.Deserialize<T>(x)).ToList();

            return items;
        }

        public void Insert<T>(T item) where T : BaseEntity
        {
            var typeName = typeof(T).ToString();
            
            var bson = item.ToBsonDocument();

            var collection = _database.GetCollection<BsonDocument>(typeName);
            collection.InsertOne(bson);
        }
    }
}
