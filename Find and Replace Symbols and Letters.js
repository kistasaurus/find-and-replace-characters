// JavaScript Document
function canAcceptCommand() {
    return true;
}
 
function commandButtons() {
    return new Array("Go", "doIt()", "Cancel", "window.close()");
}
 
function doIt() {
    dreamweaver.setUpFindReplace({
        searchString: "“",
        replaceString: "\"",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: true
    });
    dreamweaver.replaceAll();
    
    dreamweaver.setUpFindReplace({
        searchString: "”",
        replaceString: "\"",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: true
    });
    dreamweaver.replaceAll();
    
    dreamweaver.setUpFindReplace({
        searchString: "‘",
        replaceString: "'",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
    dreamweaver.setUpFindReplace({
        searchString: "’",
        replaceString: "'",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
    dreamweaver.setUpFindReplace({
        searchString: "…",
        replaceString: "...",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
    dreamweaver.setUpFindReplace({
        searchString: "®",
        replaceString: "&reg;",
        searchWhat: "document",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
	searchString: "™",
	replaceString: "&trade;",
	searchWhat: "document",
	searchSource: true,
	useRegularExpressions: false
	});
	dreamweaver.replaceAll();		
	
	dreamweaver.setUpFindReplace({
    searchString: "©",
    replaceString: "&copy;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "†",
    replaceString: "&dagger;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "—",
    replaceString: "&mdash;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "–",
    replaceString: "&ndash;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();		
	
	dreamweaver.setUpFindReplace({
    searchString: "»",
    replaceString: "&raquo;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "«",
    replaceString: "&laquo;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "•",
    replaceString: "&bull;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "¡",
    replaceString: "&iexcl;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "¿",
    replaceString: "&iquest;",
    searchWhat: "document",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "À",
    replaceString: "&Agrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "à",
    replaceString: "&agrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "È",
    replaceString: "&Egrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "è",
    replaceString: "&egrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ì",
    replaceString: "&Igrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ì",
    replaceString: "&igrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ò",
    replaceString: "&Ograve;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ò",
    replaceString: "&ograve;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ù",
    replaceString: "&Ugrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ù",
    replaceString: "&ugrave;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Á",
    replaceString: "&Aacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "á",
    replaceString: "&aacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "É",
    replaceString: "&Eacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "é",
    replaceString: "&eacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Í",
    replaceString: "&Iacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "í",
    replaceString: "&iacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ó",
    replaceString: "&Oacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ó",
    replaceString: "&oacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ú",
    replaceString: "&Uacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ú",
    replaceString: "&uacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ý",
    replaceString: "&Yacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ý",
    replaceString: "&yacute;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Â",
    replaceString: "&Atilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ã",
    replaceString: "&atilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ñ",
    replaceString: "&Ntilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ñ",
    replaceString: "&ntilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Õ",
    replaceString: "&Otilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "õ",
    replaceString: "&otilde;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Â",
    replaceString: "&Acirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "â",
    replaceString: "&acirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ê",
    replaceString: "&Ecirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ê",
    replaceString: "&ecirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Î",
    replaceString: "&Icirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "î",
    replaceString: "&icirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ô",
    replaceString: "&Ocirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ô",
    replaceString: "&ocirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Û",
    replaceString: "&Ucirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "û",
    replaceString: "&ucirc;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ä",
    replaceString: "&Auml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ä",
    replaceString: "&auml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "Ë",
    replaceString: "&Euml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ë",
    replaceString: "&euml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ï",
    replaceString: "&Iuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ï",
    replaceString: "&iuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ö",
    replaceString: "&Ouml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ö",
    replaceString: "&ouml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ü",
    replaceString: "&Uuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ü",
    replaceString: "&uuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ÿ",
    replaceString: "&Yuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ÿ",
    replaceString: "&yuml;",
    searchWhat: "document",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
    window.close();
}
