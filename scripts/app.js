angular
    .module('webapp', ['ngMaterial', 'ngMessages', 'ngResource'])
    .controller('DemoCtrl', function($scope, $http, $resource, $mdDialog) {

        $scope.view = [];
        // $scope.test = "booyah" booyah test to ensure angular info is passing through

        $http.get('https://api.punkapi.com/v2/beers').then(res => {
            // console.log(res.data);
            $scope.view = res.data;
        });

        $scope.showDialog = function(e, item) {
            $mdDialog.show({
                locals: {
                    item: item
                },
                controller: PopupCtrl,
                controllerAs: 'dialog',
                templateUrl: '/scripts/views/info.html',
                parent: angular.element(document.body),
                targetEvent: e,
                clickOutsideToClose: true,
            })
        }

        function PopupCtrl($scope, $mdDialog, item) {
            $scope.item = item;

            $scope.closeDialog = function() {
                $mdDialog.hide();
            };
        }


    })
    .config(function($mdThemingProvider) {
        $mdThemingProvider.theme('docs-dark', 'default')
            .primaryPalette('yellow')
            .dark();
    });
