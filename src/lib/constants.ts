import { EducationalTopicType, FAQType, ServiceType, SiteDataType, TestimonialType } from '../types';

export const SITE_DATA: SiteDataType = {
  name: 'Southland Dental Care',
  tagline: 'Your #1 Choice for Dental Implants & Cosmetic Dentistry in Los Angeles',
  secondaryTagline: 'Transform Your Smile in Just One Day!',
  description: 'Transform your smile with expert dental care from USC-educated dentists with over 28 years of experience.',
  address: '4312 Woodman Ave #100, Los Angeles, CA 91423',
  phone: '(818) 788-8787',
  email: 'info@southlanddentalcare.com',
  website: 'southlanddentalcare.com',
  rating: 4.8,
  reviewCount: 212,
  reviewPlatform: 'Google',
  socialLinks: {
    facebook: 'https://facebook.com/southlanddentalcare',
    instagram: 'https://instagram.com/southlanddentalcare',
    twitter: 'https://twitter.com/southlanddentalcare',
    yelp: 'https://yelp.com/southlanddentalcare',
  },
};

export const HERO_SECTION = {
  title: 'Transform Your Smile in Just One Day',
  subtitle: 'Expert Dental Implants & Cosmetic Dentistry in Los Angeles',
  description:
    'Experience the confidence of a beautiful smile with our advanced dental solutions. Our USC-educated dentists with 28+ years of experience are ready to transform your smile.',
  ctaText: 'Schedule Free Consultation',
  ctaSecondaryText: 'Call or Text Now',
};

export const BENEFITS_SECTION = {
  title: 'Why Choose Southland Dental Care?',
  subtitle: 'Experience the difference of personalized, expert dental care',
  benefits: [
    {
      title: 'USC-Educated Dentists',
      description: 'Our dentists are graduates of USC School of Dentistry with over 28 years of experience.',
      icon: 'education',
    },
    {
      title: 'In-House Dental Lab',
      description: 'Our on-site lab with 3D printing technology allows for same-day restorations and perfect color matching.',
      icon: 'lab',
    },
    {
      title: 'Personalized Care',
      description: 'You will always see the same dentists who know your history and preferences.',
      icon: 'care',
    },
    {
      title: 'Advanced Technology',
      description: 'We use the latest dental technology including CT-Scan and intraoral scanners for precise treatment.',
      icon: 'technology',
    },
    {
      title: 'Comfortable Experience',
      description: 'IV sedation available for a relaxed, pain-free dental experience.',
      icon: 'comfort',
    },
    {
      title: 'Affordable Options',
      description: 'Flexible payment plans and financing options to make quality dental care accessible.',
      icon: 'affordable',
    },
  ],
};

export const SERVICES_SECTION = {
  title: 'Our Dental Services',
  subtitle: 'Comprehensive dental solutions for all your needs',
  services: [
    {
      title: 'Dental Implants',
      description: 'Replace missing teeth with permanent, natural-looking dental implants that function just like your natural teeth.',
      image: '/images/services/dental-implants.jpg',
    },
    {
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, teeth whitening, and other cosmetic procedures for a beautiful, confident smile.',
      image: '/images/services/cosmetic-dentistry.jpg',
    },
    {
      title: 'Same-Day Smile',
      description: 'Walk out with a complete smile makeover in just one day thanks to our in-house dental lab and advanced technology.',
      image: '/images/services/same-day-smile.jpg',
    },
    {
      title: 'Full Mouth Reconstruction',
      description: 'Comprehensive treatment to restore function and aesthetics for severely damaged or missing teeth.',
      image: '/images/services/full-mouth-reconstruction.jpg',
    },
  ] as ServiceType[],
};

export const TESTIMONIALS_SECTION = {
  title: 'What Our Patients Say',
  subtitle: 'Read testimonials from our satisfied patients',
  testimonials: [
    {
      quote: 'Dr. Hanookai and his team changed my life. After years of hiding my smile, I now cannot stop showing it off!',
      author: 'Sarah M.',
      location: 'Los Angeles, CA',
      rating: 5,
    },
    {
      quote: 'The in-house lab made all the difference. I got my dental implants and temporary crowns in one visit!',
      author: 'Michael T.',
      location: 'Glendale, CA',
      rating: 5,
    },
    {
      quote: 'I was terrified of dental work until I found Southland Dental Care. Their sedation options made it completely painless.',
      author: 'Jennifer L.',
      location: 'Pasadena, CA',
      rating: 5,
    },
  ] as TestimonialType[],
};

export const SPECIAL_OFFER_SECTION = {
  title: 'Special New Patient Offer',
  subtitle: 'Start your journey to a beautiful smile today',
  description: 'Take advantage of our new patient special and get a comprehensive examination and full set of X-rays for just $95.',
  ctaText: 'Claim This Offer',
  features: [
    'Comprehensive dental examination',
    'Full set of digital X-rays',
    'Personalized treatment plan',
    'No obligation consultation',
  ],
};

