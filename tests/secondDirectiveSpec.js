describe('second directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
       angular.module('secondDirectiveApp', []).directive('secondDirective', function(){
           return function(scope, elem){
               var spanElement = angular.element('<span>' + scope.text + '</span>');
               elem.append(spanElement);

               scope.$watch('text', function(newVal, oldVal){
                   spanElement.text(newVal);
               });
           };
       });
    });

    beforeEach(function() {
        module('secondDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
            scope.text = "Some text";
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<div second-directive></div>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should have span element', function () {
        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual(scope.text);
    });

    it('should have updated text in span', function () {
        scope.text = "some other text";
        scope.$digest();

        var spanElement = directiveElem.find('span');
        expect(spanElement).toBeDefined();
        expect(spanElement.text()).toEqual(scope.text);
    });
});