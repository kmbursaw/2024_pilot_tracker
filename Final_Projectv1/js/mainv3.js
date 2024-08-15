//Wrap everything in a self-executing anonymous function to move to local scope
(function(){

    //pseudo-global variables
    var attrArray = ["Total_2023_Pilots", "Total_2023_Student_Pilot_Cert", "Total_2023_Private_Pilot_Cert", "Total_2023_Commercial_Pilot_Cert", "Total_2023_Airline_Transport_Pilot_Cert", "Total_2023_Flight_Instructor_Cert", "2023_Male_Pilots", "2023_Male_Student_Pilot_Cert", "2023_Male_Private_Pilot_Cert", "2023_Male_Commercial_Pilot_Cert", "2023_Male_Airline_Transport_Pilot_Cert", "2023_Male_Flight_Instructor_Cert", "2023_Women_Total_Pilots", "2023_Women_Student_Pilot", "2023_Women_Private_Pilot", "2023_Women_Commercial_Pilot", "2023_Women_Airline_Transport_Pilot", "2023_Women_Flight_Instructor", 
                "Total_2022_Pilots", "Total_2022_Student_Pilot_Cert", "Total_2022_Private_Pilot_Cert", "Total_2022_Commercial_Pilot_Cert", "Total_2022_Airline_Transport_Pilot_Cert", "Total_2022_Flight_Instructor_Cert", "2022_Male_Pilots", "2022_Male_Student_Pilot_Cert", "2022_Male_Private_Pilot_Cert", "2022_Male_Commercial_Pilot_Cert", "2022_Male_Airline_Transport_Pilot_Cert", "2022_Male_Flight_Instructor_Cert", "2022_Women_Total_Pilots", "2022_Women_Student_Pilot", "2022_Women_Private_Pilot", "2022_Women_Commercial_Pilot", "2022_Women_Airline_Transport_Pilot", "2022_Women_Flight_Instructor", 
                "Total_2021_Pilots", "Total_2021_Student_Pilot_Cert", "Total_2021_Private_Pilot_Cert", "Total_2021_Commercial_Pilot_Cert", "Total_2021_Airline_Transport_Pilot_Cert", "Total_2021_Flight_Instructor_Cert", "2021_Male_Pilots", "2021_Male_Student_Pilot_Cert", "2021_Male_Private_Pilot_Cert", "2021_Male_Commercial_Pilot_Cert", "2021_Male_Airline_Transport_Pilot_Cert", "2021_Male_Flight_Instructor_Cert", "2021_Women_Total_Pilots", "2021_Women_Student_Pilot", "2021_Women_Private_Pilot", "2021_Women_Commercial_Pilot", "2021_Women_Airline_Transport_Pilot", "2021_Women_Flight_Instructor", 
                "Total_2020_Pilots", "Total_2020_Student_Pilot_Cert", "Total_2020_Private_Pilot_Cert", "Total_2020_Commercial_Pilot_Cert", "Total_2020_Airline_Transport_Pilot_Cert", "Total_2020_Flight_Instructor_Cert", "2020_Male_Pilots", "2020_Male_Student_Pilot_Cert", "2020_Male_Private_Pilot_Cert", "2020_Male_Commercial_Pilot_Cert", "2020_Male_Airline_Transport_Pilot_Cert", "2020_Male_Flight_Instructor_Cert", "2020_Women_Total_Pilots", "2020_Women_Student_Pilot", "2020_Women_Private_Pilot", "2020_Women_Commercial_Pilot", "2020_Women_Airline_Transport_Pilot", "2020_Women_Flight_Instructor", 
                "Total_2019_Pilots", "Total_2019_Student_Pilot_Cert", "Total_2019_Private_Pilot_Cert", "Total_2019_Commercial_Pilot_Cert", "Total_2019_Airline_Transport_Pilot_Cert", "Total_2019_Flight_Instructor_Cert", "2019_Male_Pilots", "2019_Male_Student_Pilot_Cert", "2019_Male_Private_Pilot_Cert", "2019_Male_Commercial_Pilot_Cert", "2019_Male_Airline_Transport_Pilot_Cert", "2019_Male_Flight_Instructor_Cert", "2019_Women_Total_Pilots", "2019_Women_Student_Pilot", "2019_Women_Private_Pilot", "2019_Women_Commercial_Pilot", "2019_Women_Airline_Transport_Pilot", "2019_Women_Flight_Instructor", 
                "Total_2018_Pilots", "Total_2018_Student_Pilot_Cert", "Total_2018_Private_Pilot_Cert", "Total_2018_Commercial_Pilot_Cert", "Total_2018_Airline_Transport_Pilot_Cert", "Total_2018_Flight_Instructor_Cert", "2018_Male_Pilots", "2018_Male_Student_Pilot_Cert", "2018_Male_Private_Pilot_Cert", "2018_Male_Commercial_Pilot_Cert", "2018_Male_Airline_Transport_Pilot_Cert", "2018_Male_Flight_Instructor_Cert", "2018_Women_Total_Pilots", "2018_Women_Student_Pilot", "2018_Women_Private_Pilot", "2018_Women_Commercial_Pilot", "2018_Women_Airline_Transport_Pilot", "2018_Women_Flight_Instructor",]; //list of attributes
    var expressed = attrArray[0]; //initial attribute


    var attrFriendlyNames = { "Total_2023_Pilots": "2023 Total Pilots", "Total_2023_Student_Pilot_Cert": "2023 Student Pilots", 
    "Total_2023_Private_Pilot_Cert": "2023 Private Pilots", "Total_2023_Commercial_Pilot_Cert": "2023 Commercial Pilots", 
    "Total_2023_Airline_Transport_Pilot_Cert": "2023 Airline Transport Pilots", "Total_2023_Flight_Instructor_Cert": "2023 Flight Instructors",
    "2023_Male_Pilots": "2023 Male Pilots", "2023_Male_Student_Pilot_Cert": "2023 Male Student Pilots", "2023_Male_Private_Pilot_Cert": "2023 Male Private Pilots", "2023_Male_Commercial_Pilot_Cert": "2023 Male Commercial Pilots", 
    "2023_Male_Airline_Transport_Pilots": "2023 Male Airline Transport Pilots", "2023_Male_Flight_Instructors": "2023 Male Flight Instructors", "2023_Women_Total_Pilots": "2023 Women Pilots", "2023_Women_Student_Pilot": "2023 Women Student Pilots",
    "2023_Women_Private_Pilot": "2023 Women Private Pilots", "2023_Women_Commercial_Pilot": "2023 Women Commercial Pilots", "2023_Women_Airline_Transport_Pilot": "2023 Women Airline Transport Pilots", "2023_Women_Flight_Instructor": "2023 Women Flight Instructors",
    
    "Total_2022_Pilots": "2022 Total Pilots", "Total_2022_Student_Pilot_Cert": "2022 Student Pilots", 
    "Total_2022_Private_Pilot_Cert": "2022 Private Pilots", "Total_2022_Commercial_Pilot_Cert": "2022 Commercial Pilots", 
    "Total_2022_Airline_Transport_Pilot_Cert": "2022 Airline Transport Pilots", "Total_2022_Flight_Instructor_Cert": "2022 Flight Instructors",
    "2022_Male_Pilots": "2022 Male Pilots", "2022_Male_Student_Pilot_Cert": "2022 Male Student Pilots", "2022_Male_Private_Pilot_Cert": "2022 Male Private Pilots", "2022_Male_Commercial_Pilot_Cert": "2022 Male Commercial Pilots", 
    "2022_Male_Airline_Transport_Pilots": "2022 Male Airline Transport Pilots", "2022_Male_Flight_Instructors": "2022 Male Flight Instructors", "2022_Women_Total_Pilots": "2022 Women Pilots", "2022_Women_Student_Pilot": "2022 Women Student Pilots",
    "2022_Women_Private_Pilot": "2022 Women Private Pilots", "2022_Women_Commercial_Pilot": "2022 Women Commercial Pilots", "2022_Women_Airline_Transport_Pilot": "2022 Women Airline Transport Pilots", "2022_Women_Flight_Instructor": "2022 Women Flight Instructors",

    "Total_2021_Pilots": "2021 Total Pilots", "Total_2021_Student_Pilot_Cert": "2021 Student Pilots", 
    "Total_2021_Private_Pilot_Cert": "2021 Private Pilots", "Total_2021_Commercial_Pilot_Cert": "2021 Commercial Pilots", 
    "Total_2021_Airline_Transport_Pilot_Cert": "2021 Airline Transport Pilots", "Total_2021_Flight_Instructor_Cert": "2021 Flight Instructors",
    "2021_Male_Pilots": "2021 Male Pilots", "2021_Male_Student_Pilot_Cert": "2021 Male Student Pilots", "2021_Male_Private_Pilot_Cert": "2021 Male Private Pilots", "2021_Male_Commercial_Pilot_Cert": "2021 Male Commercial Pilots", 
    "2021_Male_Airline_Transport_Pilots": "2021 Male Airline Transport Pilots", "2021_Male_Flight_Instructors": "2021 Male Flight Instructors", "2021_Women_Total_Pilots": "2021 Women Pilots", "2021_Women_Student_Pilot": "2021 Women Student Pilots",
    "2021_Women_Private_Pilot": "2021 Women Private Pilots", "2021_Women_Commercial_Pilot": "2021 Women Commercial Pilots", "2021_Women_Airline_Transport_Pilot": "2021 Women Airline Transport Pilots", "2021_Women_Flight_Instructor": "2021 Women Flight Instructors",

    "Total_2020_Pilots": "2020 Total Pilots", "Total_2020_Student_Pilot_Cert": "2020 Student Pilots", 
    "Total_2020_Private_Pilot_Cert": "2020 Private Pilots", "Total_2020_Commercial_Pilot_Cert": "2020 Commercial Pilots", 
    "Total_2020_Airline_Transport_Pilot_Cert": "2020 Airline Transport Pilots", "Total_2020_Flight_Instructor_Cert": "2020 Flight Instructors",
    "2020_Male_Pilots": "2020 Male Pilots", "2020_Male_Student_Pilot_Cert": "2020 Male Student Pilots", "2020_Male_Private_Pilot_Cert": "2020 Male Private Pilots", "2020_Male_Commercial_Pilot_Cert": "2020 Male Commercial Pilots", 
    "2020_Male_Airline_Transport_Pilots": "2020 Male Airline Transport Pilots", "2020_Male_Flight_Instructors": "2020 Male Flight Instructors", "2020_Women_Total_Pilots": "2020 Women Pilots", "2020_Women_Student_Pilot": "2020 Women Student Pilots",
    "2020_Women_Private_Pilot": "2020 Women Private Pilots", "2020_Women_Commercial_Pilot": "2020 Women Commercial Pilots", "2020_Women_Airline_Transport_Pilot": "2020 Women Airline Transport Pilots", "2020_Women_Flight_Instructor": "2020 Women Flight Instructors",

    "Total_2019_Pilots": "2019 Total Pilots", "Total_2019_Student_Pilot_Cert": "2019 Student Pilots", 
    "Total_2019_Private_Pilot_Cert": "2019 Private Pilots", "Total_2019_Commercial_Pilot_Cert": "2019 Commercial Pilots", 
    "Total_2019_Airline_Transport_Pilot_Cert": "2019 Airline Transport Pilots", "Total_2019_Flight_Instructor_Cert": "2019 Flight Instructors",
    "2019_Male_Pilots": "2019 Male Pilots", "2019_Male_Student_Pilot_Cert": "2019 Male Student Pilots", "2019_Male_Private_Pilot_Cert": "2019 Male Private Pilots", "2019_Male_Commercial_Pilot_Cert": "2019 Male Commercial Pilots", 
    "2019_Male_Airline_Transport_Pilots": "2019 Male Airline Transport Pilots", "2019_Male_Flight_Instructors": "2019 Male Flight Instructors", "2019_Women_Total_Pilots": "2019 Women Pilots", "2019_Women_Student_Pilot": "2019 Women Student Pilots",
    "2019_Women_Private_Pilot": "2019 Women Private Pilots", "2019_Women_Commercial_Pilot": "2019 Women Commercial Pilots", "2019_Women_Airline_Transport_Pilot": "2019 Women Airline Transport Pilots", "2019_Women_Flight_Instructor": "2019 Women Flight Instructors",

    "Total_2018_Pilots": "2018 Total Pilots", "Total_2018_Student_Pilot_Cert": "2018 Student Pilots", 
    "Total_2018_Private_Pilot_Cert": "2018 Private Pilots", "Total_2018_Commercial_Pilot_Cert": "2018 Commercial Pilots", 
    "Total_2018_Airline_Transport_Pilot_Cert": "2018 Airline Transport Pilots", "Total_2018_Flight_Instructor_Cert": "2018 Flight Instructors",
    "2018_Male_Pilots": "2018 Male Pilots", "2018_Male_Student_Pilot_Cert": "2018 Male Student Pilots", "2018_Male_Private_Pilot_Cert": "2018 Male Private Pilots", "2018_Male_Commercial_Pilot_Cert": "2018 Male Commercial Pilots", 
    "2018_Male_Airline_Transport_Pilots": "2018 Male Airline Transport Pilots", "2018_Male_Flight_Instructors": "2018 Male Flight Instructors", "2018_Women_Total_Pilots": "2018 Women Pilots", "2018_Women_Student_Pilot": "2018 Women Student Pilots",
    "2018_Women_Private_Pilot": "2018 Women Private Pilots", "2018_Women_Commercial_Pilot": "2018 Women Commercial Pilots", "2018_Women_Airline_Transport_Pilot": "2018 Women Airline Transport Pilots", "2018_Women_Flight_Instructor": "2018 Women Flight Instructors"
 };     


    //chart frame dimensions
    var chartWidth = window.innerWidth * 0.96,
        chartHeight = 460,
        leftPadding = 39,
        rightPadding = 2,
        topBottomPadding = 5,
        chartInnerWidth = chartWidth - leftPadding - rightPadding,
        chartInnerHeight = chartHeight - topBottomPadding * 2,
        translate = "translate(" + leftPadding + "," + topBottomPadding + ")";

    //create a scale to size bars proportionally to frame and for axis
    var yScale = d3.scaleLinear()
        .range([463, 0])
        .domain([0, 1000000]); 



    window.onload = setMap();


    //set up map
    function setMap() {
        //map frame dimensions
        var width = window.innerWidth * .95,
            height = 460;

        //create new svg container for the map
        var map = d3.select(".map-container")
            .append("svg")
            .attr("class", "map")
            .attr("width", width)
            .attr("height", height);

        //create Albers equal area conic projection centered on United States but including Hawaii, Alaska
        var projection = d3.geoAlbersUsa()

            .scale(980.00)

            .translate([width / 2, height / 2]);

        //Set path
        var path = d3.geoPath()
            .projection(projection);
        
        
        //use Promise.all to parallelize asynchronous data loading
        var promises = [];    
            promises.push(d3.csv("data/pilots_by_statev2.csv")); //load attributes from csv    
            promises.push(d3.csv("data/country_v3.csv")); //load background spatial data    
            promises.push(d3.json("data/US_States_04.topojson")); //load choropleth spatial data    

        

        //Error catching to tell user if data not loaded
        Promise.all(promises)
            .then(callback)
            .catch(function(error) {
                console.log("Error loading data:", error);
            });
        
        //function to call back data and load topojson files and graticules
        function callback(data) {
            var pilots = data[0],
                country = data[1];
                states = data[2];

                
            //translate TopoJSON
            var statesFeature = topojson.feature(states, states.objects.US_States_04).features;

            //join csv data to topojson enumeration units
            var joined_statesFeatures = joinData(statesFeature, pilots);

            //create the color scale
            var colorScale = makeColorScale(pilots);

            //add enumeration units to the map
            setEnumerationUnits(joined_statesFeatures, map, path, colorScale);

            //add coordinated visualization to the map
            setChart(pilots, colorScale);

            //adds dropdown
            createDropdown(pilots);
           
        };
    }; //end of setMap()
        


    //function to create coordinated bar chart
    function setChart(pilots, colorScale){

        // Compute the maximum value in the dataset and cap it (chatGPT generated)
        var maxValue = d3.max(pilots, function(d) {
            return +d[expressed];
        });
        var padding = maxValue * 0.1;
        var cappedMaxValue = Math.min(maxValue + padding, 35000000);

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
        
        //set yScale for chart (chatGPT generated)
        var yScale = d3.scaleLinear()
            .range([chartInnerHeight, 0])
            .domain([0, cappedMaxValue]);

        //set bars for each state
        var bars = chart.selectAll(".bar")
            .data(pilots)
            .enter()
            .append("rect")
            .sort(function(a, b){
                return b[expressed]-a[expressed]
            })
            .attr("class", function(d){
                return "bar " + d.state;
            })
            .attr("width", chartInnerWidth / pilots.length - 1)
            .on("mouseover", function(event, d){
                highlight(d);
            }) 
            .on("mouseout", function(event, d){
                dehighlight(d);
            })
            .on("mousemove", moveLabel)
            .attr("x", function(d, i){
                return i * (chartInnerWidth / pilots.length) + leftPadding;
            })
            /*
            .attr("height", function(d, i){
                return 463 - yScale(parseFloat(d[expressed]));
            })
            */
            //chatGPT generated
            .attr("height", function(d) {
                return chartInnerHeight - yScale(parseFloat(d[expressed]));
            })
            //student original project
            .attr("y", function(d, i){
                return yScale(parseFloat(d[expressed])) + topBottomPadding;
            })
            .style("fill", function(d){
                return colorScale(d[expressed]);
            });

        //add style descriptor to each rect
        var desc = bars.append("desc")
            .text('{"stroke": "none", "stroke-width": "0px"}')

        //create a text element for the chart title
        var chartTitle = chart.append("text")
            .attr("x", 75)
            .attr("y", 40)
            .attr("class", "chartTitle")
            .attr("fill", "white")
            .text("Votes by State");

        //create vertical axis generator
        var yAxis = d3.axisLeft()
            .scale(yScale);

        //place axis
        var axis = chart.append("g")
            .attr("class", "axis")
            .attr("transform", translate)
            .call(yAxis);

        //create frame for chart border
        var chartFrame = chart.append("rect")
            .attr("class", "chartFrame")
            .attr("width", chartInnerWidth)
            .attr("height", chartInnerHeight)
            .attr("transform", translate);

        //set bar positions, heights, and colors
        updateChart(bars, pilots.length, colorScale, cappedMaxValue);
    };
        
   
    

    // Joins the pilots CSV and the US_States_04 TopoJSON
    function joinData(statesFeature, pilots) {
        // Loop through CSV to assign each set of CSV attribute values to TopoJSON state
        pilots.forEach(function(csvState) {
            var csvKey = csvState.STUSPS; // The CSV primary key

            // Loop through TopoJSON states to find the correct region
            statesFeature.forEach(function(topojsonFeature) {
                var topojsonProps = topojsonFeature.properties; // The current region TopoJSON properties
                var topojsonKey = topojsonProps.STUSPS; // The TopoJSON primary key

                // Where primary keys match, transfer CSV data to TopoJSON properties object
                if (topojsonKey === csvKey) {
                    // Assign all attributes and values
                    attrArray.forEach(function(attr) {
                        var val = parseFloat(csvState[attr]); // Get CSV attribute value
                        topojsonProps[attr] = val; // Assign attribute and value to TopoJSON properties
                    });
                }
            });
        });

        return statesFeature; // Return the updated features
    }

    //sets enumeration units on the map and colors them appropriately
    function setEnumerationUnits(statesFeature,map,path,colorScale){

        //add US States to map
        var statesPath = map.selectAll(".states")
            .data(statesFeature)
            .enter()
            .append("path")
            .attr("class", function(d){
                return "states " + d.properties.STUSPS;
            })
            .attr("d", path)        
            .style("fill", function(d){            
                var value = d.properties[expressed];            
                if(value) {                
                    return colorScale(d.properties[expressed]);            
                } else {                
                    return "#ccc";           
                }
            })
            .on("mouseover", function(event, d){
                highlight(d.properties);
            })
            .on("mouseout", function(event, d){
                dehighlight(d.properties);
            })
            .on("mousemove", moveLabel);
        
        
        //dehighlight features
        var desc = statesPath.append("desc")
            .text('{"stroke": "#000", "stroke-width": "0.5px"}');
    }


    //function to create color scale generator
    function makeColorScale(data){
        var colorClasses = [
            "#edf8fb",
            "#b3cde3",
            "#8c96c6",
            "#8856a7",
            "#810f7c"
        ];

        //create color scale generator
        var colorScale = d3.scaleThreshold()
            .range(colorClasses);

        //build array of all values of the expressed attribute
        var domainArray = [];
        for (var i=0; i<data.length; i++){
            var val = parseFloat(data[i][expressed]);
            domainArray.push(val);
        };

        //cluster data using ckmeans clustering algorithm to create natural breaks
        var clusters = ss.ckmeans(domainArray, 5);
        //reset domain array to cluster minimums
        domainArray = clusters.map(function(d){
            return d3.min(d);
        });
        //remove first value from domain array to create class breakpoints
        domainArray.shift();

        //assign array of last 4 cluster minimums as domain
        colorScale.domain(domainArray);

        return colorScale;
    };

    //function to create a dropdown menu for attribute selection
    function createDropdown(pilots){
        //add select element
        var dropdown = d3.select("body")
            .append("select")
            .attr("class", "dropdown")
            .on("change", function(){
                changeAttribute(this.value, pilots)
            });
        

        //add initial option
        var titleOption = dropdown.append("option")
            .attr("class", "titleOption")
            .attr("disabled", "true")
            .text("Select Attribute");

        //add attribute name options
        var attrOptions = dropdown.selectAll("attrOptions")
            .data(attrArray)
            .enter()
            .append("option")
            .attr("value", function(d){ return d })
            .text(function(d){ return d })
            .text(function(d){ return attrFriendlyNames[d] });
        };


    //dropdown change event handler
    function changeAttribute(attribute, pilots) {
        //change the expressed attribute
        expressed = attribute;

        // Compute the maximum value in the dataset and cap it (chatGPT generated)
        var maxValue = d3.max(pilots, function(d) {
            return +d[expressed];
        });
        var padding = maxValue * 0.1;
        var cappedMaxValue = Math.min(maxValue + padding, 35000000);

        //recreate the color scale
        var colorScale = makeColorScale(pilots);

        //recolor enumeration units
        var states = d3.selectAll(".states")
            .transition()
            .duration(1000)
            .style("fill", function(d){            
                var value = d.properties[expressed];            
                if(value) {                
                    return colorScale(value);           
                } else {                
                    return "#ccc";            
                }   
        });
        //Sort, resize, and recolor bars
        var bars = d3.selectAll(".bar")
            //Sort bars
            .sort(function(a, b){
                return b[expressed] - a[expressed];
            })
            .transition() //add animation
            .delay(function(d, i){
                return i * 20
            })
            .duration(500);
            

        updateChart(bars, pilots.length, colorScale, cappedMaxValue);
    
        // Update Y-axis with capped max value (chatGPT generated to end of change Attribute())
        var newYScale = d3.scaleLinear()
        .range([chartInnerHeight, 0])
        .domain([0, cappedMaxValue]);

        var yAxis = d3.axisLeft()
            .scale(newYScale);

        d3.select(".chart").select(".axis")
            .transition()
            .duration(1000)
            .call(yAxis);

        // Update the Y-axis scale
        yScale = newYScale;

    }; //end of changeAttribute()


    //function to position, size, and color bars in chart
    function updateChart(bars, n, colorScale, cappedMaxValue){

        // Update Y-axis scale (chatGPT generated)
        yScale = d3.scaleLinear()
            .range([chartInnerHeight, 0])
            .domain([0, cappedMaxValue]);

        //position bars
        bars.attr("x", function(d, i){
                return i * (chartInnerWidth / n) + leftPadding;
            })
            //Size/resize bars (chatGPT generated)
            .attr("height", function(d) {
                return chartInnerHeight - yScale(parseFloat(d[expressed]));
            })
            //student original project
            .attr("y", function(d) {
                return yScale(parseFloat(d[expressed])) + topBottomPadding;
            })
            //color/recolor bars
            .style("fill", function(d){            
                var value = d[expressed];            
                if(value) {                
                    return colorScale(value);            
                } else {                
                    return "#ccc";            
                }    
        });
        //add text to chart title
        var chartTitle = d3.select(".chartTitle")
            .text("Votes by State");




    };//end of updateChart


    //function to highlight enumeration units and bars
    function highlight(props){
        //change stroke
        var affected = props.state || props.STUSPS;
        var selected = d3.selectAll("." + affected)
            .style("stroke", "yellow")
            .style("stroke-width", "2");
        setLabel(props);

    };



    //function to reset the element style on mouseout
    function dehighlight(props){
        var affected = props.state || props.STUSPS;
        var selected = d3.selectAll("." + affected)
            .style("stroke", function(){
                return getStyle(this, "stroke")
            })
            .style("stroke-width", function(){
                return getStyle(this, "stroke-width")
            });

        function getStyle(element, styleName){
            var styleText = d3.select(element)
                .select("desc")
                .text();

            var styleObject = JSON.parse(styleText);

            return styleObject[styleName];
        };
        //below Example 2.4 line 21...remove info label
        d3.select(".infolabel")
            .remove();
    };


    //function to create dynamic label
    function setLabel(props){
        //label content
        var labelAttribute = "<h1>" + props[expressed] +
            "</h1><b>" + expressed + "</b>";

        //create info label div
        var infolabel = d3.select("body")
            .append("div")
            .attr("class", "infolabel")
            .attr("id", props.state + "_label")
            .html(labelAttribute);

        var stateName = infolabel.append("div")
            .attr("class", "labelname")
            .html(props.name)
            .html(props.state)
    };


    //Example 2.8 line 1...function to move info label with mouse
    function moveLabel(event){
        //get width of label
        var labelWidth = d3.select(".infolabel")
            .node()
            .getBoundingClientRect()
            .width;

        //use coordinates of mousemove event to set label coordinates
        var x1 = event.clientX + 10,
            y1 = event.clientY - 75,
            x2 = event.clientX - labelWidth - 10,
            y2 = event.clientY + 25;

        //horizontal label coordinate, testing for overflow
        var x = event.clientX > window.innerWidth - labelWidth - 20 ? x2 : x1; 
        //vertical label coordinate, testing for overflow
        var y = event.clientY < 75 ? y2 : y1; 

        d3.select(".infolabel")
            .style("left", x + "px")
            .style("top", y + "px");
    };



})(); //last line