export const FAQ_SECTION = {
  title: 'FAQs: Oral Health, Systemic Wellness, and Cosmetic Dentistry',
  subtitle: 'Find answers to common questions about oral health\'s impact on your overall wellness',
  faqs: [
    {
      question: 'How does gum inflammation affect blood sugar control and diabetes?',
      answer: 'Gum inflammation (periodontal disease) and diabetes have a two-way relationship. High blood sugar can make it harder to keep your mouth healthy, weakening your immune response and increasing the risk of gum disease. Conversely, gum disease can make diabetes harder to manage, as infections and inflammation can raise blood sugar levels. Managing both conditions improves overall health and can help lower blood sugar over time.',
    },
    {
      question: 'Can oral bacteria really impact my heart health?',
      answer: 'Yes. People with gum disease are two to three times more likely to experience serious cardiovascular events like heart attacks or strokes. The inflammation and bacteria from gum disease can enter the bloodstream, potentially contributing to blood vessel damage and heart problems. Good oral hygiene—brushing, flossing, and regular dental visits—may help reduce your risk of heart disease.',
    },
    {
      question: 'Why is my dentist concerned about respiratory infections like pneumonia?',
      answer: 'Poor oral health increases the risk of respiratory infections. Harmful bacteria from the mouth can be inhaled into the lungs, leading to infections such as pneumonia or exacerbating chronic lung diseases. Keeping your mouth clean and healthy reduces this risk, making your dentist an important ally in preventing respiratory illnesses.',
    },
    {
      question: 'How does a mother\'s oral health affect her baby\'s well-being?',
      answer: 'Optimal maternal oral hygiene during pregnancy can decrease the transmission of cavity-causing bacteria to the infant, reducing the child\'s future risk of dental caries. While direct links between prenatal dental care and pregnancy outcomes are still being studied, maintaining oral health during pregnancy is safe and recommended for the mother\'s and baby\'s long-term health.',
    },
    {
      question: 'Is there a connection between gum disease and joint pain or rheumatoid arthritis?',
      answer: 'Emerging research shows that the bacteria causing gum disease may contribute to rheumatoid arthritis (RA) and other inflammatory diseases. These bacteria can trigger immune responses that lead to joint inflammation. Patients with RA are more likely to have severe gum disease, and treating oral infections may help manage RA symptoms.',
    },
    {
      question: 'What are the benefits of Southland Dental Care\'s VIP Concierge Services?',
      answer: 'Our concierge service is designed to make major dental treatments—such as dental implants and porcelain veneers—stress-free and convenient. We offer: Free private transportation to and from your home or hotel, personalized, expert care from leading specialists, thorough post-treatment support and instructions, and a seamless, comfortable experience for all major procedures.',
    },
    {
      question: 'What financing options are available for major dental treatments?',
      answer: 'We offer a variety of payment plans with low monthly payments, including 0% interest and extended payment options, so you can receive the care you need without financial stress.',
    },
    {
      question: 'What makes porcelain veneers at Southland Dental Care unique?',
      answer: 'Our porcelain veneers are custom-designed for a natural, radiant look and are crafted from durable, stain-resistant porcelain. We provide transparent, all-inclusive pricing—no hidden fees. Dr. Michael Abaian, "Engineer of the Smile," uses advanced technology to ensure your veneers blend seamlessly with your natural teeth, boosting your confidence and transforming your smile.',
    },
    {
      question: 'How much do porcelain veneers cost in Los Angeles?',
      answer: 'Porcelain veneers typically range from $950 to $2,200 per tooth in California, depending on the specialist and the complexity of your case. We offer complimentary consultations to determine your specific needs and provide a comprehensive, upfront quote.',
    },
    {
      question: 'What should I expect during a veneer consultation?',
      answer: 'During your consultation, you\'ll receive a thorough dental evaluation, including exams and possibly X-rays or impressions. We\'ll discuss your goals, treatment options, and costs, and create a personalized plan to achieve your ideal smile. Addressing any existing dental issues, such as gum disease, is essential before starting veneer treatment.',
    },
    {
      question: 'Who is a good candidate for concierge dentistry?',
      answer: 'Concierge dentistry is ideal for patients needing complex or major dental treatments, those seeking a higher level of personalized care, or anyone who values convenience and comfort throughout their dental experience.',
    },
    {
      question: 'How can I schedule a consultation or learn more about your services?',
      answer: 'Contact Southland Dental Care directly to schedule your complimentary consultation or to inquire about our concierge services, financing options, or cosmetic treatments. Our team is dedicated to providing you with the best care, comfort, and results.',
    },
  ] as FAQType[],
};

