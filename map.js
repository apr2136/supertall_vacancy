/* First, create two variables that will hold:
1. The different types of layers available to Mapbox and their respective
opacity attributes
2. The possible alignments which could be applied to the vignettes */

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"]
};
var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty"
};

/* These two functions help turn on and off individual layers (through their
opacity attributes):
The first one gets the type of layer (from a name specified on the config.js file)
The second one adjusts the layer's opacity */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}
function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function(prop) {
    map.setPaintProperty(layer.layer, prop, layer.opacity);
  });
}

/* Next, these variables and functions create the story and vignette html
elements, and populate them with the content from the config.js file.
They also assign a css class to certain elements, also based on the
config.js file */

// Main 'story' and 'features' elements
var story = document.getElementById("story");
var features = document.createElement("div");
features.classList.add(alignments[config.alignment]);
features.setAttribute("id", "features");

// Main 'header' element
var header = document.createElement("div");

// If the content exists, assign it to the 'header' element
if (config.toptitle) {
  var toptitle = document.createElement("h4");
  toptitle.innerText = config.toptitle;
  header.appendChild(toptitle);
}
if (config.title) {
  var titleText = document.createElement("h1");
  titleText.innerText = config.title;
  header.appendChild(titleText);
}
if (config.byline) {
  var bylineText = document.createElement("p");
  bylineText.classList.add("byline");
  bylineText.innerText = config.byline;
  header.appendChild(bylineText);
}
if (config.description) {
  var descriptionText = document.createElement("p");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If the header has anything in it, it gets appended to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* After building the elements and assigning content to the header these
functions will loop through the chapters in the config.js file,
create the vignette elements and assign them their respective content */

config.chapters.forEach((record, idx) => {
  /* These first two variables will hold each vignette, the chapter
    element will go in the container element */
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // Creates the title for the vignettes
  if (record.title) {
    var title = document.createElement("h3");
    title.innerText = record.title;
    chapter.appendChild(title);
  }
  // Creates the image for the vignette
  if (record.image) {
    var image = new Image();
    image.src = record.image;
    chapter.appendChild(image);
  }
  // Creates the image credit for the vignette
  if (record.imageCredit) {
    var imageCredit = document.createElement("p");
    imageCredit.classList.add("imageCredit");
    imageCredit.innerHTML = "Image credit: " + record.imageCredit;
    chapter.appendChild(imageCredit);
  }
  // Creates the description for the vignette
  if (record.description) {
    var story = document.createElement("p");
    story.innerHTML = record.description;
    chapter.appendChild(story);
  }
  // Sets the id for the vignette and adds the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  if (idx === 0) {
    container.classList.add("active");
  }
  // Sets the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* Appends the chapter to the container element and the container
    element to the features element */
  container.appendChild(chapter);
  features.appendChild(container);
});

// Appends the features element (with the vignettes) to the story element
story.appendChild(features);

/* Next, this section creates the footer element and assigns it
its content based on the config.js file */

var footer = document.createElement("div");
// This assigns all the content to the footer element
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer + "<br>" + config.footerAttribution;
  footer.appendChild(footerText);
}
// If the footer element contains any content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// Adds the Mapbox access token
mapboxgl.accessToken = config.accessToken;

// Honestly, don't know what this does
const transformRequest = url => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=journalismScrollytelling"
    : "?pluginName=journalismScrollytelling";
  return {
    url: url + suffix
  };
};

/* This section creates the map element with the
attributes from the main section of the config.js file */

var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: config.chapters[0].location.zoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  scrollZoom: false,
  transformRequest: transformRequest
});

// Instantiates the scrollama function
var scroller = scrollama();

// color gradient
var colorGradient = [
  "#845ec2",
  "#d65db1",
  "#ff6f91",
  "#ff9671",
  "#ffc75f",
  "#f9f871"
];
var defaultGray = "#d3d3d3";
/* Here we add the two extra layers we are using, just like in our previous
tutorial. At the end, however, we setup the functions that will tie the
scrolling to the chapters and move the map from one location to another
while changing the zoom level, pitch and bearing */

