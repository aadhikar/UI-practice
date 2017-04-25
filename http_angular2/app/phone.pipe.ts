import {Pipe} from 'angular2/core';

@Pipe({
    name: 'phone'
})
export class PhonePipe{
  
    transform(num) {

      if(num.indexOf('x')>-1){
        var ext = num.slice(num.indexOf('x')+1);
      }
      var n = num.match( /\d+/g ).join('');    

       if(n.startsWith('1')){
         return n.substr(0, 1)+'-'+n.substr(1, 3)+'-'+n.substr(4, 3)+'-'+n.substr(7, 4);
       } else if(n.startsWith('001')){
         return n.substr(2, 1)+'-'+n.substr(3, 3)+'-'+n.substr(6, 3)+'-'+n.substr(9, 4);
       } else {
         return n.substr(0, 3)+'-'+n.substr(3, 3)+'-'+n.substr(6, 4);
       }
    }
}
