describe('third directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('thirdDirectiveApp', []).directive('thirdDirective', function () {
            return {
                template: '<button>Increment value!</button>',
                link: function (scope, elem) {
                    elem.find('button').on('click', function(){
                        scope.value++;
                    });
                }
            };
        });
    });

    beforeEach(function() {
        module('thirdDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div third-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should increment value on click of button', function (){
        scope.value=10;
        var button = directiveElem.find('button');

        button.triggerHandler('click');
        scope.$digest();

        expect(scope.value).toEqual(11);
    });
});

