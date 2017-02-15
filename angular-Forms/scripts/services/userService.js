app.factory("userService",function(){
    var users={};
    users.firstName="VenkatSandeep";
    users.lastName="B";
    users.fullName=function(){
        return users.firstName+" "+users.lastName;
    };

    return users;
});