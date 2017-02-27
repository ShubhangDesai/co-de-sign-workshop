'use strict';

codeDesignApp.directive("card", function() {
	return {
		restrict: "E",
		scope: {
			image: "@",
    	title: "@",
			content: "@"
    },
		templateUrl: "elements/card/cardTemplate.html"
	}
});
