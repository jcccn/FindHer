AV.initialize("u4mko83xiqw8ctdg89paxcnovxr859tasfzm4fdb5qmzcww2", "lt4wf6rna79qw47cx84ummhyqhs6aot8uu3i4opy6d4gylzd");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(uploadPosition);
    }
}

function uploadPosition(position) {
    var AVLocation = AV.Object.extend("Location");
    var avLocation = new AVLocation();
    avLocation.save({
        "latitude": '' + position.coords.latitude,
        "longitude": '' + position.coords.longitude

    },
    {
        success: function(object) {
            alert("页面发生了错误，请刷新");
        }
    });
}