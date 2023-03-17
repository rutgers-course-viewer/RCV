import requests

def getfile(year=2023, term=1, campus='NB'):
    url = "https://sis.rutgers.edu/soc/api/courses.json?"
    url += 'year=' + str(year) + '&'
    url += 'term=' + str(term) + '&'
    url += 'campus=' + campus

    result = requests.get(url).json()
    return result

if __name__ == "__main__":
    result = getfile()
