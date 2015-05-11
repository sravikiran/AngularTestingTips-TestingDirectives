describe('fifth directive', function(){
    var compile, scope, directiveElem;

    beforeEach(function () {
        angular.module('fifthDirectiveApp', []).directive('fifthDirective', function () {
            return {
                scope:{
                    config: '=',
                    notify: '@',
                    onChange:'&'
                },
                link: function(scope, elem, attrs){

                }
            };
        });
    });

    beforeEach(function() {
        module('fifthDirectiveApp');

        inject(function ($compile, $rootScope) {
            compile=$compile;
            scope=$rootScope.$new();

            scope.config={
                prop: 'value'
            };

            scope.notify = true;

            scope.onChange = jasmine.createSpy('onChange');
        });

        directiveElem = getCompiledElement();
    });

    function getCompiledElement(){
        var compiledDirective = compile(angular.element('<fifth-directive config="config" notify="notify" on-change="onChange()"></fifth-directive>'))(scope);
        scope.$digest();
        return compiledDirective;
    }

    it('isolated scope should have the three properties assigned', function () {
        var isolatedScope = directiveElem.isolateScope();

        expect(isolatedScope.config).toBeDefined();
        expect(isolatedScope.notify).toBeDefined();
        expect(isolatedScope.onChange).toBeDefined();
    });

    it('config on isolated scope should be two-way bound', function(){
        var isolatedScope = directiveElem.isolateScope();

        isolatedScope.config.prop = "value2";

        expect(scope.config.prop).toEqual('value2');
    });

    it('notify on isolated scope should be one-way bound', function(){
        var isolatedScope = directiveElem.isolateScope();

        isolatedScope.notify = false;

        expect(scope.notify).toEqual(true);
    });

    it('onChange should be a function', function(){
        var isolatedScope = directiveElem.isolateScope();

        expect(typeof(isolatedScope.onChange)).toEqual('function');
    });

    it('should call onChange method of scope when invoked from isolated scope', function () {
        var isolatedScope = directiveElem.isolateScope();
        isolatedScope.onChange();

        expect(scope.onChange).toHaveBeenCalled();
    });
});

