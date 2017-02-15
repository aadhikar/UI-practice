app.factory("userFactory",function(){
    var users={};
    return {
        firstName:"VenkatSandeeppppppp",
        lastName:"B",
        fullName:function(){
            return "sandeep"+" "+"B";
        },
        multiply:function(a,b){
            return a*b
        }
    }
});