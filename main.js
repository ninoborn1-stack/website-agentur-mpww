/* =========================================
   FORMA Studio — Shared JavaScript
   ========================================= */

/* === i18n DATA === */
const i18nData = {
  de: {
    /* Navigation */
    nav_home:     'Home',
    nav_about:    'Studio',
    nav_services: 'Leistungen',
    nav_work:     'Projekte',
    nav_blog:     'Blog',
    nav_contact:  'Kontakt',

    /* Footer */
    footer_tagline:       'Wir gestalten Marken, die bewegen.',
    footer_nav_heading:   'Navigation',
    footer_sv_heading:    'Leistungen',
    footer_contact_heading: 'Kontakt',
    footer_rights:        '© 2026 FORMA Studio. Alle Rechte vorbehalten.',
    footer_imprint:       'Impressum',
    footer_privacy:       'Datenschutz',

    /* Footer service links */
    footer_sv_1: 'Brand Strategy',
    footer_sv_2: 'Visual Identity',
    footer_sv_3: 'Web Design',
    footer_sv_4: 'Campaign Design',
    footer_sv_5: 'Motion & Interaction',

    /* Index — Hero */
    hero_label:   'Kreativagentur Berlin',
    hero_h1_a:    'Wir gestalten Marken,',
    hero_h1_b:    'die bewegen.',
    hero_sub:     'Von der ersten Idee bis zur konsequenten Wirkung — strategisch, visuell, unverwechselbar.',
    hero_cta1:    'Unsere Projekte',
    hero_cta2:    'Kontakt aufnehmen',
    hero_badge:   'Jahre Erfahrung',

    /* Index — Services Teaser */
    sv_label:   'Was wir tun',
    sv_heading: 'Leistungen, die Wirkung erzeugen.',
    sv_desc:    'Wir denken in Systemen, nicht in Einzellösungen — von der Strategie bis zur letzten Pixel.',
    sv_cta:     'Alle Leistungen',

    s1_title: 'Brand Strategy',
    s1_desc:  'Positionierung, Naming und Messaging, die deine Marke einzigartig und unvergesslich machen.',
    s2_title: 'Visual Identity',
    s2_desc:  'Logo, Farbe, Typografie und Design System — ein kohärentes visuelles Fundament.',
    s3_title: 'Web Design',
    s3_desc:  'Websites, die nicht nur schön aussehen, sondern konvertieren und begeistern.',
    s4_title: 'Campaign Design',
    s4_desc:  'Print, Digital, Social — Kampagnen mit visueller Schlagkraft und klarer Botschaft.',
    s5_title: 'Motion & Interaction',
    s5_desc:  'Animation und Microinteractions, die deine Marke zum Leben erwecken.',
    s6_title: 'Content Direction',
    s6_desc:  'Bildkonzept, Art Direction und Copywriting-Briefings für konsistente Kommunikation.',

    /* Index — Selected Work */
    work_label:   'Ausgewählte Projekte',
    work_heading: 'Arbeit, auf die wir stolz sind.',
    work_desc:    'Jedes Projekt ist eine Partnerschaft — mit echten Herausforderungen und messbaren Ergebnissen.',
    work_cta:     'Alle Projekte',

    p1_cat:   'Brand Identity',
    p1_title: 'Hartmann & Wolf',
    p1_desc:  'Markenrelaunch für eine Berliner Boutique-Kanzlei — von traditionell zu elegant-modern.',

    p2_cat:   'Packaging & Identity',
    p2_title: 'Velta Foods',
    p2_desc:  'Visuelle Identität und Packaging-System für ein wachsendes Bio-Start-up.',

    p3_cat:   'Brand Strategy',
    p3_title: 'Nexora Tech',
    p3_desc:  'Komplett neue Positionierung und Markenarchitektur für einen B2B SaaS-Anbieter.',

    view_project: 'Projekt ansehen',

    /* Index — Testimonial */
    t_label:    'Kundenstimmen',
    t1_quote:   'FORMA hat nicht nur unsere Erwartungen übertroffen — sie haben uns gezeigt, was wirklich möglich ist. Das Ergebnis ist eine Marke, die wir mit Stolz nach vorne tragen.',
    t1_name:    'Marie Kühn',
    t1_role:    'CEO, Velta Foods GmbH',

    /* Index — CTA */
    cta_label:   'Bereit anzufangen?',
    cta_heading: 'Lass uns gemeinsam etwas Bleibendes schaffen.',
    cta_desc:    'Ob Markenstart, Relaunch oder Website — wir freuen uns auf dein Projekt.',
    cta_btn:     'Gespräch vereinbaren',

    /* About */
    about_hero_label: 'Über uns',
    about_hero_h1:    'Wir sind FORMA Studio.',
    about_hero_sub:   'Ein kleines Team mit großem Anspruch — in Berlin verwurzelt, global denkend.',

    story_label: 'Unsere Geschichte',
    story_heading: 'Aus Überzeugung, nicht aus Zufall.',
    story_p1: 'FORMA entstand 2017 aus einer einfachen Überzeugung: dass gutes Design keine Frage des Budgets ist, sondern des Denkens. Wir begannen mit einem Tisch, zwei Bildschirmen und dem festen Glauben, dass jede Marke — ob Startup oder etabliertes Unternehmen — Anspruch auf exzellentes Design hat.',
    story_p2: 'Heute sind wir ein Team aus vier Spezialistinnen und Spezialisten, das Kunden von der initialen Strategie bis zur fertigen Umsetzung begleitet. Was uns antreibt? Die Überzeugung, dass Design nicht nur schön sein kann — es muss wirken.',

    stat1_num: '8+', stat1_label: 'Jahre Erfahrung',
    stat2_num: '60+', stat2_label: 'Abgeschlossene Projekte',
    stat3_num: '3',  stat3_label: 'Länder',
    stat4_num: '4',  stat4_label: 'Fachleute',

    values_label: 'Was uns leitet',
    values_heading: 'Unsere Werte.',

    v1_num: '01', v1_title: 'Klarheit',
    v1_desc: 'Wir reduzieren Komplexität auf das Wesentliche. Kein Lärm, keine Ablenkung — nur das, was wirklich zählt.',

    v2_num: '02', v2_title: 'Mut',
    v2_desc: 'Wir scheuen keine kreativen Risiken. Mittelmäßiges interessiert uns nicht. Wir streben nach dem, was bleibt.',

    v3_num: '03', v3_title: 'Handwerk',
    v3_desc: 'Jedes Detail hat Bedeutung. Wir gehen so lange in die Tiefe, bis eine Lösung wirklich sitzt.',

    v4_num: '04', v4_title: 'Kontinuität',
    v4_desc: 'Wir bauen keine Projekte, wir bauen Partnerschaften. Langfristiger Erfolg entsteht durch Vertrauen.',

    team_label:   'Das Team',
    team_heading: 'Köpfe hinter der Arbeit.',
    team_desc:    'Vier Spezialistinnen und Spezialisten, eine gemeinsame Mission.',

    tm1_name: 'Maja Schreiber', tm1_role: 'Creative Direction',
    tm1_bio:  'Maja denkt in Systemen und gestaltet in Schichten. 12 Jahre Erfahrung in Brand Design und Art Direction.',
    tm2_name: 'Leon Vogel', tm2_role: 'Design & Art Direction',
    tm2_bio:  'Leons Arbeit lebt an der Schnittfläche von Editorial und Interface — präzise, eigenständig, effektvoll.',
    tm3_name: 'Sara Müller', tm3_role: 'Strategy & Brand Consulting',
    tm3_bio:  'Sara übersetzt Markenziele in Strategie. Ihre Stärke: komplexe Fragen in klare Richtungen zu übersetzen.',
    tm4_name: 'Tim Kessler', tm4_role: 'Development & Interaction',
    tm4_bio:  'Tim baut das, was andere skizzieren — mit Blick auf Qualität, Performance und Nutzererfahrung.',

    /* Services page */
    sv_page_label: 'Leistungen',
    sv_page_h1:    'Was wir für dich tun.',
    sv_page_sub:   'Unser Leistungsportfolio ist ein System — jede Disziplin verstärkt die andere.',

    sv1_title: 'Brand Strategy',      sv1_tagline: 'Positionierung & Richtung',
    sv1_desc:  'Eine Marke ohne Strategie ist ein gutes Aussehen ohne Tiefe. Wir entwickeln gemeinsam mit dir die Grundlage für alles Weitere: Warum existiert deine Marke? Für wen? Und womit unterscheidet sie sich wirklich?',
    sv1_l1: 'Marktanalyse & Wettbewerb', sv1_l2: 'Zielgruppen-Definition',
    sv1_l3: 'Positionierungs-Framework', sv1_l4: 'Naming & Tonality',
    sv1_l5: 'Messaging-Architektur',     sv1_l6: 'Brand Story',

    sv2_title: 'Visual Identity',     sv2_tagline: 'Design System & Identität',
    sv2_desc:  'Eine starke visuelle Identität ist kein Logo — es ist ein System. Wir gestalten kohärente Bildwelten, die auf jeder Plattform und in jedem Format funktionieren.',
    sv2_l1: 'Logo & Wortmarke',           sv2_l2: 'Farbsystem',
    sv2_l3: 'Typografie-System',          sv2_l4: 'Iconography & Illustration',
    sv2_l5: 'Brand Guidelines',           sv2_l6: 'Design System & Tokens',

    sv3_title: 'Web Design',          sv3_tagline: 'UX/UI & Entwicklung',
    sv3_desc:  'Websites, die konvertieren, begeistern und auf allen Geräten funktionieren. Wir denken UX und Ästhetik zusammen — nie getrennt.',
    sv3_l1: 'UX Research & Wireframes',   sv3_l2: 'UI Design & Prototyping',
    sv3_l3: 'Responsive Development',     sv3_l4: 'Performance-Optimierung',
    sv3_l5: 'CMS-Integration',            sv3_l6: 'SEO-Grundlagen',

    sv4_title: 'Campaign Design',     sv4_tagline: 'Print, Digital & Social',
    sv4_desc:  'Kampagnen, die Menschen erreichen und berühren. Von der Idee bis zur finalen Datei — wir begleiten die gesamte kreative Produktion.',
    sv4_l1: 'Key Visual & Konzept',       sv4_l2: 'Social Media Assets',
    sv4_l3: 'Print & OOH',                sv4_l4: 'Display & Banner',
    sv4_l5: 'Präsentation & Pitch Deck',  sv4_l6: 'Geschäftsausstattung',

    sv5_title: 'Motion & Interaction', sv5_tagline: 'Animation & Microinteractions',
    sv5_desc:  'Bewegung, die Bedeutung trägt. Wir animieren Markenwelten so, dass sie lebendig werden — ohne zu überwältigen.',
    sv5_l1: 'Brand Motion Guidelines',    sv5_l2: 'Logo Animation',
    sv5_l3: 'UI Microinteractions',       sv5_l4: 'Scroll & Reveal Effekte',
    sv5_l5: 'Video & Social Motion',      sv5_l6: 'Lottie / After Effects',

    sv6_title: 'Content Direction',   sv6_tagline: 'Bildkonzept & Copywriting-Briefing',
    sv6_desc:  'Starkes Design braucht starke Inhalte. Wir entwickeln das konzeptuelle Fundament für Text, Bild und Ton — damit alles aus einem Guss wirkt.',
    sv6_l1: 'Bildredaktion & Art Direction', sv6_l2: 'Fotografie-Briefing',
    sv6_l3: 'Copywriting-Briefing',          sv6_l4: 'Content-Strategie',
    sv6_l5: 'SEO-Texte & Headlines',         sv6_l6: 'Social Content-Konzept',

    sv7_title: 'Event-Technik',        sv7_tagline: 'Vermittlung & Vermietung',
    sv7_desc:  'Wir vermitteln und vermieten alles, was dein Event technisch und atmosphärisch braucht — von der PA-Anlage bis zum Lounge-Möbel. Ein Ansprechpartner, alles aus einer Hand.',
    sv7_l1: 'Mikrofone & PA-Systeme',        sv7_l2: 'Beleuchtung & Bühnen-Rigging',
    sv7_l3: 'Möbel & Ausstattung',           sv7_l4: 'Kabel, Netzwerk & Strom',
    sv7_l5: 'Event-Software & Streaming',    sv7_l6: 'Auf- & Abbau-Koordination',

    sv8_title: 'Social Media',         sv8_tagline: 'Planung & Umsetzung',
    sv8_desc:  'Von der Strategie bis zum fertigen Post — wir planen und produzieren deine Social-Media-Präsenz so, dass sie deine Marke stärkt und echte Reichweite erzeugt.',
    sv8_l1: 'Content-Strategie & Redaktionsplan', sv8_l2: 'Content Creation (Bild, Video, Text)',
    sv8_l3: 'Community Management',               sv8_l4: 'Story- & Reels-Produktion',
    sv8_l5: 'Analytics & Reporting',              sv8_l6: 'Paid Social & Anzeigen',

    s7_title: 'Event-Technik',
    s7_desc:  'Vermittlung und Vermietung von Mikrofonen, Möbeln, Kabeln und allem, was dein Event braucht.',
    s8_title: 'Social Media',
    s8_desc:  'Planung und Umsetzung deiner Social-Media-Präsenz — von der Strategie bis zum fertigen Post.',

    /* Work page */
    wk_label:   'Portfolio',
    wk_heading: 'Projekte, die Eindruck hinterlassen.',
    wk_sub:     'Von Brand Identity bis Web Design — echte Herausforderungen, echte Ergebnisse.',

    filter_all:      'Alle',
    filter_brand:    'Branding',
    filter_web:      'Web Design',
    filter_campaign: 'Campaign',

    wk_p1_cat: 'Brand Identity', wk_p1_title: 'Hartmann & Wolf',
    wk_p1_desc: 'Markenrelaunch für eine Berliner Boutique-Kanzlei — von traditionell zu elegant-modern.',

    wk_p2_cat: 'Packaging & Identity', wk_p2_title: 'Velta Foods',
    wk_p2_desc: 'Visuelle Identität und Packaging-System für ein wachsendes Bio-Start-up aus Bayern.',

    wk_p3_cat: 'Web Design', wk_p3_title: 'Bloom Studio',
    wk_p3_desc: 'Website-Relaunch für ein Berliner Yoga-Studio — serenity trifft auf moderne UX.',

    wk_p4_cat: 'Brand Strategy', wk_p4_title: 'Nexora Tech',
    wk_p4_desc: 'Komplett neue Positionierung und Markenarchitektur für einen B2B SaaS-Anbieter.',

    view_case: 'Case Study',

    /* Blog page */
    bl_label:   'Blog',
    bl_heading: 'Gedanken zu Design und Marke.',
    bl_sub:     'Einblicke, Perspektiven und Erkenntnisse aus unserer täglichen Arbeit.',

    read_more: 'Weiterlesen',
    min_read:  'Min. Lesezeit',

    /* Contact page */
    ct_label:   'Kontakt',
    ct_heading: 'Lass uns sprechen.',
    ct_sub:     'Hast du ein Projekt? Eine Idee? Eine Herausforderung? Wir freuen uns, von dir zu hören.',

    ct_info_heading: 'Wir sind für dich da.',
    ct_info_desc:    'Egal ob du ein konkretes Briefing hast oder erst mal ein erstes Gespräch führen möchtest — meld dich einfach.',

    ct_addr_label: 'Adresse',
    ct_addr_val:   'Rosenthaler Str. 40, 10178 Berlin',
    ct_email_label: 'E-Mail',
    ct_email_val:   'hello@forma-studio.de',
    ct_phone_label: 'Telefon',
    ct_phone_val:   '+49 30 12345678',

    ct_form_name:       'Name',
    ct_form_name_ph:    'Dein Name',
    ct_form_company:    'Unternehmen',
    ct_form_company_ph: 'Firmenname (optional)',
    ct_form_email:      'E-Mail-Adresse',
    ct_form_email_ph:   'deine@email.de',
    ct_form_service:    'Gesuchte Leistung',
    ct_form_service_0:  'Bitte wählen...',
    ct_form_service_1:  'Brand Strategy',
    ct_form_service_2:  'Visual Identity',
    ct_form_service_3:  'Web Design',
    ct_form_service_4:  'Campaign Design',
    ct_form_service_5:  'Motion & Interaction',
    ct_form_service_6:  'Ich bin mir noch nicht sicher',
    ct_form_message:    'Deine Nachricht',
    ct_form_message_ph: 'Beschreib kurz dein Projekt oder deine Frage ...',
    ct_form_submit:     'Nachricht senden',

    ct_success_title: 'Nachricht erhalten.',
    ct_success_msg:   'Vielen Dank! Wir melden uns in der Regel innerhalb von 24 Stunden bei dir.',
  },

  en: {
    /* Navigation */
    nav_home:     'Home',
    nav_about:    'Studio',
    nav_services: 'Services',
    nav_work:     'Work',
    nav_blog:     'Blog',
    nav_contact:  'Contact',

    /* Footer */
    footer_tagline:       'We shape brands that move.',
    footer_nav_heading:   'Navigation',
    footer_sv_heading:    'Services',
    footer_contact_heading: 'Contact',
    footer_rights:        '© 2026 FORMA Studio. All rights reserved.',
    footer_imprint:       'Imprint',
    footer_privacy:       'Privacy',

    footer_sv_1: 'Brand Strategy',
    footer_sv_2: 'Visual Identity',
    footer_sv_3: 'Web Design',
    footer_sv_4: 'Campaign Design',
    footer_sv_5: 'Motion & Interaction',

    /* Index — Hero */
    hero_label:   'Creative Agency Berlin',
    hero_h1_a:    'We shape brands',
    hero_h1_b:    'that move.',
    hero_sub:     'From the first idea to consistent impact — strategic, visual, unmistakable.',
    hero_cta1:    'Our Work',
    hero_cta2:    'Get in Touch',
    hero_badge:   'Years of Experience',

    /* Index — Services Teaser */
    sv_label:   'What we do',
    sv_heading: 'Services that create impact.',
    sv_desc:    'We think in systems, not individual solutions — from strategy to the last pixel.',
    sv_cta:     'All Services',

    s1_title: 'Brand Strategy',
    s1_desc:  'Positioning, naming and messaging that make your brand unique and unforgettable.',
    s2_title: 'Visual Identity',
    s2_desc:  'Logo, colour, typography and design system — a coherent visual foundation.',
    s3_title: 'Web Design',
    s3_desc:  'Websites that not only look beautiful, but convert and inspire.',
    s4_title: 'Campaign Design',
    s4_desc:  'Print, digital, social — campaigns with visual punch and a clear message.',
    s5_title: 'Motion & Interaction',
    s5_desc:  'Animation and microinteractions that bring your brand to life.',
    s6_title: 'Content Direction',
    s6_desc:  'Image concepts, art direction and copywriting briefs for consistent communication.',

    /* Index — Selected Work */
    work_label:   'Selected Projects',
    work_heading: 'Work we are proud of.',
    work_desc:    'Every project is a partnership — with real challenges and measurable results.',
    work_cta:     'All Projects',

    p1_cat:   'Brand Identity',
    p1_title: 'Hartmann & Wolf',
    p1_desc:  'Brand relaunch for a Berlin boutique law firm — from traditional to elegantly modern.',

    p2_cat:   'Packaging & Identity',
    p2_title: 'Velta Foods',
    p2_desc:  'Visual identity and packaging system for a growing organic food start-up.',

    p3_cat:   'Brand Strategy',
    p3_title: 'Nexora Tech',
    p3_desc:  'Completely new positioning and brand architecture for a B2B SaaS provider.',

    view_project: 'View Project',

    /* Index — Testimonial */
    t_label:    'Testimonials',
    t1_quote:   'FORMA didn\'t just exceed our expectations — they showed us what\'s truly possible. The result is a brand we carry forward with pride.',
    t1_name:    'Marie Kühn',
    t1_role:    'CEO, Velta Foods GmbH',

    /* Index — CTA */
    cta_label:   'Ready to start?',
    cta_heading: 'Let\'s create something lasting together.',
    cta_desc:    'Whether it\'s a brand launch, relaunch or website — we look forward to your project.',
    cta_btn:     'Schedule a conversation',

    /* About */
    about_hero_label: 'About us',
    about_hero_h1:    'We are FORMA Studio.',
    about_hero_sub:   'A small team with high standards — rooted in Berlin, thinking globally.',

    story_label: 'Our Story',
    story_heading: 'From conviction, not coincidence.',
    story_p1: 'FORMA was born in 2017 from a simple conviction: that good design is not a question of budget, but of thinking. We started with a table, two screens, and the firm belief that every brand — whether a start-up or an established company — deserves excellent design.',
    story_p2: 'Today we are a team of four specialists who accompany clients from initial strategy to finished execution. What drives us? The conviction that design doesn\'t just need to look good — it needs to work.',

    stat1_num: '8+', stat1_label: 'Years of Experience',
    stat2_num: '60+', stat2_label: 'Completed Projects',
    stat3_num: '3',  stat3_label: 'Countries',
    stat4_num: '4',  stat4_label: 'Specialists',

    values_label: 'What guides us',
    values_heading: 'Our Values.',

    v1_num: '01', v1_title: 'Clarity',
    v1_desc: 'We reduce complexity to its essence. No noise, no distraction — only what truly matters.',

    v2_num: '02', v2_title: 'Courage',
    v2_desc: 'We don\'t shy away from creative risks. Mediocre doesn\'t interest us. We strive for what endures.',

    v3_num: '03', v3_title: 'Craft',
    v3_desc: 'Every detail has meaning. We go deep until a solution truly works.',

    v4_num: '04', v4_title: 'Continuity',
    v4_desc: 'We don\'t build projects, we build partnerships. Long-term success comes from trust.',

    team_label:   'The Team',
    team_heading: 'Minds behind the work.',
    team_desc:    'Four specialists, one shared mission.',

    tm1_name: 'Maja Schreiber', tm1_role: 'Creative Direction',
    tm1_bio:  'Maja thinks in systems and designs in layers. 12 years of experience in brand design and art direction.',
    tm2_name: 'Leon Vogel', tm2_role: 'Design & Art Direction',
    tm2_bio:  'Leon\'s work lives at the intersection of editorial and interface — precise, distinctive, impactful.',
    tm3_name: 'Sara Müller', tm3_role: 'Strategy & Brand Consulting',
    tm3_bio:  'Sara translates brand goals into strategy. Her strength: turning complex questions into clear direction.',
    tm4_name: 'Tim Kessler', tm4_role: 'Development & Interaction',
    tm4_bio:  'Tim builds what others sketch — with an eye for quality, performance and user experience.',

    /* Services page */
    sv_page_label: 'Services',
    sv_page_h1:    'What we do for you.',
    sv_page_sub:   'Our service portfolio is a system — each discipline amplifies the others.',

    sv1_title: 'Brand Strategy',      sv1_tagline: 'Positioning & Direction',
    sv1_desc:  'A brand without strategy is a good look without depth. Together we develop the foundation for everything else: Why does your brand exist? For whom? And what truly differentiates it?',
    sv1_l1: 'Market Analysis & Competition', sv1_l2: 'Target Audience Definition',
    sv1_l3: 'Positioning Framework',         sv1_l4: 'Naming & Tonality',
    sv1_l5: 'Messaging Architecture',        sv1_l6: 'Brand Story',

    sv2_title: 'Visual Identity',     sv2_tagline: 'Design System & Identity',
    sv2_desc:  'A strong visual identity is not a logo — it is a system. We design coherent visual worlds that work on every platform and in every format.',
    sv2_l1: 'Logo & Wordmark',            sv2_l2: 'Colour System',
    sv2_l3: 'Typography System',          sv2_l4: 'Iconography & Illustration',
    sv2_l5: 'Brand Guidelines',           sv2_l6: 'Design System & Tokens',

    sv3_title: 'Web Design',          sv3_tagline: 'UX/UI & Development',
    sv3_desc:  'Websites that convert, inspire and work on all devices. We think UX and aesthetics together — never apart.',
    sv3_l1: 'UX Research & Wireframes', sv3_l2: 'UI Design & Prototyping',
    sv3_l3: 'Responsive Development',   sv3_l4: 'Performance Optimisation',
    sv3_l5: 'CMS Integration',          sv3_l6: 'SEO Foundations',

    sv4_title: 'Campaign Design',     sv4_tagline: 'Print, Digital & Social',
    sv4_desc:  'Campaigns that reach and move people. From concept to final file — we accompany the entire creative production.',
    sv4_l1: 'Key Visual & Concept',       sv4_l2: 'Social Media Assets',
    sv4_l3: 'Print & OOH',                sv4_l4: 'Display & Banner',
    sv4_l5: 'Presentation & Pitch Deck',  sv4_l6: 'Corporate Stationery',

    sv5_title: 'Motion & Interaction', sv5_tagline: 'Animation & Microinteractions',
    sv5_desc:  'Movement that carries meaning. We animate brand worlds so they come alive — without overwhelming.',
    sv5_l1: 'Brand Motion Guidelines', sv5_l2: 'Logo Animation',
    sv5_l3: 'UI Microinteractions',    sv5_l4: 'Scroll & Reveal Effects',
    sv5_l5: 'Video & Social Motion',   sv5_l6: 'Lottie / After Effects',

    sv6_title: 'Content Direction',   sv6_tagline: 'Image Concept & Copywriting Brief',
    sv6_desc:  'Strong design needs strong content. We develop the conceptual foundation for text, image and tone — so everything works as one.',
    sv6_l1: 'Image Editing & Art Direction', sv6_l2: 'Photography Brief',
    sv6_l3: 'Copywriting Brief',             sv6_l4: 'Content Strategy',
    sv6_l5: 'SEO Copy & Headlines',          sv6_l6: 'Social Content Concept',

    sv7_title: 'Event Technology',     sv7_tagline: 'Procurement & Rental',
    sv7_desc:  'We source and rent everything your event needs technically and atmospherically — from PA systems to lounge furniture. One contact, everything from one place.',
    sv7_l1: 'Microphones & PA Systems',      sv7_l2: 'Lighting & Stage Rigging',
    sv7_l3: 'Furniture & Equipment',         sv7_l4: 'Cables, Network & Power',
    sv7_l5: 'Event Software & Streaming',    sv7_l6: 'Setup & Breakdown Coordination',

    sv8_title: 'Social Media',         sv8_tagline: 'Planning & Execution',
    sv8_desc:  'From strategy to finished post — we plan and produce your social media presence so it strengthens your brand and generates real reach.',
    sv8_l1: 'Content Strategy & Editorial Plan', sv8_l2: 'Content Creation (Image, Video, Copy)',
    sv8_l3: 'Community Management',              sv8_l4: 'Story & Reels Production',
    sv8_l5: 'Analytics & Reporting',             sv8_l6: 'Paid Social & Ads',

    s7_title: 'Event Technology',
    s7_desc:  'Procurement and rental of microphones, furniture, cables and everything your event needs.',
    s8_title: 'Social Media',
    s8_desc:  'Planning and execution of your social media presence — from strategy to the finished post.',

    /* Work page */
    wk_label:   'Portfolio',
    wk_heading: 'Projects that leave an impression.',
    wk_sub:     'From brand identity to web design — real challenges, real results.',

    filter_all:      'All',
    filter_brand:    'Branding',
    filter_web:      'Web Design',
    filter_campaign: 'Campaign',

    wk_p1_cat: 'Brand Identity', wk_p1_title: 'Hartmann & Wolf',
    wk_p1_desc: 'Brand relaunch for a Berlin boutique law firm — from traditional to elegantly modern.',

    wk_p2_cat: 'Packaging & Identity', wk_p2_title: 'Velta Foods',
    wk_p2_desc: 'Visual identity and packaging system for a growing organic food start-up from Bavaria.',

    wk_p3_cat: 'Web Design', wk_p3_title: 'Bloom Studio',
    wk_p3_desc: 'Website relaunch for a Berlin yoga studio — serenity meets modern UX.',

    wk_p4_cat: 'Brand Strategy', wk_p4_title: 'Nexora Tech',
    wk_p4_desc: 'Completely new positioning and brand architecture for a B2B SaaS provider.',

    view_case: 'Case Study',

    /* Blog page */
    bl_label:   'Blog',
    bl_heading: 'Thoughts on design and brand.',
    bl_sub:     'Insights, perspectives and findings from our daily work.',

    read_more: 'Read more',
    min_read:  'min read',

    /* Contact page */
    ct_label:   'Contact',
    ct_heading: 'Let\'s talk.',
    ct_sub:     'Have a project? An idea? A challenge? We look forward to hearing from you.',

    ct_info_heading: 'We are here for you.',
    ct_info_desc:    'Whether you have a concrete brief or just want a first conversation — just get in touch.',

    ct_addr_label: 'Address',
    ct_addr_val:   'Rosenthaler Str. 40, 10178 Berlin',
    ct_email_label: 'Email',
    ct_email_val:   'hello@forma-studio.de',
    ct_phone_label: 'Phone',
    ct_phone_val:   '+49 30 12345678',

    ct_form_name:       'Name',
    ct_form_name_ph:    'Your name',
    ct_form_company:    'Company',
    ct_form_company_ph: 'Company name (optional)',
    ct_form_email:      'Email address',
    ct_form_email_ph:   'your@email.com',
    ct_form_service:    'Service needed',
    ct_form_service_0:  'Please select...',
    ct_form_service_1:  'Brand Strategy',
    ct_form_service_2:  'Visual Identity',
    ct_form_service_3:  'Web Design',
    ct_form_service_4:  'Campaign Design',
    ct_form_service_5:  'Motion & Interaction',
    ct_form_service_6:  'I\'m not sure yet',
    ct_form_message:    'Your message',
    ct_form_message_ph: 'Briefly describe your project or question ...',
    ct_form_submit:     'Send message',

    ct_success_title: 'Message received.',
    ct_success_msg:   'Thank you! We typically respond within 24 hours.',
  }
};