export const CONTACT_SECTION = {
  title: 'Contact Us',
  subtitle: 'Schedule your complimentary consultation today',
  address: SITE_DATA.address,
  phone: SITE_DATA.phone,
  email: SITE_DATA.email,
  website: SITE_DATA.website,
  hours: [
    'Monday: 9:00 AM - 6:00 PM',
    'Tuesday: 9:00 AM - 6:00 PM',
    'Wednesday: 9:00 AM - 6:00 PM',
    'Thursday: 9:00 AM - 6:00 PM',
    'Friday: 9:00 AM - 6:00 PM',
    'Saturday: Closed',
    'Sunday: Closed',
  ],
};

export const EDUCATION_SECTION = {
  title: 'Oral Health as the Root Cause',
  subtitle: 'The Undeniable Link Between Your Mouth and Overall Health',
  description: 'Discover how your oral health impacts your entire body and why addressing dental issues can prevent serious medical conditions.',
  ctaText: 'Schedule a Comprehensive Evaluation',
  topics: [
    {
      id: 'diabetes',
      title: 'Beyond Sugar: Gum Inflammation and Blood Sugar Control',
      subtitle: 'The Two-Way Relationship Between Oral Health and Diabetes',
      description: 'Gum inflammation can worsen glycemic control and increase diabetes risk, while diabetes makes you more susceptible to gum disease, creating a dangerous cycle.',
      icon: 'diabetes',
      keyPoints: [
        'Periodontal disease can increase blood sugar levels, making diabetes harder to control',
        'People with diabetes are 3x more likely to develop serious gum disease',
        'Treating gum disease can help improve blood sugar control by up to 0.4% (HbA1c)',
        'Early intervention breaks the inflammatory cycle between gum disease and diabetes'
      ],
      relatedCondition: 'Diabetes',
      ctaText: 'Protect Your Health',
    },
    {
      id: 'heart',
      title: 'Heart Health Starts Here: Tracking Oral Bacteria\'s Path to Your Arteries',
      subtitle: 'How Gum Disease Affects Your Cardiovascular System',
      description: 'Bacteria from periodontitis can enter your bloodstream, potentially causing inflammation, contributing to atherosclerosis, and increasing heart attack and stroke risk.',
      icon: 'heart',
      keyPoints: [
        'People with gum disease are 2-3x more likely to have a heart attack or stroke',
        'Oral bacteria have been found in arterial plaque',
        'Inflammation from gum disease can increase C-reactive protein, a marker for heart disease',
        'Regular dental care may reduce your risk of cardiovascular events'
      ],
      relatedCondition: 'Heart Disease',
      ctaText: 'Protect Your Heart',
    },
    {
      id: 'respiratory',
      title: 'Why Your Dentist Might Be Your First Line of Defense Against Pneumonia',
      subtitle: 'The Connection Between Oral Health and Respiratory Infections',
      description: 'Aspiration of oral bacteria can lead to serious respiratory infections like pneumonia, bronchitis, and worsen conditions like COPD.',
      icon: 'lungs',
      keyPoints: [
        'Bacteria in the mouth can be inhaled into the lungs, causing infections',
        'Poor oral hygiene increases the risk of pneumonia by 3.6x in elderly patients',
        'Regular professional dental cleanings can reduce the incidence of pneumonia by up to 40%',
        'COPD patients with gum disease experience more frequent exacerbations'
      ],
      relatedCondition: 'Respiratory Conditions',
      ctaText: 'Breathe Easier',
    },
    {
      id: 'pregnancy',
      title: 'Protecting Future Generations: Mom\'s Oral Health and Baby\'s Well-being',
      subtitle: 'The Impact of Maternal Oral Health on Pregnancy Outcomes',
      description: 'Maternal gum disease is linked to risks like preterm birth and low birth weight, and can lead to the transmission of cavity-causing bacteria to your baby.',
      icon: 'pregnancy',
      keyPoints: [
        'Pregnant women with gum disease are 7x more likely to deliver prematurely',
        'Oral bacteria can enter the bloodstream and reach the placenta',
        'Inflammatory markers from gum disease may induce labor',
        'Treating gum disease during pregnancy can reduce preterm birth risk by up to 50%'
      ],
      relatedCondition: 'Pregnancy Complications',
      ctaText: 'Protect Your Baby',
    },
    {
      id: 'arthritis',
      title: 'Joint Pain & Jaw Pain: Could Your Gums Be Fueling Your Rheumatoid Arthritis?',
      subtitle: 'The Surprising Connection Between Oral Bacteria and Joint Inflammation',
      description: 'Oral bacteria like P. gingivalis and associated inflammation are linked to rheumatoid arthritis onset and severity, and periodontal treatment may improve RA symptoms.',
      icon: 'joints',
      keyPoints: [
        'P. gingivalis can trigger autoimmune responses that attack joint tissues',
        'RA patients are 8x more likely to have gum disease',
        'The same inflammatory proteins that destroy gum tissue can damage joint tissue',
        'Treating periodontal disease can reduce RA pain and morning stiffness'
      ],
      relatedCondition: 'Rheumatoid Arthritis',
      ctaText: 'Ease Joint Pain',
    },
  ] as EducationalTopicType[],
};
