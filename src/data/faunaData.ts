import { Species } from '../types';
import { FLORA_DATA } from './floraData';

export { FLORA_DATA };

export const FAUNA_DATA: Species[] = [
  {
    "id": "gaviota-andina",
    "slug": "gaviota-andina",
    "commonName": {
      "es": "Gaviota Andina",
      "en": "Andean Gull"
    },
    "indigenousName": "Qillwa / Tiwula (Quechua / Aymara)",
    "scientificName": "Chroicocephalus serranus",
    "family": "Laridae",
    "order": "Charadriiformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/gaviota-andina.jpg",
        "caption": {
          "es": "Gaviota Andina en temporada reproductiva con capucha negra sobre el Lago Titicaca",
          "en": "Andean Gull in breeding plumage with distinctive dark hood over Lake Titicaca"
        },
        "credit": "Fotografía de Conservación / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/gaviota-andina-2.jpg",
        "caption": {
          "es": "Gaviota Andina en vuelo rasante sobre las orillas del Lago Titicaca",
          "en": "Andean Gull gliding over the shoreline waters of Lake Titicaca"
        },
        "credit": "RWD / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Población andina estable (más de 50,000 individuos)",
        "en": "Stable Andean population (over 50,000 individuals)"
      },
      "size": {
        "es": "42 a 48 cm de longitud",
        "en": "42 to 48 cm in length"
      },
      "weight": {
        "es": "450 a 520 gramos",
        "en": "450 to 520 grams"
      },
      "diet": {
        "es": "Omnívora y oportunista: insectos acuáticos y terrestres, lombrices, pequeños peces, anfibios y ocasionalmente huevos",
        "en": "Opportunistic omnivore: aquatic and terrestrial insects, worms, small fish, amphibians, and eggs"
      },
      "habitat": {
        "es": "Ríos, lagos, lagunas y pantanos del Lago Titicaca y bofedales altoandinos",
        "en": "Rivers, lakes, lagoons, and wetlands of Lake Titicaca and high-Andean marshes"
      },
      "altitude": "3,000 a 4,800 msnm",
      "lifespan": {
        "es": "10 a 15 años",
        "en": "10 to 15 years"
      },
      "bestTime": {
        "es": "07:00 a 17:30 hrs (activa todo el día en orillas y muelles)",
        "en": "07:00 to 17:30 hrs (active all day along piers and shores)"
      }
    },
    "overview": {
      "es": "Ave mediana que se caracteriza por tener la cabeza de color negro durante la época reproductiva, cuerpo de color blanco, alas de tonos plomos, punta de la cola negra y patas de un tono rojo oscuro. Fuera de la temporada de reproducción, las plumas de su cabeza cambian a un color gris claro.",
      "en": "A medium-sized gull characterized by a black hood during the breeding season, white body, slate-gray wings, black wingtips, and dark reddish legs. In the non-breeding season, its head turns pale gray."
    },
    "habitatDistribution": {
      "es": "Habita en ríos, lagos, lagunas y pantanos del Lago Titicaca. Existe un solo tipo, por lo que no hay subespecies reconocidas. Se distribuye por toda la cordillera de los Andes desde Colombia y Ecuador hasta Perú, Bolivia, Chile y Argentina.",
      "en": "Inhabits rivers, lakes, lagoons, and marshes of Lake Titicaca. It is a monotypic species with no recognized subspecies. Distributed across the Andean range from Colombia and Ecuador to Peru, Bolivia, Chile, and Argentina."
    },
    "behaviorDiet": {
      "es": "Es un ave omnívora y oportunista; su dieta incluye insectos acuáticos y terrestres, lombrices, pequeños peces, anfibios, y ocasionalmente huevos o polluelos de otras aves. Muy gregaria, suele planear cerca de barcas de pescadores y muelles lacustres.",
      "en": "It is an opportunistic omnivore; its diet includes aquatic and terrestrial insects, worms, small fish, amphibians, and occasionally eggs or chicks of other birds. Highly gregarious, often gliding near fishing boats and lakeside piers."
    },
    "threatsConservation": {
      "es": "Catalogada en Preocupación Menor (LC) por la UICN. Sus colonias de anidación en islotes flotantes de totora requieren protección frente al disturbio humano y la contaminación de bahías.",
      "en": "Classified as Least Concern (LC) by the IUCN. Nesting colonies on floating totora islets require protection from human disturbance and bay pollution."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Muelle privado y postes de amarre de Sonesta Posadas del Inca Puno",
        "en": "Sonesta Posadas del Inca Puno private wooden pier and mooring posts"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy frecuente en el muelle",
        "en": "Very frequent on pier"
      },
      "bestHour": {
        "es": "Durante todo el día (08:00 - 16:30 hrs)",
        "en": "Throughout the day (08:00 - 16:30 hrs)"
      },
      "hotelTips": {
        "es": "Suele posarse en las barandas de madera del muelle privado frente al lago, permitiendo fotografías a muy corta distancia.",
        "en": "Frequently perches on the wooden railings of the private pier overlooking the lake, offering close-up photo opportunities."
      },
      "recommendedGear": {
        "es": "Cámara con zoom estándar (24-70mm) o teléfono móvil",
        "en": "Standard zoom lens (24-70mm) or smartphone"
      }
    }
  },
  {
    "id": "zambullidor-titicaca",
    "slug": "zambullidor-titicaca",
    "commonName": {
      "es": "Zambullidor del Titicaca",
      "en": "Titicaca Flightless Grebe"
    },
    "indigenousName": "Kele (Aymara / Quechua)",
    "scientificName": "Rollandia microptera",
    "family": "Podicipedidae",
    "order": "Podicipediformes",
    "category": "birds",
    "isEndemic": true,
    "featured": true,
    "iucnStatus": "EN",
    "images": [
      {
        "url": "/assets/fauna/zambullidor-titicaca.jpg",
        "caption": {
          "es": "Zambullidor del Titicaca navegando en aguas cristalinas junto a los totorales",
          "en": "Titicaca Grebe gliding on crystal-clear waters near totora reedbeds"
        },
        "credit": "Fotografía de Conservación / Reserva Nacional del Titicaca"
      },
      {
        "url": "/assets/fauna/zambullidor-titicaca-2.jpg",
        "caption": {
          "es": "Ejemplar adulto de Zambullidor del Titicaca nadando en aguas abiertas",
          "en": "Adult Titicaca Grebe swimming in open lake waters"
        },
        "credit": "Claudio Laura Daza / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "EN",
      "iucnLabel": {
        "es": "En Peligro de Extinción (EN)",
        "en": "Endangered (EN)"
      },
      "population": {
        "es": "Menos de 1,600 individuos maduros",
        "en": "Fewer than 1,600 mature individuals"
      },
      "size": {
        "es": "38 a 45 cm de longitud",
        "en": "38 to 45 cm in length"
      },
      "weight": {
        "es": "600 a 850 gramos",
        "en": "600 to 850 grams"
      },
      "diet": {
        "es": "Peces nativos (Karachi - Orestias luteus) y pequeños anfibios",
        "en": "Native killifish (Karachi - Orestias luteus) and small amphibians"
      },
      "habitat": {
        "es": "Aguas abiertas someras y densos bancos de totora (Schoenoplectus californicus)",
        "en": "Shallow open waters and dense totora reed beds (Schoenoplectus californicus)"
      },
      "altitude": "3,812 msnm",
      "lifespan": {
        "es": "10 a 14 años en estado silvestre",
        "en": "10 to 14 years in the wild"
      },
      "bestTime": {
        "es": "06:00 a 08:30 hrs (primeras horas de calma lacustre)",
        "en": "06:00 to 08:30 hrs (early hours of still water)"
      }
    },
    "overview": {
      "es": "El Zambullidor del Titicaca (conocido localmente como Kele) es la joya ornitológica por excelencia del lago navegable más alto del planeta. Es una especie estrictamente endémica de la cuenca del Titicaca. Ha perdido por completo la capacidad de volar en el aire, convirtiéndose en un buceador supremo con patas palmeadas desplazadas hacia atrás, capaz de sumergirse a más de 25 metros de profundidad persiguiendo peces.",
      "en": "The Titicaca Flightless Grebe (locally known as Kele) is the ultimate ornithological emblem of the world's highest navigable lake. Strictly endemic to the Titicaca basin, its wings have atrophied to the point of complete flightlessness, transforming it into an extraordinary diver with feet set far back on its body."
    },
    "habitatDistribution": {
      "es": "Restringido a las bahías y humedales del Lago Titicaca en Perú y Bolivia, con densidades notables en la Bahía de Puno y el archipiélago de totoras. Prefiere profundidades de entre 2 y 10 metros.",
      "en": "Confined to the bays and wetlands of Lake Titicaca in Peru and Bolivia, with prime densities in Puno Bay and protected totora reed channels."
    },
    "behaviorDiet": {
      "es": "Caza casi exclusivamente peces del género Orestias (karachis nativos) mediante veloces persecuciones subacuáticas. Durante el cortejo, las parejas realizan danzas sincronizadas sobre la superficie del agua antes de construir grandes nidos flotantes anclados a tallos vivos de totora.",
      "en": "Feeds almost exclusively on native Orestias killifish through swift underwater pursuits. Courtship involves synchronized dances on the water surface before constructing buoyant floating nests anchored to fresh totora stems."
    },
    "threatsConservation": {
      "es": "Catalogado En Peligro (EN) por la UICN debido al enmalle accidental en redes agalleras de pesca artesanal y a la alteración de totorales. Se protege en las aguas protegidas frente al Sonesta.",
      "en": "Listed as Endangered (EN) by the IUCN due to gillnet entanglement and reedbed alteration. Monitored and sheltered around the private bay of Sonesta."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Muelle privado de Sonesta Posadas del Inca Puno y canal este de totoras",
        "en": "Sonesta Posadas del Inca Puno private jetty and eastern totora channel"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Frecuente con binoculares",
        "en": "Frequent with binoculars"
      },
      "bestHour": {
        "es": "Al salir el sol (06:00 - 07:30 AM), antes de la brisa matutina",
        "en": "At sunrise (06:00 - 07:30 AM), before morning breezes rise"
      },
      "hotelTips": {
        "es": "Camine suavemente hasta el final del muelle antes de desayunar. Busque siluetas que se sumergen silenciosamente por más de 40 segundos.",
        "en": "Walk to the end of the wooden pier before breakfast. Look for sleek silhouettes that submerge silently for over 40 seconds."
      },
      "recommendedGear": {
        "es": "Binoculares 8x42 o teleobjetivo 300-400mm",
        "en": "8x42 binoculars or 300-400mm telephoto lens"
      }
    }
  },
  {
    "id": "karachi-amarillo",
    "slug": "karachi-amarillo",
    "commonName": {
      "es": "Karachi Amarillo",
      "en": "Yellow Titicaca Killifish"
    },
    "indigenousName": "Qarachi Q’illu (Aymara / Quechua)",
    "scientificName": "Orestias luteus",
    "family": "Cyprinodontidae",
    "order": "Cyprinodontiformes",
    "category": "amphibians_fish",
    "isEndemic": true,
    "featured": true,
    "iucnStatus": "VU",
    "images": [
      {
        "url": "/assets/fauna/karachi-amarillo.jpg",
        "caption": {
          "es": "Karachi Amarillo nativo en las aguas litorales del Lago Titicaca",
          "en": "Native Yellow Titicaca Killifish in littoral waters of Lake Titicaca"
        },
        "credit": "Fotografía de Ictiología / Archivo Comunitario Uros Titicaca"
      },
      {
        "url": "/assets/fauna/karachi-amarillo-2.jpg",
        "caption": {
          "es": "Peces Karachi nativos en las Islas Flotantes de los Uros, Bahía de Puno",
          "en": "Native Karachi killifish on the Floating Uros Islands, Puno Bay"
        },
        "credit": "Fotografía Etnobiológica / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "VU",
      "iucnLabel": {
        "es": "Vulnerable (VU)",
        "en": "Vulnerable (VU)"
      },
      "population": {
        "es": "En declive por sobrepesca y competencia con trucha invasora",
        "en": "Declining due to overfishing and introduced trout competition"
      },
      "size": {
        "es": "12 a 17 cm de longitud",
        "en": "12 to 17 cm in length"
      },
      "weight": {
        "es": "40 a 90 gramos",
        "en": "40 to 90 grams"
      },
      "diet": {
        "es": "Moluscos bentónicos, pequeños caracoles acuáticos y anfípodos",
        "en": "Benthic mollusks, small aquatic snails, and amphipods"
      },
      "habitat": {
        "es": "Fondos lodosos, totorales y praderas de llachu de 1 a 10 m de profundidad",
        "en": "Muddy bottoms, totora reedbeds, and submerged llachu weed beds"
      },
      "altitude": "3,812 msnm",
      "lifespan": {
        "es": "4 a 6 años",
        "en": "4 to 6 years"
      },
      "bestTime": {
        "es": "11:00 a 14:00 hrs (cuando el sol ilumina verticalmente el fondo del lago)",
        "en": "11:00 to 14:00 hrs (when midday sun penetrates shallow waters)"
      }
    },
    "overview": {
      "es": "Pez nativo emblemático del Lago Titicaca, de cuerpo robusto, aplanado lateralmente y característico color amarillo dorado brillante. Es una especie clave en el ecosistema acuático andino y elemento central de la cultura culinaria ancestral de los pueblos aimara y quechua (base del tradicional caldo Wallake).",
      "en": "An iconic native killifish of Lake Titicaca, featuring a stout, laterally compressed body and luminous golden-yellow coloration. It is a keystone species of the Andean lacustrine ecosystem and central to indigenous Aymara and Quechua traditions."
    },
    "habitatDistribution": {
      "es": "Exclusivo de la cuenca del Lago Titicaca (Perú y Bolivia). Habita principalmente en la zona litoral, escondiéndose entre los tallos sumergidos de totora y praderas de llachu donde encuentra refugio y alimento.",
      "en": "Strictly endemic to the Lake Titicaca basin (Peru and Bolivia). Inhabits littoral zones, finding shelter among submerged totora reeds and llachu macrophyte beds."
    },
    "behaviorDiet": {
      "es": "Posee una boca protráctil adaptada para remover el sedimento y alimentarse de anfípodos (Hyalella), caracoles acuáticos y larvas de quironómidos. Desova en las raíces y macrófitas sumergidas durante los meses cálidos.",
      "en": "Possesses a protractile mouth adapted to sift sediment for amphipods (Hyalella), aquatic snails, and midge larvae. Spawns onto submerged macrophyte roots during warmer months."
    },
    "threatsConservation": {
      "es": "Clasificado como Vulnerable (VU). Amenazado por la introducción de truchas arcoíris y pejerreyes que compiten por alimento y depredan sobre sus alevines, además de la sobrepesca artesanal.",
      "en": "Classified as Vulnerable (VU). Pressured by invasive rainbow trout and silverside predation, as well as unsustainable artisanal harvesting."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Aguas calmas a los costados del muelle privado de Sonesta Posadas del Inca",
        "en": "Calm shallow waters along the private pier of Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Visible en días soleados",
        "en": "Visible on sunny calm days"
      },
      "bestHour": {
        "es": "11:30 a 13:30 hrs en días despejados con agua quieta",
        "en": "11:30 to 13:30 hrs on clear calm days"
      },
      "hotelTips": {
        "es": "Observe verticalmente el agua clara entre los pilares de madera del muelle: frecuentemente verá cardúmenes pequeños de karachis buscando alimento en las raíces sumergidas.",
        "en": "Look straight down into clear water beside the pier wooden pilings: you can often spot small schools grazing along submerged algae."
      },
      "recommendedGear": {
        "es": "Lentes de sol polarizados para eliminar los reflejos de la superficie",
        "en": "Polarized sunglasses to cut water surface reflection"
      }
    }
  },
  {
    "id": "carpintero-andino",
    "slug": "carpintero-andino",
    "commonName": {
      "es": "Carpintero Andino",
      "en": "Andean Flicker"
    },
    "indigenousName": "Yaka-yaka / Hak’akllo (Quechua / Aymara)",
    "scientificName": "Colaptes rupicola",
    "family": "Picidae",
    "order": "Piciformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/carpintero-andino.jpg",
        "caption": {
          "es": "Carpintero Andino buscando insectos en el suelo de la orilla del Titicaca",
          "en": "Andean Flicker foraging on the ground along the shores of Lake Titicaca"
        },
        "credit": "Fotografía de Aves Andinas / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/carpintero-andino-2.jpg",
        "caption": {
          "es": "Carpintero Andino posado sobre rocas del Altiplano cerca de la ribera",
          "en": "Andean Flicker perched on Altiplano boulders near the lake shore"
        },
        "credit": "Fotografía de Campo / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común y extendido en toda la puna andina",
        "en": "Common and widespread throughout the Andean puna"
      },
      "size": {
        "es": "32 a 35 cm de longitud",
        "en": "32 to 35 cm in length"
      },
      "weight": {
        "es": "180 a 220 gramos",
        "en": "180 to 220 grams"
      },
      "diet": {
        "es": "Hormigas, larvas de escarabajos y pequeños invertebrados subterráneos",
        "en": "Ants, beetle larvae, and subterranean invertebrates"
      },
      "habitat": {
        "es": "Pastizales de puna, laderas rocosas, muros de piedra y jardines ribereños",
        "en": "Puna grasslands, rocky slopes, stone pirca walls, and lakeshore gardens"
      },
      "altitude": "2,800 a 4,800 msnm",
      "lifespan": {
        "es": "8 a 12 años",
        "en": "8 to 12 years"
      },
      "bestTime": {
        "es": "07:30 a 11:00 hrs (horas de mayor actividad en el suelo)",
        "en": "07:30 to 11:00 hrs (peak ground foraging activity)"
      }
    },
    "overview": {
      "es": "Pájaro carpintero único completamente adaptado a la vida terrestre en el altiplano andino sin árboles. En lugar de perforar troncos de árboles, busca su alimento excavando en el suelo y anida en túneles que cava en barrancos de tierra o entre grietas de muros de piedra antiguos.",
      "en": "A remarkable ground-dwelling woodpecker completely adapted to treeless Andean plateaus. Rather than drilling tree trunks, it digs into the soil for ants and nests in tunnels excavated in earthen riverbanks and stone crevices."
    },
    "habitatDistribution": {
      "es": "Ampliamente distribuido en el altiplano de Perú, Bolivia, norte de Chile y noroeste de Argentina. Muy común en los alrededores del Lago Titicaca y en los jardines con pastos naturales de Sonesta.",
      "en": "Widespread throughout the Altiplano of Peru, Bolivia, northern Chile, and Argentina. Very common in meadows around Lake Titicaca and Sonesta hotel grounds."
    },
    "behaviorDiet": {
      "es": "Camina y salta por el suelo con gran soltura. Con su pico largo y ligeramente curvado remueve piedras y desentierra hormigueros y larvas. Emite un canto resonante y característico (\"yak-yak-yak\") que se escucha a gran distancia.",
      "en": "Walks and hops effortlessly across open ground. Uses its sturdy, slightly decurved bill to probe for ants and subterranean larvae. Emits a resonant, laughing call (\"yak-yak-yak\") carrying across distances."
    },
    "threatsConservation": {
      "es": "Catalogado en Preocupación Menor (LC). Especie resiliente que convive armoniosamente con el entorno agropecuario tradicional del altiplano.",
      "en": "Classified as Least Concern (LC). A resilient species coexisting comfortably with traditional Andean pastoral landscapes."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Jardines altos y muros de pirca de piedra alrededor de Sonesta Posadas del Inca",
        "en": "Upper landscaped gardens and stone pirca walls around Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy fácil en los jardines",
        "en": "Very easy in hotel gardens"
      },
      "bestHour": {
        "es": "08:00 a 10:30 hrs",
        "en": "08:00 to 10:30 hrs"
      },
      "hotelTips": {
        "es": "Observe las áreas de césped y muros de piedra detrás del restaurante Inkafe; con frecuencia se ven parejas caminando erguidas buscando hormigas.",
        "en": "Scan the lawn areas and dry stone walls behind Inkafe Restaurant; pairs are frequently seen strutting upright in search of insects."
      },
      "recommendedGear": {
        "es": "Cámara con zoom medio o binoculares",
        "en": "Mid-range zoom lens or binoculars"
      }
    }
  },
  {
    "id": "palomita-dorada",
    "slug": "palomita-dorada",
    "commonName": {
      "es": "Palomita Dorada",
      "en": "Golden-spotted Ground Dove"
    },
    "indigenousName": "Kullku / Tórtola Aymara",
    "scientificName": "Metriopelia aymara",
    "family": "Columbidae",
    "order": "Columbiformes",
    "category": "birds",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/palomita-dorada.jpg",
        "caption": {
          "es": "Palomita Dorada mostrando las manchas cobrizas brillantes en sus alas",
          "en": "Golden-spotted Ground Dove displaying bright copper-golden wing markings"
        },
        "credit": "Fotografía de Aves / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/palomita-dorada-2.jpg",
        "caption": {
          "es": "Palomita Dorada alimentándose de semillas en pastizales de altura",
          "en": "Golden-spotted Ground Dove feeding on native seeds in high-altitude grassland"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común en zonas pedregosas y altiplano seco",
        "en": "Common in stony terrains and high dry plateaus"
      },
      "size": {
        "es": "17 a 19 cm de longitud",
        "en": "17 to 19 cm in length"
      },
      "weight": {
        "es": "65 a 85 gramos",
        "en": "65 to 85 grams"
      },
      "diet": {
        "es": "Semillas de gramíneas andinas y pequeños brotes de hierbas",
        "en": "High-Andean grass seeds and tender herbaceous shoots"
      },
      "habitat": {
        "es": "Suelos pedregosos, pastizales secos, cultivos de quinua y orillas del lago",
        "en": "Stony soils, dry grasslands, quinoa fields, and lakeshore terraces"
      },
      "altitude": "3,000 a 4,500 msnm",
      "lifespan": {
        "es": "5 a 8 años",
        "en": "5 to 8 years"
      },
      "bestTime": {
        "es": "08:30 a 16:00 hrs",
        "en": "08:30 to 16:00 hrs"
      }
    },
    "overview": {
      "es": "Pequeña y delicada palomita terrestre de plumaje color canela anteado, caracterizada por brillantes manchas cobrizas y doradas en las alas. Al levantar el vuelo, sus alas producen un zumbido o silbido musical muy característico que delata su presencia entre las piedras.",
      "en": "A small, charming ground dove of warm cinnamon-fawn plumage, adorned with brilliant golden-copper spots on its wing coverts. When flushed, its wings produce a distinctive musical whirring whistle."
    },
    "habitatDistribution": {
      "es": "Habita en laderas pedregosas áridas, pastizales abiertos y lomas que rodean el Lago Titicaca en Perú, Bolivia, Chile y Argentina.",
      "en": "Inhabits arid rocky slopes, open grasslands, and hillsides surrounding Lake Titicaca across Peru, Bolivia, Chile, and Argentina."
    },
    "behaviorDiet": {
      "es": "Se alimenta caminando discretamente por el suelo en busca de semillas caídas. Suele tolerar la presencia humana y se agacha entre las rocas aprovechando su extraordinario camuflaje.",
      "en": "Forages quietly on foot, gleaning fallen seeds from bare ground. Relies on its subtle camouflage, crouching close to stony ground before flushing with a whirr."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). No enfrenta amenazas graves debido a su amplia distribución y adaptabilidad a zonas rurales.",
      "en": "Least Concern (LC). Robust and adaptable throughout agricultural and rocky highlands."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Caminos de piedra y jardines secos en las terrazas de Sonesta",
        "en": "Stone pathways and terrace gardens of Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Fácil en senderos y piedras",
        "en": "Easy on pathways & stones"
      },
      "bestHour": {
        "es": "Media mañana (09:00 - 11:30 hrs)",
        "en": "Mid-morning (09:00 - 11:30 hrs)"
      },
      "hotelTips": {
        "es": "Mire con atención los senderos adoquinados que bajan hacia el muelle; a menudo se observan en pequeños grupos buscando semillas.",
        "en": "Watch the stone walkways descending toward the private pier; often found foraging quietly in small groups."
      },
      "recommendedGear": {
        "es": "Cámara compacta o binoculares ligeros",
        "en": "Compact camera or lightweight binoculars"
      }
    }
  },
  {
    "id": "golondrina-andina",
    "slug": "golondrina-andina",
    "commonName": {
      "es": "Golondrina Andina",
      "en": "Andean Swallow"
    },
    "indigenousName": "Sullkay / Golondrina de Puna",
    "scientificName": "Orochelidon andecola",
    "family": "Hirundinidae",
    "order": "Passeriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/golondrina-andina.jpg",
        "caption": {
          "es": "Golondrina Andina en vuelo rasante sobre las orillas del Lago Titicaca",
          "en": "Andean Swallow skimming low over the shores of Lake Titicaca"
        },
        "credit": "Fotografía Ornitológica / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/golondrina-andina-2.jpg",
        "caption": {
          "es": "Golondrina Andina descansando en su percha antes de reanudar el vuelo rasante",
          "en": "Andean Swallow resting on its perch before resuming low skimming flight"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común en lagunas y ríos del altiplano",
        "en": "Common around high-altitude Andean waterbodies"
      },
      "size": {
        "es": "13 a 14 cm de longitud",
        "en": "13 to 14 cm in length"
      },
      "weight": {
        "es": "16 a 20 gramos",
        "en": "16 to 20 grams"
      },
      "diet": {
        "es": "Insectos voladores (mosquitos, quironómidos y efímeras acuáticas)",
        "en": "Flying insects (midges, mosquitoes, and aquatic mayflies)"
      },
      "habitat": {
        "es": "Orillas lacustres, totorales, acantilados y techos de construcciones rústicas",
        "en": "Lakeshores, totora reedbeds, cliffs, and eaves of rustic Andean buildings"
      },
      "altitude": "3,200 a 4,600 msnm",
      "lifespan": {
        "es": "4 a 7 años",
        "en": "4 to 7 years"
      },
      "bestTime": {
        "es": "09:00 a 16:00 hrs en días soleados",
        "en": "09:00 to 16:00 hrs on sunny days"
      }
    },
    "overview": {
      "es": "Golondrina pequeña y acrobática de dorso pardo oscuro con suave lustre metálico y vientre grisáceo blanquecino. Realiza vuelos continuos a gran velocidad sobre las aguas del lago y los totorales cazando insectos en el aire.",
      "en": "A swift, acrobatic swallow featuring dark brown upperparts with a faint metallic sheen and dusky-white underparts. Performs endless agile swoops low over lake waters and totora reedbeds pursuing flying midges."
    },
    "habitatDistribution": {
      "es": "Especie típica de las zonas altoandinas de Perú, Bolivia, norte de Chile y noroeste de Argentina. Muy abundante en la Bahía de Puno y alrededor del muelle del hotel.",
      "en": "Native to high Andes of Peru, Bolivia, northern Chile, and Argentina. Very abundant in Puno Bay and hovering over Sonesta pier."
    },
    "behaviorDiet": {
      "es": "Caza insectos en pleno vuelo mientras planea rozando el agua con precisión asombrosa. Anida en huecos de barrancos de tierra, cornisas de techos y cavidades rocosas.",
      "en": "Captures insects in mid-air while skimming millimeters above the water surface. Nests in earthen cliff burrows, building eaves, and rock fissures."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Sus poblaciones se benefician de la abundancia de insectos en los humedales del lago.",
      "en": "Least Concern (LC). Healthy population benefiting from abundant insect life in Titicaca wetlands."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Sobrevolando el muelle privado de Sonesta y la orilla de totoras",
        "en": "Skimming over Sonesta private pier and along totora reeds"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Constante sobre el agua",
        "en": "Constant over water"
      },
      "bestHour": {
        "es": "10:00 a 15:00 hrs cuando hay más insectos en vuelo",
        "en": "10:00 to 15:00 hrs during peak insect flight"
      },
      "hotelTips": {
        "es": "Siéntese al final del muelle y observe el agua: verá decenas de estas golondrinas pasando a toda velocidad a centímetros de la superficie.",
        "en": "Sit at the end of the wooden pier and look low across the water: dozens will whiz past inches above the lake surface."
      },
      "recommendedGear": {
        "es": "Cámara con velocidad de obturación alta (1/2000s) para congelar el vuelo",
        "en": "Fast shutter camera (1/2000s) to freeze flight action"
      }
    }
  },
  {
    "id": "garza-bruja",
    "slug": "garza-bruja",
    "commonName": {
      "es": "Garza Bruja",
      "en": "Black-crowned Night Heron"
    },
    "indigenousName": "Huaco común / Waq’o (Quechua / Aymara)",
    "scientificName": "Nycticorax nycticorax",
    "family": "Ardeidae",
    "order": "Pelecaniformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/garza-bruja.jpg",
        "caption": {
          "es": "Garza Bruja con plumaje nupcial y ojos rojos al acecho en el Lago Titicaca",
          "en": "Black-crowned Night Heron with crimson eyes stalking prey at Lake Titicaca"
        },
        "credit": "Fotografía de Fauna / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/garza-bruja-2.jpg",
        "caption": {
          "es": "Garza Bruja en primer plano mostrando su distintivo ojo rojo rubí y plumas nupciales",
          "en": "Close-up of Black-crowned Night Heron showing vivid ruby eye and breeding plumes"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Ampliamente distribuida a nivel global y andino",
        "en": "Widespread globally and throughout Andean wetlands"
      },
      "size": {
        "es": "58 a 65 cm de longitud",
        "en": "58 to 65 cm in length"
      },
      "weight": {
        "es": "700 a 900 gramos",
        "en": "700 to 900 grams"
      },
      "diet": {
        "es": "Peces nativos (karachis), anfibios (ranas), renacuajos y crustáceos",
        "en": "Native fish (karachis), amphibians (frogs), tadpoles, and crustaceans"
      },
      "habitat": {
        "es": "Totorales densos, bordes de lagunas, islotes flotantes y muelles lacustres",
        "en": "Dense totora reedbeds, lagoon edges, floating islets, and lake piers"
      },
      "altitude": "0 a 4,200 msnm (subespecie andina adaptada a la altura)",
      "lifespan": {
        "es": "12 a 18 años",
        "en": "12 to 18 years"
      },
      "bestTime": {
        "es": "Al amanecer (06:00 - 07:30) y al atardecer (17:30 - 19:00)",
        "en": "Dawn (06:00 - 07:30) and dusk (17:30 - 19:00)"
      }
    },
    "overview": {
      "es": "Garza compacta y enigmática de hábitos predominantemente crepusculares y nocturnos. Posee una corona y espalda de color negro azabache brillante, alas grises, vientre blanco inmaculado y llamativos ojos de un rojo rubí profundo. En época reproductiva exhibe largas plumas blancas filamentosas que caen desde la nuca.",
      "en": "A stocky, enigmatic heron with largely crepuscular and nocturnal habits. Features a glossy black crown and back, pale gray wings, snow-white underparts, and striking ruby-red eyes. Breeding adults sport long white plumes streaming from the nape."
    },
    "habitatDistribution": {
      "es": "Habita en todos los humedales del Lago Titicaca, pasando las horas soleadas oculta en el interior de los densos totorales y saliendo a los bordes de aguas abiertas al caer la tarde.",
      "en": "Inhabits wetlands throughout Lake Titicaca, spending bright sunny hours concealed in dense totora reeds before emerging onto shoreline edges at twilight."
    },
    "behaviorDiet": {
      "es": "Cazador paciente de emboscada. Permanece inmóvil sobre pilotes de madera o ramas de totora antes de lanzar un ataque fulminante con su pico robusto y puntiagudo contra peces y ranas.",
      "en": "A patient ambush predator. Stands statue-still on wooden pilings or bent totora reeds before striking lightning-fast with its powerful bill."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Sus colonias de descanso en totorales requieren conservación ante la quema y extracción de cañas.",
      "en": "Least Concern (LC). Protected by reed preservation efforts along the Sonesta shoreline."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Pilotes de madera bajo el muelle privado de Sonesta y borde del totoral este",
        "en": "Wooden pilings beneath Sonesta private pier and eastern totora margins"
      },
      "spottingDifficulty": "moderate",
      "difficultyLabel": {
        "es": "Frecuente al atardecer",
        "en": "Frequent at dusk/dawn"
      },
      "bestHour": {
        "es": "17:30 a 18:45 hrs (momento mágico del ocaso)",
        "en": "17:30 to 18:45 hrs (golden twilight hour)"
      },
      "hotelTips": {
        "es": "Mire debajo de las tablas del muelle o entre los tallos caídos de totora al atardecer: suelen posarse totalmente quietas esperando peces.",
        "en": "Check the shaded pilings under the wooden pier at dusk: they perch motionless waiting for killifish to swim past."
      },
      "recommendedGear": {
        "es": "Cámara con buen rendimiento en poca luz (ISO alto) o binoculares 8x42",
        "en": "Low-light capable camera or 8x42 binoculars"
      }
    }
  },
  {
    "id": "garza-blanca",
    "slug": "garza-blanca",
    "commonName": {
      "es": "Garza Blanca Grande",
      "en": "Great Egret"
    },
    "indigenousName": "Hanaq Garza / Garza Blanca",
    "scientificName": "Ardea alba",
    "family": "Ardeidae",
    "order": "Pelecaniformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/garza-blanca.jpg",
        "caption": {
          "es": "Garza Blanca Grande en las orillas de aguas someras del Lago Titicaca",
          "en": "Great Egret wading in the shallow lake waters of Lake Titicaca"
        },
        "credit": "Fotografía de Naturaleza / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/garza-blanca-2.png",
        "caption": {
          "es": "Gran Garza Blanca en plumaje nupcial con delicadas plumas filamentosas dorsales",
          "en": "Great Egret in full breeding plumage displaying delicate dorsal aigrette feathers"
        },
        "credit": "Archivo de Aves Silvestres / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Cosmopolita y común en humedales andinos",
        "en": "Cosmopolitan and common in Andean wetlands"
      },
      "size": {
        "es": "85 a 100 cm de longitud (envergadura de hasta 170 cm)",
        "en": "85 to 100 cm in length (wingspan up to 170 cm)"
      },
      "weight": {
        "es": "900 a 1,200 gramos",
        "en": "900 to 1,200 grams"
      },
      "diet": {
        "es": "Peces lacustres (karachis y pejerreyes), ranas y macroinvertebrados",
        "en": "Lake killifish, frogs, aquatic tadpoles, and macroinvertebrates"
      },
      "habitat": {
        "es": "Aguas someras, lagunas litorales, totorales y estuarios del Titicaca",
        "en": "Shallow lake margins, coastal lagoons, totora beds, and estuaries"
      },
      "altitude": "0 a 4,100 msnm",
      "lifespan": {
        "es": "15 a 22 años",
        "en": "15 to 22 years"
      },
      "bestTime": {
        "es": "07:00 a 11:00 hrs y 15:00 a 17:30 hrs",
        "en": "07:00 to 11:00 hrs and 15:00 to 17:30 hrs"
      }
    },
    "overview": {
      "es": "Majestuosa garza de gran tamaño con plumaje enteramente blanco inmaculado, largo cuello esbelto en forma de S, pico largo de color amarillo brillante y patas negras zancudas. Su andar pausado y elegante por las aguas someras es un espectáculo clásico del paisaje del Titicaca.",
      "en": "A stately, large heron boasting immaculate snow-white plumage, an elegant S-curved neck, dagger-like yellow bill, and long black legs. Its deliberate, graceful wading through shallow waters is an iconic sight on Lake Titicaca."
    },
    "habitatDistribution": {
      "es": "Frecuente en toda la cuenca del Lago Titicaca, tanto en las bahías de Puno y Chucuito como en los archipiélagos flotantes.",
      "en": "Widespread throughout Lake Titicaca basin, prominent across Puno Bay, Chucuito peninsula, and floating reed communities."
    },
    "behaviorDiet": {
      "es": "Vadea lentamente con pasos calculados o permanece inmóvil hasta que un pez o rana entra en su campo de acción, capturándolo con una estocada fulgurante.",
      "en": "Wades slowly with high, measured steps or freezes motionless until prey ventures within reach, struck with breathtaking speed."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Protegida en las reservas naturales del Titicaca.",
      "en": "Least Concern (LC). Thriving under wetland habitat conservation programs."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Orillas someras frente a los jardines de Sonesta Posadas del Inca",
        "en": "Shallow shoreline directly fronting Sonesta Posadas del Inca gardens"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy visible por su color blanco",
        "en": "Very visible due to bright white plumage"
      },
      "bestHour": {
        "es": "Primeras horas de la mañana (07:30 - 09:30 hrs)",
        "en": "Early morning (07:30 - 09:30 hrs)"
      },
      "hotelTips": {
        "es": "Fácil de distinguir a simple vista desde la terraza del restaurante Inkafe gracias a su plumaje blanco contrastante con el azul del lago.",
        "en": "Easily spotted with the naked eye from Inkafe Restaurant terrace, contrasting sharply against deep blue water."
      },
      "recommendedGear": {
        "es": "Teleobjetivo 200-300mm o prismáticos",
        "en": "200-300mm telephoto lens or binoculars"
      }
    }
  },
  {
    "id": "pato-colorado",
    "slug": "pato-colorado",
    "commonName": {
      "es": "Pato Colorado",
      "en": "Cinnamon Teal"
    },
    "indigenousName": "Pato Canela / Puka Pato",
    "scientificName": "Spatula cyanoptera",
    "family": "Anatidae",
    "order": "Anseriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/pato-colorado.jpg",
        "caption": {
          "es": "Macho de Pato Colorado con plumaje canela rojizo en el Lago Titicaca",
          "en": "Male Cinnamon Teal with rich rufous-cinnamon plumage at Lake Titicaca"
        },
        "credit": "Fotografía de Aves Acuáticas / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/pato-colorado-2.jpg",
        "caption": {
          "es": "Pato Colorado nadando en aguas tranquilas de la bahía del lago",
          "en": "Cinnamon Teal swimming along calm waters of Lake Titicaca bay"
        },
        "credit": "Archivo de Anátidas / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Población andina saludable",
        "en": "Healthy Andean breeding population"
      },
      "size": {
        "es": "38 a 43 cm de longitud",
        "en": "38 to 43 cm in length"
      },
      "weight": {
        "es": "350 a 450 gramos",
        "en": "350 to 450 grams"
      },
      "diet": {
        "es": "Semillas acuáticas, brotes de plantas sumergidas e invertebrados",
        "en": "Aquatic seeds, submerged plant shoots, and small invertebrates"
      },
      "habitat": {
        "es": "Lagunas someras, canales entre totorales y bahías tranquilas del lago",
        "en": "Shallow lagoons, totora channels, and tranquil protected lake bays"
      },
      "altitude": "0 a 4,300 msnm",
      "lifespan": {
        "es": "8 a 12 años",
        "en": "8 to 12 years"
      },
      "bestTime": {
        "es": "06:30 a 09:30 hrs y 16:00 a 17:30 hrs",
        "en": "06:30 to 09:30 hrs and 16:00 to 17:30 hrs"
      }
    },
    "overview": {
      "es": "Pato de tamaño mediano inconfundible por el plumaje del macho: un vibrante color castaño rojizo canela encendido en cabeza, cuello y flancos, ojos rojos brillantes y pico espatulado negro. La hembra posee un plumaje pardo jaspeado críptico.",
      "en": "A medium-sized dabbling duck renowned for the male's vibrant, glowing cinnamon-rufous head, neck, and flanks, contrasted with ruby-red eyes and a long black spatulate bill. Females display cryptic mottled brown plumage."
    },
    "habitatDistribution": {
      "es": "Presente en humedales andinos de Perú, Bolivia, Chile y Argentina, con poblaciones residentes muy activas en la Bahía de Puno y el archipiélago de totoras.",
      "en": "Resident in Andean wetlands across Peru, Bolivia, Chile, and Argentina, with active breeding pairs in Puno Bay and surrounding totora reed beds."
    },
    "behaviorDiet": {
      "es": "Filtra el agua superficial y el fango con su pico espatulado, alimentándose de semillas de totora, algas y pequeños moluscos. Suele nadar en parejas o pequeños grupos.",
      "en": "Dabbles and filters surface water with its spatulate bill, feeding on seeds, aquatic vegetation, and tiny snails. Usually seen in pairs or tight family groups."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Sus hábitats de totoral están protegidos dentro de la Reserva Nacional del Titicaca.",
      "en": "Least Concern (LC). Reed habitats safeguarded inside the Titicaca National Reserve."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Canales de totoras a los costados del muelle de Sonesta Posadas del Inca",
        "en": "Totora reed channels beside Sonesta Posadas del Inca private pier"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Frecuente en canales calmos",
        "en": "Frequent in calm channels"
      },
      "bestHour": {
        "es": "Primeras horas de la mañana (07:00 - 09:00 hrs)",
        "en": "Early morning (07:00 - 09:00 hrs)"
      },
      "hotelTips": {
        "es": "Busque el destello rojizo brillante de los machos flotando cerca de las orillas cubiertas de totora.",
        "en": "Look for the bright fiery cinnamon flash of the males swimming close to sheltered reed margins."
      },
      "recommendedGear": {
        "es": "Binoculares 8x42 o cámara réflex con teleobjetivo",
        "en": "8x42 binoculars or DSLR with telephoto lens"
      }
    }
  },
  {
    "id": "fringilo-peruano",
    "slug": "fringilo-peruano",
    "commonName": {
      "es": "Fringilo Peruano",
      "en": "Peruvian Sierra Finch"
    },
    "indigenousName": "Yal Peruano / Pichitanka Amarilla",
    "scientificName": "Phrygilus punensis",
    "family": "Thraupidae",
    "order": "Passeriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/fringilo-peruano.jpg",
        "caption": {
          "es": "Fringilo Peruano macho mostrando su plumaje amarillo y cabeza gris azulada",
          "en": "Male Peruvian Sierra Finch showing bright yellow breast and slate-blue head"
        },
        "credit": "Fotografía de Néstor Ccacya / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/fringilo-peruano-2.jpg",
        "caption": {
          "es": "Fringilo Peruano en ambiente rocoso altoandino forrajeando entre la vegetación",
          "en": "Peruvian Sierra Finch in rocky high-Andean habitat foraging among low shrubs"
        },
        "credit": "Expedición Ornitológica / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Abundante en el altiplano de Perú y Bolivia",
        "en": "Abundant in the high Andes of Peru and Bolivia"
      },
      "size": {
        "es": "15 a 16 cm de longitud",
        "en": "15 to 16 cm in length"
      },
      "weight": {
        "es": "30 a 38 gramos",
        "en": "30 to 38 grams"
      },
      "diet": {
        "es": "Semillas de arbustos andinos, flores de cantuta y pequeños insectos",
        "en": "Andean shrub seeds, cantua blossoms, and small insects"
      },
      "habitat": {
        "es": "Jardines nativos, matorrales de queñua, roquedales y laderas lacustres",
        "en": "Native gardens, queñua polylepis woodlands, rocky slopes, and shores"
      },
      "altitude": "2,500 a 4,500 msnm",
      "lifespan": {
        "es": "5 a 8 años",
        "en": "5 to 8 years"
      },
      "bestTime": {
        "es": "07:30 a 11:30 hrs y 14:30 a 17:00 hrs",
        "en": "07:30 to 11:30 hrs and 14:30 to 17:00 hrs"
      }
    },
    "overview": {
      "es": "Hermosa ave paseriforme de colores vivos muy representativa del altiplano. El macho luce un pecho y vientre de color amarillo dorado brillante que contrasta elegantemente con su cabeza y manto de tono gris cenizo azulado.",
      "en": "A striking high-Andean passerine featuring a glowing golden-yellow chest and belly sharply set off by a slate-gray hood and mantle. Highly sociable and vocal in lakeshore gardens."
    },
    "habitatDistribution": {
      "es": "Nativo de las altas mesetas y valles interandinos de Perú y Bolivia, especialmente común en los jardines floridos y orillas del Lago Titicaca.",
      "en": "Native to high plateaus and inter-Andean valleys of Peru and Bolivia, especially thriving in landscaped gardens bordering Lake Titicaca."
    },
    "behaviorDiet": {
      "es": "Se alimenta tanto en el suelo como en las ramas de arbustos de cantuta y colle, buscando semillas y néctar. Emite un trino alegre y melodioso en las mañanas.",
      "en": "Forages on the ground and hops among blooming cantuta shrubs for seeds and insects, singing a cheerful melodious morning song."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Muy adaptable a jardines hoteleros y áreas agrícolas.",
      "en": "Least Concern (LC). Thriving and adaptable in hotel garden settings."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Arbustos floridos y terrazas de los jardines de Sonesta Posadas del Inca",
        "en": "Flowering shrubs and terrace garden grounds of Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy fácil en los jardines",
        "en": "Very easy in gardens"
      },
      "bestHour": {
        "es": "08:00 a 10:30 hrs",
        "en": "08:00 to 10:30 hrs"
      },
      "hotelTips": {
        "es": "Observe las flores de cantuta (flor sagrada de los incas) plantadas en los jardines del hotel; con frecuencia se acercan a alimentarse.",
        "en": "Watch the sacred cantuta red flowers in the hotel garden; these finches regularly visit to feed."
      },
      "recommendedGear": {
        "es": "Cámara con zoom estándar o binoculares de bolsillo",
        "en": "Standard zoom camera or pocket binoculars"
      }
    }
  },
  {
    "id": "pato-puneno",
    "slug": "pato-puneno",
    "commonName": {
      "es": "Pato Puneño",
      "en": "Puna Teal"
    },
    "indigenousName": "Chilka (Aymara / Quechua)",
    "scientificName": "Spatula puna",
    "family": "Anatidae",
    "order": "Anseriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/pato-puneno.jpg",
        "caption": {
          "es": "Pato Puneño nadando con su característico pico celeste brillante y capucha negra",
          "en": "Puna Teal swimming with bright sky-blue bill and dark cap"
        },
        "credit": "Fotografía de Aves Andinas / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/pato-puneno-2.jpg",
        "caption": {
          "es": "Pato Puneño navegando cerca de los canales de totora frente al muelle de Sonesta",
          "en": "Puna Teal navigating near the totora reed channels in Puno Bay"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común en los lagos y lagunas de la puna andina",
        "en": "Common in lakes and lagoons across the Andean puna"
      },
      "size": {
        "es": "48 a 51 cm de longitud",
        "en": "48 to 51 cm in length"
      },
      "weight": {
        "es": "550 a 650 gramos",
        "en": "550 to 650 grams"
      },
      "diet": {
        "es": "Algas filamentosas, semillas acuáticas y pequeños moluscos",
        "en": "Filamentous algae, aquatic seeds, and tiny freshwater snails"
      },
      "habitat": {
        "es": "Aguas calmas del Lago Titicaca, canales de totorales y lagunas salinas",
        "en": "Calm waters of Lake Titicaca, totora channels, and saline lagoons"
      },
      "altitude": "3,100 a 4,600 msnm",
      "lifespan": {
        "es": "10 a 14 años",
        "en": "10 to 14 years"
      },
      "bestTime": {
        "es": "06:30 a 10:00 hrs",
        "en": "06:30 to 10:00 hrs"
      }
    },
    "overview": {
      "es": "Pato altiplánico inconfundible por su marcado contraste: luce una capucha negra azabache en la mitad superior de la cabeza, mejillas y garganta de color blanco puro, y un pico largo de un llamativo color azul celeste brillante con una línea negra en el centro.",
      "en": "An unmistakable high-altitude duck characterized by crisp contrast: a jet-black cap covering the top of the head down to the eyes, pure white cheeks and throat, and a vibrant sky-blue bill with a dark central stripe."
    },
    "habitatDistribution": {
      "es": "Exclusivo de los Andes de Perú, Bolivia, norte de Chile y noroeste de Argentina. En el Lago Titicaca es uno de los patos más comunes y elegantes.",
      "en": "Confined to the high Andes of Peru, Bolivia, northern Chile, and Argentina. On Lake Titicaca, it is among the most widespread and photogenic waterbirds."
    },
    "behaviorDiet": {
      "es": "Nada tranquilamente en aguas calmas, sumergiendo la cabeza y el cuello para pastar algas y filtrar pequeños invertebrados del fango. Suele formar parejas estables muy unidas.",
      "en": "Swims peacefully in calm bays, tipping up or submerging head and neck to graze algae and filter tiny aquatic invertebrates. Pairs form strong monogamous bonds."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Especie protegida en toda la Reserva Nacional del Titicaca.",
      "en": "Least Concern (LC). Fully protected throughout the Titicaca National Reserve."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Aguas calmas frente al muelle privado de Sonesta Posadas del Inca Puno",
        "en": "Calm waters fronting the Sonesta Posadas del Inca Puno private pier"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy común en el muelle",
        "en": "Very common off the pier"
      },
      "bestHour": {
        "es": "Mañanas calmas (07:00 - 09:30 hrs)",
        "en": "Calm mornings (07:00 - 09:30 hrs)"
      },
      "hotelTips": {
        "es": "Pasee por el muelle al amanecer: con frecuencia verá parejas de patos puna nadando a escasos metros de las maderas.",
        "en": "Walk along the pier at sunrise: pairs of puna teals are routinely seen swimming just meters away."
      },
      "recommendedGear": {
        "es": "Cualquier cámara o binoculares estándar",
        "en": "Any camera or standard binoculars"
      }
    }
  },
  {
    "id": "pato-zambullidor-grande",
    "slug": "pato-zambullidor-grande",
    "commonName": {
      "es": "Pato Zambullidor Grande",
      "en": "Andean Ruddy Duck"
    },
    "indigenousName": "Pato Rana / Suk’a (Aymara)",
    "scientificName": "Oxyura ferruginea",
    "family": "Anatidae",
    "order": "Anseriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/pato-zambullidor-grande.jpg",
        "caption": {
          "es": "Macho de Pato Zambullidor Grande con su llamativo pico azul celeste y cuerpo castaño",
          "en": "Male Andean Ruddy Duck with striking sky-blue bill and rich chestnut body"
        },
        "credit": "Fotografía de Aves / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/pato-zambullidor-grande-2.jpg",
        "caption": {
          "es": "Pato Zambullidor Andino macho con su brillante pico azul cobalto nadando en el lago",
          "en": "Male Andean Duck with brilliant cobalt-blue bill paddling in high-altitude lake"
        },
        "credit": "Archivo de Aves Acuáticas / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Población andina estable",
        "en": "Stable high-Andean population"
      },
      "size": {
        "es": "43 a 48 cm de longitud",
        "en": "43 to 48 cm in length"
      },
      "weight": {
        "es": "650 a 850 gramos",
        "en": "650 to 850 grams"
      },
      "diet": {
        "es": "Larvas bentónicas de insectos, pequeños moluscos y semillas sumergidas",
        "en": "Benthic midge larvae, tiny freshwater snails, and submerged seeds"
      },
      "habitat": {
        "es": "Aguas abiertas profundas y lagunas altoandinas ricas en vegetación sumergida",
        "en": "Deep open lake waters and high-Andean lagoons rich in submerged flora"
      },
      "altitude": "2,500 a 4,600 msnm",
      "lifespan": {
        "es": "9 a 13 años",
        "en": "9 to 13 years"
      },
      "bestTime": {
        "es": "07:00 a 11:00 hrs",
        "en": "07:00 to 11:00 hrs"
      }
    },
    "overview": {
      "es": "Pato buceador compacto y robusto. El macho en plumaje nupcial luce un cuerpo de color castaño rojizo brillante, cabeza negra y un abultado pico de un color azul celeste cielo intenso. Su cola está compuesta por plumas rígidas que a menudo mantiene erguidas verticalmente en abanico.",
      "en": "A compact, stiff-tailed diving duck. Breeding males display a rich chestnut-rufous body, black head, and a swollen, vibrant cobalt-sky bill. They frequently cock their stiff tail feathers straight up in a fan display."
    },
    "habitatDistribution": {
      "es": "Residente en lagos y lagunas de altura a lo largo de los Andes (Colombia, Ecuador, Perú, Bolivia, Chile y Argentina). Abundante en las aguas abiertas del Lago Titicaca.",
      "en": "Resident in high Andean lakes across Colombia, Ecuador, Peru, Bolivia, Chile, and Argentina. Abundant in open waters of Lake Titicaca."
    },
    "behaviorDiet": {
      "es": "Excelente buceador que se sumerge hasta el fondo del lago para extraer larvas de quironómidos y moluscos del lodo bentónico. Su cortejo incluye golpear su pico azul contra el pecho.",
      "en": "An accomplished diver plunging to the lakebed to extract midge larvae and mollusks from benthic sediment. Courtship includes bubble displays and bill drumming on the breast."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Requiere aguas limpias libres de contaminación industrial o pesquera.",
      "en": "Least Concern (LC). Thrives where water clarity and benthic invertebrate richness remain intact."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Aguas abiertas a 50-100 metros del muelle privado de Sonesta Posadas del Inca",
        "en": "Open waters 50-100 meters off Sonesta Posadas del Inca private pier"
      },
      "spottingDifficulty": "moderate",
      "difficultyLabel": {
        "es": "Visible buceando en aguas abiertas",
        "en": "Visible diving in open waters"
      },
      "bestHour": {
        "es": "08:00 a 10:30 hrs en mañanas despejadas",
        "en": "08:00 to 10:30 hrs on clear mornings"
      },
      "hotelTips": {
        "es": "Con binoculares desde la punta del muelle, busque patos compactos con la cola erguida hacia arriba y pico azul brillante.",
        "en": "Scan outward from the end of the wooden pier with binoculars for compact ducks with cocked vertical tails and glowing blue bills."
      },
      "recommendedGear": {
        "es": "Binoculares 8x42 o 10x42 o telescopio terrestre",
        "en": "8x42 or 10x42 binoculars or spotting scope"
      }
    }
  },
  {
    "id": "rana-gigante-titicaca",
    "slug": "rana-gigante-titicaca",
    "commonName": {
      "es": "Rana Gigante del Titicaca",
      "en": "Titicaca Giant Water Frog"
    },
    "indigenousName": "K’ayra (Quechua / Aymara)",
    "scientificName": "Telmatobius culeus",
    "family": "Telmatobiidae",
    "order": "Anura",
    "category": "amphibians_fish",
    "isEndemic": true,
    "featured": true,
    "iucnStatus": "CR",
    "images": [
      {
        "url": "/assets/fauna/rana-gigante-titicaca.jpg",
        "caption": {
          "es": "Rana Gigante del Titicaca sumergida entre la vegetación acuática del lago",
          "en": "Titicaca Giant Water Frog submerged among aquatic macrophytes in Lake Titicaca"
        },
        "credit": "Fotografía de Biología de Conservación / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/rana-gigante-titicaca-2.jpg",
        "caption": {
          "es": "Rana Gigante del Titicaca en vista subacuática exhibiendo sus amplios pliegues de piel",
          "en": "Underwater view of Titicaca Giant Frog exhibiting voluminous respiratory skin folds"
        },
        "credit": "Proyecto de Conservación Telmatobius / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "CR",
      "iucnLabel": {
        "es": "En Peligro Crítico de Extinción (CR)",
        "en": "Critically Endangered (CR)"
      },
      "population": {
        "es": "Declinación de más del 80% en los últimos 15 años",
        "en": "Over 80% population decline over the past 15 years"
      },
      "size": {
        "es": "Hasta 30 a 50 cm con patas extendidas",
        "en": "Up to 30 to 50 cm with legs extended"
      },
      "weight": {
        "es": "Hasta 1 kilogramo (el anfibio 100% acuático más grande del mundo)",
        "en": "Up to 1 kg (world's largest strictly aquatic frog)"
      },
      "diet": {
        "es": "Anfípodos (Hyalella), caracoles acuáticos, peces nativos (karachis) e insectos",
        "en": "Amphipods (Hyalella), aquatic snails, native killifish, and insect larvae"
      },
      "habitat": {
        "es": "Fondos rocosos y praderas de macroalgas de 2 a 100 metros de profundidad",
        "en": "Rocky bottoms and charophyte weed beds 2 to 100 meters deep"
      },
      "altitude": "3,812 msnm",
      "lifespan": {
        "es": "15 a 25 años",
        "en": "15 to 25 years"
      },
      "bestTime": {
        "es": "Excursiones especializadas de ecoturismo subacuático y acuarios de conservación",
        "en": "Specialized eco-tours and local conservation aquariums"
      }
    },
    "overview": {
      "es": "La Rana Gigante del Titicaca (Telmatobius culeus) es uno de los seres biológicos más asombrosos del planeta. Es el anfibio estrictamente acuático más grande del mundo y vive permanentemente bajo el agua a 3,812 msnm. Sus pulmones están sumamente reducidos; en su lugar, respira a través de múltiples pliegues de piel suelta y arrugada que aumentan su superficie de absorción de oxígeno.",
      "en": "The Titicaca Giant Water Frog is one of Earth's most extraordinary evolutionary wonders. The largest strictly aquatic frog in existence, it never leaves the water. Because high-altitude cold water holds limited dissolved oxygen and its lungs are vestigial, it breathes through voluminous, baggy skin folds that maximize cutaneous respiration."
    },
    "habitatDistribution": {
      "es": "Estrictamente endémica del Lago Titicaca (Perú y Bolivia). Habita desde aguas litorales someras hasta profundidades insondables de más de 100 metros.",
      "en": "Strictly endemic to Lake Titicaca (Peru and Bolivia). Inhabits depths ranging from shallow littoral reed fringes down to more than 100 meters."
    },
    "behaviorDiet": {
      "es": "Realiza periódicas flexiones rítmicas tipo \"lagartijas\" en el fondo para crear corrientes de agua sobre sus pliegues cutáneos y optimizar su respiración. Es carnívora bentónica.",
      "en": "Performs rhythmic \"push-ups\" on the lake floor to circulate fresh water over its baggy skin folds. A nocturnal and benthic carnivore."
    },
    "threatsConservation": {
      "es": "En Peligro Crítico (CR) por la UICN debido al tráfico ilegal para \"jugos medicinales\" tradicionales, contaminación de bahías urbanas y trucha invasora. Proyectos binacionales promueven su rescate.",
      "en": "Critically Endangered (CR) due to illegal harvesting for folk \"frog juice\" smoothies, municipal pollution, and invasive trout. Protected under strict binational recovery initiatives."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Bahía protegida de Sonesta Posadas del Inca y centro de interpretación lacustre",
        "en": "Sonesta Posadas del Inca protected bay and local interpretation center"
      },
      "spottingDifficulty": "rare",
      "difficultyLabel": {
        "es": "Raro en superficie (100% subacuática)",
        "en": "Rare on surface (fully aquatic)"
      },
      "bestHour": {
        "es": "Mediodía con aguas transparentes y sol vertical",
        "en": "Midday with crystal clear water and direct sun"
      },
      "hotelTips": {
        "es": "Pregunte en recepción sobre los esfuerzos de conservación locales y salidas en lanchas con fondo transparente para observarla en su hábitat natural.",
        "en": "Inquire at reception about local conservation projects and specialized clear-bottom boat outings to observe this rare giant in pristine shallows."
      },
      "recommendedGear": {
        "es": "Lentes polarizados o cámara sumergible / Go-Pro",
        "en": "Polarized glasses or waterproof action camera"
      }
    }
  },
  {
    "id": "parihuana-flamenco-andino",
    "slug": "parihuana-flamenco-andino",
    "commonName": {
      "es": "Flamenco Andino",
      "en": "Andean Flamingo"
    },
    "indigenousName": "Parihuana / Parina Grande (Quechua / Aymara)",
    "scientificName": "Phoenicoparrus andinus",
    "family": "Phoenicopteridae",
    "order": "Phoenicopteriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "VU",
    "images": [
      {
        "url": "/assets/fauna/flamenco-altoandino.jpg",
        "caption": {
          "es": "Flamencos Andinos en aguas someras con su plumaje rosado carmesí en el Lago Titicaca",
          "en": "Andean Flamingos feeding in shallow waters with crimson-pink plumage at Lake Titicaca"
        },
        "credit": "Fotografía de Fauna / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/flamenco-altoandino-2.jpg",
        "caption": {
          "es": "Flamencos Andinos filtrando microorganismos en lagunas altoandinas del Altiplano",
          "en": "Andean Flamingos filtering microorganisms in high-Andean lake waters"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "VU",
      "iucnLabel": {
        "es": "Vulnerable (VU)",
        "en": "Vulnerable (VU)"
      },
      "population": {
        "es": "Menos de 38,000 individuos en los Andes",
        "en": "Fewer than 38,000 individuals across the Andes"
      },
      "size": {
        "es": "100 a 120 cm de altura (envergadura de 140 a 160 cm)",
        "en": "100 to 120 cm in height (wingspan 140 to 160 cm)"
      },
      "weight": {
        "es": "2.0 a 2.5 kilogramos",
        "en": "2.0 to 2.5 kilograms"
      },
      "diet": {
        "es": "Diatomeas microscópicas (algas unicelulares) filtradas con pico laminar",
        "en": "Microscopic diatoms (unicellular algae) filtered with specialized lamellar bill"
      },
      "habitat": {
        "es": "Lagunas salobres someras, orillas del Lago Titicaca y bofedales de altura",
        "en": "Shallow saline lagoons, Lake Titicaca shores, and high-altitude bofedal wetlands"
      },
      "altitude": "3,000 a 4,500 msnm",
      "lifespan": {
        "es": "25 a 40 años",
        "en": "25 to 40 years"
      },
      "bestTime": {
        "es": "06:30 a 10:00 hrs y 16:00 a 18:00 hrs",
        "en": "06:30 to 10:00 hrs and 16:00 to 18:00 hrs"
      }
    },
    "overview": {
      "es": "Majestuoso flamenco andino, una de las aves más elegantes y emblemáticas de Sudamérica. De plumaje blanco rosáceo con intensos tintes carmesí en el pecho y cuello, patas amarillas inconfundibles (único flamenco con patas amarillas) y pico amarillo con negro.",
      "en": "A majestic high-Andean flamingo, among South America's most iconic birds. Adorned with delicate pale pink plumage flushed with intense crimson on the breast, distinctive yellow legs (unique among flamingos), and a yellow-and-black spatulate bill."
    },
    "habitatDistribution": {
      "es": "Habita en salares y lagos andinos de Perú, Bolivia, Chile y Argentina. En el Lago Titicaca se concentra en la Reserva Nacional y en las bahías someras cercanas a Puno.",
      "en": "Inhabits high-altitude salt flats and lagoons of Peru, Bolivia, Chile, and Argentina. On Lake Titicaca, prime concentrations occur in the National Reserve and shallow bays near Puno."
    },
    "behaviorDiet": {
      "es": "Filtra el fango somero con la cabeza invertida bajo el agua, bombeando con la lengua para que sus laminillas microscópicas atrapen diatomeas. Se desplaza en bandadas sincronizadas.",
      "en": "Feeds upside down in shallow mud, pumping water with its tongue through fine bill lamellae to capture microscopic diatoms. Moves in synchronized, graceful flocks."
    },
    "threatsConservation": {
      "es": "Vulnerable (VU). Amenazado por perturbación humana en sitios de anidación y sequías cíclicas del altiplano.",
      "en": "Vulnerable (VU). Pressured by lithium extraction, disturbance of fragile breeding colonies, and climate shifts."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Bahía de Puno y orillas someras visibles desde el hotel Sonesta",
        "en": "Puno Bay and shallow shoreline visibly spanning from Sonesta hotel"
      },
      "spottingDifficulty": "moderate",
      "difficultyLabel": {
        "es": "Frecuente en temporada seca (mayo a noviembre)",
        "en": "Frequent during dry season (May to November)"
      },
      "bestHour": {
        "es": "Al amanecer (06:30 - 08:00 hrs) o al atardecer",
        "en": "Early sunrise (06:30 - 08:00 hrs) or late sunset"
      },
      "hotelTips": {
        "es": "Durante los meses de mayo a noviembre, bandadas de parihuanas suelen alimentarse en las aguas someras a 200 metros del muelle privado.",
        "en": "From May to November, flocks frequently feed in the shallows within binocular range of Sonesta private pier."
      },
      "recommendedGear": {
        "es": "Binoculares o teleobjetivo 300-500mm",
        "en": "Binoculars or 300-500mm telephoto lens"
      }
    }
  },
  {
    "id": "yanavico-ibis-puna",
    "slug": "yanavico-ibis-puna",
    "commonName": {
      "es": "Ibis Negro",
      "en": "Puna Ibis (Yanavico)"
    },
    "indigenousName": "Yanavico (Quechua: pájaro negro)",
    "scientificName": "Plegadis ridgwayi",
    "family": "Threskiornithidae",
    "order": "Pelecaniformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/ibis-negro.jpg",
        "caption": {
          "es": "Yanavico (Ibis Negro) sondeando el fango con su pico curvado en el Titicaca",
          "en": "Puna Ibis probing lakeside mud with decurved bill at Lake Titicaca"
        },
        "credit": "Fotografía de Aves / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/ibis-negro-2.jpg",
        "caption": {
          "es": "Ibis de la Puna fotografiado en las orillas del Lago Titicaca",
          "en": "Puna Ibis photographed directly on the shores of Lake Titicaca"
        },
        "credit": "Thomas Fuhrmann / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Abundante en todo el altiplano de Perú y Bolivia",
        "en": "Abundant across the high plateau of Peru and Bolivia"
      },
      "size": {
        "es": "55 a 62 cm de longitud",
        "en": "55 to 62 cm in length"
      },
      "weight": {
        "es": "500 a 650 gramos",
        "en": "500 to 650 grams"
      },
      "diet": {
        "es": "Lombrices de fango, larvas acuáticas, pequeños crustáceos y anfibios",
        "en": "Mud-dwelling earthworms, aquatic insect larvae, small crustaceans, and frogs"
      },
      "habitat": {
        "es": "Pastizales húmedos, bofedales, bordes fangosos del lago y totorales",
        "en": "Flooded pastures, bofedal peatlands, muddy lake margins, and totora beds"
      },
      "altitude": "3,200 a 4,800 msnm",
      "lifespan": {
        "es": "12 a 16 años",
        "en": "12 to 16 years"
      },
      "bestTime": {
        "es": "07:30 a 16:00 hrs",
        "en": "07:30 to 16:00 hrs"
      }
    },
    "overview": {
      "es": "Ave zancuda emblemática del altiplano conocida tradicionalmente como Yanavico. A simple vista parece negra, pero bajo la intensa luz del sol andino su plumaje revela espectaculares reflejos metálicos tornasolados de tonos bronce, púrpura y verde esmeralda. Posee un largo pico curvado hacia abajo.",
      "en": "An iconic high-Andean wading bird known by its Quechua name Yanavico. While appearing dark at a distance, sunlight brings to life magnificent iridescent bronze, deep purple, and emerald reflections. Features an elegant decurved bill."
    },
    "habitatDistribution": {
      "es": "Endémica de la meseta altoandina de Perú, Bolivia, norte de Chile y noroeste de Argentina. En el Lago Titicaca se observan grandes bandadas alimentándose en las orillas húmedas.",
      "en": "Endemic to the Andean altiplano of Peru, Bolivia, northern Chile, and Argentina. Large gregarious flocks forage constantly along Lake Titicaca wetlands."
    },
    "behaviorDiet": {
      "es": "Camina activamente en grupos sondeando el fango húmedo con su pico curvado sensible al tacto para detectar lombrices y larvas sin necesidad de verlas.",
      "en": "Strides deliberately in tight flocks, probing wet mud with its sensitive decurved bill to locate worms and larvae by touch."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Población numerosa y saludable en los humedales del Titicaca.",
      "en": "Least Concern (LC). Widespread and healthy population throughout Titicaca pastures."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Pastizales ribereños y zonas húmedas junto a Sonesta Posadas del Inca",
        "en": "Shoreline pastures and wet meadows adjacent to Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy común en bandadas",
        "en": "Very common in flocks"
      },
      "bestHour": {
        "es": "08:00 a 11:00 hrs",
        "en": "08:00 to 11:00 hrs"
      },
      "hotelTips": {
        "es": "Observe los pastos inundados a la derecha del muelle: suelen reunirse grupos de 10 a 30 yanavicos alimentándose pacíficamente.",
        "en": "Scan the wet meadows to the right of the private pier: flocks of 10 to 30 ibises regularly feed in plain view."
      },
      "recommendedGear": {
        "es": "Binoculares o cámara con zoom estándar",
        "en": "Binoculars or standard zoom camera"
      }
    }
  },
  {
    "id": "cuy-silvestre-titicaca",
    "slug": "cuy-silvestre-titicaca",
    "commonName": {
      "es": "Cuy Silvestre",
      "en": "Montane Guinea Pig"
    },
    "indigenousName": "Poronccoy / Wank’u (Quechua / Aymara)",
    "scientificName": "Cavia tschudii",
    "family": "Caviidae",
    "order": "Rodentia",
    "category": "mammals",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/cuy-silvestre.jpg",
        "caption": {
          "es": "Cuy Silvestre (Cavia tschudii) en su hábitat natural de pastizales y totorales",
          "en": "Montane Guinea Pig (Cavia tschudii) in native grass and totora habitat"
        },
        "credit": "Fotografía de Mastozoológica / Wikimedia Commons"
      },
      {
        "url": "/assets/fauna/cuy-silvestre-2.jpg",
        "caption": {
          "es": "Cuy Silvestre en libertad alimentándose entre pastizales y matorrales andinos",
          "en": "Wild Montane Guinea Pig foraging freely among Andean grasses and shrubs"
        },
        "credit": "iNaturalist / Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común en valles andinos y orillas del Titicaca",
        "en": "Common in Andean valleys and shores of Lake Titicaca"
      },
      "size": {
        "es": "20 a 25 cm de longitud",
        "en": "20 to 25 cm in length"
      },
      "weight": {
        "es": "300 a 550 gramos",
        "en": "300 to 550 grams"
      },
      "diet": {
        "es": "Gramíneas andinas tiernas, brotes de totora, trébol silvestre y raíces",
        "en": "Tender Andean grasses, totora shoots, wild clover, and succulent roots"
      },
      "habitat": {
        "es": "Pastizales densos de ichu, totorales secos, muros de pirca de piedra y jardines",
        "en": "Dense ichu grass, dry totora reed margins, stone pirca walls, and hotel gardens"
      },
      "altitude": "2,000 a 4,300 msnm",
      "lifespan": {
        "es": "3 a 6 años",
        "en": "3 to 6 years"
      },
      "bestTime": {
        "es": "Al salir el sol (06:30 - 08:30 hrs) y al caer la tarde (16:30 - 18:00 hrs)",
        "en": "Sunrise (06:30 - 08:30 hrs) and late afternoon (16:30 - 18:00 hrs)"
      }
    },
    "overview": {
      "es": "Pequeño y ágil roedor silvestre originario de los Andes y ancestro biológico directo del cuy doméstico. Posee un pelaje pardo grisáceo o castaño jaspeado con vientre más claro que le proporciona un camuflaje perfecto entre los pastos y piedras. Es sumamente veloz y precavido.",
      "en": "A small, nimble wild rodent native to the Andes and the direct biological ancestor of the domesticated guinea pig. Features dense grizzled grayish-brown agouti fur and a pale belly offering superb camouflage among native grasses and rocks. Highly alert and swift."
    },
    "habitatDistribution": {
      "es": "Habita en los pastizales, bordes de totorales y muros tradicionales de piedra a lo largo de los Andes desde Perú hasta Bolivia, Chile y Argentina. Muy común en las áreas verdes del hotel Sonesta Posadas del Inca.",
      "en": "Inhabits grasslands, totora fringes, and traditional dry-stone walls across the Andes of Peru, Bolivia, Chile, and Argentina. Thrives in the extensive landscaped grounds of Sonesta Posadas del Inca."
    },
    "behaviorDiet": {
      "es": "Vive en pequeños clanes familiares y crea senderos tupidos entre la hierba. Se alimenta activamente durante las primeras horas de la mañana y al atardecer, corriendo velozmente a refugiarse en las grietas de las piedras ante el menor peligro.",
      "en": "Lives in small family groups, creating well-worn runways through tall grass. Forages actively at dawn and dusk, darting into stone crevices at the first hint of disturbance."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Especie abundante que encuentra refugio seguro en los jardines protegidos del hotel.",
      "en": "Least Concern (LC). Abundant species finding peaceful sanctuary in Sonesta's eco-conscious hotel grounds."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Muros de pirca de piedra y bordes de césped detrás de las habitaciones de Sonesta",
        "en": "Stone pirca retaining walls and lawn margins behind Sonesta guest rooms"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Frecuente al amanecer y atardecer",
        "en": "Frequent at dawn and dusk"
      },
      "bestHour": {
        "es": "06:45 a 08:15 hrs y 17:00 a 18:00 hrs",
        "en": "06:45 to 08:15 hrs and 17:00 to 18:00 hrs"
      },
      "hotelTips": {
        "es": "Camine en silencio por los senderos de piedra del jardín al amanecer: con frecuencia verá familias de cuyes silvestres asomando la cabeza y corriendo entre las pircas.",
        "en": "Walk quietly along the stone garden pathways at dawn: you will frequently spot wild guinea pig families darting playfully between stone walls."
      },
      "recommendedGear": {
        "es": "Cámara lista para tomas rápidas o teléfono celular en silencio",
        "en": "Camera set for quick action or silent smartphone"
      }
    }
  },
  {
    "id": "huallata-ganso-andino",
    "slug": "huallata-ganso-andino",
    "commonName": {
      "es": "Huallata (Ganso Andino)",
      "en": "Andean Goose"
    },
    "indigenousName": "Wallata (Aymara / Quechua)",
    "scientificName": "Chloephaga melanoptera",
    "family": "Anatidae",
    "order": "Anseriformes",
    "category": "birds",
    "isEndemic": false,
    "featured": true,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/huallata-andina.jpg",
        "caption": {
          "es": "Pareja de Huallatas en pastizal andino, con el macho acicalándose y la hembra avanzando",
          "en": "Pair of Andean Geese in high Andean grassland, male preening and female walking forward"
        },
        "credit": "Alfredo Begazo / Peru Aves"
      },
      {
        "url": "/assets/fauna/huallata-2.jpg",
        "caption": {
          "es": "Pareja de Huallatas descansando sobre pastizal andino",
          "en": "Andean Goose pair resting on high Andean grassland"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Población andina saludable (>40,000)",
        "en": "Healthy Andean population (>40,000)"
      },
      "size": {
        "es": "75 a 80 cm de longitud",
        "en": "75 to 80 cm in length"
      },
      "weight": {
        "es": "2.7 a 3.6 kilogramos",
        "en": "2.7 to 3.6 kilograms"
      },
      "diet": {
        "es": "Pastos tiernos, tréboles andinos y brotes de totora",
        "en": "Tender grasses, Andean clover, and totora shoots"
      },
      "habitat": {
        "es": "Bofedales, praderas húmedas y orillas del lago",
        "en": "Bofedal wetlands, wet meadows, and lakeshore edges"
      },
      "altitude": "3,000 a 4,700 msnm",
      "lifespan": {
        "es": "12 a 18 años",
        "en": "12 to 18 years"
      },
      "bestTime": {
        "es": "07:00 a 16:30 hrs",
        "en": "07:00 to 16:30 hrs"
      }
    },
    "overview": {
      "es": "Ganso andino robusto y majestuoso, con cuerpo blanco brillante, alas y cola negro azabache, y pico y patas de color rojo coral vivo. Símbolo andino de fidelidad de pareja de por vida.",
      "en": "A stocky, striking high-mountain goose with snow-white body, jet-black flight feathers and tail, and vibrant coral-red bill and legs. An Andean symbol of lifelong matrimonial fidelity."
    },
    "habitatDistribution": {
      "es": "Común en bofedales y orillas del Lago Titicaca en Perú y Bolivia.",
      "en": "Common in high-altitude wetlands and lake margins of Peru and Bolivia."
    },
    "behaviorDiet": {
      "es": "Camina pastando en parejas inseparables que defienden agresivamente su territorio.",
      "en": "Grazes in inseparable monogamous pairs that fiercely defend their shoreline feeding territory."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Protegida por las comunidades locales.",
      "en": "Least Concern (LC). Respected and conserved by local lakeshore communities."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Jardines inferiores y borde de playa frente al hotel Sonesta",
        "en": "Lower lawn grounds and beach fringe in front of Sonesta hotel"
      },
      "spottingDifficulty": "easy",
      "difficultyLabel": {
        "es": "Muy fácil en los jardines",
        "en": "Very easy on the grounds"
      },
      "bestHour": {
        "es": "07:30 a 10:00 hrs",
        "en": "07:30 to 10:00 hrs"
      },
      "hotelTips": {
        "es": "Se acercan confiadamente a los pastos del hotel en las primeras horas de la mañana.",
        "en": "They venture onto the hotel grass verges early in the morning."
      },
      "recommendedGear": {
        "es": "Cámara con zoom estándar o teléfono celular",
        "en": "Standard zoom camera or smartphone"
      }
    }
  },
  {
    "id": "vizcacha-andina",
    "slug": "vizcacha-andina",
    "commonName": {
      "es": "Vizcacha Andina",
      "en": "Mountain Viscacha"
    },
    "indigenousName": "Wisk’acha (Aymara / Quechua)",
    "scientificName": "Lagidium viscacia",
    "family": "Chinchillidae",
    "order": "Rodentia",
    "category": "mammals",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "/assets/fauna/vizcacha-andina.jpg",
        "caption": {
                "es": "Madre vizcacha andina protegiendo a su cría sobre rocas en el Altiplano",
                "en": "Mountain Vizcacha mother sheltering her pup on Andean granite rocks"
        },
        "credit": "Andrés Puiggros / iNaturalist (CC BY-NC 4.0)"
},
      {
        "url": "/assets/fauna/vizcacha-2.jpg",
        "caption": {
          "es": "Vizcacha de la Sierra en postura de alerta en grietas rocosas",
          "en": "Mountain Vizcacha in alert posture among rocky crevices"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Común en roquedales andinos",
        "en": "Common in Andean rock formations"
      },
      "size": {
        "es": "30 a 45 cm (cola de 20 a 30 cm)",
        "en": "30 to 45 cm (tail 20 to 30 cm)"
      },
      "weight": {
        "es": "1.2 a 2.0 kilogramos",
        "en": "1.2 to 2.0 kilograms"
      },
      "diet": {
        "es": "Ichu, líquenes, musgos y raíces andinas",
        "en": "Ichu bunchgrass, lichens, mosses, and roots"
      },
      "habitat": {
        "es": "Afloramientos rocosos y acantilados con grietas profundas",
        "en": "Rocky crags and cliffs with deep protective crevices"
      },
      "altitude": "3,000 a 5,000 msnm",
      "lifespan": {
        "es": "10 a 15 años",
        "en": "10 to 15 years"
      },
      "bestTime": {
        "es": "08:00 a 11:00 hrs (al sol)",
        "en": "08:00 to 11:00 hrs (basking in morning sun)"
      }
    },
    "overview": {
      "es": "Roedor emparentado con la chinchilla con apariencia similar a un conejo de cola larga enroscada y tupido pelaje grisáceo. Se asolea inmóvil sobre las rocas cálidas.",
      "en": "A chinchilla relative resembling a heavy-set rabbit with a long, curled tail and thick woolly fur. Basks motionless on sun-warmed rocks."
    },
    "habitatDistribution": {
      "es": "Laderas rocosas y cerros que circundan el Lago Titicaca.",
      "en": "Rocky bluffs and hillsides surrounding Lake Titicaca."
    },
    "behaviorDiet": {
      "es": "Herbívora diurna; salta con increíble agilidad entre peñascos.",
      "en": "Diurnal herbivore leaping effortlessly across boulders."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Protegida en áreas de conservación.",
      "en": "Least Concern (LC). Protected in regional reserves."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Cerros rocosos a espaldas del hotel Sonesta Posadas del Inca",
        "en": "Rocky hills directly behind Sonesta Posadas del Inca"
      },
      "spottingDifficulty": "moderate",
      "difficultyLabel": {
        "es": "Visible con binoculares en rocas",
        "en": "Visible with binoculars on crags"
      },
      "bestHour": {
        "es": "08:30 a 11:00 hrs",
        "en": "08:30 to 11:00 hrs"
      },
      "hotelTips": {
        "es": "Mire hacia las rocas altas al este del hotel en mañanas soleadas.",
        "en": "Look toward the upper rock outcrops east of the hotel on sunny mornings."
      },
      "recommendedGear": {
        "es": "Binoculares o teleobjetivo",
        "en": "Binoculars or telephoto lens"
      }
    }
  },
  {
    "id": "zorro-andino-culpeo",
    "slug": "zorro-andino-culpeo",
    "commonName": {
      "es": "Zorro Andino (Culpeo)",
      "en": "Andean Fox (Culpeo)"
    },
    "indigenousName": "Atoj / Qamaqi (Quechua / Aymara)",
    "scientificName": "Lycalopex culpaeus andinus",
    "family": "Canidae",
    "order": "Carnivora",
    "category": "mammals",
    "isEndemic": false,
    "featured": false,
    "iucnStatus": "LC",
    "images": [
      {
        "url": "https://images.unsplash.com/photo-1516934024742-b461fba47600?auto=format&fit=crop&w=1400&q=85",
        "caption": {
          "es": "Zorro Andino recorriendo las laderas con vista al Lago Titicaca",
          "en": "Andean Fox traversing slopes overlooking Lake Titicaca"
        },
        "credit": "Archivo de Fauna Silvestre del Altiplano"
      },
      {
        "url": "/assets/fauna/zorro-andino-2.jpg",
        "caption": {
          "es": "Zorro Culpeo Andino explorando senderos rocosos de altura",
          "en": "Andean Culpeo Fox exploring high-elevation rocky trails"
        },
        "credit": "Wikimedia Commons"
      }
    ],
    "quickFacts": {
      "iucnStatus": "LC",
      "iucnLabel": {
        "es": "Preocupación Menor (LC)",
        "en": "Least Concern (LC)"
      },
      "population": {
        "es": "Estable en los Andes centrales",
        "en": "Stable across central Andes"
      },
      "size": {
        "es": "60 a 90 cm de longitud corporal (cola 35 a 45 cm)",
        "en": "60 to 90 cm body length (tail 35 to 45 cm)"
      },
      "weight": {
        "es": "7 a 11 kilogramos",
        "en": "7 to 11 kilograms"
      },
      "diet": {
        "es": "Roedores (cuyes silvestres), aves acuáticas, lagartijas y frutos",
        "en": "Small rodents (wild cavies), waterbirds, lizards, and berries"
      },
      "habitat": {
        "es": "Matorrales de puna, laderas con queñuales y orillas del lago",
        "en": "Puna shrublands, polylepis slopes, and lake margins"
      },
      "altitude": "2,000 a 4,800 msnm",
      "lifespan": {
        "es": "8 a 12 años",
        "en": "8 to 12 years"
      },
      "bestTime": {
        "es": "Al amanecer (06:00 - 07:30) y crepúsculo (18:00 - 19:30)",
        "en": "At dawn (06:00 - 07:30) and dusk (18:00 - 19:30)"
      }
    },
    "overview": {
      "es": "El cánido salvaje más grande del altiplano andino, con pelaje rojizo en cabeza y patas, lomo gris jaspeado y cola tupida con punta negra.",
      "en": "The largest wild canid in the high Andes, featuring reddish fur on head and limbs, grizzled gray back, and a bushy black-tipped tail."
    },
    "habitatDistribution": {
      "es": "Laderas andinas y campos que rodean el Lago Titicaca.",
      "en": "Andean foothills and countryside surrounding Lake Titicaca."
    },
    "behaviorDiet": {
      "es": "Depredador oportunista y solitario; patrulla las orillas buscando roedores y aves.",
      "en": "Solitary, opportunistic predator patrolling shorelines for rodents and waterfowl."
    },
    "threatsConservation": {
      "es": "Preocupación Menor (LC). Cánido protegido en áreas silvestres.",
      "en": "Least Concern (LC). Protected in regional reserves."
    },
    "sonestaSpotting": {
      "location": {
        "es": "Linderos superiores de la propiedad y cerros colindantes",
        "en": "Upper perimeter of hotel property and neighboring hills"
      },
      "spottingDifficulty": "rare",
      "difficultyLabel": {
        "es": "Ocasional al amanecer",
        "en": "Occasional at dawn"
      },
      "bestHour": {
        "es": "06:00 a 07:00 hrs",
        "en": "06:00 to 07:00 hrs"
      },
      "hotelTips": {
        "es": "Puede verse cruzando las laderas altas en las primeras luces del día.",
        "en": "Occasionally seen trotting across the upper ridgelines at first light."
      },
      "recommendedGear": {
        "es": "Teleobjetivo o binoculares",
        "en": "Telephoto lens or binoculars"
      }
    }
  },
  ...FLORA_DATA

];

