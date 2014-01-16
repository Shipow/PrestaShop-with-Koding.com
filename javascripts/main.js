function Main($scope) {
  $scope.username = "username";
  $scope.checkUrl = function() {
    var url = $scope.username+".kd.io/";
    $.ajax(url, {
      statusCode: {
        404: function() {
          alert('page not found');
        }
      }
    });
  };
}

$(document).foundation({
  orbit: {
      animation: 'fade', // Sets the type of animation used for transitioning between slides, can also be 'fade'
      timer_speed: 1000, // Sets the amount of time in milliseconds before transitioning a slide
      animation_speed: 500, // Sets the amount of time in milliseconds the transition between slides will last
      navigation_arrows: true,
      slide_number: false,
      bullets: false, // Does the slider have bullets visible?
      timer: false, // Does the slider have a timer visible?
  }
});

$('#grid > li').waypoint(
    function() {
    $(this).css('visibility', 'visible').addClass('animated fadeInUp');
},{offset: '77%'});

var disqus_shortname = 'kgranger';
(function() {
    var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
    dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
    (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();