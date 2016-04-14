'use strict';

function TimestampHandler () {

	this.getTimestamp = function (req, res) {
		var input = req.params.input;
		var unix = Number(input);
		var unixToDate = new Date(unix * 1000);
		var isUnix = Date.parse(unixToDate);
		var dateToUnix = (Date.parse(input)).toString().split('').slice(0, 10).join('');
		var year = unixToDate.getFullYear();
		var month = unixToDate.getMonth();
		var day = unixToDate.getDate();
		var monthName = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
		var convertedDate = monthName[month] + ' ' + day + ', ' + year;
    if (isUnix) {
		  res.json({'unix': input, 'regular': convertedDate});
    }
    else if (dateToUnix === 'NaN') {
			res.json({'unix': null, 'regular': null});

    }
		else {
			  res.json({'unix': dateToUnix, 'regular': input});
		}
	};
}

module.exports = TimestampHandler;
