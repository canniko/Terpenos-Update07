export type Language = "en" | "es" | "fr" | "de"

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
  | "blog.cannabis_oil.recipe.usage.title"
  | "blog.cannabis_oil.recipe.usage.text"
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
    "blog.cannabis_oil.recipe.usage.title": "Usage:",
    "blog.cannabis_oil.recipe.usage.text":
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
    "blog.cannabis_oil.recipe.usage.title": "Uso:",
    "blog.cannabis_oil.recipe.usage.text":
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

  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.team": "Notre Équipe",
    "nav.products": "Produits et Services",
    "nav.blog": "Blog",
    "nav.contact": "Contact",

    "home.hero.title": "Faire Progresser la Science par la Recherche et l'Innovation",
    "home.hero.subtitle":
      "Terpenos est à l'avant-garde de la découverte scientifique, fournissant des solutions de pointe et de la recherche pour un avenir meilleur.",
    "home.hero.cta.explore": "Explorer Nos Solutions",
    "home.hero.cta.contact": "Contactez-Nous",

    "home.features.title": "Excellence Scientifique",
    "home.features.subtitle":
      "Découvrez comment notre approche innovante de la science transforme les industries et fait progresser la recherche.",
    "home.features.research": "Recherche",
    "home.features.research.desc": "Recherche scientifique pionnière pour résoudre des défis complexes.",
    "home.features.analysis": "Analyse",
    "home.features.analysis.desc": "Techniques analytiques avancées pour des résultats précis.",
    "home.features.innovation": "Innovation",
    "home.features.innovation.desc": "Développement de solutions scientifiques de nouvelle génération.",
    "home.features.quality": "Qualité",
    "home.features.quality.desc": "Engagement envers l'excellence et l'intégrité scientifique.",

    "home.cta.title": "Prêt à Collaborer?",
    "home.cta.subtitle": "Rejoignez-nous pour repousser les limites de la découverte scientifique et de l'innovation.",
    "home.cta.button1": "Prenez Contact",
    "home.cta.button2": "Explorer Nos Services",

    "about.hero.title": "À Propos de Terpenos",
    "about.hero.subtitle": "Recherche scientifique pionnière et innovation pour un avenir meilleur.",
    "about.story.title": "Notre Histoire",
    "about.story.p1":
      "Au cœur de Quito, en Équateur, se trouve une force pionnière dans l'industrie du cannabis : Terpenos.com. Fondée en 2021, notre parcours n'est pas seulement une histoire de création d'entreprise, mais un récit profond qui s'entremêle avec l'histoire et l'évolution du cannabis en tant que médicament. Nos racines plongent dans les premiers jours des campagnes de légalisation du cannabis à Berkeley et Oakland, en Californie, où nos fondateurs n'étaient pas de simples spectateurs, mais des bénévoles actifs et des défenseurs. Leur dévouement à la cause les a amenés à collaborer avec des organisations influentes telles qu'Oaksterdam et Harborside, témoignant de première main des défis et des triomphes qui ont façonné l'industrie.",
    "about.story.p2":
      "Cependant, notre histoire n'a pas commencé avec la fondation de Terpenos.com. C'est la continuation d'un héritage d'excellence et d'innovation de dix ans dans les secteurs pharmaceutique et alimentaire. Nos fondateurs ont apporté avec eux une riche expérience, ayant travaillé avec des fabricants de premier plan d'aliments et de produits pharmaceutiques sous marque privée, où ils ont joué un rôle déterminant dans la mise en œuvre de systèmes de classe mondiale. Cette expérience inestimable a jeté les bases de ce que Terpenos.com allait devenir : un leader dans le domaine du cannabis, dédié aux plus hauts standards de qualité et de sécurité.",
    "about.story.p3":
      "Aujourd'hui, Terpenos.com est un importateur agréé de molécules dérivées du cannabis, opérant depuis l'Équateur avec une présence satellite en Californie. Notre laboratoire est à la pointe du développement et du maintien de processus qui garantissent la qualité pharmaceutique et alimentaire de nos formulations et matières premières. Nous nous spécialisons dans les terpènes, le CBD et autres cannabinoïdes légaux, répondant aux besoins des clients qui recherchent une pureté et une efficacité inégalées. Notre histoire témoigne de la conviction que le cannabis est un médicament, une conviction qui nous a portés des premiers jours des campagnes de légalisation jusqu'à la pointe de l'industrie aujourd'hui. Chez Terpenos.com, nous sommes plus qu'une entreprise ; nous faisons partie d'un mouvement mondial vers le bien-être, l'innovation et la poursuite inlassable de l'excellence dans le domaine du cannabis.",

    "about.values.title": "Nos Valeurs",
    "about.values.subtitle": "Les principes qui guident notre travail et définissent notre culture.",
    "about.values.integrity": "Intégrité Scientifique",
    "about.values.integrity.desc":
      "Nous respectons les normes les plus élevées de rigueur scientifique et de conduite éthique dans tout notre travail.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "Nous favorisons une culture de créativité et d'amélioration continue pour stimuler le progrès scientifique.",
    "about.values.collaboration": "Collaboration",
    "about.values.collaboration.desc":
      "Nous croyons au pouvoir du travail d'équipe et des partenariats pour résoudre des défis complexes.",
    "about.values.impact": "Impact",
    "about.values.impact.desc":
      "Nous nous engageons dans la recherche qui fait une différence significative dans le monde.",

    "about.approach.title": "Notre Approche",
    "about.approach.p1":
      "Chez Terpenos.com, notre approche est ancrée dans la science, guidée par un objectif et alimentée par l'innovation. De notre laboratoire de pointe en Équateur à notre présence stratégique en Californie, nous appliquons des normes rigoureuses à chaque étape de notre processus, garantissant que chaque molécule que nous importons ou formulons répond aux critères pharmaceutiques et alimentaires.",
    "about.approach.p2":
      "Nous collaborons avec plusieurs laboratoires certifiés par la FDA aux États-Unis pour valider la sécurité, la pureté et la cohérence de nos produits. Ces collaborations renforcent notre engagement envers l'assurance qualité et la conformité mondiale, établissant des ponts entre la science et la confiance au-delà des frontières.",
    "about.approach.p3":
      "Nous ne travaillons pas simplement avec le cannabis, nous travaillons avec intention. Spécialisés dans les terpènes, le CBD et les cannabinoïdes légaux, nous collaborons avec des entreprises pharmaceutiques, des laboratoires alimentaires et des marques de bien-être qui exigent pureté, traçabilité et efficacité.",
    "about.approach.p4":
      "Notre travail est fondé sur la conviction que le cannabis est un médicament. Cette conviction nous pousse à maintenir les plus hauts niveaux d'intégrité, de transparence et de qualité dans une industrie qui définit encore son avenir. Que nous formulions des profils de terpènes sur mesure ou importions des ingrédients actifs, nous agissons en tant que gardiens d'une plante que nous respectons profondément.",
    "about.approach.p5": "C'est plus que du commerce. C'est une mission. C'est notre approche.",

    "team.hero.title": "Notre Équipe",
    "team.hero.subtitle": "Rencontrez les esprits brillants derrière nos innovations scientifiques.",
    "team.join.title": "Rejoignez Notre Équipe",
    "team.join.p1":
      "Nous recherchons toujours des scientifiques, des chercheurs et des professionnels talentueux pour rejoindre notre équipe. Chez Terpenos, vous aurez l'opportunité de travailler sur des recherches de pointe, de collaborer avec des esprits brillants et d'avoir un impact significatif.",
    "team.join.p2":
      "Nous offrons un environnement de travail stimulant, des avantages compétitifs et des opportunités de croissance et de développement professionnel.",
    "team.join.button": "Voir les Postes Ouverts",

    "products.hero.title": "Produits et Services",
    "products.hero.subtitle": "Solutions scientifiques innovantes adaptées à vos besoins.",
    "products.tabs.products": "Produits",
    "products.tabs.services": "Services",
    "products.case.title": "Études de Cas",
    "products.case.subtitle":
      "Découvrez comment nos produits et services ont aidé des organisations à atteindre leurs objectifs scientifiques.",
    "products.cta.title": "Prêt à Commencer?",
    "products.cta.subtitle":
      "Contactez-nous aujourd'hui pour discuter de la façon dont nos produits et services peuvent soutenir vos efforts scientifiques.",
    "products.cta.button1": "Contactez-Nous",
    "products.cta.button2": "En Savoir Plus Sur Nous",

    "blog.hero.title": "Notre Blog",
    "blog.hero.subtitle": "Perspectives, découvertes et points de vue de notre équipe scientifique.",
    "blog.search.placeholder": "Rechercher des articles...",
    "blog.newsletter.title": "Restez Informé",
    "blog.newsletter.subtitle":
      "Abonnez-vous à notre newsletter pour recevoir les dernières perspectives et mises à jour scientifiques.",
    "blog.newsletter.button": "S'abonner",
    "blog.newsletter.privacy": "Nous respectons votre vie privée. Désabonnez-vous à tout moment.",

    "contact.hero.title": "Contactez-Nous",
    "contact.hero.subtitle": "Nous aimerions avoir de vos nouvelles. Prenez contact avec notre équipe.",
    "contact.form.title": "Envoyez-Nous un Message",
    "contact.form.description": "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
    "contact.form.name": "Nom",
    "contact.form.name.placeholder": "Votre nom",
    "contact.form.email": "Email",
    "contact.form.email.placeholder": "Votre email",
    "contact.form.inquiryType": "Type de Demande",
    "contact.form.inquiryType.placeholder": "Sélectionnez le type de demande",
    "contact.form.inquiryType.general": "Demande Générale",
    "contact.form.inquiryType.products": "Produits",
    "contact.form.inquiryType.services": "Services",
    "contact.form.inquiryType.partnership": "Partenariat",
    "contact.form.inquiryType.careers": "Carrières",
    "contact.form.subject": "Sujet",
    "contact.form.subject.placeholder": "Sujet de votre message",
    "contact.form.message": "Message",
    "contact.form.message.placeholder": "Votre message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success.title": "Message Envoyé avec Succès",
    "contact.form.success.message": "Merci de nous avoir contactés! Nous vous répondrons bientôt.",
    "contact.form.success.button": "Envoyer un Autre Message",
    "contact.form.error.general": "Une erreur inattendue s'est produite. Veuillez réessayer plus tard.",
    "contact.info.title": "Informations de Contact",
    "contact.info.subtitle": "Contactez-nous par l'un des canaux suivants.",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.hours": "Heures",
    "contact.info.hours.weekdays": "Lundi - Vendredi",
    "contact.map.title": "Emplacement de Terpenos - Centre Commercial Multicentro",
    "contact.faq.title": "Questions Fréquemment Posées",
    "contact.faq.subtitle": "Trouvez des réponses aux questions courantes sur nos produits et services.",
    "contact.faq.q1": "Dans quels domaines de recherche Terpenos se spécialise-t-il?",
    "contact.faq.a1":
      "Terpenos se spécialise dans la biologie moléculaire, la biochimie, la chimie analytique et les domaines connexes. Notre approche interdisciplinaire nous permet de relever des défis scientifiques complexes dans divers domaines.",
    "contact.faq.q2": "Proposez-vous des services de recherche personnalisés?",
    "contact.faq.a2":
      "Oui, nous fournissons des services de recherche adaptés pour répondre aux besoins spécifiques des clients. Notre équipe peut concevoir et exécuter des projets de recherche du concept à l'achèvement, en fournissant des résultats et des analyses complets.",
    "contact.faq.q3": "Quel est votre délai habituel pour l'analyse en laboratoire?",
    "contact.faq.a3":
      "Les délais varient en fonction de la complexité de l'analyse, mais nous nous efforçons de fournir des résultats aussi efficacement que possible sans compromettre la qualité. Les analyses standard prennent généralement 5 à 7 jours ouvrables.",
    "contact.faq.q4": "Expédiez-vous des produits à l'international?",
    "contact.faq.a4":
      "Oui, nous expédions nos produits dans le monde entier. Les délais et les coûts d'expédition internationaux varient selon la destination. Veuillez nous contacter pour des informations spécifiques concernant votre emplacement.",
    "contact.faq.q5": "Puis-je planifier une consultation avec votre équipe scientifique?",
    "contact.faq.a5":
      "Absolument. Nous proposons des consultations avec nos experts scientifiques pour discuter de vos besoins de recherche, de vos défis et des solutions potentielles. Veuillez nous contacter pour organiser une réunion.",
    "contact.faq.q6": "Proposez-vous une formation pour votre équipement analytique?",
    "contact.faq.a6":
      "Oui, nous fournissons une formation complète pour tous nos équipements et logiciels. La formation peut être effectuée sur site ou à distance, selon vos préférences et vos exigences.",

    "footer.description": "Solutions et recherche scientifiques innovantes pour un avenir meilleur.",
    "footer.links.title": "Liens Rapides",
    "footer.resources.title": "Ressources",
    "footer.contact.title": "Contact",
    "footer.copyright": "Tous droits réservés.",
    "blog.cannabis_oil.title": "La Longue Tradition des Huiles Infusées au Cannabis avec une Recette",
    "blog.cannabis_oil.excerpt":
      "Explorez l'histoire ancienne et les applications modernes des huiles infusées au cannabis, ainsi qu'une recette détaillée pour réaliser votre propre infusion avec des terpènes spécifiques.",
    "blog.cannabis_oil.history.p1":
      "La pratique d'infuser du cannabis dans des huiles est une tradition séculaire qui s'étend sur des siècles et des cultures, reflétant une compréhension profonde du potentiel médicinal et thérapeutique de la plante. Les civilisations anciennes, comme celles de Chine et d'Inde, ont été parmi les premières à explorer les bienfaits des huiles infusées au cannabis. Dans la médecine traditionnelle chinoise, le cannabis était utilisé comme ingrédient clé dans divers remèdes, avec des archives remontant à 2737 av. J.-C. pour le traitement de maux tels que la douleur et l'inflammation. De même, en Inde, le cannabis fait partie intégrante de la médecine ayurvédique, où il est connu sous le nom de \"bhang\" et utilisé dans des huiles et des pâtes pour traiter diverses affections, notamment les problèmes digestifs et les maladies de peau.",
    "blog.cannabis_oil.history.p2":
      "Le Moyen-Orient a également une riche histoire d'utilisation du cannabis, particulièrement dans des régions comme la Perse (l'Iran actuel), où les huiles infusées au cannabis étaient utilisées pour leurs propriétés analgésiques et anti-inflammatoires. Les médecins islamiques pendant la période médiévale, comme Avicenne, ont documenté les applications thérapeutiques du cannabis dans leurs textes médicaux, soulignant son rôle dans le soulagement de la douleur et la relaxation musculaire. Ces pratiques anciennes se sont finalement répandues dans d'autres parties du monde, y compris l'Afrique et l'Europe, où les huiles infusées au cannabis ont été incorporées dans les traditions de médecine populaire pour leurs effets apaisants et curatifs.",
    "blog.cannabis_oil.history.p3":
      "Dans l'histoire plus récente, l'utilisation d'huiles infusées au cannabis a connu une résurgence, motivée par un intérêt croissant pour les remèdes naturels et holistiques. Les traditions historiques des méthodes d'infusion du cannabis ont été ravivées et affinées, combinant la sagesse ancienne avec la compréhension scientifique moderne. Aujourd'hui, les huiles infusées au cannabis sont largement reconnues pour leur polyvalence et leur efficacité, poursuivant un héritage de guérison qui a transcendé le temps et la géographie.",
    "blog.cannabis_oil.recipe.title": "Recette d'Huile Infusée au Cannabis avec Terpènes",
    "blog.cannabis_oil.recipe.ingredients.title": "Ingrédients:",
    "blog.cannabis_oil.recipe.ingredients.list":
      "1 tasse d'huile de coco ou d'huile d'olive (selon votre préférence)\n10 grammes de fleurs de cannabis (décarboxylées)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.intro": "Terpènes (facultatif, selon préférence):",
    "blog.cannabis_oil.recipe.ingredients.terpenes.limonene":
      "2 gouttes de Limonène (pour un arôme d'agrumes et des effets énergisants)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.linalool":
      "2 gouttes de Linalol (pour un arôme floral et des effets relaxants)",
    "blog.cannabis_oil.recipe.ingredients.terpenes.myrcene":
      "2 gouttes de Myrcène (pour un arôme terreux et des effets sédatifs)",
    "blog.cannabis_oil.recipe.utensils.title": "Ustensiles:",
    "blog.cannabis_oil.recipe.utensils.list":
      "Moulin à café ou moulin à herbes\nPlaque de cuisson\nPapier sulfurisé\nBain-marie ou une casserole et un récipient résistant à la chaleur\nPassoire à mailles fines ou étamine\nBocal en verre pour le stockage",
    "blog.cannabis_oil.recipe.instructions.title": "Instructions:",
    "blog.cannabis_oil.recipe.instructions.decarb.title": "Décarboxylation du Cannabis:",
    "blog.cannabis_oil.recipe.instructions.decarb.steps":
      "1. Préchauffez le four à 115°C (240°F).\n2. Broyez les fleurs de cannabis avec le moulin à café ou le moulin à herbes.\n3. Placez le cannabis moulu sur une plaque de cuisson recouverte de papier sulfurisé.\n4. Faites cuire le cannabis pendant 30-40 minutes, en remuant toutes les 10 minutes pour assurer une décarboxylation uniforme. Ce processus active les composés psychoactifs du cannabis.",
    "blog.cannabis_oil.recipe.instructions.infusion.title": "Infusion de l'Huile:",
    "blog.cannabis_oil.recipe.instructions.infusion.steps":
      "1. Remplissez la partie inférieure du bain-marie avec de l'eau et portez-la à frémissement.\n2. Placez l'huile (de coco ou d'olive) dans la partie supérieure du bain-marie.\n3. Ajoutez le cannabis décarboxylé à l'huile.\n4. Maintenez le mélange à feu doux pendant 2-3 heures, en remuant occasionnellement. Assurez-vous de que l'huile ne bout pas.",
    "blog.cannabis_oil.recipe.instructions.terpenes.title": "Ajout de Terpènes (Facultatif):",
    "blog.cannabis_oil.recipe.instructions.terpenes.steps":
      "1. Si vous souhaitez ajouter des terpènes spécifiques, ajoutez-les à l'huile tiède après le processus d'infusion, en remuant bien pour mélanger uniformément.",
    "blog.cannabis_oil.recipe.instructions.straining.title": "Filtration:",
    "blog.cannabis_oil.recipe.instructions.straining.steps":
      "1. Une fois l'infusion terminée, filtrez le mélange à travers une passoire à mailles fines ou une étamine pour séparer l'huile des résidus de cannabis.\n2. Pressez bien les résidus pour extraire autant d'huile que possible.",
    "blog.cannabis_oil.recipe.instructions.storage.title": "Conservation:",
    "blog.cannabis_oil.recipe.instructions.storage.steps":
      "1. Versez l'huile infusée dans un bocal en verre propre.\n2. Conservez dans un endroit frais et sombre. L'huile de cannabis peut se conserver jusqu'à deux mois si elle est stockée correctement.",
    "blog.cannabis_oil.recipe.usage.title": "Utilisation:",
    "blog.cannabis_oil.recipe.usage.text":
      "Vous pouvez utiliser cette huile infusée dans diverses recettes culinaires, comme les vinaigrettes, les plats sautés, ou même comme substitut d'huile dans les produits de boulangerie. Elle peut également servir de base pour des crèmes ou des baumes maison.",
    "blog.cannabis_oil.recipe.notes.title": "Notes:",
    "blog.cannabis_oil.recipe.notes.dosage":
      "Dosage: Il est important de se rappeler que la puissance de l'huile dépend de la concentration de THC et CBD dans la fleur de cannabis utilisée. Commencez par une petite quantité et ajustez selon vos besoins et votre tolérance.",
    "blog.cannabis_oil.recipe.notes.terpenes":
      "Terpènes: L'ajout de terpènes est facultatif et peut être ajusté selon votre arôme préféré et les effets désirés.",
    "blog.cannabis_oil.recipe.conclusion":
      "J'espère que vous apprécierez la préparation et l'utilisation de cette huile infusée au cannabis!",
    "blog.cannabis_oil.disclaimer":
      "Cette recette est destinée uniquement à la consommation personnelle et n'est pas destinée à guérir une maladie ou un problème de santé. L'utilisation d'huiles infusées au cannabis doit être effectuée de manière responsable et conformément aux lois locales et nationales sur le cannabis. Consultez toujours un professionnel de la santé avant d'utiliser des produits à base de cannabis, surtout si vous avez des conditions médicales préexistantes ou si vous prenez des médicaments.",
    "blog.cannabis_oil.closing.p1":
      "Cette recette combine des méthodes d'infusion traditionnelles avec une compréhension moderne des terpènes, vous permettant de personnaliser le profil aromatique et thérapeutique de votre huile infusée au cannabis. L'ajout de terpènes spécifiques améliore non seulement l'expérience sensorielle mais aussi potentiellement les effets thérapeutiques grâce à ce qu'on appelle \"l'effet d'entourage\" – l'interaction synergique entre cannabinoïdes et terpènes.",
    "blog.cannabis_oil.closing.p2":
      "En vous lançant dans la création de vos propres huiles infusées au cannabis, vous participez à une tradition qui vous relie aux guérisseurs et herboristes à travers les millénaires, tout en embrassant les connaissances contemporaines sur la médecine des plantes et le bien-être.",
    "blog.cannabis_oil.tags.traditional": "Médecine Traditionnelle",
    "blog.cannabis_oil.tags.recipes": "Recettes",
    "blog.cannabis_oil.tags.terpenes": "Terpènes",
    "blog.cannabis_oil.tags.cannabis": "Cannabis",
    "blog.back_to_blog": "Retour au Blog",
    "blog.share_article": "Partager l'Article",
    "blog.link_copied": "Lien copié dans le presse-papiers !",
    "blog.related_articles": "Articles Connexes",
    "blog.read_more": "Lire Plus",
    "blog.featured_article": "Article en Vedette",
    "blog.latest_articles": "Derniers Articles",
    "blog.no_posts_found": "Aucun article trouvé correspondant à votre recherche.",
    "blog.read_full_article": "Lire l'Article Complet",
    "blog.in_this_article": "Dans cet article",
    "blog.cannabis_oil.outline.history": "Histoire Ancienne des Huiles Infusées au Cannabis",
    "blog.cannabis_oil.outline.traditional_uses": "Utilisations Traditionnelles à Travers les Cultures",
    "blog.cannabis_oil.outline.modern_applications": "Applications Modernes",
    "blog.cannabis_oil.outline.recipe": "Recette avec Ajouts de Terpènes",
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
    "blog.cannabis_oil.recipe.usage.title": "Verwendung:",
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
