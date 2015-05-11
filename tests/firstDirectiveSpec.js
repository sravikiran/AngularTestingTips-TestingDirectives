describe('first directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('firstDirectiveApp', [])
            .directive('firstDirective', function(){
                return function(scope, elem){
                    elem.append('<span>This span is appended from directive.</span>');
                };
            });
    });

    beforeEach(function() {
        module('firstDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div first-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual('This span is appended from directive.');
    });
});

