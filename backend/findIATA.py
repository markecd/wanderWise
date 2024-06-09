import pandas as pd
import sys
import os
import json



script_dir = os.path.dirname(os.path.realpath(__file__))

file_path = os.path.join(script_dir, 'airports.dat')
columns = ['AirportID', 'Name', 'City', 'Country', 'IATA', 'ICAO', 'Latitude', 'Longitude', 'Altitude', 'Timezone', 'DST', 'TzDatabaseTimeZone', 'Type', 'Source']
data = pd.read_csv(file_path, names=columns, index_col=False)

# Function to get IATA code for a given city name
def get_iata_code(city_name):
    result = data[data['City'].str.lower() == city_name.lower()]
    result = result.dropna(subset=['IATA'])
    if not result.empty:
        iata_codes = result['IATA'].tolist()
        return iata_codes
    else:
        return []

# Main block to handle command-line arguments
if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python findIATA.py <city_name>")
        sys.exit(1)
    
    city = sys.argv[1]
    iata_codes = get_iata_code(city)
    print(json.dumps(iata_codes))