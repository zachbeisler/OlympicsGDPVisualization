<?php

$page = "map";

include 'header.php';

?>

<div id="map_vis" class="container"></div>




<script>

var map = null;

$(window).on('resize', function(){
	if(map != null){
		map.resize();
	}
	
});


$(document).ready(function() {
    map = new Datamap({
		element: document.getElementById("map_vis"),
		responsive: true
	});
});



</script>