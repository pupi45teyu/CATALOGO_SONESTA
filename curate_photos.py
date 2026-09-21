import urllib.request, urllib.parse, json, os, shutil

HEADERS = {"User-Agent": "PunoFloraCollector/1.0 (contact: ricardotevez32@gmail.com)"}

IMPROVE = [
    ("pino", ["File:Pinus sylvestris in nature reserve De Hamert (1).jpg", "File:Pinus sylvestris Norway.JPG", "File:Scotch pine Pinus sylvestris.jpg"]),
    ("concona", ["File:Peperomia galioides (33095593845).jpg", "File:Peperomia inaequalifolia - Parque Cóndor, Otavalo, Ecuador - DSC07641.jpg", "File:Peperomia inaequalifolia.jpg"]),
    ("molle", ["File:Schinus molle tree in Lima, Peru.jpg", "File:Schinus molle - fruit and leaves.jpg", "File:Schinus molle 002.jpg", "File:Schinus molle (49008985161).jpg"]),
    ("rocoto", ["File:Rocoto (Capsicum pubescens).jpg", "File:Capsicum pubescens fruit.jpg", "File:Capsicum pubescens flower and fruit.jpg", "File:Capsicum pubescens (Manzano) 2.jpg"]),
    ("cactus", ["File:Trichocereus cuzcoensis 01.jpg", "File:Echinopsis cuzcoensis (2686862590).jpg", "File:Echinopsis pachanoi (San Pedro).jpg"])
]

for slug, titles in IMPROVE:
    saved = False
    for title in titles:
        url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json"
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            res = urllib.request.urlopen(req)
            data = json.loads(res.read().decode("utf-8"))
            pages = data.get("query", {}).get("pages", {})
            for pid, p in pages.items():
                imgs = p.get("imageinfo", [])
                if imgs:
                    t_url = imgs[0].get("thumburl") or imgs[0].get("url")
                    if t_url:
                        pub = f"public/assets/flora/{slug}.jpg"
                        dist = f"dist/assets/flora/{slug}.jpg"
                        with urllib.request.urlopen(urllib.request.Request(t_url, headers=HEADERS)) as r, open(pub, "wb") as f:
                            f.write(r.read())
                        shutil.copyfile(pub, dist)
                        print(f"Updated {slug} from {title} ({os.path.getsize(pub)} bytes)")
                        saved = True
                        break
        except Exception as e:
            print(f"Err {title}: {e}")
        if saved:
            break
