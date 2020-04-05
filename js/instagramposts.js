


  $.ajax({
    url:"https://www.instagram.com/balletts_bridal?__a=1",
	type:'GET',
    success:function(response){
      posts = response.graphql.user.edge_owner_to_timeline_media.edges;
	  posts_html = '';
	  url_html='';
      for(i=0; i < 8; i++){
        url = posts[i].node.display_url;
		posts_html += '<div class="col equal-height"><img src="'+url+'"></div>';
		url_html='<div class="col equal-height instagram-url"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/balletts_bridal?__a=1"><p>View More</p></a></div>';
	}

	  $(".posts").html(posts_html+url_html);
	}
})
