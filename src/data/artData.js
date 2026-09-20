const artLocations = [
  {
    id: 1,
    name: "Jaipur",
    state: "Rajasthan, India",
    position: [26.9124, 75.7873],
    artForm: "Jaipur Miniature Painting",
    category: "Miniature Art",
    color: "#2563eb",

    history:
      "Jaipur developed as an important centre of Rajput miniature painting under royal patronage.",

    significance:
      "The Jaipur School contributed to the wider Rajasthani tradition of miniature painting.",

    artists: ["Sahibram", "Guman", "Anonymous Court Artists"],

    artworks: [
      "Krishna and Radha Miniatures",
      "Royal Portraits",
      "Illustrated Religious Manuscripts",
    ],
  },

  {
    id: 2,
    name: "Udaipur",
    state: "Rajasthan, India",
    position: [24.5854, 73.7125],
    artForm: "Mewar Painting",
    category: "Medieval Art",
    color: "#d97706",

    history:
      "Udaipur became an important centre for the development of the Mewar school of painting.",

    significance:
      "Mewar paintings are known for their bright colours and expressive storytelling.",

    artists: ["Sahibdin", "Manohar"],

    artworks: [
      "Mewar Court Paintings",
      "Krishna Paintings",
    ],
  },

  {
    id: 3,
    name: "Delhi",
    state: "Delhi, India",
    position: [28.6139, 77.209],
    artForm: "Mughal Painting",
    category: "Medieval Art",
    color: "#d97706",

    history:
      "Mughal painting flourished under the patronage of the Mughal emperors.",

    significance:
      "It combined Persian artistic traditions with Indian themes.",

    artists: ["Basawan", "Abdul Samad"],

    artworks: [
      "Mughal Miniatures",
      "Imperial Portraits",
    ],
  },

  {
    id: 4,
    name: "Kolkata",
    state: "West Bengal, India",
    position: [22.5726, 88.3639],
    artForm: "Bengal School",
    category: "Modern Art",
    color: "#7c3aed",

    history:
      "The Bengal School emerged as an important movement in modern Indian art.",

    significance:
      "It played a major role in shaping modern Indian artistic identity.",

    artists: ["Abanindranath Tagore", "Nandalal Bose"],

    artworks: [
      "Bharat Mata",
      "Bengal School Paintings",
    ],
  },

  {
    id: 5,
    name: "Mumbai",
    state: "Maharashtra, India",
    position: [19.076, 72.8777],
    artForm: "Modern Indian Art",
    category: "Modern Art",
    color: "#7c3aed",

    history:
      "Mumbai became an important centre for modern and contemporary Indian artists.",

    significance:
      "The city helped shape the development of modern Indian art.",

    artists: ["M. F. Husain", "F. N. Souza"],

    artworks: [
      "Modern Indian Paintings",
      "Progressive Artists Group Works",
    ],
  },

  {
    id: 6,
    name: "Chennai",
    state: "Tamil Nadu, India",
    position: [13.0827, 80.2707],
    artForm: "Tanjore Painting",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Tanjore painting developed in Tamil Nadu and became famous for its rich decorative style.",

    significance:
      "It is known for the use of gold foil and religious themes.",

    artists: ["Traditional Tanjore Artists"],

    artworks: [
      "Tanjore Religious Paintings",
      "South Indian Temple Art",
    ],
  },

  {
    id: 7,
    name: "Madurai",
    state: "Tamil Nadu, India",
    position: [9.9252, 78.1198],
    artForm: "Tanjore Art",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Madurai has a long tradition of South Indian temple and decorative art.",

    significance:
      "Its artistic traditions are closely connected with Tamil culture and temples.",

    artists: ["Traditional Artists"],

    artworks: [
      "Temple Paintings",
      "Traditional South Indian Art",
    ],
  },

  {
    id: 8,
    name: "Hyderabad",
    state: "Telangana, India",
    position: [17.385, 78.4867],
    artForm: "Deccan Painting",
    category: "Miniature Art",
    color: "#2563eb",

    history:
      "Deccan painting developed under the patronage of various royal courts.",

    significance:
      "It is known for its distinctive colours and decorative style.",
    artists: ["Deccan Court Artists"],

    artworks: [
      "Deccan Miniatures",
      "Royal Court Paintings",
    ],
  },

  {
    id: 9,
    name: "Bhopal",
    state: "Madhya Pradesh, India",
    position: [23.2599, 77.4126],
    artForm: "Gond Art",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Gond art developed from the traditions of the Gond tribal communities.",

    significance:
      "It is known for colourful patterns inspired by nature.",

    artists: ["Jangarh Singh Shyam"],

    artworks: [
      "Gond Tribal Paintings",
      "Nature Inspired Art",
    ],
  },

  {
    id: 10,
    name: "Bhubaneswar",
    state: "Odisha, India",
    position: [20.2961, 85.8245],
    artForm: "Pattachitra",
    category: "Ancient Art",
    color: "#b52b35",

    history:
      "Pattachitra is a traditional art form from Odisha with a long cultural history.",

    significance:
      "It is known for detailed storytelling and mythological themes.",

    artists: ["Traditional Pattachitra Artists"],

    artworks: [
      "Jagannath Paintings",
      "Mythological Scroll Paintings",
    ],
  },

  /* =========================
     NEW LOCATIONS START HERE
  ========================= */

  {
    id: 11,
    name: "Ajanta",
    state: "Maharashtra, India",
    position: [20.5519, 75.7033],
    artForm: "Ajanta Cave Paintings",
    category: "Ancient Art",
    color: "#b52b35",

    history:
      "The Ajanta Caves contain some of India's most important surviving ancient paintings and Buddhist art.",

    significance:
      "The murals are internationally recognised for their artistic detail and historical importance.",

    artists: ["Ancient Buddhist Artists"],

    artworks: [
      "Buddhist Murals",
      "Jataka Tales Paintings",
      "Ajanta Cave Paintings",
    ],
  },

  {
    id: 12,
    name: "Ellora",
    state: "Maharashtra, India",
    position: [20.0268, 75.179],
    artForm: "Ellora Cave Art",
    category: "Ancient Art",
    color: "#b52b35",

    history:
      "Ellora developed as a major centre of rock-cut architecture and sculpture representing multiple religious traditions.",

    significance:
      "The caves demonstrate remarkable artistic and architectural achievements.",

    artists: ["Ancient Indian Sculptors"],

    artworks: [
      "Kailasa Temple",
      "Rock-Cut Sculptures",
      "Buddhist Cave Art",
    ],
  },

  {
    id: 13,
    name: "Varanasi",
    state: "Uttar Pradesh, India",
    position: [25.3176, 82.9739],
    artForm: "Banaras Art and Silk Tradition",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Varanasi has been an important cultural centre with traditions in painting, textiles and religious art.",

    significance:
      "Its artistic traditions are deeply connected with Indian spirituality and craftsmanship.",

    artists: ["Traditional Banarasi Artists"],

    artworks: [
      "Banarasi Textile Art",
      "Religious Paintings",
      "Traditional Crafts",
    ],
  },

  {
    id: 14,
    name: "Mysuru",
    state: "Karnataka, India",
    position: [12.2958, 76.6394],
    artForm: "Mysore Painting",
    category: "Medieval Art",
    color: "#d97706",

    history:
      "Mysore painting developed under royal patronage and became known for elegant religious compositions.",

    significance:
      "The style is recognised for its delicate lines and decorative use of gold.",

    artists: ["Traditional Mysore Artists"],

    artworks: [
      "Mysore Religious Paintings",
      "Gold Foil Paintings",
    ],
  },

  {
    id: 15,
    name: "Kochi",
    state: "Kerala, India",
    position: [9.9312, 76.2673],
    artForm: "Kerala Mural Painting",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Kerala developed a distinctive tradition of colourful mural painting, especially in temples and palaces.",

    significance:
      "Kerala murals are known for their expressive figures and vibrant natural colours.",

    artists: ["Traditional Kerala Mural Artists"],

    artworks: [
      "Temple Murals",
      "Palace Murals",
      "Mythological Paintings",
    ],
  },

  {
    id: 16,
    name: "Thanjavur",
    state: "Tamil Nadu, India",
    position: [10.787, 79.1378],
    artForm: "Thanjavur Painting",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Thanjavur became famous for a distinctive painting tradition using rich colours, gold foil and decorative elements.",

    significance:
      "It remains one of the most recognisable classical painting traditions of South India.",

    artists: ["Traditional Thanjavur Artists"],

    artworks: [
      "Gold Foil Religious Paintings",
      "Hindu Deity Paintings",
    ],
  },

  {
    id: 17,
    name: "Amritsar",
    state: "Punjab, India",
    position: [31.634, 74.8723],
    artForm: "Sikh Art",
    category: "Medieval Art",
    color: "#d97706",

    history:
      "Punjab developed rich traditions of Sikh religious art, architecture and manuscript decoration.",

    significance:
      "The region represents an important cultural tradition in the artistic heritage of India.",

    artists: ["Traditional Sikh Artists"],

    artworks: [
      "Sikh Religious Art",
      "Manuscript Illustrations",
      "Temple Decorations",
    ],
  },

  {
    id: 18,
    name: "Ahmedabad",
    state: "Gujarat, India",
    position: [23.0225, 72.5714],
    artForm: "Gujarat Folk Art",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Gujarat has a rich artistic heritage including textile traditions, embroidery and folk painting.",

    significance:
      "The region is known for colourful craftsmanship and strong community-based art traditions.",

    artists: ["Traditional Gujarati Artists"],

    artworks: [
      "Traditional Textile Art",
      "Folk Paintings",
      "Embroidery Art",
    ],
  },

  {
    id: 19,
    name: "Puri",
    state: "Odisha, India",
    position: [19.8135, 85.8312],
    artForm: "Odisha Pattachitra",
    category: "Ancient Art",
    color: "#b52b35",

    history:
      "Puri is closely connected with Odisha's traditional Pattachitra painting and religious artistic traditions.",

    significance:
      "The art form preserves stories from mythology through detailed handmade paintings.",

    artists: ["Traditional Pattachitra Artists"],

    artworks: [
      "Jagannath Pattachitra",
      "Mythological Paintings",
      "Palm Leaf Art",
    ],
  },

  {
    id: 20,
    name: "Srinagar",
    state: "Jammu and Kashmir, India",
    position: [34.0837, 74.7973],
    artForm: "Kashmiri Art",
    category: "Folk Art",
    color: "#16803d",

    history:
      "Kashmir developed rich traditions of painting, textile design, woodwork and decorative art.",

    significance:
      "Kashmiri art is recognised for its detailed craftsmanship and distinctive decorative patterns.",

    artists: ["Traditional Kashmiri Artists"],

    artworks: [
      "Kashmiri Papier-Mâché",
      "Traditional Textile Art",
      "Decorative Paintings",
    ],
  },
];

export default artLocations;