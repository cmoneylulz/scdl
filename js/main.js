$.document.onload() = function()
{
 	SC.initialize({
	    client_id: "be76057de70ac578b8235ce2d29eae01",
	    redirect_uri: "http://programmedby.me/scdl/callback.html",
	});

	SC.connect(function() {
	  	alert("hello its working");
    });
}
