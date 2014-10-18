$(document).ready(function () {
    SC.initialize({
        client_id: "be76057de70ac578b8235ce2d29eae01",
        redirect_uri: "http://programmedby.me/scdl/callback.html",
    });

    SC.connect(function() {
        var user_id;
        SC.get("/me",  function (data) {
            console.log(data);
            user_id = data.id;
            $("#user_id").text(user_id);
        });
    });

});
