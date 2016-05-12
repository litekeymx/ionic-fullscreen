angular.module('ionic-fullscreen', ['ionic'])

.directive('fullscreen', function($ionicModal){
    
    var html = 
        '<ion-modal-view class="modal-fullscreen">' +
        '<a class="ion-close close" ng-click="ionicFullscreen.close()">&nbsp;</a>' +
        '<ion-content overflow-scroll="true">' +
        '<ion-scroll zooming="true" direction="xy" scrollbar-x="false" scrollbar-y="false" min-zoom="1" has-bouncing="true" class="helper-zoom-container">' +
        '<div class="row">' +
        '<div class="col col-center">' +
        '<img src="{{ image }}" alt="" class="img-center img-fullscreen" />' +
        '</div>' +
        '</div>' +
        '</ion-scroll>' +
        '</ion-content>' +
        '</ion-modal-view>';
    
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('click',
                function () {               
                    var img = element[0].src;
                    var template = html.replace('{{ image }}', img);
                    scope.ionicFullscreen = {
                        modal: $ionicModal.fromTemplate(template, {scope: scope}),
                        close: function(){
                            scope.ionicFullscreen.modal.remove();
                            scope.ionicFullscreen = undefined;
                        }
                    };
                    scope.ionicFullscreen.modal.show();                    
                }
            );
        }
    }
});