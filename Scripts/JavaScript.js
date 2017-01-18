$.ajax( {
	url: "https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=Cats",
	//data: "Cats",
	dataType: 'json',
	type: 'GET',
	headers: {'FCC Wikiviewer': 'datadetectiveagent007@gmail.com'},
	success: function(msg) {
    console.log(JSON.stringify(msg, null, 3));
	}
});



//JSON.stringify(msg, null, 3)