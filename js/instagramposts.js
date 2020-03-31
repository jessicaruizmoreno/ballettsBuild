
	$.ajax({
	url:"https://www.instagram.com/balletts_bridal/",
	type:'get',
	success:function(response){
		
	post = response.graphql.user.edge_owner_to_timeline_media.edges;
	posts_html = '';
	for(var i=0; i<posts.length;i++){
		url = posts[i].node.display_url;
		posts_html = '<div class="col-md-4"><img style="min-height:50px;background-color:#fff;width:100%; src="'+url+'"></div>';
	}
	$(".posts").html(posts_html);
	}
	
	
	});
	