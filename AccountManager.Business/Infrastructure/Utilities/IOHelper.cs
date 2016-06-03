using System;
using System.Collections.Generic;
using System.IO;
using AccountManager.Business.Domain.Models;
using Newtonsoft.Json;

namespace AccountManager.Business.Infrastructure.Utilities
{
    public static class IOHelper
    {
        private static string _path;
        public static string Path
        {
            get
            {
                if (string.IsNullOrWhiteSpace(_path))
                {
                    _path = System.IO.Path.Combine(Environment.CurrentDirectory, @"_data\statementItems.json");
                }
                return _path;
            }
        }

        public static ICollection<StatementItem> LoadStatementItems()
        {
            var fileInfo = new FileInfo(Path);

            using (var reader = fileInfo.OpenRead())
            {
                var streamReader = new StreamReader(reader);

                var jsonString = streamReader.ReadLine();

                return JsonConvert.DeserializeObject<List<StatementItem>>(jsonString);
            }
        }

        public static void SaveStatements(ICollection<StatementItem> statementItems)
        {
            var fileInfo = new FileInfo(Path);

            if (fileInfo.Exists)
            {
                fileInfo.Delete();
            }

            var jsonString = JsonConvert.SerializeObject(statementItems);

            using (var stream = fileInfo.Create())
            {
                var textWriter = new StreamWriter(stream);
                textWriter.WriteLine(jsonString);
                textWriter.Close();
            }
        }
    }
}
