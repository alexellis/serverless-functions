import funker
import json

import requests
from HTMLParser import HTMLParser

class MyHTMLParser(HTMLParser):
    def __init__(self):
        self.total = 0
        self.in_anchor = False

        HTMLParser.__init__(self)
    def handle_starttag(self, tag, attrs):
        if(tag == "li"):
            for x in range (0, len(attrs)):
                if(attrs[x][0] == "class" and attrs[x][1] == "twitter_link"):
                    self.total = self.total + 1
    def handle_endtag(self, tag):
        pass
    def handle_data(self, data):
        pass


def handler(session, request, version):
    print(session, request)
    parser1 = MyHTMLParser()
    url = "https://www.docker.com/community/docker-captains"
    r = requests.get(url, verify=True)
    parser1.feed(r.text)
    sample = {}
    sample["total_captains"] = parser1.total

    parsed = {}
    with open("sampleresponse.json") as json_sample:
        parsed = json.load(json_sample)
        parsed["response"]["outputSpeech"]["text"] = "Oh my Captain! There are " + str(parser1.total) + " sailing the high seas."
        parsed["response"]["card"]["content"] = "Oh my Captain! There are " + str(parser1.total) + " sailing the high seas."

    return parsed

if __name__ == '__main__':
    funker.handle(handler)

