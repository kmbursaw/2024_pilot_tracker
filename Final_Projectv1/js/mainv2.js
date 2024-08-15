// Add all scripts to the JS folder

//pseudo-global variables
var attrArray = ["Total_2023_Pilots", "Total_2023_Student_Pilot_Cert", "Total_2023_Private_Pilot_Cert", "Total_2023_Commercial_Pilot_Cert", "Total_2023_Airline_Transport_Pilot_Cert", "Total_2023_Flight_Instructor_Cert", "2023_Male_Pilots", "2023_Male_Student_Pilot_Cert", "2023_Male_Private_Pilot_Cert", "2023_Male_Commercial_Pilot_Cert", "2023_Male_Airline_Transport_Pilot_Cert", "2023_Male_Flight_Instructor_Cert", "2023_Women_Total_Pilots", "2023_Women_Student_Pilot", "2023_Women_Private_Pilot", "2023_Women_Commercial_Pilot", "2023_Women_Airline_Transport_Pilot", "2023_Women_Flight_Instructor", 
                "Total_2022_Pilots", "Total_2022_Student_Pilot_Cert", "Total_2022_Private_Pilot_Cert", "Total_2022_Commercial_Pilot_Cert", "Total_2022_Airline_Transport_Pilot_Cert", "Total_2022_Flight_Instructor_Cert", "2022_Male_Pilots", "2022_Male_Student_Pilot_Cert", "2022_Male_Private_Pilot_Cert", "2022_Male_Commercial_Pilot_Cert", "2022_Male_Airline_Transport_Pilot_Cert", "2022_Male_Flight_Instructor_Cert", "2022_Women_Total_Pilots", "2022_Women_Student_Pilot", "2022_Women_Private_Pilot", "2022_Women_Commercial_Pilot", "2022_Women_Airline_Transport_Pilot", "2022_Women_Flight_Instructor", 
                "Total_2021_Pilots", "Total_2021_Student_Pilot_Cert", "Total_2021_Private_Pilot_Cert", "Total_2021_Commercial_Pilot_Cert", "Total_2021_Airline_Transport_Pilot_Cert", "Total_2021_Flight_Instructor_Cert", "2021_Male_Pilots", "2021_Male_Student_Pilot_Cert", "2021_Male_Private_Pilot_Cert", "2021_Male_Commercial_Pilot_Cert", "2021_Male_Airline_Transport_Pilot_Cert", "2021_Male_Flight_Instructor_Cert", "2021_Women_Total_Pilots", "2021_Women_Student_Pilot", "2021_Women_Private_Pilot", "2021_Women_Commercial_Pilot", "2021_Women_Airline_Transport_Pilot", "2021_Women_Flight_Instructor", 
                "Total_2020_Pilots", "Total_2020_Student_Pilot_Cert", "Total_2020_Private_Pilot_Cert", "Total_2020_Commercial_Pilot_Cert", "Total_2020_Airline_Transport_Pilot_Cert", "Total_2020_Flight_Instructor_Cert", "2020_Male_Pilots", "2020_Male_Student_Pilot_Cert", "2020_Male_Private_Pilot_Cert", "2020_Male_Commercial_Pilot_Cert", "2020_Male_Airline_Transport_Pilot_Cert", "2020_Male_Flight_Instructor_Cert", "2020_Women_Total_Pilots", "2020_Women_Student_Pilot", "2020_Women_Private_Pilot", "2020_Women_Commercial_Pilot", "2020_Women_Airline_Transport_Pilot", "2020_Women_Flight_Instructor", 
                "Total_2019_Pilots", "Total_2019_Student_Pilot_Cert", "Total_2019_Private_Pilot_Cert", "Total_2019_Commercial_Pilot_Cert", "Total_2019_Airline_Transport_Pilot_Cert", "Total_2019_Flight_Instructor_Cert", "2019_Male_Pilots", "2019_Male_Student_Pilot_Cert", "2019_Male_Private_Pilot_Cert", "2019_Male_Commercial_Pilot_Cert", "2019_Male_Airline_Transport_Pilot_Cert", "2019_Male_Flight_Instructor_Cert", "2019_Women_Total_Pilots", "2019_Women_Student_Pilot", "2019_Women_Private_Pilot", "2019_Women_Commercial_Pilot", "2019_Women_Airline_Transport_Pilot", "2019_Women_Flight_Instructor", 
                "Total_2018_Pilots", "Total_2018_Student_Pilot_Cert", "Total_2018_Private_Pilot_Cert", "Total_2018_Commercial_Pilot_Cert", "Total_2018_Airline_Transport_Pilot_Cert", "Total_2018_Flight_Instructor_Cert", "2018_Male_Pilots", "2018_Male_Student_Pilot_Cert", "2018_Male_Private_Pilot_Cert", "2018_Male_Commercial_Pilot_Cert", "2018_Male_Airline_Transport_Pilot_Cert", "2018_Male_Flight_Instructor_Cert", "2018_Women_Total_Pilots", "2018_Women_Student_Pilot", "2018_Women_Private_Pilot", "2018_Women_Commercial_Pilot", "2018_Women_Airline_Transport_Pilot", "2018_Women_Flight_Instructor",
]; //list of attributes


