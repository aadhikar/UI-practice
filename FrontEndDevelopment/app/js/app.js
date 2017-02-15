angular.module('addressBook', []);

angular.module('addressBook')
    .config(function ($routeProvider) {
      $routeProvider
          .when('/contacts',
          {
            controller: 'ContactsController',
            templateUrl: './app/templates/contacts.html'
          })
          .when('/add-contact',
          {
            controller: 'ContactAddController',
            templateUrl: './app/templates/addContact.html'
          })
          .when('/edit-contact/:contactId',
          {
            controller: 'ContactEditController',
            templateUrl: './app/templates/editContact.html'
          })
          .otherwise({ redirectTo: '/contacts' });
    });
