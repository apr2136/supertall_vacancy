var config = {
    accessToken: 'pk.eyJ1IjoiYXByMjEzNiIsImEiOiJjazlybGZ0ZXMwdm96M2dxcW9wZG80Y2U2In0.75zqiYgqoLeBbjywrfP9nQ',
    style: 'mapbox://styles/apr2136/ck8ad7yrh0jt91inta8gopadd',
    theme: 'light',
    alignment: 'left',
    toptitle: 'Points Unknown | Tutorial 10 | Mapbox Storytelling',
    title: 'Vacancies In Supertalls',
    byline: 'By Ashley, Eva, and Aayushi',
    description: '<p>This tutorial demonstrates how to use <a href="https://github.com/mapbox/storytelling">Mapbox Storytelling</a> with our previous web mapping example. Here we will use Mapbox storytelling template to first, give an overview of the decrease in subway usage around the city, and second, zoom into three different locations that exemplify the diversity of conditions around New York.</p><p>We will use the <a href="https://pointsunknown.nyc/web%20mapping/mapbox/2020/03/25/10_WebmappingTurnstileData.html">previous web map displaying MTA turnstile data</a> as the basis for our story. In this process we will use Mapbox GL JS, as well as Intersection Observer and Scrollama as our main JavaScript libraries.</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. In harum natus eos cum rem iure aperiam omnis distinctio illo quis, sunt nesciunt sint impedit deleniti dolor saepe necessitatibus eligendi aut?</p>',
    footer: 'This story is based on data by the <a href="http://web.mta.info/developers/turnstile.html">Metropolitan Transit Authority</a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>, and <a href="https://thecity.nyc/2020/03/subway-ridership-plunge-deepest-at-big-manhattan-stations.html">The City</a>.',
    footerAttribution: '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
    chapters: [
        {
            id: 'ch1',
            title: 'Chapter 1',
            image: 'images/Chapter_1_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 1',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [  
            ],
            onChapterExit: []
        },
        {
            id: 'ch2',
            title: 'Chapter 2',
            image: 'images/Chapter_2_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 2',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'ch3',
            title: 'Chapter 3',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 3',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                        {
            id: 'ch4',
            title: 'Chapter 4',
            image: 'images/Chapter_4_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 4',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'ch5',
            title: 'Chapter 5',
            image: 'images/Chapter_1_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 5',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'ch6',
            title: 'Chapter 6',
            image: 'images/Chapter_2_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 6',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'ch7',
            title: 'Chapter 7',
            image: 'images/Chapter_3_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 7',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
                {
            id: 'ch8',
            title: 'Chapter 8',
            image: 'images/Chapter_4_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 8',
            location: {
              // 15.16/40.764982/-73.978015/45.1/60
                center: [-73.978015, 40.764982],
                zoom: 15.16,
                pitch: 45.1,
                bearing: 60
            },
            onChapterEnter: [
                {
                    layer: 'midtown',
                    opacity: 0.15,
                }
            ],
            onChapterExit: [
                {
                    layer: 'midtown',
                    opacity: 0,
                }
            ]
        },
                {
            id: 'ch9',
            title: 'Chapter 9',
            image: 'images/Chapter_1_Image.jpg',
            imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
            description: 'this is the text for chapter 9',
            location: {
                center: [-73.979, 40.74],
                zoom: 10,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [],
            onChapterExit: []
        },
 
    ]
};
