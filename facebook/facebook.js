function shareArticleToFacebook(id) {
	try {
		var query = "?op=pluginhandler&plugin=facebook&method=getInfo&id=" + param_escape(id);
		console.log(query);
		var d = new Date();
		var ts = d.getTime();
		var w = window.open('backend.php?op=backend&method=loading', 'ttrss_tweet',
			"status=0,toolbar=0,location=0,width=500,height=450,scrollbars=1,menubar=0");
		new Ajax.Request("backend.php",	{
			parameters: query,
			onComplete: function(transport) {
				var ti = JSON.parse(transport.responseText);
				var share_url = "https://www.facebook.com/sharer/sharer.php?u=" + param_escape(ti.link) + "&t=" + param_escape(ti.title);
				w.location.href = share_url;
			}
		});
	} catch (e) {
		exception_error("tweetArticle", e);
	}
}

