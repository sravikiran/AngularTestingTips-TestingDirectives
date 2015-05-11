describe('seventh directive', function(){
    var compile, scope;

    beforeEach(function () {
        angular.module('seventhDirectiveApp', []).directive('seventhDirective', function () {
            return {
                replace: true,
                template: '<div>Content in the directive</div>'
            };
        });
    });

    beforeEach(function() {
        module('seventhDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

    });

    it('should have replaced directive element', function () {
        var compiledDirective = compile(angular.element('<div><seventh-directive></seventh-directive></div>'))(scope);
        scope.$digest();

        expect(compiledDirective.find('seventh-directive').length).toEqual(0);
    });
});

