export interface LegalPolicy {
  id: string;
  title: string;
  lastUpdated: string;
  summary: string;
  sections: {
    heading: string;
    content: string[];
  }[];
}

export const LEGAL_POLICIES: Record<string, LegalPolicy> = {
  'privacy-policy': {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'October 2026',
    summary: 'This Privacy Policy explains how Imaad International Tours & Travels collects, protects, uses, and handles customer personal and travel document information in compliance with applicable Indian data protection laws.',
    sections: [
      {
        heading: '1. Company Identity & Contact Details',
        content: [
          'This Privacy Policy applies to Imaad International Tours & Travels ("we", "us", or "our"), having our registered office located at 18-13-8/75/1, Rahmath Nagar, beside Pista House, Bandlaguda, Hyderabad, Telangana 500005, India.',
          'For any questions or privacy inquiries, contact us via email at imaadinternationaltravels@gmail.com or by telephone at +91 79891 15941 / +91 91000 07815.',
        ],
      },
      {
        heading: '2. Personal Information Collected',
        content: [
          'We collect only information reasonably required to fulfill pilgrimage travel arrangements, including: full legal name (as per passport), date of birth, gender, nationality, passport number and expiry date, photograph, contact numbers, email address, residential address, emergency contact details, and dietary or mobility preferences.',
          'We do not collect unnecessary sensitive biometric information or sensitive personal financial passwords.',
        ],
      },
      {
        heading: '3. Purpose of Processing & Use',
        content: [
          'Personal details are processed exclusively to: prepare personalized travel quotations, issue airline tickets, apply for Umrah e-visas and health insurance through authorized Saudi Ministry platforms, secure hotel accommodations in Makkah and Madinah, coordinate ground transportation, and maintain mandatory safety manifests.',
        ],
      },
      {
        heading: '4. Handling of Passport and Travel Documentation',
        content: [
          'Scanned copies of passports, photographs, and identity cards provided by customers are stored in restricted-access electronic repositories and used solely by authorized travel coordinators.',
          'We never expose, publish, or share passport numbers, personal phone numbers, or pilgrim rosters publicly on our website or marketing channels.',
        ],
      },
      {
        heading: '5. Information Sharing with Authorized Partners',
        content: [
          'To execute your pilgrimage, necessary data is shared strictly with: scheduled airlines for ticket issuance, contracted hotel operators in the Kingdom of Saudi Arabia, licensed Saudi Umrah service companies, transport logistics providers, and regulatory authorities as required by Indian and Saudi law.',
          'We do not sell, rent, or trade your personal data to third-party telemarketers or external advertisers.',
        ],
      },
      {
        heading: '6. Data Retention and Security Safeguards',
        content: [
          'Customer travel documentation is retained only for the duration necessary to satisfy tax, audit, regulatory compliance, and dispute resolution obligations, after which digital copies are securely purged.',
          'Physical and electronic safeguards are maintained to protect customer information against unauthorized access, loss, or alteration.',
        ],
      },
      {
        heading: '7. Cookies and Digital Inquiries',
        content: [
          'Our website utilizes minimal technical cookies essential for site navigation, form submission security, and user experience. We do not employ intrusive tracking cookies without clear transparency.',
        ],
      },
      {
        heading: '8. Customer Rights & Inquiries',
        content: [
          'Customers may request verification, correction, or deletion of their contact information on file, subject to legal and regulatory records retention requirements. Requests can be submitted directly in writing to imaadinternationaltravels@gmail.com.',
        ],
      },
    ],
  },
  'terms-and-conditions': {
    id: 'terms-and-conditions',
    title: 'Terms & Conditions',
    lastUpdated: 'October 2026',
    summary: 'These Terms & Conditions govern travel bookings, quotation validity, customer obligations, and operational policies for pilgrimage packages organized by Imaad International Tours & Travels.',
    sections: [
      {
        heading: '1. Acceptance of Terms',
        content: [
          'By inquiring, reserving, or confirming a pilgrimage package with Imaad International Tours & Travels, the customer ("Pilgrim") accepts and agrees to be bound by these Terms & Conditions in conjunction with the specific written quotation provided.',
        ],
      },
      {
        heading: '2. Package Pricing & Quotation Validity',
        content: [
          'All published package rates on the website (e.g., Basic at ₹79,000, Standard at ₹95,000, Deluxe at ₹1,10,000) represent draft indicative estimates based on double/triple/quad sharing arrangements.',
          'Prices are subject to final reconfirmation at the time of booking based on real-time airline fare tariffs, hotel seasonal surcharges (especially Ramadan and high seasons), and foreign exchange (SAR/INR) fluctuations. A booking becomes binding only upon issuance of our official written booking voucher.',
        ],
      },
      {
        heading: '3. Customer Travel Documents & Responsibilities',
        content: [
          'Each pilgrim must hold an original Indian passport with minimum 6 months validity from the date of departure, having at least two blank pages.',
          'Pilgrims are solely responsible for providing genuine documents. Imaad International Tours & Travels facilitates visa filing as an assistance provider but does not grant visas; visa issuance remains the exclusive sovereign discretion of the Ministry of Foreign Affairs of Saudi Arabia.',
        ],
      },
      {
        heading: '4. Flight Schedules & Airline Conditions',
        content: [
          'All air transport is subject to the conditions of carriage of the operating airline. Flight timings, transit stops, aircraft types, terminal gates, and baggage allowances are governed by the airline and subject to change due to air traffic control, weather, or operational requisites.',
        ],
      },
      {
        heading: '5. Hotel Accommodation & Room Sharing',
        content: [
          'Check-in and check-out timings conform strictly to Saudi hotel hospitality standards (customarily 4:00 PM check-in and 12:00 PM check-out).',
          'Hotel distances stated (e.g., 400m from Haram) are measured from the perimeter of the mosque courtyard. In the rare event of unexpected property maintenance, equivalent or higher standard accommodation will be arranged.',
        ],
      },
      {
        heading: '6. Ziyarat Itinerary & Site Regulations',
        content: [
          'Guided visits to historical sites in Makkah and Madinah are subject to local municipal traffic guidelines, security advisories, and weather conditions. Site access rules established by the Royal Commission for Makkah and Holy Sites prevail at all times.',
        ],
      },
      {
        heading: '7. Limitation of Liability & Force Majeure',
        content: [
          'Imaad International Tours & Travels acts as an organizer coordinating flights, hotels, and transportation. We are not liable for losses, delays, sickness, border closures, diplomatic regulations, acts of God, or force majeure events beyond our operational control.',
        ],
      },
      {
        heading: '8. Governing Law & Jurisdiction',
        content: [
          'These terms and all transactions are governed by the laws of India. Any legal proceedings or disputes shall be subject to the exclusive jurisdiction of the competent courts in Hyderabad, Telangana, India.',
        ],
      },
    ],
  },
  'cancellation-refund-policy': {
    id: 'cancellation-refund-policy',
    title: 'Cancellation & Refund Policy',
    lastUpdated: 'October 2026',
    summary: 'Transparent guidelines detailing the cancellation procedure, supplier deductions, and refund timelines for pilgrimage packages.',
    sections: [
      {
        heading: '1. Requesting a Cancellation',
        content: [
          'All cancellation requests must be communicated in writing via registered email to imaadinternationaltravels@gmail.com from the email address registered at the time of booking, or delivered in person at our Rahmath Nagar office.',
          'Verbal or telephone messages do not constitute valid notice for cancellation processing.',
        ],
      },
      {
        heading: '2. Supplier-Linked Charges',
        content: [
          'Because pilgrimage packages bundle third-party airline tickets, non-refundable hotel blocks, and government visa fees, refunds are strictly dependent on the actual recoverable amounts from each supplier:',
          '• Visa Fees: Once an Umrah e-visa is applied for or issued through the Saudi portal, government fees and processing charges are strictly non-refundable.',
          '• Airline Tickets: Airline cancellation charges, fare rules, and refund policies apply directly. Group promotional fares or charter tickets are often completely non-refundable.',
          '• Hotel Accommodations: Contracted peak season hotel reservations in Makkah and Madinah may carry 100% cancellation penalties if cancelled within 21 days of check-in.',
        ],
      },
      {
        heading: '3. Booking Change & Transfer Requests',
        content: [
          'Pilgrims requesting a date postponement or passenger substitution must submit the request at least 25 days before scheduled departure. Date alterations are subject to hotel availability, airline re-issuance penalties, and visa amendment regulations.',
        ],
      },
      {
        heading: '4. Refund Processing Timeline',
        content: [
          'Eligible refunds approved after deducting documented supplier cancellation fees will be processed within 14 to 21 working days via original banking channels (NEFT/RTGS/Cheque).',
          'Cash refunds are not issued. In the case of supplier-initiated schedule cancellations (such as airline route suspensions), we assist pilgrims in claiming full available credit notes or refunds from the provider.',
        ],
      },
      {
        heading: '5. Contact for Refund Inquiries',
        content: [
          'For billing and refund tracking, pilgrims may reach out to our accounts desk at +91 79891 15941 or write to imaadinternationaltravels@gmail.com with their booking reference number.',
        ],
      },
    ],
  },
  'booking-payment-policy': {
    id: 'booking-payment-policy',
    title: 'Booking & Payment Policy',
    lastUpdated: 'October 2026',
    summary: 'Clear step-by-step guidance on securing an Umrah package, accepted payment modes, transparent invoicing, and financial security precautions.',
    sections: [
      {
        heading: '1. Enquiry & Written Quotation Process',
        content: [
          'Step 1: The customer contacts Imaad International Tours & Travels via WhatsApp, phone, or our office to discuss preferred travel dates, family size, and hotel tier.',
          'Step 2: We issue an itemized, formal written quotation detailing departure airport, room sharing, hotel names, distances, flight details, meal inclusions, and total price.',
          'Step 3: Once approved, the booking token is initiated to secure flight seats and hotel rooms.',
        ],
      },
      {
        heading: '2. Payment Schedule & Milestones',
        content: [
          '• Advance Token: An initial deposit (typically 30% to 50% depending on package) is required at the time of booking to initiate ticket purchase and visa submission.',
          '• Final Settlement: Full cleared balance must be settled at least 15 days before departure date to release physical tickets, hotel vouchers, and visa documentation.',
          '• High Season / Ramadan: Early full payment may be required as dictated by Saudi hotel payment deadlines.',
        ],
      },
      {
        heading: '3. Accepted Payment Channels',
        content: [
          'Payments are accepted through verified official banking channels including RTGS, NEFT, IMPS, and official company UPI transfers into our designated business bank account.',
          'Official stamped receipts are provided for every payment received.',
        ],
      },
      {
        heading: '4. Critical Security & Anti-Fraud Notice',
        content: [
          'NEVER share your banking PIN, ATM card CVV, online banking passwords, or OTPs over WhatsApp, phone call, or email.',
          'Imaad International Tours & Travels staff will NEVER request your personal banking passwords or OTPs.',
          'All payments must be remitted strictly to verified company accounts as listed in our official written invoice.',
        ],
      },
      {
        heading: '5. Invoicing and Government Taxes',
        content: [
          'Every confirmed booking is accompanied by an official tax invoice. Applicable Goods and Services Tax (GST) and Tax Collected at Source (TCS) as mandated by the Government of India are clearly separated and itemized.',
        ],
      },
    ],
  },
  'disclaimer': {
    id: 'disclaimer',
    title: 'Website Disclaimer',
    lastUpdated: 'October 2026',
    summary: 'Important clarifications regarding illustrative photography, travel schedules, government entry requirements, and religious site accessibility.',
    sections: [
      {
        heading: '1. Illustrative Photography Notice',
        content: [
          'Photographs of the Holy Kaaba, Masjid al-Haram, Masjid an-Nabawi, and sacred Ziyarat mountains depicted on this website are high-definition authentic landscape images intended to represent the sacred spiritual destination.',
          'Hotel photographs display typical contracted property room categories; specific room layouts, furnishings, views, and floor allocations vary based on hotel inventory and booked room category.',
        ],
      },
      {
        heading: '2. Package Pricing and Indicative Figures',
        content: [
          'Rates displayed on this website (such as ₹79,000 for Basic, ₹95,000 for Standard, and ₹1,10,000 for Deluxe) are draft estimates provided for customer guidance. Definite pricing is determined at the moment of booking based on prevailing flight tariffs, seasonal hotel availability, and exchange rates.',
        ],
      },
      {
        heading: '3. Government Regulations & Site Accessibility',
        content: [
          'Access to the Holy Rawdah (Rawdah ash-Sharifah in Madinah) is governed by Nusuk platform booking permits mandated by the Saudi Ministry of Hajj and Umrah. While our team assists pilgrims with slot appointments, availability is governed by Saudi authorities.',
          'Local authorities may periodically restrict road access or timing to certain Ziyarat locations during intense weather or maintenance without prior notice.',
        ],
      },
      {
        heading: '4. Accuracy of Information',
        content: [
          'We make every reasonable effort to keep website data, contact numbers, and guidelines updated. However, airline baggage policies, airport terminals, and local Saudi regulations may change over time. Please confirm all details with our team at the time of your reservation.',
        ],
      },
    ],
  },
};
