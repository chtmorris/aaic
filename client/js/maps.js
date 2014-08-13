$(document).ready(function() {
  function initialize() {
    var mapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(22.24, 0)
    };

    var map = new google.maps.Map(document.getElementById('map'),
        mapOptions);

    var insighthk = new google.maps.Marker({
      position: new google.maps.LatLng(22.400053, 114.192587),
      map: map,
      title: 'Insight Robotics'
    });

    var insightchina = new google.maps.Marker({
      position: new google.maps.LatLng(22.7881494,113.5490371),
      map: map,
      title: 'Insight Robotics'
    });

    var snaptee = new google.maps.Marker({
      position: new google.maps.LatLng(22.336358,114.1465404),
      map: map,
      title: 'Snaptee'
    });

    var aidyia = new google.maps.Marker({
      position: new google.maps.LatLng(22.307383,114.223257),
      map: map,
      title: 'Aidyia'
    });

    var playto = new google.maps.Marker({
      position: new google.maps.LatLng(22.2764257,114.1692495),
      map: map,
      title: 'Playto'
    });

    var mongolia = new google.maps.Marker({
      position: new google.maps.LatLng(47.8916501,106.9018714),
      map: map,
      title: 'AAIC Mongolia'
    });

    var DS = new google.maps.Marker({
      position: new google.maps.LatLng(34.067435, -84.061369),
      map: map,
      title: 'DraftServ'
    });

    var DSing = new google.maps.Marker({
      position: new google.maps.LatLng(1.276125, 103.845752),
      map: map,
      title: 'DraftServ'
    });

    // google.maps.event.addListener(map, 'center_changed', function() {
    //   // 3 seconds after the center of the map has changed, pan back to the
    //   // marker.
    //   window.setTimeout(function() {
    //     map.panTo(marker.getPosition());
    //   }, 3000);
    // });

  }
  google.maps.event.addDomListener(window, 'load', initialize);
});
