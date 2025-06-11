export type Language = "en" | "es" | "pt" | "de"

export type TranslationKey =
  | "nav.home"
  | "nav.about"
  | "nav.team"
  | "nav.products"
  | "nav.blog"
  | "nav.contact"
  | "home.hero.title"
  | "home.hero.subtitle"
  | "home.hero.cta.explore"
  | "home.hero.cta.contact"
  | "home.features.title"
  | "home.features.subtitle"
  | "home.features.research"
  | "home.features.research.desc"
  | "home.features.analysis"
  | "home.features.analysis.desc"
  | "home.features.innovation"
  | "home.features.innovation.desc"
  | "home.features.quality"
  | "home.features.quality.desc"
  | "home.cta.title"
  | "home.cta.subtitle"
  | "home.cta.button1"
  | "home.cta.button2"
  | "about.hero.title"
  | "about.hero.subtitle"
  | "about.story.title"
  | "about.story.p1"
  | "about.story.p2"
  | "about.story.p3"
  | "about.story.p4"
  | "about.story.p5"
  | "about.values.title"
  | "about.values.subtitle"
  | "about.values.integrity"
  | "about.values.integrity.desc"
  | "about.values.innovation"
  | "about.values.innovation.desc"
  | "about.values.collaboration"
  | "about.values.collaboration.desc"
  | "about.values.impact"
  | "about.values.impact.desc"
  | "about.approach.title"
  | "about.approach.p1"
  | "about.approach.p2"
  | "about.approach.p3"
  | "about.approach.p4"
  | "about.approach.p5"
  | "about.approach.p6"
  | "about.approach.p7"
  | "about.approach.p8"
  | "team.hero.title"
  | "team.hero.subtitle"
  | "team.join.title"
  | "team.join.p1"
  | "team.join.p2"
  | "team.join.button"
  | "team.member.alejandro.role"
  | "team.member.alejandro.bio"
  | "team.member.juan.role"
  | "team.member.juan.bio"
  | "team.member.alex.role"
  | "team.member.alex.bio"
  | "products.hero.title"
  | "products.hero.subtitle"
  | "products.tabs.products"
  | "products.tabs.services"
  | "products.case.title"
  | "products.case.subtitle"
  | "products.cta.title"
  | "products.cta.subtitle"
  | "products.cta.button1"
  | "products.cta.button2"
  | "blog.hero.title"
  | "blog.hero.subtitle"
  | "blog.search.placeholder"
  | "blog.newsletter.title"
  | "blog.newsletter.subtitle"
  | "blog.newsletter.button"
  | "blog.newsletter.privacy"
  | "contact.hero.title"
  | "contact.hero.subtitle"
  | "contact.form.title"
  | "contact.form.description"
  | "contact.form.name"
  | "contact.form.name.placeholder"
  | "contact.form.email"
  | "contact.form.email.placeholder"
  | "contact.form.inquiryType"
  | "contact.form.inquiryType.placeholder"
  | "contact.form.inquiryType.general"
  | "contact.form.inquiryType.products"
  | "contact.form.inquiryType.services"
  | "contact.form.inquiryType.partnership"
  | "contact.form.inquiryType.careers"
  | "contact.form.subject"
  | "contact.form.subject.placeholder"
  | "contact.form.message"
  | "contact.form.message.placeholder"
  | "contact.form.send"
  | "contact.form.sending"
  | "contact.form.success.title"
  | "contact.form.success.message"
  | "contact.form.success.button"
  | "contact.form.error.general"
  | "contact.info.title"
  | "contact.info.subtitle"
  | "contact.info.address"
  | "contact.info.phone"
  | "contact.info.email"
  | "contact.info.hours"
  | "contact.info.hours.weekdays"
  | "contact.map.title"
  | "contact.faq.title"
  | "contact.faq.subtitle"
  | "contact.faq.q1"
  | "contact.faq.a1"
  | "contact.faq.q2"
  | "contact.faq.a2"
  | "contact.faq.q3"
  | "contact.faq.a3"
  | "contact.faq.q4"
  | "contact.faq.a4"
  | "contact.faq.q5"
  | "contact.faq.a5"
  | "contact.faq.q6"
  | "contact.faq.a6"
  | "footer.description"
  | "footer.links.title"
  | "footer.resources.title"
  | "footer.contact.title"
  | "footer.copyright"
  | "blog.cannabis_oil.title"
  | "blog.cannabis_oil.excerpt"
  | "blog.cannabis_oil.history.p1"
  | "blog.cannabis_oil.history.p2"
  | "blog.cannabis_oil.history.p3"
  | "blog.cannabis_oil.recipe.title"
  | "blog.cannabis_oil.recipe.ingredients.title"
  | "blog.cannabis_oil.recipe.ingredients.list"
  | "blog.cannabis_oil.recipe.ingredients.terpenes.intro"
  | "blog.cannabis_oil.recipe.ingredients.terpenes.limonene"
  | "blog.cannabis_oil.recipe.ingredients.terpenes.linalool"
  | "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene"
  | "blog.cannabis_oil.recipe.utensils.title"
  | "blog.cannabis_oil.recipe.utensils.list"
  | "blog.cannabis_oil.recipe.instructions.title"
  | "blog.cannabis_oil.recipe.instructions.decarb.title"
  | "blog.cannabis_oil.recipe.instructions.decarb.steps"
  | "blog.cannabis_oil.recipe.instructions.infusion.title"
  | "blog.cannabis_oil.recipe.instructions.infusion.steps"
  | "blog.cannabis_oil.recipe.instructions.terpenes.title"
  | "blog.cannabis_oil.recipe.instructions.terpenes.steps"
  | "blog.cannabis_oil.recipe.instructions.straining.title"
  | "blog.cannabis_oil.recipe.instructions.straining.steps"
  | "blog.cannabis_oil.recipe.instructions.storage.title"
  | "blog.cannabis_oil.recipe.instructions.storage.steps"
  | "blog.cannabis_oil.recipe.instructions.usage.title"
  | "blog.cannabis_oil.recipe.instructions.usage.text"
  | "blog.cannabis_oil.recipe.notes.title"
  | "blog.cannabis_oil.recipe.notes.dosage"
  | "blog.cannabis_oil.recipe.notes.terpenes"
  | "blog.cannabis_oil.recipe.conclusion"
  | "blog.cannabis_oil.disclaimer"
  | "blog.cannabis_oil.closing.p1"
  | "blog.cannabis_oil.closing.p2"
  | "blog.cannabis_oil.tags.traditional"
  | "blog.cannabis_oil.tags.recipes"
  | "blog.cannabis_oil.tags.terpenes"
  | "blog.cannabis_oil.tags.cannabis"
  | "blog.back_to_blog"
  | "blog.share_article"
  | "blog.link_copied"
  | "blog.related_articles"
  | "blog.read_more"
  | "blog.featured_article"
  | "blog.latest_articles"
  | "blog.no_posts_found"
  | "blog.read_full_article"
  | "blog.in_this_article"
  | "blog.cannabis_oil.outline.history"
  | "blog.cannabis_oil.outline.traditional_uses"
  | "blog.cannabis_oil.outline.modern_applications"
  | "blog.cannabis_oil.outline.recipe"

