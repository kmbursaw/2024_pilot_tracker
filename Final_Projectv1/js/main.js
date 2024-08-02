// Add all scripts to the JS folder

(function(){

    /*
    var attrArray = [
        "Total_2023_Pilots", "Total_2023_Student_Pilot_Cert", "Total_2023_Private_Pilot_Cert", "Total_2023_Commercial_Pilot_Cert", "Total_2023_Airline_Transport_Pilot_Cert", "Total_2023_Flight_Instructor_Cert", "2023_Male_Pilots", "2023_Male_Student_Pilot_Cert", "2023_Male_Private_Pilot_Cert", "2023_Male_Commercial_Pilot_Cert", "2023_Male_Airline_Transport_Pilot_Cert", "2023_Male_Flight_Instructor_Cert", "2023_Woman_Total_Pilots", "2023_Woman_Student_Pilot", "2023_Woman_Private_Pilot", "2023_Woman_Commercial_Pilot", "2023_Woman_Airline_Transport_Pilot", "2023_Woman_Flight_Instructor",
        "Total_2022_Pilots", "Total_2022_Student_Pilot_Cert", "Total_2022_Private_Pilot_Cert", "Total_2022_Commercial_Pilot_Cert", "Total_2022_Airline_Transport_Pilot_Cert", "Total_2022_Flight_Instructor_Cert", "2022_Male_Pilots", "2022_Male_Student_Pilot_Cert", "2022_Male_Private_Pilot_Cert", "2022_Male_Commercial_Pilot_Cert", "2022_Male_Airline_Transport_Pilot_Cert", "2022_Male_Flight_Instructor_Cert", "2022_Woman_Total_Pilots", "2022_Woman_Student_Pilot", "2022_Woman_Private_Pilot", "2022_Woman_Commercial_Pilot", "2022_Woman_Airline_Transport_Pilot", "2022_Woman_Flight_Instructor",
        "Total_2021_Pilots", "Total_2021_Student_Pilot_Cert", "Total_2021_Private_Pilot_Cert", "Total_2021_Commercial_Pilot_Cert", "Total_2021_Airline_Transport_Pilot_Cert", "Total_2021_Flight_Instructor_Cert", "2021_Male_Pilots", "2021_Male_Student_Pilot_Cert", "2021_Male_Private_Pilot_Cert", "2021_Male_Commercial_Pilot_Cert", "2021_Male_Airline_Transport_Pilot_Cert", "2021_Male_Flight_Instructor_Cert", "2021_Woman_Total_Pilots", "2021_Woman_Student_Pilot", "2021_Woman_Private_Pilot", "2021_Woman_Commercial_Pilot", "2021_Woman_Airline_Transport_Pilot", "2021_Woman_Flight_Instructor",
        "Total_2020_Pilots", "Total_2020_Student_Pilot_Cert", "Total_2020_Private_Pilot_Cert", "Total_2020_Commercial_Pilot_Cert", "Total_2020_Airline_Transport_Pilot_Cert", "Total_2020_Flight_Instructor_Cert", "2020_Male_Pilots", "2020_Male_Student_Pilot_Cert", "2020_Male_Private_Pilot_Cert", "2020_Male_Commercial_Pilot_Cert", "2020_Male_Airline_Transport_Pilot_Cert", "2020_Male_Flight_Instructor_Cert", "2020_Woman_Total_Pilots", "2020_Woman_Student_Pilot", "2020_Woman_Private_Pilot", "2020_Woman_Commercial_Pilot", "2020_Woman_Airline_Transport_Pilot", "2020_Woman_Flight_Instructor",
        "Total_2019_Pilots", "Total_2019_Student_Pilot_Cert", "Total_2019_Private_Pilot_Cert", "Total_2019_Commercial_Pilot_Cert", "Total_2019_Airline_Transport_Pilot_Cert", "Total_2019_Flight_Instructor_Cert", "2019_Male_Pilots", "2019_Male_Student_Pilot_Cert", "2019_Male_Private_Pilot_Cert", "2019_Male_Commercial_Pilot_Cert", "2019_Male_Airline_Transport_Pilot_Cert", "2019_Male_Flight_Instructor_Cert", "2019_Woman_Total_Pilots", "2019_Woman_Student_Pilot", "2019_Woman_Private_Pilot", "2019_Woman_Commercial_Pilot", "2019_Woman_Airline_Transport_Pilot", "2019_Woman_Flight_Instructor",
        "Total_2018_Pilots", "Total_2018_Student_Pilot_Cert", "Total_2018_Private_Pilot_Cert", "Total_2018_Commercial_Pilot_Cert", "Total_2018_Airline_Transport_Pilot_Cert", "Total_2018_Flight_Instructor_Cert", "2018_Male_Pilots", "2018_Male_Student_Pilot_Cert", "2018_Male_Private_Pilot_Cert", "2018_Male_Commercial_Pilot_Cert", "2018_Male_Airline_Transport_Pilot_Cert", "2018_Male_Flight_Instructor_Cert", "2018_Woman_Total_Pilots", "2018_Woman_Student_Pilot", "2018_Woman_Private_Pilot", "2018_Woman_Commercial_Pilot", "2018_Woman_Airline_Transport_Pilot", "2018_Woman_Flight_Instructor"
    ]
    //var expressed = attrArray[0];





    function main() {
        var svg = d3.select("svg"),
        margin = 200,
        width = svg.attr("width") - margin,
        height = svg.attr("height") - margin;

        svg.append("text")
            .attr("transform", "translate(100,0)")
            .attr("x", 170)
            .attr("y", 50)
            .attr("font-size", "24px")
            .text("Pilots");


        var xScale = d3.scaleBand().range([0, width]).padding(0.4),
            yScale = d3.scaleLinear().range([height, 0]);

        var g = svg.append("g").attr("transform", "translate("+100+","+100+")");

        d3.csv("data/Country_v2.csv").then(function(data){

            data.forEach(function(d){
                d.Total_2023_Pilots = +d.Total_2023_Pilots;
                //d.value = +d.value;
                console.log(typeof d.Total_2023_Pilots);
                console.log(d.Total_2023_Pilots);
            })

            xScale.domain(data.map(function(d){ return d.Country;}));
            yScale.domain([0, d3.max(data, function(d){return d.Total_2023_Pilots})]);

            g.append("g")
                .attr('transform', 'translate(0,'+height+')')
                .call(d3.axisBottom(xScale).tickFormat(function(d){
                    return "Total 2023";
                }))
                .selectAll("text") // Style the text labels for better readability
                .attr("y", 0)
                .attr("x", 9)
                .attr("dy", ".35em")
                .attr("transform", "rotate(45)")
                .style("text-anchor", "start");
            g.append("g")
                .call(d3.axisLeft(yScale).tickFormat(function(d){
                return d + " Pilots";
            }).ticks(10));

        g.selectAll(".bar")
            .data(data)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d){ return xScale(d.Country);})
            .attr("y", function(d){ return yScale(d.Total_2023_Pilots);})
            .attr("width", xScale.bandwidth())
            .attr("height", function(d){ return height - yScale(d.Total_2023_Pilots);});


        });

    }

    function setMap() {

        var width = 700
            height = 400;

        var map = d3.select(".map-container")
        .append("svg")
        .attr("class", "map")
        .attr("width", width)
        .attr("height", height);

        var projection = d3.geoAlbers()
                .center([0.00, 48.00])

                .rotate([122.55, 0.00, 0])

                .parallels([29.50, 45.5])

                .scale(400.00)

                .translate([width / 2, height / 2]);
                
        var path = d3.geoPath()
            .projection(projection);

        var promises = [];    
            promises.push(d3.csv("Country_v2.csv")); //load attributes from csv   
            promises.push(d3.json("data/pilots_by_state.geojson"));
            
        //Error catching to tell user if data not loaded
        Promise.all(promises)
            .then(callback)
            .catch(function(error) {
                console.log("Error loading data:", error);
        });

        function callback(data) {
            var country = data[0],
                pilots = data[1];

            //translate GeoJson
            var pilotsFeature = geojson.feature(pilots, pilots.objects.pilots_by_state).features;

        }
        // Render map here
        map.selectAll("path")
        .data(pilotsFeature)
        .enter().append("path")
        .attr("d", path)
        .attr("class", "country")
        .style("fill", "#ccc")
        .style("stroke", "#000");
    }
    */

    var path = d3.geo.path();

    d3.json("pilots_by_states.geojson", function(json){
        
        svg.selectAll("path")
        .data(json.features)
        .enter()
        .append("path")
        .attr("d", path);

    });


    //main();
    //setMap();





});