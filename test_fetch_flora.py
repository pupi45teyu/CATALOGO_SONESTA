import urllib.request, urllib.parse, json, time, os

headers = {"User-Agent": "PunoFloraCollector/1.0 (contact: ricardotevez32@gmail.com)"}

def search_image(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&generator=search&gsrsearch={urllib.parse.quote(query + ' filetype:bitmap')}&gsrlimit=5&prop=imageinfo&iiprop=url|mime|extmetadata&iiurlwidth=1200&format=json"
    req = urllib.request.Request(url, headers=headers)
    try:
        res = urllib.request.urlopen(req, timeout=10)
        data = json.loads(res.read().decode("utf-8"))
        pages = data.get("query", {}).get("pages", {})
        for pid, pinfo in pages.items():
            imgs = pinfo.get("imageinfo", [])
            if imgs:
                img_url = imgs[0].get("thumburl") or imgs[0].get("url")
                title = pinfo.get("title", "")
                # Skip drawings/illustrations if possible
                if any(x in title.lower() for x in ["drawing", "illustration", "herbarium", "sturm", "köhler", "iconographia"]):
                    continue
                return img_url, title
    except Exception as e:
        print(f"Error {query}: {e}")
    return None, None

test_plants = ["Minthostachys mollis", "Polylepis racemosa", "Cantua buxifolia", "Schinus molle", "Aloysia citrodora"]
for tp in test_plants:
    u, t = search_image(tp)
    print(tp, "->", u, t)
    time.sleep(0.5)
