/**
 * Created by iuhunlj on 7/18/2015.
 */
function mulTable(){
    //var num1=[1,2,3,4,5,6,7,8,9,10];
    for( var num1=1; num1<=10; num1++){
        for(var num2=1; num2<=10; num2++){
            var results=parseInt(num1)*parseInt(num2);
            document.write(num1+"*"+num2 +"=" +results);
            document.write('<br>');
            //alert(results);
        }
    document.write('<br>');
    document.write('<br>');
    }
}



function mulTableRXC(){
    //var num1=[1,2,3,4,5,6,7,8,9,10];
    document.write('<table>');
    document.write('<tr>');
    for( var num1=1; num1<=10; num1++){
        document.write('<td>');
        for(var num2=1; num2<=10; num2++){
            var results=parseInt(num1)*parseInt(num2);
            //document.write(results);
            document.write(num1+"*"+num2 +"=" +results);
            document.write('<br>');
            //alert(results);
        }
        document.write('</td>');
    }
    document.write('</tr>');
    document.write('</table>');
}