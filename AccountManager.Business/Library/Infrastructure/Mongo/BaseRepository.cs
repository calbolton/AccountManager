using AccountManager.Business.Infrastructure.Repositories.Mongo;

namespace AccountManager.Business.Library.Infrastructure.Mongo
{
    public abstract class BaseRepository
    {
        protected BaseRepository()
        {
            MongoDb = new MongoDb();
        }

        protected MongoDb MongoDb { get; }
    }
}
