$(function() {

    var a = 0;
    var center = $("svg").width() / 2;
    var thick  = $("#progress").attr("stroke-width");
    var radius = center - thick/2;

    function getCoords() {
        var rads = (a-90) * Math.PI / 180.0;
        var x = center + (radius * Math.cos(rads));
        var y = center + (radius * Math.sin(rads));
        return {
            x: x,
            y: y,
            large: a < 180 ? '0' : '1'
        };
    }

    function draw() {
        a += 3;
        if (a >= 360) a = 0;
        var c = getCoords();
        var d = [
            "M", center, 20,
            "A", radius, radius, 0, c.large, 1, c.x, c.y
        ].join(" ");
        $("#progress").attr("d", d);
    }

    var interval = setInterval(draw, 55);


});
	