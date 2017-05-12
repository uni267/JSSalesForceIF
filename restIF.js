function sf_rest_getData(orderCode,sf_rest_token){

		var result = $.ajax({
		url: sf_rest_token.instance_url+orderCode,
		type:"GET",
		async: false,
		 headers: {
			'Authorization': "OAuth "+sf_rest_token.access_token
		},
		success: function(response){ console.log("get sfdata")},
		error: function(req, err){ console.log(err); }
	})
	var ret_item  = JSON.parse(decodeURIComponent(result.responseJSON),function(k,v){return v;});
	return (ret_item);
};

function sf_rest_getToken(sf_uri,client_id,client_secret,user_name,user_pass,){	
		var result = $.ajax({
		url: sf_uri,
		type:"POST",
		async: false,
		 headers: {
			'Authorization': "OAuth "+sf_rest_token.access_token
		},
    data: "grant_type=password&client_id="+client_id+"&client_secret="+client_secret+"&username="+user_name+"&password="+user_pass,
		success: function(response){ console.log("get sftoken")},
		error: function(req, err){ console.log(err); }
	})
	var sf_rest_token  = JSON.parse(decodeURIComponent(result.responseJSON),function(k,v){return v;});
	return (sf_rest_token);
};