var expressed = attrArray[0]; //initial attribute

//variables for user friendly names for attribute selection
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
var chartWidth = window.innerWidth,
    chartHeight = 460,
    leftPadding = 39,
    rightPadding = 2,
    topBottomPadding = 5,
    chartInnerWidth = chartWidth - leftPadding - rightPadding,
    chartInnerHeight = chartHeight - topBottomPadding * 2,
    translate = "translate(" + leftPadding + "," + topBottomPadding + ")";





window.onload = setMap();


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

    //create Albers USA projection with Alaska and Hawaii inset
    var projection = d3.geoAlbersUsa()
        .scale(900)
        .translate([width / 2, height / 2]);

    var path = d3.geoPath()
        .projection(projection);

    //use Promise.all to parallelize asynchronous data loading
    var promises = [];    
        promises.push(d3.csv("data/country_v3.csv")); //load attributes from geojson by state enumeration unit
        promises.push(d3.json("data/pilots_by_state_v2.geojson")); //load attributes from csv for total piltos        
   

    Promise.all(promises)
        .then(callback)
        .catch(function(error) {
            console.log("Error loading data:", error);
        });
    

    function callback(data) {
        var country = data[0]; //the numbers are in strings, need to fix that
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
            //.attr("cursor", "pointer")
            //.attr("background", "white")
            //.on("click", clicked)
            .enter()
            .attr("class", function(d){
                return "usaStates" + d.properties.State
            })
            .attr("d", path);

        createDropdown();
        createYearDropdown();

        var exampleData = [
            { State: "California", value: 50000 },
            { State: "Texas", value: 30000 },
            // Add more data as needed
        ];


        setBarChart(exampleData);
        
    }

    var svgInfo = d3.select("body").append("svg")
        .attr("width", 100)
        .attr("height", window.innerHeight)
        .style("position", "absolute")
        .style("left", "0px");

    var infoRect = svgInfo.append("rect")
        .attr("x", 0)
        .attr("y", 0)
        .attr("width", 100)
        .attr("height", window.innerHeight)
        .style("fill", "steelblue");



    
};

//function to create a dropdown menu for attribute selection
function createDropdown(country){
    //add select element
    var dropdown = d3.select("body")
        .append("select") 
        .attr("id", "attribute-dropdown")
        .attr("class", "dropdown")
        .attr("x", 0)
        .style("width", "80px")
        .style("height", "30px")
        .on("change", function(){
            changeAttribute(this.value, country)
        });
    
    console.log ("Creating attribute dropdown")


    //add initial option
    var titleOption = dropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select");

    //add attribute name options
    var attrOptions = dropdown.selectAll("attrOptions")
        .data(attrArray)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });
    };


function createYearDropdown(country){
    //add select element
    var dropdown = d3.select("body")
        .append("select")
        .attr("id", "year-dropdown")
        .attr("class", "yearDropdown")
        .attr("x", 0)
        .style("width", "80px")
        .style("height", "30px")
        .on("change", function(){
            changeAttribute(this.value, country)
        });
    
    console.log("Creating year dropdown")

    //add initial option
    var titleOption = dropdown.append("option")
        .attr("class", "titleOption")
        .attr("disabled", "true")
        .text("Select");

    var years = ["2018", "2019", "2020", "2021", "2022", "2023"];
       

    //add attribute name options
    var yearOptions = dropdown.selectAll("yearOptions")
        .data(years)
        .enter()
        .append("option")
        .attr("value", function(d){ return d })
        .text(function(d){ return d });
    };


