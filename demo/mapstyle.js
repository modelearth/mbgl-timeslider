/*
 * A MB Style object, used as-is by the Mapbox GL map define layers, styles, basemap options, etc
 * Broken into a separate file for more modular version control, so design folks can mess with it with fewer merge conflicts
 * This file being a JSON-like structure, but not a JSON document, we have certain liberties such as commenting and variable interpolation.
 *
 * While this structure can be READ at startup to create UI etc,
 * the official source of truth once the map is running would be MAP.getStyle().layers
 * which would reflect the actual state of the layers at that time: changed visibility, style & filters, ...
 * and it's the LayerPickerControl which will change the visibility of these layers (that's why they're all "none" right now)
 */

var GLMAP_STYLE = {
  "version": 8,
  "name": "ohmbasemap",
  "sources": {
    "osm": {
      "type": "vector",
      "tiles": [
        "http://a16ccd46b40d243f6b46ee60df7d70fc-1849580256.us-east-1.elb.amazonaws.com:9090/maps/osm/{z}/{x}/{y}.pbf"
      ]
    },
  },
  "sprite": "https://go-spatial.github.io/carto-assets/spritesets/osm_tegola_spritesheet",
  "glyphs": "https://go-spatial.github.io/carto-assets/fonts/{fontstack}/{range}.pbf",
  "layers": [
    {
      "id": "background",
      "type": "background",
      "minzoom": 0,
      "maxzoom": 20,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
         "background-color": "rgba(144, 204, 203, 1)"
      }
    },
    {
      "id": "land",
      "type": "fill",
      "source": "osm",
      "source-layer": "land",
      "minzoom": 0,
      "maxzoom": 24,
      "paint": {
        "fill-color": "rgba(247, 246, 241, 1)"
      }
    },
    {
      "id": "pier",
      "type": "fill",
      "source": "osm",
      "source-layer": "other_areas",
      "filter": [
        "all",
        [
          "==",
          "type",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(247, 246, 241, 1)"
      }
    },
    {
      "id": "airports",
      "type": "fill",
      "source": "osm",
      "source-layer": "transport_areas",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "apron"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(221, 221, 221, 1)"
      }
    },
    {
      "id": "landuse_areas_z13",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 13,
      "maxzoom": 24,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "property": "type",
          "type": "categorical",
      "default": "transparent",
          "stops": [
           
            [
              "wetland",
              "rgba(227, 233, 226, 1)"
            ],
            [
              "salt_pond",
              "rgba(236, 240, 241, 1)"
            ],
            [
              "basin",
              "rgba(144, 204, 203, 1)"
            ],
            [
              "beach",
              "rgba(238, 229, 178, 1)"
            ],
            [
              "desert",
              "rgba(238, 229, 178, 1)"
            ],
            [
              "farmland",
              "rgba(222, 221, 190, 1)"
            ],
            [
              "farm",
              "rgba(222, 221, 190, 1)"
            ],
            [
              "orchard",
              "rgba(222, 221, 190, 1)"
            ],
            [
              "allotments",
              "rgba(222, 221, 190, 1)"
            ],
            [
              "heath",
              "rgba(225, 233, 214, 1)"
            ],
            [
              "meadow",
              "rgba(225, 233, 214, 1)"
            ],
            [
              "residential",
              "rgba(237, 236, 231, 1)"
            ],
            [
              "retail",
              "rgba(237, 236, 231, 1)"
            ],
            [
              "industrial",
              "rgba(215, 200, 203, 1)"
            ],
            [
              "quarry",
              "rgba(215, 200, 203, 1)"
            ],
            [
              "landfill",
              "rgba(194, 170, 175, 1)"
            ],
            [
              "college",
              "rgba(226, 214, 205, 1)"
            ],
            [
              "school",
              "rgba(226, 214, 205, 1)"
            ],
            [
              "education",
              "rgba(226, 214, 205, 1)"
            ],
            [
              "university",
              "rgba(226, 214, 205, 1)"
            ],
            [
              "cemetery",
              "rgba(214, 222, 210, 1)"
            ],
            [
              "grave_yard",
              "rgba(214, 222, 210, 1)"
            ],
            [
              "park",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "pitch",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "sports_centre",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "stadium",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "grass",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "grassland",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "garden",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "village_green",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "recreation_ground",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "picnic_site",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "camp_site",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "playground",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "forest",
              "rgba(178, 194, 157, 1)"
            ],
            [
              "wood",
              "rgba(178, 194, 157, 1)"
            ],
            [
              "nature_reserve",
              "rgba(178, 194, 157, 0.2)"
            ],
            [
              "commercial",
              "rgba(215,200,203,1)"
            ]
          ]
        }
      }
    },
    {
      "id": "landuse_areas_z10",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 10,
      "maxzoom": 13,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "property": "type",
          "type": "categorical",
      "default": "transparent",
          "stops": [
            [
              "park",
              "rgba(208, 220, 174, 1)"
            ],
            [
              "forest",
              "rgba(178, 194, 157, 1)"
            ],
            [
              "wood",
              "rgba(178, 194, 157, 1)"
            ],
            [
              "nature_reserve",
              "rgba(178, 194, 157, 0.3)"
            ],
            [
              "landfill",
              "rgba(194, 170, 175, 1)"
            ]
          ]
        }
      }
    },
  {
      "id": "landuse_areas_park_overlay",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 10,
      "maxzoom": 24,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": {
          "property": "type",
          "type": "categorical",
          "default": "transparent",
          "stops": [
            [
              "park",
              "rgba(208, 220, 174, 1)"
            ]
          ]
        }
      }
    },
  {
      "id": "landuse_areas_military_overlay",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "military"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(178, 194, 157, 1)",
    "fill-pattern": "military-fill"
      }
    },
    {
      "id": "landuse_areas_z7",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 7,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "in",
          "type",
          "forest",
          "wood",
          "nature_reserve"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(178, 194, 157, 1)"
      }
    },
    {
      "id": "landuse_areas_z5",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 5,
      "maxzoom": 7,
      "filter": [
        "all",
        [
          "in",
          "type",
          "forest",
          "wood"
        ],
        [
          ">",
          "area",
          50000000
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(178, 194, 157, 1)"
      }
    },
    {
      "id": "landuse_areas_z3",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 3,
      "maxzoom": 5,
      "filter": [
        "all",
        [
          "in",
          "type",
          "forest",
          "wood"
        ],
        [
          ">",
          "area",
          500000000
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(178, 194, 157, 1)"
      }
    },
    {
      "id": "amenity_areas",
      "type": "fill",
      "source": "osm",
      "source-layer": "amenity_areas",
      "filter": [
        "all",
        [
          "in",
          "type",
          "school",
          "university"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(226, 214, 205, 1)"
      }
    },
    {
      "id": "landuse_naturereserveoutline",
      "type": "line",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 10,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "nature_reserve"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-width": {
          "stops": [
            [
              10,
              2
            ],
            [
              20,
              3
            ]
          ]
        },
        "line-dasharray": [
          2.5,
          1.5
        ],
        "line-color": "rgba(195, 203, 179, 1)"
      }
    },
    {
      "id": "military_landuselow",
      "type": "fill",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 4,
      "maxzoom": 10,
      "filter": [
        "all",
        [
          "==",
          "type",
          "military"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(230, 224, 212, 1)"
      }
    },
    {
      "id": "military",
      "type": "fill",
      "source": "osm",
      "source-layer": "other_areas",
      "filter": [
        "all",
        [
          "==",
          "class",
          "military"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(230, 224, 212, 1)"
      }
    },
  {
      "id": "buildings_flat",
      "type": "fill",
      "source": "osm",
      "source-layer": "buildings",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all"
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(220, 215, 215, 1)",
        "fill-outline-color": "rgba(195, 188, 188, 1)"
      }
    },
    {
      "id": "water_lines_stream",
      "type": "line",
      "source": "osm",
      "source-layer": "water_lines",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "stream"
        ]
      ],
      "paint": {
        "line-color": "rgba(144, 204, 203, 1)",
        "line-width": {
          "stops": [
            [
              13,
              0.5
            ],
            [
              15,
              0.8
            ],
            [
              20,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "water_lines_ditch",
      "type": "line",
      "source": "osm",
      "source-layer": "water_lines",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "ditch",
          "drain"
        ]
      ],
      "paint": {
        "line-color": "rgba(144, 204, 203, 1)",
        "line-width": {
          "stops": [
            [
              15,
              0.2
            ],
            [
              20,
              1.5
            ]
          ]
        }
      }
    },
    {
      "id": "water_lines_canal",
      "type": "line",
      "source": "osm",
      "source-layer": "water_lines",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "canal"
        ]
      ],
      "paint": {
        "line-color": "rgba(144, 204, 203, 1)",
        "line-width": {
          "stops": [
            [
              8,
              0.5
            ],
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              20,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "water_lines_river",
      "type": "line",
      "source": "osm",
      "source-layer": "water_lines",
      "minzoom": 8,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "river"
        ]
      ],
      "paint": {
        "line-color": "rgba(144, 204, 203, 1)",
        "line-width": {
          "stops": [
            [
              8,
              1
            ],
            [
              12,
              1.5
            ],
            [
              13,
              2
            ],
            [
              14,
              5
            ],
            [
              20,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "water_areas",
      "type": "fill",
      "source": "osm",
      "source-layer": "water_areas",
      "minzoom": 5,
      "maxzoom": 24,
      "paint": {
        "fill-color": "rgba(144, 204, 203, 1)"
      }
    },
    {
      "id": "water_areas_z3",
      "type": "fill",
      "source": "osm",
      "source-layer": "water_areas",
      "minzoom": 3,
      "maxzoom": 5,
      "filter": [
        "all",
        [
          ">",
          "area",
          1000000000
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "fill-color": "rgba(144, 204, 203, 1)"
      }
    },
  {
      "id": "pier_line",
      "type": "line",
      "source": "osm",
      "source-layer": "other_lines",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(247, 246, 241, 1)",
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              18,
              7
            ]
          ]
        }
      }
    },
  {
      "id": "aero_taxiway_lines",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "taxiway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(220, 220, 220, 1)",
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
      [
        13,
        1.5
      ],
            [
              18,
              4
            ]
          ]
        }
      }
    },
    {
      "id": "aero_runway_lines",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "runway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(220, 220, 220, 1)",
    "line-width": {
          "stops": [
            [
              12,
              1.5
            ],
            [
              18,
              25
            ]
          ]
        }
      }
    },
  {
      "id": "city_county_lines",
      "type": "line",
      "source": "osm",
      "source-layer": "admin_lines",
      "minzoom": 10,
      "maxzoom": 20,
    "filter": [
        "all",
        [
          ">=",
          "admin_level",
          6
        ],
    [
          "<=",
          "admin_level",
          8
        ]
    ],  
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(210, 210, 210, 1)",
    "line-dasharray": [
          2,
          2
        ],
    "line-width": 1.5
      }
    },
  {
      "id": "state_lines_z10",
      "type": "line",
      "source": "osm",
      "source-layer": "admin_lines",
      "minzoom": 10,
      "maxzoom": 20,
    "filter": [
        "all",
        [
          "==",
          "admin_level",
          4
        ]
    ],  
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(178, 171, 171, 1)",
    "line-dasharray": [
          6,
          3
        ],
    "line-width": 1.5
      }
    },
  {
      "id": "state_lines_z2",
      "type": "line",
      "source": "osm",
      "source-layer": "state_lines",
      "minzoom": 2,
      "maxzoom": 10,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(178, 171, 171, 1)",
    "line-dasharray": [
          6,
          3
        ],
    "line-width": 1.5
      }
    },
    {
      "id": "roads_trackfillcase",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "track"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(239, 221, 203, 1)",
        "line-width": {
          "stops": [
            [
              14,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "roads_trackfill",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "track"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(251, 247, 245, 1)",
        "line-width": {
          "stops": [
            [
              14,
              0.5
            ],
            [
              20,
              3
            ]
          ]
        }
      }
    },
    {
      "id": "roads_track",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "track"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(218, 191, 164, 1)",
        "line-dasharray": [
          0.3,
          1
        ],
        "line-width": {
          "stops": [
            [
              14,
              3
            ],
            [
              20,
              8
            ]
          ]
        }
      }
    },
    {
      "id": "roads_footway",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "footway",
          "cycleway",
          "path",
          "pedestrian"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(191, 147, 98, 1)",
        "line-width": 1,
        "line-dasharray": [
          1,
          2
        ]
      }
    },
    {
      "id": "roads_pier",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "pier"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 255, 255, 1)",
        "line-width": 4
      }
    },
    {
      "id": "roads_steps",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "steps"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(152, 83, 37, 1)",
        "line-width": {
          "stops": [
            [
              14,
              3
            ],
            [
              18,
              6
            ]
          ]
        },
        "line-dasharray": [
          0.1,
          0.3
        ]
      }
    },
    {
      "id": "roads_other",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "unclassified",
          "living_street",
          "raceway"
        ]
      ],
      "layout": {
        "visibility": "none"
      },
      "paint": {
        "line-color": "rgba(226, 225, 221, 1)",
        "line-width": {
          "stops": [
            [
              14,
              4
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_residentialcase_z13",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "residential",
          "service",
          "unclassified"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(226, 222, 204, 1)",
        "line-width": {
          "stops": [
            [
              13,
              2
            ],
            [
              14,
              3
            ],
            [
              18,
              10
            ]
          ]
        }
      }
    },
    {
      "id": "roads_residential",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 13,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "residential",
          "service",
          "unclassified"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(247, 246, 241, 1)",
        "line-width": {
          "stops": [
            [
              13,
              0.5
            ],
            [
              14,
              1
            ],
            [
              18,
              6
            ]
          ]
        }
      }
    },
    {
      "id": "roads_rail",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 12,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "rail"
        ],
        [
          "!in",
          "service",
          "yard",
          "siding"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "stops": [
            [
              12,
              1
            ],
            [
              13,
              1
            ],
            [
              14,
              1.25
            ],
            [
              20,
              2.25
            ]
          ]
        }
      }
    },
    {
      "id": "roads_tertiarytunnel",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "tertiary"
        ],
        [
          "==",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(245, 237, 179, 1)",
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3.5
            ],
            [
              14,
              3.5
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "roads_secondarylink",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "type",
          "secondary_link"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(233, 203, 176, 1)",
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              6
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "roads_primarylink",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "in",
          "type",
          "primary_link"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(210, 147, 142, 1)",
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              3.5
            ],
            [
              14,
              4.5
            ],
            [
              15,
              6
            ],
            [
              16,
              10
            ],
            [
              17,
              11
            ],
            [
              18,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorwaylink",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway_link",
          "trunk_link"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              5
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_tertiary",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "tertiary"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 224, 152, 1)",
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              6
            ],
            [
              18,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "roads_secondarytunnel",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "type",
          "secondary"
        ],
        [
          "==",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(255, 229, 202, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              4.5
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "roads_secondary",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "type",
          "secondary"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(233, 203, 176, 1)",
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              6
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "roads_primarytunnel",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "type",
          "primary"
        ],
        [
          "==",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(236, 173, 168, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              4.5
            ],
            [
              15,
              5
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "roads_primary",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "in",
          "type",
          "primary"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(210, 147, 142, 1)",
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              3.5
            ],
            [
              14,
              4.5
            ],
            [
              15,
              6
            ],
            [
              16,
              10
            ],
            [
              17,
              11
            ],
            [
              18,
              13
            ]
          ]
        }
      }
    },
  {
      "id": "roads_subways",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "filter": [
        "all",
        [
          "in",
          "type",
          "subway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(153, 153, 153, 1)",
        "line-width": {
          "stops": [
            [
              14,
              0.7
            ],
            [
              18,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorwaytunnel",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway",
          "motorway_link",
          "trunk",
          "trunk_link"
        ],
        [
          "==",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "rgba(186, 178, 202, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              5
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorway",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway",
          "trunk"
        ],
        [
          "!=",
          "tunnel",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              5
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_trunk_z7",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "in",
          "type",
          "trunk",
      "primary"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              7,
              0.3
            ],
            [
              8,
              0.5
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
  {
      "id": "roads_motorway_z7",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 7,
      "maxzoom": 11,
      "filter": [
        "all",
        [
          "==",
          "type",
          "motorway"
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              7,
              0.6
            ],
            [
              8,
              1
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
  {
      "id": "roads_motorway_z4_minzoom",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 4,
      "maxzoom": 8,
      "filter": [
        "all",
    [
          ">",
          "min_zoom",
      5
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(224, 221, 224, 1)",
        "line-width": {
          "stops": [
            [
              4,
              0.8
            ],
            [
              7,
              1
            ],
            [
              8,
              1
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorway_z4",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 4,
      "maxzoom": 8,
      "filter": [
        "all",
    [
          "<=",
          "min_zoom",
      5
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              4,
              0.5
            ],
            [
              7,
              0.6
            ],
            [
              8,
              1
            ],
            [
              10,
              2
            ]
          ]
        }
      }
    },
    {
      "id": "roads_tertiarybridge",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 12,
      "filter": [
        "all",
        [
          "==",
          "type",
          "tertiary"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(169, 161, 103, 1)",
        "line-width": {
          "stops": [
            [
              12,
              2
            ],
            [
              13,
              3.5
            ],
            [
              14,
              3.5
            ],
            [
              15,
              4
            ],
            [
              16,
              6
            ],
            [
              17,
              8
            ],
            [
              18,
              12
            ]
          ]
        }
      }
    },
    {
      "id": "roads_tertiarybridgetop",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "tertiary"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(214, 224, 152, 1)",
        "line-width": {
          "stops": [
            [
              11,
              2
            ],
            [
              12,
              2
            ],
            [
              14,
              3
            ],
            [
              15,
              6
            ],
            [
              18,
              11
            ]
          ]
        }
      }
    },
    {
      "id": "roads_secondarybridge",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "filter": [
        "all",
        [
          "==",
          "type",
          "secondary"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(183, 153, 126, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              8
            ],
            [
              15,
              10
            ],
            [
              16,
              12
            ],
            [
              17,
              14
            ],
            [
              18,
              18
            ]
          ]
        }
      }
    },
    {
      "id": "roads_secondarybridgetop",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "==",
          "type",
          "secondary"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(233, 203, 176, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              6
            ],
            [
              15,
              7
            ],
            [
              16,
              9
            ],
            [
              17,
              10
            ],
            [
              18,
              14
            ]
          ]
        }
      }
    },
    {
      "id": "roads_primarybridge",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 13,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "primary",
          "primary_link"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "line-cap": "butt",
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(160, 97, 92, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              4.5
            ],
            [
              14,
              8
            ],
            [
              15,
              9
            ],
            [
              16,
              12
            ],
            [
              17,
              15
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
    {
      "id": "roads_primarybridgetop",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 9,
      "filter": [
        "all",
        [
          "in",
          "type",
          "primary"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(210, 147, 142, 1)",
        "line-width": {
          "stops": [
            [
              9,
              1
            ],
            [
              11,
              3
            ],
            [
              13,
              3.5
            ],
            [
              14,
              4.5
            ],
            [
              15,
              6
            ],
            [
              16,
              10
            ],
            [
              17,
              11
            ],
            [
              18,
              13
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorwaybridge",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway",
          "motorway_link",
          "trunk",
          "trunk_link"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "rgba(110, 102, 126, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              5
            ],
            [
              14,
              7
            ],
            [
              15,
              10
            ],
            [
              16,
              12
            ],
            [
              17,
              14
            ],
            [
              18,
              20
            ]
          ]
        }
      }
    },
    {
      "id": "roads_motorwaybridgetop",
      "type": "line",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "maxzoom": 20,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway",
          "motorway_link",
          "trunk",
          "trunk_link"
        ],
        [
          "==",
          "bridge",
          1
        ]
      ],
      "layout": {
        "visibility": "visible",
        "line-cap": "butt",
        "line-join": "miter"
      },
      "paint": {
        "line-color": "rgba(160, 152, 176, 1)",
        "line-width": {
          "stops": [
            [
              11,
              3
            ],
            [
              13,
              5
            ],
            [
              14,
              5
            ],
            [
              15,
              6
            ],
            [
              16,
              8
            ],
            [
              17,
              10
            ],
            [
              18,
              16
            ]
          ]
        }
      }
    },
  {
      "id": "admin_countrylines_z10",
      "type": "line",
      "source": "osm",
      "source-layer": "admin_lines",
      "minzoom": 10,
      "maxzoom": 20,
    "filter": [
        "all",
        [
          "==",
          "admin_level",
          2
        ]
    ],  
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(129, 150, 154, 1)",
    "line-width": {
      "stops": [
        [ 0,
        0.5
        ],
        [
        7,
        3
        ]
      ]
    } 
      }
    },
    {
      "id": "admin_countrylines_z0",
      "type": "line",
      "source": "osm",
      "source-layer": "country_lines",
      "minzoom": 0,
      "maxzoom": 10,
      "layout": {
        "visibility": "visible"
      },
      "paint": {
        "line-color": "rgba(129, 150, 154, 1)",
    "line-width": {
      "stops": [
        [ 0,
        0.5
        ],
        [
        7,
        3
        ]
      ]
    } 
      }
    },
    {
      "id": "roadlabels_z14",
      "type": "symbol",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 14,
      "filter": [
        "!=",
        "type",
        "subway"
      ],
      "layout": {
        "text-field": "{name}",
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "symbol-avoid-edges": false,
        "text-size": {
          "stops": [
            [
              13,
              10
            ],
            [
              20,
              18
            ]
          ]
        },
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-font": [
          "Open Sans Regular"
        ]
      },
      "paint": {
        "text-color": "rgba(82, 82, 82, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
      }
    },
    {
      "id": "roadlabels_z11",
      "type": "symbol",
      "source": "osm",
      "source-layer": "transport_lines",
      "minzoom": 11,
      "filter": [
        "all",
        [
          "in",
          "type",
          "motorway",
          "trunk"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "symbol-placement": "line",
        "symbol-spacing": 250,
        "symbol-avoid-edges": false,
        "text-size": 10,
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-font": [
          "Open Sans Regular"
        ]
      },
      "paint": {
        "text-color": "rgba(82, 82, 82, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(255, 255, 255, 0.8)"
      }
    },
    {
      "id": "water_areaslabels_z15",
      "type": "symbol",
      "source": "osm",
      "source-layer": "water_areas",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          ">",
          "area",
          100000
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Open Sans Italic"
        ],
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              15,
              11
            ],
            [
              20,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-color": "rgba(68, 136, 136, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(178, 220, 220, 1)"
      }
    },
    {
      "id": "water_areaslabels_z12",
      "type": "symbol",
      "source": "osm",
      "source-layer": "water_areas",
      "minzoom": 12,
      "maxzoom": 15,
      "filter": [
        "all",
        [
          ">",
          "area",
          1000000
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Open Sans Italic"
        ],
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              12,
              10
            ],
            [
              15,
              11
            ],
            [
              20,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-color": "rgba(68, 136, 136, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(178, 220, 220, 1)"
      }
    },
    {
      "id": "water_areaslabels_z8",
      "type": "symbol",
      "source": "osm",
      "source-layer": "water_areas",
      "minzoom": 8,
      "maxzoom": 12,
      "filter": [
        "all",
        [
          ">",
          "area",
          10000000
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Open Sans Italic"
        ],
        "text-padding": 2,
        "text-allow-overlap": false,
        "text-size": {
          "stops": [
            [
              8,
              8
            ],
            [
              15,
              11
            ],
            [
              20,
              20
            ]
          ]
        }
      },
      "paint": {
        "text-color": "rgba(68, 136, 136, 1)",
        "text-halo-width": 1,
        "text-halo-color": "rgba(178, 220, 220, 1)"
      }
    },
    {
      "id": "water_linesabels",
      "type": "symbol",
      "source": "osm",
      "source-layer": "water_lines",
      "layout": {
        "text-field": "{name}",
        "text-font": [
          "Open Sans Italic"
        ],
        "symbol-placement": "line",
        "text-pitch-alignment": "auto",
        "text-rotation-alignment": "auto",
        "text-size": {
          "stops": [
            [
              11,
              11
            ],
            [
              13,
              13
            ]
          ]
        },
        "text-anchor": "bottom",
        "text-letter-spacing": 0
      },
      "paint": {
        "text-color": "rgba(68, 136, 136, 1)",
        "text-halo-color": "rgba(178, 220, 220, 1)",
        "text-halo-width": 1
      },
      "symbol-spacing": 500,
      "text-anchor": "bottom"
    },
    {
      "id": "landuse_areaslabels_park",
      "type": "symbol",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "park",
          "sports_centre",
          "stadium",
          "grass",
          "grassland",
          "garden",
          "village_green",
          "recreation_ground",
          "picnic_site",
          "camp_site",
          "playground"
        ],
        [
          ">",
          "area",
          12000
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 11
      },
      "paint": {
        "text-color": "rgba(122, 143, 61, 1)",
        "text-halo-color": "rgba(228, 235, 209, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "landuse_areaslabels_forest",
      "type": "symbol",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "forest",
          "wood",
          "nature_reserve"
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 11
      },
      "paint": {
        "text-color": "rgba(95, 107, 71, 1)",
        "text-halo-color": "rgba(201, 213, 190, 1)",
        "text-halo-width": 1
      }
    },
    {
      "id": "landuse_areaslabels_school",
      "type": "symbol",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 14,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "in",
          "type",
          "college",
          "school",
          "education",
          "university",
          ""
        ]
      ],
      "layout": {
        "text-field": "{name}",
        "text-size": 11
      },
      "paint": {
        "text-color": "rgba(176, 130, 130, 1)",
        "text-halo-color": "rgba(245, 239, 239, 1)",
        "text-halo-width": 1
      }
    },
  {
      "id": "city_labels_z14",
      "type": "symbol",
      "source": "osm",
      "source-layer": "admin_lines",
      "minzoom": 14,
      "maxzoom": 20,
    "filter": [
        "all",
    [
          "==",
          "admin_level",
          8
        ]
    ],  
       "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Regular"
        ],
    "text-size": 10,
    "text-transform": "uppercase",
    "text-letter-spacing": 0.5
      },
      "paint": {
        "text-color": "rgba(34, 34, 34, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "city_labels_z12",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 12,
      "maxzoom": 14,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Populated place"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Regular"
        ],
    "text-size": 10,
    "text-transform": "uppercase",
    "text-letter-spacing": 0.5
      },
      "paint": {
        "text-color": "rgba(34, 34, 34, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "city_labels_z6",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 6,
      "maxzoom": 12,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Populated place"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Regular"
        ],
    "text-size": 10
      },
      "paint": {
        "text-color": "rgba(34, 34, 34, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "state_labels",
      "type": "symbol",
      "source": "osm",
      "source-layer": "state_label_points",
      "minzoom": 5,
      "maxzoom": 10,
    "filter": [
        "all",
        [
          "==",
          "scalerank",
          2
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Bold Italic"
        ],
    "text-size": {
      "stops": [
            [
              4,
              7
            ],
            [
              10,
              16
            ]
          ]
    }  
      },
      "paint": {
        "text-color": "rgba(166, 166, 170, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "statecapital_labels_z10",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 10,
      "maxzoom": 20,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Admin-1 capital"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Bold"
        ],
    "text-size": 10,
    "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(68, 51, 85, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "statecapital_labels_z4",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 4,
      "maxzoom": 10,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Admin-1 capital"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Bold"
        ],
    "text-size": {
      "stops": [
            [
              4,
              7
            ],
            [
              10,
              10
            ]
          ]
    }  
      },
      "paint": {
        "text-color": "rgba(68, 51, 85, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "capital_labels_z10",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 10,
      "maxzoom": 20,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Admin-0 capital"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Bold"
        ],
    "text-size": 11,
    "text-transform": "uppercase"
      },
      "paint": {
        "text-color": "rgba(68, 51, 85, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "capital_labels_z3",
      "type": "symbol",
      "source": "osm",
      "source-layer": "populated_places",
      "minzoom": 3,
      "maxzoom": 10,
    "filter": [
        "all",
        [
          "==",
          "featurecla",
          "Admin-0 capital"
        ]
      ],
      "layout": {
        "text-field": "{name}",
    "text-font": [
          "Open Sans Bold"
        ],
    "text-size": {
      "stops": [
            [
              3,
              9
            ],
            [
              10,
              11
            ]
          ]
    }  
      },
      "paint": {
        "text-color": "rgba(68, 51, 85, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 1
      }
    },
  {
      "id": "country_labels",
      "type": "symbol",
      "source": "osm",
      "source-layer": "country_label_points",
      "minzoom": 3,
      "maxzoom": 7,
    "filter": [
        "all",
        [
          "==",
          "scalerank",
          0
        ]
      ],
      "layout": {
        "text-field": "{sr_subunit}",
    "text-font": [
          "Open Sans Bold"
        ],
        "text-size": {
      "stops": [
            [
              3,
              11
            ],
            [
              7,
              13
            ]
          ]
    }  
      },
      "paint": {
        "text-color": "rgba(68, 51, 85, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 1,
    "text-halo-blur": 5
      }
    },
    {
      "id": "power_lines",
      "type": "line",
      "source": "osm",
      "source-layer": "other_lines",
      "filter": [
        "all",
        [
          "==",
          "class",
          "power"
        ],
        [
          "==",
          "type",
          "line"
        ]
      ],
      "paint": {
        "line-color": "rgba(164, 129, 136, 1)"
      }
    },
    {
      "id": "transport_points",
      "type": "symbol",
      "source": "osm",
      "source-layer": "transport_points",
      "minzoom": 16,
      "maxzoom": 24,
      "layout": {
        "icon-image": "{type}-18"
      },
      "paint": {
        "icon-color": "rgba(12, 9, 9, 1)"
      }
    },
    {
      "id": "points_of_interest_frombuildings",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "minzoom": 16,
      "filter": [
        "all",
        [
          "has",
          "tourism"
        ]
      ],
      "layout": {
        "icon-image": "{tourism}-18",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "points_of_interest_fromareasz14",
      "type": "symbol",
      "source": "osm",
      "source-layer": "amenity_areas",
      "minzoom": 14,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "in",
          "type",
          "fire_station",
          "bank",
          "border_control",
          "embassy",
          "government",
          "hospital",
          "police",
          "school",
          "taxi",
          "townhall",
          "university"
        ]
      ],
      "layout": {
        "icon-image": "{type}-12",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "points_of_interest_fromareas",
      "type": "symbol",
      "source": "osm",
      "source-layer": "amenity_areas",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": [
        "all"
      ],
      "layout": {
        "icon-image": "{type}-18",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "points_of_interest14",
      "type": "symbol",
      "source": "osm",
      "source-layer": "amenity_points",
      "minzoom": 14,
      "maxzoom": 16,
      "filter": [
        "all",
        [
          "in",
          "type",
          "fire_station",
          "bank",
          "border_control",
          "embassy",
          "government",
          "hospital",
          "police",
          "school",
          "taxi",
          "townhall",
          "university"
        ]
      ],
      "layout": {
        "icon-image": "{type}-12",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "points_of_interest",
      "type": "symbol",
      "source": "osm",
      "source-layer": "amenity_points",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": [
        "all"
      ],
      "layout": {
        "icon-image": "{type}-18",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    },
    {
      "id": "points_powertower",
      "type": "symbol",
      "source": "osm",
      "source-layer": "other_points",
      "minzoom": 15,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "==",
          "type",
          "tower"
        ]
      ],
      "layout": {
        "icon-image": "power_tower-12"
      }
    },
    {
      "id": "points_airport",
      "type": "symbol",
      "source": "osm",
      "source-layer": "transport_areas",
      "minzoom": 10,
      "maxzoom": 14,
      "filter": [
        "all",
        [
          "==",
          "type",
          "aerodrome"
        ]
      ],
      "layout": {
        "icon-image": "airport-18"
      }
    },
    {
      "id": "points_placeofworshipother",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "filter": [
        "all",
        [
          "==",
          "type",
          "place_of_worship"
        ],
        [
          "!in",
          "religion",
          "christian",
          "muslim",
          "jewish"
        ]
      ],
      "layout": {
        "icon-image": "place_of_worship-18"
      }
    },
    {
      "id": "points_religion",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "filter": [
        "all"
      ],
      "layout": {
        "icon-image": "{religion}-18"
      }
    },
    {
      "id": "points_fromlanduseareas",
      "type": "symbol",
      "source": "osm",
      "source-layer": "landuse_areas",
      "minzoom": 16,
      "layout": {
        "icon-image": "{type}-18"
      }
    },
    {
      "id": "points_acra",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "filter": [
        "all",
        [
          "in",
          "name",
          "ACRA",
          "Acra"
        ]
      ],
      "layout": {
        "icon-image": "acra-18"
      }
    },
    {
      "id": "points_oxfam",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "filter": [
        "all",
        [
          "in",
          "name",
          "Oxfam Books & Music",
          "Oxfam",
          "Oxfam Boutique",
          "Oxfam Shop",
          "oxfam",
          "Oxfam Bookshop",
          "Oxfam Wereldwinkel",
          "Oxfam Books",
          "OXFAM",
          "Oxfam GB",
          "Oxfam Solidarité",
          "OXFAM Water point",
          "Oxfam Magasins du monde",
          "Magasin du monde-Oxfam",
          "OXFAM Latrines",
          "Oxfam Charity Shop",
          "Oxfam Ireland",
          "Oxfam Buchshop",
          "Intermon Oxfam",
          "Centro di accoglienza Oxfam Italia",
          "Oxfam wereldwinkel",
          "Oxfam Book Shop",
          "Oxfam Music",
          "Oxfam Novib",
          "OXFAM Water Tank",
          "Oxfam books"
        ]
      ],
      "layout": {
        "icon-image": "oxfam-18"
      }
    },
    {
      "id": "points_of_interest_shop",
      "type": "symbol",
      "source": "osm",
      "source-layer": "buildings",
      "minzoom": 16,
      "maxzoom": 24,
      "filter": [
        "all",
        [
          "has",
          "shop"
        ]
      ],
      "layout": {
        "icon-image": "{shop}-18",
        "visibility": "visible",
        "text-field": "{name}",
        "text-size": 8,
        "text-anchor": "top",
        "text-offset": [
          0,
          1
        ]
      },
      "paint": {
        "text-color": "rgba(108, 132, 137, 1)",
        "text-halo-color": "rgba(255, 255, 255, 1)",
        "text-halo-width": 0.5,
        "text-halo-blur": 1
      }
    }
  ]
}