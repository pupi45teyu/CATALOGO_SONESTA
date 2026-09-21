import urllib.request, urllib.parse, json, time, os, shutil

HEADERS = {"User-Agent": "PunoFloraCollector/1.0 (contact: ricardotevez32@gmail.com)"}

PLANTS = [
    ("muna", ["Minthostachys mollis", "Muña"]),
    ("romero", ["Rosmarinus officinalis plant", "Salvia rosmarinus"]),
    ("cola-de-zorro", ["Equisetum arvense plant", "Equisetum bogotense"]),
    ("cactus", ["Trichocereus cuzcoensis", "Echinopsis cuzcoensis", "Opuntia ficus-indica"]),
    ("oregano", ["Origanum vulgare plant", "Origanum vulgare"]),
    ("margarita", ["Bellis perennis flower", "Bellis perennis"]),
    ("cedron", ["Aloysia citrodora plant", "Aloysia citrodora"]),
    ("quenua", ["Polylepis racemosa", "Polylepis rugulosa", "Polylepis incana"]),
    ("rayitos-de-sol", ["Aptenia cordifolia flower", "Aptenia cordifolia"]),
    ("geranio", ["Pelargonium zonale flower", "Pelargonium x hortorum"]),
    ("rosa", ["Rosa rubiginosa flower", "Rosa chinensis"]),
    ("valeriana", ["Valeriana officinalis flower", "Valeriana officinalis"]),
    ("boca-de-sapo", ["Antirrhinum majus flower", "Antirrhinum majus"]),
    ("madreselva", ["Lonicera japonica flower", "Lonicera japonica"]),
    ("aguaymanto", ["Physalis peruviana plant", "Physalis peruviana fruit"]),
    ("cebollon", ["Allium fistulosum plant", "Allium fistulosum"]),
    ("concona", ["Peperomia inaequalifolia", "Peperomia galioides", "Peperomia congona"]),
    ("thuja", ["Thuja occidentalis tree", "Thuja occidentalis"]),
    ("lavanda", ["Lavandula angustifolia flower", "Lavandula angustifolia"]),
    ("hierba-buena", ["Mentha spicata plant", "Mentha spicata"]),
    ("menta", ["Mentha x piperita plant", "Mentha piperita"]),
    ("cantuta", ["Cantua buxifolia flower", "Cantua buxifolia"]),
    ("dalia", ["Dahlia pinnata flower", "Dahlia pinnata"]),
    ("alamo", ["Populus nigra tree", "Populus alba"]),
    ("cipres-enano", ["Cupressus macrocarpa 'Goldcrest'", "Cupressus macrocarpa", "Cupressus sempervirens"]),
    ("san-jose", ["Mirabilis jalapa flower", "Mirabilis jalapa"]),
    ("lirio", ["Lilium candidum flower", "Lilium"]),
    ("rocoto", ["Capsicum pubescens plant", "Capsicum pubescens fruit"]),
    ("apio", ["Apium graveolens plant", "Apium graveolens"]),
    ("papa", ["Solanum tuberosum flower", "Solanum tuberosum plant"]),
    ("perejil", ["Petroselinum crispum plant", "Petroselinum crispum"]),
    ("enredadera", ["Hedera helix plant", "Hedera helix"]),
    ("sabila", ["Aloe vera plant", "Aloe vera"]),
    ("pino", ["Pinus sylvestris tree", "Pinus radiata"]),
    ("guambina", ["Inga edulis fruit", "Inga edulis"]),
    ("cactus-4-esquinas", ["Corryocactus brevistylus", "Echinopsis pachanoi", "Trichocereus pachanoi"]),
    ("colle", ["Buddleja incana", "Buddleja coriacea"]),
    ("molle", ["Schinus molle tree", "Schinus molle"])
]

os.makedirs("public/assets/flora", exist_ok=True)
os.makedirs("dist/assets/flora", exist_ok=True)

def find_image_url(query):
    url = f"https://commons.wikimedia.org/w/api.php?action=query&list=search&srsearch={urllib.parse.quote(query)}&srnamespace=6&format=json"
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        res = urllib.request.urlopen(req, timeout=10)
        data = json.loads(res.read().decode("utf-8"))
        hits = data.get("query", {}).get("search", [])
        for hit in hits:
            title = hit.get("title", "")
            lower_title = title.lower()
            # Ignore sound/video/svg
            if any(lower_title.endswith(ext) for ext in [".ogg", ".wav", ".mp3", ".webm", ".ogv", ".svg", ".pdf"]):
                continue
            # Ignore drawings/illustrations/maps if possible
            if any(w in lower_title for w in ["drawing", "illustration", "map", "herbarium", "sturm", "köhler", "diagram", "iconographia"]):
                continue
            
            # Now fetch thumburl
            info_url = f"https://commons.wikimedia.org/w/api.php?action=query&titles={urllib.parse.quote(title)}&prop=imageinfo&iiprop=url&iiurlwidth=1200&format=json"
            info_req = urllib.request.Request(info_url, headers=HEADERS)
            info_res = urllib.request.urlopen(info_req, timeout=10)
            info_data = json.loads(info_res.read().decode("utf-8"))
            pages = info_data.get("query", {}).get("pages", {})
            for pid, p in pages.items():
                imgs = p.get("imageinfo", [])
                if imgs:
                    t_url = imgs[0].get("thumburl") or imgs[0].get("url")
                    if t_url:
                        return t_url, title
    except Exception as e:
        print(f"Error query '{query}': {e}")
    return None, None

results = {}
for slug, queries in PLANTS:
    dest_pub = f"public/assets/flora/{slug}.jpg"
    dest_dist = f"dist/assets/flora/{slug}.jpg"
    
    if os.path.exists(dest_pub) and os.path.getsize(dest_pub) > 10000:
        print(f"Already exists: {slug}")
        if not os.path.exists(dest_dist):
            shutil.copyfile(dest_pub, dest_dist)
        continue
    
    found_url, title = None, None
    for q in queries:
        found_url, title = find_image_url(q)
        if found_url:
            break
        time.sleep(0.3)
    
    if found_url:
        print(f"Downloading {slug} from {title}...")
        try:
            req = urllib.request.Request(found_url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=15) as r, open(dest_pub, "wb") as f:
                f.write(r.read())
            shutil.copyfile(dest_pub, dest_dist)
            print(f"Saved {slug} ({os.path.getsize(dest_pub)} bytes)")
        except Exception as e:
            print(f"Download failed for {slug}: {e}")
    else:
        print(f"NOT FOUND: {slug}")
    time.sleep(0.4)

print("Done downloading flora images.")
