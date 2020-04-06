$.ajax({
	url: "https://www.instagram.com/balletts_bridal?__a=1",
	type: 'GET',
	success: function (response) {
		posts = response.graphql.user.edge_owner_to_timeline_media.edges;
		posts_html = '';
		url_html = '';

		for (i = 0; i < 11; i++) {
			url = posts[i].node.display_url;
			posts_html += '<div class="col-sm-3 equal-height"><a href="' + url + '"><img src="' + url + '" alt width="640" height="800"></a></div>';
			url_html = '<div class="col-sm-3 equal-height instagram-url"><a href="https://www.instagram.com/balletts_bridal"><i class="fab fa-instagram"><p>View More</p></i></a></div>';
		}

		$(".posts").html(posts_html + url_html);
	}
});