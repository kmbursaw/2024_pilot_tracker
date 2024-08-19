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
            promises.push(d3.csv("data/pilots_by_statev4.csv")); //load attributes from csv    
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


            //adds dropdown
            createDropdown(pilots);

            //bubblechart
            bubbleChart(pilots, colorScale);
           
        };
    }; //end of setMap()
        

    

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
            "#ffffb2",
            "#fed976",
            "#feb24c",
            "#fd8d3c",
            "#fc4e2a",
            "#e31a1c",
            "#b10026",
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
        var clusters = ss.ckmeans(domainArray, 7);
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
        var cappedMaxValue = Math.min(maxValue + padding, 1000000);

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

        // Recolor the map based on the new attribute
        d3.selectAll(".states")
            .transition()
            .duration(1000)
            .style("fill", function(d){
                var value = d.properties[expressed];
                if (value) {
                    return colorScale(value);
                } else {
                    return "#ccc";
                }
            });

        // Update the bubble chart with the new attribute
        updateBubbleChart(pilots);
    


    }; //end of changeAttribute()

   

    //function to highlight enumeration units and bars
    function highlight(props){
        //change stroke
        var affected = props.state || props.STUSPS;
        var selected = d3.selectAll("." + affected)
            .style("stroke", "blue")
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
            .attr("id", props.pilots + "_label")
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




    function bubbleChart(pilots, colorScale) {
        // Set the dimensions and margins of the graph
        var chartWidth = 800;
        var chartHeight = 600;
    
        // Append the svg object to the bubble-container class
        var svg = d3.select(".bubble-container")
            .append("svg")
            .attr("width", chartWidth)
            .attr("height", chartHeight);
    
        // Bubble packing layout
        var bubble = d3.pack()
            .size([chartWidth, chartHeight])
            .padding(1.5);
    
        // Prepare the root hierarchy
        var root = d3.hierarchy({ children: pilots })
            .sum(function(d) { return +d[expressed]; });  // Use the expressed attribute for value calculation
    
        // Compute the positions of the bubbles
        bubble(root);
    
        // Create nodes
        var node = svg.selectAll(".node")
            .data(root.leaves())
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    
        // Append circles to nodes
        node.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return colorScale(d.data[expressed]); });
    
        // Append text labels inside the bubbles
        node.append("text")
            .attr("dy", ".3em")
            .style("text-anchor", "middle")
            .style("font-size", function(d) {
                return Math.max(8, d.r / 3) + "px";  // Scale font size with radius, set a minimum size
            })
            .text(function(d) { 
                return d.data.STUSPS ? d.data.STUSPS : '';  // Accessing the data safely
            });
    
        // Function to update the bubble chart when the attribute changes
        function updateBubbleChart() {
            // Update the hierarchy with new values
            root.sum(function(d) { return +d[expressed]; });
    
            // Recompute the bubble layout
            bubble(root);
    
            // Update the nodes
            var nodes = svg.selectAll(".node")
                .data(root.leaves());
    
            // Transition to new positions and sizes
            nodes.transition().duration(1000)
                .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
    
            nodes.select("circle")
                .transition().duration(1000)
                .attr("r", function(d) { return d.r; })
                .style("fill", function(d) { return colorScale(d.data[expressed]); });
    
            nodes.select("text")
                .text(function(d) { return d.data.STUSPS ? d.data.STUSPS : ''; });
        }
    
        // Update the bubble chart whenever an attribute is changed
        d3.select("#attributeDropdown").on("change", function() {
            expressed = d3.select(this).property("value");  // Update the expressed attribute
            updateBubbleChart();  // Call the update function
        });
    }




})(); //last line
