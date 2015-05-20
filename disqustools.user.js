// ==UserScript==
// @name          Disqus Admin Enhancement
// @namespace     http://disqus.com/
// @description	  Speeds up Disqus workflow
// @include       https://disqus.com/admin/moderate/*
// ==/UserScript==

var MJW = {};

MJW.sites = [
	{'name': 'Design & Illustration', 'subdomain': 'design'}, 
	{'name': 'Code', 'subdomain': 'code'},
	{'name': 'Web Design', 'subdomain': 'webdesign'},
	{'name': 'Music & Audio', 'subdomain': 'music'},
	{'name': 'Photo & Video', 'subdomain': 'photography'},
	{'name': '3D & Motion Graphics', 'subdomain': 'cgi'},
	{'name': 'Game Development', 'subdomain': 'gamedevelopment'},
	{'name': 'Computer Skills', 'subdomain': 'computers'},
	{'name': 'Crafts & DIY', 'subdomain': 'crafts'},
	{'name': 'Business', 'subdomain': 'business'},
];
MJW.siteListDiv = $('div#secondary').append('<div id=\'site_list\'>');
$(MJW.siteListDiv).append('<h4>Highlight</h4>');
MJW.siteListEl = $(MJW.siteListDiv).append("<ul id='siteList'>");
$(MJW.siteListEl).css('list-style-type', 'none');
for (var i = 0; i < MJW.sites.length; i++) {
	site = MJW.sites[i];
	$(MJW.siteListEl).append('<li><label><input value=\'' + site['subdomain'] + '\' type=\'checkbox\' class=\'siteCheckbox\'> ' + site['name'] + '</li>');
}

// Neat hack for easily creating a multi-line string
MJW.MultiString = function(f) {
  return f.toString().split('\n').slice(1, -1).join('\n');
}

MJW.scriptText = MJW.MultiString(function() {
/*
// This multi-line comment contains the actual code we want to run within the page's own sandbox.
// We must inject it via a <script> tag.

var createSelectorFromCheckboxes = function () {
	var subdomains = $('input.siteCheckbox:checkbox:checked').map(function() { return this.value; }).get();
	for (var i = subdomains.length - 1; i >= 0; i--) {
		subdomains[i] = 'a[href*=\"//' + subdomains[i] + '\"]';
	};
	return subdomains.join(',');
}

var highlightDesiredComments = function () {
	dehighlightAllComments();
	var selector = createSelectorFromCheckboxes();
	if (selector != '') {
		$(selector).closest('li.comment').css('background-color', '#FBFF7A');
	}
}

var dehighlightAllComments = function () {
	$('li.comment').css('background-color', '#FFFFFF');
}

var onCheckboxChanged = function () {
	highlightDesiredComments();
	localStorage.setItem("MJW.subdomainsToHighlight", $('input.siteCheckbox:checkbox:checked').map(function() { return this.value; }).get().join(','));
}

var checkSavedCheckboxes = function () {
	var subdomains = localStorage.getItem("MJW.subdomainsToHighlight").split(',');
	for (var i = subdomains.length - 1; i >= 0; i--) {
		$('input[value=\"' + subdomains[i] + '\"]').attr('checked', 'checked');
	};
}

if (localStorage.getItem("MJW.subdomainsToHighlight") === null) {
	localStorage.setItem("MJW.subdomainsToHighlight", "");
}
checkSavedCheckboxes();
$(document).bind('page:render:done', highlightDesiredComments);
$('input.siteCheckbox').change(onCheckboxChanged);
highlightDesiredComments();
*/
});
MJW.scriptText = MJW.scriptText.substr(3, MJW.scriptText.length - 5);	// We trim the /* and */ from the comment

MJW.scriptEl = document.createElement('script');
MJW.scriptEl.appendChild(document.createTextNode(MJW.scriptText));
(document.body || document.head || document.documentElement).appendChild(MJW.scriptEl);