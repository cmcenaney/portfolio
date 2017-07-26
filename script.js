

$(document).ready(function(){
	$.getJSON('projects.json', function(data){
		console.log(data)

		var wsj = _.filter(data, function(d) { return d.org == 'WSJ' });
		var nyt = _.filter(data, function(d) { return d.org == 'NYT' });
		var cc = _.filter(data, function(d) { return d.org == 'CC'});

		var projects = {"wsj": wsj, "nyt": nyt, "cc": cc};

		console.log(wsj, nyt, cc)
		var template = $("#template").html();
		var html = Mustache.to_html(template, projects);
		$("#projects").html(html);
	});

	
});