'use strict';

codeDesignApp.directive("third", function() {
	return {
		restrict: "E",
		scope: {
			image: "@",
			title: "@",
			content: "@"
    },
		templateUrl: "elements/third/thirdTemplate.html"
	}
});
