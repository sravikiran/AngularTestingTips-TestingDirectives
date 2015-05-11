describe('eighth directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('eighthDirectiveApp', []).directive('eighthDirective', function(){
            return{
                transclude: true,
                template:'<div>Text in the directive.<div ng-transclude></div></div>'
            };
        });
    });

    beforeEach(function() {
        module('eighthDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<eighth-directive><p class="essay">This is the custom content</p></seventh-directive>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('should have an ng-transclude directive in it', function () {
        var transcludeElem = directiveElem.find('div[ng-transclude]');
        expect(transcludeElem.length).toBe(1);
    });

    it('should have transclude content', function () {
        expect(directiveElem.find('p').length).toEqual(1);
    });
});
