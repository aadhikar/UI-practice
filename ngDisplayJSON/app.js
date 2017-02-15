// Code goes here

(function() {
  'use strict';

  //module is created only once for the application
  angular.module('ngDisplayJSON', []);

  angular.module('ngDisplayJSON').controller('EmployeeController', EmployeeControllerFn);

  function EmployeeControllerFn() {
    var empVm = this;
    
    
    //empVm.imageUrl = 'https://egen.solutions/images/egen-logo.png';
    
    empVm.display = function () {
      console.log(empVm.employees);
    };
    
  

    //TODO: get this via AJAX calls
    empVm.employees = [{
      "id": 1,
      "name": "Leanne Graham",
      "email": "Sincere@april.biz",
      "address": {
        "city": "Gwenborough",
        "zipcode": "92998-3874"
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona"
      }
    }, {
      "id": 2,
      "name": "Ervin Howell",
      "email": "Shanna@melissa.tv",
      "address": {
        "city": "Wisokyburgh",
        "zipcode": "90566-7771"
      },
      "phone": "010-692-6593 x09125",
      "website": "anastasia.net",
      "company": {
        "name": "Deckow-Crist"
      }
    }, {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "Nathan@yesenia.net",
      "address": {
        "city": "McKenziehaven",
        "zipcode": "59590-4157"
      },
      "phone": "1-463-123-4447",
      "website": "ramiro.info",
      "company": {
        "name": "Romaguera-Jacobson"
      }
    }, {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "Julianne.OConner@kory.org",
      "address": {
        "city": "South Elvis",
        "zipcode": "53919-4257"
      },
      "phone": "493-170-9623 x156",
      "website": "kale.biz",
      "company": {
        "name": "Robel-Corkery"
      }
    }, {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "Lucio_Hettinger@annie.ca",
      "address": {
        "city": "Roscoeview",
        "zipcode": "33263"
      },
      "phone": "(254)954-1289",
      "website": "demarco.info",
      "company": {
        "name": "Keebler LLC"
      }
    }, {
      "id": 6,
      "name": "Mrs. Dennis Schulist",
      "email": "Karley_Dach@jasper.info",
      "address": {
        "city": "South Christy",
        "zipcode": "23505-1337"
      },
      "phone": "1-477-935-8478 x6430",
      "website": "ola.org",
      "company": {
        "name": "Considine-Lockman"
      }
    }, {
      "id": 7,
      "name": "Kurtis Weissnat",
      "email": "Telly.Hoeger@billy.biz",
      "address": {
        "city": "Howemouth",
        "zipcode": "58804-1099"
      },
      "phone": "210.067.6132",
      "website": "elvis.io",
      "company": {
        "name": "Johns Group"
      }
    }, {
      "id": 8,
      "name": "Nicholas Runolfsdottir V",
      "email": "Sherwood@rosamond.me",
      "address": {
        "city": "Aliyaview",
        "zipcode": "45169"
      },
      "phone": "586.493.6943 x140",
      "website": "jacynthe.com",
      "company": {
        "name": "Abernathy Group"
      }
    }, {
      "id": 9,
      "name": "Glenna Reichert",
      "email": "Chaim_McDermott@dana.io",
      "address": {
        "city": "Bartholomebury",
        "zipcode": "76495-3109"
      },
      "phone": "(775)976-6794 x41206",
      "website": "conrad.com",
      "company": {
        "name": "Yost and Sons"
      }
    }, {
      "id": 10,
      "name": "Clementina DuBuque",
      "email": "Rey.Padberg@karina.biz",
      "address": {
        "city": "Lebsackbury",
        "zipcode": "31428-2261"
      },
      "phone": "024-648-3804",
      "website": "ambrose.net",
      "company": {
        "name": "Hoeger LLC"
      }
    }];
  }

})();