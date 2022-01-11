$(document).ready(function(){
  $.ajax({

		 url: "PW_4.xml",
		 dataType: "xml",
		 success: function(data) {
		 	  var title="",genre=[],director ="",cast="",synopsis="",score="";
		    
		    
		    $("table").append('<tr><td>Title</td><td>Director</td><td>Genre</td><td>Cast</td><td>Short description</td><td>IMDB-rating</td></</tr>');
		    $(data).find('playlist').each(function(){

		      $(this).find('movie').each(function(){
							title = $(this).find('title').text();

							genre=[];
							
							$(this).find('genre').each(function(i,v){

									genre.push($(v).text());
							});
							genre.join(", ")

							director = $(this).find('director').text();

							cast=[];

							$(this).find('cast').each(function(i,v){

        			$(v).find('person').each(function(i,v){

        		 			cast.push($(v).attr('name'));

							});
							cast.join(", ")
					});

							$(this).find('imdb-info').each(function(){

                 synopsis = $(this).find('synopsis').text();
                 score = $(this).find('score').text();
							});

			  var info = '<tr><td>' + title +'</td><td>' + director +'</td><td>' +  genre + '</td><td>' +  cast + '</td><td>' +  synopsis + '</td><td>' +  score + '</td></tr>';
				$("table").append(info);

      	});

      

       });

		   
     },

     error: function() { alert("error loading file");  }




				
		    
		    

		 
		 
    


});
});

