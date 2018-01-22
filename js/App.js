var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
var myHeaders = {
	'X-Client-Id': '2772',
	'X-Auth-Token': '4f8cfa5562a47e2357cc22eaea7d1334'
};

$.ajaxSetup({
	headers: myHeaders
});

$.ajax({
	url: baseUrl + '/board',
	method: 'GET',
	sucess: function(response){
		setupColumns(response.columns);
	}
});

function setupColumns(columns){
	columns.forEach(function(column){
		var col = new Column(column.id, column.name);
		board.createColumn(col);
		setupCards(col, column.cards);
	});
}

function setupCards(col, cards){
	cards.forEach(function(card){
		var card = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
		col.createCard(card);
	});
}




