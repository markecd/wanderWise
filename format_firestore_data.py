import json

data = [
    {
        "destination_name": "Paris",
        "continent": "Europe",
        "country": "France",
        "price_standard": 250.50,
        "climate": "Temperate"
    },
    {
        "destination_name": "Rome",
        "continent": "Europe",
        "country": "Italy",
        "price_standard": 220.00,
        "climate": "Temperate"
    },
    {
        "destination_name": "New York",
        "continent": "North America",
        "country": "USA",
        "price_standard": 300.75,
        "climate": "Continental"
    },
    {
        "destination_name": "Tokyo",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 280.40,
        "climate": "Temperate"
    },
    {
        "destination_name": "Sydney",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 275.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Cape Town",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 200.30,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Rio de Janeiro",
        "continent": "South America",
        "country": "Brazil",
        "price_standard": 180.90,
        "climate": "Tropical"
    },
    {
        "destination_name": "Cairo",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 150.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Bangkok",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 160.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Moscow",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 240.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Toronto",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 230.45,
        "climate": "Continental"
    },
    {
        "destination_name": "Dubai",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 310.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Mexico City",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 170.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Hong Kong",
        "continent": "Asia",
        "country": "China",
        "price_standard": 260.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Berlin",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 210.50,
        "climate": "Temperate"
    },
    {
        "destination_name": "London",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 255.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Buenos Aires",
        "continent": "South America",
        "country": "Argentina",
        "price_standard": 195.30,
        "climate": "Temperate"
    },
    {
        "destination_name": "Istanbul",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 220.80,
        "climate": "Temperate"
    },
    {
        "destination_name": "Los Angeles",
        "continent": "North America",
        "country": "USA",
        "price_standard": 285.20,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Delhi",
        "continent": "Asia",
        "country": "India",
        "price_standard": 190.25,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Shanghai",
        "continent": "Asia",
        "country": "China",
        "price_standard": 275.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Singapore",
        "continent": "Asia",
        "country": "Singapore",
        "price_standard": 300.45,
        "climate": "Tropical"
    },
    {
        "destination_name": "Seoul",
        "continent": "Asia",
        "country": "South Korea",
        "price_standard": 260.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Lagos",
        "continent": "Africa",
        "country": "Nigeria",
        "price_standard": 180.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Nairobi",
        "continent": "Africa",
        "country": "Kenya",
        "price_standard": 160.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Barcelona",
        "continent": "Europe",
        "country": "Spain",
        "price_standard": 230.50,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Munich",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 200.00,
        "climate": "Continental"
    },
    {
        "destination_name": "San Francisco",
        "continent": "North America",
        "country": "USA",
        "price_standard": 270.75,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Osaka",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 260.40,
        "climate": "Temperate"
    },
    {
        "destination_name": "Melbourne",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 255.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Johannesburg",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 190.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Lima",
        "continent": "South America",
        "country": "Peru",
        "price_standard": 170.90,
        "climate": "Desert"
    },
    {
        "destination_name": "Alexandria",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 140.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Phuket",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 150.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Saint Petersburg",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 220.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Vancouver",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 210.45,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Abu Dhabi",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 300.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Cancun",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 160.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Shenzhen",
        "continent": "Asia",
        "country": "China",
        "price_standard": 250.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Hamburg",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 200.50,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Edinburgh",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 245.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Montevideo",
        "continent": "South America",
        "country": "Uruguay",
        "price_standard": 185.30,
        "climate": "Humid subtropical"
    },
    {
        "destination_name": "Antalya",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 210.80,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "San Diego",
        "continent": "North America",
        "country": "USA",
        "price_standard": 275.20,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Mumbai",
        "continent": "Asia",
        "country": "India",
        "price_standard": 180.25,
        "climate": "Tropical"
    },
    {
        "destination_name": "Beijing",
        "continent": "Asia",
        "country": "China",
        "price_standard": 265.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Kuala Lumpur",
        "continent": "Asia",
        "country": "Malaysia",
        "price_standard": 290.45,
        "climate": "Tropical"
    },
    {
        "destination_name": "Busan",
        "continent": "Asia",
        "country": "South Korea",
        "price_standard": 250.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Accra",
        "continent": "Africa",
        "country": "Ghana",
        "price_standard": 170.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Mombasa",
        "continent": "Africa",
        "country": "Kenya",
        "price_standard": 150.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Lisbon",
        "continent": "Europe",
        "country": "Portugal",
        "price_standard": 230.50,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Amsterdam",
        "continent": "Europe",
        "country": "Netherlands",
        "price_standard": 220.00,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Chicago",
        "continent": "North America",
        "country": "USA",
        "price_standard": 290.75,
        "climate": "Continental"
    },
    {
        "destination_name": "Nagoya",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 270.40,
        "climate": "Temperate"
    },
    {
        "destination_name": "Brisbane",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 255.20,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Durban",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 200.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Bogota",
        "continent": "South America",
        "country": "Colombia",
        "price_standard": 180.90,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Luxor",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 140.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Chiang Mai",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 160.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Kazan",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 240.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Montreal",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 230.45,
        "climate": "Continental"
    },
    {
        "destination_name": "Sharjah",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 310.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Guadalajara",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 170.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Macau",
        "continent": "Asia",
        "country": "China",
        "price_standard": 260.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Cologne",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 200.50,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Glasgow",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 235.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Cordoba",
        "continent": "South America",
        "country": "Argentina",
        "price_standard": 185.30,
        "climate": "Temperate"
    },
    {
        "destination_name": "Ankara",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 220.80,
        "climate": "Continental"
    },
    {
        "destination_name": "San Jose",
        "continent": "North America",
        "country": "USA",
        "price_standard": 285.20,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Hyderabad",
        "continent": "Asia",
        "country": "India",
        "price_standard": 190.25,
        "climate": "Tropical"
    },
    {
        "destination_name": "Tianjin",
        "continent": "Asia",
        "country": "China",
        "price_standard": 275.30,
        "climate": "Continental"
    },
    {
        "destination_name": "Jakarta",
        "continent": "Asia",
        "country": "Indonesia",
        "price_standard": 300.45,
        "climate": "Tropical"
    },
    {
        "destination_name": "Incheon",
        "continent": "Asia",
        "country": "South Korea",
        "price_standard": 260.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Abidjan",
        "continent": "Africa",
        "country": "Ivory Coast",
        "price_standard": 180.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Kigali",
        "continent": "Africa",
        "country": "Rwanda",
        "price_standard": 160.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Madrid",
        "continent": "Europe",
        "country": "Spain",
        "price_standard": 250.50,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Vienna",
        "continent": "Europe",
        "country": "Austria",
        "price_standard": 210.00,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Miami",
        "continent": "North America",
        "country": "USA",
        "price_standard": 320.75,
        "climate": "Tropical"
    },
    {
        "destination_name": "Kyoto",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 270.40,
        "climate": "Temperate"
    },
    {
        "destination_name": "Perth",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 275.20,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Pretoria",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 200.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Sao Paulo",
        "continent": "South America",
        "country": "Brazil",
        "price_standard": 210.90,
        "climate": "Tropical"
    },
    {
        "destination_name": "Aswan",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 140.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Pattaya",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 150.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Novosibirsk",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 220.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Calgary",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 220.45,
        "climate": "Continental"
    },
    {
        "destination_name": "Ajman",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 300.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Puebla",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 160.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Zhuhai",
        "continent": "Asia",
        "country": "China",
        "price_standard": 260.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Frankfurt",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 210.50,
        "climate": "Continental"
    },
    {
        "destination_name": "Liverpool",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 235.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Rosario",
        "continent": "South America",
        "country": "Argentina",
        "price_standard": 185.30,
        "climate": "Temperate"
    },
    {
        "destination_name": "Izmir",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 220.80,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Dallas",
        "continent": "North America",
        "country": "USA",
        "price_standard": 275.20,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Pune",
        "continent": "Asia",
        "country": "India",
        "price_standard": 180.25,
        "climate": "Tropical"
    },
    {
        "destination_name": "Chengdu",
        "continent": "Asia",
        "country": "China",
        "price_standard": 275.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Surabaya",
        "continent": "Asia",
        "country": "Indonesia",
        "price_standard": 290.45,
        "climate": "Tropical"
    },
    {
        "destination_name": "Ulsan",
        "continent": "Asia",
        "country": "South Korea",
        "price_standard": 250.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Kano",
        "continent": "Africa",
        "country": "Nigeria",
        "price_standard": 170.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Dar es Salaam",
        "continent": "Africa",
        "country": "Tanzania",
        "price_standard": 150.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Seville",
        "continent": "Europe",
        "country": "Spain",
        "price_standard": 250.50,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Salzburg",
        "continent": "Europe",
        "country": "Austria",
        "price_standard": 210.00,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Orlando",
        "continent": "North America",
        "country": "USA",
        "price_standard": 320.75,
        "climate": "Tropical"
    },
    {
        "destination_name": "Sapporo",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 270.40,
        "climate": "Continental"
    },
    {
        "destination_name": "Adelaide",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 255.20,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Bloemfontein",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 200.30,
        "climate": "Semi-arid"
    },
    {
        "destination_name": "Fortaleza",
        "continent": "South America",
        "country": "Brazil",
        "price_standard": 190.90,
        "climate": "Tropical"
    },
    {
        "destination_name": "Sharm El Sheikh",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 150.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Krabi",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 160.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Samara",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 240.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Quebec City",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 230.45,
        "climate": "Continental"
    },
    {
        "destination_name": "Al Ain",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 310.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Tijuana",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 170.40,
        "climate": "Semi-arid"
    },
    {
        "destination_name": "Wuhan",
        "continent": "Asia",
        "country": "China",
        "price_standard": 260.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Stuttgart",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 200.50,
        "climate": "Continental"
    },
    {
        "destination_name": "Bristol",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 235.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Mendoza",
        "continent": "South America",
        "country": "Argentina",
        "price_standard": 185.30,
        "climate": "Semi-arid"
    },
    {
        "destination_name": "Bursa",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 220.80,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Houston",
        "continent": "North America",
        "country": "USA",
        "price_standard": 275.20,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Kolkata",
        "continent": "Asia",
        "country": "India",
        "price_standard": 190.25,
        "climate": "Tropical"
    },
    {
        "destination_name": "Chongqing",
        "continent": "Asia",
        "country": "China",
        "price_standard": 275.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Medan",
        "continent": "Asia",
        "country": "Indonesia",
        "price_standard": 300.45,
        "climate": "Tropical"
    },
    {
        "destination_name": "Daegu",
        "continent": "Asia",
        "country": "South Korea",
        "price_standard": 260.20,
        "climate": "Temperate"
    },
    {
        "destination_name": "Abuja",
        "continent": "Africa",
        "country": "Nigeria",
        "price_standard": 180.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Zanzibar City",
        "continent": "Africa",
        "country": "Tanzania",
        "price_standard": 160.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Malaga",
        "continent": "Europe",
        "country": "Spain",
        "price_standard": 230.50,
        "climate": "Mediterranean"
    },
    {
        "destination_name": "Graz",
        "continent": "Europe",
        "country": "Austria",
        "price_standard": 210.00,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Tampa",
        "continent": "North America",
        "country": "USA",
        "price_standard": 320.75,
        "climate": "Tropical"
    },
    {
        "destination_name": "Kobe",
        "continent": "Asia",
        "country": "Japan",
        "price_standard": 270.40,
        "climate": "Temperate"
    },
    {
        "destination_name": "Gold Coast",
        "continent": "Australia",
        "country": "Australia",
        "price_standard": 275.20,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Polokwane",
        "continent": "Africa",
        "country": "South Africa",
        "price_standard": 200.30,
        "climate": "Semi-arid"
    },
    {
        "destination_name": "Recife",
        "continent": "South America",
        "country": "Brazil",
        "price_standard": 210.90,
        "climate": "Tropical"
    },
    {
        "destination_name": "Hurghada",
        "continent": "Africa",
        "country": "Egypt",
        "price_standard": 150.60,
        "climate": "Arid"
    },
    {
        "destination_name": "Koh Samui",
        "continent": "Asia",
        "country": "Thailand",
        "price_standard": 160.50,
        "climate": "Tropical"
    },
    {
        "destination_name": "Yekaterinburg",
        "continent": "Europe",
        "country": "Russia",
        "price_standard": 240.70,
        "climate": "Continental"
    },
    {
        "destination_name": "Ottawa",
        "continent": "North America",
        "country": "Canada",
        "price_standard": 230.45,
        "climate": "Continental"
    },
    {
        "destination_name": "Fujairah",
        "continent": "Asia",
        "country": "UAE",
        "price_standard": 310.55,
        "climate": "Arid"
    },
    {
        "destination_name": "Merida",
        "continent": "North America",
        "country": "Mexico",
        "price_standard": 170.40,
        "climate": "Tropical"
    },
    {
        "destination_name": "Hangzhou",
        "continent": "Asia",
        "country": "China",
        "price_standard": 260.30,
        "climate": "Subtropical"
    },
    {
        "destination_name": "Dusseldorf",
        "continent": "Europe",
        "country": "Germany",
        "price_standard": 210.50,
        "climate": "Oceanic"
    },
    {
        "destination_name": "Newcastle",
        "continent": "Europe",
        "country": "UK",
        "price_standard": 235.65,
        "climate": "Temperate"
    },
    {
        "destination_name": "Mar del Plata",
        "continent": "South America",
        "country": "Argentina",
        "price_standard": 185.30,
        "climate": "Humid subtropical"
    },
    {
        "destination_name": "Konya",
        "continent": "Europe",
        "country": "Turkey",
        "price_standard": 220.80,
        "climate": "Continental"
    },
    {
        "destination_name": "Phoenix",
        "continent": "North America",
        "country": "USA",
        "price_standard": 275.20,
        "climate": "Desert"
    },
    {
        "destination_name": "Ahmedabad",
        "continent": "Asia",
        "country": "India",
        "price_standard": 180.25,
        "climate": "Tropical"
    },
    {
        "destination_name": "Xian",
        "continent": "Asia",
        "country": "China",
        "price_standard": 275.30,
        "climate": "Continental"
    }
]

project_id = "wanderwisedb"
collection_name = "destination"

firestore_data = []
for i, item in enumerate(data):
    doc_id = f"doc_{i}"
    firestore_doc = {
        "name": f"projects/{project_id}/databases/(default)/documents/{collection_name}/{doc_id}",
        "fields": {
            "destination_name": {"stringValue": item["destination_name"]},
            "continent": {"stringValue": item["continent"]},
            "country": {"stringValue": item["country"]},
            "price_standard": {"doubleValue": item["price_standard"]},
            "climate": {"stringValue": item["climate"]}
        }
    }
    firestore_data.append(firestore_doc)

with open("structured_destinations_firestore.json", "w") as f:
    json.dump(firestore_data, f, indent=4)