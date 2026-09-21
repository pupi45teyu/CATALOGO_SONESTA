import json

FLORA_SPECIES = [
    {
        "id": "muna",
        "slug": "muna",
        "commonName": {"es": "Muña (Menta de los Andes)", "en": "Muña (Andean Mint)"},
        "indigenousName": "Muña / Huaycho (Quechua / Aymara)",
        "scientificName": "Minthostachys mollis",
        "family": "Lamiaceae",
        "order": "Lamiales",
        "category": "flora",
        "plantSection": "medicinales",
        "isEndemic": false,
        "featured": true,
        "iucnStatus": "LC",
        "images": [
            {
                "url": "/assets/flora/muna.jpg",
                "caption": {"es": "Arbusto silvestre de Muña en flor en las laderas andinas de Puno", "en": "Wild blooming Muña shrub on Andean slopes of Puno"},
                "credit": "Herbario de Flora Silvestre / Wikimedia Commons"
            }
        ],
        "quickFacts": {
            "iucnStatus": "LC",
            "iucnLabel": {"es": "Preocupación Menor (LC)", "en": "Least Concern (LC)"},
            "population": {"es": "Abundante en laderas y terrazas de Puno", "en": "Abundant across slopes and terraces of Puno"},
            "size": {"es": "Arbusto de 0.8 a 1.5 m de altura", "en": "Shrub 0.8 to 1.5 m in height"},
            "diet": {"es": "Planta autótrofa aromática de sol directo", "en": "Aromatic autotrophic full-sun plant"},
            "habitat": {"es": "Laderas pedregosas y andenes entre 2,500 y 3,950 msnm", "en": "Rocky slopes and terraces between 2,500 and 3,950 m"},
            "altitude": "2,500 - 3,950 msnm",
            "bestTime": {"es": "Floración de marzo a julio; hojas aromáticas todo el año", "en": "Blooms March to July; aromatic leaves year-round"}
        },
        "botanicalCharacteristics": {
            "es": "Arbusto leñoso aromático de hojas pequeñas y ovaladas, con bordes dentados y un fuerte aroma a menta. Produce pequeñas flores blancas agrupadas en inflorescencias densas.",
            "en": "Woody aromatic shrub with small, oval serrated leaves and an intense minty fragrance. Bears dense clusters of small white tubular flowers."
        },
        "habitatDistribution": {
            "es": "Crece de forma silvestre en laderas andinas y valles interandinos a gran altitud. Funciona como una planta protectora del suelo y medicinal tradicional, adaptada a climas fríos y secos de altura.",
            "en": "Grows wild on high-altitude Andean slopes and valleys. Acts as soil stabilizer and traditional medicinal herb, perfectly adapted to dry and freezing alpine weather."
        },
        "traditionalUses": {
            "es": "Utilizada ancestralmente en infusiones para aliviar problemas digestivos, reducir cólicos, malestares estomacales y contrarrestar los síntomas del mal de altura, además de emplearse ocasionalmente como complemento de forraje menor para animales de la zona y como repelente natural de insectos en graneros.",
            "en": "Ancestrally brewed as an infusion for digestive relief, stomach cramps, and altitude sickness (soroche). Also used as natural pest repellent in grain storage and minor livestock forage."
        },
        "overview": {
            "es": "La Muña es la infusión emblemática del Altiplano puneño. Su aroma fresco y aceites esenciales de pulegona y mentona la convierten en el remedio predilecto para aclimatar el cuerpo a la altura del Titicaca.",
            "en": "Muña is the quintessential herbal tea of the Puno Altiplano, revered for soothing altitude sickness and aiding digestion with its pure Andean mint essence."
        },
        "behaviorDiet": {
            "es": "Utilizada ancestralmente en infusiones digestivas y contra el mal de altura; repelente natural de plagas en almacenes de papas.",
            "en": "Ancestral herbal tea soothing soroche (altitude sickness) and digestion; traditional insect repellent for stored seed potatoes."
        },
        "threatsConservation": {
            "es": "Preocupación Menor (LC). Cosechada de manera sustentable por comunidades locales.",
            "en": "Least Concern (LC). Harvested sustainably by rural communities across the Altiplano."
        },
        "sonestaSpotting": {
            "location": {"es": "Jardines aromáticos de Sonesta Posadas del Inca Puno e Inkafe", "en": "Herb garden of Sonesta Puno and served fresh at Inkafe"},
            "spottingDifficulty": "easy",
            "difficultyLabel": {"es": "Disponible en jardines y restaurante", "en": "Available in gardens and restaurant"},
            "bestHour": {"es": "Mañanas soleadas (08:00 - 11:00 hrs)", "en": "Sunny mornings (08:00 - 11:00 hrs)"},
            "hotelTips": {"es": "Disfrute de una infusión caliente de muña fresca en el Inkafe contemplando la salida del sol sobre el lago.", "en": "Sip freshly steeped hot muña tea at Inkafe while watching the sunrise over Lake Titicaca."},
            "recommendedGear": {"es": "Taza de infusión caliente o cámara", "en": "Hot tea cup or camera"}
        }
    },
    {
        "id": "romero",
        "slug": "romero",
        "commonName": {"es": "Romero (La Hierba de la Memoria)", "en": "Rosemary (Herb of Memory)"},
        "indigenousName": "Romero (Adaptado en Altiplano)",
        "scientificName": "Salvia rosmarinus (sin. Rosmarinus officinalis)",
        "family": "Lamiaceae",
        "order": "Lamiales",
        "category": "flora",
        "plantSection": "medicinales",
        "isEndemic": false,
        "featured": false,
        "iucnStatus": "LC",
        "images": [
            {
                "url": "/assets/flora/romero.jpg",
                "caption": {"es": "Mata de Romero florecido en los canteros soleados de Puno", "en": "Flowering rosemary bush in sunny Puno flowerbeds"},
                "credit": "Wikimedia Commons"
            }
        ],
        "quickFacts": {
            "iucnStatus": "LC",
            "iucnLabel": {"es": "Preocupación Menor (LC)", "en": "Least Concern (LC)"},
            "population": {"es": "Ampliamente cultivado en huertos y jardines de Puno", "en": "Widely cultivated in Puno home gardens"},
            "size": {"es": "Arbusto perenne de 0.5 a 1.8 m", "en": "Perennial shrub 0.5 to 1.8 m"},
            "diet": {"es": "Planta xerófila heliófila", "en": "Drought-tolerant sun-loving plant"},
            "habitat": {"es": "Suelos pedregosos con excelente drenaje y exposición soleada", "en": "Well-drained gravelly soils in full sun"},
            "altitude": "2,000 - 3,900 msnm",
            "bestTime": {"es": "Todo el año; floración en primavera y verano", "en": "Year-round; blooms spring and summer"}
        },
        "botanicalCharacteristics": {
            "es": "Arbusto perenne muy ramificado, con hojas lineales, coriáceas, de color verde oscuro en el haz y blanquecinas en el envés. Sus flores son pequeñas, de tonos azulados o violáceos.",
            "en": "Dense woody evergreen shrub with dark green needle-like leaves and pale fuzzy undersides. Bears small pale blue to violet flowers."
        },
        "habitatDistribution": {
            "es": "Nativo de la región mediterránea, ampliamente adaptado a climas templados y secos. Prefiere suelos bien drenados y exposición soleada; actúa como planta melífera y ornamental.",
            "en": "Native to the Mediterranean, successfully naturalized in Andean sunny terraces. Thrives in dry, well-drained soils, attracting honeybees and pollinators."
        },
        "traditionalUses": {
            "es": "Tradicionalmente valorado en infusiones y aromaterapia para estimular la memoria, la concentración mental y aliviar dolores musculares o articulares, sin poseer un uso maderero relevante más allá del aprovechamiento en pequeña escala de sus restos de poda por sus aceites esenciales y como combustible aromático.",
            "en": "Revered in herbal medicine and aromatherapy to stimulate memory, sharpen focus, and ease joint aches. Pruning twigs are burned for fragrant incense."
        },
        "overview": {
            "es": "El Romero florece vigorosamente en los jardines de Puno gracias a la intensa radiación solar andina, desprendiendo un perfume resinoso inconfundible.",
            "en": "Rosemary flourishes on high-altitude Puno terraces under intense Andean sunlight, perfuming the garden walks with rich essential oils."
        },
        "behaviorDiet": {
            "es": "Infusiones para la memoria, digestión y fricciones musculares.",
            "en": "Herbal teas for mental clarity, circulation, and muscular rubdowns."
        },
        "threatsConservation": {
            "es": "Sin amenazas; ampliamente reproducido por esquejes.",
            "en": "Abundant and easily propagated via cuttings."
        },
        "sonestaSpotting": {
            "location": {"es": "Canteros de hierbas aromáticas junto a la entrada del hotel", "en": "Herb border near hotel main entrance"},
            "spottingDifficulty": "easy",
            "difficultyLabel": {"es": "Fácil en jardines", "en": "Easy in garden paths"},
            "bestHour": {"es": "Mediodía con sol directo", "en": "Midday under direct sun"},
            "hotelTips": {"es": "Frote suavemente sus hojas aciculares para liberar su vivificante fragancia resinosa.", "en": "Gently brush the needle leaves to release its invigorating resinous aroma."},
            "recommendedGear": {"es": "Sentido del olfato y cámara", "en": "Sense of smell & camera"}
        }
    },
    {
        "id": "cola-de-zorro",
        "slug": "cola-de-zorro",
        "commonName": {"es": "Cola de Zorro (Depurativa de los Riñones)", "en": "Horsetail (Kidney Purifier)"},
        "indigenousName": "Chupa Sangre / Equiseto Andino",
        "scientificName": "Equisetum arvense (y E. bogotense)",
        "family": "Equisetaceae",
        "order": "Equisetales",
        "category": "flora",
        "plantSection": "medicinales",
        "isEndemic": false,
        "featured": false,
        "iucnStatus": "LC",
        "images": [
            {
                "url": "/assets/flora/cola-de-zorro.jpg",
                "caption": {"es": "Tallos articulados de Cola de Zorro en las orillas húmedas del Altiplano", "en": "Jointed stems of Horsetail in moist Altiplano stream banks"},
                "credit": "Wikimedia Commons"
            }
        ],
        "quickFacts": {
            "iucnStatus": "LC",
            "iucnLabel": {"es": "Preocupación Menor (LC)", "en": "Least Concern (LC)"},
            "population": {"es": "Común en acequias y bordes de humedad en Puno", "en": "Common along irrigation ditches and shores"},
            "size": {"es": "Tallos de 20 a 60 cm de altura", "en": "Stems 20 to 60 cm high"},
            "diet": {"es": "Planta vascular sin flores; bioacumuladora de silicio", "en": "Non-flowering spore-bearing plant; silica accumulator"},
            "habitat": {"es": "Riberas de acequias, humedales y orillas del lago", "en": "Ditch banks, wetland margins, and lakeshores"},
            "altitude": "2,500 - 4,100 msnm",
            "bestTime": {"es": "Época de lluvias (diciembre a mayo)", "en": "Rainy season (December to May)"}
        },
        "botanicalCharacteristics": {
            "es": "Planta herbácea perenne sin flores ni semillas verdaderas, caracterizada por sus tallos articulados y estériles con aspecto de pequeños abetos o escobillas.",
            "en": "Primitive non-flowering perennial fern-ally featuring hollow, jointed, ribbed green stems with whorls of fine needle-like branches resembling a brush."
        },
        "habitatDistribution": {
            "es": "Crece habitualmente en suelos húmedos, orillas de acequias, ríos y terrenos arenosos. Posee una gran capacidad de acumulación de minerales y cumple un rol ecológico como pionera en suelos húmedos.",
            "en": "Grows in waterlogged soils, canal banks, and damp sandy shores. Acts as a soil-stabilizing pioneer plant with unmatched mineral absorption."
        },
        "traditionalUses": {
            "es": "Empleada en la medicina tradicional en decocciones por sus propiedades diuréticas para depurar los riñones, reducir inflamaciones y fortalecer el sistema urinario, debiendo evitarse o consumirse con precaución como forraje debido a compuestos específicos que pueden resultar tóxicos para ciertos ganados en grandes cantidades.",
            "en": "Brewed in traditional herbal medicine for potent diuretic, anti-inflammatory, and kidney-cleansing properties. High silica content provides tissue strengthening."
        },
        "overview": {
            "es": "Planta fósil viviente que sobrevive desde el Carbonífero. En las orillas de Puno es recolectada como el principal depurativo natural del sistema renal.",
            "en": "A prehistoric living fossil, Equisetum thrives near Lake Titicaca springs and is prized as the Andes' premier kidney depurative."
        },
        "behaviorDiet": {
            "es": "Decocciones diuréticas, depurativas y cicatrizantes ricas en silicio mineral.",
            "en": "Mineral-rich decoctions for renal cleansing, tissue repair, and hair/nail strength."
        },
        "threatsConservation": {
            "es": "Preocupación Menor (LC). Protegida por la abundancia hídrica de la cuenca.",
            "en": "Least Concern (LC). Abundant in wetland fringes."
        },
        "sonestaSpotting": {
            "location": {"es": "Zanja húmeda y borde oriental del sendero hacia el muelle", "en": "Moist drainage channel along the pier path"},
            "spottingDifficulty": "easy",
            "difficultyLabel": {"es": "Fácil en zonas húmedas", "en": "Easy in moist soil"},
            "bestHour": {"es": "Mañanas despejadas", "en": "Clear mornings"},
            "hotelTips": {"es": "Observe los tallos estriados que se desensamblan por nudos como un juego de piezas botánicas.", "en": "Notice how the hollow ribbed stem segments pull apart neatly at joints like natural Lego."},
            "recommendedGear": {"es": "Lupa botánica o cámara macro", "en": "Macro camera lens"}
        }
    },
    {
        "id": "cactus-altiplano",
        "slug": "cactus-altiplano",
        "commonName": {"es": "Cactus (Resistente del Desierto y la Puna)", "en": "High Andean Cactus"},
        "indigenousName": "Waraqo / San Pedro de Altura",
        "scientificName": "Familia Cactaceae (Echinopsis / Trichocereus spp.)",
        "family": "Cactaceae",
        "order": "Caryophyllales",
        "category": "flora",
        "plantSection": "cactaceas",
        "isEndemic": false,
        "featured": false,
        "iucnStatus": "LC",
        "images": [
            {
                "url": "/assets/flora/cactus.jpg",
                "caption": {"es": "Cactus columnar florecido en los roquedales andinos que rodean Puno", "en": "Flowering columnar cactus on rocky outcrops overlooking Puno"},
                "credit": "Wikimedia Commons"
            }
        ],
        "quickFacts": {
            "iucnStatus": "LC",
            "iucnLabel": {"es": "Preocupación Menor (LC)", "en": "Least Concern (LC)"},
            "population": {"es": "Común en laderas rocosas y cerros áridos de Puno", "en": "Common on rocky slopes of Puno hills"},
            "size": {"es": "Tallos carnosos de 1 a 4 m", "en": "Fleshy stems 1 to 4 m"},
            "diet": {"es": "Suculenta fotosintética CAM adaptada a la aridez", "en": "CAM succulent photosynthesizer"},
            "habitat": {"es": "Roquedales expuestos, taludes secos y cerros del Altiplano", "en": "Exposed rock faces and dry slopes of the Altiplano"},
            "altitude": "3,200 - 4,200 msnm",
            "bestTime": {"es": "Floración nocturna y diurna entre noviembre y marzo", "en": "Blooms between November and March"}
        },
        "botanicalCharacteristics": {
            "es": "Plantas suculentas adaptadas para almacenar agua en sus tejidos carnosos. Poseen tallos modificados y hojas transformadas en espinas para reducir la pérdida de humedad.",
            "en": "Fleshy succulent stems storing precious water in specialized parenchyma. Leaves modified into defensive spines with nocturnal flower blooms."
        },
        "habitatDistribution": {
            "es": "Habita principalmente en zonas áridas, semiáridas y desérticas. Son fundamentales en sus ecosistemas por proveer refugio y alimento a la fauna local en condiciones extremas de sequía.",
            "en": "Thrives on sun-baked cliffs and gravelly hillsides around Puno, providing critical nectar for hummingbirds and shelter for lizards."
        },
        "traditionalUses": {
            "es": "Diversas especies producen frutos comestibles y se utilizan en la medicina tradicional para aliviar inflamaciones o como barreras vivas, mientras que en artesanía sus tejidos leñosos internos se emplean para confeccionar utensilios, sirviendo además algunas especies adaptadas como forraje de emergencia para el ganado caprino tras retirarles las espinas.",
            "en": "Produces sweet edible fruits (sankayo); used as protective boundary hedges, herbal anti-inflammatories, and carved porous wood crafts."
        },
        "overview": {
            "es": "Monumento de resiliencia vegetal, capaz de soportar heladas nocturnas de -10°C y radiación ultravioleta extrema en los peñones del Titicaca.",
            "en": "A triumph of evolutionary adaptation surviving sub-zero night frosts and intense Altiplano UV radiation on rocky cliffs."
        },
        "behaviorDiet": {
            "es": "Cercas vivas, frutos comestibles dulces y desinflamante en cataplasmas.",
            "en": "Living defensive fences, succulent fruits, and topical soothing poultices."
        },
        "threatsConservation": {
            "es": "Estable en laderas rocosas inaccesibles para el pastoreo.",
            "en": "Stable on steep rocky hillsides."
        },
        "sonestaSpotting": {
            "location": {"es": "Rocalla xerófila en la ladera alta que rodea el hotel", "en": "Upper xeriscape rockery overlooking the hotel grounds"},
            "spottingDifficulty": "easy",
            "difficultyLabel": {"es": "Visible en rocas", "en": "Visible in rock garden"},
            "bestHour": {"es": "Cualquier hora con luz diurna", "en": "Any daylight hour"},
            "hotelTips": {"es": "Observe las espinas doradas que reflejan la luz del amanecer sobre la bahía.", "en": "Watch the golden morning sun reflect off the array of spines against the bay."},
            "recommendedGear": {"es": "Cámara fotográfica estándar", "en": "Standard camera"}
        }
    },
    {
        "id": "oregano",
        "slug": "oregano",
        "commonName": {"es": "Orégano (Protectora de la Salud)", "en": "Oregano (Health Protector)"},
        "indigenousName": "Orégano de Altura",
        "scientificName": "Origanum vulgare",
        "family": "Lamiaceae",
        "order": "Lamiales",
        "category": "flora",
        "plantSection": "medicinales",
        "isEndemic": false,
        "featured": false,
        "iucnStatus": "LC",
        "images": [
            {
                "url": "/assets/flora/oregano.jpg",
                "caption": {"es": "Plantación de orégano florecido en terrazas soleadas del Altiplano", "en": "Flowering oregano on sun-drenched Altiplano terraces"},
                "credit": "Wikimedia Commons"
            }
        ],
        "quickFacts": {
            "iucnStatus": "LC",
            "iucnLabel": {"es": "Preocupación Menor (LC)", "en": "Least Concern (LC)"},
            "population": {"es": "Muy cultivado en los valles del sur de Puno", "en": "Heavily cultivated in southern Puno valleys"},
            "size": {"es": "Hierba vivaz de 30 a 70 cm", "en": "Perennial herb 30 to 70 cm"},
            "diet": {"es": "Planta herbácea aromática melífera", "en": "Aromatic nectar-rich herb"},
            "habitat": {"es": "Suelos calcáreos, bien drenados y con alta insolación", "en": "Calcareous, well-drained soils under high solar exposure"},
            "altitude": "2,000 - 3,850 msnm",
            "bestTime": {"es": "Cosecha aromática en verano y otoño", "en": "Harvested in summer and autumn"}
        },
        "botanicalCharacteristics": {
            "es": "Planta herbácea vivaz y aromática, de tallos erectos y rojizos, hojas opuestas ovaladas y pequeñas flores rosadas o púrpuras agrupadas en espigas.",
            "en": "Perennial herb with erect reddish stems, opposite oval leaves, and dense terminal clusters of delicate pinkish-purple blossoms."
        },
        "habitatDistribution": {
            "es": "Originaria de la región mediterránea y adaptada a zonas templadas y montañosas secas. Prefiere suelos calcáreos y soleados, aportando gran valor aromático y ecológico para polinizadores.",
            "en": "Adapted to dry mountainous Andean microclimates. Thrives in sunny soils, generating exceptionally concentrated essential oils due to altitude."
        },
        "traditionalUses": {
            "es": "Altamente valorado como condimento culinario y en infusiones medicinales para fortalecer el sistema respiratorio, aliviar la tos y mejorar la digestión, siendo utilizado también en menor medida como planta melífera para la apicultura sin contar con aplicaciones forestales o de forraje masivo.",
            "en": "Indispensable culinary spice and herbal remedy for coughs, respiratory relief, and sluggish digestion. Also valued by local beekeepers for fragrant honey."
        },
        "overview": {
            "es": "El orégano producido a orillas del Titicaca destaca mundialmente por su alta concentración de carvacrol y timol, resultado de la intensa radiación solar de altura.",
            "en": "High-altitude Lake Titicaca oregano is internationally renowned for unmatched aroma potency driven by intense Altiplano ultraviolet light."
        },
        "behaviorDiet": {
            "es": "Infusiones expectorantes y digestivas; condimento gastronómico.",
            "en": "Expectorant teas, digestive aids, and Andean culinary seasoning."
        },
        "threatsConservation": {
            "es": "Preocupación Menor (LC). Cultivo agrícola ampliamente extendido.",
            "en": "Least Concern (LC). Secure in cultivation."
        },
        "sonestaSpotting": {
            "location": {"es": "Jardín de condimentos del Inkafe en Sonesta Puno", "en": "Inkafe chef herb garden at Sonesta Puno"},
            "spottingDifficulty": "easy",
            "difficultyLabel": {"es": "Fácil en huerto", "en": "Easy in herb patch"},
            "bestHour": {"es": "Mañanas soleadas", "en": "Sunny mornings"},
            "hotelTips": {"es": "Pruébelo aromatizando platos de trucha o sopas andinas en el Inkafe.", "en": "Taste its fragrant touch seasoning fresh lake trout at Inkafe restaurant."},
            "recommendedGear": {"es": "Paladar gourmet", "en": "Gourmet appetite"}
        }
    }
]

print("Script template ready")
