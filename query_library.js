
filter_types = {
	athlete: 0,
	medals: 1
}

function year_range(start, end){
	if(!end){
		return {startYear: start, endYear: start+1};
	}
	return {startYear: start, endYear: end};
}

function athlete_filter_object(yearRange, regionList){
	return {
		type: filter_types.athlete,
		yearRange: yearRange,
		regions: regionList
	};
}

function medal_filter_object(yearRange, regionList, bronze, silver, gold){
	return {
		type: filter_types.medals,
		yearRange: yearRange,
		regions: regionList,
		medals: {
			bronze: bronze,
			silver: silver,
			gold: gold
		}
	};
}

function construct_map_query(filterObject){
	var query = "";
	
	if(filterObject.type == filter_types.athlete){
		
		query += "SELECT Year, Region, code AS Code, Count(Name) AS Players FROM athletes JOIN codes ON Region = country WHERE TRUE";
		
	}else if(filterObject.type == filter_types.medals){
		query += "SELECT Year, Region, code AS Code, Count(Name) AS Medals FROM athletes JOIN codes ON Region = country WHERE TRUE";
		query += " AND (FALSE"
		if(filterObject.medals.bronze){
			query += " OR Medal='Bronze'"
		}
		if(filterObject.medals.silver){
			query += " OR Medal='Silver'";
		}
		if(filterObject.medals.gold){
			query += " OR Medal='Gold'";
		}
		query += ")";
	}
	
	if(filterObject.yearRange){
		query += " AND Year >= " + filterObject.yearRange.startYear + " AND Year < " 
		+ filterObject.yearRange.endYear;
	}
	if(filterObject.regions){
		query += " AND (FALSE"
		for(var i = 0; i < filterObject.regions.length; i++){
			query += " OR Region = '" + filterObject.regions[i] + "'";
		}
		query += ")";
	}
	
	query += " GROUP BY Year, Region";
	
	console.log(query);
	
	return query;
}

function query(sql_string, callback){
	$.get("query.php", {sql: sql_string}, callback);
}

function get_year_range(callback){
	var sql_string = "SELECT Min(Year) AS Start, Max(Year) AS End FROM athletes";
	query(sql_string, callback);
}

function get_max_medals(callback){
	var sql_string = "SELECT MAX(R.TotalMedals) AS MaxMedals FROM (SELECT COUNT(Name) AS TotalMedals FROM athletes WHERE Medal='Gold' OR Medal='Silver' OR Medal='Bronze' GROUP BY Year, Region) AS R";
	query(sql_string, callback);
}

function get_max_athletes(callback){
	var sql_string = "SELECT MAX(R.TotalNames) AS MaxAthletes FROM (SELECT Count(Name) AS TotalNames FROM athletes GROUP BY Year, Region) AS R"
	query(sql_string, callback);
}

