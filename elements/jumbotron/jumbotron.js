'use strict';

codeDesignApp.directive("jumbotron", function() {
	return {
		restrict: "E",
		scope: {
    	title: "@",
			content: "@"
    },
		templateUrl: "elements/jumbotron/jumbotronTemplate.html"
	}
});
