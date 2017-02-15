app.service("mathService",function(){
   this.firstName="Angular Serive";
    this.fullName=function(){
        return "Angular Service method";
    };
        this.multiply=function(a,b){
            return parseInt(a)*parseInt(b);
        }
});