/* === BLOG POSTS DATA (used by blog.html) === */
const blogPosts = [
  {
    slug: 'blog-post-1.html',
    visual: 'blog-visual--1',
    categoryDE: 'Branding',
    categoryEN: 'Branding',
    titleDE: 'Die Kraft einer starken visuellen Identität',
    titleEN: 'The Power of a Strong Visual Identity',
    teaserDE: 'Warum konsequentes Branding mehr ist als ein schönes Logo — und wie es das Wachstum eines Unternehmens direkt beeinflusst.',
    teaserEN: 'Why consistent branding is more than a beautiful logo — and how it directly impacts business growth.',
    date: '14. Feb. 2026',
    dateEN: 'Feb 14, 2026',
    readTime: 5,
  },
  {
    slug: 'blog-post-2.html',
    visual: 'blog-visual--2',
    categoryDE: 'Web Design',
    categoryEN: 'Web Design',
    titleDE: 'Warum gutes Webdesign mehr ist als Ästhetik',
    titleEN: 'Why Good Web Design Is More Than Aesthetics',
    teaserDE: 'Conversion, UX und visuelle Kommunikation — wie Design messbare Ergebnisse erzeugt und Vertrauen aufbaut.',
    teaserEN: 'Conversion, UX and visual communication — how design creates measurable results and builds trust.',
    date: '28. Jan. 2026',
    dateEN: 'Jan 28, 2026',
    readTime: 7,
  },
  {
    slug: 'blog-post-3.html',
    visual: 'blog-visual--3',
    categoryDE: 'Strategie',
    categoryEN: 'Strategy',
    titleDE: 'Positionierung: Das Fundament jeder starken Marke',
    titleEN: 'Positioning: The Foundation of Every Strong Brand',
    teaserDE: 'Ohne klare Positionierung bleibt jede Marke austauschbar. Wie du eine Marke entwickelst, die wirklich hält.',
    teaserEN: 'Without clear positioning, every brand remains interchangeable. How to build a brand that truly endures.',
    date: '10. Jan. 2026',
    dateEN: 'Jan 10, 2026',
    readTime: 6,
  },
];

