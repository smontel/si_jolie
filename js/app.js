var mouseX;
// using the video element instead of the complete document
$('video').mousemove( function moveFunc(e) {
    mouseX = e.clientX;
    var valV = (timV * mouseX/ $(document).width()),
        timV = $("#deko_vid").get(0).duration;
    // reducing the precision of calculation
    valV = Math.round(valV * 100) / 100;
    $("#deko_vid").get(0).currentTime = valV;
});
