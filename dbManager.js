var mysql = require('mysql').createConnection(config.database);

exports.dbQuery = function(query, res) {
	mysql.query(query, function(error, rows) {
		if (error) {
			res.json(500, error);
		} else {
			res.json(200, rows);
		}
	});
}