/* === BLOG VISUAL SVGs === */
function getBlogVisualSVG(visual) {
  const bk = `
    <path d="M12 8 L34 8 L34 22" fill="none" stroke="rgba(245,158,11,0.44)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M388 8 L366 8 L366 22" fill="none" stroke="rgba(245,158,11,0.44)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M12 217 L34 217 L34 203" fill="none" stroke="rgba(245,158,11,0.44)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M388 217 L366 217 L366 203" fill="none" stroke="rgba(245,158,11,0.44)" stroke-width="1.5" stroke-linecap="round"/>`;

  if (visual === 'blog-visual--1') {
    return `<svg class="blog-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><pattern id="bvg1" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0 L0 0 L0 28" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/></pattern></defs>
      <rect width="400" height="225" fill="url(#bvg1)"/>
      ${bk}
      <rect class="bv1-outer" x="100" y="56.5" width="200" height="112" rx="2" fill="rgba(245,158,11,0.03)" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <rect class="bv1-mid"   x="130" y="73.5"  width="140" height="78"  rx="2" fill="rgba(245,158,11,0.04)" stroke="rgba(245,158,11,0.2)" stroke-width="1.2"/>
      <rect class="bv1-glow"  x="159" y="89.5"  width="82"  height="46"  rx="2" fill="rgba(245,158,11,0.07)" stroke="rgba(245,158,11,0.45)" stroke-width="1.5"/>
      <circle class="bv1-dot" cx="200" cy="112.5" r="4"   fill="rgba(245,158,11,0.25)" stroke="#F59E0B" stroke-width="1.5"/>
      <circle                  cx="200" cy="112.5" r="1.5" fill="#F59E0B"/>
      <text x="380" y="20" text-anchor="end"    font-family="'Outfit',sans-serif" font-size="7"   fill="rgba(245,158,11,0.28)" letter-spacing="1">01</text>
      <text x="200" y="218" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="6" fill="rgba(255,255,255,0.15)" letter-spacing="6">BRAND IDENTITY</text>
    </svg>`;
  }

  if (visual === 'blog-visual--2') {
    return `<svg class="blog-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><pattern id="bvg2" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0 L0 0 L0 24" fill="none" stroke="rgba(255,255,255,0.04)" stroke-width="1"/></pattern></defs>
      <rect width="400" height="225" fill="url(#bvg2)"/>
      ${bk}
      <rect x="30" y="18" width="340" height="188" rx="4" fill="none" stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
      <rect x="30" y="18" width="340" height="26"  rx="4" fill="rgba(255,255,255,0.04)"/>
      <line x1="30" y1="44" x2="370" y2="44" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <circle cx="47" cy="31" r="4" fill="rgba(255,255,255,0.14)"/>
      <circle cx="61" cy="31" r="4" fill="rgba(255,255,255,0.08)"/>
      <circle cx="75" cy="31" r="4" fill="rgba(255,255,255,0.08)"/>
      <rect x="94" y="24" width="184" height="14" rx="7" fill="rgba(255,255,255,0.06)"/>
      <rect x="46" y="54" width="308" height="10" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect class="bv2-focus" x="46" y="74" width="192" height="88" rx="2" fill="rgba(245,158,11,0.05)" stroke="rgba(245,158,11,0.4)" stroke-width="1.5"/>
      <rect x="60" y="90"  width="110" height="6" rx="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="60" y="104" width="76"  height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="60" y="116" width="92"  height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect x="60" y="128" width="58"  height="4" rx="2" fill="rgba(255,255,255,0.06)"/>
      <rect class="bv2-cursor" x="246" y="88" width="1.5" height="14" rx="1" fill="rgba(245,158,11,0.75)"/>
      <rect x="250" y="74"  width="110" height="42" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="250" y="122" width="110" height="40" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" stroke-width="1"/>
      <rect x="46"  y="172" width="86"  height="20" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <rect x="144" y="172" width="86"  height="20" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <rect x="242" y="172" width="118" height="20" rx="2" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.07)" stroke-width="1"/>
      <text x="380" y="20"  text-anchor="end"    font-family="'Outfit',sans-serif" font-size="7" fill="rgba(245,158,11,0.28)" letter-spacing="1">02</text>
      <text x="200" y="218" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="6" fill="rgba(255,255,255,0.15)" letter-spacing="6">WEB DESIGN</text>
    </svg>`;
  }

  /* blog-visual--3 — Strategie */
  return `<svg class="blog-svg" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs><pattern id="bvg3" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0 L0 0 L0 28" fill="none" stroke="rgba(255,255,255,0.035)" stroke-width="1"/></pattern></defs>
    <rect width="400" height="225" fill="url(#bvg3)"/>
    ${bk}
    <polygon class="bv3-l3" points="74,172 326,172 356,208 44,208"  fill="rgba(245,158,11,0.06)"/>
    <polygon class="bv3-l2" points="111,128 289,128 326,172 74,172" fill="rgba(245,158,11,0.1)"/>
    <polygon class="bv3-l1" points="200,22 289,128 111,128"         fill="rgba(245,158,11,0.18)"/>
    <polygon points="200,22 356,208 44,208" fill="none" stroke="rgba(245,158,11,0.35)" stroke-width="1.5" stroke-linejoin="round"/>
    <line x1="111" y1="128" x2="289" y2="128" stroke="rgba(245,158,11,0.22)" stroke-width="1"/>
    <line x1="74"  y1="172" x2="326" y2="172" stroke="rgba(245,158,11,0.18)" stroke-width="1"/>
    <circle class="bv3-apex" cx="200" cy="22" r="5"   fill="rgba(245,158,11,0.3)" stroke="#F59E0B" stroke-width="1.5"/>
    <circle                   cx="200" cy="22" r="2"   fill="#F59E0B"/>
    <text x="200" y="80"  text-anchor="middle" font-family="'Outfit',sans-serif" font-size="7" fill="rgba(255,255,255,0.22)" letter-spacing="2">VISION</text>
    <text x="200" y="154" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="7" fill="rgba(255,255,255,0.18)" letter-spacing="2">STRATEGIE</text>
    <text x="200" y="194" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="7" fill="rgba(255,255,255,0.14)" letter-spacing="2">EXECUTION</text>
    <text x="380" y="20"  text-anchor="end"    font-family="'Outfit',sans-serif" font-size="7" fill="rgba(245,158,11,0.28)" letter-spacing="1">03</text>
    <text x="200" y="218" text-anchor="middle" font-family="'Outfit',sans-serif" font-size="6" fill="rgba(255,255,255,0.15)" letter-spacing="6">STRATEGIE</text>
  </svg>`;
}

