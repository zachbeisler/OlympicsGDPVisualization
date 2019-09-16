<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js"></script>
<script src="datamaps.world.min.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

<?php

if(!$page){
	$page = "home";
}

?>


<div>
<nav class="navbar navbar-default navbar-fixed-top">
  <div class="container">
	<div class="navbar-header">
	  <a class="navbar-brand" href="index.php">Olympic Country Analysis</a>
	</div>
	<div id="navbar" class="navbar-collapse collapse">
	  <ul class="nav navbar-nav">
		<li <?php if($page == "home"){ echo 'class="active"';} ?>><a href="index.php">Home</a></li>
		<li <?php if($page == "map"){ echo 'class="active"';} ?>><a href="map.php">Interactive Map</a></li>
	  </ul>
	  <ul class="nav navbar-nav navbar-right">

	  </ul>
	</div>
  </div>
</nav>
</div>