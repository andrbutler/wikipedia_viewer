
function processResult(result) {
				var out = [];
				for (var i = 0; i < result[1].length; i++){
				 out.push("<a href=" + result[3][i] + 
				 " target= '_blank' class= 'container'><li> <h2 class= 'title'> "+ result[1][i] + "</h2><p class = 'description'>" + result[2][i] + "</p></li></a>");
				
			};
			$('#sites').append(out);
			}

$(document).ready(function(){
	$('#search').on('change', function(event){
		
		var query = /*'tiger';*/document.getElementById('search').value;
		$('#sites').empty();
		$.ajax({
                url: 'http://en.wikipedia.org/w/api.php',
                data: { action: 'opensearch', search: query, format: 'json' },
                dataType: 'jsonp',
                success: processResult
            });
			
		
		event.preventDefault()
	});
	$('#clear').on('click', function(){
		$('#search').val("");
		$('#sites').empty();
	});
});
