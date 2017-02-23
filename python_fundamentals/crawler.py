# import the urlopen function from the urllib2 module
from urllib2 import urlopen
# import the BeautifulSoup function from the bs4 module
from bs4 import BeautifulSoup, SoupStrainer
# import pprint to print things out in a pretty way
import pprint
# choose the url to crawl
url = 'http://www.codingdojo.com'
# get the result back with the BeautifulSoup crawler
soup = BeautifulSoup(urlopen(url), "html.parser")

hrefs = []
for a in soup.find_all('a', href=True):
    if a['href'] not in hrefs:
        hrefs.append(str(a.get('href')))
# your code here to find all the links from the result
# and complete the challenges below

print hrefs
#PART 1 COMPLETE
