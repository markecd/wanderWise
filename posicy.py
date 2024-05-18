import json

data = [
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_0",
        "fields": {
            "destination_name": {
                "stringValue": "Paris"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "France"
            },
            "price_standard": {
                "doubleValue": 250.5
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/640px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg"
            }
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_1",
        "fields": {
            "destination_name": {
                "stringValue": "Rome"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Italy"
            },
            "price_standard": {
                "doubleValue": 220.0
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://www.planetware.com/wpimages/2023/07/italy-rome-tourist-attractions-view-over-the-city.jpg"
            }     
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_2",
        "fields": {
            "destination_name": {
                "stringValue": "New York"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 300.75
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_3",
        "fields": {
            "destination_name": {
                "stringValue": "Tokyo"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 280.4
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://media.cntraveller.com/photos/6343df288d5d266e2e66f082/16:9/w_2560%2Cc_limit/tokyoGettyImages-1031467664.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_4",
        "fields": {
            "destination_name": {
                "stringValue": "Sydney"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://media.tatler.com/photos/6141d37b9ce9874a3e40107d/16:9/w_2560%2Cc_limit/social_crop_sydney_opera_house_gettyimages-869714270.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_5",
        "fields": {
            "destination_name": {
                "stringValue": "Cape Town"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 200.3
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/42/126842-050-0803BC41/Sea-Point-Cape-Town-SAf.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_6",
        "fields": {
            "destination_name": {
                "stringValue": "Rio de Janeiro"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Brazil"
            },
            "price_standard": {
                "doubleValue": 180.9
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/03/94403-050-03683FB0/Rio-de-Janeiro-Braz.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_7",
        "fields": {
            "destination_name": {
                "stringValue": "Cairo"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 150.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://media.cntraveler.com/photos/655cdf1d2d09a7e0b27741b5/16:9/w_2560%2Cc_limit/Cairo%2520Egypt_GettyImages-1370918272.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_8",
        "fields": {
            "destination_name": {
                "stringValue": "Bangkok"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 160.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production172/d459/3af9262b-3d8b-40c6-b61d-e37ae1aa90aa.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_9",
        "fields": {
            "destination_name": {
                "stringValue": "Moscow"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 240.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://www.planete-energies.com/sites/default/files/styles/1200x630/public/migrated_files/images/thumbnails/image/moscow.jpg?itok=lPt9jNWR"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_10",
        "fields": {
            "destination_name": {
                "stringValue": "Toronto"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 230.45
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/147000/147900-Toronto.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_11",
        "fields": {
            "destination_name": {
                "stringValue": "Dubai"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 310.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/15/189715-050-4310222B/Dubai-United-Arab-Emirates-Burj-Khalifa-top.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_12",
        "fields": {
            "destination_name": {
                "stringValue": "Mexico City"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 170.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://ik.imgkit.net/3vlqs5axxjf/external/http://images.ntmllc.com/v4/destination/Mexico/Mexico-City/112092_SCN_MexicoCity_iStock628540524_Z42920.jpg?tr=w-1200%2Cfo-auto"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_13",
        "fields": {
            "destination_name": {
                "stringValue": "Hong Kong"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 260.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/96/84796-050-C4DEA436/Hong-Kong-Island-Victoria-Peak.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_14",
        "fields": {
            "destination_name": {
                "stringValue": "Berlin"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 210.5
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://www.travelandleisure.com/thmb/Etq4zWgOW-z9H7ZScs5_6WDcDvQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/berlin-germany-aerial-lead-BERLINTG0921-475e3a333c7f4fdea7743c6fc2f261af.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_15",
        "fields": {
            "destination_name": {
                "stringValue": "London"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 255.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/640px-London_Skyline_%28125508655%29.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_16",
        "fields": {
            "destination_name": {
                "stringValue": "Buenos Aires"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Argentina"
            },
            "price_standard": {
                "doubleValue": 195.3
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Buenos_Aires_con_las_puertas_abiertas_%28cropped%29.jpg/1200px-Buenos_Aires_con_las_puertas_abiertas_%28cropped%29.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_17",
        "fields": {
            "destination_name": {
                "stringValue": "Istanbul"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 220.8
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/28/4a/61/caption.jpg?w=1200&h=-1&s=1"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_18",
        "fields": {
            "destination_name": {
                "stringValue": "Los Angeles"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 285.2
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/22/154122-050-B1D0A7FD/Skyline-Los-Angeles-California.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_19",
        "fields": {
            "destination_name": {
                "stringValue": "Delhi"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 190.25
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://media.cntraveller.com/photos/611bed6df902cc2d167b42bc/16:9/w_2580,c_limit/gettyimages-962826702.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_20",
        "fields": {
            "destination_name": {
                "stringValue": "Shanghai"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 275.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://assets-prd.raicore.com/shanghai/-/media/project/rai-amsterdam/global/your-trip/city/shanghai.jpg?h=400&iar=0&w=720&rev=0323fbe1683e4efc8629083048bf4e96&extension=,webp&hash=06FB9D72D3D9E6416FFD0DFE5384E044"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_21",
        "fields": {
            "destination_name": {
                "stringValue": "Singapore"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Singapore"
            },
            "price_standard": {
                "doubleValue": 300.45
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://i.natgeofe.com/n/d3eb75f2-1cfb-4934-8def-8ff7a39985b8/1-urban-innovator-singapore-AP_17028110123351_3x2.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_22",
        "fields": {
            "destination_name": {
                "stringValue": "Seoul"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "South Korea"
            },
            "price_standard": {
                "doubleValue": 260.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://static.independent.co.uk/2022/12/29/14/iStock-464629385.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_23",
        "fields": {
            "destination_name": {
                "stringValue": "Lagos"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Nigeria"
            },
            "price_standard": {
                "doubleValue": 180.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production59/d859/35816b40-7c38-4bba-94b2-ba3454c6e906.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_24",
        "fields": {
            "destination_name": {
                "stringValue": "Nairobi"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Kenya"
            },
            "price_standard": {
                "doubleValue": 160.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.andbeyond.com/wp-content/uploads/sites/5/giraffe-and-sky-line-nairobi.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_25",
        "fields": {
            "destination_name": {
                "stringValue": "Barcelona"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Spain"
            },
            "price_standard": {
                "doubleValue": 230.5
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.spain.info/.content/imagenes/cabeceras-grandes/cataluna/park-guell-barcelona-s-305364611.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_26",
        "fields": {
            "destination_name": {
                "stringValue": "Munich"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 200.0
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/28/58/fc/caption.jpg?w=1200&h=-1&s=1"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_27",
        "fields": {
            "destination_name": {
                "stringValue": "San Francisco"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 270.75
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.sftravel.com/sites/default/files/styles/hero/public/2022-10/painted-ladies-city-skyline-twilight.jpg.webp?itok=MVU3kPdc"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_28",
        "fields": {
            "destination_name": {
                "stringValue": "Osaka"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 260.4
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://lp-cms-production.imgix.net/2021-07/Osaka_Castle_Grounds.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_29",
        "fields": {
            "destination_name": {
                "stringValue": "Melbourne"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 255.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Melbourne_skyline_sor.jpg/1200px-Melbourne_skyline_sor.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_30",
        "fields": {
            "destination_name": {
                "stringValue": "Johannesburg"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 190.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.andbeyond.com/wp-content/uploads/sites/5/Johannesburg-Skyline.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_31",
        "fields": {
            "destination_name": {
                "stringValue": "Lima"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Peru"
            },
            "price_standard": {
                "doubleValue": 170.9
            },
            "climate": {
                "stringValue": "Desert"
            },
            "picture_url": {
                "stringValue": "https://www.peru.travel/Contenido/Noticia/Imagen/en/1971/1.0/Principal/lima-desktop.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_32",
        "fields": {
            "destination_name": {
                "stringValue": "Alexandria"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 140.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://www.egiptoexclusivo.com/wp-content/uploads/2023/06/corniche-alejandria.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_33",
        "fields": {
            "destination_name": {
                "stringValue": "Phuket"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 150.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://media-cdn.tripadvisor.com/media/photo-m/1280/1b/4b/5d/c8/caption.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_34",
        "fields": {
            "destination_name": {
                "stringValue": "Saint Petersburg"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 220.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://cdnp.flypgs.com/files/Sehirler-long-tail/St_Petersburg/st-petersburg-gezi-rehberi.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_35",
        "fields": {
            "destination_name": {
                "stringValue": "Vancouver"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 210.45
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://res.cloudinary.com/simpleview/image/upload/v1589990523/clients/vancouverbc/Vancouver_Aerial_2017_1__72115131-4a31-42dc-b369-7a5ccec8273f.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_36",
        "fields": {
            "destination_name": {
                "stringValue": "Abu Dhabi"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 300.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production15/d288/4474ed70-d272-41b6-9947-b76204f18fa1.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_37",
        "fields": {
            "destination_name": {
                "stringValue": "Cancun"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 160.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://imageio.forbes.com/specials-images/imageserve/62ddd8334df5d760d5a0bf5b/Cancun-beach-with-boat/960x0.jpg?format=jpg&width=960"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_38",
        "fields": {
            "destination_name": {
                "stringValue": "Shenzhen"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 250.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/d6/b4/fd470797-city-9007-16886833eb0.jpg?width=1366&height=768&xhint=2474&yhint=1921&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_39",
        "fields": {
            "destination_name": {
                "stringValue": "Hamburg"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 200.5
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production19/d1430/c53e41bd-1e9b-4c80-b15b-01e81b1c4679.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_40",
        "fields": {
            "destination_name": {
                "stringValue": "Edinburgh"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 245.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://media.cntraveller.com/photos/611be9e3d5b6f5a4a3def392/16:9/w_2560%2Cc_limit/Mountain-view-over-city-Edinburgh-scotland-conde-nast-traveller-28july17-iStock.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_41",
        "fields": {
            "destination_name": {
                "stringValue": "Montevideo"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Uruguay"
            },
            "price_standard": {
                "doubleValue": 185.3
            },
            "climate": {
                "stringValue": "Humid subtropical"
            },
            "picture_url": {
                "stringValue": "https://images.squarespace-cdn.com/content/v1/52efc94ae4b01409c74273d6/1585760486953-KVGMFRIB0WUT0KZ3UEA5/montevideo_grande.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_42",
        "fields": {
            "destination_name": {
                "stringValue": "Antalya"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 210.8
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://imagedelivery.net/0LMYosKeo5o-LXOCjdKUuA/tourscanner.com/2023/07/things-to-do-in-Antalya.jpg/w=1200"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_43",
        "fields": {
            "destination_name": {
                "stringValue": "San Diego"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.travelandleisure.com/thmb/ATskoUEBblzpBKlym1lPV4J1m-s=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/san-diego-california-SDTG0221-7d1cfd65a826426d8cc7f6e41345ac19.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_44",
        "fields": {
            "destination_name": {
                "stringValue": "Mumbai"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 180.25
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://lp-cms-production.imgix.net/image_browser/Mumbai_nightlife_S.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_45",
        "fields": {
            "destination_name": {
                "stringValue": "Beijing"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 265.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.tripsavvy.com/thmb/kcIwUgDXnduZ9k4ljo4K2eA87M4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/forbidden-city-beijing-8775c18670bd412d9b54daecba137c5c.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_46",
        "fields": {
            "destination_name": {
                "stringValue": "Kuala Lumpur"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Malaysia"
            },
            "price_standard": {
                "doubleValue": 290.45
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production103/d368/f2c83435-7b5b-4d5a-8694-a91869037a36.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_47",
        "fields": {
            "destination_name": {
                "stringValue": "Busan"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "South Korea"
            },
            "price_standard": {
                "doubleValue": 250.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://lp-cms-production.imgix.net/2019-06/3a02dfb55351e777bc12a1a7d1073cfb-gamcheon-culture-village.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_48",
        "fields": {
            "destination_name": {
                "stringValue": "Accra"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Ghana"
            },
            "price_standard": {
                "doubleValue": 170.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/21/128421-050-BD03AB22/Accra-Ghana.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_49",
        "fields": {
            "destination_name": {
                "stringValue": "Mombasa"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Kenya"
            },
            "price_standard": {
                "doubleValue": 150.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.tsavonationalparkkenya.com/wp-content/uploads/2022/01/diani-beach-safari.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_50",
        "fields": {
            "destination_name": {
                "stringValue": "Lisbon"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Portugal"
            },
            "price_standard": {
                "doubleValue": 230.5
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://static.independent.co.uk/2023/07/12/14/iStock-1124556360.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_51",
        "fields": {
            "destination_name": {
                "stringValue": "Amsterdam"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Netherlands"
            },
            "price_standard": {
                "doubleValue": 220.0
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://www.holland.com/upload_mm/2/4/4/80160_fullimage_rondvaartboot%20vaart%20onder%20brug%20door%20met%20mooie%20wolkenlucht%20%C2%A9%20illusion-x%20via%20pixabay_1150x663_438x353.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_52",
        "fields": {
            "destination_name": {
                "stringValue": "Chicago"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 290.75
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://cdn.choosechicago.com/uploads/2022/09/Pink-skyline-with-out-logo.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_53",
        "fields": {
            "destination_name": {
                "stringValue": "Nagoya"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 270.4
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production35/d333/c8b7bf51-d93e-497c-ad33-a9928720ae85.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_54",
        "fields": {
            "destination_name": {
                "stringValue": "Brisbane"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 255.2
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://s1.at.atcdn.net/wp-content/uploads/2020/05/HEROCylinder-beach-2-Tourismand-Events-Queensland.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_55",
        "fields": {
            "destination_name": {
                "stringValue": "Durban"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 200.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.discoverafrica.com/wp-content/uploads/2018/03/Durbans_coastline_beach.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_56",
        "fields": {
            "destination_name": {
                "stringValue": "Bogota"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Colombia"
            },
            "price_standard": {
                "doubleValue": 180.9
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://www.colombia-travels.com/wp-content/uploads/adobestock-266299444-1.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_57",
        "fields": {
            "destination_name": {
                "stringValue": "Luxor"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 140.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/b/b2/%D8%A8%D8%A7%D9%86%D9%88%D8%B1%D8%A7%D9%85%D8%A7_%D9%85%D9%86_%D8%AF%D8%A7%D8%AE%D9%84_%D9%85%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D8%A7%D9%82%D8%B5%D8%B1.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_58",
        "fields": {
            "destination_name": {
                "stringValue": "Chiang Mai"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 160.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_59",
        "fields": {
            "destination_name": {
                "stringValue": "Kazan"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 240.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://mf.b37mrtl.ru/rbthmedia/images/2017.11/original/5a057d7115e9f930254577b2.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_60",
        "fields": {
            "destination_name": {
                "stringValue": "Montreal"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 230.45
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://i.natgeofe.com/n/17276090-4b9e-42ee-be73-9fb16fdbca2e/citylifemontreal.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_61",
        "fields": {
            "destination_name": {
                "stringValue": "Sharjah"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 310.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Al_Qasba.jpg/800px-Al_Qasba.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_62",
        "fields": {
            "destination_name": {
                "stringValue": "Guadalajara"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 170.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://i.natgeofe.com/n/947fb20b-a135-446d-a6f4-a79147acf0d7/insideguide2_3x2.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_63",
        "fields": {
            "destination_name": {
                "stringValue": "Macau"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 260.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Macau-1006756141-1440x823.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_64",
        "fields": {
            "destination_name": {
                "stringValue": "Cologne"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 200.5
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/39/a8/a226c175-city-14508-162d488c9df.jpg?width=1366&height=768&xhint=1019&yhint=833&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_65",
        "fields": {
            "destination_name": {
                "stringValue": "Glasgow"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 235.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://www.visitscotland.com/binaries/content/gallery/visitscotland/cms-images/2023/01/13/queens-park-02-1.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_66",
        "fields": {
            "destination_name": {
                "stringValue": "Cordoba"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Argentina"
            },
            "price_standard": {
                "doubleValue": 185.3
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://www.spain.info/.content/imagenes/cabeceras-grandes/andalucia/vistas-cordoba-s158982617.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_67",
        "fields": {
            "destination_name": {
                "stringValue": "Ankara"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 220.8
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/27/188627-050-1A9083AB/Ataturk-Mausoleum-Ankara-Turkey.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_68",
        "fields": {
            "destination_name": {
                "stringValue": "San Jose"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 285.2
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Valencia_Hotel%2C_Santana_Row_%28cropped%29.jpg/1200px-Valencia_Hotel%2C_Santana_Row_%28cropped%29.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_69",
        "fields": {
            "destination_name": {
                "stringValue": "Hyderabad"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 190.25
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68045-Hyderabad-And-Vicinity.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_70",
        "fields": {
            "destination_name": {
                "stringValue": "Tianjin"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 275.3
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://naturvation.eu/sites/default/files/styles/max1600/public/tianjin_0.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_71",
        "fields": {
            "destination_name": {
                "stringValue": "Jakarta"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Indonesia"
            },
            "price_standard": {
                "doubleValue": 300.45
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.getyourguide.com/img/location/5c04f3f056fc8.jpeg/99.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_72",
        "fields": {
            "destination_name": {
                "stringValue": "Incheon"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "South Korea"
            },
            "price_standard": {
                "doubleValue": 260.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Songdo_Central_Park_and_Posco_Tower_Songdo.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_73",
        "fields": {
            "destination_name": {
                "stringValue": "Abidjan"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Ivory Coast"
            },
            "price_standard": {
                "doubleValue": 180.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/00/182000-050-FBC509C0/Abidjan-Cote-Ivoire.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_74",
        "fields": {
            "destination_name": {
                "stringValue": "Kigali"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Rwanda"
            },
            "price_standard": {
                "doubleValue": 160.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/1/1f/My_city_kigali.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_75",
        "fields": {
            "destination_name": {
                "stringValue": "Madrid"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Spain"
            },
            "price_standard": {
                "doubleValue": 250.5
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.spain.info/.content/imagenes/cabeceras-grandes/madrid/calle-gran-via-madrid-s333961043.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_76",
        "fields": {
            "destination_name": {
                "stringValue": "Vienna"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Austria"
            },
            "price_standard": {
                "doubleValue": 210.0
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://static01.nyt.com/images/2023/12/07/multimedia/36hours-vienna-01-wklj/36hours-vienna-01-wklj-videoSixteenByNine3000.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_77",
        "fields": {
            "destination_name": {
                "stringValue": "Miami"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 320.75
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/17/74/0ca6e469-city-30651-1632b88f203.jpg?width=1366&height=768&xhint=2635&yhint=1507&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_78",
        "fields": {
            "destination_name": {
                "stringValue": "Kyoto"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 270.4
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://boutiquejapan.com/wp-content/uploads/2019/07/yasaka-pagoda-higashiyama-kyoto-japan.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_79",
        "fields": {
            "destination_name": {
                "stringValue": "Perth"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.chargetheglobe.com/wp-content/uploads/PerthCityYacht-OPT.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_80",
        "fields": {
            "destination_name": {
                "stringValue": "Pretoria"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 200.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/c2/18/9a370f03-city-32072-17314d6e9cf.jpg?width=1366&height=768&xhint=2612&yhint=1528&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_81",
        "fields": {
            "destination_name": {
                "stringValue": "Sao Paulo"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Brazil"
            },
            "price_standard": {
                "doubleValue": 210.9
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.benoitproperties.com/wp-content/uploads/2023/09/sao-paulo-header.png"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_82",
        "fields": {
            "destination_name": {
                "stringValue": "Aswan"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 140.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://mediaim.expedia.com/destination/1/047cfae08d1253422699d8b9fd9d8e5a.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_83",
        "fields": {
            "destination_name": {
                "stringValue": "Pattaya"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 150.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://thailandawaits.com/wp-content/uploads/2022/12/Pattaya-Guide-City-Sign-1125x695.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_84",
        "fields": {
            "destination_name": {
                "stringValue": "Novosibirsk"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 220.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/92/144492-050-FD8409C7/Novosibirsk-Russia.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_85",
        "fields": {
            "destination_name": {
                "stringValue": "Calgary"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 220.45
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://www.fodors.com/wp-content/uploads/2022/04/Hero-Calgary-shutterstock_695991625.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_86",
        "fields": {
            "destination_name": {
                "stringValue": "Ajman"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 300.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://a.travel-assets.com/findyours-php/viewfinder/images/res70/60000/60566-Ajman.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_87",
        "fields": {
            "destination_name": {
                "stringValue": "Puebla"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 160.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://media.architecturaldigest.com/photos/59138733b3064307ffee5b00/4:3/w_4164,h_3123,c_limit/Puebla_Volcan%20Popocatepetl%20y%20iglesia%20de%20los%20remedios.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_88",
        "fields": {
            "destination_name": {
                "stringValue": "Zhuhai"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 260.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.cathaypacific.com/content/dam/focal-point/cx/inspiration/2023/12/How-to-get-to-Zhuhai-from-Hong-Kong-All-the-ways-Gettyimages-HERO.renditionimage.900.600.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_89",
        "fields": {
            "destination_name": {
                "stringValue": "Frankfurt"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 210.5
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://www.visitfrankfurt.travel/fileadmin/_processed_/d/e/csm_Frankfurt_Mainfest_H85_2349__c__visitfrankfurt__Holger_Ullmann_7aa92b4249.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_90",
        "fields": {
            "destination_name": {
                "stringValue": "Liverpool"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 235.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F66ae197f-485a-4f4e-b8b2-81553ce4138a.jpg?crop=1564%2C880%2C318%2C0&resize=1200"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_91",
        "fields": {
            "destination_name": {
                "stringValue": "Rosario"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Argentina"
            },
            "price_standard": {
                "doubleValue": 185.3
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://facts.net/wp-content/uploads/2023/07/47-facts-about-rosario-1688441774.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_92",
        "fields": {
            "destination_name": {
                "stringValue": "Izmir"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 220.8
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.novo-monde.com/app/uploads/2019/05/izmir-vue.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_93",
        "fields": {
            "destination_name": {
                "stringValue": "Dallas"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.tshaonline.org/images/handbook/entries/DD/dallas_skyline.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_94",
        "fields": {
            "destination_name": {
                "stringValue": "Pune"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 180.25
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.onde-e-quando.net/site/images/illustration/pune.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_95",
        "fields": {
            "destination_name": {
                "stringValue": "Chengdu"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 275.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.businessdestinations.com/wp-content/uploads/2013/08/chengdu-home.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_96",
        "fields": {
            "destination_name": {
                "stringValue": "Surabaya"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Indonesia"
            },
            "price_standard": {
                "doubleValue": 290.45
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://mediaim.expedia.com/destination/1/49c8026d6585316e9aee11ec9bc27dcc.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_97",
        "fields": {
            "destination_name": {
                "stringValue": "Ulsan"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "South Korea"
            },
            "price_standard": {
                "doubleValue": 250.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production10/d897/6d22ee20-0f8c-45c7-8c65-9ae0043263d7.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_98",
        "fields": {
            "destination_name": {
                "stringValue": "Kano"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Nigeria"
            },
            "price_standard": {
                "doubleValue": 170.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://facts.net/wp-content/uploads/2023/06/44-facts-about-kano-1688122304.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_99",
        "fields": {
            "destination_name": {
                "stringValue": "Dar es Salaam"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Tanzania"
            },
            "price_standard": {
                "doubleValue": 150.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/df/1d/95a5570c-city-34738-16567f2e874.jpg?width=1200&height=630&xhint=2092&yhint=1508&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_100",
        "fields": {
            "destination_name": {
                "stringValue": "Seville"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Spain"
            },
            "price_standard": {
                "doubleValue": 250.5
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://v9q2n5w7.rocketcdn.me/wp-content/uploads/2022/04/seville.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_101",
        "fields": {
            "destination_name": {
                "stringValue": "Salzburg"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Austria"
            },
            "price_standard": {
                "doubleValue": 210.0
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://i.natgeofe.com/n/c5d14113-c9c7-44b4-8bc8-1714d9d4d53a/Altstadt_Salzach_2x1.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_102",
        "fields": {
            "destination_name": {
                "stringValue": "Orlando"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 320.75
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/07/201607-050-0B5774CB/Orlando-Florida-aerial-cityscape-towards-Eola-Lake.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_103",
        "fields": {
            "destination_name": {
                "stringValue": "Sapporo"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 270.4
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://pyxis.nymag.com/v1/imgs/630/d33/58661be4b36d208da2fbafad36e72a466d-sapporo-snow-festival-lede.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_104",
        "fields": {
            "destination_name": {
                "stringValue": "Adelaide"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 255.2
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://www.ncl.com/sites/default/files/1000x667-adelaide-australia-city-torrens-river_0.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_105",
        "fields": {
            "destination_name": {
                "stringValue": "Bloemfontein"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 200.3
            },
            "climate": {
                "stringValue": "Semi-arid"
            },
            "picture_url": {
                "stringValue": "https://cdn.britannica.com/76/92876-050-9DD26B09/building-Court-of-Appeal-Bloemfontein-SAf.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_106",
        "fields": {
            "destination_name": {
                "stringValue": "Fortaleza"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Brazil"
            },
            "price_standard": {
                "doubleValue": 190.9
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://images.musement.com/cover/0069/97/fortaleza-brazil-jpg_header-6896973.jpeg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_107",
        "fields": {
            "destination_name": {
                "stringValue": "Sharm El Sheikh"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 150.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQky13i4AIaOpLY0nE1gVWdJJtPltRWO0uey6g_XnJnA&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_108",
        "fields": {
            "destination_name": {
                "stringValue": "Krabi"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 160.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production67/d105/7bfa90e5-e5a8-4311-b3a9-b6517fbe2230.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_109",
        "fields": {
            "destination_name": {
                "stringValue": "Samara"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 240.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Samara_P5171857_2200.jpg/640px-Samara_P5171857_2200.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_110",
        "fields": {
            "destination_name": {
                "stringValue": "Quebec City"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 230.45
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://www.travelandleisure.com/thmb/oCfgxHH3Ht4fN-A0aMuBgd1laB8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/quebec-city-canada-QUEBECTG0821-0df446265762446585a30cf661cb48dc.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_111",
        "fields": {
            "destination_name": {
                "stringValue": "Al Ain"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 310.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/5/55/Jabal_hafeet_shahin.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_112",
        "fields": {
            "destination_name": {
                "stringValue": "Tijuana"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 170.4
            },
            "climate": {
                "stringValue": "Semi-arid"
            },
            "picture_url": {
                "stringValue": "https://lp-cms-production.imgix.net/features/2018/04/GettyImages-880471902-a951cfbd2f2d-e1525469440871.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_113",
        "fields": {
            "destination_name": {
                "stringValue": "Wuhan"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 260.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY-egGeKlKQ6S2LafnfGmUHbtpPr-8Y2D2qQ31xwxXQQ&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_114",
        "fields": {
            "destination_name": {
                "stringValue": "Stuttgart"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 200.5
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://media-cdn.tripadvisor.com/media/photo-c/1280x250/14/10/2f/db/stuttgart.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_115",
        "fields": {
            "destination_name": {
                "stringValue": "Bristol"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 235.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/1/19/Clifton_Suspension_Bridge_and_the_Observatory_in_Bristol%2C_England.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_116",
        "fields": {
            "destination_name": {
                "stringValue": "Mendoza"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Argentina"
            },
            "price_standard": {
                "doubleValue": 185.3
            },
            "climate": {
                "stringValue": "Semi-arid"
            },
            "picture_url": {
                "stringValue": "https://cdn.getyourguide.com/img/tour/3e189006b80cb681.jpeg/145.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_117",
        "fields": {
            "destination_name": {
                "stringValue": "Bursa"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 220.8
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Teleferik%2C_Uluda%C4%9F.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_118",
        "fields": {
            "destination_name": {
                "stringValue": "Houston"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwwMKRijnj_kGVAz71OxJVgjpDxtt-XOwOQlfDdyzt8w&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_119",
        "fields": {
            "destination_name": {
                "stringValue": "Kolkata"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 190.25
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://static.toiimg.com/photo/65474872.cms"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_120",
        "fields": {
            "destination_name": {
                "stringValue": "Chongqing"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 275.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://news.cgtn.com/news/2023-07-25/Live-Stunning-night-view-of-Hongya-Cave-SW-China-s-Chongqing-1lISDdMMo00/img/dc7b81fe487f45ecb4251884a493636e/dc7b81fe487f45ecb4251884a493636e.png"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_121",
        "fields": {
            "destination_name": {
                "stringValue": "Medan"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Indonesia"
            },
            "price_standard": {
                "doubleValue": 300.45
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/47/90/52fe9be0-city-25417-169119e4e6d.jpg?width=1366&height=768&xhint=3230&yhint=2044&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_122",
        "fields": {
            "destination_name": {
                "stringValue": "Daegu"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "South Korea"
            },
            "price_standard": {
                "doubleValue": 260.2
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://facts.net/wp-content/uploads/2023/07/50-facts-about-daegu-taegu-1688181460.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_123",
        "fields": {
            "destination_name": {
                "stringValue": "Abuja"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Nigeria"
            },
            "price_standard": {
                "doubleValue": 180.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://lp-cms-production.imgix.net/2023-10/shutterstock1439453054-RFC.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_124",
        "fields": {
            "destination_name": {
                "stringValue": "Zanzibar City"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Tanzania"
            },
            "price_standard": {
                "doubleValue": 160.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.shadowsofafrica.com/media/catalog/product/cache/3/image/900x/040ec09b1e35df139433887a97daa66f/2/_/2_stone_town__1__1.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_125",
        "fields": {
            "destination_name": {
                "stringValue": "Malaga"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Spain"
            },
            "price_standard": {
                "doubleValue": 230.5
            },
            "climate": {
                "stringValue": "Mediterranean"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/ee/b1/8afb451d-city-5309-15cef627e8c.jpg?width=1366&height=768&xhint=1741&yhint=1162&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_126",
        "fields": {
            "destination_name": {
                "stringValue": "Graz"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Austria"
            },
            "price_standard": {
                "doubleValue": 210.0
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://upload.wikimedia.org/wikipedia/commons/f/f0/19-06-14-Graz-Murinsel-Schlo%C3%9Fberg-RalfR.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_127",
        "fields": {
            "destination_name": {
                "stringValue": "Tampa"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 320.75
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/e9/c8/2e79538a-city-177-1705860a8be.jpg?width=1366&height=768&xhint=2766&yhint=2057&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_128",
        "fields": {
            "destination_name": {
                "stringValue": "Kobe"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Japan"
            },
            "price_standard": {
                "doubleValue": 270.4
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production187/d748/8d94be6b-995c-4945-878e-37b63844bddd.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_129",
        "fields": {
            "destination_name": {
                "stringValue": "Gold Coast"
            },
            "continent": {
                "stringValue": "Australia"
            },
            "country": {
                "stringValue": "Australia"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production180/d706/a2943da1-7864-4a02-a332-d1ec41851192.jpg?impolicy=fcrop&w=800&h=533&q=medium"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_130",
        "fields": {
            "destination_name": {
                "stringValue": "Polokwane"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "South Africa"
            },
            "price_standard": {
                "doubleValue": 200.3
            },
            "climate": {
                "stringValue": "Semi-arid"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROdtnMrfvMdippJc1ztUtNHYXAhn-yQiUos9YuyKHucQ&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_131",
        "fields": {
            "destination_name": {
                "stringValue": "Recife"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Brazil"
            },
            "price_standard": {
                "doubleValue": 210.9
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://i0.wp.com/visitbrasil.com/wp-content/uploads/2021/06/GettyImages-1219393229.jpg?fit=2000%2C1331&ssl=1"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_132",
        "fields": {
            "destination_name": {
                "stringValue": "Hurghada"
            },
            "continent": {
                "stringValue": "Africa"
            },
            "country": {
                "stringValue": "Egypt"
            },
            "price_standard": {
                "doubleValue": 150.6
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://cdn.getyourguide.com/img/tour/2ad417aec5bf639d.jpeg/145.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_133",
        "fields": {
            "destination_name": {
                "stringValue": "Koh Samui"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "Thailand"
            },
            "price_standard": {
                "doubleValue": 160.5
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production110/d301/574f7f50-1ab1-4c96-ac72-a97d62cd8920.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_134",
        "fields": {
            "destination_name": {
                "stringValue": "Yekaterinburg"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Russia"
            },
            "price_standard": {
                "doubleValue": 240.7
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://www.flydubai.com/en/media/How-to-make-the-most-of-48-hours-in-Yekaterinburg-710x473_tcm8-132662_w710.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_135",
        "fields": {
            "destination_name": {
                "stringValue": "Ottawa"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Canada"
            },
            "price_standard": {
                "doubleValue": 230.45
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuYrvtBQk22-wpCz2RyH57A2JSv8nrl9b8Mp8iUH87oA&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_136",
        "fields": {
            "destination_name": {
                "stringValue": "Fujairah"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "UAE"
            },
            "price_standard": {
                "doubleValue": 310.55
            },
            "climate": {
                "stringValue": "Arid"
            },
            "picture_url": {
                "stringValue": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/318866856.jpg?k=f5d26d1bbf21682b6d03010000e62cdf2d6fed013a707a4bf67c38e77a2ccd4e&o=&hp=1"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_137",
        "fields": {
            "destination_name": {
                "stringValue": "Merida"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "Mexico"
            },
            "price_standard": {
                "doubleValue": 170.4
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://www.travelandleisure.com/thmb/gh2Ez7PTmdp_51ksLornZ94QkC4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-merida-main-square-MERIDAMX0224-1344dc864f5e4128b42677496112de3f.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_138",
        "fields": {
            "destination_name": {
                "stringValue": "Hangzhou"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 260.3
            },
            "climate": {
                "stringValue": "Subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.qantas.com/travelinsider/en/explore/asia/china/things-to-do-hangzhou/_jcr_content/verticalGalleryMain/gallery/galleryItems/80_1695093693355.img.1440.high.jpg/1695096015649.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_139",
        "fields": {
            "destination_name": {
                "stringValue": "Dusseldorf"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Germany"
            },
            "price_standard": {
                "doubleValue": 210.5
            },
            "climate": {
                "stringValue": "Oceanic"
            },
            "picture_url": {
                "stringValue": "https://a.cdn-hotels.com/gdcs/production198/d1016/f0763e5d-377f-4bb2-bbd1-a8484d778d71.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_140",
        "fields": {
            "destination_name": {
                "stringValue": "Newcastle"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "UK"
            },
            "price_standard": {
                "doubleValue": 235.65
            },
            "climate": {
                "stringValue": "Temperate"
            },
            "picture_url": {
                "stringValue": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMZ76CbIcGrQ6LNpOM5epKL0rZeUV6g7zrumgGyCes1w&s"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_141",
        "fields": {
            "destination_name": {
                "stringValue": "Mar del Plata"
            },
            "continent": {
                "stringValue": "South America"
            },
            "country": {
                "stringValue": "Argentina"
            },
            "price_standard": {
                "doubleValue": 185.3
            },
            "climate": {
                "stringValue": "Humid subtropical"
            },
            "picture_url": {
                "stringValue": "https://www.buenosairesfreewalks.com/wp-content/uploads/2023/12/que-hacer-en-mar-del-plata.jpg"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_142",
        "fields": {
            "destination_name": {
                "stringValue": "Konya"
            },
            "continent": {
                "stringValue": "Europe"
            },
            "country": {
                "stringValue": "Turkey"
            },
            "price_standard": {
                "doubleValue": 220.8
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://media.cntravellerme.com/photos/65649333efebe0be4808523d/16:9/w_2560%2Cc_limit/1067948442"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_143",
        "fields": {
            "destination_name": {
                "stringValue": "Phoenix"
            },
            "continent": {
                "stringValue": "North America"
            },
            "country": {
                "stringValue": "USA"
            },
            "price_standard": {
                "doubleValue": 275.2
            },
            "climate": {
                "stringValue": "Desert"
            },
            "picture_url": {
                "stringValue": "https://content.r9cdn.net/rimg/dimg/37/de/b41eec17-city-18004-551947c9.jpg?width=1200&height=630&xhint=1896&yhint=934&crop=true"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_144",
        "fields": {
            "destination_name": {
                "stringValue": "Ahmedabad"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "India"
            },
            "price_standard": {
                "doubleValue": 180.25
            },
            "climate": {
                "stringValue": "Tropical"
            },
            "picture_url": {
                "stringValue": "https://i0.wp.com/www.india-briefing.com/news/wp-content/uploads/2021/09/MicrosoftTeams-image-15.jpg?fit=900%2C506&ssl=1"
            } 
        }
    },
    {
        "name": "projects/wanderwisedb/databases/(default)/documents/destination/doc_145",
        "fields": {
            "destination_name": {
                "stringValue": "Xian"
            },
            "continent": {
                "stringValue": "Asia"
            },
            "country": {
                "stringValue": "China"
            },
            "price_standard": {
                "doubleValue": 275.3
            },
            "climate": {
                "stringValue": "Continental"
            },
            "picture_url": {
                "stringValue": "https://media.istockphoto.com/id/527567513/photo/xian.jpg?s=612x612&w=0&k=20&c=VMjFPrK4bxOXuiQjxL3rhnS-2iAl8XXHn1y_XQAqwtA="
            } 
        }
    }
]

climate_types = set()
for item in data:
    climate = item["fields"]["climate"]["stringValue"]
    climate_types.add(climate)

# Print distinct climate types
print(climate_types)