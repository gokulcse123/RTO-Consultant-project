export const siteOrigin = 'https://www.ntcautoconsultant.in';
const text = (en, ta) => ({ en, ta });

export const homePage = {
  id: 'home', path: '/',
  title: 'NTC Auto Consultant | RTO Services & Insurance in Chennai',
  titleTa: 'NTC ஆட்டோ கன்சல்டன்ட் | சென்னை RTO சேவைகள் & இன்சூரன்ஸ்',
  description: 'NTC Auto Consultant helps with LLR, DL renewal, RC transfer and vehicle insurance in Chennai. Visit our Nanmangalam or Alandur branch. Call 75500 04226.',
};

export const servicePages = [
  {
    id: 'licence', path: '/llr-driving-licence/', kind: 'service',
    title: 'LLR & Driving Licence Assistance in Chennai | NTC Auto Consultant',
    description: 'Get help with LLR applications, driving test appointments and DL renewal in Chennai. Contact NTC Auto Consultant in Nanmangalam or Alandur.',
    label: text('LLR & Driving Licence', 'LLR & ஓட்டுநர் உரிமம்'),
    heading: text('LLR & Driving Licence Assistance in Chennai', 'சென்னையில் LLR & ஓட்டுநர் உரிம உதவி'),
    intro: text(
      'NTC Auto Consultant helps you prepare for a learner’s licence application, a driving test appointment or a driving licence renewal. Speak to G. Sathish at our Nanmangalam or Alandur branch to discuss the service you need and your current application stage.',
      'பழகுநர் உரிம விண்ணப்பம், ஓட்டுநர் தேர்வு முன்பதிவு மற்றும் ஓட்டுநர் உரிமப் புதுப்பிப்புக்கு NTC ஆட்டோ கன்சல்டன்ட் உதவுகிறது. உங்களுக்குத் தேவையான சேவை மற்றும் விண்ணப்ப நிலையை நன்மங்கலம் அல்லது ஆலந்தூர் கிளையில் G. சதீஷிடம் தெரிவிக்கலாம்.'
    ),
    sections: [
      {
        heading: text('Choose the licence service you need', 'உங்களுக்குத் தேவையான உரிமச் சேவை'),
        items: [
          text('New LLR: guidance on application details, document preparation and the next steps shown by the official portal.', 'புதிய LLR: விண்ணப்ப விவரங்கள், ஆவணத் தயாரிப்பு மற்றும் அரசு இணையதளத்தில் காட்டப்படும் அடுத்த கட்டங்களுக்கான வழிகாட்டுதல்.'),
          text('Driving licence: help understanding the application and test appointment process for your vehicle category.', 'ஓட்டுநர் உரிமம்: உங்கள் வாகன வகைக்கான விண்ணப்பம் மற்றும் தேர்வு முன்பதிவு செயல்முறையைப் புரிந்துகொள்ள உதவி.'),
          text('DL renewal: assistance reviewing your existing licence details and preparing the renewal application.', 'DL புதுப்பிப்பு: தற்போதைய உரிம விவரங்களைச் சரிபார்த்து புதுப்பிப்பு விண்ணப்பத்தைத் தயாரிக்க உதவி.'),
        ],
      },
      {
        heading: text('Prepare for your consultation', 'ஆலோசனைக்கு முன் தயாராகுங்கள்'),
        body: text('Tell us whether this is your first licence, a renewal or an application already in progress. Keep your existing licence or learner’s licence details, if applicable, and any application reference available. We can discuss the identity, address and other documents relevant to your request before you visit.', 'இது முதல் உரிம விண்ணப்பமா, புதுப்பிப்பா அல்லது ஏற்கெனவே தொடங்கிய விண்ணப்பமா என்பதைத் தெரிவிக்கவும். பொருந்தினால் தற்போதைய உரிமம் அல்லது LLR விவரங்கள் மற்றும் விண்ணப்ப எண்ணைத் தயாராக வைத்திருக்கவும். வருகைக்கு முன் உங்கள் சேவைக்குத் தேவையான அடையாளம், முகவரி மற்றும் பிற ஆவணங்கள் குறித்து பேசலாம்.'),
      },
      {
        heading: text('Applications and appointments', 'விண்ணப்பங்களும் முன்பதிவுகளும்'),
        body: text('Licence applications are handled through the official Sarathi service. The document list and any test or office visit depend on the selected service and the instructions for your application. NTC provides consultation and documentation support; licence approval and test outcomes are decided by the licensing authority. Contact us to discuss the work and charges for your case.', 'உரிம விண்ணப்பங்கள் அரசு சாரதி சேவை மூலம் கையாளப்படுகின்றன. ஆவணப் பட்டியல், தேர்வு அல்லது அலுவலக வருகை நீங்கள் தேர்ந்தெடுத்த சேவை மற்றும் விண்ணப்ப வழிமுறைகளைப் பொறுத்தது. NTC ஆலோசனை மற்றும் ஆவண உதவியை வழங்குகிறது; உரிம ஒப்புதல் மற்றும் தேர்வு முடிவுகளை உரிமம் வழங்கும் அலுவலகமே தீர்மானிக்கிறது. உங்கள் தேவைக்கான பணி மற்றும் கட்டணங்களை அறிய தொடர்புகொள்ளவும்.'),
      },
    ],
    officialLink: { href: 'https://sarathi.parivahan.gov.in/', label: text('Official Sarathi licence services', 'அரசு சாரதி உரிமச் சேவைகள்') },
  },
  {
    id: 'rc-transfer', path: '/rc-transfer/', kind: 'service',
    title: 'RC Name Transfer Assistance in Chennai | NTC Auto Consultant',
    description: 'RC ownership and name transfer assistance for bikes, cars and commercial vehicles in Chennai. Consult NTC at Nanmangalam or Alandur about your documents.',
    label: text('RC Transfer', 'RC பெயர் மாற்றம்'),
    heading: text('RC Ownership & Name Transfer Assistance in Chennai', 'சென்னையில் RC உரிமையாளர் & பெயர் மாற்ற உதவி'),
    intro: text('Buying or selling a used vehicle involves updating its registered ownership. NTC Auto Consultant helps customers in Chennai understand the RC transfer application and organise the supporting documents for bikes, cars and commercial vehicles.', 'பயன்படுத்தப்பட்ட வாகனத்தை வாங்கும்போது அல்லது விற்கும்போது பதிவு செய்யப்பட்ட உரிமையாளரின் விவரங்களை மாற்ற வேண்டும். சென்னையில் பைக், கார் மற்றும் வணிக வாகனங்களுக்கான RC பெயர் மாற்ற விண்ணப்பத்தையும் ஆவணத் தயாரிப்பையும் புரிந்துகொள்ள NTC ஆட்டோ கன்சல்டன்ட் உதவுகிறது.'),
    sections: [
      {
        heading: text('Tell us about the vehicle and transfer', 'வாகனம் மற்றும் பெயர் மாற்ற விவரங்கள்'),
        items: [
          text('Confirm whether you are the buyer or seller and where the vehicle is currently registered.', 'நீங்கள் வாங்குபவரா அல்லது விற்பவரா, வாகனம் தற்போது எங்கு பதிவு செய்யப்பட்டுள்ளது என்பதைத் தெரிவிக்கவும்.'),
          text('Mention any existing vehicle loan or hypothecation entry so we can discuss the related paperwork.', 'வாகனக் கடன் அல்லது hypothecation பதிவு இருந்தால் அதற்கான ஆவணங்கள் குறித்து பேச அதைத் தெரிவிக்கவும்.'),
          text('For a vehicle registered in another state, ask about the NOC and re-registration work relevant to your situation.', 'வேறு மாநிலத்தில் பதிவு செய்யப்பட்ட வாகனமாக இருந்தால் உங்கள் தேவைக்குப் பொருந்தும் NOC மற்றும் மறுபதிவு பணிகள் குறித்து கேட்கவும்.'),
        ],
      },
      {
        heading: text('Documents to discuss with our team', 'எங்கள் குழுவுடன் சரிபார்க்க வேண்டிய ஆவணங்கள்'),
        body: text('Keep the vehicle RC, insurance details and the buyer’s and seller’s information available for the initial discussion. The official transfer process includes prescribed forms and supporting documents; additional requirements can vary with the transfer type and registration location. We help you identify the applicable checklist instead of treating every transfer as the same case.', 'முதல் ஆலோசனைக்கு வாகன RC, இன்சூரன்ஸ் விவரங்கள், வாங்குபவர் மற்றும் விற்பவரின் விவரங்களைத் தயாராக வைத்திருக்கவும். அரசு பெயர் மாற்றச் செயல்முறையில் குறிப்பிட்ட படிவங்களும் ஆதார ஆவணங்களும் தேவைப்படும். பெயர் மாற்ற வகை மற்றும் பதிவு செய்யப்பட்ட இடத்தைப் பொறுத்து கூடுதல் தேவைகள் மாறலாம். உங்கள் தேவைக்குப் பொருந்தும் பட்டியலைக் கண்டறிய உதவுகிறோம்.'),
      },
      {
        heading: text('From document review to application follow-up', 'ஆவணச் சரிபார்ப்பிலிருந்து விண்ணப்பத் தொடர்ச்சி வரை'),
        body: text('Start with a call or a branch consultation. We can review the requested service, explain the preparation involved and discuss charges before proceeding. Keep your official application acknowledgement for follow-up. The registering authority processes the ownership change, so completion time depends on the application and any further checks requested by the RTO.', 'அழைப்பு அல்லது கிளை ஆலோசனையுடன் தொடங்கலாம். தேவையான சேவை, ஆவணத் தயாரிப்பு மற்றும் கட்டணங்களைப் பணியைத் தொடங்கும் முன் பேசலாம். தொடர்ந்த விசாரணைக்கு அரசு விண்ணப்ப ஒப்புகையை வைத்திருக்கவும். உரிமையாளர் மாற்றத்தைப் பதிவு அலுவலகம் செயல்படுத்துவதால், கால அளவு விண்ணப்பம் மற்றும் RTO கேட்கும் கூடுதல் சரிபார்ப்புகளைப் பொறுத்தது.'),
      },
    ],
    officialLink: { href: 'https://mparivahan.parivahan.gov.in/mstatic/english/rc-info-ownership.html', label: text('Official ownership transfer guidance', 'அரசு உரிமையாளர் மாற்ற வழிகாட்டுதல்') },
  },
  {
    id: 'insurance', path: '/motor-insurance/', kind: 'service',
    title: 'Motor Insurance Assistance in Chennai | NTC Auto Consultant',
    description: 'Ask NTC Auto Consultant about car, bike and commercial vehicle insurance quotes and renewals. Visit our Nanmangalam or Alandur branch in Chennai.',
    label: text('Motor Insurance', 'வாகன இன்சூரன்ஸ்'),
    heading: text('Car, Bike & Commercial Vehicle Insurance Assistance', 'கார், பைக் & வணிக வாகன இன்சூரன்ஸ் உதவி'),
    intro: text('NTC Auto Consultant helps vehicle owners in Chennai discuss motor insurance quotes and renewals. Contact our Nanmangalam or Alandur branch with your vehicle details and the cover you want to understand before choosing a policy.', 'சென்னையில் வாகன உரிமையாளர்கள் இன்சூரன்ஸ் கட்டண விவரங்கள் மற்றும் புதுப்பிப்பு குறித்து அறிய NTC ஆட்டோ கன்சல்டன்ட் உதவுகிறது. பாலிசியைத் தேர்வு செய்வதற்கு முன் உங்கள் வாகன விவரங்கள் மற்றும் தேவையான காப்பீடு குறித்து நன்மங்கலம் அல்லது ஆலந்தூர் கிளையைத் தொடர்புகொள்ளலாம்.'),
    sections: [
      {
        heading: text('Insurance enquiries we handle', 'நாங்கள் உதவும் இன்சூரன்ஸ் விசாரணைகள்'),
        items: [
          text('Cars: discuss a new policy or renewal and ask about the available cover for your vehicle.', 'கார்கள்: புதிய பாலிசி அல்லது புதுப்பிப்பு மற்றும் உங்கள் வாகனத்துக்குக் கிடைக்கும் காப்பீடு குறித்து பேசலாம்.'),
          text('Bikes and scooters: share the vehicle type and existing policy details for a renewal enquiry.', 'பைக் மற்றும் ஸ்கூட்டர்கள்: புதுப்பிப்பு விசாரணைக்கு வாகன வகை மற்றும் தற்போதைய பாலிசி விவரங்களைத் தெரிவிக்கலாம்.'),
          text('Commercial vehicles: explain how the vehicle is used so the enquiry reflects the correct vehicle category.', 'வணிக வாகனங்கள்: வாகனப் பயன்பாட்டைத் தெரிவித்து சரியான வாகன வகைக்கு ஏற்ப விசாரிக்கலாம்.'),
        ],
      },
      {
        heading: text('Prepare for a quote discussion', 'கட்டண விவரங்கள் பெறத் தயாராகுங்கள்'),
        body: text('Have your registration details and, for a renewal, the existing policy and expiry date available. Tell us if the vehicle has changed owners or if a previous policy has expired. Our team can explain what further information the insurer needs for a quote and whether any inspection is requested.', 'வாகனப் பதிவு விவரங்களையும், புதுப்பிப்புக்கு தற்போதைய பாலிசி மற்றும் காலாவதி தேதியையும் தயாராக வைத்திருக்கவும். உரிமையாளர் மாற்றம் அல்லது பாலிசி காலாவதி ஏற்பட்டிருந்தால் தெரிவிக்கவும். கட்டண விவரங்களுக்கு இன்சூரன்ஸ் நிறுவனம் கேட்கும் கூடுதல் தகவல்கள் மற்றும் ஆய்வு தேவையா என்பதை எங்கள் குழு விளக்கலாம்.'),
      },
      {
        heading: text('Review the policy details before choosing', 'தேர்வு செய்வதற்கு முன் பாலிசி விவரங்களைப் பாருங்கள்'),
        body: text('Ask about the cover, exclusions, deductibles, available add-ons and total premium shown in the quote. Compare the actual policy terms as well as the price. Insurer availability, cover and policy issuance depend on the insurer’s assessment and terms. NTC can help explain the quote and connect your enquiry with the next steps; contact us for the options available for your vehicle.', 'கட்டண விவரங்களில் உள்ள காப்பீடு, விலக்குகள், நீங்கள் ஏற்க வேண்டிய தொகை, கூடுதல் காப்பீடுகள் மற்றும் மொத்த பிரீமியம் குறித்து கேளுங்கள். விலையுடன் பாலிசி விதிமுறைகளையும் ஒப்பிடுங்கள். நிறுவனம், காப்பீடு மற்றும் பாலிசி வழங்குதல் அதன் மதிப்பீடு மற்றும் விதிமுறைகளைப் பொறுத்தது. கட்டண விவரங்களைப் புரிந்துகொள்ளவும் அடுத்த கட்டங்களை அறியவும் NTC உதவுகிறது; உங்கள் வாகனத்துக்கான வாய்ப்புகளை அறிய தொடர்புகொள்ளவும்.'),
      },
    ],
  },
  {
    id: 'branches', path: '/branches/', kind: 'branches',
    title: 'Nanmangalam & Alandur Branches | NTC Auto Consultant',
    description: 'Find NTC Auto Consultant in Nanmangalam and Alandur, Chennai. View branch addresses, Google Maps directions and contact details before your visit.',
    label: text('Our Branches', 'எங்கள் கிளைகள்'),
    heading: text('Our Nanmangalam & Alandur Branches', 'எங்கள் நன்மங்கலம் & ஆலந்தூர் கிளைகள்'),
    intro: text('Visit NTC Auto Consultant for RTO documentation and vehicle insurance assistance in South Chennai. Choose the branch convenient for you and call to discuss your service and the documents to bring before travelling.', 'தென்சென்னையில் RTO ஆவணங்கள் மற்றும் வாகன இன்சூரன்ஸ் உதவிக்கு NTC ஆட்டோ கன்சல்டன்ட் அலுவலகத்தை அணுகலாம். உங்களுக்கு வசதியான கிளையைத் தேர்வு செய்து, வருவதற்கு முன் தேவையான சேவை மற்றும் கொண்டுவர வேண்டிய ஆவணங்கள் குறித்து அழைத்துப் பேசவும்.'),
    sections: [
      {
        heading: text('Plan your branch visit', 'கிளை வருகையைத் திட்டமிடுங்கள்'),
        body: text('Our head office is at the Bran Tea location on Chromepet Road in Nanmangalam. The Alandur sub-branch is on the ground floor of the Commercial Building Complex at 1 New Street, near the Regional Transport Office. Use the Maps links below for the selected location. If you already have an application in progress, keep its reference number available when calling.', 'எங்கள் தலைமை அலுவலகம் நன்மங்கலத்தில் குரோம்பேட்டை சாலையில் Bran Tea இடத்தில் உள்ளது. ஆலந்தூர் துணைக் கிளை RTO அருகில் 1 நியூ ஸ்ட்ரீட் கமர்ஷியல் பில்டிங் காம்ப்ளெக்ஸின் தரைத் தளத்தில் உள்ளது. கீழே உள்ள Maps இணைப்புகளைப் பயன்படுத்தலாம். விண்ணப்பம் ஏற்கெனவே தொடங்கியிருந்தால் அழைக்கும்போது அதன் எண்ணைத் தயாராக வைத்திருக்கவும்.'),
      },
    ],
  },
  {
    id: 'contact', path: '/contact/', kind: 'contact',
    title: 'Contact NTC Auto Consultant in Chennai | Call 75500 04226',
    description: 'Contact G. Sathish at NTC Auto Consultant for LLR, driving licence, RC transfer or motor insurance enquiries. Call 75500 04226 or request a WhatsApp consultation.',
    label: text('Contact Us', 'தொடர்புகொள்ள'),
    heading: text('Contact NTC Auto Consultant', 'NTC ஆட்டோ கன்சல்டன்டைத் தொடர்புகொள்ள'),
    intro: text('Speak to G. Sathish, Proprietor, about RTO documentation or vehicle insurance assistance in Chennai. Call 75500 04226 or message our WhatsApp Business number 98409 14226. Use the WhatsApp consultation form to describe your enquiry and preferred branch.', 'சென்னையில் RTO ஆவணங்கள் அல்லது வாகன இன்சூரன்ஸ் உதவிக்கு உரிமையாளர் G. சதீஷைத் தொடர்புகொள்ளவும். அழைக்க: 75500 04226. WhatsApp Business: 98409 14226. WhatsApp ஆலோசனைப் படிவத்தில் உங்கள் தேவை மற்றும் விருப்பமான கிளையைத் தெரிவிக்கலாம்.'),
    sections: [
      {
        heading: text('What would you like help with?', 'எந்தச் சேவைக்கு உதவி தேவை?'),
        items: [
          text('LLR or driving licence: mention whether you need a new application, a test appointment or a renewal.', 'LLR அல்லது ஓட்டுநர் உரிமம்: புதிய விண்ணப்பமா, தேர்வு முன்பதிவா அல்லது புதுப்பிப்பா என்பதைத் தெரிவிக்கவும்.'),
          text('RC transfer: tell us the vehicle type and whether you are buying or selling it.', 'RC பெயர் மாற்றம்: வாகன வகை மற்றும் நீங்கள் வாங்குபவரா அல்லது விற்பவரா என்பதைத் தெரிவிக்கவும்.'),
          text('Motor insurance: mention the vehicle type and whether this is a new policy or a renewal enquiry.', 'வாகன இன்சூரன்ஸ்: வாகன வகை மற்றும் புதிய பாலிசியா அல்லது புதுப்பிப்பா என்பதைத் தெரிவிக்கவும்.'),
        ],
      },
      {
        heading: text('Before visiting or starting the work', 'வருகை அல்லது பணியைத் தொடங்கும் முன்'),
        body: text('Discuss the documents, scope of assistance and charges with our team. If you are following up on an existing request, keep the relevant application reference ready. For an in-person consultation, use the branch page to find the Nanmangalam head office or Alandur sub-branch and confirm your visit by phone.', 'ஆவணங்கள், உதவியின் விவரங்கள் மற்றும் கட்டணங்கள் குறித்து எங்கள் குழுவுடன் பேசவும். ஏற்கெனவே தொடங்கிய பணியின் நிலையை அறிய விண்ணப்ப எண்ணைத் தயாராக வைத்திருக்கவும். நேரடி ஆலோசனைக்கு கிளைகள் பக்கத்தில் நன்மங்கலம் தலைமை அலுவலகம் அல்லது ஆலந்தூர் துணைக் கிளையின் முகவரியைப் பார்த்து, வருகையைத் தொலைபேசியில் உறுதிசெய்யவும்.'),
      },
    ],
  },
];

export const sitePages = [homePage, ...servicePages];

export function getPage(pathname = '/') {
  const path = pathname === '/' ? '/' : `/${pathname.replace(/^\/+|\/+$/g, '')}/`;
  return sitePages.find(page => page.path === path);
}

export function getPageTitle(page, lang = 'en') {
  if (!page) return lang === 'ta' ? 'பக்கம் கிடைக்கவில்லை | NTC Auto Consultant' : 'Page Not Found | NTC Auto Consultant';
  return lang === 'ta' ? (page.titleTa || `${page.heading.ta} | NTC Auto Consultant`) : page.title;
}
