$(document).ready(function(){

    var clientId="YourlientID";
    var redirect="http://localhost:63342/instagram/index.html";
    var url="https://api.instagram.com/oauth/authorize/?client_id="+clientId+"&redirect_uri="+redirect+"&response_type=token";

    $(".signInLink").attr("href",url);

    var PageUrl=window.location.href;
    console.log(PageUrl);
    localStorage.token=PageUrl.substring(PageUrl.indexOf("=")+1);


    //to get the user info
    $.ajax({
        url:"https://api.instagram.com/v1/users/self/?access_token="+localStorage.token,
        type:"GET",
        success:function(userInfo){
            console.log(userInfo);
            localStorage.loggedInUserId=userInfo.data.id;
            $(".profileImage").attr("src",userInfo.data.profile_picture);
            $("#lblFullName").html(userInfo.data.full_name);
            $("#lblBio").html("Bio : "+userInfo.data.bio);
            $("#lblFollowers").html("Followers : "+userInfo.data.counts.follows);
            $("#lblFollowedBy").html("Followed By : "+userInfo.data.counts.followed_by);
        },
        error:function(err){
            console.log(err);
        }
    });

    $(".mediaClick").click(function(){
        $.ajax({
            url:"https://api.instagram.com/v1/users/"+localStorage.loggedInUserId+"/media/recent/?access_token="+localStorage.token,
            type:"GET",
            success:function(mediaInfo){
                console.log("mediaInfo",mediaInfo);
                //$.each(mediaInfo.data,function(index,value){
                //    $(".mediaImages").append("<li><img src='"+value.+"' /> </li>");
                //});
                for(var i=0; i<mediaInfo.data.length;i++){
                    var imgSrc=mediaInfo.data[i].images.standard_resolution.url;
                    var imgId=mediaInfo.data[i].id;
                    $(".mediaImages").append("<li><img class='userMediaImage' id='"+imgId+"' src='"+imgSrc+"' /> </li>");
                }
            },
            error:function(err){
                console.log(err);
            }
        })
    });

    $(".mediaImages").on("click",".userMediaImage",function(){
        localStorage.mediaId=$(this).attr("id");
        window.location.href="http://localhost:63342/instagram/mediaInfo.html";
    });




});