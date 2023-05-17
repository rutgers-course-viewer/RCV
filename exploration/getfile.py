import requests

def getfile(year=2023, term=1, campus='NB'):
    url = "https://sis.rutgers.edu/soc/api/courses.json"

    response = requests.get(url, params={"year": year, "term": term, "campus": campus})
    
    return response.json()

if __name__ == "__main__":
    result = getfile()
