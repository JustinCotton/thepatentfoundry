function initMap() {
  var mapDiv = document.getElementById('map');
  var map = new google.maps.Map(mapDiv, {
    center: {lat: 33.791707, lng: -84.394668},
    zoom: 16
  });
    var marker = new google.maps.Marker({
    position: {lat: 33.791707, lng: -84.394668},
    map: map,
    title: 'The Patent Foundry'
  });
}

$(document).ready(function(){
  $("#term1,#term2,#term3,#term4,#term5,#term6,#term7,#term8,#term9,#term,#term10,#term11,#term12,#definition1,#definition2,#definition3,#definition4,#definition5,#definition6,#definition7,#definition8,#definition9,#definition10,#definition11,#definition12").hide();
    $("#term1").click(show1);
    $("#term2").click(show2);
    $("#term3").click(show3);
    $("#term4").click(show4);
    $("#term5").click(show5);
    $("#term6").click(show6);
    $("#term7").click(show7);
    $("#term8").click(show8);
    $("#term9").click(show9);
    $("#term10").click(show10);
    $("#term11").click(show11);
    $("#term12").click(show12);
});

function show1(){
  $("#definition1").slideToggle();
}

function show2(){
  $("#definition2").slideToggle();
}

function show3(){
  $("#definition3").slideToggle();
}

function show4(){
  $("#definition4").slideToggle();
}

function show5(){
  $("#definition5").slideToggle();
}

function show6(){
  $("#definition6").slideToggle();
}
function show7(){
  $("#definition7").slideToggle();
}

function show8(){
  $("#definition8").slideToggle();
}

function show9(){
  $("#definition9").slideToggle();
}

function show10(){
  $("#definition10").slideToggle();
}

function show11(){
  $("#definition11").slideToggle();
}

function show12(){
  $("#definition12").slideToggle();
}

// angular.module("mainApp", [])
//     .controller("MainController", ["$scope","$http",function($scope,$http) {
//
//     //CONSTANTS
//         var ITEM_LABEL = " items per page";
//
//     //Initialize variables
//         $scope.maxItemArray = [
//             {"name":"10"+ITEM_LABEL,"value":10},
//             {"name":"20"+ITEM_LABEL,"value":20},
//             {"name":"50"+ITEM_LABEL,"value":50}
//         ];
//
//         $http.get("js/state-data.json").success(function(response){
//             $scope.stateArray = response;
//         });
//         $http.get("js/sample-data.json").success(function(response){
//
//             //run for loop on JSON data and add a "name" property containing first and last name for easy filtering
//             angular.forEach(response, function(element,index){
//                 response[index].name = element.first_name + " " + element.last_name;
//             });
//             $scope.memberList = response;
//         });
//         $scope.custom = true;
//         $scope.currentPage = 1;
//         $scope.offset = 0;
//         $scope.searchMember = "";
//         $scope.updatePages = function(memberResults){
//             if(memberResults !== undefined){
//                  $scope.numberOfPages = Math.ceil(Object.keys(memberResults).length/$scope.resultLimit);
//                  console.log("Number of pages: "+$scope.numberOfPages);
//                // $scope.currentPage = 1;
//             }
//         };
//
//         $scope.goBack = function(){
//             /*
//             if($scope.currentPage != 1){
//                // $scope.currentPage--;
//             }
//             */
//           //  console.log($scope.currentPage);
//         };
//
//          $scope.goForward = function(){
//              /*
//             if($scope.currentPage < $scope.numberOfPages){
//               //  $scope.currentPage++;
//                                // $scope.currentPage = 9;
//
//             }*/
//            // console.log($scope.currentPage);
//         };
//         $scope.resultLimit = $scope.maxItemArray[0].value;
//
//     }]
// );
