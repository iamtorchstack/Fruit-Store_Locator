function initMap() {
    var capetown = {lat: -33.918861, lng: 18.423300};
    map = new google.maps.Map(document.getElementById('map'), {
      center: capetown,
      zoom: 11,
      mapTypeId: 'roadmap',
      }
    );

  }