export const HOTEL_INFO = {
  amenitiesForWildlife: [
    {
      title: {
        es: 'Muelle Privado de Avistamiento',
        en: 'Private Wildlife Observation Pier',
      },
      desc: {
        es: 'Punto de observación privilegiado para ver zambullidores, patos puna, gaviotas andinas y karachis nadando en aguas calmas.',
        en: 'Unmatched vantage point to observe grebes, puna teals, Andean gulls, and native karachis in undisturbed waters.',
      },
      icon: 'Anchor',
    },
    {
      title: {
        es: 'Préstamo de Binoculares',
        en: 'Binoculars Courtesy Loan',
      },
      desc: {
        es: 'Equipos ópticos 8x42 disponibles en recepción para huéspedes amantes del aviturismo.',
        en: 'Quality 8x42 optical gear available at front desk for birdwatching guests.',
      },
      icon: 'Eye',
    },
    {
      title: {
        es: 'Embarcadero a Islas de Uros y Taquile',
        en: 'Direct Lake Excursion Pier',
      },
      desc: {
        es: 'Partida directa en lanchas ecológicas hacia los santuarios y humedales de la Reserva Nacional.',
        en: 'Direct boat departures into the heart of the Titicaca National Reserve reed channels.',
      },
      icon: 'Compass',
    },
    {
      title: {
        es: 'Restaurante Inkafe con Vista Panorámica',
        en: 'Inkafe Panoramic Lakefront Dining',
      },
      desc: {
        es: 'Disfrute de la gastronomía peruana mientras contempla parihuanas y huallatas a orillas del lago.',
        en: 'Savor gourmet Peruvian cuisine while watching flamingos and Andean geese along the shallows.',
      },
      icon: 'Coffee',
    },
  ],
};

