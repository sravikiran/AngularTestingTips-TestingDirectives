angular.module('templates-main', ['sampleTemplate.html']);

angular.module("sampleTemplate.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("sampleTemplate.html",
    "<h3>Header inside inner directive.</h3>\n" +
    "<another-directive></another-directive>");
}]);