//compute data for pilots since first date to selected date
//make chart (d3 Observable code)
function setBarChart(data) {

    /*
    const data = d3.sort(states, d => d[2019] - d[2010])
    .map((d) => ({
      ...d,
      value: metric === "absolute" ? d[2019] - d[2010] : (d[2019] - d[2010]) / d[2010]
    }));
    */

    const barHeight = 25;
    const marginTop = 30;
    const marginRight = 60;
    const marginBottom = 10;
    const marginLeft = 60;
    const height = Math.ceil((data.length + 0.1) * barHeight) + marginTop + marginBottom;

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


    // Create the positional scales.
    const y = d3.scaleLinear()
        .domain(d3.extent(data, d => d.value))
        .rangeRound([marginLeft, chartWidth - marginRight]);

    const x = d3.scaleBand()
        .domain(data.map(d => d.State))
        .rangeRound([marginTop, height - marginBottom])
        .padding(0.1);


    // Create the format function.
    const format = d3.format(metric === "absolute" ? "+,d" : "+.1%");
    const tickFormat = metric === "absolute" ? d3.formatPrefix("+.1", 1e6) : d3.format("+.0%");


    // Create the SVG container.
    const svg = d3.create("svg")
    .attr("viewBox", [0, 0, chartWidth, height])
    .attr("style", "max-width: 100%; height: auto; font: 10px sans-serif;");


    // Add a rect for each state.
    svg.append("g")
        .selectAll()
        .data(data)
        .join("rect")
            .attr("fill", (d) => d3.schemeRdBu[3][d.value > 0 ? 2 : 0])
            .attr("x", (d) => x(Math.min(d.value, 0)))
            .attr("y", (d) => y(d.State))
            .attr("width", d => Math.abs(x(d.value) - x(0)))
            .attr("height", y.bandwidth());



    // Add a text label for each state.
    svg.append("g")
        .attr("font-family", "sans-serif")
        .attr("font-size", 10)
        .selectAll()
        .data(data)
        .join("text")
            .attr("text-anchor", d => d.value < 0 ? "end" : "start")
            .attr("x", (d) => x(d.value) + Math.sign(d.value - 0) * 4)
            .attr("y", (d) => y(d.State) + y.bandwidth() / 2)
            .attr("dy", "0.35em")
            .text(d => format(d.value));

    // Add the axes and grid lines.
    svg.append("g")
        .attr("transform", `translate(0,${marginTop})`)
        .call(d3.axisTop(x).ticks(width / 80).tickFormat(tickFormat))
        .call(g => g.selectAll(".tick line").clone()
            .attr("y2", height - marginTop - marginBottom)
            .attr("stroke-opacity", 0.1))
        .call(g => g.select(".domain").remove());


    svg.append("g")
        .attr("transform", `translate(${x(0)},0)`)
        .call(d3.axisLeft(y).tickSize(0).tickPadding(6))
        .call(g => g.selectAll(".tick text").filter((d, i) => data[i].value < 0)
            .attr("text-anchor", "start")
            .attr("x", 6));

    return svg.node();


}

//make chart dynamic
//dropdown change event handler
function changeAttribute(attribute, pop_Vote) {
    //change the expressed attribute
    expressed = attribute;

    // Compute the maximum value in the dataset and cap it (chatGPT generated)
    var maxValue = d3.max(pop_Vote, function(d) {
        return +d[expressed];
    });
    var padding = maxValue * 0.1;
    var cappedMaxValue = Math.min(maxValue + padding, 35000000);

    //recreate the color scale
    var colorScale = makeColorScale(pop_Vote);

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
        

    updateChart(bars, pop_Vote.length, colorScale, cappedMaxValue);

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


//make chart scale dynamic
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


//event listeners for state clicks

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




//




/*
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

    var chartTitle = chart.append("text")
        .attr("x", 75)
        .attr("y", 40)
        .attr("class", "chartTitle")
        .attr("fill", "white")
        .text("Pilots");

    
    //create frame for chart border
    var chartFrame = chart.append("rect")
        .attr("class", "chartFrame")
        .attr("width", chartInnerWidth)
        .attr("height", chartInnerHeight)
        //.attr("transform", translate)
        .attr("x", 50)
        .attr("y", 50);
    
   
}; //last line
*/

//setChart();
