var pskoding = angular.module('pskoding', ['ngClipboard']);

pskoding.config(['ngClipProvider', function(ngClipProvider) {
  ngClipProvider.setPath("javascripts/vendor/zeroclipboard/ZeroClipboard.swf");
}]);

pskoding.controller('Tutorial-00', function($scope,$http) {
  $scope.copyCommand = function(element) {
    var cmd = $(element).text();
    $(element).closest('.command').addClass('animated bounce');
    return cmd;
  };
  $scope.$watch('usernameInput', function() {
    if($scope.usernameInput==null){
     $scope.username = 'username';
    } else {
      $scope.username = $scope.usernameInput;
    }
  });
  $scope.checkUrl = function() {
    delete $scope.status;
    var url = "http://"+$scope.username+".kd.io/";
    $http.jsonp('https://coderbits.com/tools/urlcheck?callback=JSON_CALLBACK&url='+url).
    success(function(data, status) {
      $scope.data = data;
      if (data === 404) {
        $("#koding-account-error").show();
      }
    }).
    error(function(data, status) {
      $scope.data = data || "Request failed";
    });
  };
});

$(document).foundation({
  orbit: {
      animation: 'fade',
      timer_speed: 1000,
      animation_speed: 500,
      navigation_arrows: true,
      slide_number: false,
      bullets: false,
      timer: false,
    }
  });


$('.window').windows({
    snapping: true,
    snapSpeed: 500,
    snapInterval: 1100,
    onScroll: function(scrollPos){
        // scrollPos:Number
    },
    onSnapComplete: function($el){
        // after window ($el) snaps into place
    },
    onWindowEnter: function($el){
        // when new window ($el) enters viewport
    }
})

$(document).ready(function(){
  var progress = 0;
  //var steps = $('#grid > li').length;
  $('.window').waypoint(
    function() {
      $(this).find('.step').css('visibility', 'visible').addClass('animated fadeInUp');
      progress = $(this).data('progress');
      $('#progress .meter').css('width',progress + '%');
    },
    {offset: '50%'}
  );

  var disqus_shortname = 'kgranger';
  (function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
});
