// Chain Syntax

d3.select("body").append("p").text("New paragraph!");


.select("body") // D3's select method, which selects a single element from the DOM using CSS selector syntax

// Give select() a CSS selector as input, and it will return a reference to the first element in the DOM that matches. 
// (Use selectAll() when you need more than one element.) 
// In this case, we just want the body, so a reference to body is handed off to the next method in our chain.

.append("p") // Created a new p element and appended that to the end of our selection, meaning just before the closing </body> tag in this case

// append() creates whatever new DOM element you specify and appends it to the end (but just inside) of whatever selection it’s acting on. 
// In our case, we want to create a new p within the body. We specified "p" as the input argument, but this method also sees the reference to body that was passed down the chain from the select() method. 
// Finally, append(), in turn, hands down a reference to the new element it just created.

.text("New paragraph!") // Set the text content of that new, empty paragraph to “New paragraph!”

// text() takes a string and inserts it between the opening and closing tags of the current selection. 
// Since the previous method passed down a reference to our new p, this code just inserts the new text between <p> and </p>. 
// (In cases where there is existing content, it will be overwritten.)

var body = d3.select("body"); // Chainless Version
var p = body.append("p"); // Chainless Version
p.text("New paragraph!"); // Chainless Version




// Binding Data

var dataset = [ 5, 10, 15, 20, 25 ];
d3.select("body").selectAll("p")
	.data(dataset)
	.enter()
	.append("p")
	.text("New paragraph!");

d3.select("body") // Finds the body in the DOM and hands a reference off to the next step in the chain.

.selectAll("p") // Selects all paragraphs in the DOM. Since none exist yet, this returns an empty selection. Think of this empty selection as representing the paragraphs that will soon exist.

.data(dataset) // Counts and parses our data values. There are five values in our data set, so everything past this point is executed five times, once for each value.

.enter() // To create new, data-bound elements, you must use enter(). This method looks at the DOM, and then at the data being handed to it. 
// If there are more data values than corresponding DOM elements, then enter() creates a new placeholder element on which you may work your magic. It then hands off a reference to this new placeholder to the next step in the chain.

.append("p") // Takes the placeholder selection created by enter() and inserts a p element into the DOM. Hooray! Then it hands off a reference to the element it just created to the next step in the chain.

.text("New paragraph!") // Takes the reference to the newly created p and inserts a text value.

// Note that if you type in console.log(selectAll("p")) in the array the HTMLParagraphElements __data__ value is "dataset"
// D3 binds data to an element, that data doesn’t exist in the DOM, but it does exist in memory as a __data__ attribute of that element




// Using Your Data

    .text(function(d) { return d; });

// Anytime after you call data(), you can create an anonymous function that accepts d as input
// In this context, without wrapping d in an anonymous function, d has no value. 

	.style("color", function(d) {
	    if (d > 15) {   //Threshold of 15
	        return "red";
	    } else {
	        return "black";
	    }
	})

// attr() and style() allow us to set HTML attributes and CSS properties on selections, respectively.
// attr() is used to set an HTML attribute and its value on an element. An HTML attribute is any property/value pair that you could include between an element’s <> brackets. For example, these HTML elements

<p class="caption">
<select id="country">
<img src="logo.png" width="100px" alt="Logo" />

// contain a total of five attributes (and corresponding values), all of which could be set with attr():

// class   |   caption
// id      |   country
// src     |   logo.png
// width   |   100px
// alt     |   Logo

// To give our divs a class of bar, we can use:

.attr("class", "bar")

// classed()

.classed("bar", true)

// Used to quickly apply or remove classes from elements. i.e. difference between applying style directly or class




// Drawing divs

d3.select("body").selectAll("div")
    .data(dataset)
    .enter()
    .append("div")
    .attr("class", "bar")
