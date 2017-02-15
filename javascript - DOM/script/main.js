function print(){
    var classElemets=document.getElementsByClassName("input");

    var firstName=classElemets[0];
    var lastName=classElemets[1];
    var age=document.getElementById("txtAge");

    var element=document.getElementById("result");
    element.className="blueColor";

    var pElement=document.createElement("p");
    pElement.innerHTML=firstName.value+"</br>"+lastName.value;
    pElement.id="pElement";
    pElement.className="pElement";
    pElement.onclick=imageClick;
    element.appendChild(pElement);

    //for(i=0;i<classElemets.length;i++){
    //    element.innerHTML=element.innerHTML+"<br/>"+classElemets[i].value;
    //}

    //var imageElement = document.getElementById("logoImg");
    //imageElement.src="images/costco_wholesale_214_64.png";
    //document.getElementById("logoImg").className="imageClass";
    //imageElement.onclick=imageClick;

}

function imageClick(){
    alert("welcome");
}