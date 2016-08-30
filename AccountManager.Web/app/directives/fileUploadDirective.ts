//module AccountManager.Directives {
//    export class FileUploadDirective implements ng.IDirective
//    {
//        $window: ng.IWindowService;
//        constructor($window: ng.IWindowService) {
//            this.$window = $window;
//        }

//        public restrict = 'A';
//        public require = 'ngModel';
//        public link(scope, el, attr, ctrl) {
//            var fileReader = new this.$window.FileReader();

//            fileReader.onload = function () {
//                ctrl.$setViewValue(fileReader.result);

//                if ('fileLoaded' in attr) {
//                    scope.$eval(attr['fileLoaded']);
//                }
//            };

//            fileReader.onprogress = function (event) {
//                if ('fileProgress' in attr) {
//                    scope.$eval(attr['fileProgress'], { '$total': event.total, '$loaded': event.loaded });
//                }
//            };

//            fileReader.onerror = function () {
//                if ('fileError' in attr) {
//                    scope.$eval(attr['fileError'], { '$error': fileReader.error });
//                }
//            };

//            var fileType = attr['fileSelect'];

//            el.bind('change', function (e) {
//                var fileName = e.target.files[0];

//                if (fileType === '' || fileType === 'text') {
//                    fileReader.readAsText(fileName);
//                } else if (fileType === 'data') {
//                    fileReader.readAsDataURL(fileName);
//                }
//            });
//        }
//    }
//}

//module AccountManager.Directives {
//    'use strict';
//    export class FileUploadDirective implements ng.IDirective{
//        $window: ng.IWindowService;
//        constructor($window: ng.IWindowService) {
//            this.$window = $window;
//            return this.createDirective();
//        }

//        createDirective() {
//            return {
//                restrict: 'A',
//                require: 'ngModel',
//                link: function (scope, el, attr, ctrl) {
//                    var fileReader = new this.$window.FileReader();

//                    fileReader.onload = function () {
//                        ctrl.$setViewValue(fileReader.result);

//                        if ('fileLoaded' in attr) {
//                            scope.$eval(attr['fileLoaded']);
//                        }
//                    };

//                    fileReader.onprogress = function (event) {
//                        if ('fileProgress' in attr) {
//                            scope.$eval(attr['fileProgress'], { '$total': event.total, '$loaded': event.loaded });
//                        }
//                    };

//                    fileReader.onerror = function () {
//                        if ('fileError' in attr) {
//                            scope.$eval(attr['fileError'], { '$error': fileReader.error });
//                        }
//                    };

//                    var fileType = attr['fileSelect'];

//                    el.bind('change', function (e) {
//                        var fileName = e.target.files[0];

//                        if (fileType === '' || fileType === 'text') {
//                            fileReader.readAsText(fileName);
//                        } else if (fileType === 'data') {
//                            fileReader.readAsDataURL(fileName);
//                        }
//                    });
//                }
//            };
//        }
//    }
//}