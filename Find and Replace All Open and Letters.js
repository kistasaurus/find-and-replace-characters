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
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: true
    });
    dreamweaver.replaceAll();
    
    dreamweaver.setUpFindReplace({
        searchString: "”",
        replaceString: "\"",
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: true
    });
    dreamweaver.replaceAll();
    
    dreamweaver.setUpFindReplace({
        searchString: "‘",
        replaceString: "'",
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
    dreamweaver.setUpFindReplace({
        searchString: "’",
        replaceString: "'",
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
    dreamweaver.setUpFindReplace({
        searchString: "…",
        replaceString: "...",
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
    dreamweaver.setUpFindReplace({
        searchString: "®",
        replaceString: "&reg;",
        searchWhat: "allOpenDocuments",
        searchSource: true,
        useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
	searchString: "™",
	replaceString: "&trade;",
	searchWhat: "allOpenDocuments",
	searchSource: true,
	useRegularExpressions: false
	});
	dreamweaver.replaceAll();		
	
	dreamweaver.setUpFindReplace({
    searchString: "©",
    replaceString: "&copy;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "†",
    replaceString: "&dagger;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "—",
    replaceString: "&mdash;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "–",
    replaceString: "&ndash;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();		
	
	dreamweaver.setUpFindReplace({
    searchString: "»",
    replaceString: "&raquo;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "«",
    replaceString: "&laquo;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "•",
    replaceString: "&bull;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "¡",
    replaceString: "&iexcl;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "¿",
    replaceString: "&iquest;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "¢",
    replaceString: "&cent;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "À",
    replaceString: "&Agrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "à",
    replaceString: "&agrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "È",
    replaceString: "&Egrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "è",
    replaceString: "&egrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ì",
    replaceString: "&Igrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ì",
    replaceString: "&igrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ò",
    replaceString: "&Ograve;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ò",
    replaceString: "&ograve;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ù",
    replaceString: "&Ugrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ù",
    replaceString: "&ugrave;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Á",
    replaceString: "&Aacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "á",
    replaceString: "&aacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "É",
    replaceString: "&Eacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "é",
    replaceString: "&eacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Í",
    replaceString: "&Iacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "í",
    replaceString: "&iacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ó",
    replaceString: "&Oacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ó",
    replaceString: "&oacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ú",
    replaceString: "&Uacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ú",
    replaceString: "&uacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ý",
    replaceString: "&Yacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ý",
    replaceString: "&yacute;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Â",
    replaceString: "&Atilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ã",
    replaceString: "&atilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ñ",
    replaceString: "&Ntilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ñ",
    replaceString: "&ntilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Õ",
    replaceString: "&Otilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "õ",
    replaceString: "&otilde;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Â",
    replaceString: "&Acirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "â",
    replaceString: "&acirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ê",
    replaceString: "&Ecirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ê",
    replaceString: "&ecirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Î",
    replaceString: "&Icirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "î",
    replaceString: "&icirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ô",
    replaceString: "&Ocirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ô",
    replaceString: "&ocirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Û",
    replaceString: "&Ucirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "û",
    replaceString: "&ucirc;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ä",
    replaceString: "&Auml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ä",
    replaceString: "&auml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();	
	
	dreamweaver.setUpFindReplace({
    searchString: "Ë",
    replaceString: "&Euml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ë",
    replaceString: "&euml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ï",
    replaceString: "&Iuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ï",
    replaceString: "&iuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ö",
    replaceString: "&Ouml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ö",
    replaceString: "&ouml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ü",
    replaceString: "&Uuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ü",
    replaceString: "&uuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "Ÿ",
    replaceString: "&Yuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
	dreamweaver.setUpFindReplace({
    searchString: "ÿ",
    replaceString: "&yuml;",
    searchWhat: "allOpenDocuments",
    searchSource: true,
	matchCase: true,
    useRegularExpressions: false
    });
    dreamweaver.replaceAll();
	
    window.close();
}
