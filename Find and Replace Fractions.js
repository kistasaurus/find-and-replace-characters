// JavaScript Document
function canAcceptCommand() {
	return true;
}
 
function commandButtons() {
	return new Array("Go", "doIt()", "Cancel", "window.close()");
}
 
function doIt() {
	dreamweaver.setUpFindReplace({
		searchString: "°",
		replaceString: "&deg;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();

	dreamweaver.setUpFindReplace({
		searchString: "½",
		replaceString: "&frac12;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅓",
		replaceString: "&#8531;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "¼",
		replaceString: "&frac14;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅕",
		replaceString: "&#8533;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅙",
		replaceString: "&#8537;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅛",
		replaceString: "&#8539;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅔",
		replaceString: "&#8532;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅖",
		replaceString: "&#8534;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "¾",
		replaceString: "&frac34;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅗",
		replaceString: "&#8535;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅜",
		replaceString: "&#8540;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅘",
		replaceString: "&#8536;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅚",
		replaceString: "&#8538;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅝",
		replaceString: "&#8541;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
		searchString: "⅞",
		replaceString: "&#8542;",
		searchWhat: "document",
		searchSource: true,
		useRegularExpressions: true
	});
	dreamweaver.replaceAll();
	
	
	window.close();
}
