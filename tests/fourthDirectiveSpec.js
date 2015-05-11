describe('fourth directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('fourthDirectiveApp', ['templates-main']).directive('fourthDirective', function () {
            return {
                templateUrl: 'sampleTemplate.html'
            };
        });
    });

    beforeEach(function() {
        module('fourthDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div fourth-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should applied template', function () {
        expect(directiveElem.html()).not.toEqual('');
    });

    it('should have another-person element', function () {
        expect(directiveElem.find('another-directive').length).toEqual(1);
    });
});

