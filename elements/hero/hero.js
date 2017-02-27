'use strict';

codeDesignApp.directive("hero", function() {
	return {
		restrict: "E",
		scope: {
			image: "@",
    	text: "@"
    },
		templateUrl: "elements/hero/heroTemplate.html"
	}
});