.style("height", function(d) {
    var barHeight = d * 5;  // Scale up by factor of 5
    return barHeight + "px";

// div.bar {
//    display: inline-block;
//    width: 20px;
//    height: 75px;   /* We'll override this later */
//    background-color: teal;
//    margin-right: 2px;
//}

var dataset = [];                        //Initialize empty array
for (var i = 0; i < 25; i++) {           //Loop 25 times
    var newNumber = Math.random() * 30;  //New random number (0-30)
    dataset.push(newNumber);             //Add new number to array
}

// Give data() ten values, and it will loop through ten times. Give it one million values, and it will loop through one million times. (Just be patient.)

// That is the power of data() — being smart enough to loop through the full length of whatever data set you throw at it, 
// executing each method below it in the chain, while updating the context in which each method operates, so d always refers to the current datum at that point in the loop.




// SVGs

<svg width="550" height="50">
	<rect x="0" y="0" width="550" height="50"/>

// rect draws a rectangle. Use x and y to specify the coordinates of the upper-left corner, and width and height to specify the dimensions.

	<circle cx="250" cy="25" r="25"/>

// circle draws a circle. Use cx and cy to specify the coordinates of the center, and r to specify the radius. 
// This circle is centered in the middle of our 500-pixel-wide SVG because its cx (“center-x”) value is 250.

	<ellipse cx="250" cy="25" rx="100" ry="25"/>

// ellipse is similar, but expects separate radius values for each axis. Instead of r, use rx and ry.

	<line x1="0" y1="0" x2="500" y2="50" stroke="black"/>

// line draws a line. Use x1 and y1 to specify the coordinates of one end of the line, and x2 and y2 to specify the coordinates of the other end. 
// A stroke color must be specified for the line to be visible.

	<text x="250" y="50" font-family="sans-serif"
	 font-size="25" fill="gray">Easy-peasy</text>		

// text renders text. Use x to specify the position of the left edge, and y to specify the vertical position of the type’s baseline.
// text will inherit the CSS-specified font styles of its parent element unless specified otherwise. (More on styling text in a moment.)

</svg>	

// Styling SVG Elements

// fill — A color value. Just as with CSS, colors can be specified
// stroke — A color value.
// stroke-width — A numeric measurement (typically in pixels).
// opacity — A numeric value between 0.0 (completely transparent) and 1.0 (completely opaque).

// Using CSS to apply SVG styles, however, can be disconcerting for some. fill, stroke, and stroke-width, after all, are not CSS properties. 
// (The nearest CSS equivalents are background-color and border.) If it helps you remember which rules in your stylesheet are SVG-specific.

// There are no “layers” in SVG, and no real concept of depth. SVG does not support CSS’s z-index property, so shapes can only be arranged within the two-dimensional x/y plane.
// Think of SVG shapes as being rendered like paint on a canvas. The pixel-paint that is applied later obscures any earlier paint, and thus appears to be “in front.”

<svg width="550" height="50">
	<circle cx="25" cy="25" r="20"
        fill="rgba(128, 0, 128, 0.75)" 
        stroke="rgba(0, 255, 0, 0.25)" stroke-width="10"/>
	<circle cx="65" cy="25" r="20"
        fill="rgba(128, 0, 128, 0.75)" 
        stroke="rgba(0, 255, 0, 0.25)" stroke-width="10"
        opacity="0.5"/>
	<circle cx="105" cy="25" r="20"
        fill="rgba(128, 0, 128, 0.75)" 
        stroke="rgba(0, 255, 0, 0.25)" stroke-width="10"
        opacity="0.2"/> 
</svg>



// Drawing SVGs

// Width and height
var w = 500;
var h = 50;

// Data
var dataset = [ 5, 10, 15, 20, 25 ];

// Create SVG element
var svg = d3.select("body")
			.append("svg")
			.attr("width", w)
			.attr("height", h);

var circles = svg.selectAll("circle")
    .data(dataset)
    .enter()
    .append("circle");

circles.attr("cx", function(d, i) {
			return (i * 50) + 25;
		})
	   .attr("cy", h/2)
	   .attr("r", function(d) {
			return d;
	   });




// Types of Data


// Variables

var number = 5; // Automatically types a variable based on what kind of information you assign to it
var value = 12.3467;
var active = true;
var text = "Crystal clear";

// We can declare and name variables before we even know what type of data will go into them

var value = 100;
value = 99.9999;
value = false;
value = "This can't possibly work.";
value = "Argh, it does work! No errorzzzz!";


// Arrays

var numbers = [ 5, 10, 15, 20, 25 ];

// An array is a sequence of values, conveniently stored in a single variable.
// Keeping track of related values in separate variables is inefficient

// You can access (retrieve) a value in an array by using bracket notation:

numbers[2]  // Returns 15 (first position is 0)

// Arrays can contain any type of data, not just integers.

var percentages = [ 0.55, 0.32, 0.91 ];
var names = [ "Ernie", "Bert", "Oscar" ];

percentages[1]  // Returns 0.32
names[1]        // Returns "Bert"


// An array organizes lots of data values in one convenient place. 
// Then for() can quickly “loop” through every value in an array and perform some action with it — such as, express the value as a visual form.

for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  // Print value to console
}

// D3 often manages this looping for us, with its magical data() method, but it’s important to be able to write your own loops.


// Objects

// Arrays are great for simple lists of values, but with more complex data sets, you’ll want to put your data into an object.
// In between the brackets, we include indices and values. A colon : separates each index and its value, and a comma separates each index/value pair.

var fruit = {
    kind: "grape",
    color: "red",
    quantity: 12,
    tasty: true
};

fruit.kind      // Returns "grape"
fruit.color     // Returns "red"
fruit.quantity  // Returns 12
fruit.tasty     // Returns true


// Objects + Arrays

var fruits = [
    {
        kind: "grape",
        color: "red",
        quantity: 12,
        tasty: true
    },
    {
        kind: "kiwi",
        color: "brown",
        quantity: 98,
        tasty: true
    },
    {
        kind: "banana",
        color: "yellow",
        quantity: 0,
        tasty: true
    }
];

fruits[1].kind      ==  "kiwi"
fruits[1].color     ==  "brown"
fruits[1].quantity  ==  98
fruits[1].tasty     ==  true


// JSON

var jsonFruit = {
    "kind": "grape",
    "color": "red",
    "quantity": 12,
    "tasty": true
};


// GeoJSON (GeoJSON is a formalized syntax of JSON objects, optimized for storing geodata)

var geodata = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [ 150.1282427, -24.471803 ]
            },
            "properties": {
                "type": "town"
            }
        }
    ]
};




