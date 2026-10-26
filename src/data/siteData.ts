export interface UmrahPackage {
  id: string;
  name: string;
  tier: 'Basic' | 'Standard' | 'Deluxe';
  price: string;
  priceNote: string;
  duration: string;
  departureCity: string;
  image: string;
  badge?: string;
  makkahHotel: {
    name: string;
    distance: string;
    rating: string;
  };
  madinahHotel: {
    name: string;
    distance: string;
    rating: string;
  };
  roomArrangements: string[];
  flightInfo: string;
  foodArrangements: string;
  transport: string;
  ziyarat: string;
  inclusions: string[];
  exclusions: string[];
  bookingTerms: string[];
  status: 'Draft Quotation — Subject to Confirmation';
}

export interface ZiyaratPlace {
  id: string;
  name: string;
  arabicName?: string;
  city: 'Makkah' | 'Madinah';
  shortDescription: string;
  historicalSignificance: string;
  image: string;
  locationHint: string;
}

export interface HotelData {
  id: string;
  name: string;
  city: 'Makkah' | 'Madinah';
  category: 'Hotel Exterior' | 'Reception & Lobby' | 'Guest Rooms' | 'Twin, Triple & Quad Rooms' | 'Bathrooms' | 'Dining Facilities';
  distanceFromHaram: string;
  roomTypes: string[];
  facilities: string[];
  image: string;
  packageNote: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All Photos' | 'Makkah' | 'Madinah' | 'Umrah & Pilgrims' | 'Makkah Ziyarat' | 'Madinah Ziyarat' | 'Hotels & Rooms' | 'Hotel Facilities' | 'Flights & Travel';
  location: string;
  image: string;
  caption: string;
}

export const SITE_INFO = {
  brandName: 'Imaad International Tours & Travels',
  shortName: 'Imaad Travels',
  tagline: 'Your Sacred Journey, Beautifully Planned.',
  subTagline: 'Umrah Packages • Comfortable Hotels • Makkah & Madinah Ziyarat',
  logoUrl: '/assets/aistudio/image_c5599e2f.png',
  phonePrimary: '+91 79891 15941',
  phoneSecondary: '+91 91000 07815',
  phonePrimaryRaw: '917989115941',
  phoneSecondaryRaw: '919100007815',
  email: 'imaadinternationaltravels@gmail.com',
  website: 'https://imaadinternationaltravels.com/',
  address: '18-13-8/75/1, Rahmath Nagar, beside Pista House, Bandlaguda, Hyderabad, Telangana 500005',
  operatingHours: 'Monday – Saturday: 10:00 AM – 9:00 PM (IST) | Sunday by Appointment',
  googleMapsUrl: 'https://maps.google.com/?q=Bandlaguda+Hyderabad+Pista+House',
};

