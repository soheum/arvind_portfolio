// CV content shown as text in the CV pop-up (Home.jsx > CVModal).
// Keep this in step with the downloadable PDF at public/assets/Arvind-Sushil-CV.pdf.
export const cv = {
  name: 'Arvind Sushil',
  summary: [
    'Senior Design Lead at British American Tobacco, developing the next category of reduced-risk products.',
    'Senior industrial and experience designer with 10 years of experience designing consumer products.',
    'I shape product portfolios and bring category-defining ideas to market, challenging convention to give brands a clear identity that connects with people.',
    'My work is considerate and delightful to use, showcases build quality and craftsmanship, and above all has a timeless character.',
  ],
  links: [
    { label: 'arvindsushil.com', href: 'https://arvindsushil.com' },
    { label: 'arvindksushil@gmail.com', href: 'mailto:arvindksushil@gmail.com' },
  ],
  experience: [
    {
      role: 'Senior Design Lead',
      meta: 'BAT · Velo, Modern Oral Platform · London, UK · Aug ’25 – Present',
      summary: 'Design lead for Velo experiences across packaging, accessories and brand partnerships.',
      points: [
        'Defined the North Star roadmap for next-gen flagship packaging',
        'Designed limited-edition accessories for McLaren and Tomorrowland',
        'Set design guardrails for child-resistant packaging',
      ],
    },
    {
      role: 'Senior Industrial Designer',
      meta: 'BAT · GLO, Inhalation Platform · London, UK · Jun – Aug ’22',
      summary: 'Founding member of the design team, building GLO’s ID, CMF and UX standards from the ground up, working closely with R&D, marketing and consumer research.',
      points: [
        'Defined the Horizon 1–3 portfolio roadmap, from tactical near-term launches to the long-term North Star',
        'Established the physical architecture and interactions for the premium range',
        'Developed a COGS-optimisation strategy for the core product range',
        'Set the visual design language and design DNA for the first-generation portfolio',
        'Developed the colour, material and finish strategy across the platform',
      ],
    },
    {
      role: 'Industrial Designer',
      meta: 'Samsung Electronics · Delhi, India · Mar ’15 – Jul ’20',
      summary: 'Industrial designer in Samsung’s Delhi design team, creating digital appliances for Southwest Asia (SWA).',
      points: [
        'Design for localization: Adapted home appliances to local needs and tastes across the SWA region',
        'Advanced concepts: Developed hero concepts for advanced appliance discovery, from research through to strategy',
        'Design research: Conducted socio-cultural, visual design language, and lifestyle research to inform annual product direction',
      ],
    },
  ],
  education: [
    { school: 'Umeå Institute of Design', detail: 'Master’s degree, Advanced Product Design · Umeå, Sweden · Jun ’20 – ’22' },
    { school: 'Symbiosis Institute of Design', detail: 'Bachelor Degree, Industrial Design, India 2010–14' },
  ],
};