// Making a Bar Chart

		// Width and height
		var w = 500;
		var h = 100;
		var barPadding = 1;	

		// Data
		var dataset = [ 5, 10, 13, 19, 21, 25, 22, 18, 15, 13,
							11, 12, 15, 20, 18, 17, 16, 18, 23, 25 ];		
		
		// Create empty SVG element to add to DOM
		var svg = d3.select("body")
					.append("svg")
					.attr("width", w)
					.attr("height", h);

		svg.selectAll("rect")
			.data(dataset)
			.enter()
			.append("rect")
			.attr("x", function(d, i) { // Dynamic value that corresponds to each value's position
			    return i * (w / dataset.length);
			})
			.attr("y", function(d) {
			    return h - (d * 4);
			})
			.attr("width", w / dataset.length - barPadding) // Correcting b/c SVG default is top-left
			.attr("height", function(d) { // Encoded dataset that is the height of each bar
			    return d * 4;
			})
			.attr("fill", function(d) { // Color changes based on data in 3rd RGB version
			    return "rgb(0, 0, " + (d * 10) + ")";
			});

		svg.selectAll("text")
			.data(dataset)
			.enter()
			.append("text")
			.text(function(d) { // Encoded dataset is now the label for each bar
			    return d;
			})
			.attr("x", function(d, i) { // Identical "x" and "y" coordinates w/ offset
			    return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			})
			.attr("y", function(d) {
			    return h - (d * 4) + 14;
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "white")
			.attr("text-anchor", "middle"); // Anchoring everything in the middle




// Making a Scatterplot

	  	// Width and height
	  	var w = 500;
	  	var h = 100;

  		// Using an Array of Arrays
		var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ]
              ];

		// Create SVG element
		var svg = d3.select("body")
		            .append("svg")
		            .attr("width", w)
		            .attr("height", h);

		// Create a circle for each point
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function(d) {
				return d[0];
			})

		// When d is an array of values (and not just a single value, like 3.14159), you need to use bracket notation to access its values. Hence, instead of return d, we have return d[0] and return d[1], which return the first and second values of the array, respectively.
			
			.attr("cy", function(d) {
				return d[1];
			})
			.attr("r", 5);

		// You can string brackets together, to access values within nested arrays: dataset[5][1] returns 12
		
		svg.selectAll("text")
			.data(dataset)
			.enter()
			.append("text")
			.text(function(d) {
				return d[0] + "," + d[1]; // Use both to get both values within array
					})
			.attr("x", function(d) { // Specifying where the text should be placed
				return d[0];
			})
			.attr("y", function(d) {
				return d[1];
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "red");




// Scales: “Scales are functions that map from an input domain to an output range.”
// (kind of like axes, but just a mathematical relationship)

// Input Domain - "range of possible input data values"
// Output Range - "possible output values, commonly used as display values in pixel units."
// Normalization - "the process of mapping a numeric value to a new value between 0 and 1, based on the possible minimum and maximum values."

var scale = d3.scale.linear()
                    .domain([100, 500]) // Set the scale’s input domain to 100,500
                    .range([10, 350]); // Set the output range to 10, 350

scale(100);  // Returns 10
scale(300);  // Returns 180
scale(500);  // Returns 350


// Example: Setting scales with min / max values

d3.max(dataset, function(d) {    //Returns 480
    return d[0];  //References first value in each sub-array
});

	  	// Width and height
	  	var w = 500;
	  	var h = 300;
		var padding = 20;

  		// Using an Array of Arrays
		var dataset = [
                  [ 5,     20 ],
                  [ 480,   90 ],
                  [ 250,   50 ],
                  [ 100,   33 ],
                  [ 330,   95 ],
                  [ 410,   12 ],
                  [ 475,   44 ],
                  [ 25,    67 ],
                  [ 85,    21 ],
                  [ 220,   88 ],
                  [ 600,  150 ]
              ];

		// Create SVG element
		var svg = d3.select("body")
		            .append("svg")
		            .attr("width", w)
		            .attr("height", h);

		var xScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function(d) { return d[0]; })])
					.range([padding, w - padding * 2]);

		var yScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function(d) { return d[1]; })])
					.range([h - padding, padding]); // Reversing the range

		var rScale = d3.scale.linear() // Custom scale for radius of circle
                    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                    .range([2, 5]);

		// Create a circle for each point
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function(d) {
			    return xScale(d[0]);
			})			
			.attr("cy", function(d) {
			    return yScale(d[1]);
			})			
			.attr("r", function(d) {
			    return rScale(d[1]);
			});
		
		svg.selectAll("text")
			.data(dataset)
			.enter()
			.append("text")
			.text(function(d) {
				return d[0] + "," + d[1];
					})
			.attr("x", function(d) { 
				return xScale(d[0]); // Modify based on scaling
			})
			.attr("y", function(d) {
				return yScale(d[1]);
			})
			.attr("font-family", "sans-serif")
			.attr("font-size", "11px")
			.attr("fill", "red");


