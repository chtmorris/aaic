Template.footprint.rendered = function(){

		// Declaring a new function called 'initialize'
    function initialize() {
      var mapOptions = {
        zoom: 2,
        center: new google.maps.LatLng(22.24, 0)
      };

      var map = new google.maps.Map(document.getElementById('map'), mapOptions);

      // var insightContent = '<div id="content">'+
      // '<div id="siteNotice">'+
      // '</div>'+
      // '<div id="bodyContent">'+
      // '<p>Insight Robotics Head office</p>'+
      // '</div>'+
      // '</div>';
      //
      // var infowindow = new google.maps.InfoWindow({
      // content: insightContent
      // });

      var insighthk = new google.maps.Marker({
        position: new google.maps.LatLng(22.400053, 114.192587),
        map: map,
        title: 'Insight Robotics'
      });

      // google.maps.event.addListener(insighthk, 'click', function() {
      //   infowindow.open(map,insighthk);
      // });

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

    }

    // Got rid of Gmap's Window Load event listener - not needed with Meteor's
    // Template.footprint.rendered since this code will only run when the 
    // template is rendered (and by extension, the window is loaded).
    initialize();

};