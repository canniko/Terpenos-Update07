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
  | "contact.form.email"
  | "contact.form.inquiryType"
  | "contact.form.subject"
  | "contact.form.message"
  | "contact.form.send"
  | "contact.form.sending"
  | "contact.form.success.title"
  | "contact.form.success.message"
  | "contact.form.success.button"
  | "contact.info.title"
  | "contact.info.subtitle"
  | "contact.info.address"
  | "contact.info.phone"
  | "contact.info.email"
  | "contact.info.hours"
  | "contact.faq.title"
  | "contact.faq.subtitle"
  | "footer.description"
  | "footer.links.title"
  | "footer.resources.title"
  | "footer.contact.title"
  | "footer.copyright"

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
    "contact.form.email": "Email",
    "contact.form.inquiryType": "Inquiry Type",
    "contact.form.subject": "Subject",
    "contact.form.message": "Message",
    "contact.form.send": "Send Message",
    "contact.form.sending": "Sending...",
    "contact.form.success.title": "Message Sent Successfully",
    "contact.form.success.message": "Thank you for reaching out! We'll get back to you shortly.",
    "contact.form.success.button": "Send Another Message",
    "contact.info.title": "Contact Information",
    "contact.info.subtitle": "Reach out to us through any of the following channels.",
    "contact.info.address": "Address",
    "contact.info.phone": "Phone",
    "contact.info.email": "Email",
    "contact.info.hours": "Hours",
    "contact.faq.title": "Frequently Asked Questions",
    "contact.faq.subtitle": "Find answers to common questions about our products and services.",

    "footer.description": "Innovative scientific solutions and research for a better future.",
    "footer.links.title": "Quick Links",
    "footer.resources.title": "Resources",
    "footer.contact.title": "Contact",
    "footer.copyright": "All rights reserved.",
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
    "contact.form.email": "Correo Electrónico",
    "contact.form.inquiryType": "Tipo de Consulta",
    "contact.form.subject": "Asunto",
    "contact.form.message": "Mensaje",
    "contact.form.send": "Enviar Mensaje",
    "contact.form.sending": "Enviando...",
    "contact.form.success.title": "Mensaje Enviado Exitosamente",
    "contact.form.success.message": "¡Gracias por contactarnos! Nos pondremos en contacto con usted pronto.",
    "contact.form.success.button": "Enviar Otro Mensaje",
    "contact.info.title": "Información de Contacto",
    "contact.info.subtitle": "Comuníquese con nosotros a través de cualquiera de los siguientes canales.",
    "contact.info.address": "Dirección",
    "contact.info.phone": "Teléfono",
    "contact.info.email": "Correo Electrónico",
    "contact.info.hours": "Horario",
    "contact.faq.title": "Preguntas Frecuentes",
    "contact.faq.subtitle": "Encuentre respuestas a preguntas comunes sobre nuestros productos y servicios.",

    "footer.description": "Soluciones e investigación científica innovadoras para un futuro mejor.",
    "footer.links.title": "Enlaces Rápidos",
    "footer.resources.title": "Recursos",
    "footer.contact.title": "Contacto",
    "footer.copyright": "Todos los derechos reservados.",
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
    "contact.form.email": "Email",
    "contact.form.inquiryType": "Type de Demande",
    "contact.form.subject": "Sujet",
    "contact.form.message": "Message",
    "contact.form.send": "Envoyer le Message",
    "contact.form.sending": "Envoi en cours...",
    "contact.form.success.title": "Message Envoyé avec Succès",
    "contact.form.success.message": "Merci de nous avoir contactés! Nous vous répondrons bientôt.",
    "contact.form.success.button": "Envoyer un Autre Message",
    "contact.info.title": "Informations de Contact",
    "contact.info.subtitle": "Contactez-nous par l'un des canaux suivants.",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Téléphone",
    "contact.info.email": "Email",
    "contact.info.hours": "Heures",
    "contact.faq.title": "Questions Fréquemment Posées",
    "contact.faq.subtitle": "Trouvez des réponses aux questions courantes sur nos produits et services.",

    "footer.description": "Solutions et recherche scientifiques innovantes pour un avenir meilleur.",
    "footer.links.title": "Liens Rapides",
    "footer.resources.title": "Ressources",
    "footer.contact.title": "Contact",
    "footer.copyright": "Tous droits réservés.",
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
    "about.story.p3":
      "Heute steht Terpenos.com als vollständig lizenzierter Importeur von Cannabis-abgeleiteten Molekülen, der von Ecuador aus mit einer Satellitenpräsenz in Kalifornien operiert. Unser Labor ist führend in der Entwicklung und Aufrechterhaltung von Prozessen, die die pharmazeutische und lebensmittelgerechte Qualität unserer Formulierungen und Rohstoffe garantieren. Wir sind spezialisiert auf Terpene, CBD und andere legale Cannabinoide und bedienen Kunden, die unübertroffene Reinheit und Wirksamkeit suchen. Unsere Geschichte ist ein Zeugnis für die Überzeugung, dass Cannabis Medizin ist, eine Überzeugung, die uns von den frühen Tagen der Legalisierungskampagnen bis zur Spitze der Branche heute angetrieben hat. Bei Terpenos.com sind wir mehr als nur ein Unternehmen; wir sind Teil einer globalen Bewegung in Richtung Wellness, Innovation und dem unermüdlichen Streben nach Exzellenz im Cannabis-Bereich.",

    "about.values.title": "Unsere Werte",
    "about.values.subtitle": "Die Prinzipien, die unsere Arbeit leiten und unsere Kultur definieren.",
    "about.values.integrity": "Wissenschaftliche Integrität",
    "about.values.integrity.desc":
      "Wir halten die höchsten Standards wissenschaftlicher Strenge und ethischen Verhaltens in all unserer Arbeit ein.",
    "about.values.innovation": "Innovation",
    "about.values.innovation.desc":
      "Wir fördern eine Kultur der Kreativität und kontinuierlichen Verbesserung, um den wissenschaftlichen Fortschritt voranzutreiben.",
    "about.values.collaboration": "Zusammenarbeit",
    "about.values.collaboration.desc":
      "Wir glauben an die Kraft der Teamarbeit und Partnerschaften, um komplexe Herausforderungen zu lösen.",
    "about.values.impact": "Wirkung",
    "about.values.impact.desc":
      "Wir engagieren uns für Forschung, die einen bedeutenden Unterschied in der Welt macht.",

    "about.approach.title": "Unser Ansatz",
    "about.approach.p1":
      "Bei Terpenos.com ist unser Ansatz in der Wissenschaft verwurzelt, von Zweck geleitet und von Innovation angetrieben. Von unserem hochmodernen Labor in Ecuador bis zu unserer strategischen Präsenz in Kalifornien wenden wir strenge Standards auf jeden Schritt unseres Prozesses an und stellen sicher, dass jedes Molekül, das wir importieren oder formulieren, pharmazeutischen und lebensmittelgerechten Maßstäben entspricht.",
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
    "contact.form.email": "E-Mail",
    "contact.form.inquiryType": "Anfrageart",
    "contact.form.subject": "Betreff",
    "contact.form.message": "Nachricht",
    "contact.form.send": "Nachricht senden",
    "contact.form.sending": "Wird gesendet...",
    "contact.form.success.title": "Nachricht erfolgreich gesendet",
    "contact.form.success.message": "Vielen Dank für Ihre Kontaktaufnahme! Wir werden uns in Kürze bei Ihnen melden.",
    "contact.form.success.button": "Eine weitere Nachricht senden",
    "contact.info.title": "Kontaktinformationen",
    "contact.info.subtitle": "Erreichen Sie uns über einen der folgenden Kanäle.",
    "contact.info.address": "Adresse",
    "contact.info.phone": "Telefon",
    "contact.info.email": "E-Mail",
    "contact.info.hours": "Öffnungszeiten",
    "contact.faq.title": "Häufig gestellte Fragen",
    "contact.faq.subtitle": "Finden Sie Antworten auf häufige Fragen zu unseren Produkten und Dienstleistungen.",

    "footer.description": "Innovative wissenschaftliche Lösungen und Forschung für eine bessere Zukunft.",
    "footer.links.title": "Schnelllinks",
    "footer.resources.title": "Ressourcen",
    "footer.contact.title": "Kontakt",
    "footer.copyright": "Alle Rechte vorbehalten.",
  },
}
