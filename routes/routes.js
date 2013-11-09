
/*
 * GET home page.
 */

function readJsonFileSync(filepath, encoding){	
	var fs = require('fs');

	if (typeof (encoding) == 'undefined'){
		encoding = 'utf8';
	}
	var file = fs.readFileSync(filepath, encoding);
	return JSON.parse(file);				
}


function getConfig(file){
	var filepath = __dirname + '/../public/json/' + file;
	return readJsonFileSync(filepath);
}


exports.index = function(req, res){
	
	var exp = getConfig('experiences');
	var act = getConfig('activities');
	var pub = getConfig('publications');
	var pro = getConfig('projects');
	
	res.render('index', {
		"experiences": exp,
		"activities": act,
		"publications": pub,
		"projects": pro,
	});

};
