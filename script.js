

$(document).ready(function(){
	$.getJSON('projects.json', function(data){
		
		var d4c = _.filter(data, function(d){ return d.org == 'D4C' });
		var wsj = _.filter(data, function(d) { return d.org == 'WSJ' });
		var nyt = _.filter(data, function(d) { return d.org == 'NYT' });
		var cc = _.filter(data, function(d) { return d.org == 'CC'});
		var sd = _.filter(data, function(d) { return d.org == 'SD'});

		var projects = {"sd": sd, "d4c": d4c, "wsj": wsj, "nyt": nyt, "cc": cc};

		console.log(projects)

		var template = $("#template").html();
		var html = Mustache.to_html(template, projects);
		$("#projects").html(html);
	});

	
});