/* === STATE === */
let currentLang  = localStorage.getItem('forma-lang')  || 'de';
let currentTheme = localStorage.getItem('forma-theme') || 'dark';
let menuOpen     = false;

/* === THEME === */
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('forma-theme', theme);
  currentTheme = theme;
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

/* === LANGUAGE / i18n === */
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('forma-lang', lang);
  document.documentElement.lang = lang;

  const dict = i18nData[lang];

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(el => {
    const key = el.getAttribute('data-i18n-aria');
    if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  /* Re-render blog cards if on blog page */
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) renderBlogCards(lang);
}

/* === HEADER INJECTION === */
function injectHeader() {
  const placeholder = document.getElementById('site-header');
  if (!placeholder) return;

  placeholder.innerHTML = `
    <nav class="nav" id="main-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">FORM<span>A</span></a>
        <ul class="nav-links">
          <li><a href="index.html"    data-i18n="nav_home">Home</a></li>
          <li><a href="about.html"    data-i18n="nav_about">Studio</a></li>
          <li><a href="services.html" data-i18n="nav_services">Leistungen</a></li>
          <li><a href="work.html"     data-i18n="nav_work">Projekte</a></li>
          <li><a href="blog.html"     data-i18n="nav_blog">Blog</a></li>
          <li><a href="contact.html"  data-i18n="nav_contact">Kontakt</a></li>
        </ul>
        <div class="nav-controls">
          <div class="lang-toggle">
            <button class="lang-btn" data-lang="de">DE</button>
            <span>/</span>
            <button class="lang-btn" data-lang="en">EN</button>
          </div>
          <button class="theme-btn" aria-label="Theme wechseln">
            <i data-lucide="sun"  class="icon-sun"></i>
            <i data-lucide="moon" class="icon-moon"></i>
          </button>
          <button class="hamburger-btn" aria-label="Menü" id="hamburger-btn">
            <i data-lucide="menu" id="hamburger-icon"></i>
          </button>
        </div>
      </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
      <ul>
        <li><a href="index.html"    data-i18n="nav_home">Home</a></li>
        <li><a href="about.html"    data-i18n="nav_about">Studio</a></li>
        <li><a href="services.html" data-i18n="nav_services">Leistungen</a></li>
        <li><a href="work.html"     data-i18n="nav_work">Projekte</a></li>
        <li><a href="blog.html"     data-i18n="nav_blog">Blog</a></li>
        <li><a href="contact.html"  data-i18n="nav_contact">Kontakt</a></li>
      </ul>
    </div>
  `;
}

