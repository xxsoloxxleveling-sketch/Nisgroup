import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            nav: {
                home: "Home",
                services: "Services",
                about: "About Us",
                products: "Products",
                contact: "Contact",
            },
            common: {
                readMore: "Read More",
                viewPortfolio: "View Portfolio",
                bookService: "Book This Service",
                getQuote: "Get a Quote",
                privacyPolicy: "Privacy Policy",
                terms: "Terms & Conditions",
                rights: "All rights reserved.",
            },
            hero: {
                tagline: "Construction & Maintenance • Oman",
                title: "Innovative Construction & Maintenance Solutions",
                description: "From painting and MEP to roads, décor, and landscaping, NIS delivers reliable, high-quality solutions backed by free site visits, free estimations, and free 3D designs.",
                btnPrimary: "Get Free Site Visit",
                btnSecondary: "View Our Services",
                freeConsult: "Free Consultation",
                transPricing: "Transparent Pricing",
                cardCommercial: "Commercial Projects",
                cardPainting: "Professional Painting",
                statsSatisfaction: "Client Satisfaction",
                statsReviews: "Based on 500+ reviews",
            },
            footer: {
                brandDesc: "Innovative Construction & Maintenance Solutions in Oman. From painting and MEP to roadworks and landscaping, we build trust through quality.",
                servicesTitle: "Services",
                contactTitle: "Contact Us",
                newsletterTitle: "Newsletter",
                newsletterDesc: "Subscribe to get updates on our latest projects and offers.",
                emailPlaceholder: "Email address",
                joinBtn: "Join",
                address: "P.O. Box 123, Postal Code 111, Muscat, Sultanate of Oman",
            },
            whoweserve: {
                subtitle: "Our Clients",
                title: "Who We Serve",
                villas: { title: "Villas & Residential", desc: "Home renovations and painting." },
                apartments: { title: "Apartments & Buildings", desc: "Deep cleaning and maintenance." },
                commercial: { title: "Offices & Commercial", desc: "Fit-outs and AC services." },
                industrial: { title: "Warehouses & Industrial", desc: "Epoxy flooring and structures." },
                roads: { title: "Roads & Infrastructure", desc: "Asphalt paving and kerbstones." },
            },
            projects: {
                title: "Recent Projects",
                subtitle: "See our craftsmanship across Oman.",
                categories: {
                    All: "All",
                    Painting: "Painting",
                    Electrical: "Electrical",
                    AC: "AC & HVAC",
                    Roadworks: "Roadworks",
                    Decor: "Décor",
                    Landscaping: "Landscaping"
                },
                items: {
                    "1": { title: "Luxury Villa Repainting", desc: "Full exterior and interior painting with Jotun premium finishes." },
                    "2": { title: "Commercial Office Fitout", desc: "Gypsum partitions, false ceiling, and electrical wiring." },
                    "3": { title: "Road Paving & Interlock", desc: "Access road construction and parking interlock installation." },
                    "4": { title: "HVAC Duct Maintenance", desc: "Deep cleaning and repair of central AC ducts for a warehouse." },
                    "5": { title: "Garden Landscaping", desc: "Modern garden design with automated irrigation system." },
                    "6": { title: "Villa Electrical Upgrade", desc: "Complete DB dressing and smart light installation." },
                }
            },
            testimonials: {
                subtitle: "Testimonials",
                title: "What Our Clients Say",
                reviews: {
                    "1": { text: "NIS transformed our villa perfectly. The painting team was clean, fast, and very professional.", role: "Villa Owner" },
                    "2": { text: "Excellent MEP maintanence for our office building. Highly recommended for their response time.", role: "Office Manager" },
                    "3": { text: "Great quality road work for our private farm. They handled everything from grading to asphalt.", role: "Farm Owner" },
                }
            },
            estimator: {
                tag: "Cost Estimator",
                title: "Get an Instant Cost Estimate",
                desc: "Planning a project? Use our quick calculator to get an approximate range. For a precise quote, book a free site visit.",
                freeVisit: "Free Site Visit",
                response: "Response Time",
                cardTitle: "Project Calculator",
                cardSubtitle: "Adjust parameters to see price range",
                serviceType: "Service Type",
                propertyType: "Property Type",
                area: "Approx. Area / Units",
                material: "Include Materials & Supplies",
                estimatedRange: "Estimated Price Range",
                subjectToInspection: "Subject to site inspection",
                requestQuote: "Request Detailed Quote",
                downloadPdf: "Download Summary PDF",
            },
            thermolockTeaser: {
                badge: "Advanced Protection",
                title: "The Future of Insulation",
                desc: "Experience the world's first 4-in-1 insulation plaster. Fire, water, thermal, and sound protection in a single eco-friendly coat.",
                cta: "Discover Thermolock"
            },
            thermolock: {
                hero: {
                    title: "Build Better. Choose Thermolock.",
                    subtitle: "The world’s first and only plaster that combines fire, water, thermal and acoustic insulation in a single product.",
                    desc: "Thermolock is a next-generation eco-plaster made from volcanic rock aggregates (pumice, perlite). It replaces conventional plastering while providing 4-in-1 protection: fire, sound, thermal and waterproof insulation in one single coat.",
                    ctaDownload: "Download Product Datasheet (PDF)",
                    ctaRequest: "Request Project Consultation",
                    badges: {
                        fire: "Fire", water: "Water", sound: "Sound", thermal: "Thermal"
                    },
                    chips: ["A1 Fire Resistant", "4-in-1 Insulation", "50% Energy Savings", "No VOC / Green"]
                },
                intro: {
                    title: "A Solution for the Future of Eco-Construction",
                    desc: "Insulation is based on 4 pillars. Conventional systems combine many products; Thermolock achieves complete protection alone. Natural, inorganic, high-tech mix of volcanic rocks and aggregates.",
                    highlight: "Based on pumice & perlite (volcanic aggregates).",
                    cards: {
                        substitute: "Substitute for conventional plastering",
                        natural: "Natural mineral insulation & leveling product",
                        single: "Single coat, single day application"
                    }
                },
                roadmap: {
                    title: "All Four Protections in One Product",
                    start: "Start: Structural Protection",
                    end: "End: Full Envelope Protection",
                    steps: {
                        fire: { title: "Fire Insulation", desc: "Class A1, up to 1000°C. Functions as a dedicated fire barrier emitting no toxic gases." },
                        thermal: { title: "Thermal Insulation", desc: "Up to 50% energy savings. Significantly reduces energy loss." },
                        sound: { title: "Sound / Acoustic Insulation", desc: "25 dB noise reduction. Ideal for creating quiet environments." },
                        water: { title: "Waterproof & Breathable", desc: "Prevents dampness, condensation, and corrosion. Breathable structure." }
                    }
                },
                comparison: {
                    title: "Why Thermolock vs Conventional Plaster?",
                    label: "Choose your approach:",
                    conv: {
                        title: "Conventional Plastering",
                        points: ["Multiple layers required", "Extra waterproofing needed", "Extra insulation overlap", "More labor intensive", "Risk of thermal bridges", "Drilling often required"]
                    },
                    thermo: {
                        title: "Thermolock System",
                        points: ["Single coat system", "No extra leveling needed", "Built-in waterproofing", "No thermal bridges", "No drilling required", "Faster scaffold return", "Low labor cost"]
                    },
                    stats: ["Single coat, single day application", "Up to 2× more productivity per day", "Less fatigue, significant cost savings"]
                },
                features: {
                    title: "Key Features & Characteristics",
                    characteristics: ["Single coat application", "Single day application", "Low labor cost", "Faster return of scaffolding", "Ultra-light weight", "Continuous insulation", "UV reflective", "Fire resistant (A1)", "Water resistant", "Vapor permeable"],
                    features: ["Mold resistant", "Corrosion resistant", "High crack resistance", "Low carbon footprint", "No VOCs", "Green building material", "Acoustic insulation"]
                },
                specs: {
                    title: "Technical Specifications",
                    hero: {
                        cond: { val: "0.069 W/mK", label: "Thermal Conductivity" },
                        fire: { val: "A1", label: "Fire Class (1000°C)" },
                        sound: { val: "25 dB", label: "Sound Reduction" }
                    },
                    table: {
                        sri: "Solar Reflectance (SRI)",
                        density: "Density",
                        conductivity: "Thermal Conductivity",
                        emittance: "Thermal Emittance",
                        sound: "Sound Reduction (dB)",
                        fire: "Fire Rating",
                        coverage: "Coverage",
                        shelf: "Shelf Life",
                        app: "Application"
                    },
                    note: "Tested in European labs, ideal for both commercial and residential projects."
                },
                sustainability: {
                    title: "Built for the Planet and People",
                    desc: "Environmental sustainability is our core business condition. Low carbon footprint, green building material, no VOC, no carcinogens. Supports national and international environmental policies.",
                    points: ["Low Carbon Footprint", "No Carcinogens", "Recyclable Materials", "Energy Saving Production"]
                },
                applications: {
                    title: "Applications & Use Cases",
                    items: {
                        residential: "Residential Buildings",
                        hotels: "Hotels & Hospitals",
                        facades: "Facades & External Walls",
                        interior: "Interior Walls & Ceilings"
                    }
                },
                cta: {
                    title: "Ready to Specify Thermolock?",
                    subtitle: "Talk to our technical team, get data sheets and tailored insulation proposals.",
                    btnContact: "Talk to Our Technical Team",
                    btnProfile: "Download Thermolock Product Profile",
                    disclaimer: "No spam, just technical support and clear data."
                }
            },
            servicesPage: {
                hero: {
                    subtitle: "What We Do",
                    title: "Our Services",
                    desc: "Comprehensive construction and maintenance solutions delivered by skilled professionals."
                },
                timeline: {
                    eyebrow: "Our Process",
                    title: "Everything You Need",
                    subtitle: "From foundation to finish, we cover every aspect of your property's lifecycle."
                },
                items: {
                    painting: {
                        title: "Painting & Finishes",
                        label: "01 • Painting & Finishes",
                        short: "Premium finishes for villas, apartments, and commercial buildings.",
                        details: "We work with brands like Jotun and Asian Paints to deliver long-lasting finishes. Our team handles surface prep, priming, and final coats with strict quality checks.",
                        features: ["Interior & exterior wall painting", "Texture & stencil work", "Epoxy & protective coatings"]
                    },
                    electrical: {
                        title: "MEP (Electrical & Plumbing)",
                        label: "02 • MEP Services",
                        short: "Safe, compliant installation and maintenance for all property types.",
                        details: "From minor repairs to full MEP upgrades, our technicians follow HSE standards and local regulations to keep your systems running safely.",
                        features: ["DB dressing & rewiring", "Sanitary fittings & drainage", "Leak detection & rectification"]
                    },
                    ac: {
                        title: "AC & HVAC Services",
                        label: "03 • AC & HVAC",
                        short: "Installation, deep cleaning, and annual maintenance contracts.",
                        details: "We extend the life of your AC units with detailed inspections, coil cleaning, gas top-ups, and performance checks.",
                        features: ["Split & window AC service", "Duct & coil deep cleaning", "Annual maintenance contracts (AMC)"]
                    },
                    civil: {
                        title: "Civil & Road Works",
                        label: "04 • Civil Works",
                        short: "Heavy-duty works for villas, compounds, and access roads.",
                        details: "We handle site preparation, structural works, and finishing, ensuring durability and adherence to engineering standards.",
                        features: ["Asphalt paving & interlock", "Concrete foundations", "Waterproofing & repair works"]
                    },
                    decor: {
                        title: "Décor & Gypsum",
                        label: "05 • Décor & Gypsum",
                        short: "False ceilings, partitions, and feature walls.",
                        details: "Our décor team designs and executes modern interiors that match your brand and lifestyle, with clean detailing and quality materials.",
                        features: ["Gypsum false ceilings", "Decorative bulkheads", "Gypsum partitions & cladding"]
                    },
                    landscaping: {
                        title: "Landscaping & Gardening",
                        label: "06 • Landscaping",
                        short: "Design and maintenance of outdoor spaces.",
                        details: "We turn outdoor areas into usable, beautiful spaces with planting, irrigation, lighting, and regular maintenance visits.",
                        features: ["Garden design & setup", "Artificial & natural grass", "Irrigation systems & lighting"]
                    }
                },
                offer: "What we offer",
                process: {
                    eyebrow: "Scroll to explore",
                    title: "How NIS Serves Your Property",
                    subtitle: "Follow the central timeline. Each step reveals a core NIS service. Click any card to see more details."
                }
            },
            about: {
                hero: {
                    subtitle: "About Us",
                    titleLine1: "Building Excellence in Oman",
                    titleHighlight: "With Innovation & Quality",
                    desc: "National Integrated Services (NIS) is a premier construction and maintenance company based in Muscat. With over a decade of experience, we specialize in delivering high-quality residential and commercial solutions."
                },
                stats: {
                    experience: "Years Experience",
                    projects: "Projects Completed",
                    clients: "Happy Clients",
                    guarantee: "Satisfaction Guarantee"
                },
                vision: {
                    title: "Our Vision",
                    tag: "Vision",
                    desc: "To be the most trusted partner for property maintenance and construction in the Sultanate, known for quality, reliability, and innovation."
                },
                mission: {
                    title: "Our Mission",
                    tag: "Mission",
                    desc: "Delivering superior craftsmanship while ensuring safety and sustainability in every project we undertake, big or small."
                },
                values: {
                    title: "Our Core Values",
                    quality: { title: "Quality", desc: "Using only premium materials like Jotun & Asian Paints." },
                    safety: { title: "Safety", desc: "Strict adherence to HSE protocols on every site." },
                    timeliness: { title: "Timeliness", desc: "We value your time and stick to our schedules." }
                },
                team: {
                    title: "Our Leadership",
                    desc: "Meet the experts behind our success.",
                    ceo: "CEO & Founder",
                    operations: "Operations Manager",
                    technical: "Technical Lead"
                },
                cta: {
                    title: "Ready to work with the best?",
                    btn: "Get in Touch"
                }
            },
            contact: {
                hero: {
                    subtitle: "Get In Touch",
                    title: "Contact Us",
                    desc: "Ready to transform your space? Use the form below or reach out directly."
                },
                info: {
                    title: "Contact Information",
                    phone: "Phone / WhatsApp",
                    available: "Available 8:00 AM - 8:00 PM",
                    email: "Email",
                    respondTime: "We usually respond within 24 hours.",
                    location: "Office Location",
                    address: "Building 42, Street 18, Al Khuwair, Muscat, Oman",
                    locateBtn: "Locate NIS on Google Maps"
                },
                form: {
                    title: "Send us a Message",
                    successTitle: "Message Sent!",
                    successDesc: "Thank you. We will contact you within 24 hours.",
                    sendAnother: "Send Another",
                    name: "Your Name *",
                    phone: "Phone Number *",
                    email: "Email Address",
                    message: "Message",
                    submit: "Send Message",
                    sending: "Sending...",
                    errors: {
                        name: "Name is required",
                        phone: "Phone is required",
                        phoneInvalid: "Please enter a valid phone number (+968...)"
                    }
                },
                faq: {
                    title: "Quick Answers",
                    q1: "What areas do you cover?",
                    a1: "We cover all of Muscat (Seeb, Bawshar, Muttrah) and surrounding regions like Barka and Bidbid.",
                    q2: "Are site visits really free?",
                    a2: "Yes! We offer 100% free site inspections and estimations with no obligation.",
                    q3: "Do you handle small maintenance jobs?",
                    a3: "Absolutely. From single AC repairs to painting one room, no job is too small."
                }
            },
            wizard: {
                step1: "What help do you need?",
                step2: "Type of Property?",
                step3: "Almost done!",
                summary: "Summary:",
                steps: { service: "Service", details: "Details", contact: "Contact" },
                next: "Next",
                back: "Back",
                submit: "Submit Request",
                receivedTitle: "Request Received!",
                receivedDesc: "We have received your request for",
                callShorty: "Our team will call you at",
                startNew: "Start New Request"
            }
        }
    },
    ar: {
        translation: {
            nav: {
                home: "الرئيسية",
                services: "خدماتنا",
                about: "من نحن",
                products: "منتجاتنا",
                contact: "تواصل معنا",
            },
            common: {
                readMore: "اقرأ المزيد",
                viewPortfolio: "عرض الأعمال",
                bookService: "اطلب الخدمة",
                getQuote: "احصل على عرض سعر",
                privacyPolicy: "سياسة الخصوصية",
                terms: "الشروط والأحكام",
                rights: "جميع الحقوق محفوظة.",
            },
            hero: {
                tagline: "البناء والصيانة • سلطنة عمان",
                title: "حلول البناء والصيانة المبتكرة",
                description: "من الأصباغ والأعمال الكهربائية إلى الطرق والديكور والحدائق، تقدم NIS حلولاً موثوقة وعالية الجودة مدعومة بزيارات مجانية للموقع وتقديرات مجانية وتصاميم ثلاثية الأبعاد.",
                btnPrimary: "احصل على زيارة مجانية",
                btnSecondary: "تصفح خدماتنا",
                freeConsult: "استشارة مجانية",
                transPricing: "أسعار شفافة",
                cardCommercial: "مشاريع تجارية",
                cardPainting: "أصباغ احترافية",
                statsSatisfaction: "رضا العملاء",
                statsReviews: "بناءً على 500+ تقييم",
            },
            footer: {
                brandDesc: "حلول البناء والصيانة المبتكرة في عمان. من الأصباغ والأعمال الكهربائية إلى الطرق والحدائق، نبني الثقة من خلال الجودة.",
                servicesTitle: "الخدمات",
                contactTitle: "تواصل معنا",
                newsletterTitle: "النشرة البريدية",
                newsletterDesc: "اشترك للحصول على تحديثات حول أحدث مشاريعنا وعروضنا.",
                emailPlaceholder: "البريد الإلكتروني",
                joinBtn: "اشترك",
                address: "ص.ب 123، الرمز البريدي 111، مسقط، سلطنة عمان",
            },
            whoweserve: {
                subtitle: "عملاؤنا",
                title: "من نخدم",
                villas: { title: "الفلل والمنازل", desc: "تجديدات المنازل والاصباغ." },
                apartments: { title: "الشقق والمباني", desc: "التنظيف العميق والصيانة." },
                commercial: { title: "المكاتب والتجاري", desc: "التجهيزات وخدمات التكييف." },
                industrial: { title: "المخازن والصناعية", desc: "أرضيات الايبوكسي والهياكل." },
                roads: { title: "الطرق والبنية التحتية", desc: "رصف الأسفلت وأحجار الرصيف." },
            },
            projects: {
                title: "أحدث المشاريع",
                subtitle: "شاهد إتقاننا في جميع أنحاء عمان.",
                categories: {
                    All: "الكل",
                    Painting: "أصباغ",
                    Electrical: "كهرباء",
                    AC: "تكييف",
                    Roadworks: "طرق",
                    Decor: "ديكور",
                    Landscaping: "حدائق"
                },
                items: {
                    "1": { title: "إعادة طلاء فيلا فاخرة", desc: "طلاء خارجي وداخلي كامل بتشطيبات جوتن الممتازة." },
                    "2": { title: "تجهيز مكتب تجاري", desc: "قواطع جبس، أسقف مستعارة، وتوصيلات كهربائية." },
                    "3": { title: "رصف طرق و انترلوك", desc: "إنشاء طريق وصول وتركيب انترلوك للمواقف." },
                    "4": { title: "صيانة مجاري التكييف", desc: "تنظيف عميق وإصلاح مجاري التكييف المركزي لمستودع." },
                    "5": { title: "تنسيق حدائق", desc: "تصميم حديقة حديثة مع نظام ري آلي." },
                    "6": { title: "تحديث كهرباء فيلا", desc: "ترتيب لوحة التوزيع بالكامل وتركيب إضاءة ذكية." },
                }
            },
            testimonials: {
                subtitle: "آراء العملاء",
                title: "ماذا يقول عملاؤنا",
                reviews: {
                    "1": { text: "حولت NIS فيلتنا بشكل مثالي. فريق الصبغ كان نظيفاً وسريعاً ومحترفاً جداً.", role: "مالك فيلا" },
                    "2": { text: "صيانة ممتازة للأعمال الكهربائية والسباكة لمبنى مكتبنا. نوصي بهم بشدة لسرعة استجابتهم.", role: "مدير مكتب" },
                    "3": { text: "عمل طرق ذو جودة عالية لمزرعتنا الخاصة. تعاملوا مع كل شيء من التسوية إلى الأسفلت.", role: "مالك مزرعة" },
                }
            },
            estimator: {
                tag: "حاسبة التكلفة",
                title: "احصل على تقدير فوري للتكلفة",
                desc: "تخطط لمشروع؟ استخدم حاسبتنا السريعة للحصول على نطاق تقريبي. للحصول على عرض سعر دقيق، احجز زيارة مجانية للموقع.",
                freeVisit: "زيارة مجانية",
                response: "وقت الاستجابة",
                cardTitle: "حاسبة المشروع",
                cardSubtitle: "اضبط المعايير لرؤية نطاق السعر",
                serviceType: "نوع الخدمة",
                propertyType: "نوع العقار",
                area: "المساحة التقريبية / الوحدات",
                material: "شامل المواد والتوريدات",
                estimatedRange: "نطاق السعر المقدر",
                subjectToInspection: "يخضع لمعاينة الموقع",
                requestQuote: "طلب عرض سعر مفصل",
                downloadPdf: "تحميل ملخص PDF",
            },
            thermolockTeaser: {
                badge: "حماية متقدمة",
                title: "مستقبل العزل",
                desc: "اختبر أول ملاط عزل 4 في 1 في العالم. حماية من الحريق والماء والحرارة والصوت في طبقة واحدة صديقة للبيئة.",
                cta: "اكتشف ثيرمولوك"
            },
            thermolock: {
                hero: {
                    title: "ابنِ بشكل أفضل. اختر ثيرمولوك.",
                    subtitle: "الملاط الأول والوحيد في العالم الذي يجمع بين عزل الحريق والماء والحرارة والصوت في منتج واحد.",
                    desc: "ثيرمولوك هو ملاط بيئي من الجيل القادم مصنوع من ركام الصخور البركانية (الخفاف، البيرلايت). يحل محل اللياسة التقليدية مع توفير حماية 4 في 1: عزل الحريق، الصوت، الحرارة والماء في طبقة واحدة.",
                    ctaDownload: "تحميل مواصفات المنتج (PDF)",
                    ctaRequest: "طلب استشارة للمشروع",
                    badges: {
                        fire: "حريق", water: "ماء", sound: "صوت", thermal: "حرارة"
                    }
                },
                intro: {
                    title: "حل لمستقبل البناء البيئي",
                    desc: "يعتمد العزل على 4 ركائز. تجمع الأنظمة التقليدية بين العديد من المنتجات؛ يحقق ثيرمولوك حماية كاملة بمفرده. مزيج طبيعي، غير عضوي، عالي التقنية من الصخور البركانية والركام.",
                    cards: {
                        substitute: "بديل للياسة التقليدية",
                        natural: "منتج عزل وتسوية معدني طبيعي",
                        single: "طبقة واحدة، تطبيق في يوم واحد"
                    }
                },
                roadmap: {
                    title: "أربع حمايات في منتج واحد",
                    steps: {
                        fire: { title: "عزل الحريق", desc: "تصنيف A1، حتى 1000 درجة مئوية. يعمل كحاجز حريق مخصص ولا ينبعث منه غازات سامة." },
                        thermal: { title: "عزل الحرارة", desc: "توفير يصل إلى 50٪ من الطاقة. يقلل بشكل كبير من فقدان الطاقة." },
                        sound: { title: "عزل الصوت", desc: "تقليل الضوضاء بمقدار 25 ديسيبل. مثالي لخلق بيئات هادئة." },
                        water: { title: "مقاوم للماء ومسامي", desc: "يمنع الرطوبة والتكثيف والتآكل. هيكل مسامي يسمح بالتنفس." }
                    }
                },
                comparison: {
                    title: "لماذا ثيرمولوك مقابل اللياسة التقليدية؟",
                    conv: {
                        title: "اللياسة التقليدية",
                        points: ["تتطلب طبقات متعددة", "تحتاج لعزل مائي إضافي", "تداخل عزل إضافي", "تتطلب عمالة أكثر", "خطر الجسور الحرارية", "تتطلب الحفر والتثبيت غالباً"]
                    },
                    thermo: {
                        title: "نظام ثيرمولوك",
                        points: ["نظام الطبقة الواحدة", "لا حاجة لتسوية إضافية", "عزل مائي مدمج", "بلا جسور حرارية", "لا حاجة للحفر", "عودة أسرع للسقالة", "تكلفة عمالة منخفضة"]
                    },
                    stats: ["طبقة واحدة، تطبيق في يوم واحد", "إنتاجية تصل إلى الضعف يومياً", "إجهاد أقل، توفير كبير في التكاليف"]
                },
                features: {
                    title: "المميزات والخصائص الرئيسية",
                    characteristics: ["تطبيق طبقة واحدة", "تطبيق في يوم واحد", "تكلفة عمالة منخفضة", "عودة أسرع للسقالة", "وزن خفيف جداً", "عزل مستمر", "عاكس للأشعة فوق البنفسجية", "مقاوم للحريق (A1)", "مقاوم للماء", "نفاذية البخار"],
                    features: ["مقاوم للعفن", "مقاوم للتآكل", "مقاومة عالية للتشقق", "بصمة كربونية منخفضة", "خالي من المركبات العضوية المتطايرة", "مادة بناء خضراء", "عزل صوتي"]
                },
                specs: {
                    title: "المواصفات الفنية",
                    table: {
                        sri: "انعكاس الطاقة الشمسية (SRI)",
                        density: "الكثافة",
                        conductivity: "التوصيل الحراري",
                        emittance: "الانبعاث الحراري",
                        sound: "تقليل الصوت (ديسيبل)",
                        fire: "تصنيف الحريق",
                        coverage: "التغطية",
                        shelf: "مدة الصلاحية",
                        app: "التطبيق"
                    },
                    note: "مثالي للمشاريع التجارية والسكنية على حد سواء."
                },
                sustainability: {
                    title: "بني من أجل الكوكب والإنسان",
                    desc: "الاستدامة البيئية هي شرط عملنا الأساسي. بصمة كربونية منخفضة، مادة بناء خضراء، لا مواد مسرطنة. يدعم السياسات البيئية الوطنية والدولية.",
                    points: ["بصمة كربونية منخفضة", "لا مواد مسرطنة", "مواد قابلة لإعادة التدوير", "إنتاج موفر للطاقة"]
                },
                applications: {
                    title: "التطبيقات وحالات الاستخدام",
                    items: {
                        residential: "المباني السكنية",
                        hotels: "الفنادق والمستشفيات",
                        facades: "الواجهات والجدران الخارجية",
                        interior: "الجدران الداخلية والأسقف"
                    }
                },
                cta: {
                    title: "جاهز واعتماد ثيرمولوك؟",
                    subtitle: "تحدث إلى فريقنا الفني، واحصل على جداول البيانات ومقترحات العزل المخصصة.",
                    btnContact: "تواصل مع الفريق الفني",
                    btnProfile: "تحميل ملف المنتج"
                }
            },
            servicesPage: {
                hero: {
                    subtitle: "ماذا نقدم",
                    title: "خدماتنا",
                    desc: "حلول شاملة للبناء والصيانة يقدمها محترفون ذوو خبرة."
                },
                timeline: {
                    eyebrow: "إجراءاتنا",
                    title: "كل ما تحتاجه",
                    subtitle: "من الأساس إلى التشطيب، نغطي كل جانب من جوانب دورة حياة ممتلكاتك."
                },
                items: {
                    painting: {
                        title: "الأصباغ والتشطيبات",
                        label: "01 • الأصباغ والتشطيبات",
                        short: "تشطيبات فاخرة للفلل والشقق والمباني التجارية.",
                        details: "نعمل مع علامات تجارية مثل جوتن وأصباغ آسيوية لتقديم تشطيبات تدوم طويلاً. يهتم فريقنا بتحضير الأسطح والطلاء التمهيدي والطبقات النهائية مع فحوصات جودة صارمة.",
                        features: ["صبغ الجدران الداخلية والخارجية", "أعمال الملمس والاستنسل", "طلاء الأرضيات الإيبوكسي والوقاية"]
                    },
                    electrical: {
                        title: "الكهرباء والسباكة (MEP)",
                        label: "02 • خدمات MEP",
                        short: "تركيب وصيانة آمنة ومتوافقة لجميع أنواع العقارات.",
                        details: "من الإصلاحات البسيطة إلى تحديثات MEP الكاملة، يتبع فنيونا معايير الصحة والسلامة واللوائح المحلية للحفاظ على عمل أنظمتك بأمان.",
                        features: ["تمديدات الكهرباء وترتيب اللوحات", "التجهيزات الصحية والصرف", "كشف التسربات والإصلاح"]
                    },
                    ac: {
                        title: "خدمات التكييف",
                        label: "03 • التكييف والتهوية",
                        short: "التركيب، التنظيف العميق، وعقود الصيانة السنوية.",
                        details: "نطيل عمر وحدات التكييف الخاصة بك من خلال الفحوصات التفصيلية، وتنظيف الملفات، وتعبئة الغاز، وفحوصات الأداء.",
                        features: ["صيانة المكيفات السبلت والشباك", "تنظيف مجاري التكييف والملفات", "عقود الصيانة السنوية (AMC)"]
                    },
                    civil: {
                        title: "الأعمال المدنية والطرق",
                        label: "04 • الأعمال المدنية",
                        short: "أعمال ثقيلة للفلل والمجمعات وطرق الوصول.",
                        details: "نتولى تجهيز الموقع، والأعمال الهيكلية، والتشطيبات، لضمان المتانة والالتزام بالمعايير الهندسية.",
                        features: ["رصف الأسفلت والانترلوك", "الأساسات الخرسانية", "أعمال العزل المائي والإصلاح"]
                    },
                    decor: {
                        title: "الديكور والجبس",
                        label: "05 • الديكور والجبس",
                        short: "أسقف مستعارة، قواطع، وجدران مميزة.",
                        details: "يصمم فريق الديكور لدينا وينفذ تصميمات داخلية حديثة تتناسب مع علامتك التجارية وأسلوب حياتك، بتفاصيل نظيفة ومواد عالية الجودة.",
                        features: ["أسقف جبس مستعارة", "حواجز زخرفية", "قواطع جبس وتكسية"]
                    },
                    landscaping: {
                        title: "تنسيق الحدائق",
                        label: "06 • تنسيق الحدائق",
                        short: "تصميم وصيانة المساحات الخارجية.",
                        details: "نحول المناطق الخارجية إلى مساحات قابلة للاستخدام وجميلة مع الزراعة، والري، والإضاءة، وزيارات الصيانة المنتظمة.",
                        features: ["تصميم وإنشاء الحدائق", "العشب الصناعي والطبيعي", "أنظمة الري والإضاءة"]
                    }
                },
                offer: "ماذا نقدم"
            },
            about: {
                hero: {
                    subtitle: "من نحن",
                    titleLine1: "بناء التميز في عمان",
                    titleHighlight: "بالابتكار والجودة",
                    desc: "الوطنية للطيف المبتكر (NIS) هي شركة رائدة في البناء والصيانة مقرها في مسقط. مع أكثر من عقد من الخبرة، نتخصص في تقديم حلول سكنية وتجارية عالية الجودة."
                },
                stats: {
                    experience: "سنوات خبرة",
                    projects: "مشاريع مكتملة",
                    clients: "عملاء سعداء",
                    guarantee: "ضمان الرضا"
                },
                vision: {
                    title: "رؤيتنا",
                    tag: "الرؤية",
                    desc: "أن نكون الشريك الأكثر ثقة لصيانة الممتلكات والبناء في السلطنة، معروفين بالجودة والموثوقية والابتكار."
                },
                mission: {
                    title: "مهمتنا",
                    tag: "المهمة",
                    desc: "تقديم حرفية فائقة مع ضمان السلامة والاستدامة في كل مشروع نتولاه، كبيراً كان أم صغيراً."
                },
                values: {
                    title: "قيمنا الجوهرية",
                    quality: { title: "الجودة", desc: "استخدام مواد ممتازة فقط مثل جوتن وأصباغ آسيوية." },
                    safety: { title: "السلامة", desc: "الالتزام الصارم ببروتوكولات الصحة والسلامة والبيئة في كل موقع." },
                    timeliness: { title: "الالتزام بالوقت", desc: "نحن نقدر وقتك ونلتزم بجداولنا الزمنية." }
                },
                team: {
                    title: "قيادتنا",
                    desc: "تعرف على الخبراء وراء نجاحنا.",
                    ceo: "الرئيس التنفيذي والمؤسس",
                    operations: "مدير العمليات",
                    technical: "القائد الفني"
                },
                cta: {
                    title: "جاهز للعمل مع الأفضل؟",
                    btn: "تواصل معنا"
                }
            },
            contact: {
                hero: {
                    subtitle: "تواصل معنا",
                    title: "اتصل بنا",
                    desc: "جاهز لتحويل مساحتك؟ استخدم النموذج أدناه أو تواصل معنا مباشرة."
                },
                info: {
                    title: "معلومات الاتصال",
                    phone: "الهاتف / واتساب",
                    available: "متاح 8:00 صباحاً - 8:00 مساءً",
                    email: "البريد الإلكتروني",
                    respondTime: "نرد عادة في غضون 24 ساعة.",
                    location: "موقع المكتب",
                    address: "مبنى 42، شارع 18، الخوير، مسقط، عمان",
                    locateBtn: "موقع NIS على خرائط جوجل"
                },
                form: {
                    title: "أرسل لنا رسالة",
                    successTitle: "تم الإرسال!",
                    successDesc: "شكراً لك. وسوف نتصل بك في غضون 24 ساعة.",
                    sendAnother: "إرسال أخرى",
                    name: "اسمك *",
                    phone: "رقم الهاتف *",
                    email: "البريد الإلكتروني",
                    message: "الرسالة",
                    submit: "إرسال الرسالة",
                    sending: "جاري الإرسال...",
                    errors: {
                        name: "الاسم مطلوب",
                        phone: "رقم الهاتف مطلوب",
                        phoneInvalid: "يرجى إدخال رقم هاتف صحيح (+968...)"
                    }
                },
                faq: {
                    title: "إجابات سريعة",
                    q1: "ما هي المناطق التي تغطونها؟",
                    a1: "نغطي جميع مناطق مسقط (السيب، بوشر، مطرح) والمناطق المحيطة مثل بركاء وبدبد.",
                    q2: "هل زيارات الموقع مجانية حقاً؟",
                    a2: "نعم! نقدم معاينات للموقع وتقديرات مجانية 100٪ دون أي التزام.",
                    q3: "هل تتعاملون مع وظائف الصيانة الصغيرة؟",
                    a3: "بالتأكيد. من إصلاح مكيف واحد إلى طلاء غرفة واحدة، لا توجد وظيفة صغيرة جداً."
                }
            },
            wizard: {
                step1: "ما هي المساعدة التي تحتاجها؟",
                step2: "نوع العقار؟",
                step3: "أوشكنا على الانتهاء!",
                summary: "الملخص:",
                steps: { service: "الخدمة", details: "التفاصيل", contact: "الاتصال" },
                next: "التالي",
                back: "السابق",
                submit: "إرسال الطلب",
                receivedTitle: "تم استلام الطلب!",
                receivedDesc: "لقد تلقينا طلبك بخصوص",
                callShorty: "سيتصل بك فريقنا على",
                startNew: "بدء طلب جديد"
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
