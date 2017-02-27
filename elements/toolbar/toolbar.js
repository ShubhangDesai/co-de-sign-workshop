'use strict';

codeDesignApp.directive("toolbar", function() {
	return {
		restrict: "E",
		scope: {
			header: "@",
			links: "="
    },
		templateUrl: "elements/toolbar/toolbarTemplate.html"
	}
});