export const translations: Record<Language, Record<TranslationKey, string>> = {
  en: {
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.team": "Our Team",
    "nav.products": "Products & Services",
    "nav.blog": "Blog",
    "nav.contact": "Contact Us",

    "home.hero.title": "Advancing Science Through Research & Innovation",
    "home.hero.subtitle":
      "Terpenos is at the forefront of scientific discovery, providing cutting-edge solutions and research for a better tomorrow.",
    "home.hero.cta.explore": "Explore Our Solutions",
    "home.hero.cta.contact": "Contact Us",

    "home.features.title": "Scientific Excellence",
    "home.features.subtitle":
      "Discover how our innovative approach to science is transforming industries and advancing research.",
    "home.features.research": "Research",
    "home.features.research.desc": "Pioneering scientific research to solve complex challenges.",
    "home.features.analysis": "Analysis",
    "home.features.analysis.desc": "Advanced analytical techniques for precise results.",
    "home.features.innovation": "Innovation",
    "home.features.innovation.desc": "Developing next-generation scientific solutions.",
    "home.features.quality": "Quality",
    "home.features.quality.desc": "Commitment to excellence and scientific integrity.",

    "home.cta.title": "Ready to Collaborate?",
    "home.cta.subtitle": "Join us in pushing the boundaries of scientific discovery and innovation.",
    "home.cta.button1": "Get in Touch",
    "home.cta.button2": "Explore Our Services",

    "about.hero.title": "About Terpenos",
    "about.hero.subtitle": "Pioneering scientific research and innovation for a better future.",
    "about.story.title": "Our Story",
    "about.story.p1":
      "In the heart of Quito, Ecuador, lies a pioneering force in the cannabis industry—Terpenos.com. Established in 2021, our journey is not just a tale of business inception but a profound narrative that intertwines with the history and evolution of cannabis as medicine. Our roots delve deep into the early days of cannabis legalization campaigns in Berkeley and Oakland, California, where our founders were not just spectators but active volunteers and advocates. Their dedication to the cause saw them alongside influential organizations such as Oaksterdam and Harborside, witnessing first-hand the challenges and triumphs that shaped the industry.",
    "about.story.p2":
      "Our story, however, did not start with the founding of Terpenos.com. It is a continuation of a decade-long legacy of excellence and innovation in the pharmaceutical and food manufacturing sectors. Our founders brought with them a wealth of experience, having worked with top-tier private label food and pharmaceutical manufacturers, where they were instrumental in implementing world-class systems. This invaluable experience laid the groundwork for what Terpenos.com would become—a leader in the cannabis space, dedicated to the highest standards of quality and safety.",
    "about.story.p3":
      "Today, Terpenos.com stands as a fully licensed importer of cannabis-derived molecules, operating out of Ecuador with a satellite presence in California. Our laboratory is at the forefront of developing and maintaining processes that guarantee the pharmaceutical and food-grade quality of our formulations and raw materials. We specialize in terpenes, CBD, and other legal cannabinoids, catering to customers that seek unparalleled purity and efficacy. Our story is a testament to the belief that cannabis is medicine, a belief that has driven us from the early days of legalization campaigns to the cutting-edge of the industry today. At Terpenos.com, we are more than just a company; we are a part of a global movement towards wellness, innovation, and the unyielding pursuit of excellence in the cannabis domain.",

    "about.values.title": "Our Values",
    "about.values.subtitle": "The principles that guide our work and define our culture.",
    "about.values.integrity": "Scientific Integrity",
    "about.values.integrity.desc":
      "We uphold the highest standards of scientific rigor and ethical conduct in all our work.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "We foster a culture of creativity and continuous improvement to drive scientific progress.",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.desc":
      "We believe in the power of teamwork and partnerships to solve complex challenges.",
    "about.values.impact": "Impact",
    "about.values.impact.desc": "We are committed to research that makes a meaningful difference in the world.",

    "about.approach.title": "Our Approach",
    "about.approach.p1":
      "At Terpenos.com, our approach is rooted in science, guided by purpose, and fueled by innovation. From our state-of-the-art lab in Ecuador to our strategic presence in California, we apply rigorous standards to every step of our process—ensuring that every molecule we import or formulate meets pharmaceutical and food-grade benchmarks.",
    "about.approach.p2":
      "We partner with multiple FDA-certified laboratories in the United States to validate the safety, purity, and consistency of our products. These collaborations reinforce our commitment to quality assurance and global compliance, bridging science and trust across borders.",
    "about.approach.p3":
      "We don't just work with cannabis—we work with intention. Specializing in terpenes, CBD, and legal cannabinoids, we collaborate with pharmaceutical companies, food labs, and wellness brands that demand purity, traceability, and efficacy.",
    "about.approach.p4":
      "Our work is grounded in the belief that cannabis is medicine. That conviction drives us to maintain the highest levels of integrity, transparency, and quality in an industry still defining its future. Whether we're formulating bespoke terpene profiles or importing active ingredients, we act as stewards of a plant we respect deeply.",
    "about.approach.p5": "This is more than commerce. It's a mission. It's our approach.",

    "team.hero.title": "Our Team",
    "team.hero.subtitle": "Meet the brilliant minds behind our scientific innovations.",
    "team.join.title": "Join Our Team",
    "team.join.p1":
      "We're always looking for talented scientists, researchers, and professionals to join our team. At Terpenos, you'll have the opportunity to work on cutting-edge research, collaborate with brilliant minds, and make a meaningful impact.",
    "team.join.p2":
      "We offer a stimulating work environment, competitive benefits, and opportunities for professional growth and development.",
    "team.join.button": "View Open Positions",
    "team.member.alejandro.role": "Chief Scientific Officer",
    "team.member.alejandro.bio":
      "Alejandro leads our research initiatives with over 10 years of experience in biotechnology. He leads all science and production.",
    "team.member.juan.role": "Chief Executive Officer",
    "team.member.juan.bio":
      "With an Masters in Business Administration and successful exits, Juan brings a commercial powerhouse to the team. He leads sales and operations.",
    "team.member.alex.role": "CMO/Big Brain",
    "team.member.alex.bio":
      "Alex is the interim CMO and provides support and guidance to the team as chairman of the board of directors. He has founded multiple successful companies before and consults for research and innovation laboratories in the United States.",

    "products.hero.title": "Products & Services",
    "products.hero.subtitle": "Innovative scientific solutions tailored to your needs.",
    "products.tabs.products": "Products",
    "products.tabs.services": "Services",
    "products.case.title": "Case Studies",
    "products.case.subtitle":
      "See how our products and services have helped organizations achieve their scientific goals.",
    "products.cta.title": "Ready to Get Started?",
    "products.cta.subtitle":
      "Contact us today to discuss how our products and services can support your scientific endeavors.",
    "products.cta.button1": "Contact Us",
    "products.cta.button2": "Learn More About Us",

    "blog.hero.title": "Our Blog",
    "blog.hero.subtitle": "Insights, discoveries, and perspectives from our scientific team.",
    "blog.search.placeholder": "Search articles...",
    "blog.newsletter.title": "Stay Updated",
    "blog.newsletter.subtitle": "Subscribe to our newsletter to receive the latest scientific insights and updates.",
    "blog.newsletter.button": "Subscribe",
    "blog.newsletter.privacy": "We respect your privacy. Unsubscribe at any time.",

    "contact.hero.title": "Contact Us",
    "contact.hero.subtitle": "We'd love to hear from you. Get in touch with our team.",
    "contact.form.title": "Send Us a Message",
    "contact.form.description": "Fill out the form below and we'll get back to you as soon as possible.",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Your name",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "Your email",
    "contact.form.inquiryType": "Inquiry Type",
    "contact.form.inquiryType.placeholder": "Select inquiry type",
    "contact.form.inquiryType.general": "General Inquiry",
    "contact.form.inquiryType.products": "Products",
    "contact.form.inquiryType.services": "Services",
    "contact.form.inquiryType.partnership": "Partnership",
    "contact.form.inquiryType.careers": "Careers",
    "contact.form.subject": "Subject",
    "contact.form.subject.placeholder": "Subject of your message",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Your message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Message Sent Successfully",
    "contact.form.success.message": "Thank you for reaching out! We'll get back to you shortly.",
    "contact.form.success.button": "Send Another Message",
    "contact.form.error.general": "An unexpected error occurred. Please try again later.",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out to us through any of the following channels.",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Hours",
    "contact.info.hours.weekdays": "Monday - Friday",
    "contact.map.title": "Terpenos Location - Multicentro Shopping Center",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.subtitle": "Find answers to common questions about our products and services.",
    "contact.faq.q1": "What areas of research does Terpenos specialize in?",
    "contact.faq.a1":
      "Terpenos specializes in molecular biology, biochemistry, analytical chemistry, and related fields. Our interdisciplinary approach allows us to tackle complex scientific challenges across various domains.",
    "contact.faq.q2": "Do you offer custom research services?",
    "contact.faq.a2":
      "Yes, we provide tailored research services to meet specific client needs. Our team can design and execute research projects from concept to completion, delivering comprehensive results and analysis.",
    "contact.faq.q3": "What is your typical turnaround time for laboratory analysis?",
    "contact.faq.a3":
      "Turnaround times vary depending on the complexity of the analysis, but we strive to deliver results as efficiently as possible without compromising quality. Standard analyses typically take 5-7 business days.",
    "contact.faq.q4": "Do you ship products internationally?",
    "contact.faq.a4":
      "Yes, we ship our products worldwide. International shipping times and costs vary by destination. Please contact us for specific information regarding your location.",
    "contact.faq.q5": "Can I schedule a consultation with your scientific team?",
    "contact.faq.a5":
      "Absolutely. We offer consultations with our scientific experts to discuss your research needs, challenges, and potential solutions. Please contact us to arrange a meeting.",
    "contact.faq.q6": "Do you offer training for your analytical equipment?",
    "contact.faq.a6":
      "Yes, we provide comprehensive training for all our equipment and software. Training can be conducted on-site or remotely, depending on your preference and requirements.",

    "footer.description": "Innovative scientific solutions and research for a better future.",
    "footer.links.title": "Quick Links",
    "footer.resources.title": "Resources",
    "footer.contact.title": "Contact",
    "footer.copyright": "All rights reserved.",
    "blog.cannabis_oil.title": "The Long Tradition of Cannabis-Infused Oils with a Recipe",
    "blog.cannabis_oil.excerpt":
      "Explore the ancient history and modern applications of cannabis-infused oils, along with a detailed recipe for making your own infusion with specific terpenes.",
    "blog.cannabis_oil.history.p1":
      'The practice of infusing cannabis with oils is a time-honored tradition that spans centuries and cultures, reflecting a deep understanding of the plant\'s medicinal and therapeutic potential. Ancient civilizations, such as those in China and India, were among the first to explore the benefits of cannabis-infused oils. In traditional Chinese medicine, cannabis was used as a key ingredient in various remedies, with records dating back to 2737 BCE in its use for treating ailments such as pain and inflammation. Similarly, in India, cannabis has been an integral part of Ayurvedic medicine, where it is known as "bhang" and used in oils and pastes to treat a variety of conditions, including digestive issues and skin diseases.',
    "blog.cannabis_oil.history.p2":
      "The Middle East also has a rich history of cannabis use, particularly in regions like Persia (modern-day Iran), where cannabis-infused oils were utilized for their analgesic and anti-inflammatory properties. Islamic physicians during the medieval period, such as Avicenna, documented the therapeutic applications of cannabis in their medical texts, highlighting its role in pain relief and muscle relaxation. These ancient practices eventually spread to other parts of the world, including Africa and Europe, where cannabis-infused oils were incorporated into folk medicine traditions for their soothing and healing effects.",
    "blog.cannabis_oil.history.p3":
      "In more recent history, the use of cannabis-infused oils has seen a resurgence, driven by growing interest in natural and holistic health remedies. The storied traditions of cannabis infusion methods have been revived and refined, combining ancient wisdom with modern scientific understanding. Today, cannabis-infused oils are widely recognized for their versatility and efficacy, continuing a legacy of healing that has transcended time and geography.",
    "blog.cannabis_oil.recipe.title": "Cannabis-Infused Oil Recipe with Terpenes",
    "blog.cannabis_oil.recipe.ingredients.title": "Ingredients:",
    "blog.cannabis_oil.recipe.ingredients.list":
      "1 cup of coconut oil or olive oil (according to your preference)\n10 grams of cannabis flowers (decarboxylated)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.intro": "Terpenes (optional, according to preference):",
    "blog.cannabis_oil.recipe.ingredients.terpenes.limonene":
      "2 drops of Limonene (for a citrus aroma and energizing effects)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.linalool":
      "2 drops of Linalool (for a floral aroma and relaxing effects)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene":
      "2 drops of Myrcene (for an earthy aroma and sedative effects)",
    "blog.cannabis_oil.recipe.utensils.title": "Utensils:",
    "blog.cannabis_oil.recipe.utensils.list":
      "Coffee grinder or herb grinder\nBaking tray\nParchment paper\nDouble boiler or a pot and a heat-resistant container\nFine mesh strainer or cheesecloth\nGlass jar for storage",
    "blog.cannabis_oil.recipe.instructions.title": "Instructions:",
    "blog.cannabis_oil.recipe.instructions.decarb.title": "Decarboxylation of Cannabis:",
    "blog.cannabis_oil.recipe.instructions.decarb.steps":
      "1. Preheat the oven to 115°C (240°F).\n2. Grind the cannabis flowers with the coffee grinder or herb grinder.\n3. Place the ground cannabis on a baking tray lined with parchment paper.\n4. Bake the cannabis for 30-40 minutes, stirring every 10 minutes to ensure even decarboxylation. This process activates the psychoactive compounds in the cannabis.",
    "blog.cannabis_oil.recipe.instructions.infusion.title": "Infusion of the Oil:",
    "blog.cannabis_oil.recipe.instructions.infusion.steps":
      "1. Fill the bottom part of the double boiler with water and bring it to a low simmer.\n2. Place the oil (coconut or olive) in the top part of the double boiler.\n3. Add the decarboxylated cannabis to the oil.\n4. Keep the mixture on low heat for 2-3 hours, stirring occasionally. Ensure the oil does not boil.",
    "blog.cannabis_oil.recipe.instructions.terpenes.title": "Addition of Terpenes (Optional):",
    "blog.cannabis_oil.recipe.instructions.terpenes.steps":
      "1. If you want to add specific terpenes, add them to the warm oil after the infusion process, stirring well to mix evenly.",
    "blog.cannabis_oil.recipe.instructions.straining.title": "Straining:",
    "blog.cannabis_oil.recipe.instructions.straining.steps":
      "1. Once the infusion is complete, strain the mixture through a fine mesh strainer or cheesecloth to separate the oil from the cannabis residue.\n2. Squeeze the residue well to extract as much oil as possible.",
    "blog.cannabis_oil.recipe.instructions.storage.title": "Storage:",
    "blog.cannabis_oil.recipe.instructions.storage.steps":
      "1. Pour the infused oil into a clean glass jar.\n2. Store in a cool, dark place. The cannabis oil can last up to two months if stored properly.",
    "blog.cannabis_oil.recipe.instructions.usage.title": "Usage:",
    "blog.cannabis_oil.recipe.instructions.usage.text":
      "You can use this infused oil in various culinary recipes, such as salad dressings, sautéed dishes, or even as a substitute for oil in baked goods. It can also serve as a base for homemade creams or balms.",
    "blog.cannabis_oil.recipe.notes.title": "Notes:",
    "blog.cannabis_oil.recipe.notes.dosage":
      "Dosage: It's important to remember that the potency of the oil depends on the concentration of THC and CBD in the cannabis flower used. Start with a small amount and adjust according to your needs and tolerance.",
    "blog.cannabis_oil.recipe.notes.terpenes":
      "Terpenes: Adding terpenes is optional and can be adjusted according to your preferred aroma and desired effects.",
    "blog.cannabis_oil.recipe.conclusion": "I hope you enjoy preparing and using this cannabis-infused oil!",
    "blog.cannabis_oil.disclaimer":
      "This recipe is intended solely for personal consumption and is not meant to cure any illness or health issue. The use of cannabis-infused oils should be carried out responsibly and in accordance with local and national cannabis laws. Always consult with a healthcare professional before using cannabis products, especially if you have pre-existing medical conditions or are taking medications.",
    "blog.cannabis_oil.closing.p1":
      'This recipe combines traditional infusion methods with modern understanding of terpenes, allowing you to customize the aromatic and therapeutic profile of your cannabis-infused oil. The addition of specific terpenes enhances not only the sensory experience but also potentially the therapeutic effects through what is known as the "entourage effect" – the synergistic interaction between cannabinoids and terpenes.',
    "blog.cannabis_oil.closing.p2":
      "As you embark on creating your own cannabis-infused oils, you're participating in a tradition that connects you to healers and herbalists across millennia, while also embracing contemporary knowledge about plant medicine and wellness.",
    "blog.cannabis_oil.tags.traditional": "Traditional Medicine",
    "blog.cannabis_oil.tags.recipes": "Recipes",
    "blog.cannabis_oil.tags.terpenes": "Terpenes",
    "blog.cannabis_oil.tags.cannabis": "Cannabis",
    "blog.back_to_blog": "Back to Blog",
    "blog.share_article": "Share Article",
    "blog.link_copied": "Link copied to clipboard!",
    "blog.related_articles": "Related Articles",
    "blog.read_more": "Read More",
    "blog.featured_article": "Featured Article",
    "blog.latest_articles": "Latest Articles",
    "blog.no_posts_found": "No blog posts found matching your search.",
    "blog.read_full_article": "Read Full Article",
    "blog.in_this_article": "In this article",
    "blog.cannabis_oil.outline.history": "Ancient History of Cannabis-Infused Oils",
    "blog.cannabis_oil.outline.traditional_uses": "Traditional Uses Across Cultures",
    "blog.cannabis_oil.outline.modern_applications": "Modern Applications",
    "blog.cannabis_oil.outline.recipe": "Recipe with Terpene Additions",
  },

  es: {
    "nav.home": "Inicio",
    "nav.about": "Sobre Nosotros",
    "nav.team": "Nuestro Equipo",
    "nav.products": "Productos y Servicios",
    "nav.blog": "Blog",
    "nav.contact": "Contacto",

    "home.hero.title": "Avanzando la Ciencia a través de la Investigación e Innovación",
    "home.hero.subtitle":
      "Terpenos está a la vanguardia del descubrimiento científico, proporcionando soluciones de última generación e investigación para un mejor mañana.",
    "home.hero.cta.explore": "Explorar Nuestras Soluciones",
    "home.hero.cta.contact": "Contáctenos",

    "home.features.title": "Excelencia Científica",
    "home.features.subtitle":
      "Descubra cómo nuestro enfoque innovador de la ciencia está transformando industrias y avanzando la investigación.",
    "home.features.research": "Investigación",
    "home.features.research.desc": "Investigación científica pionera para resolver desafíos complejos.",
    "home.features.analysis": "Análisis",
    "home.features.analysis.desc": "Técnicas analíticas avanzadas para resultados precisos.",
    "home.features.innovation": "Innovación",
    "home.features.innovation.desc": "Desarrollando soluciones científicas de próxima generación.",
    "home.features.quality": "Calidad",
    "home.features.quality.desc": "Compromiso con la excelencia y la integridad científica.",

    "home.cta.title": "¿Listo para Colaborar?",
    "home.cta.subtitle": "Únase a nosotros para expandir los límites del descubrimiento científico y la innovación.",
    "home.cta.button1": "Póngase en Contacto",
    "home.cta.button2": "Explorar Nuestros Servicios",

    "about.hero.title": "Sobre Terpenos",
    "about.hero.subtitle": "Investigación científica pionera e innovación para un futuro mejor.",
    "about.story.title": "Nuestra Historia",
    "about.story.p1":
      "En el corazón de Quito, Ecuador, se encuentra una fuerza pionera en la industria del cannabis: Terpenos.com. Establecida en 2021, nuestra trayectoria no es solo una historia de inicio empresarial, sino una narrativa profunda que se entrelaza con la historia y evolución del cannabis como medicina. Nuestras raíces se adentran en los primeros días de las campañas de legalización del cannabis en Berkeley y Oakland, California, donde nuestros fundadores no fueron simples espectadores, sino voluntarios activos y defensores. Su dedicación a la causa los llevó a colaborar con organizaciones influyentes como Oaksterdam y Harborside, presenciando de primera mano los desafíos y triunfos que moldearon la industria.",
    "about.story.p2":
      "Sin embargo, nuestra historia no comenzó con la fundación de Terpenos.com. Es la continuación de un legado de excelencia e innovación de una década en los sectores farmacéutico y de fabricación de alimentos. Nuestros fundadores trajeron consigo una gran experiencia, habiendo trabajado con fabricantes de alimentos y productos farmacéuticos de marca privada de primer nivel, donde fueron fundamentales en la implementación de sistemas de clase mundial. Esta invaluable experiencia sentó las bases para lo que Terpenos.com llegaría a ser: un líder en el espacio del cannabis, dedicado a los más altos estándares de calidad y seguridad.",
    "about.story.p3":
      "Hoy, Terpenos.com se erige como un importador con licencia completa de moléculas derivadas del cannabis, operando desde Ecuador con presencia satelital en California. Nuestro laboratorio está a la vanguardia del desarrollo y mantenimiento de procesos que garantizan la calidad farmacéutica y alimentaria de nuestras formulaciones y materias primas. Nos especializamos en terpenos, CBD y otros cannabinoides legales, atendiendo a clientes que buscan pureza y eficacia sin igual. Nuestra historia es un testimonio de la creencia de que el cannabis es medicina, una convicción que nos ha impulsado desde los primeros días de las campañas de legalización hasta la vanguardia de la industria actual. En Terpenos.com, somos más que una empresa; somos parte de un movimiento global hacia el bienestar, la innovación y la búsqueda inquebrantable de la excelencia en el ámbito del cannabis.",

    "about.values.title": "Nuestros Valores",
    "about.values.subtitle": "Los principios que guían nuestro trabajo y definen nuestra cultura.",
    "about.values.integrity": "Integridad Científica",
    "about.values.integrity.desc":
      "Mantenemos los más altos estándares de rigor científico y conducta ética en todo nuestro trabajo.",
    "about.values.innovation": "Innovación",
    "about.values.innovation.desc":
      "Fomentamos una cultura de creatividad y mejora continua para impulsar el progreso científico.",
    "about.values.collaboration": "Colaboración",
    "about.values.collaboration.desc":
      "Creemos en el poder del trabajo en equipo y las asociaciones para resolver desafíos complejos.",
    "about.values.impact": "Impacto",
    "about.values.impact.desc":
      "Estamos comprometidos con la investigación que marca una diferencia significativa en el mundo.",

    "about.approach.title": "Nuestro Enfoque",
    "about.approach.p1":
      "En Terpenos.com, nuestro enfoque está arraigado en la ciencia, guiado por un propósito y alimentado por la innovación. Desde nuestro laboratorio de última generación en Ecuador hasta nuestra presencia estratégica en California, aplicamos estándares rigurosos en cada paso de nuestro proceso, asegurando que cada molécula que importamos o formulamos cumpla con los puntos de referencia farmacéuticos y de grado alimenticio.",
    "about.approach.p2":
      "Nos asociamos con múltiples laboratorios certificados por la FDA en los Estados Unidos para validar la seguridad, pureza y consistencia de nuestros productos. Estas colaboraciones refuerzan nuestro compromiso con la garantía de calidad y el cumplimiento global, tendiendo puentes entre la ciencia y la confianza a través de las fronteras.",
    "about.approach.p3":
      "No solo trabajamos con cannabis, trabajamos con intención. Especializándonos en terpenos, CBD y cannabinoides legales, colaboramos con empresas farmacéuticas, laboratorios de alimentos y marcas de bienestar que exigen pureza, trazabilidad y eficacia.",
    "about.approach.p4":
      "Nuestro trabajo se basa en la creencia de que el cannabis es medicina. Esa convicción nos impulsa a mantener los más altos niveles de integridad, transparencia y calidad en una industria que aún está definiendo su futuro. Ya sea que estemos formulando perfiles de terpenos a medida o importando ingredientes activos, actuamos como administradores de una planta que respetamos profundamente.",
    "about.approach.p5": "Esto es más que comercio. Es una misión. Es nuestro enfoque.",

    "team.hero.title": "Nuestro Equipo",
    "team.hero.subtitle": "Conozca las mentes brillantes detrás de nuestras innovaciones científicas.",
    "team.join.title": "Únase a Nuestro Equipo",
    "team.join.p1":
      "Siempre estamos buscando científicos, investigadores y profesionales talentosos para unirse a nuestro equipo. En Terpenos, tendrá la oportunidad de trabajar en investigación de vanguardia, colaborar con mentes brillantes y generar un impacto significativo.",
    "team.join.p2":
      "Ofrecemos un entorno de trabajo estimulante, beneficios competitivos y oportunidades para el crecimiento y desarrollo profesional.",
    "team.join.button": "Ver Posiciones Abiertas",
    "team.member.alejandro.role": "Director Científico Principal",
    "team.member.alejandro.bio":
      "Alejandro lidera nuestras iniciativas de investigación con más de 10 años de experiencia en biotecnología. Dirige toda la ciencia y producción.",
    "team.member.juan.role": "Director Ejecutivo Principal",
    "team.member.juan.bio":
      "Con una Maestría en Administración de Empresas y salidas exitosas, Juan aporta una potencia comercial al equipo. Lidera ventas y operaciones.",
    "team.member.alex.role": "CMO/Cerebro Principal",
    "team.member.alex.bio":
      "Alex es el CMO interino y proporciona apoyo y orientación al equipo como presidente del consejo de administración. Ha fundado múltiples empresas exitosas antes y consulta para laboratorios de investigación e innovación en los Estados Unidos.",

    "products.hero.title": "Productos y Servicios",
    "products.hero.subtitle": "Soluciones científicas innovadoras adaptadas a sus necesidades.",
    "products.tabs.products": "Productos",
    "products.tabs.services": "Servicios",
    "products.case.title": "Casos de Estudio",
    "products.case.subtitle":
      "Vea cómo nuestros productos y servicios han ayudado a organizaciones a lograr sus objetivos científicos.",
    "products.cta.title": "¿Listo para Comenzar?",
    "products.cta.subtitle":
      "Contáctenos hoy para discutir cómo nuestros productos y servicios pueden apoyar sus esfuerzos científicos.",
    "products.cta.button1": "Contáctenos",
    "products.cta.button2": "Conozca Más Sobre Nosotros",

    "blog.hero.title": "Nuestro Blog",
    "blog.hero.subtitle": "Perspectivas, descubrimientos y opiniones de nuestro equipo científico.",
    "blog.search.placeholder": "Buscar artículos...",
    "blog.newsletter.title": "Manténgase Actualizado",
    "blog.newsletter.subtitle":
      "Suscríbase a nuestro boletín para recibir las últimas perspectivas y actualizaciones científicas.",
    "blog.newsletter.button": "Suscribirse",
    "blog.newsletter.privacy": "Respetamos su privacidad. Cancele su suscripción en cualquier momento.",

    "contact.hero.title": "Contáctenos",
    "contact.hero.subtitle": "Nos encantaría saber de usted. Póngase en contacto con nuestro equipo.",
    "contact.form.title": "Envíenos un Mensaje",
    "contact.form.description":
      "Complete el formulario a continuación y nos pondremos en contacto con usted lo antes posible.",
    "contact.form.name": "Nombre",
    "contact.form.name.placeholder": "Su nombre",
    "contact.form.email": "Correo Electrónico",
    "contact.form.email.placeholder": "Su correo electrónico",
    "contact.form.inquiryType": "Tipo de Consulta",
    "contact.form.inquiryType.placeholder": "Seleccione el tipo de consulta",
    "contact.form.inquiryType.general": "Consulta General",
    "contact.form.inquiryType.products": "Productos",
    "contact.form.inquiryType.services": "Servicios",
    "contact.form.inquiryType.partnership": "Asociación",
    "contact.form.inquiryType.careers": "Carreras",
    "contact.form.subject": "Asunto",
    "contact.form.subject.placeholder": "Asunto de su mensaje",
    "contact.form.message": "Mensaje",
    "contact.form.message.placeholder": "Su mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success.title": "Mensaje Enviado Exitosamente",
    "contact.form.success.message": "¡Gracias por contactarnos! Nos pondremos en contacto con usted pronto.",
    "contact.form.success.button": "Enviar Otro Mensaje",
    "contact.form.error.general": "Ocurrió un error inesperado. Por favor, inténtelo de nuevo más tarde.",
    "contact.info.title": "Información de Contacto",
    "contact.info.subtitle": "Comuníquese con nosotros a través de cualquiera de los siguientes canales.",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Correo Electrónico",
    "contact.info.hours": "Horario",
    "contact.info.hours.weekdays": "Lunes - Viernes",
    "contact.map.title": "Ubicación de Terpenos - Centro Comercial Multicentro",
    "contact.faq.title": "Preguntas Frecuentes",
    "contact.faq.subtitle": "Encuentre respuestas a preguntas comunes sobre nuestros productos y servicios.",
    "contact.faq.q1": "¿En qué áreas de investigación se especializa Terpenos?",
    "contact.faq.a1":
      "Terpenos se especializa en biología molecular, bioquímica, química analítica y campos relacionados. Nuestro enfoque interdisciplinario nos permite abordar desafíos científicos complejos en diversos dominios.",
    "contact.faq.q2": "¿Ofrecen servicios de investigación personalizados?",
    "contact.faq.a2":
      "Sí, proporcionamos servicios de investigación adaptados para satisfacer las necesidades específicas de los clientes. Nuestro equipo puede diseñar y ejecutar proyectos de investigación desde el concepto hasta la finalización, entregando resultados y análisis completos.",
    "contact.faq.q3": "¿Cuál es su tiempo de respuesta típico para análisis de laboratorio?",
    "contact.faq.a3":
      "Los tiempos de respuesta varían según la complejidad del análisis, pero nos esforzamos por entregar resultados de manera eficiente sin comprometer la calidad. Los análisis estándar generalmente toman de 5 a 7 días hábiles.",
    "contact.faq.q4": "¿Envían productos internacionalmente?",
    "contact.faq.a4":
      "Sí, enviamos nuestros productos a todo el mundo. Los tiempos y costos de envío internacional varían según el destino. Contáctenos para obtener información específica sobre su ubicación.",
    "contact.faq.q5": "¿Puedo programar una consulta con su equipo científico?",
    "contact.faq.a5":
      "Absolutamente. Ofrecemos consultas con nuestros expertos científicos para discutir sus necesidades de investigación, desafíos y posibles soluciones. Contáctenos para organizar una reunión.",
    "contact.faq.q6": "¿Ofrecen capacitación para su equipo analítico?",
    "contact.faq.a6":
      "Sí, proporcionamos capacitación integral para todos nuestros equipos y software. La capacitación puede realizarse en el sitio o de forma remota, según su preferencia y requisitos.",

    "footer.description": "Soluciones e investigación científica innovadoras para un futuro mejor.",
    "footer.links.title": "Enlaces Rápidos",
    "footer.resources.title": "Recursos",
    "footer.contact.title": "Contacto",
    "footer.copyright": "Todos los derechos reservados.",
    "blog.cannabis_oil.title": "La Larga Tradición de los Aceites Infusionados con Cannabis con una Receta",
    "blog.cannabis_oil.excerpt":
      "Explora la historia antigua y las aplicaciones modernas de los aceites infusionados con cannabis, junto con una receta detallada para hacer tu propia infusión con terpenos específicos.",
    "blog.cannabis_oil.history.p1":
      'La práctica de infusionar cannabis con aceites es una tradición ancestral que abarca siglos y culturas, reflejando una comprensión profunda del potencial medicinal y terapéutico de la planta. Las civilizaciones antiguas, como las de China e India, fueron de las primeras en explorar los beneficios de los aceites infusionados con cannabis. En la medicina tradicional china, el cannabis se utilizaba como ingrediente clave en varios remedios, con registros que datan del año 2737 a.C. en su uso para tratar dolencias como el dolor y la inflamación. De manera similar, en la India, el cannabis ha sido parte integral de la medicina ayurvédica, donde se conoce como "bhang" y se utiliza en aceites y pastas para tratar una variedad de condiciones, incluyendo problemas digestivos y enfermedades de la piel.',
    "blog.cannabis_oil.history.p2":
      "El Medio Oriente también tiene una rica historia de uso del cannabis, particularmente en regiones como Persia (actual Irán), donde los aceites infusionados con cannabis se utilizaban por sus propiedades analgésicas y antiinflamatorias. Los médicos islámicos durante el período medieval, como Avicena, documentaron las aplicaciones terapéuticas del cannabis en sus textos médicos, destacando su papel en el alivio del dolor y la relajación muscular. Estas prácticas antiguas eventualmente se extendieron a otras partes del mundo, incluyendo África y Europa, donde los aceites infusionados con cannabis se incorporaron a las tradiciones de medicina popular por sus efectos calmantes y curativos.",
    "blog.cannabis_oil.history.p3":
      "En la historia más reciente, el uso de aceites infusionados con cannabis ha experimentado un resurgimiento, impulsado por el creciente interés en remedios naturales y holísticos para la salud. Las tradiciones históricas de los métodos de infusión de cannabis han sido revividas y refinadas, combinando la sabiduría antigua con el entendimiento científico moderno. Hoy en día, los aceites infusionados con cannabis son ampliamente reconocidos por su versatilidad y eficacia, continuando un legado de curación que ha trascendido el tiempo y la geografía.",
    "blog.cannabis_oil.recipe.title": "Receta de Aceite Infusionado con Cannabis y Terpenos",
    "blog.cannabis_oil.recipe.ingredients.title": "Ingredientes:",
    "blog.cannabis_oil.recipe.ingredients.list":
      "1 taza de aceite de coco o aceite de oliva (según tu preferencia)\n10 gramos de flores de cannabis (descarboxiladas)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.intro": "Terpenos (opcional, según preferencia):",
    "blog.cannabis_oil.recipe.ingredients.terpenes.limonene":
      "2 gotas de Limoneno (para un aroma cítrico y efectos energizantes)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.linalool":
      "2 gotas de Linalool (para un aroma floral y efectos relajantes)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene":
      "2 gotas de Mirceno (para un aroma terroso y efectos sedantes)",
    "blog.cannabis_oil.recipe.utensils.title": "Utensilios:",
    "blog.cannabis_oil.recipe.utensils.list":
      "Molinillo de café o molinillo de hierbas\nBandeja para hornear\nPapel pergamino\nBaño maría o una olla y un recipiente resistente al calor\nColador de malla fina o tela de queso\nFrasco de vidrio para almacenamiento",
    "blog.cannabis_oil.recipe.instructions.title": "Instrucciones:",
    "blog.cannabis_oil.recipe.instructions.decarb.title": "Descarboxilación del Cannabis:",
    "blog.cannabis_oil.recipe.instructions.decarb.steps":
      "1. Precalienta el horno a 115°C (240°F).\n2. Muele las flores de cannabis con el molinillo de café o molinillo de hierbas.\n3. Coloca el cannabis molido en una bandeja para hornear forrada con papel pergamino.\n4. Hornea el cannabis durante 30-40 minutos, revolviendo cada 10 minutos para asegurar una descarboxilación uniforme. Este proceso activa los compuestos psicoactivos en el cannabis.",
    "blog.cannabis_oil.recipe.instructions.infusion.title": "Infusión del Aceite:",
    "blog.cannabis_oil.recipe.instructions.infusion.steps":
      "1. Llena la parte inferior del baño maría con agua y llévala a fuego lento.\n2. Coloca el aceite (de coco o de oliva) en la parte superior del baño maría.\n3. Añade el cannabis descarboxilado al aceite.\n4. Mantén la mezcla a fuego lento durante 2-3 horas, revolviendo ocasionalmente. Asegúrate de que el aceite no hierva.",
    "blog.cannabis_oil.recipe.instructions.terpenes.title": "Adición de Terpenos (Opcional):",
    "blog.cannabis_oil.recipe.instructions.terpenes.steps":
      "1. Si deseas añadir terpenos específicos, agrégalos al aceite tibio después del proceso de infusión, revolviendo bien para mezclar uniformemente.",
    "blog.cannabis_oil.recipe.instructions.straining.title": "Colado:",
    "blog.cannabis_oil.recipe.instructions.straining.steps":
      "1. Una vez que la infusión esté completa, cuela la mezcla a través de un colador de malla fina o tela de queso para separar el aceite de los residuos de cannabis.\n2. Exprime bien los residuos para extraer la mayor cantidad de aceite posible.",
    "blog.cannabis_oil.recipe.instructions.storage.title": "Almacenamiento:",
    "blog.cannabis_oil.recipe.instructions.storage.steps":
      "1. Vierte el aceite infusionado en un frasco de vidrio limpio.\n2. Almacena en un lugar fresco y oscuro. El aceite de cannabis puede durar hasta dos meses si se almacena adecuadamente.",
    "blog.cannabis_oil.recipe.instructions.usage.title": "Uso:",
    "blog.cannabis_oil.recipe.instructions.usage.text":
      "Puedes usar este aceite infusionado en varias recetas culinarias, como aderezos para ensaladas, platos salteados, o incluso como sustituto del aceite en productos horneados. También puede servir como base para cremas o bálsamos caseros.",
    "blog.cannabis_oil.recipe.notes.title": "Notas:",
    "blog.cannabis_oil.recipe.notes.dosage":
      "Dosificación: Es importante recordar que la potencia del aceite depende de la concentración de THC y CBD en la flor de cannabis utilizada. Comienza con una pequeña cantidad y ajusta según tus necesidades y tolerancia.",
    "blog.cannabis_oil.recipe.notes.terpenes":
      "Terpenos: La adición de terpenos es opcional y puede ajustarse según tu aroma preferido y los efectos deseados.",
    "blog.cannabis_oil.recipe.conclusion":
      "¡Espero que disfrutes preparando y usando este aceite infusionado con cannabis!",
    "blog.cannabis_oil.disclaimer":
      "Esta receta está destinada únicamente para consumo personal y no pretende curar ninguna enfermedad o problema de salud. El uso de aceites infusionados con cannabis debe llevarse a cabo de manera responsable y de acuerdo con las leyes locales y nacionales sobre cannabis. Siempre consulta con un profesional de la salud antes de usar productos de cannabis, especialmente si tienes condiciones médicas preexistentes o estás tomando medicamentos.",
    "blog.cannabis_oil.closing.p1":
      'Esta receta combina métodos tradicionales de infusión con la comprensión moderna de los terpenos, permitiéndote personalizar el perfil aromático y terapéutico de tu aceite infusionado con cannabis. La adición de terpenos específicos mejora no solo la experiencia sensorial sino también potencialmente los efectos terapéuticos a través de lo que se conoce como el "efecto séquito" – la interacción sinérgica entre cannabinoides y terpenos.',
    "blog.cannabis_oil.closing.p2":
      "Al embarcarte en la creación de tus propios aceites infusionados con cannabis, estás participando en una tradición que te conecta con sanadores y herbolarios a través de milenios, mientras abrazas el conocimiento contemporáneo sobre medicina vegetal y bienestar.",
    "blog.cannabis_oil.tags.traditional": "Medicina Tradicional",
    "blog.cannabis_oil.tags.recipes": "Recetas",
    "blog.cannabis_oil.tags.terpenes": "Terpenos",
    "blog.cannabis_oil.tags.cannabis": "Cannabis",
    "blog.back_to_blog": "Volver al Blog",
    "blog.share_article": "Compartir Artículo",
    "blog.link_copied": "¡Enlace copiado al portapapeles!",
    "blog.related_articles": "Artículos Relacionados",
    "blog.read_more": "Leer Más",
    "blog.featured_article": "Artículo Destacado",
    "blog.latest_articles": "Artículos Recientes",
    "blog.no_posts_found": "No se encontraron artículos que coincidan con tu búsqueda.",
    "blog.read_full_article": "Leer Artículo Completo",
    "blog.in_this_article": "En este artículo",
    "blog.cannabis_oil.outline.history": "Historia Antigua de los Aceites Infusionados con Cannabis",
    "blog.cannabis_oil.outline.traditional_uses": "Usos Tradicionales a Través de las Culturas",
    "blog.cannabis_oil.outline.modern_applications": "Aplicaciones Modernas",
    "blog.cannabis_oil.outline.recipe": "Receta con Adiciones de Terpenos",
  },

  pt: {
    "nav.home": "Início",
    "nav.about": "Sobre Nós",
    "nav.team": "Nossa Equipe",
    "nav.products": "Produtos e Serviços",
    "nav.blog": "Blog",
    "nav.contact": "Contato",

    "home.hero.title": "Avançando a Ciência através de Pesquisa e Inovação",
    "home.hero.subtitle":
      "A Terpenos está na vanguarda da descoberta científica, fornecendo soluções de ponta e pesquisa para um futuro melhor.",
    "home.hero.cta.explore": "Explorar Nossas Soluções",
    "home.hero.cta.contact": "Entre em Contato",

    "home.features.title": "Excelência Científica",
    "home.features.subtitle":
      "Descubra como nossa abordagem inovadora da ciência está transformando indústrias e avançando a pesquisa.",
    "home.features.research": "Pesquisa",
    "home.features.research.desc": "Pesquisa científica pioneira para resolver desafios complexos.",
    "home.features.analysis": "Análise",
    "home.features.analysis.desc": "Técnicas analíticas avançadas para resultados precisos.",
    "home.features.innovation": "Inovação",
    "home.features.innovation.desc": "Desenvolvendo soluções científicas de próxima geração.",
    "home.features.quality": "Qualidade",
    "home.features.quality.desc": "Compromisso com a excelência e integridade científica.",

    "home.cta.title": "Pronto para Colaborar?",
    "home.cta.subtitle": "Junte-se a nós para expandir os limites da descoberta científica e inovação.",
    "home.cta.button1": "Entre em Contato",
    "home.cta.button2": "Explorar Nossos Serviços",

    "about.hero.title": "Sobre a Terpenos",
    "about.hero.subtitle": "Pesquisa científica pioneira e inovação para um futuro melhor.",
    "about.story.title": "Nossa História",
    "about.story.p1":
      "No coração de Quito, Equador, encontra-se uma força pioneira na indústria da cannabis—Terpenos.com. Estabelecida em 2021, nossa jornada não é apenas uma história de criação de negócios, mas uma narrativa profunda que se entrelaça com a história e evolução da cannabis como medicina. Nossas raízes mergulham profundamente nos primeiros dias das campanhas de legalização da cannabis em Berkeley e Oakland, Califórnia, onde nossos fundadores não foram apenas espectadores, mas voluntários ativos e defensores. Sua dedicação à causa os levou ao lado de organizações influentes como Oaksterdam e Harborside, testemunhando em primeira mão os desafios e triunfos que moldaram a indústria.",
    "about.story.p2":
      "Nossa história, no entanto, não começou com a fundação da Terpenos.com. É uma continuação de um legado de uma década de excelência e inovação nos setores farmacêutico e de fabricação de alimentos. Nossos fundadores trouxeram consigo uma riqueza de experiência, tendo trabalhado com fabricantes de alimentos e farmacêuticos de marca própria de primeira linha, onde foram fundamentais na implementação de sistemas de classe mundial. Esta experiência inestimável estabeleceu as bases para o que a Terpenos.com se tornaria—um líder no espaço da cannabis, dedicado aos mais altos padrões de qualidade e segurança.",
    "about.story.p3":
      "Hoje, a Terpenos.com se destaca como uma importadora totalmente licenciada de moléculas derivadas da cannabis, operando a partir do Equador com presença satélite na Califórnia. Nosso laboratório está na vanguarda do desenvolvimento e manutenção de processos que garantem a qualidade farmacêutica e alimentar de nossas formulações e matérias-primas. Especializamo-nos em terpenos, CBD e outros canabinoides legais, atendendo clientes que buscam pureza e eficácia incomparáveis. Nossa história é um testemunho da crença de que a cannabis é medicina, uma crença que nos impulsionou desde os primeiros dias das campanhas de legalização até a vanguarda da indústria hoje. Na Terpenos.com, somos mais do que apenas uma empresa; somos parte de um movimento global em direção ao bem-estar, inovação e busca incansável pela excelência no domínio da cannabis.",

    "about.values.title": "Nossos Valores",
    "about.values.subtitle": "Os princípios que guiam nosso trabalho e definem nossa cultura.",
    "about.values.integrity": "Integridade Científica",
    "about.values.integrity.desc":
      "Mantemos os mais altos padrões de rigor científico e conduta ética em todo nosso trabalho.",
    "about.values.innovation": "Inovação",
    "about.values.innovation.desc":
      "Fomentamos uma cultura de criatividade e melhoria contínua para impulsionar o progresso científico.",
    "about.values.collaboration": "Colaboração",
    "about.values.collaboration.desc":
      "Acreditamos no poder do trabalho em equipe e parcerias para resolver desafios complexos.",
    "about.values.impact": "Impacto",
    "about.values.impact.desc": "Estamos comprometidos com pesquisa que faz uma diferença significativa no mundo.",

    "about.approach.title": "Nossa Abordagem",
    "about.approach.p1":
      "Na Terpenos.com, nossa abordagem está enraizada na ciência, guiada por propósito e alimentada pela inovação. Do nosso laboratório de última geração no Equador à nossa presença estratégica na Califórnia, aplicamos padrões rigorosos a cada etapa do nosso processo—garantindo que cada molécula que importamos ou formulamos atenda aos padrões farmacêuticos e alimentares.",
    "about.approach.p2":
      "Fazemos parceria com múltiplos laboratórios certificados pela FDA nos Estados Unidos para validar a segurança, pureza e consistência de nossos produtos. Essas colaborações reforçam nosso compromisso com a garantia de qualidade e conformidade global, construindo pontes entre ciência e confiança através das fronteiras.",
    "about.approach.p3":
      "Não apenas trabalhamos com cannabis—trabalhamos com intenção. Especializando-nos em terpenos, CBD e canabinoides legais, colaboramos com empresas farmacêuticas, laboratórios de alimentos e marcas de bem-estar que exigem pureza, rastreabilidade e eficácia.",
    "about.approach.p4":
      "Nosso trabalho é fundamentado na crença de que a cannabis é medicina. Essa convicção nos impulsiona a manter os mais altos níveis de integridade, transparência e qualidade em uma indústria ainda definindo seu futuro. Seja formulando perfis de terpenos sob medida ou importando ingredientes ativos, agimos como guardiões de uma planta que respeitamos profundamente.",
    "about.approach.p5": "Isso é mais do que comércio. É uma missão. É nossa abordagem.",

    "team.hero.title": "Nossa Equipe",
    "team.hero.subtitle": "Conheça as mentes brilhantes por trás de nossas inovações científicas.",
    "team.join.title": "Junte-se à Nossa Equipe",
    "team.join.p1":
      "Estamos sempre procurando cientistas, pesquisadores e profissionais talentosos para se juntarem à nossa equipe. Na Terpenos, você terá a oportunidade de trabalhar em pesquisa de ponta, colaborar com mentes brilhantes e causar um impacto significativo.",
    "team.join.p2":
      "Oferecemos um ambiente de trabalho estimulante, benefícios competitivos e oportunidades para crescimento e desenvolvimento profissional.",
    "team.join.button": "Ver Vagas Abertas",
    "team.member.alejandro.role": "Diretor Científico Principal",
    "team.member.alejandro.bio":
      "Alejandro lidera nossas iniciativas de pesquisa com mais de 10 anos de experiência em biotecnologia. Ele lidera toda a ciência e produção.",
    "team.member.juan.role": "Diretor Executivo Principal",
    "team.member.juan.bio":
      "Com um Mestrado em Administração de Empresas e saídas bem-sucedidas, Juan traz uma potência comercial para a equipe. Ele lidera vendas e operações.",
    "team.member.alex.role": "CMO/Cérebro Principal",
    "team.member.alex.bio":
      "Alex é o CMO interino e fornece apoio e orientação à equipe como presidente do conselho de administração. Ele fundou múltiplas empresas bem-sucedidas antes e consulta para laboratórios de pesquisa e inovação nos Estados Unidos.",

    "products.hero.title": "Produtos e Serviços",
    "products.hero.subtitle": "Soluções científicas inovadoras adaptadas às suas necessidades.",
    "products.tabs.products": "Produtos",
    "products.tabs.services": "Serviços",
    "products.case.title": "Estudos de Caso",
    "products.case.subtitle":
      "Veja como nossos produtos e serviços ajudaram organizações a alcançar seus objetivos científicos.",
    "products.cta.title": "Pronto para Começar?",
    "products.cta.subtitle":
      "Entre em contato conosco hoje para discutir como nossos produtos e serviços podem apoiar seus esforços científicos.",
    "products.cta.button1": "Entre em Contato",
    "products.cta.button2": "Saiba Mais Sobre Nós",

    "blog.hero.title": "Nosso Blog",
    "blog.hero.subtitle": "Insights, descobertas e perspectivas de nossa equipe científica.",
    "blog.search.placeholder": "Buscar artigos...",
    "blog.newsletter.title": "Mantenha-se Atualizado",
    "blog.newsletter.subtitle":
      "Inscreva-se em nossa newsletter para receber os últimos insights e atualizações científicas.",
    "blog.newsletter.button": "Inscrever-se",
    "blog.newsletter.privacy": "Respeitamos sua privacidade. Cancele a inscrição a qualquer momento.",

    "contact.hero.title": "Entre em Contato",
    "contact.hero.subtitle": "Adoraríamos ouvir de você. Entre em contato com nossa equipe.",
    "contact.form.title": "Envie-nos uma Mensagem",
    "contact.form.description": "Preencha o formulário abaixo e entraremos em contato o mais breve possível.",
    "contact.form.name": "Nome",
    "contact.form.name.placeholder": "Seu nome",
    "contact.form.email": "E-mail",
    "contact.form.email.placeholder": "Seu e-mail",
    "contact.form.inquiryType": "Tipo de Consulta",
    "contact.form.inquiryType.placeholder": "Selecione o tipo de consulta",
    "contact.form.inquiryType.general": "Consulta Geral",
    "contact.form.inquiryType.products": "Produtos",
    "contact.form.inquiryType.services": "Serviços",
    "contact.form.inquiryType.partnership": "Parceria",
    "contact.form.inquiryType.careers": "Carreiras",
    "contact.form.subject": "Assunto",
    "contact.form.subject.placeholder": "Assunto da sua mensagem",
    "contact.form.message": "Mensagem",
    "contact.form.message.placeholder": "Sua mensagem",
    "contact.form.send": "Enviar Mensagem",
    "contact.form.sending": "Enviando...",
    "contact.form.success.title": "Mensagem Enviada com Sucesso",
    "contact.form.success.message": "Obrigado por entrar em contato! Retornaremos em breve.",
    "contact.form.success.button": "Enviar Outra Mensagem",
    "contact.form.error.general": "Ocorreu um erro inesperado. Tente novamente mais tarde.",
    "contact.info.title": "Informações de Contato",
    "contact.info.subtitle": "Entre em contato conosco através de qualquer um dos seguintes canais.",
    "contact.info.address": "Endereço",
    "contact.info.phone": "Telefone",
    "contact.info.email": "E-mail",
    "contact.info.hours": "Horário",
    "contact.info.hours.weekdays": "Segunda - Sexta",
    "contact.map.title": "Localização da Terpenos - Centro Comercial Multicentro",
    "contact.faq.title": "Perguntas Frequentes",
    "contact.faq.subtitle": "Encontre respostas para perguntas comuns sobre nossos produtos e serviços.",
    "contact.faq.q1": "Em quais áreas de pesquisa a Terpenos se especializa?",
    "contact.faq.a1":
      "A Terpenos se especializa em biologia molecular, bioquímica, química analítica e campos relacionados. Nossa abordagem interdisciplinar nos permite enfrentar desafios científicos complexos em vários domínios.",
    "contact.faq.q2": "Vocês oferecem serviços de pesquisa personalizados?",
    "contact.faq.a2":
      "Sim, fornecemos serviços de pesquisa sob medida para atender necessidades específicas dos clientes. Nossa equipe pode projetar e executar projetos de pesquisa do conceito à conclusão, entregando resultados e análises abrangentes.",
    "contact.faq.q3": "Qual é o tempo típico de resposta para análise laboratorial?",
    "contact.faq.a3":
      "Os tempos de resposta variam dependendo da complexidade da análise, mas nos esforçamos para entregar resultados de forma eficiente sem comprometer a qualidade. Análises padrão geralmente levam de 5 a 7 dias úteis.",
    "contact.faq.q4": "Vocês enviam produtos internacionalmente?",
    "contact.faq.a4":
      "Sim, enviamos nossos produtos mundialmente. Tempos e custos de envio internacional variam por destino. Entre em contato conosco para informações específicas sobre sua localização.",
    "contact.faq.q5": "Posso agendar uma consulta com sua equipe científica?",
    "contact.faq.a5":
      "Absolutamente. Oferecemos consultas com nossos especialistas científicos para discutir suas necessidades de pesquisa, desafios e soluções potenciais. Entre em contato conosco para marcar uma reunião.",
    "contact.faq.q6": "Vocês oferecem treinamento para seus equipamentos analíticos?",
    "contact.faq.a6":
      "Sim, fornecemos treinamento abrangente para todos os nossos equipamentos e software. O treinamento pode ser conduzido no local ou remotamente, dependendo de sua preferência e requisitos.",

    "footer.description": "Soluções e pesquisa científicas inovadoras para um futuro melhor.",
    "footer.links.title": "Links Rápidos",
    "footer.resources.title": "Recursos",
    "footer.contact.title": "Contato",
    "footer.copyright": "Todos os direitos reservados.",
    "blog.cannabis_oil.title": "A Longa Tradição dos Óleos Infundidos com Cannabis com uma Receita",
    "blog.cannabis_oil.excerpt":
      "Explore a história antiga e aplicações modernas dos óleos infundidos com cannabis, junto com uma receita detalhada para fazer sua própria infusão com terpenos específicos.",
    "blog.cannabis_oil.history.p1":
      'A prática de infundir cannabis com óleos é uma tradição secular que abrange séculos e culturas, refletindo uma compreensão profunda do potencial medicinal e terapêutico da planta. Civilizações antigas, como as da China e Índia, estavam entre as primeiras a explorar os benefícios dos óleos infundidos com cannabis. Na medicina tradicional chinesa, a cannabis era usada como ingrediente-chave em vários remédios, com registros datando de 2737 a.C. em seu uso para tratar doenças como dor e inflamação. Similarmente, na Índia, a cannabis tem sido parte integral da medicina ayurvédica, onde é conhecida como "bhang" e usada em óleos e pastas para tratar uma variedade de condições, incluindo problemas digestivos e doenças de pele.',
    "blog.cannabis_oil.history.p2":
      "O Oriente Médio também tem uma rica história de uso da cannabis, particularmente em regiões como a Pérsia (atual Irã), onde óleos infundidos com cannabis eram utilizados por suas propriedades analgésicas e anti-inflamatórias. Médicos islâmicos durante o período medieval, como Avicena, documentaram as aplicações terapêuticas da cannabis em seus textos médicos, destacando seu papel no alívio da dor e relaxamento muscular. Essas práticas antigas eventualmente se espalharam para outras partes do mundo, incluindo África e Europa, onde óleos infundidos com cannabis foram incorporados às tradições de medicina popular por seus efeitos calmantes e curativos.",
    "blog.cannabis_oil.history.p3":
      "Na história mais recente, o uso de óleos infundidos com cannabis tem visto um ressurgimento, impulsionado pelo crescente interesse em remédios naturais e holísticos para a saúde. As tradições históricas dos métodos de infusão de cannabis foram revividas e refinadas, combinando sabedoria antiga com compreensão científica moderna. Hoje, óleos infundidos com cannabis são amplamente reconhecidos por sua versatilidade e eficácia, continuando um legado de cura que transcendeu tempo e geografia.",
    "blog.cannabis_oil.recipe.title": "Receita de Óleo Infundido com Cannabis e Terpenos",
    "blog.cannabis_oil.recipe.ingredients.title": "Ingredientes:",
    "blog.cannabis_oil.recipe.ingredients.list":
      "1 xícara de óleo de coco ou azeite de oliva (conforme sua preferência)\n10 gramas de flores de cannabis (descarboxiladas)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.intro": "Terpenos (opcional, conforme preferência):",
    "blog.cannabis_oil.recipe.ingredients.terpenes.limonene":
      "2 gotas de Limoneno (para aroma cítrico e efeitos energizantes)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.linalool":
      "2 gotas de Linalol (para aroma floral e efeitos relaxantes)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene":
      "2 gotas de Mirceno (para aroma terroso e efeitos sedativos)",
    "blog.cannabis_oil.recipe.utensils.title": "Utensílios:",
    "blog.cannabis_oil.recipe.utensils.list":
      "Moedor de café ou moedor de ervas\nAssadeira\nPapel manteiga\nBanho-maria ou panela e recipiente resistente ao calor\nPeneira de malha fina ou pano de queijo\nPote de vidro para armazenamento",
    "blog.cannabis_oil.recipe.instructions.title": "Instruções:",
    "blog.cannabis_oil.recipe.instructions.decarb.title": "Descarboxilação da Cannabis:",
    "blog.cannabis_oil.recipe.instructions.decarb.steps":
      "1. Pré-aqueça o forno a 115°C (240°F).\n2. Moa as flores de cannabis com o moedor de café ou moedor de ervas.\n3. Coloque a cannabis moída em uma assadeira forrada com papel manteiga.\n4. Asse a cannabis por 30-40 minutos, mexendo a cada 10 minutos para garantir descarboxilação uniforme. Este processo ativa os compostos psicoativos na cannabis.",
    "blog.cannabis_oil.recipe.instructions.infusion.title": "Infusão do Óleo:",
    "blog.cannabis_oil.recipe.instructions.infusion.steps":
      "1. Encha a parte inferior do banho-maria com água e leve a fogo baixo.\n2. Coloque o óleo (coco ou oliva) na parte superior do banho-maria.\n3. Adicione a cannabis descarboxilada ao óleo.\n4. Mantenha a mistura em fogo baixo por 2-3 horas, mexendo ocasionalmente. Certifique-se de que o óleo não ferva.",
    "blog.cannabis_oil.recipe.instructions.terpenes.title": "Adição de Terpenos (Opcional):",
    "blog.cannabis_oil.recipe.instructions.terpenes.steps":
      "1. Se quiser adicionar terpenos específicos, adicione-os ao óleo morno após o processo de infusão, mexendo bem para misturar uniformemente.",
    "blog.cannabis_oil.recipe.instructions.straining.title": "Coagem:",
    "blog.cannabis_oil.recipe.instructions.straining.steps":
      "1. Uma vez que a infusão esteja completa, coe a mistura através de uma peneira de malha fina ou pano de queijo para separar o óleo dos resíduos de cannabis.\n2. Aperte bem os resíduos para extrair o máximo de óleo possível.",
    "blog.cannabis_oil.recipe.instructions.storage.title": "Armazenamento:",
    "blog.cannabis_oil.recipe.instructions.storage.steps":
      "1. Despeje o óleo infundido em um pote de vidro limpo.\n2. Armazene em local fresco e escuro. O óleo de cannabis pode durar até dois meses se armazenado adequadamente.",
    "blog.cannabis_oil.recipe.instructions.usage.title": "Uso:",
    "blog.cannabis_oil.recipe.usage.text":
      "Você pode usar este óleo infundido em várias receitas culinárias, como molhos para salada, pratos refogados, ou mesmo como substituto de óleo em produtos assados. Também pode servir como base para cremes ou bálsamos caseiros.",
    "blog.cannabis_oil.recipe.notes.title": "Notas:",
    "blog.cannabis_oil.recipe.notes.dosage":
      "Dosagem: É importante lembrar que a potência do óleo depende da concentração de THC e CBD na flor de cannabis usada. Comece com uma pequena quantidade e ajuste conforme suas necessidades e tolerância.",
    "blog.cannabis_oil.recipe.notes.terpenes":
      "Terpenos: Adicionar terpenos é opcional e pode ser ajustado conforme seu aroma preferido e efeitos desejados.",
    "blog.cannabis_oil.recipe.conclusion":
      "Espero que você aproveite preparar e usar este óleo infundido com cannabis!",
    "blog.cannabis_oil.disclaimer":
      "Esta receita é destinada apenas para consumo pessoal e não pretende curar qualquer doença ou problema de saúde. O uso de óleos infundidos com cannabis deve ser realizado responsavelmente e de acordo com as leis locais e nacionais sobre cannabis. Sempre consulte um profissional de saúde antes de usar produtos de cannabis, especialmente se você tem condições médicas preexistentes ou está tomando medicamentos.",
    "blog.cannabis_oil.closing.p1":
      'Esta receita combina métodos tradicionais de infusão com compreensão moderna de terpenos, permitindo que você personalize o perfil aromático e terapêutico do seu óleo infundido com cannabis. A adição de terpenos específicos melhora não apenas a experiência sensorial, mas também potencialmente os efeitos terapêuticos através do que é conhecido como "efeito entourage" – a interação sinérgica entre canabinoides e terpenos.',
    "blog.cannabis_oil.closing.p2":
      "Ao embarcar na criação de seus próprios óleos infundidos com cannabis, você está participando de uma tradição que o conecta a curandeiros e herbalistas através de milênios, enquanto também abraça o conhecimento contemporâneo sobre medicina vegetal e bem-estar.",
    "blog.cannabis_oil.tags.traditional": "Medicina Tradicional",
    "blog.cannabis_oil.tags.recipes": "Receitas",
    "blog.cannabis_oil.tags.terpenes": "Terpenos",
    "blog.cannabis_oil.tags.cannabis": "Cannabis",
    "blog.back_to_blog": "Voltar ao Blog",
    "blog.share_article": "Compartilhar Artigo",
    "blog.link_copied": "Link copiado para a área de transferência!",
    "blog.related_articles": "Artigos Relacionados",
    "blog.read_more": "Ler Mais",
    "blog.featured_article": "Artigo em Destaque",
    "blog.latest_articles": "Artigos Recentes",
    "blog.no_posts_found": "Nenhum post do blog encontrado correspondendo à sua busca.",
    "blog.read_full_article": "Ler Artigo Completo",
    "blog.in_this_article": "Neste artigo",
    "blog.cannabis_oil.outline.history": "História Antiga dos Óleos Infundidos com Cannabis",
    "blog.cannabis_oil.outline.traditional_uses": "Usos Tradicionais Através das Culturas",
    "blog.cannabis_oil.outline.modern_applications": "Aplicações Modernas",
    "blog.cannabis_oil.outline.recipe": "Receita com Adições de Terpenos",
  },

  de: {
    "nav.home": "Startseite",
    "nav.about": "Über Uns",
    "nav.team": "Unser Team",
    "nav.products": "Produkte & Dienstleistungen",
    "nav.blog": "Blog",
    "nav.contact": "Kontakt",

    "home.hero.title": "Wissenschaft durch Forschung & Innovation vorantreiben",
    "home.hero.subtitle":
      "Terpenos steht an der Spitze der wissenschaftlichen Entdeckung und bietet modernste Lösungen und Forschung für eine bessere Zukunft.",
    "home.hero.cta.explore": "Unsere Lösungen erkunden",
    "home.hero.cta.contact": "Kontaktieren Sie uns",

    "home.features.title": "Wissenschaftliche Exzellenz",
    "home.features.subtitle":
      "Entdecken Sie, wie unser innovativer Ansatz in der Wissenschaft Branchen transformiert und die Forschung vorantreibt.",
    "home.features.research": "Forschung",
    "home.features.research.desc": "Bahnbrechende wissenschaftliche Forschung zur Lösung komplexer Herausforderungen.",
    "home.features.analysis": "Analyse",
    "home.features.analysis.desc": "Fortschrittliche Analysetechniken für präzise Ergebnisse.",
    "home.features.innovation": "Innovation",
    "home.features.innovation.desc": "Entwicklung wissenschaftlicher Lösungen der nächsten Generation.",
    "home.features.quality": "Qualität",
    "home.features.quality.desc": "Engagement für Exzellenz und wissenschaftliche Integrität.",

    "home.cta.title": "Bereit zur Zusammenarbeit?",
    "home.cta.subtitle":
      "Schließen Sie sich uns an, um die Grenzen der wissenschaftlichen Entdeckung und Innovation zu erweitern.",
    "home.cta.button1": "Kontakt aufnehmen",
    "home.cta.button2": "Unsere Dienstleistungen erkunden",

    "about.hero.title": "Über Terpenos",
    "about.hero.subtitle": "Bahnbrechende wissenschaftliche Forschung und Innovation für eine bessere Zukunft.",
    "about.story.title": "Unsere Geschichte",
    "about.story.p1":
      "Im Herzen von Quito, Ecuador, liegt eine Pionierarbeit in der Cannabis-Industrie: Terpenos.com. Gegründet im Jahr 2021, ist unsere Reise nicht nur eine Geschichte der Unternehmensgründung, sondern eine tiefgreifende Erzählung, die sich mit der Geschichte und Entwicklung von Cannabis als Medizin verflicht. Unsere Wurzeln reichen tief in die frühen Tage der Cannabis-Legalisierungskampagnen in Berkeley und Oakland, Kalifornien, wo unsere Gründer nicht nur Zuschauer, sondern aktive Freiwillige und Befürworter waren. Ihr Engagement für die Sache führte sie an die Seite einflussreicher Organisationen wie Oaksterdam und Harborside, wo sie die Herausforderungen und Triumphe, die die Branche geprägt haben, aus erster Hand miterlebten.",
    "about.story.p2":
      "Unsere Geschichte begann jedoch nicht mit der Gründung von Terpenos.com. Es ist die Fortsetzung eines jahrzehntelangen Erbes von Exzellenz und Innovation in den Bereichen Pharmazie und Lebensmittelherstellung. Unsere Gründer brachten eine Fülle von Erfahrungen mit, nachdem sie mit erstklassigen Herstellern von Eigenmarken für Lebensmittel und Pharmazeutika zusammengearbeitet hatten, wo sie maßgeblich an der Implementierung von Weltklasse-Systemen beteiligt waren. Diese unschätzbare Erfahrung legte den Grundstein für das, was Terpenos.com werden sollte – ein Marktführer im Cannabis-Bereich, der sich den höchsten Standards für Qualität und Sicherheit verschrieben hat.",
    "about.approach.p2":
      "Wir arbeiten mit mehreren FDA-zertifizierten Laboren in den Vereinigten Staaten zusammen, um die Sicherheit, Reinheit und Konsistenz unserer Produkte zu validieren. Diese Kooperationen verstärken unser Engagement für Qualitätssicherung und globale Compliance und überbrücken Wissenschaft und Vertrauen über Grenzen hinweg.",
    "about.approach.p3":
      "Wir arbeiten nicht nur mit Cannabis – wir arbeiten mit Absicht. Spezialisiert auf Terpene, CBD und legale Cannabinoide, arbeiten wir mit Pharmaunternehmen, Lebensmittellaboren und Wellness-Marken zusammen, die Reinheit, Rückverfolgbarkeit und Wirksamkeit fordern.",
    "about.approach.p4":
      "Unsere Arbeit basiert auf der Überzeugung, dass Cannabis Medizin ist. Diese Überzeugung treibt uns dazu an, die höchsten Standards an Integrität, Transparenz und Qualität in einer Branche aufrechtzuerhalten, die ihre Zukunft noch definiert. Ob wir maßgeschneiderte Terpenprofile formulieren oder aktive Inhaltsstoffe importieren, wir handeln als Verwalter einer Pflanze, die wir zutiefst respektieren.",
    "about.approach.p5": "Dies ist mehr als Handel. Es ist eine Mission. Es ist unser Ansatz.",

    "team.hero.title": "Unser Team",
    "team.hero.subtitle": "Lernen Sie die brillanten Köpfe hinter unseren wissenschaftlichen Innovationen kennen.",
    "team.join.title": "Werden Sie Teil unseres Teams",
    "team.join.p1":
      "Wir suchen stets talentierte Wissenschaftler, Forscher und Fachleute, die unserem Team beitreten. Bei Terpenos haben Sie die Möglichkeit, an bahnbrechender Forschung zu arbeiten, mit brillanten Köpfen zusammenzuarbeiten und einen bedeutenden Einfluss zu nehmen.",
    "team.join.p2":
      "Wir bieten ein stimulierendes Arbeitsumfeld, wettbewerbsfähige Vorteile und Möglichkeiten für berufliches Wachstum und Entwicklung.",
    "team.join.button": "Offene Stellen ansehen",
    "team.member.alejandro.role": "Leitender Wissenschaftlicher Direktor",
    "team.member.alejandro.bio":
      "Alejandro leitet unsere Forschungsinitiativen mit über 10 Jahren Erfahrung in der Biotechnologie. Er leitet alle Wissenschafts- und Produktionsbereiche.",
    "team.member.juan.role": "Hauptgeschäftsführer",
    "team.member.juan.bio":
      "Mit einem Master in Betriebswirtschaft und erfolgreichen Exits bringt Juan eine kommerzielle Kraftquelle ins Team. Er leitet Vertrieb und Betrieb.",
    "team.member.alex.role": "CMO/Großes Gehirn",
    "team.member.alex.bio":
      "Alex ist der Interim-CMO und bietet dem Team als Vorsitzender des Verwaltungsrats Unterstützung und Führung. Er hat zuvor mehrere erfolgreiche Unternehmen gegründet und berät Forschungs- und Innovationslabore in den Vereinigten Staaten.",

    "products.hero.title": "Produkte & Dienstleistungen",
    "products.hero.subtitle": "Innovative wissenschaftliche Lösungen, maßgeschneidert für Ihre Bedürfnisse.",
    "products.tabs.products": "Produkte",
    "products.tabs.services": "Dienstleistungen",
    "products.case.title": "Fallstudien",
    "products.case.subtitle":
      "Sehen Sie, wie unsere Produkte und Dienstleistungen Organisationen geholfen haben, ihre wissenschaftlichen Ziele zu erreichen.",
    "products.cta.title": "Bereit anzufangen?",
    "products.cta.subtitle":
      "Kontaktieren Sie uns noch heute, um zu besprechen, wie unsere Produkte und Dienstleistungen Ihre wissenschaftlichen Bemühungen unterstützen können.",
    "products.cta.button1": "Kontaktieren Sie uns",
    "products.cta.button2": "Erfahren Sie mehr über uns",

    "blog.hero.title": "Unser Blog",
    "blog.hero.subtitle": "Einblicke, Entdeckungen und Perspektiven von unserem wissenschaftlichen Team.",
    "blog.search.placeholder": "Artikel suchen...",
    "blog.newsletter.title": "Bleiben Sie auf dem Laufenden",
    "blog.newsletter.subtitle":
      "Abonnieren Sie unseren Newsletter, um die neuesten wissenschaftlichen Erkenntnisse und Updates zu erhalten.",
    "blog.newsletter.button": "Abonnieren",
    "blog.newsletter.privacy": "Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.",

    "contact.hero.title": "Kontaktieren Sie uns",
    "contact.hero.subtitle": "Wir würden gerne von Ihnen hören. Nehmen Sie Kontakt mit unserem Team auf.",
    "contact.form.title": "Senden Sie uns eine Nachricht",
    "contact.form.description":
      "Füllen Sie das untenstehende Formular aus, und wir werden uns so schnell wie möglich bei Ihnen melden.",
    "contact.form.name": "Name",
    "contact.form.name.placeholder": "Ihr Name",
    "contact.form.email": "E-Mail",
    "contact.form.email.placeholder": "Ihre E-Mail",
    "contact.form.inquiryType": "Anfrageart",
    "contact.form.inquiryType.placeholder": "Anfrageart auswählen",
    "contact.form.inquiryType.general": "Allgemeine Anfrage",
    "contact.form.inquiryType.products": "Produkte",
    "contact.form.inquiryType.services": "Dienstleistungen",
    "contact.form.inquiryType.partnership": "Partnerschaft",
    "contact.form.inquiryType.careers": "Karriere",
    "contact.form.subject": "Betreff",
    "contact.form.subject.placeholder": "Betreff Ihrer Nachricht",
    "contact.form.message": "Nachricht",
    "contact.form.message.placeholder": "Ihre Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.sending": "Wird gesendet...",
    "contact.form.success.title": "Nachricht erfolgreich gesendet",
    "contact.form.success.message": "Vielen Dank für Ihre Kontaktaufnahme! Wir werden uns in Kürze bei Ihnen melden.",
    "contact.form.success.button": "Eine weitere Nachricht senden",
    "contact.form.error.general": "Ein unerwarteter Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.subtitle": "Erreichen Sie uns über einen der folgenden Kanäle.",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.hours": "Öffnungszeiten",
    "contact.info.hours.weekdays": "Montag - Freitag",
    "contact.map.title": "Terpenos Standort - Multicentro Einkaufszentrum",
    "contact.faq.title": "Häufig gestellte Fragen",
    "contact.faq.subtitle": "Finden Sie Antworten auf häufige Fragen zu unseren Produkten und Dienstleistungen.",
    "contact.faq.q1": "In welchen Forschungsbereichen ist Terpenos spezialisiert?",
    "contact.faq.a1":
      "Terpenos ist auf Molekularbiologie, Biochemie, analytische Chemie und verwandte Bereiche spezialisiert. Unser interdisziplinärer Ansatz ermöglicht es uns, komplexe wissenschaftliche Herausforderungen in verschiedenen Bereichen zu bewältigen.",
    "contact.faq.q2": "Bieten Sie maßgeschneiderte Forschungsdienstleistungen an?",
    "contact.faq.a2":
      "Ja, wir bieten maßgeschneiderte Forschungsdienstleistungen an, um spezifische Kundenbedürfnisse zu erfüllen. Unser Team kann Forschungsprojekte vom Konzept bis zur Fertigstellung entwerfen und durchführen und umfassende Ergebnisse und Analysen liefern.",
    "contact.faq.q3": "Wie lange dauert eine typische Laboranalyse?",
    "contact.faq.a3":
      "Die Bearbeitungszeiten variieren je nach Komplexität der Analyse, aber wir bemühen uns, Ergebnisse so effizient wie möglich zu liefern, ohne die Qualität zu beeinträchtigen. Standardanalysen dauern in der Regel 5-7 Werktage.",
    "contact.faq.q4": "Versenden Sie Produkte international?",
    "contact.faq.a4":
      "Ja, wir versenden unsere Produkte weltweit. Internationale Versandzeiten und -kosten variieren je nach Zielort. Bitte kontaktieren Sie uns für spezifische Informationen bezüglich Ihres Standorts.",
    "contact.faq.q5": "Kann ich eine Beratung mit Ihrem wissenschaftlichen Team vereinbaren?",
    "contact.faq.a5":
      "Absolut. Wir bieten Beratungen mit unseren wissenschaftlichen Experten an, um Ihre Forschungsbedürfnisse, Herausforderungen und potenzielle Lösungen zu besprechen. Bitte kontaktieren Sie uns, um ein Treffen zu vereinbaren.",
    "contact.faq.q6": "Bieten Sie Schulungen für Ihre Analysegeräte an?",
    "contact.faq.a6":
      "Ja, wir bieten umfassende Schulungen für alle unsere Geräte und Software an. Die Schulung kann vor Ort oder aus der Ferne durchgeführt werden, je nach Ihren Präferenzen und Anforderungen.",

    "footer.description": "Innovative wissenschaftliche Lösungen und Forschung für eine bessere Zukunft.",
    "footer.links.title": "Schnelllinks",
    "footer.resources.title": "Ressourcen",
    "footer.contact.title": "Kontakt",
    "footer.copyright": "Alle Rechte vorbehalten.",
    "blog.cannabis_oil.title": "Die lange Tradition der Cannabis-infundierten Öle mit einem Rezept",
    "blog.cannabis_oil.excerpt":
      "Entdecken Sie die alte Geschichte und moderne Anwendungen von Cannabis-infundierten Ölen, zusammen mit einem detaillierten Rezept zur Herstellung Ihrer eigenen Infusion mit spezifischen Terpenen.",
    "blog.cannabis_oil.history.p1":
      'Die Praxis, Cannabis mit Ölen zu infundieren, ist eine altehrwürdige Tradition, die Jahrhunderte und Kulturen überspannt und ein tiefes Verständnis des medizinischen und therapeutischen Potenzials der Pflanze widerspiegelt. Alte Zivilisationen, wie die in China und Indien, gehörten zu den ersten, die die Vorteile von Cannabis-infundierten Ölen erforschten. In der traditionellen chinesischen Medizin wurde Cannabis als Schlüsselbestandteil in verschiedenen Heilmitteln verwendet, mit Aufzeichnungen, die bis ins Jahr 2737 v. Chr. zurückreichen, für die Behandlung von Beschwerden wie Schmerzen und Entzündungen. Ähnlich ist Cannabis in Indien ein integraler Bestandteil der ayurvedischen Medizin, wo es als "Bhang" bekannt ist und in Ölen und Pasten zur Behandlung verschiedener Erkrankungen, einschließlich Verdauungsproblemen und Hautkrankheiten, verwendet wird.',
    "blog.cannabis_oil.history.p2":
      "Der Nahe Osten hat ebenfalls eine reiche Geschichte der Cannabis-Nutzung, insbesondere in Regionen wie Persien (heutiger Iran), wo Cannabis-infundierte Öle wegen ihrer schmerzlindernden und entzündungshemmenden Eigenschaften eingesetzt wurden. Islamische Ärzte während des Mittelalters, wie Avicenna, dokumentierten die therapeutischen Anwendungen von Cannabis in ihren medizinischen Texten und hoben seine Rolle bei der Schmerzlinderung und Muskelentspannung hervor. Diese alten Praktiken verbreiteten sich schließlich in andere Teile der Welt, einschließlich Afrika und Europa, wo Cannabis-infundierte Öle wegen ihrer beruhigenden und heilenden Wirkungen in die Volksmedizin-Traditionen aufgenommen wurden.",
    "blog.cannabis_oil.history.p3":
      "In der jüngeren Geschichte hat die Verwendung von Cannabis-infundierten Ölen eine Renaissance erlebt, angetrieben durch das wachsende Interesse an natürlichen und ganzheitlichen Gesundheitsmitteln. Die überlieferten Traditionen der Cannabis-Infusionsmethoden wurden wiederbelebt und verfeinert, wobei altes Wissen mit modernem wissenschaftlichem Verständnis kombiniert wurde. Heute werden Cannabis-infundierte Öle weithin für ihre Vielseitigkeit und Wirksamkeit anerkannt und setzen ein Erbe der Heilung fort, das Zeit und Geographie überschritten hat.",
    "blog.cannabis_oil.recipe.title": "Cannabis-infundiertes Öl-Rezept mit Terpenen",
    "blog.cannabis_oil.recipe.ingredients.title": "Zutaten:",
    "blog.cannabis_oil.recipe.ingredients.list":
      "1 Tasse Kokosöl oder Olivenöl (je nach Vorliebe)\n10 Gramm Cannabis-Blüten (decarboxyliert)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.intro": "Terpene (optional, je nach Vorliebe):",
    "blog.cannabis_oil.recipe.ingredients.terpenes.limonene":
      "2 Tropfen Limonen (für ein zitrusartiges Aroma und energetisierende Wirkung)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.linalool":
      "2 Tropfen Linalool (für ein blumiges Aroma und entspannende Wirkung)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene":
      "2 Tropfen Myrcen (für ein erdiges Aroma und sedierende Wirkung)",
    "blog.cannabis_oil.recipe.utensils.title": "Utensilien:",
    "blog.cannabis_oil.recipe.utensils.list":
      "Kaffeemühle oder Kräutermühle\nBackblech\nBackpapier\nWasserbad oder ein Topf und ein hitzebeständiger Behälter\nFeinmaschiges Sieb oder Käsetuch\nGlasbehälter zur Aufbewahrung",
    "blog.cannabis_oil.recipe.instructions.title": "Anleitung:",
    "blog.cannabis_oil.recipe.instructions.decarb.title": "Decarboxylierung des Cannabis:",
    "blog.cannabis_oil.recipe.instructions.decarb.steps":
      "1. Heizen Sie den Ofen auf 115°C (240°F) vor.\n2. Mahlen Sie die Cannabis-Blüten mit der Kaffeemühle oder Kräutermühle.\n3. Legen Sie das gemahlene Cannabis auf ein mit Backpapier ausgelegtes Backblech.\n4. Backen Sie das Cannabis für 30-40 Minuten und rühren Sie alle 10 Minuten um, um eine gleichmäßige Decarboxylierung zu gewährleisten. Dieser Prozess aktiviert die psychoaktiven Verbindungen im Cannabis.",
    "blog.cannabis_oil.recipe.instructions.infusion.title": "Infusion des Öls:",
    "blog.cannabis_oil.recipe.instructions.infusion.steps":
      "1. Füllen Sie den unteren Teil des Wasserbads mit Wasser und bringen Sie es zum leichten Köcheln.\n2. Geben Sie das Öl (Kokos- oder Olivenöl) in den oberen Teil des Wasserbads.\n3. Fügen Sie das decarboxylierte Cannabis zum Öl hinzu.\n4. Halten Sie die Mischung für 2-3 Stunden auf niedriger Hitze und rühren Sie gelegentlich um. Stellen Sie sicher, dass das Öl nicht kocht.",
    "blog.cannabis_oil.recipe.instructions.terpenes.title": "Zugabe von Terpenen (Optional):",
    "blog.cannabis_oil.recipe.instructions.terpenes.steps":
      "1. Wenn Sie spezifische Terpene hinzufügen möchten, geben Sie diese nach dem Infusionsprozess zum warmen Öl hinzu und rühren Sie gut um, um eine gleichmäßige Mischung zu erzielen.",
    "blog.cannabis_oil.recipe.instructions.straining.title": "Abseihen:",
    "blog.cannabis_oil.recipe.instructions.straining.steps":
      "1. Sobald die Infusion abgeschlossen ist, seihen Sie die Mischung durch ein feinmaschiges Sieb oder Käsetuch, um das Öl von den Cannabis-Rückständen zu trennen.\n2. Drücken Sie die Rückstände gut aus, um so viel Öl wie möglich zu extrahieren.",
    "blog.cannabis_oil.recipe.instructions.storage.title": "Aufbewahrung:",
    "blog.cannabis_oil.recipe.instructions.storage.steps":
      "1. Gießen Sie das infundierte Öl in einen sauberen Glasbehälter.\n2. Bewahren Sie es an einem kühlen, dunklen Ort auf. Das Cannabis-Öl kann bei richtiger Lagerung bis zu zwei Monate haltbar sein.",
    "blog.cannabis_oil.recipe.instructions.usage.title": "Verwendung:",
    "blog.cannabis_oil.recipe.usage.text":
      "Sie können dieses infundierte Öl in verschiedenen kulinarischen Rezepten verwenden, wie Salatdressings, sautierten Gerichten oder sogar als Ölersatz in Backwaren. Es kann auch als Basis für hausgemachte Cremes oder Balsame dienen.",
    "blog.cannabis_oil.recipe.notes.title": "Hinweise:",
    "blog.cannabis_oil.recipe.notes.dosage":
      "Dosierung: Es ist wichtig zu beachten, dass die Stärke des Öls von der Konzentration von THC und CBD in der verwendeten Cannabis-Blüte abhängt. Beginnen Sie mit einer kleinen Menge und passen Sie sie entsprechend Ihren Bedürfnissen und Ihrer Toleranz an.",
    "blog.cannabis_oil.recipe.notes.terpenes":
      "Terpene: Die Zugabe von Terpenen ist optional und kann je nach bevorzugtem Aroma und gewünschter Wirkung angepasst werden.",
    "blog.cannabis_oil.recipe.conclusion":
      "Ich hoffe, Sie genießen die Zubereitung und Verwendung dieses Cannabis-infundierten Öls!",
    "blog.cannabis_oil.disclaimer":
      "Dieses Rezept ist ausschließlich für den persönlichen Gebrauch bestimmt und soll keine Krankheit oder gesundheitliches Problem heilen. Die Verwendung von Cannabis-infundierten Ölen sollte verantwortungsvoll und in Übereinstimmung mit lokalen und nationalen Cannabis-Gesetzen erfolgen. Konsultieren Sie immer einen Gesundheitsexperten, bevor Sie Cannabis-Produkte verwenden, besonders wenn Sie bereits bestehende medizinische Zustände haben oder Medikamente einnehmen.",
    "blog.cannabis_oil.closing.p1":
      'Dieses Rezept kombiniert traditionelle Infusionsmethoden mit modernem Verständnis von Terpenen und ermöglicht es Ihnen, das aromatische und therapeutische Profil Ihres Cannabis-infundierten Öls anzupassen. Die Zugabe spezifischer Terpene verbessert nicht nur das sensorische Erlebnis, sondern potenziell auch die therapeutischen Wirkungen durch den sogenannten "Entourage-Effekt" – die synergistische Interaktion zwischen Cannabinoiden und Terpenen.',
    "blog.cannabis_oil.closing.p2":
      "Indem Sie sich auf die Herstellung Ihrer eigenen Cannabis-infundierten Öle einlassen, nehmen Sie an einer Tradition teil, die Sie mit Heilern und Kräuterkundigen über Jahrtausende hinweg verbindet, während Sie gleichzeitig zeitgenössisches Wissen über Pflanzenmedizin und Wellness einbeziehen.",
    "blog.cannabis_oil.tags.traditional": "Traditionelle Medizin",
    "blog.cannabis_oil.tags.recipes": "Rezepte",
    "blog.cannabis_oil.tags.terpenes": "Terpene",
    "blog.cannabis_oil.tags.cannabis": "Cannabis",
    "blog.back_to_blog": "Zurück zum Blog",
    "blog.share_article": "Artikel teilen",
    "blog.link_copied": "Link in die Zwischenablage kopiert!",
    "blog.related_articles": "Verwandte Artikel",
    "blog.read_more": "Weiterlesen",
    "blog.featured_article": "Empfohlener Artikel",
    "blog.latest_articles": "Neueste Artikel",
    "blog.no_posts_found": "Keine Blogbeiträge gefunden, die Ihrer Suche entsprechen.",
    "blog.read_full_article": "Vollständigen Artikel Lesen",
    "blog.in_this_article": "In diesem Artikel",
    "blog.cannabis_oil.outline.history": "Alte Geschichte der Cannabis-infundierten Öle",
    "blog.cannabis_oil.outline.traditional_uses": "Traditionelle Verwendungen in verschiedenen Kulturen",
    "blog.cannabis_oil.outline.modern_applications": "Moderne Anwendungen",
    "blog.cannabis_oil.outline.recipe": "Rezept mit Terpen-Zusätzen",
  },
}
