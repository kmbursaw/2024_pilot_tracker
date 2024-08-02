// Add all scripts to the JS folder
/*
var path = d3.geoPath();

    d3.json("pilots_by_states.geojson", function(json){
        
        svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path);

    });
*/

var width = 700;
var height = 500;

// Define a projection
var projection = d3.geoMercator()
    .scale(1000)  // Adjust scale as needed
    .translate([width / 2, height / 2]); // Center the map

// Define a path generator using the projection
var path = d3.geoPath().projection(projection);

// Create SVG container
var svg = d3.select("body").append("svg")
    .attr("width", width)
    .attr("height", height);

// Load GeoJSON data and create paths
d3.json("pilots_by_state.geojson").then(function(json) {
    svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "steelblue") // Optional: add fill color
        .attr("stroke", "#fff")    // Optional: add stroke color
        .attr("stroke-width", 0.5); // Optional: add stroke width
});