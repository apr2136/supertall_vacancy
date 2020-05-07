var config = {
  accessToken: "pk.eyJ1IjoiYXByMjEzNiIsImEiOiJjazlybGZ0ZXMwdm96M2dxcW9wZG80Y2U2In0.75zqiYgqoLeBbjywrfP9nQ",
  style: "mapbox://styles/apr2136/ck8ad7yrh0jt91inta8gopadd",
  theme: "light",
  alignment: "left",
  toptitle: "Points Unknown | Spring 2020 | Columbia GSAPP",
  title: "Vacancies In Supertalls",
  byline: "By Ashley, Ava and Aayushi",
  description:
    '<p>In New York City the lack of affordable housing has long been a contentious issue undermining residential diversity. As planning policy has shifted steadily towards urban liberalism, the city relies on relaxed zoning regulations and tax incentives to provide housing and public amenities. These very upzoning policies intended to bolster vital aspects of the city have inflated real estate values and created a sweet spot for developers with little in it for most New Yorkers.</p>',
  footer:
    'This story is based on data by the <a href="hhttps://factfinder.census.gov/">American Fact Finder </a> and reporting by the New York Times (<a href="https://www.nytimes.com/2020/04/09/nyregion/coronavirus-queens-corona-jackson-heights-elmhurst.html">here</a> and <a href="https://www.nytimes.com/aponline/2020/04/02/us/ap-us-virus-outbreak-hardest-hit.html">here</a>), and <a href="https://ny.curbed.com/2020/3/24/21192454/coronavirus-nyc-transportation-subway-citi-bike-covid-19">Curbed</a>.',
  footerAttribution:
    '<a href="https://www.mapbox.com/about/maps/" target="_blank">© Mapbox</a> | <a href="http://www.openstreetmap.org/about/" target="_blank">© OpenStreetMap</a> | <a href="https://brown.columbia.edu">The Brown Institute for Media Innovation</a>',
  chapters: [
    {
      id: "ch1",
      title: "Chapter 1",
      image: "images/Chapter_1_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "this is the text for chapter 1",
      // 14.61/40.76117/-73.98131
      location: {
        center: [-74.025, 40.774],
        zoom: 11.27,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "MGR_Joined",
          opacity: 0.6
        }
      ],
      onChapterExit: [
        {
          layer: "MGR_Joined",
          opacity: 0
        }
      ]
    },
    {
      id: "ch2",
      title: "Chapter 2",
      image: "images/Chapter_2_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "this is the text for chapter 2",
      location: {
        center: [-74.025, 40.774],
        zoom: 11.27,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "vacancy_rate",
          opacity: 0.2
        }
      ],
      onChapterExit: [
        {
          layer: "vacancy_rate",
          opacity: 0
        }
      ]
    },
    {
      id: "ch3",
      title: "Chapter 3",
      image: "images/Chapter_3_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "this is the text for chapter 3",
      location: {
        center: [-74.025, 40.774],
        zoom: 11.27,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "ch4",
      title: "Chapter 4",
      image: "images/Chapter_4_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "this is the text for chapter 4",
      location: {
        center: [-73.996, 40.756],
        zoom: 13.95,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [],
      onChapterExit: []
    },
    {
      id: "ch5",
      title: "Chapter 5",
      image: "https://cdn.glitch.com/72bfdaaa-3877-4452-967f-689214d9b066%2FChapter_5_Image.png?v=1588873080395",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "Midtown forms an interesting pivot in understanding the relation between the high rents and yet higher vacancy rates. Looking into the history, the midtown zone was initially proposed as a hub for trade and commerce, developing over the years, this area got a reputation of high rise commercial buildings, some mixed use buildings but very few apartment buildings. ",
      location: {
        center: [-73.996, 40.756],
        zoom: 13.95,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "landuseB",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "landuseB",
          opacity: 0
        }
      ]
    },
    {
      id: "ch6",
      title: "Chapter 6",
      image: "https://cdn.glitch.com/72bfdaaa-3877-4452-967f-689214d9b066%2FChapter_5_Image.png?v=1588873080395",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "Out of several Bloomberg’s 2013 rezoning policies for NYC, one of the neighbourhood’s that was impacted was Midtown. The commercial lots were given incentives of higher FSI and to build twice as tall in return of addition of housing and privately owned public spaces to accommodate and invite estate investors and corporate tenants.",
      location: {
        center: [-73.996, 40.756],
        zoom: 13.95,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "landuseA",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "landuseA",
          opacity: 0
        }
      ]
    },
    {
      id: "ch7",
      title: "Chapter 7",
      image: "images/Chapter_3_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "As a result, the mixed use lots drastically increased as much as twice the footprint from the year 2000 to 2017. Several commercial lots are adding housing wings that allow them to go taller. A high concentration of these mixed use buildings can be observed developing in the north of this midtown zone, emerging to become one of the highest estate value streets of Manhattan, Billionaire's row. The number of flats available for rent in this row surged up but also increasing the rental value of these apartments.",
      location: {
        center: [-73.986, 40.761],
        zoom: 14.66,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
        {
          layer: "landuseA4",
          opacity: 1
        },
        {
          layer: "landuseB4",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "landuseA4",
          opacity: 0
        },
        {
          layer: "landuseB4",
          opacity: 0
        }
      ]
    },
    {
      id: "ch8",
      title: "Chapter 8",
      image: "images/Chapter_4_Image.jpg",
      imageCredit: '<a href="http://www.metouhey.com/">Max Touhey</a>',
      description: "this is the text for chapter 8",
      location: {
        // 15.16/40.764982/-73.978015/45.1/60
        center: [-73.978015, 40.764982],
        zoom: 15.16,
        pitch: 45.1,
        bearing: 60
      },
      onChapterEnter: [
        {
          layer: "midtown",
          opacity: 0.15
        },
        {
          layer: "supertallheights",
          opacity: 0.5
        }
      ],
      onChapterExit: [
        {
          layer: "midtown",
          opacity: 0
        },
        {
          layer: "supertallheights",
          opacity: 0
        }
      ]
    },
    {
      
      id: "ch9",
      title: "Chapter 9",
      image: "images/Chapter_1_Image.jpg",
      imageCredit: "<a href=source</a>",
      description:  `
      <audio controls autoplay id="audio-control">
        <source src="audio/vinoly_tower_residential.m4a" type="audio/mpeg">
        Your browser does not support the audio tag.
      </audio>`,
      location: {
        center: [-73.98131, 40.76117],
        zoom: 14.61,
        pitch: 0,
        bearing: 0
      },
      onChapterEnter: [
      ],
      onChapterExit: [
      ],
    }
  ]
};