// Other Methods

nice() // - This tells the scale to take whatever input domain that you gave to range() and expand both ends to the nearest round value.
rangeRound() // - Use rangeRound() in place of range() and all values output by the scale will be rounded to the nearest whole number
clamp() // - Calling .clamp(true) on a scale, however, forces all output values to be within the specified range.


// Other Scales

// identity - A 1:1 scale, useful primarily for pixel values
// sqrt - A square root scale
// pow - A power scale
// log - A logarithmic scale
// quantize - A linear scale with discrete values for its output range, for when you want to sort data into “buckets”
// quantile - Similar to above, but with discrete values for its input domain (when you already have “buckets”)
// ordinal -  Ordinal scales use non-quantitative values (like category names) for output; perfect for comparing apples and oranges




// Axes

	  	// Width and height
	  	var w = 500;
	  	var h = 300;
		var padding = 30;

		//Dynamic, random dataset
		var dataset = [];
		var numDataPoints = 50;
		var xRange = Math.random() * 1000;
		var yRange = Math.random() * 1000;
		for (var i = 0; i < numDataPoints; i++) {
		    var newNumber1 = Math.round(Math.random() * xRange);
		    var newNumber2 = Math.round(Math.random() * yRange);
		    dataset.push([newNumber1, newNumber2]);
		}

		// Create SVG element
		var svg = d3.select("body")
		            .append("svg")
		            .attr("width", w)
		            .attr("height", h);

		var xScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function(d) { return d[0]; })])
					.range([padding, w - padding * 2]);

		var yScale = d3.scale.linear()
					.domain([0, d3.max(dataset, function(d) { return d[1]; })])
					.range([h - padding, padding]); // Reversing the range

		var rScale = d3.scale.linear() // Custom scale for radius of circle
                    .domain([0, d3.max(dataset, function(d) { return d[1]; })])
                    .range([2, 5]);

		//D efine X axis
		var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("bottom")
					.ticks(5);  // Set rough # of ticks

					//  D3 inteprets the ticks() value as merely a suggestion, and will override your suggestion with what it determines to be the most clean and human-readable values

		// Define Y axis
		var yAxis = d3.svg.axis()
		                  .scale(yScale)
		                  .orient("left")
		                  .ticks(5);

		// Create a circle for each point
		svg.selectAll("circle")
			.data(dataset)
			.enter()
			.append("circle")
			.attr("cx", function(d) {
			    return xScale(d[0]);
			})			
			.attr("cy", function(d) {
			    return yScale(d[1]);
			})			
			.attr("r", function(d) {
			    return rScale(d[1]);
			});
		
//		svg.selectAll("text")
//			.data(dataset)
//			.enter()
//			.append("text")
//			.text(function(d) {
//				return d[0] + "," + d[1];
//					})
//			.attr("x", function(d) { 
//				return xScale(d[0]); // Modify based on scaling
//			})
//			.attr("y", function(d) {
//				return yScale(d[1]);
//			})
//			.attr("font-family", "sans-serif")
//			.attr("font-size", "11px")
//			.attr("fill", "red");

		// Create X axis
		svg.append("g") // New group "g" to contain all of about-to-be-generated axis elements
			.attr("class", "axis") // Assign "axis" class
			.attr("transform", "translate(0," + (h - padding) + ")")
		    .call(xAxis); // call() function takes a selection and hands off to any function
		    	// d3.svg.axis() to create a generic axis function

		// Create Y axis
		svg.append("g")
		    .attr("class", "axis")
		    .attr("transform", "translate(" + padding + ",0)")
		    .call(yAxis);


// Tick Labels

tickFormat() // Enables you to specify how your numbers should be formatted
var formatAsPercentage = d3.format(".1%"); // Example to format as a percentage