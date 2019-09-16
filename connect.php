<?php

function connect(){
	
	$dbserver = "updb1.up.ist.psu.edu";
	$dbuser = "zqb5073";
	$dbpass = "6mVCrK3M";
	$dbname = "zqb5073";
	
	$mysqlconn = new mysqli( $dbserver, $dbuser, $dbpass, $dbname);
	if ( $mysqlconn->connect_error ) {
		die("Connection failed: " . $mysqlconn->connect_error);
	}
	
	return $mysqlconn;
	
}

function query($sql){
	$result = null;
	try{
		$conn = connect();
		$result = $conn->query($sql);
		$conn->close();
	}catch(Exception $e){
		die("Query Error: " . $e->getMessage());
	}
	return $result;
}

?>