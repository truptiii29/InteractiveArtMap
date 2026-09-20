const artLocations = [
  {
    id: 1,
    name: "Jaipur",
    state: "Rajasthan",
    position: [26.9124, 75.7873],
    category: "Miniature Art",
    artForm: "Jaipur Miniature Painting",
    color: "#2563eb",
    images: [
      {
        name: "jaipur-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/1_Gaudi_Ragini._Jaipur._1700-1725_Cleveland.jpg"
      }
    ],
    history:
      "Jaipur developed as an important centre of Rajput miniature painting under royal patronage, shaped by the wider Rajasthani tradition and Mughal influence.",
    significance:
      "Jaipur miniature paintings are celebrated for courtly elegance, expressive figures, detailed narrative scenes and decorative compositional balance.",
    artists: ["Sahibram", "Guman", "Court Artists"],
    artworks: ["Gaudi Ragini", "Portrait Miniatures", "Rajput Narrative Scenes"]
  },
  {
    id: 2,
    name: "Kolkata",
    state: "West Bengal",
    position: [22.5726, 88.3639],
    category: "Modern Art",
    artForm: "Bengal School of Art",
    color: "#7c3aed",
    images: [
      {
        name: "kolkata-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Bharat_Mata_by_Abanindranath_Tagore.jpg"
      }
    ],
    history:
      "Kolkata became a crucial centre of modern Indian art, especially through the Bengal School movement and the artistic vision of Tagore and his circle.",
    significance:
      "The Bengal School encouraged the revival of Indian cultural themes through a modern visual language rooted in history, myth and national identity.",
    artists: ["Abanindranath Tagore", "Nandalal Bose", "Gaganendranath Tagore"],
    artworks: ["Bharat Mata", "Indian Mythological Paintings", "Bengal School Works"]
  },
  {
    id: 3,
    name: "Mumbai",
    state: "Maharashtra",
    position: [19.076, 72.8777],
    category: "Modern Art",
    artForm: "Modern Indian Art",
    color: "#7c3aed",
    images: [
      {
        name: "mumbai-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/National%20Gallery%20of%20Modern%20Art%2C%20Mumbai%2C%20India%20%2820575179683%29.jpg"
      },
      {
        name: "mumbai-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Indira%20devi.jpg"
      }
    ],
    history:
      "Mumbai has been an important centre for modern and contemporary Indian art, with major museums, galleries and artistic institutions contributing to the city's cultural landscape.",
    significance:
      "The city has played an important role in the development and exhibition of modern Indian art, bringing together artists, galleries, museums and cultural institutions.",
    artists: ["Modern Indian Artists", "Contemporary Indian Artists"],
    artworks: ["Modern Indian Paintings", "Contemporary Art", "Indian Modernist Works"]
  },
  {
    id: 4,
    name: "Madhubani",
    state: "Bihar",
    position: [26.3484, 86.0714],
    category: "Folk Art",
    artForm: "Madhubani / Mithila Painting",
    color: "#16803d",
    images: [
      {
        name: "madhubani-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Madhubani_painting.jpg"
      }
    ],
    history:
      "Madhubani painting, also known as Mithila painting, developed in the Mithila region of Bihar and has long been practiced by women artists in the community.",
    significance:
      "Its bold geometric patterns, mythological themes and ritual symbolism make it one of India's most recognizable folk traditions.",
    artists: ["Traditional Mithila Artists", "Madhubani Folk Artists"],
    artworks: ["Mithila Paintings", "Nature-Inspired Floor Designs", "Mythological Narratives"]
  },
  {
    id: 5,
    name: "Thanjavur",
    state: "Tamil Nadu",
    position: [10.787, 79.1378],
    category: "Classical Art",
    artForm: "Thanjavur Painting",
    color: "#d97706",
    images: [
      {
        name: "thanjavur-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore%20art.jpg"
      },
      {
        name: "thanjavur-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Tanjore%20Painting%20Vinyaka.jpg"
      },
      {
        name: "thanjavur-3.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Natarajar%20Tanjore%20painting.jpg"
      }
    ],
    history:
      "Thanjavur painting is a classical South Indian painting tradition associated with Thanjavur in Tamil Nadu. The tradition developed in the Maratha court of Thanjavur and became known for richly decorated devotional paintings.",
    significance:
      "Thanjavur paintings are recognised for rich colours, gold foil, raised gesso work and the use of glass beads or semi-precious stones. Religious subjects such as Hindu gods, goddesses and saints are common.",
    artists: ["Traditional Thanjavur Artists", "South Indian Temple Artists"],
    artworks: ["Thanjavur Ganesha Paintings", "Nataraja Thanjavur Paintings", "Traditional Tanjore Paintings"]
  },
  {
    id: 6,
    name: "Mysuru",
    state: "Karnataka",
    position: [12.2958, 76.6394],
    category: "Medieval Art",
    artForm: "Mysore Painting",
    color: "#d97706",
    images: [
      {
        name: "mysuru-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mysore_painting.jpg"
      }
    ],
    history:
      "Mysore painting emerged from royal and devotional artistic traditions in Karnataka, particularly under the patronage of the Mysore kingdom.",
    significance:
      "It is famed for refined line work, delicate detailing, and the use of gold and rich symbolic composition in sacred narratives.",
    artists: ["Mysore Court Artists", "Traditional South Indian Painters"],
    artworks: ["Religious Paintings", "Gold-Decorated Panels", "Courtly Compositions"]
  },
  {
    id: 7,
    name: "Warli Region",
    state: "Maharashtra",
    position: [19.99, 73.01],
    category: "Folk Art",
    artForm: "Warli Painting",
    color: "#16803d",
    images: [
      {
        name: "warli-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Warli_painting.jpg"
      }
    ],
    history:
      "Warli painting is a tribal art tradition associated with the Warli community of Maharashtra, notably in the Sahyadri region.",
    significance:
      "Its geometric forms and visual storytelling capture village life, rituals, agriculture, social events and community relationships.",
    artists: ["Traditional Warli Artists", "Warli Community Artists"],
    artworks: ["Warli Village Scenes", "Traditional Murals", "Community Narratives"]
  },
  {
    id: 8,
    name: "Puri",
    state: "Odisha",
    position: [19.8135, 85.8312],
    category: "Folk Art",
    artForm: "Odisha Pattachitra",
    color: "#ea580c",
    images: [
      {
        name: "puri-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra%20art.jpg"
      },
      {
        name: "puri-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pattachitra%20of%20Jagannath.jpg"
      },
      {
        name: "puri-3.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Jagannath%20Theme%20in%20Pattachitra.jpg"
      }
    ],
    history:
      "Pattachitra is a traditional painting tradition of Odisha, historically associated with temples and pilgrimage centres including Puri. Artists traditionally create detailed paintings on prepared cloth using natural and traditional colours.",
    significance:
      "Pattachitra is particularly associated with Jagannath culture and is known for detailed line work, decorative borders and colourful depictions of Hindu mythology and religious subjects.",
    artists: ["Traditional Pattachitra Artists", "Raghurajpur Artists"],
    artworks: ["Jagannath Pattachitra", "Pattachitra Paintings", "Odisha Traditional Paintings"]
  },
  {
    id: 9,
    name: "Hyderabad",
    state: "Telangana",
    position: [17.385, 78.4867],
    category: "Miniature Art",
    artForm: "Deccan Painting",
    color: "#9333ea",
    images: [
      {
        name: "hyderabad-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Akbar%20painting%20from%20Deccan%20%2819th%20century%29.jpg"
      }
    ],
    history:
      "Deccan painting developed in the courts of the Deccan Sultanates and later Hyderabad. The tradition is known for rich colours, decorative details and distinctive courtly and literary subjects.",
    significance:
      "Deccan miniature painting represents an important regional tradition of Indian miniature art and reflects the cultural exchanges between Indian, Persian and other artistic traditions.",
    artists: ["Deccan Court Painters", "Traditional Hyderabad Artists"],
    artworks: ["Deccan Miniatures", "Court Paintings", "Hyderabad Deccan Art"]
  },
  {
    id: 10,
    name: "Ajanta",
    state: "Maharashtra",
    position: [20.5519, 75.7033],
    category: "Ancient Art",
    artForm: "Ajanta Cave Paintings",
    color: "#b52b35",
    images: [
      {
        name: "ajanta-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ajanta_Caves.jpg"
      }
    ],
    history:
      "The Ajanta Caves preserve one of the greatest bodies of ancient Indian mural painting, shaped by Buddhist devotion and artistic excellence.",
    significance:
      "Ajanta is a landmark of world heritage, revealing how narrative painting, expression and sacred art developed in ancient India.",
    artists: ["Ancient Buddhist Artists", "Cave Workshop Painters"],
    artworks: ["Ajanta Murals", "Jataka Narratives", "Buddhist Scenes"]
  },
  {
    id: 11,
    name: "Ellora",
    state: "Maharashtra",
    position: [20.0268, 75.1783],
    category: "Cave Art",
    artForm: "Ellora Cave Art",
    color: "#8b5e3c",
    images: [
      {
        name: "ellora-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ellora%20Caves.jpg"
      },
      {
        name: "ellora-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Ellora%20Caves%2C%20India.jpg"
      }
    ],
    history:
      "Ellora is one of India's major rock-cut architectural complexes, containing Buddhist, Hindu and Jain monuments. The caves were created between approximately the 5th and 10th centuries CE.",
    significance:
      "Ellora represents the interaction of architecture, sculpture and religious traditions in ancient India. Cave 16, the Kailasa Temple, is particularly famous for its monumental rock-cut design.",
    artists: ["Ancient Indian craftsmen"],
    artworks: ["Kailasa Temple", "Ellora Cave Sculptures", "Buddhist Cave Art"]
  },
  {
    id: 12,
    name: "Amritsar",
    state: "Punjab",
    position: [31.634, 74.8723],
    category: "Textiles",
    artForm: "Phulkari",
    color: "#d97706",
    images: [
      {
        name: "amritsar-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Phulkari.jpg"
      },
      {
        name: "amritsar-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/PDL%20Phulkari.jpg"
      }
    ],
    history:
      "Phulkari is a traditional embroidery tradition associated with Punjab. The name literally refers to floral work, and the embroidery is traditionally created on textiles using colourful thread.",
    significance:
      "Phulkari is closely connected with Punjabi cultural traditions, clothing, ceremonies and community life.",
    artists: ["Traditional Punjabi artisans"],
    artworks: ["Phulkari Embroidery", "Phulkari Dupattas", "Traditional Punjabi Textiles"]
  },
  {
    id: 13,
    name: "Gujarat",
    state: "Gujarat",
    position: [23.0225, 72.5714],
    category: "Folk Art",
    artForm: "Gujarat Folk Art",
    color: "#b45309",
    images: [
      {
        name: "gujarat-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rogan%20art%20by%20ashish%20kansara%20%28%20Raja%20Ram%20Darbar%20%29.jpg"
      }
    ],
    history:
      "Gujarat has a wide range of traditional visual arts and crafts. Rogan painting is one distinctive textile-based tradition associated particularly with the Kutch region.",
    significance:
      "Gujarati folk traditions demonstrate the region's strong relationship between visual design, textiles, storytelling and community craftsmanship.",
    artists: ["Traditional Gujarati artisans"],
    artworks: ["Rogan Art", "Kutch Folk Art", "Traditional Gujarati Textile Art"]
  },
  {
    id: 14,
    name: "Kochi",
    state: "Kerala",
    position: [9.9312, 76.2673],
    category: "Contemporary Art",
    artForm: "Contemporary Indian Art",
    color: "#7c3aed",
    images: [
      {
        name: "kochi-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Kochi%20muziris%20biennale%2012%2012%2012%20-%20panoramio.jpg"
      },
      {
        name: "kochi-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pk%20sadanandan%20in%20KM%20biennale%202016.jpg"
      }
    ],
    history:
      "Kochi has become an important centre for contemporary art in India, particularly through the Kochi-Muziris Biennale and its network of exhibitions, artists and cultural spaces.",
    significance:
      "Contemporary art in Kochi connects Indian artistic traditions with modern themes, installations, performance and international artistic practices.",
    artists: ["Contemporary Indian Artists", "Kochi-Muziris Biennale Artists"],
    artworks: ["Kochi-Muziris Biennale Installations", "Contemporary Art Exhibitions", "Public Art Projects"]
  },
  {
    id: 15,
    name: "Srinagar",
    state: "Jammu and Kashmir",
    position: [34.0837, 74.7973],
    category: "Craft Art",
    artForm: "Kashmiri Papier-mâché",
    color: "#2563eb",
    images: [
      {
        name: "srinagar-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Papier%20mache%20goods%2C%20Kashmir%20%288141417742%29.jpg"
      },
      {
        name: "srinagar-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/19th-century%20papier-m%C3%A2ch%C3%A9%20bowl%20from%20Kashmir%2001.jpg"
      }
    ],
    history:
      "Kashmiri papier-mâché is a traditional decorative craft involving shaped paper material that is carefully decorated with painted floral, geometric and other ornamental designs.",
    significance:
      "The craft is an important part of Kashmir's decorative-art heritage and is known for detailed surface decoration and colourful designs.",
    artists: ["Traditional Kashmiri artisans"],
    artworks: ["Papier-mâché Decorative Boxes", "Kashmiri Qalamdan", "Decorative Papier-mâché Objects"]
  },
  {
    id: 16,
    name: "Delhi",
    state: "Delhi",
    position: [28.6139, 77.209],
    category: "Miniature Art",
    artForm: "Mughal Painting",
    color: "#92400e",
    images: [
      {
        name: "delhi-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Mughal%20painting.jpg"
      }
    ],
    history:
      "Mughal painting developed in the Mughal imperial courts and combined Persian miniature traditions with Indian artistic practices.",
    significance:
      "Mughal miniatures are known for detailed drawing, refined composition, courtly subjects, manuscripts, portraits, animals, plants and historical scenes.",
    artists: ["Mughal Court Painters", "Ustad Mansur", "Abd al-Samad"],
    artworks: ["Mughal Miniature Paintings", "Imperial Portraits", "Illustrated Manuscripts"]
  },
  {
    id: 17,
    name: "Udaipur",
    state: "Rajasthan",
    position: [24.5854, 73.7125],
    category: "Miniature Art",
    artForm: "Mewar Painting",
    color: "#15803d",
    images: [
      {
        name: "udaipur-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Detail%20of%20Mewar%20painting%20manuscript%2C%20ca.1712.jpg"
      },
      {
        name: "udaipur-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Miniature%20painting%20of%20Maharana%20Pratap%20Singh%20of%20Mewar%20State%2C%20after%20an%20older%20work%2C%20ca.1880.jpg"
      }
    ],
    history:
      "Mewar painting developed in the Rajput courts of Rajasthan, particularly around the historic Mewar kingdom whose capital later became Udaipur.",
    significance:
      "Mewar miniature painting is recognised for colourful compositions, court scenes, religious subjects, landscapes and narrative illustrations.",
    artists: ["Mewar Court Painters", "Traditional Rajasthani Miniature Artists"],
    artworks: ["Mewar Miniatures", "Ramayana Manuscript Paintings", "Maharana Portraits"]
  },
  {
    id: 18,
    name: "Chennai",
    state: "Tamil Nadu",
    position: [13.0827, 80.2707],
    category: "Modern Art",
    artForm: "South Indian / Madras Art",
    color: "#dc2626",
    images: [
      {
        name: "chennai-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Madras%20School%20of%20Arts%20vases%2C%20India%201886%20foto%202.JPG"
      }
    ],
    history:
      "Chennai has played an important role in the development of modern art education in South India through institutions associated with the Madras School of Arts and Crafts.",
    significance:
      "The Madras artistic tradition contributed to the development of modern Indian art in South India and encouraged the study of drawing, design, crafts and visual arts.",
    artists: ["Madras School Artists", "South Indian Modern Artists"],
    artworks: ["Madras School Art", "South Indian Decorative Art", "Modern Tamil Art"]
  },
  {
    id: 19,
    name: "Varanasi",
    state: "Uttar Pradesh",
    position: [25.3176, 82.9739],
    category: "Textiles",
    artForm: "Banarasi Textile Art",
    color: "#be123c",
    images: [
      {
        name: "varanasi-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi%20Sari%20on%20viewing%20wooden%20blocks%2001.jpg"
      },
      {
        name: "varanasi-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Banarasi%20sari%20pallu%20by%20ashish4.JPG"
      },
      {
        name: "varanasi-3.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/%27Sari%27%20from%20Varanasi%20%28north-central%20India%29%2C%20silk%20and%20gold-wrapped%20silk%20yarn%20with%20supplementary%20weft%20brocade.jpg"
      }
    ],
    history:
      "Varanasi is strongly associated with the production of Banarasi textiles, particularly richly decorated silk sarees featuring intricate woven patterns.",
    significance:
      "Banarasi textile traditions are an important part of India's handloom heritage and are particularly known for detailed brocade and ornamental weaving.",
    artists: ["Traditional Banarasi Weavers"],
    artworks: ["Banarasi Silk Sarees", "Banarasi Brocade", "Gold-Wrapped Silk Textile"]
  },
  {
    id: 20,
    name: "Bhopal",
    state: "Madhya Pradesh",
    position: [23.2599, 77.4126],
    category: "Folk Art",
    artForm: "Gond Art",
    color: "#16a34a",
    images: [
      {
        name: "bhopal-1.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gond%20art.jpg"
      },
      {
        name: "bhopal-2.jpg",
        url: "https://commons.wikimedia.org/wiki/Special:FilePath/Gond%20Art%20IMG%208700.jpg"
      }
    ],
    history:
      "Gond painting is a traditional tribal art associated with Gond communities of central India, particularly Madhya Pradesh.",
    significance:
      "Gond art frequently uses elaborate patterns, dots and lines to depict animals, birds, plants, people and elements of nature.",
    artists: ["Traditional Gond Artists", "Contemporary Gond Painters"],
    artworks: ["Gond Animal Paintings", "Gond Nature Paintings", "Gond Tribal Art"]
  }
];

export default artLocations;