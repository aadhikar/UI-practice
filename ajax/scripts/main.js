$(document).ready(function(){
   $.ajax({
        url: "scripts/users.json",
        success: function( resp ) {
            console.log(resp);
           $("#name").html(resp.data.full_name);
            $("#profileImage").attr("src",resp.data.profile_picture);
        },
        error: function( req, status, err ) {
            console.log( 'something went wrong', status, err );
        }
    });
});

