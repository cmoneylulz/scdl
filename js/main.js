SC.initialize({
    client_id: "be76057de70ac578b8235ce2d29eae01",
    redirect_uri: "http://programmedby.me/scdl/callback.html",
});

$(document).ready(function () {
    SC.connect(function() {
        SC.get("/me",  function (data) {
            $('#user-id').html(data.id);
            console.log(data.id);
        });
    });
});
