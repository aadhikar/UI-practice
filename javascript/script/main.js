var b=10;
function add(){
    //var a= "2",b=10;
    //var b=6;
    //var c="anil";
    //var d="anil";
    //var a=6;
    ////if((c!="anil") || (b<=6)){
    ////    alert(true);
    ////}
    ////else{
    ////    alert(false);
    ////}
    //alert(parseInt(a)+parseInt(b));
    var name=document.getElementById("txtNum1").value;
    print(name,6);

}

//function print(name){
//    alert("HI,Welcome "+name);
//}

function print(){
    var days=["sunday","monday"];
    //alert(days.indexOf("monday"));
    var day=document.getElementById("txtNum1").value;
    //if(day=="sunday"){
    //    alert("holiday");
    //}
    //else if(parseInt(age)>10){
    //    alert("partly eligible");
    //}
    //else{
    //    alert("not eligible");
    //}
    //switch(day){
    //    case "sunday":
    //        alert("holiday");
    //        break;
    //    case "tuesday":
    //        alert("working day");
    //        break;
    //    default :
    //        alert("some day");
    //}
    for(i=0;i<days.length;i++){
        alert(days[i]);
    }

}

//add();

function addHover(){
    var a=5;
    //alert(5);
    alert(b);
}