map.on("load", function() {
  // This is the function that finds the first symbol layer
  var layers = map.getStyle().layers;
  var firstSymbolId;
  for (var i = 0; i < layers.length; i++) {
    if (layers[i].type === "symbol") {
      firstSymbolId = layers[i].id;
      break;
    }
  }

  /********************** 
    // chapter 1
    ***********************/
  map.addLayer(
    {
      id: "MGR_Joined",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch1/MGR_Joined_2.geojson"
      },
      paint: {
        "fill-color": [
          "step",
          ["get", "Rent"],
          defaultGray,
          1000,
          colorGradient[0],
          1500,
          colorGradient[2],
          2000,
          colorGradient[3],
          2500,
          colorGradient[4],
          3000,
          colorGradient[5]
        ],
        "fill-opacity": 0,
        "fill-outline-color": "#ffffff"
      }
    },
    "waterway-shadow"
  );

  /**********************
    // chapter 2
    ***********************/
  map.addLayer(
    {
      id: "vacancy_rate",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch2/vacancy_rate.geojson"
      },
      paint: {
        "fill-color": [
          "step",
          ["get", "Vacancy_rate"],
          "#0004fb",
          5,
          "#4800fb",
          10,
          "#9300fb",
          15,
          "#f900fb",
          20,
          "#fb0058",
          50,
          "#fb0000"
        ],
        "fill-outline-color": "#ffffff",
        "fill-opacity": 0
      }
    },
    "waterway-shadow"
  );

  /**********************
    // chapter 3
    ***********************/
  /*
    map.addLayer({
    TODO
    }'waterway-shadow');
    */

  /**********************
    // chapter 4
    ***********************/
  /*
    map.addLayer({
    TODO
    }'waterway-shadow');
    */

  /**********************
    // chapter 5
    ***********************/
  
    map.addLayer(
    {
      id: "landuseB",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch6/landuseB.geojson"
      },
      paint: {
        "fill-color": [
          "match",
          ["get", "landUse2"],
          "02",
          "#fee8c8",
          "03",
          "#fee8c8",
          "04",
          "#e34a33",
          "05",
          "#fdbb84",
          "#ffffff"
        ],
        "fill-opacity": 0
      }
    },
    "waterway-shadow"
  );
  

  /**********************
    // chapter 6
    ***********************/

    map.addLayer(
    {
      id: "landuseA",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch5/landuseA.geojson"
      },
      paint: {
        "fill-color": [
          "match",
          ["get", "LandUse"],
          "02",
          "#fee8c8",
          "03",
          "#fee8c8",
          "04",
          "#e34a33",
          "05",
          "#fdbb84",
          "#ffffff"
        ],
        "fill-opacity": 0
      }
    },
    "waterway-shadow"
  );
  
  /**********************
    // chapter 7
    ***********************/

  map.addLayer(
    {
      id: "landuseA4",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch7/landuseA4.geojson"
      },
      paint: {
        "fill-color": ["match", ["get", "landUse"], "04", "#800000", "#800000"],
        "fill-opacity": 0
      }
    },
    "waterway-shadow"
  );

  map.addLayer(
    {
      id: "landuseB4",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch7/landuseB4.geojson"
      },
      paint: {
        "fill-color": [
          "match",
          ["get", "landUse2"],
          "04",
          "#fee8c8",
          "#ffffff"
        ],
        "fill-opacity": 0
      }
    },
    "waterway-shadow"
  );

  /**********************
    // chapter 8
    ***********************/
  map.addLayer(
    {
      id: "midtown",
      type: "fill",
      source: {
        type: "geojson",
        data: "data/ch8/midtown.geojson"
      },
      paint: {
        "fill-color": "#808080",
        "fill-opacity": 0.3
      }
    },
    "waterway-shadow"
  );

  map.setPaintProperty("building-extrusion", "fill-extrusion-opacity", 0);
  // ['step', ['get', 'height'],
  //             '#3182bd',
  //             250*0.3048, '#add8e6',
  //             400*0.3048, '#3182bd',
  //             600*0.3048, '#152238',
  //             900*0.3048, '#152238',
  //     ]);

  map.addLayer({
    id: "supertallheights",
    type: "fill-extrusion",
    source: {
      type: "geojson",
      data: "data/ch8/supertallheights.geojson"
    },
    paint: {
      "fill-extrusion-height": ["*", ["get", "heightroof"], 0.3048], //convert to meters
      "fill-extrusion-color": [
        "step",
        ["get", "heightroof"],
        "#3182bd",
        0 * 0.3048,
        "#adadad",
        250 * 0.3048,
        "#add8e6",
        400 * 0.3048,
        "#3182bd",
        600 * 0.3048,
        "#152238",
        900 * 0.3048,
        "#152238"
      ],
      "fill-extrusion-opacity": 0
    }
  });

  /**********************
    // chapter 9
    ***********************/
    map.addLayer({
    id: "recordingLocations",
    type: "fill",
    source: {
      type: "geojson",
      data: "data/ch8/supertallheights.geojson"
    },
      paint: {
        "fill-color": "#808080",
        "fill-opacity": 0
      }
    },
    "waterway-shadow");
  
  map.on("click", function(e) {
    // set bbox as 5px reactangle area around clicked point
    var bbox = [[e.point.x - 5, e.point.y - 5], [e.point.x + 5, e.point.y + 5]];
    var features = map.queryRenderedFeatures(bbox, {
      layers: ["counties"]
    });

    // Run through the selected features and set a filter
    // to match features with unique FIPS codes to activate
    // the `counties-highlighted` layer.
    var filter = features.reduce(
      function(memo, feature) {
        memo.push(feature.properties.FIPS);
        return memo;
      },
      ["in", "FIPS"]
    );

    // map.setFilter("counties-highlighted", filter);
  });

  // Setup the instance, pass callback functions
  scroller
    .setup({
      step: ".step",
      offset: 0.5,
      progress: true
    })
    .onStepEnter(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id
      );
      response.element.classList.add("active");
      map.flyTo(chapter.location);
      if (config.showMarkers) {
        marker.setLngLat(chapter.location.center);
      }
      if (chapter.onChapterEnter.length > 0) {
        chapter.onChapterEnter.forEach(setLayerOpacity);
      }
    })
    .onStepExit(response => {
      var chapter = config.chapters.find(
        chap => chap.id === response.element.id
      );
      response.element.classList.remove("active");
      if (chapter.onChapterExit.length > 0) {
        chapter.onChapterExit.forEach(setLayerOpacity);
      }
    });
});

// Listen for a click on the map
map.on('click', function(e) {
  // When the map is clicked, add a new drop-off point
  // and update the `dropoffs-symbol` layer
  console.log("a click")
});

/* Here we watch for any resizing of the screen to
adjust our scrolling setup */
window.addEventListener("resize", scroller.resize);
