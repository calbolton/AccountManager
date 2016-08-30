using System;
using System.Collections.Generic;
using System.Linq;

namespace StatementHelper.Web.Models
{
    public class ServiceResult
    {
        /// <summary>
        /// Create a new service result
        /// </summary>
        public ServiceResult() : this(true, null, new List<Error>(), new List<Warning>())
        {
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="isSuccess">If the service call was successful</param>
        /// <param name="errors">Errors (if any)</param>
        /// <param name="warnings">Warnings (if any)</param>
        /// <param name="data">The data (if any)</param>
        public ServiceResult(bool isSuccess, object data, ICollection<Error> errors, ICollection<Warning> warnings)
        {
            IsSuccess = isSuccess;
            Errors = errors?.ToList() ?? new List<Error>();
            Warnings = warnings?.ToList() ?? new List<Warning>();
            Data = data;
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="errors">Errors</param>
        public ServiceResult(ICollection<Error> errors) : this(false, null, errors, new List<Warning>())
        {
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="errors">Errors</param>
        /// <param name="warnings">Warnings</param>
        public ServiceResult(ICollection<Error> errors, ICollection<Warning> warnings) : this(false, null, errors, warnings)
        {
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="data">The data</param>
        /// <param name="warnings">Warnings</param>
        public ServiceResult(object data, ICollection<Warning> warnings) : this(true, data, null, warnings)
        {
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="data">The data</param>
        public ServiceResult(object data) : this(true, data, new List<Error>(), new List<Warning>())
        {
        }

        /// <summary>
        /// Create a new service result
        /// </summary>
        /// <param name="data">The data</param>
        public ServiceResult(Exception ex) : this(false, null, new List<Error>() { new Error() { Message = ex.Message} }, new List<Warning>())
        {
        }

        /// <summary>
        /// States whether the action was successful (default true)
        /// </summary>
        public bool IsSuccess { get; set; }

        /// <summary>
        /// A collection of errors (if any)
        /// </summary>
        public List<Error> Errors { get; set; }

        /// <summary>
        /// A collection of warnings (if any)
        /// </summary>
        public List<Warning> Warnings { get; set; }

        /// <summary>
        /// The returned data (if any)
        /// </summary>
        public object Data { get; set; }

        /// <summary>
        /// Adds a warning
        /// </summary>
        /// <param name="warning">The warning to add</param>
        public void AddWarning(Warning warning)
        {
            Warnings.Add(warning);
        }

        /// <summary>
        /// Adds a list of warnings
        /// </summary>
        /// <param name="warnings">The warnings to add</param>
        public void AddWarnings(List<Warning> warnings)
        {
            warnings.ForEach(AddWarning);
        }

        /// <summary>
        /// Converts errors to warnings and add them to list of warnings
        /// </summary>
        /// <param name="errors">The errors to add as warnings</param>
        public void AddWarnings(List<Error> errors)
        {
            errors.ForEach(x => AddWarning(new Warning(x.Message, x.Description)));
        }

        /// <summary>
        /// Add an error
        /// </summary>
        /// <param name="error">The error to add</param>
        public void AddError(Error error)
        {
            Errors.Add(error);
        }

        /// <summary>
        /// Add a list of errors
        /// </summary>
        /// <param name="errors">The errors to add</param>
        public void AddErrors(List<Error> errors)
        {
            errors.ForEach(AddError);
        }
    }
}