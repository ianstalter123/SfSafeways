// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('AppController', function($scope) {

    console.log("Not initialize");
    google.maps.event.addDomListener(window, 'load', initialize());

    function initialize() {

      console.log("Initialize");

          function addInfoWindow(marker, title) {
      var infowindow = new google.maps.InfoWindow({
        content: title
      });

      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(marker.get('map'), marker);
      });
    }

    function addMarker(lat,lng,name) {
     //creates an infowindow for the app (tooltip popup box)
     var infowindow = new google.maps.InfoWindow({
      content: name
    });



//creates a point for the map
var myLatlng = new google.maps.LatLng(lat,lng);

//creates a marker at the point
//todo: add a custom marker image based on an 'image' attribute in function?
var marker = new google.maps.Marker({
  position: myLatlng,
  map: map,
  title: 'Hello World!',
});
    //infowindow.open(map,marker);
    //adds the info window without opening it
    addInfoWindow(marker, name);
  }

  $scope.positions = [{
    lat: 37.7833,
    lng: -122.4167,
    name:'145 Jackson St'
  },
  {
    lat: 37.776667,
    lng: -122.394109,
    name:'298 King St'

  },
  {
    lat: 37.766942,
    lng: -122.409195,
    name:'2300 16th St #203'
  },
  {
    lat: 37.782742,
    lng: -122.431510,
    name:'1335 Webster St'
  },
  {
    lat: 37.769106,
    lng: -122.428311,
    name:'2020 Market St'
  },
  {
    lat: 37.743220,
    lng: -122.422431,
    name:'3350 Mission St'
  },
  {
    lat: 37.804578,
    lng: -122.433011,
    name:'15 Marina Blvd'
  }
  ];



      var mapOptions = {
        // the Teide ;-)
        center: {lat: 37.7833, lng: -122.4167},
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        mapTypeControlOptions: {
          mapTypeIds: []
        },
        panControl: false,
        streetViewControl: false,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.SMALL
        }
      };

      var map = new google.maps.Map(document.getElementById("map"), mapOptions);
       for(var i = 0; i < $scope.positions.length; i++){
          addMarker($scope.positions[i].lat,$scope.positions[i].lng,$scope.positions[i].name)
        }
      $scope.map = map;

    }
})

.controller('MainCtrl', function($scope,$ionicModal,$ionicTabsDelegate){

   $scope.goForward = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1) {
            $ionicTabsDelegate.select(selected + 1);
        }
    }

    $scope.goBack = function () {
        var selected = $ionicTabsDelegate.selectedIndex();
        if (selected != -1 && selected != 0) {
            $ionicTabsDelegate.select(selected - 1);
        }
    }

  $scope.contacts = 
  [
{name: "ian", info: "cool"},
{name: "kiki", info: "cool"},
{name: "don", info: "cool"},
{name: "mimi", info: "cool"},
{name: "lucy", info: "cool"}
]
  

   $ionicModal.fromTemplateUrl('contact-modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal
  })  

  $scope.openModal = function(index) {
    console.log("hello")
     $scope.contact = $scope.contacts[index];
    $scope.modal.show()
  }

  $scope.closeModal = function() {
    $scope.modal.hide();
  };

  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
  
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
