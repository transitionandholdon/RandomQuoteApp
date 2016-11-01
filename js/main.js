$(document).ready(function() {
	var errorMessage={message:"Unable to get data !  Please Try Again !",by:"Aung Myo Kyaw"};
	function getQuote(){
		$.ajax({
			url:'https://andruxnet-random-famous-quotes.p.mashape.com/',
			type:'POST',
			dataType:'json',
			success:function(data){
				$("#text").html(data.quote);
				$("#author").html(data.author);
				$("a.fa-twitter").attr("data-text",data.quote);
				$("#text,#author").addClass('animated bounceInLeft');
				$("#text,#author").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
					$("#text,#author").removeClass('animated bounceInLeft');
				});
			},
			error:function(error){
				$("#text").html(errorMessage.message);
				$("#author").html(errorMessage.by);
			},
			beforeSend:function(xhr){
				xhr.setRequestHeader("X-Mashape-Authorization", "PSKgJRegHBmsh1A157uuoGMhkUpxp1hW4VQjsn5BUUBMMF18AH");
			}
		});
	}
	getQuote();
	$("#new-quote").click(function() {
		getQuote();
	});
	$("#tweet-quote").click(function() {
		var curQuote=$("#text").html();
		var curAuthor=$("#author").html();
		var url='https://twitter.com/intent/tweet?text=' + encodeURIComponent(curQuote+"\n"+curAuthor);
		window.open(url)
	});
});
