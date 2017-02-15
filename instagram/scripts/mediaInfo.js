/**
 * Created by VenkatSandeep on 6/30/2015.
 */
$(document).ready(function(){

    var mediaId=localStorage.mediaId;

    $.ajax({
        url:"https://api.instagram.com/v1/media/"+mediaId+"?access_token="+localStorage.token,
        type:"GET",
        success:function(mediaInfo){
            console.log(mediaInfo);
        },
        error:function(){

        }
    })
});