export const getWhatsAppUrl = (message?: string) => {
  const defaultMsg = 'Assalamu Alaikum. I would like to know more about Imaad International Tours & Travels. Please share the available Umrah packages, departure dates, hotel details, package inclusions, and final price.';
  const encoded = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${SITE_INFO.phonePrimaryRaw}?text=${encoded}`;
};

export const QUICK_SERVICES = [
  {
    id: 'umrah-packages',
    title: 'Umrah Packages',
    tagline: 'All-inclusive packages from Hyderabad with verified hotel stays and guidance.',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    link: '#packages',
    view: 'packages',
  },
  {
    id: 'makkah-ziyarat',
    title: 'Makkah Ziyarat',
    tagline: 'Guided visits to Ghār-e-Thawr, Jabal al-Nour, Arafat, Mina, and sacred historical sites.',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    link: '#makkah-ziyarat',
    view: 'makkah-ziyarat',
  },
  {
    id: 'madinah-ziyarat',
    title: 'Madinah Ziyarat',
    tagline: 'Visits to Masjid Quba, Mount Uhud, Masjid al-Qiblatayn, and the sacred spots of Madinah.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    link: '#madinah-ziyarat',
    view: 'madinah-ziyarat',
  },
  {
    id: 'hotels',
    title: 'Hotels & Accommodation',
    tagline: 'Close-to-Haram hotels in Makkah & Madinah with Quad, Triple, and Twin arrangements.',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    link: '#hotels',
    view: 'hotels',
  },
  {
    id: 'flights',
    title: 'Flight Reservations',
    tagline: 'Coordination of direct and connecting flights from Rajiv Gandhi International Airport (HYD).',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    link: '#contact',
    view: 'contact',
  },
  {
    id: 'travel-assistance',
    title: 'Travel Assistance',
    tagline: 'Complete visa documentation support, 5-litre Zamzam arrangements, and 24/7 helpline.',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80',
    link: '#contact',
    view: 'contact',
  },
];

export const UMRAH_PACKAGES: UmrahPackage[] = [
  {
    id: 'basic-package',
    name: 'Basic Umrah Package',
    tier: 'Basic',
    price: '₹79,000',
    priceNote: 'Draft price per person (Quad sharing). Subject to written business confirmation.',
    duration: '15 Days / 14 Nights',
    departureCity: 'Hyderabad (RGIA)',
    badge: 'Value Essential',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=900&q=80',
    makkahHotel: {
      name: 'Economy Standard Hotel or Similar',
      distance: 'Approx. 850m – 950m from Masjid al-Haram (with 24/7 Shuttle Service)',
      rating: '3-Star Economy',
    },
    madinahHotel: {
      name: 'Madinah Central Economy Hotel',
      distance: 'Approx. 400m – 500m from Masjid an-Nabawi Courtyard',
      rating: '3-Star Standard',
    },
    roomArrangements: ['Quad Sharing (4 beds)', 'Triple Sharing (+₹6,000/person)', 'Twin Sharing (+₹12,000/person)'],
    flightInfo: 'Scheduled return flights from Hyderabad (Connecting flight via Gulf hub). Exact carrier specified in written quotation.',
    foodArrangements: 'Indian / Hyderabadi buffet meals served 3 times daily (Breakfast, Lunch, Dinner).',
    transport: 'Air-conditioned luxury coach transfers: Jeddah Airport → Makkah → Madinah → Airport.',
    ziyarat: 'Scheduled group Ziyarat in Makkah (Cave of Thawr, Arafat, Mina) and Madinah (Masjid Quba, Mount Uhud).',
    inclusions: [
      'Return airfare from Hyderabad (economy class)',
      'Umrah Visa processing assistance & insurance',
      'Hotel accommodation in Makkah (8 Nights) & Madinah (6 Nights)',
      'Daily 3-time Indian meals',
      'AC bus transportation for all scheduled legs',
      'Makkah and Madinah guided Ziyarat tours',
      'Free 5-Litre Zamzam canister (subject to airline rules)',
      'Local ground coordinator assistance in Makkah & Madinah',
    ],
    exclusions: [
      'Personal laundry, room service, and extra snacks',
      'Excess baggage charges imposed by airlines',
      'Individual private taxi travel outside group itinerary',
      'Wheelchair assistance inside Haram',
      'GST & TCS as applicable per Government of India guidelines',
    ],
    bookingTerms: [
      'Draft price is indicative and requires confirmation against current flight & forex rates.',
      'Passport must have at least 6 months validity from departure date.',
      'Advance deposit required to initiate visa filing and seat block.',
    ],
    status: 'Draft Quotation — Subject to Confirmation',
  },
  {
    id: 'standard-package',
    name: 'Standard Umrah Package',
    tier: 'Standard',
    price: '₹95,000',
    priceNote: 'Draft price per person (Quad sharing). Most popular choice for families.',
    duration: '15 Days / 14 Nights',
    departureCity: 'Hyderabad (RGIA)',
    badge: 'Most Popular',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=900&q=80',
    makkahHotel: {
      name: 'Makkah Comfort Hotel (Ibrahim Khalil Road / Ajyad)',
      distance: 'Approx. 400m – 500m walking distance to Masjid al-Haram',
      rating: '4-Star Comfort',
    },
    madinahHotel: {
      name: 'Madinah Markaziyyah Hotel',
      distance: 'Approx. 250m – 300m walking distance to Gate 338/25',
      rating: '4-Star Comfort',
    },
    roomArrangements: ['Quad Sharing (4 beds)', 'Triple Sharing (+₹8,000/person)', 'Twin Sharing (+₹16,000/person)'],
    flightInfo: 'Direct or 1-stop premium carrier from Hyderabad (e.g., Saudia, Air India, or Emirates/Flydubai).',
    foodArrangements: 'Freshly prepared Hyderabadi buffet (Breakfast, Lunch & Dinner) with tea service.',
    transport: 'Modern AC coach with dedicated luggage van between Makkah & Madinah.',
    ziyarat: 'Comprehensive guided Ziyarat in both holy cities with experienced Urdu/Hindi speaking guide.',
    inclusions: [
      'Return flight ticket from Hyderabad',
      'Umrah visa and health insurance cover',
      'Prime location accommodation (400m in Makkah, 250m in Madinah)',
      'Full-board Hyderabadi catering daily',
      'Inter-city AC luxury transfers',
      'Complete Ziyarat in Makkah & Madinah',
      'Complimentary Zamzam 5L water container',
      'Travel kit including sling bag and guide booklet',
    ],
    exclusions: [
      'Special room view upgrades (Kaaba / Haram view)',
      'Any personal medical expenses outside insurance scope',
      'Room service, telephone charges, and laundry',
      'Any optional additional Ziyarat trips',
    ],
    bookingTerms: [
      'Confirmation provided with confirmed flight PNR and hotel vouchers.',
      'Payment schedule: 50% advance at booking, balance 15 days before flight.',
      'Prices subject to currency fluctuation until final billing.',
    ],
    status: 'Draft Quotation — Subject to Confirmation',
  },
  {
    id: 'deluxe-package',
    name: 'Deluxe Umrah Package',
    tier: 'Deluxe',
    price: '₹1,10,000',
    priceNote: 'Draft price per person (Quad sharing). Premium luxury & walking proximity.',
    duration: '15 Days / 14 Nights',
    departureCity: 'Hyderabad (RGIA)',
    badge: 'Luxury Experience',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=900&q=80',
    makkahHotel: {
      name: '5-Star Clock Tower or Abraj Al Bait Complex / Ajyad',
      distance: 'Under 100m – 150m directly on Haram Courtyard',
      rating: '5-Star Luxury',
    },
    madinahHotel: {
      name: '5-Star Northern Markaziyyah Hotel',
      distance: 'Under 100m from Masjid an-Nabawi ladies & gents entrances',
      rating: '5-Star Luxury',
    },
    roomArrangements: ['Quad Sharing', 'Triple Sharing (+₹12,000/person)', 'Twin / Double Room (+₹22,000/person)'],
    flightInfo: 'Premium airline direct or prime schedule from Hyderabad.',
    foodArrangements: '5-star hotel international & Indian buffet breakfast included, plus arranged lunch & dinner.',
    transport: 'VIP high-comfort coach or optional private GMC / HiAce transfer on request.',
    ziyarat: 'Extended historic Ziyarat tour including Mount of Light, Cave of Thawr, Masjid al-Ji\'ranah, and Madinah landmarks.',
    inclusions: [
      'Direct or premium return flights from Hyderabad',
      'VIP Umrah Visa processing & expedited clearance',
      '5-Star hotels steps away from both Holy Mosques',
      'Full catering with gourmet Indian & continental options',
      'Dedicated group leader and 24-hour Hyderabad & Saudi liaison',
      'Extensive Ziyarat with private scholar narration',
      '5L Zamzam package and executive travel accessories',
      'Porter service at hotels',
    ],
    exclusions: [
      'Haram-facing room guarantee supplement (available on request)',
      'Private personal car for shopping trips',
      'Items of a personal nature',
    ],
    bookingTerms: [
      'Passport copy and initial booking token required for immediate reservation.',
      'Hotel rooms subject to availability during high season and Ramadan.',
      'Full written quotation provided prior to any deposit collection.',
    ],
    status: 'Draft Quotation — Subject to Confirmation',
  },
];

export const MAKKAH_ZIYARAT: ZiyaratPlace[] = [
  {
    id: 'ghar-e-thawr',
    name: 'Ghār-e-Thawr (Cave of Thawr)',
    arabicName: 'غار ثور',
    city: 'Makkah',
    shortDescription: 'The sacred mountain cave where Prophet Muhammad (PBUH) and Abu Bakr (RA) took refuge during the Hijrah to Madinah.',
    historicalSignificance: 'Located on Mount Thawr south of Makkah. It stands as an enduring symbol of divine protection, where a spider spun its web and doves nested at the entrance.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 4 km south of Masjid al-Haram',
  },
  {
    id: 'arafat-nimrah',
    name: 'Arafat & Masjid an-Nimrah',
    arabicName: 'صعيد عرفات ومسجد نمرة',
    city: 'Makkah',
    shortDescription: 'The grand plain where the central pillar of Hajj takes place and the historical mosque where the Farewell Sermon was delivered.',
    historicalSignificance: 'Arafat is the station of profound supplication and divine forgiveness. Masjid an-Nimrah stands where the Prophet (PBUH) camped and delivered the historic sermon.',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 20 km east of Makkah',
  },
  {
    id: 'jabal-al-rahmah',
    name: 'Jabal al-Rahmah (Mount of Mercy)',
    arabicName: 'جبل الرحمة',
    city: 'Makkah',
    shortDescription: 'The granite hill on the plains of Arafat where pilgrims gather in earnest prayer and repentance.',
    historicalSignificance: 'Prophet Muhammad (PBUH) stood at this mount during his Farewell Pilgrimage, making heartfelt du\'as that echo through generations.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Situated on the eastern edge of the Arafat plain',
  },
  {
    id: 'nahr-zubaydah',
    name: 'Nahr Zubaydah (Historical Water Channel)',
    arabicName: 'عين زبيدة',
    city: 'Makkah',
    shortDescription: 'Historic stone aqueduct system constructed in the Abbasid era to supply pure mountain water to pilgrims.',
    historicalSignificance: 'Commissioned by Empress Zubaydah bint Ja\'far in the 9th century, this engineering marvel quenched the thirst of pilgrims across Makkah, Mina, and Arafat for over a millennium.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Visible along the pilgrimage route connecting Arafat and Mina',
  },
  {
    id: 'muzdalifah',
    name: 'Muzdalifah & Mash\'ar al-Haram',
    arabicName: 'مزدلفة والمشعر الحرام',
    city: 'Makkah',
    shortDescription: 'The sacred open ground between Arafat and Mina where pilgrims spend the night under the open sky and gather pebbles.',
    historicalSignificance: 'Explicitly mentioned in the Holy Quran (Surah Al-Baqarah 2:198): "Remember Allah at Mash\'ar al-Haram." A place of unity, humility, and night prayer.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Between Mina and the Plain of Arafat',
  },
  {
    id: 'mina',
    name: 'Mina (The Tent City)',
    arabicName: 'مِنى',
    city: 'Makkah',
    shortDescription: 'The sprawling valley of white climate-controlled tents where pilgrims reside during the Days of Tashreeq.',
    historicalSignificance: 'Where Prophet Ibrahim (AS) camped and demonstrated absolute obedience to the Divine Creator. It marks the focal point of the stoning rituals and sacrifice.',
    image: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 7 km east of the Grand Mosque',
  },
  {
    id: 'sacrifice-site-ismail',
    name: 'Historical Site of Intended Sacrifice',
    arabicName: 'موقع فداء إسماعيل عليه السلام',
    city: 'Makkah',
    shortDescription: 'The honored valley in Mina historically associated with Prophet Ibrahim\'s willingness to sacrifice his son Ismail (AS).',
    historicalSignificance: 'Commemorates the great trial of faith and surrender when Allah replaced Ismail with a noble sacrifice, giving origin to the festival of Eid al-Adha.',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Located within the historic confines of Mina',
  },
  {
    id: 'jamarat',
    name: 'Jamarat (The Three Pillars Complex)',
    arabicName: 'الجمرات',
    city: 'Makkah',
    shortDescription: 'The modern multi-level pedestrian bridge facility where pilgrims perform Ramy al-Jamarat (stoning the symbolic pillars).',
    historicalSignificance: 'Represents Prophet Ibrahim\'s rejection of the whispered temptations of Shaytan at three specific locations during his sacred journey.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Central western Mina Valley',
  },
  {
    id: 'jabal-al-nour',
    name: 'Jabal al-Nour & Ghār-e-Hira (Mount of Light)',
    arabicName: 'جبل النور وغار حراء',
    city: 'Makkah',
    shortDescription: 'The revered mountain peak housing Cave Hira, where the first verses of the Holy Quran were revealed through Angel Jibreel.',
    historicalSignificance: 'Where the Prophet (PBUH) spent periods in solitary meditation before receiving the timeless divine command: "Iqra!" (Read! In the name of your Lord who created).',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 5 km northeast of Masjid al-Haram',
  },
  {
    id: 'jannat-al-mualla',
    name: 'Jannat al-Mu\'alla (Al-Hajun Cemetery)',
    arabicName: 'جنة المعلاة',
    city: 'Makkah',
    shortDescription: 'The ancient historic cemetery of Makkah where beloved relatives and ancestors of Prophet Muhammad (PBUH) are buried.',
    historicalSignificance: 'Resting place of Mother of the Believers Sayyidatina Khadijah (RA), the Prophet\'s grandfather Abdul Muttalib, uncle Abu Talib, and revered companions.',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 1.5 km north of Masjid al-Haram near Al-Hujun',
  },
  {
    id: 'masjid-al-jinn',
    name: 'Masjid al-Jinn (Mosque of the Haras)',
    arabicName: 'مسجد الجن',
    city: 'Makkah',
    shortDescription: 'The historical mosque where a group of Jinn gathered to hear the Prophet (PBUH) recite the Holy Quran and embraced faith.',
    historicalSignificance: 'Associated with the revelation of Surah Al-Jinn (Surah 72). A quiet, preserved mosque visited by seekers of Islamic heritage.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Located near Jannat al-Mu\'alla on the road leading from the Haram',
  },
  {
    id: 'masjid-al-khayf',
    name: 'Masjid al-Khayf (Mina Mosque)',
    arabicName: 'مسجد الخيف',
    city: 'Makkah',
    shortDescription: 'The grand mosque at the base of the southern mountain in Mina where seventy previous prophets are recorded to have prayed.',
    historicalSignificance: 'The Prophet (PBUH) prayed here during the days of Hajj. Today it features expansive air-conditioned prayer halls and soaring minarets.',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Situated at the foot of Mount Mina near the Jamarat bridge',
  },
];

export const MADINAH_ZIYARAT: ZiyaratPlace[] = [
  {
    id: 'masjid-an-nabawi',
    name: 'Masjid an-Nabawi & The Sacred Rawdah',
    arabicName: 'المسجد النبوي والروضة الشريفة',
    city: 'Madinah',
    shortDescription: 'The Prophet’s Mosque, the heart of the illuminated city of Madinah, housing the Sacred Chamber and the Rawdah ash-Sharifah.',
    historicalSignificance: 'The Prophet (PBUH) stated: "Between my house and my pulpit is a garden from the gardens of Paradise." One prayer in this mosque equals one thousand prayers elsewhere.',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Center of Madinah al-Munawwarah',
  },
  {
    id: 'masjid-quba',
    name: 'Masjid Quba (First Mosque in Islam)',
    arabicName: 'مسجد قباء',
    city: 'Madinah',
    shortDescription: 'The first mosque constructed by Prophet Muhammad (PBUH) upon arrival in Madinah during the Hijrah.',
    historicalSignificance: 'Whoever purifies themselves in their house and comes to Masjid Quba and offers two rak\'ahs will receive the reward of an Umrah (Sunan Ibn Majah).',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 3.5 km south of Masjid an-Nabawi',
  },
  {
    id: 'masjid-al-qiblatayn',
    name: 'Masjid al-Qiblatayn (Mosque of the Two Qiblas)',
    arabicName: 'مسجد القبلتين',
    city: 'Madinah',
    shortDescription: 'The historic mosque where the divine order arrived to redirect the direction of prayer from Jerusalem (Bayt al-Maqdis) to the Kaaba in Makkah.',
    historicalSignificance: 'Revealed in Surah Al-Baqarah (2:144): "So turn your face toward al-Masjid al-Haram." The congregation turned 180 degrees mid-prayer in obedience.',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Northwestern area of Madinah along Khalid bin al-Walid road',
  },
  {
    id: 'mount-uhud',
    name: 'Mount Uhud & Shuhada Uhud (Martyrs’ Graveyard)',
    arabicName: 'جبل أحد ومقبرة شهداء أحد',
    city: 'Madinah',
    shortDescription: 'The legendary mountain that "loves us and we love it", site of the historic Battle of Uhud and resting place of Sayyidush Shuhada Hamza (RA).',
    historicalSignificance: 'Prophet Muhammad (PBUH) frequently visited to send greetings of peace to the 70 martyrs who gave their lives in defense of the fledgling Islamic community.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Approx. 5 km north of Masjid an-Nabawi',
  },
  {
    id: 'seven-mosques-khandaq',
    name: 'The Seven Mosques (Site of the Trench / Khandaq)',
    arabicName: 'المساجد السبعة',
    city: 'Madinah',
    shortDescription: 'A cluster of small historic mosques situated on the western slope of Mount Sela where the Muslim defenders dug the trench in the Battle of the Ahzab.',
    historicalSignificance: 'Marks the command posts of the Prophet (PBUH) and key companions, including Masjid al-Fath where the divine promise of victory was delivered.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=800&q=80',
    locationHint: 'West of Mount Sela in Madinah',
  },
  {
    id: 'date-gardens-madinah',
    name: 'Historic Date Palm Gardens of Madinah',
    arabicName: 'مزارع نخيل المدينة',
    city: 'Madinah',
    shortDescription: 'Lush traditional orchards in the oasis outskirts of Madinah producing authentic Ajwa, Safawi, and Amber dates.',
    historicalSignificance: 'The Prophet (PBUH) praised the Ajwa date of Madinah: "Whoever takes seven Ajwa dates in the morning will not be harmed by poison or sorcery that day" (Sahih Bukhari).',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80',
    locationHint: 'Surrounding agricultural oases of Awali and Quba',
  },
];

export const JIRANAH_SERVICE = {
  title: "Umrah from Masjid al-Ji'ranah",
  subtitle: 'Sacred Miqat Travel Assistance & AC Transport Arrangement',
  verifiedSpellingNote: 'Historically noted in subcontinent tradition as Masjid-e-Johrana; correctly verified as Masjid al-Ji\'ranah (مسجد الجعرانة).',
  description: 'Masjid al-Ji\'ranah is one of the revered historical Miqat stations situated northeast of Makkah. It is the blessed location where the Prophet Muhammad (PBUH) entered into the state of Ihram and performed Umrah following the siege of Ta\'if and the distribution of the spoils of Hunayn.',
  servicesArranged: [
    'Private air-conditioned vehicle or group coach pickup from your Makkah hotel',
    'Accompanied transport to Masjid al-Ji\'ranah for Ihram prayer and intention (Niyyah)',
    'Comfortable return journey to Masjid al-Haram to complete Tawaf and Sa\'i',
    'Flexible morning and late-night departure timings to avoid peak sun and crowd hours',
    'Experienced driver knowledgeable with local entry checkpoints and route permits',
  ],
  guidanceNote: 'Pilgrims intending to perform an additional Umrah should ensure they are familiar with the conditions of Ihram and relevant Fiqh rulings as advised by certified scholars.',
  ctaText: 'Enquire for Ji\'ranah Private Cab',
};

export const HOTELS_DATA: HotelData[] = [
  {
    id: 'h1',
    name: 'Clock Tower Luxury Suites (Abraj Al Bait)',
    city: 'Makkah',
    category: 'Hotel Exterior',
    distanceFromHaram: '0 – 50 meters (Direct elevator access to Haram Piazza)',
    roomTypes: ['City View King', 'Haram View Deluxe Twin', 'Quad Family Suite'],
    facilities: ['24/7 Room Dining', 'High-Speed Wi-Fi', 'Prayer Hall overlooking Kaaba', 'Direct Mall Access'],
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Included in Deluxe Umrah Package or available as custom upgrade.',
  },
  {
    id: 'h2',
    name: 'Ajyad Walkway Premium Hotel',
    city: 'Makkah',
    category: 'Reception & Lobby',
    distanceFromHaram: 'Approx. 350m – 450m from King Abdulaziz Gate',
    roomTypes: ['Double Bed', 'Triple Bed', 'Quad Sharing Room'],
    facilities: ['Spacious Marble Lobby', 'Express Check-in', 'Multiple Passenger Lifts', 'Hot & Cold Water'],
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Primary contracted hotel for Standard Umrah Package.',
  },
  {
    id: 'h3',
    name: 'Ibrahim Khalil Road Standard Hotel',
    city: 'Makkah',
    category: 'Guest Rooms',
    distanceFromHaram: 'Approx. 850m from Masjid al-Haram with round-the-clock shuttle',
    roomTypes: ['Quad Room with Attached Bath', 'Family Quintuple Room'],
    facilities: ['Air Conditioning', 'Flat-Screen TV', 'Electric Kettle & Tea Set', 'Clean Linen Service'],
    image: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Featured in Basic Umrah Package.',
  },
  {
    id: 'h4',
    name: 'Madinah Markaziyyah Northern Hotel',
    city: 'Madinah',
    category: 'Twin, Triple & Quad Rooms',
    distanceFromHaram: 'Approx. 150m – 200m to Masjid an-Nabawi Courtyard',
    roomTypes: ['Executive Twin', 'Standard Triple', 'Quad Sharing'],
    facilities: ['Direct view of Minarets', 'Arabic & Indian Dining Hall', 'Wi-Fi throughout', 'Soundproof Windows'],
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Contracted for Standard and Deluxe packages in Madinah.',
  },
  {
    id: 'h5',
    name: 'Modern Ensuite Bathrooms & Hygiene',
    city: 'Makkah',
    category: 'Bathrooms',
    distanceFromHaram: 'All partner properties',
    roomTypes: ['Private Attached Ensuite'],
    facilities: ['Hot Water Geyser 24/7', 'Modern Sanitary Fittings', 'Hand Shower / Bidet Spray', 'Complimentary Toiletries'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Standardized clean hygiene check across all contracted tiers.',
  },
  {
    id: 'h6',
    name: 'Dedicated Indian / Hyderabadi Dining Hall',
    city: 'Madinah',
    category: 'Dining Facilities',
    distanceFromHaram: 'In-hotel or private adjacent catering hall',
    roomTypes: ['Buffet Style Dining'],
    facilities: ['Hyderabadi Bagara & Biryani Specials', 'Roti, Dal, Sabzi & Chicken/Mutton', 'Breakfast with Chai'],
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    packageNote: 'Fresh hot meals prepared under hygienic supervision daily.',
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g1',
    title: 'The Holy Kaaba at Twilight',
    category: 'Makkah',
    location: 'Masjid al-Haram, Makkah',
    image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?auto=format&fit=crop&w=1000&q=80',
    caption: 'Serene evening ambiance in the Mataf courtyard during Tawaf.',
  },
  {
    id: 'g2',
    title: 'Prophet’s Mosque Green Dome & Courtyard',
    category: 'Madinah',
    location: 'Masjid an-Nabawi, Madinah',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1000&q=80',
    caption: 'Architectural marvel of the kinetic umbrellas and minarets in Madinah.',
  },
  {
    id: 'g3',
    title: 'Pilgrims in Unified White Ihram',
    category: 'Umrah & Pilgrims',
    location: 'Mataf, Makkah al-Mukarramah',
    image: 'https://images.unsplash.com/photo-1564769625905-50e93615e769?auto=format&fit=crop&w=1000&q=80',
    caption: 'Moments of deep devotion, prayer, and supplication before the House of Allah.',
  },
  {
    id: 'g4',
    title: 'Historic Mount Uhud at Sunrise',
    category: 'Madinah Ziyarat',
    location: 'Mount Uhud, Madinah',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    caption: 'The majestic red mountain of Uhud standing against the desert morning sky.',
  },
  {
    id: 'g5',
    title: 'Jabal al-Nour & The Ascent to Hira',
    category: 'Makkah Ziyarat',
    location: 'Jabal al-Nour, Makkah',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
    caption: 'Rugged terrain leading to the birthplace of Quranic revelation.',
  },
  {
    id: 'g6',
    title: 'Masjid Quba Exterior & Palms',
    category: 'Madinah Ziyarat',
    location: 'Quba, Madinah al-Munawwarah',
    image: 'https://images.unsplash.com/photo-1565552645632-d725f8bfc19a?auto=format&fit=crop&w=1000&q=80',
    caption: 'The tranquil white stone minarets and courtyards of the first mosque in Islam.',
  },
  {
    id: 'g7',
    title: 'Luxury Hotel Room Overlooking City',
    category: 'Hotels & Rooms',
    location: 'Abraj Complex, Makkah',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80',
    caption: 'Comfortable family room accommodations with modern amenities.',
  },
  {
    id: 'g8',
    title: 'Hygienic Dining & Hyderabadi Meal Setup',
    category: 'Hotel Facilities',
    location: 'Partner Hotel Restaurant, Madinah',
    image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1000&q=80',
    caption: 'Clean buffet arrangements offering familiar homestyle Indian dishes.',
  },
  {
    id: 'g9',
    title: 'Flight Boarding & Airport Assistance',
    category: 'Flights & Travel',
    location: 'Hyderabad RGIA / Jeddah Airport',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
    caption: 'Smooth airport check-in support and coordinated luggage handling.',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personal Travel Assistance',
    description: 'Direct guidance from our Hyderabad team and on-ground Saudi coordinators throughout your entire journey.',
    iconName: 'UserCheck',
  },
  {
    title: 'Clear Package Information',
    description: 'Honest itemized costs with zero hidden charges. We verify distances, meal plans, and flight schedules in writing.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Hotel & Flight Coordination',
    description: 'Contracted hotels within verified walking distances and reliable flight routing from Hyderabad RGIA.',
    iconName: 'Hotel',
  },
  {
    title: 'Complete Ziyarat Arrangements',
    description: 'Curated historic visits in Makkah and Madinah with experienced, respectful Urdu-speaking guides.',
    iconName: 'Compass',
  },
  {
    title: 'Visa & Documentation Support',
    description: 'Step-by-step assistance with Umrah e-visas, medical insurance, and mandatory travel permits.',
    iconName: 'FileCheck',
  },
  {
    title: '24/7 Dedicated Helpline',
    description: 'Around-the-clock availability for family back home in Hyderabad and pilgrims on the ground.',
    iconName: 'Headphones',
  },
];
