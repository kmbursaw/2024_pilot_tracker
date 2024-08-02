// Add all scripts to the JS folder


window.onload = setMap();


//chart frame dimensions
var chartWidth = window.innerWidth * 0.425,
    chartHeight = 473,
    leftPadding = 39,
    rightPadding = 2,
    topBottomPadding = 5,
    chartInnerWidth = chartWidth - leftPadding - rightPadding,
    chartInnerHeight = chartHeight - topBottomPadding * 2,
    translate = "translate(" + leftPadding + "," + topBottomPadding + ")";


//set up choropleth map
function setMap(){
    //use Promise.all to parallelize asynchronous data loading
    
    //map frame dimensions
    var width = 960,
        height = 460;

    //create new svg container for the map
    var map = d3.select("body")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

    //create Albers equal area conic projection with Alaska and Hawaii inset
    var projection = d3.geoAlbersUsa()
        .scale(900)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath()
        .projection(projection);

    //use Promise.all to parallelize asynchronous data loading
    var promises = [];    
        promises.push(d3.csv("data/country_v3.csv"));   
        promises.push(d3.json("data/pilots_by_state.geojson"));        
   

    Promise.all(promises)
        .then(callback)
        .catch(function(error) {
            console.log("Error loading data:", error);
        });
    

    function callback(data) {
        var country = data[0], //the numbers are in strings, need to fix that
            byState = data[1];
        
        //console.log(country);
        //console.log(byState);
    
        //add Europe countries to map
        var usaStates = map.append("path")
            .datum(byState)
            .attr("class", "byState")
            .attr("d", path)
            .attr("stroke", "#ccc")
            .attr("fill", "gray")
            //.attr("background", "white")
            //.on("click", clicked);
            .enter()
            .attr("class", function(d){
                return "usaStates" + d.properties.State
            })
            .attr("d", path);


        
    }

    var svgInfo = d3.select("body").append("svg")
        .attr("width", 100)
        .attr("height", 900)
        .style("position", "absolute")
        .style("left", "0px");
        //.sytle("top", "0px");

    var infoRect = svgInfo.append("rect")
        .attr("x", 0)
        .attr("y", 10)
        .attr("width", 100)
        .attr("height", 500)
        .style("fill", "steelblue");

    /*
    function clicked(event, d) {
        const [[x0, y0], [x1, y1]] = path.bounds(d);
        event.stopPropagation();
        states.transition().style("fill", null);
        d3.select(this).transition().style("fill", "red");
        svg.transition().duration(750).call(
          zoom.transform,
          d3.zoomIdentity
            .translate(width / 2, height / 2)
            .scale(Math.min(8, 0.9 / Math.max((x1 - x0) / width, (y1 - y0) / height)))
            .translate(-(x0 + x1) / 2, -(y0 + y1) / 2),
          d3.pointer(event, svg.node())
        );
    }

    function zoomed(event) {
        const {transform} = event;
        g.attr("transform", transform);
        g.attr("stroke-width", 1 / transform.k);
    }
    
    return svg.node();
    */


    
};

function setChart(){
    //create a second svg element to hold the bar chart
    var chart = d3.select(".chart-container")
        .append("svg")
        .attr("width", chartWidth)
        .attr("height", chartHeight)
        .attr("class", "chart");

    //create a rectangle for chart background fill
    var chartBackground = chart.append("rect")
        .attr("class", "chartBackground")
        .attr("width", chartInnerWidth)
        .attr("height", chartInnerHeight)
        .attr("transform", translate);

};

setChart();