/* === FOOTER INJECTION === */
function injectFooter() {
  const placeholder = document.getElementById('site-footer');
  if (!placeholder) return;

  placeholder.innerHTML = `
    <footer class="site-footer">
      <div class="footer-inner">
        <div class="footer-grid">
          <div class="footer-brand">
            <a href="index.html" class="footer-logo">FORM<span style="color:var(--accent)">A</span></a>
            <p class="footer-tagline" data-i18n="footer_tagline">Wir gestalten Marken, die bewegen.</p>
            <div class="footer-social">
              <a href="#" aria-label="Instagram"><i data-lucide="instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i data-lucide="linkedin"></i></a>
              <a href="#" aria-label="Twitter"><i data-lucide="twitter"></i></a>
            </div>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_nav_heading">Navigation</h4>
            <ul>
              <li><a href="index.html"    data-i18n="nav_home">Home</a></li>
              <li><a href="about.html"    data-i18n="nav_about">Studio</a></li>
              <li><a href="services.html" data-i18n="nav_services">Leistungen</a></li>
              <li><a href="work.html"     data-i18n="nav_work">Projekte</a></li>
              <li><a href="blog.html"     data-i18n="nav_blog">Blog</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_sv_heading">Leistungen</h4>
            <ul>
              <li><a href="services.html" data-i18n="footer_sv_1">Brand Strategy</a></li>
              <li><a href="services.html" data-i18n="footer_sv_2">Visual Identity</a></li>
              <li><a href="services.html" data-i18n="footer_sv_3">Web Design</a></li>
              <li><a href="services.html" data-i18n="footer_sv_4">Campaign Design</a></li>
              <li><a href="services.html" data-i18n="footer_sv_5">Motion & Interaction</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4 data-i18n="footer_contact_heading">Kontakt</h4>
            <ul>
              <li><a href="mailto:hello@forma-studio.de">hello@forma-studio.de</a></li>
              <li><a href="tel:+493012345678">+49 30 12345678</a></li>
              <li><a href="contact.html" data-i18n="nav_contact">Kontakt</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <p class="footer-copy" data-i18n="footer_rights">© 2026 FORMA Studio. Alle Rechte vorbehalten.</p>
          <div class="footer-bottom-links">
            <a href="#" data-i18n="footer_imprint">Impressum</a>
            <a href="#" data-i18n="footer_privacy">Datenschutz</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* === ACTIVE NAV LINK === */
function markActiveNav() {
  const path     = window.location.pathname;
  const filename = path.split('/').pop() || 'index.html';

  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
    const href = link.getAttribute('href');
    const isHome = (filename === '' || filename === 'index.html') && href === 'index.html';
    link.classList.toggle('active', href === filename || isHome);
  });
}

/* === HAMBURGER MENU === */
function setupHamburger() {
  const btn  = document.getElementById('hamburger-btn');
  const menu = document.getElementById('mobile-menu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menuOpen = !menuOpen;
    menu.classList.toggle('open', menuOpen);
    const icon = btn.querySelector('i');
    icon.setAttribute('data-lucide', menuOpen ? 'x' : 'menu');
    lucide.createIcons();
  });

  /* Close on link click */
  menu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      menuOpen = false;
      menu.classList.remove('open');
      const icon = btn.querySelector('i');
      icon.setAttribute('data-lucide', 'menu');
      lucide.createIcons();
    });
  });
}

/* === HEADER SCROLL EFFECT === */
function setupHeaderScroll() {
  const nav = document.getElementById('main-nav');
  if (!nav) return;

  const onScroll = () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* === SCROLL REVEAL === */
function setupScrollReveal() {
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
    observer.observe(el);
  });
}

/* === EVENT LISTENERS === */
function setupEventListeners() {
  /* Theme toggle */
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });

  /* Language toggle */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });
}

/* === WORK PAGE FILTER === */
function setupWorkFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards      = document.querySelectorAll('.project-card[data-category]');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.category === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* === BLOG CARD RENDERER === */
function renderBlogCards(lang) {
  const grid = document.getElementById('blog-grid');
  if (!grid) return;

  const l = lang || currentLang;
  grid.innerHTML = blogPosts.map(post => {
    const title    = l === 'de' ? post.titleDE    : post.titleEN;
    const teaser   = l === 'de' ? post.teaserDE   : post.teaserEN;
    const category = l === 'de' ? post.categoryDE : post.categoryEN;
    const date     = l === 'de' ? post.date        : post.dateEN;
    const readMore = i18nData[l].read_more;
    const minRead  = i18nData[l].min_read;

    return `
      <article class="blog-card reveal">
        <a href="${post.slug}">
          <div class="blog-card-image">
            <div class="blog-visual ${post.visual}">${getBlogVisualSVG(post.visual)}</div>
          </div>
        </a>
        <div class="blog-card-body">
          <div class="blog-meta">
            <span class="blog-category">${category}</span>
            <span class="blog-date">
              <i data-lucide="calendar"></i>
              ${date}
            </span>
            <span class="blog-date">
              <i data-lucide="clock"></i>
              ${post.readTime} ${minRead}
            </span>
          </div>
          <h3><a href="${post.slug}">${title}</a></h3>
          <p>${teaser}</p>
          <a href="${post.slug}" class="blog-read-more">
            ${readMore} <i data-lucide="arrow-right"></i>
          </a>
        </div>
      </article>
    `;
  }).join('');

  lucide.createIcons();
  setupScrollReveal();
}

/* === FORMSPREE HANDLER === */
function setupContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn     = form.querySelector('.form-submit');
    const success = document.getElementById('form-success');

    btn.textContent = '...';
    btn.disabled    = true;

    try {
      const response = await fetch(form.action, {
        method:  'POST',
        body:    new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        form.style.display    = 'none';
        if (success) success.classList.add('visible');
      } else {
        btn.textContent = currentLang === 'de' ? 'Fehler — bitte erneut versuchen.' : 'Error — please try again.';
        btn.disabled    = false;
      }
    } catch {
      btn.textContent = currentLang === 'de' ? 'Fehler — bitte erneut versuchen.' : 'Error — please try again.';
      btn.disabled    = false;
    }
  });
}

/* === INIT === */
document.addEventListener('DOMContentLoaded', () => {
  injectHeader();
  injectFooter();

  /* Re-create Lucide icons after injection */
  if (typeof lucide !== 'undefined') lucide.createIcons();

  applyLanguage(currentLang);
  setupEventListeners();
  setupHamburger();
  setupHeaderScroll();
  markActiveNav();
  setupScrollReveal();
  setupWorkFilter();
  setupContactForm();

  /* Blog page */
  const blogGrid = document.getElementById('blog-grid');
  if (blogGrid) renderBlogCards(currentLang);
});
