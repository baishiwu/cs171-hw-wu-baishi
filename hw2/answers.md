*Question 0.1*. What is the meaning of the horizontal and vertical position of the nodes? Give examples of datasets particularly well suited to organize data this way.

- For a graph layout, the "x" and "y" positions are meaningful only in the sense that they represent how nodes relate to each other. Easy datasets where this is particularly informative include social networks, maps, and biological information.

*Question 0.2*. Which other channels (visual variables), beside color, size and position, could have been used? Name five.

- Shape, Area / Volume, Tilt, Luminance, Motion.

*Question 0.3*. Are all the previously mentioned visual variables independent (e.g. if you change one, will it impact others?)? Give examples of graphical properties that are dependent (if any) and independent (if any) from each others.

- Some visual variables will cause interference with others if they are changed. For example, color and luminance are related, position and motion are related, and shape and tilt are related. Changing colors to black and white will make it harder to perceive degrees of luminance. Tightening the position may make it more difficult to perceive motion of elements. Changing the shape to a circle will make it impossible to view tilt.

- Meanwhile, examples of independent variables are color, position, size, and shape. These can all change individually with only minor bits of interference.

*Question 1.1*. Discuss the pros and cons of the two types of rankings (either by relative or absolute position between nodes).

- Relative position allows for simple ordinal ranking and helps place the attribute in context to others. Absolute ranking is better for determining quantitative data to show magnitude between the attributes. However, while absolute rankings have more accuracy, they may become hard to read if data is concentrated in certain areas.

*Question 1.2*. Which data type (quantitative, ordinal, ..) is best displayed with scatterplots? Which one is not? Give examples.

- Scatterplots are useful for quantitative data across two dimensions. However, it can also be used for ordinal data to show relative rankings though this will distort the axes. Scatterplots are not useful for categorical data.

*Question 2.1*. What are the pros and cons of using a D3 layout? For example, why would we use the D3 pie layout when we could use a simple circle for layouting?

- D3 layouts simply provide an easier way to translate information from an array of data into a specific visualization. With the D3 pie layout, we could simply use an arc shape and manually plot things, but the pie layout provides various angles as inputs that simplify the process of creating the visualization.

*Question 3.1*. Which other strategies can you think of to reduce the visual complexity? One example is edge bundling which we introduce in the following section. Enumerate up to three other strategies.

- Selective Emphasis (additional variable): Reduce visual complexity by only selecting "interesting" elements. An example could be to only higlight countries (i.e. they are colored, everything else is grey) that have a size or trade volume above a certain threshold.

- Reduce Visual Elements: A step beyond selective emphasis is to reduce the total number of elements present, which will reduce visual complexity as a result of less information.

- Further Grouping: Similar to the chart example, we can reduce visual complexity by simply reducing the number of locations possible for the positions (by a categorical variable like continent, for instance).