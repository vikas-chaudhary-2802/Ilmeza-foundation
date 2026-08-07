/**
 * Ilmeza Foundation — Knowledge Hub articles.
 *
 * HOW TO ADD A NEW ARTICLE:
 *   Add a new object to the `articles` array below. Order does not matter —
 *   articles are automatically sorted newest-first by `date`, so the most
 *   recent article always appears at the top of the Knowledge Hub.
 *
 * Fields:
 *   slug      unique url-friendly id (used in /knowledge-hub/<slug>)
 *   title     headline
 *   category  topic label (also used as a filter chip)
 *   date      ISO date "YYYY-MM-DD"
 *   author    byline
 *   readTime  e.g. "5 min read"
 *   cover     image path from /public
 *   excerpt   1–2 sentence summary shown on the card
 *   content   array of blocks (see ContentBlock type)
 */

export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] }
  | { type: "stats"; items: { value: string; label: string }[] };

export type Article = {
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  /** Optional LinkedIn profile URL for the writer. Shown as a link in the byline. */
  authorLinkedin?: string;
  /** Optional short role/affiliation shown under the writer's name. */
  authorRole?: string;
  readTime: string;
  cover: string;
  excerpt: string;
  content: ContentBlock[];
};

const articles: Article[] = [
  {
    slug: "breast-cancer-awareness-saving-lives",
    title: "Breast Cancer: Awareness is the First Step Towards Saving Lives",
    category: "Health",
    date: "2026-08-07",
    author: "Dr. Anita Singh",
    authorRole: "Healthcare Professional & Contributor, Ilmeza Foundation",
    authorLinkedin: "https://www.linkedin.com/in/dr-anita-rani-555247363/",
    readTime: "6 min read",
    cover: "/images/gallery/health-awareness.jpg",
    excerpt:
      "Breast cancer is now the most commonly diagnosed cancer among women worldwide. Early awareness and timely diagnosis save lives — here is why breaking silence, knowing warning signs, and early action are crucial.",
    content: [
      { type: "h2", text: "Introduction" },
      {
        type: "p",
        text:
          "Breast cancer is no longer a disease that affects only a few families — it has become one of the most significant public health challenges of our time. Across the world, millions of women are diagnosed every year, and India is witnessing a steady rise in cases. Yet, despite advances in medical science, one factor continues to determine whether a woman survives breast cancer: early awareness and timely diagnosis.",
      },
      {
        type: "p",
        text:
          "The encouraging news is that breast cancer, when detected in its early stages, is highly treatable. Unfortunately, many women continue to seek medical attention only after the disease has progressed, often because of fear, social stigma, misinformation, or lack of awareness.",
      },
      {
        type: "quote",
        text:
          "Awareness is not merely about sharing information — it is about empowering women to listen to their bodies, seek help without hesitation, and understand that early action can save lives.",
      },
      { type: "h2", text: "The Growing Burden of Breast Cancer" },
      {
        type: "p",
        text:
          "Breast cancer is now the most commonly diagnosed cancer among women worldwide. According to the World Health Organization (WHO), an estimated 2.4 million women were diagnosed with breast cancer globally in 2024, and approximately 694,000 women lost their lives to the disease.",
      },
      {
        type: "p",
        text:
          "India is experiencing a similar trend. According to the Global Cancer Observatory (GLOBOCAN), breast cancer is the most common cancer among Indian women, with an estimated 192,000 new cases reported in 2022, accounting for nearly one in every four cancers diagnosed among women in the country. It also remains one of the leading causes of cancer-related deaths among Indian women.",
      },
      {
        type: "stats",
        items: [
          { value: "2.4M", label: "Global diagnoses annually (WHO 2024)" },
          { value: "1,92,000", label: "New cases in India per year (GLOBOCAN 2022)" },
          { value: "1 in 4", label: "Cancers diagnosed in Indian women" },
        ],
      },
      {
        type: "p",
        text:
          "These numbers are not merely statistics — they represent mothers, daughters, sisters, colleagues, and friends whose lives are profoundly affected by the disease.",
      },
      { type: "h2", text: "The Biggest Challenge Is Not the Disease — It Is Late Detection" },
      {
        type: "p",
        text:
          "One of the greatest challenges in India is that many women are diagnosed at advanced stages of breast cancer. Unlike many illnesses, breast cancer often begins without pain. A painless lump, subtle skin changes, nipple discharge, or changes in breast shape may be ignored for weeks or even months. Social hesitation, fear of diagnosis, financial concerns, and misconceptions often delay medical consultation, reducing the chances of successful treatment.",
      },
      {
        type: "quote",
        text:
          "Early detection significantly improves survival rates and often allows for less aggressive treatment. Awareness, therefore, becomes as important as treatment itself.",
      },
      { type: "h2", text: "Recognizing the Early Warning Signs" },
      {
        type: "p",
        text:
          "Every woman should be familiar with the normal appearance and feel of her breasts. Seek medical advice if you notice:",
      },
      {
        type: "list",
        items: [
          "A lump or thickening in the breast or underarm",
          "Change in breast size or shape",
          "Skin dimpling or puckering",
          "Redness or persistent swelling",
          "Nipple inversion or unusual discharge",
          "Persistent pain in one area of the breast",
        ],
      },
      {
        type: "p",
        text:
          "Most breast lumps are not cancer, but every new lump should be evaluated by a qualified healthcare professional.",
      },
      { type: "h2", text: "Who Is at Risk?" },
      {
        type: "p",
        text:
          "Although breast cancer is more common with increasing age, approximately 80% of cases occur in women without any specific risk factors other than being female and growing older. Some factors that may increase risk include:",
      },
      {
        type: "list",
        items: [
          "Family history of breast or ovarian cancer",
          "Obesity and physical inactivity",
          "Alcohol consumption",
          "Late pregnancy or having no children",
          "Hormonal factors and increasing age",
        ],
      },
      {
        type: "p",
        text:
          "However, it is equally important to remember that having no risk factors does not mean having no risk.",
      },
      { type: "h2", text: "Awareness Saves Lives" },
      {
        type: "p",
        text:
          "Awareness is the most affordable and effective tool available to every community. Women should:",
      },
      {
        type: "list",
        items: [
          "Become familiar with their breasts and report any unusual changes promptly.",
          "Undergo regular clinical breast examinations, especially after the age of 30, as advised by healthcare providers.",
          "Discuss mammography with their doctor based on age, family history, and personal risk.",
          "Encourage open conversations about breast health within families and communities.",
        ],
      },
      {
        type: "quote",
        text:
          "Breaking the silence around breast health is one of the most powerful forms of prevention.",
      },
      { type: "h2", text: "Our Experience at Ilmeza Foundation" },
      {
        type: "p",
        text:
          "At Ilmeza Foundation, breast cancer awareness is more than a campaign — it is a commitment to protecting women's health through education and community engagement. Over the past several years, our team has organized awareness programmes, community interactions, and health initiatives that have reached women from diverse backgrounds, including those in underserved and rural communities.",
      },
      {
        type: "p",
        text:
          "During these programmes, we observed that many participants had never received reliable information about breast cancer. Several women believed that breast cancer always causes pain, while others felt that discussing breast health was socially uncomfortable. These conversations reinforced a crucial lesson: lack of awareness remains one of the greatest barriers to early diagnosis.",
      },
      {
        type: "p",
        text:
          "Our awareness sessions focus not only on identifying symptoms but also on reducing stigma, encouraging timely medical consultation, promoting healthy lifestyles, and emphasizing that early detection can save lives.",
      },
      { type: "h2", text: "Breast Cancer Is Not Only a Medical Issue" },
      {
        type: "p",
        text:
          "Breast cancer affects families emotionally, socially, and economically. When a woman becomes ill, the impact extends beyond the individual. Families experience emotional distress, financial hardship, interruptions in children's education, and loss of household income. Supporting women through awareness, timely diagnosis, compassionate care, and community support therefore becomes an investment in stronger families and healthier communities.",
      },
      { type: "h2", text: "The Way Forward & A Message to Every Woman" },
      {
        type: "p",
        text:
          "Reducing the burden of breast cancer requires collective action. Healthcare professionals must continue promoting evidence-based screening and treatment. Governments must strengthen access to quality cancer care. Educational institutions should integrate health awareness into learning. Community organizations must continue reaching women who have limited access to reliable health information.",
      },
      {
        type: "quote",
        text:
          "Your health matters. Do not ignore changes in your body. Do not allow fear to delay consultation. Do not let social stigma silence your concerns.",
      },
      {
        type: "p",
        text:
          "Breast cancer is not always preventable, but its impact can be dramatically reduced through awareness, timely diagnosis, and appropriate treatment. Together, let us replace fear with knowledge, silence with conversation, and delay with early action. Because when awareness grows, hope grows — and with hope comes the possibility of saving countless lives.",
      },
    ],
  },
  {
    slug: "knowledge-awareness-empowered-india",
    title: "Knowledge Alone Cannot Change Society — Awareness Can",
    category: "Development",
    date: "2026-08-07",
    author: "Shamshad Alam",
    authorRole: "Contributor, Ilmeza Foundation",
    authorLinkedin: "https://www.linkedin.com/in/shamshad-alam-791b9067/",
    readTime: "8 min read",
    cover: "/images/gallery/portrait-1.jpg",
    excerpt:
      "Why education, health, environment, and legal awareness must work together to build an empowered India — because knowledge without awareness rarely translates into action.",
    content: [
      { type: "h2", text: "Executive Summary" },
      { type: "p", text: "India stands at a defining moment in its development journey. As the world's most populous nation and one of its fastest-growing economies, India has made remarkable progress in expanding access to education, improving healthcare, strengthening sanitation infrastructure, and reducing poverty. Millions of children now attend school, immunization coverage has increased significantly, maternal and child mortality have declined, and access to drinking water and sanitation has improved over the past two decades." },
      { type: "p", text: "Yet, despite these achievements, many of the country's most persistent challenges cannot be solved by infrastructure, policies, or economic growth alone. A school cannot transform a child's future if parents are unaware of the importance of education. A hospital cannot prevent disease if communities lack basic health awareness. Environmental policies cannot succeed unless citizens adopt sustainable habits. Laws cannot protect people who are unaware of their rights or unable to access justice." },
      { type: "quote", text: "Knowledge without awareness rarely translates into action." },
      { type: "p", text: "Awareness is the bridge between information and transformation. It shapes attitudes, influences behaviour, encourages responsible citizenship, and empowers individuals to make informed decisions that improve not only their own lives but also the well-being of their families and communities. Development is therefore not merely about constructing schools, hospitals, roads, or sanitation systems — it is equally about nurturing informed citizens who understand how to use these opportunities effectively." },
      { type: "p", text: "This article argues that education, health, environmental responsibility, and legal awareness are not independent sectors but deeply interconnected pillars of sustainable development. Weakness in one area inevitably affects progress in the others. Drawing upon national and international evidence, government reports, and Sustainable Development Goal (SDG) indicators, it demonstrates why awareness must become a central pillar of India's development strategy — and highlights the role of civil society, institutions, governments, researchers, and citizens in creating a culture of informed participation." },
      { type: "quote", text: "An empowered society is not built merely by providing opportunities — it is built by ensuring people understand, value, and utilize those opportunities." },
      { type: "h2", text: "Introduction" },
      { type: "p", text: "Throughout history, nations have been transformed not only by economic prosperity but by the awareness of their people. Japan's post-war reconstruction, South Korea's educational revolution, Singapore's public health transformation, and the Nordic countries' emphasis on civic responsibility all demonstrate a common lesson: sustainable development begins when citizens are informed, engaged, and empowered." },
      { type: "p", text: "India possesses immense potential. With a population exceeding 1.46 billion people, the country enjoys one of the world's youngest populations, representing an extraordinary demographic opportunity. If equipped with the right knowledge, skills, awareness, and values, this generation can become one of the greatest drivers of innovation, economic growth, and social progress in human history." },
      { type: "p", text: "The country has already achieved several notable milestones. Primary education completion has reached approximately 94%, childhood immunization coverage continues to improve, access to basic drinking water now reaches the vast majority of households, and sanitation coverage has expanded dramatically over the last decade. These accomplishments reflect the combined efforts of governments, institutions, communities, and development partners." },
      { type: "p", text: "However, statistics also reveal another reality. Millions of children still experience learning gaps despite attending school. Malnutrition continues to affect a significant proportion of young children. Lifestyle diseases and preventable illnesses are increasing. Environmental degradation threatens public health and livelihoods. Many citizens remain unaware of legal rights, government welfare schemes, and mechanisms for seeking justice. These challenges are not solely the result of limited resources — they are often consequences of limited awareness, misinformation, and inadequate community engagement." },
      { type: "h2", text: "When Services Exist but Awareness Doesn't" },
      { type: "p", text: "Consider a few familiar examples:" },
      { type: "list", items: [
        "A child may receive free education but leave school because the family does not recognize its long-term value.",
        "A pregnant woman may live near a healthcare facility yet delay seeking medical care because of social myths or misinformation.",
        "A village may have sanitation infrastructure but continue unsafe hygiene practices that compromise public health.",
        "A worker may experience exploitation but remain silent simply because they do not know the legal protections available to them.",
      ] },
      { type: "quote", text: "In each of these situations, the challenge is not merely the absence of services — it is the absence of awareness." },
      { type: "p", text: "This distinction is fundamental. Knowledge refers to the availability of information; awareness is the understanding that inspires informed action. The success of any public policy ultimately depends on how effectively people understand, trust, and participate in it." },
      { type: "h2", text: "Why Integrated Development Matters" },
      { type: "p", text: "This is why the United Nations Sustainable Development Goals (SDGs) emphasize integrated development. Progress in education supports better health outcomes. Better health enhances learning and productivity. Environmental sustainability protects livelihoods and reduces disease burdens. Legal awareness strengthens inclusion, accountability, and equitable access to opportunities. None of these goals can be achieved in isolation." },
      { type: "p", text: "For India to realize the vision of Viksit Bharat 2047, development must move beyond the expansion of infrastructure and public services. The next stage of national progress requires investing equally in human awareness, civic responsibility, critical thinking, and community participation." },
      { type: "p", text: "This is where civil society assumes a transformative role. Non-profit organizations, educational institutions, researchers, healthcare professionals, environmental advocates, legal practitioners, and responsible citizens together create the social capital that bridges the gap between policy and people." },
      { type: "p", text: "At Ilmeza Foundation, this philosophy guides our work. Our initiatives in Education, Health, Environment, and Legal Awareness are founded on a simple belief: lasting social change occurs when knowledge is transformed into awareness, awareness into action, and action into sustainable impact." },
      { type: "quote", text: "Education is the most powerful weapon which you can use to change the world. — Nelson Mandela" },
      { type: "p", text: "Yet education achieves its highest purpose only when it nurtures awareness — because knowledge informs the mind, but awareness transforms society." },
      { type: "p", text: "Data references: UNICEF Data." },
    ],
  },
  {
    slug: "why-legal-awareness-matters",
    title: "Justice Before the Courtroom: Why Legal Awareness Matters",
    category: "Legal Awareness",
    date: "2026-08-06",
    author: "Adv. Nupur Shastri",
    authorRole: "Advocate · Legal Awareness Contributor, Ilmeza Foundation",
    authorLinkedin: "https://www.linkedin.com/in/adv-nupur-shastri-50a55b310/",
    readTime: "5 min read",
    cover: "/images/gallery/community-meet.jpg",
    excerpt:
      "Information, understanding, better decisions — most people face legal trouble not because the law failed them, but because they never knew the protection it already offered.",
    content: [
      {
        type: "p",
        text:
          "While a large section of India's population is familiar with the concept of a First Information Report (FIR) and understands that it can be filed to report a cognizable offence, awareness of the equally important concept of a Zero FIR remains significantly limited. Many citizens are unaware that they can report certain crimes at any police station, regardless of where the incident occurred, and that the complaint must then be transferred to the appropriate jurisdiction.",
      },
      {
        type: "p",
        text:
          "This gap in legal awareness often leads to unnecessary delays in reporting crimes and hesitation in seeking justice. Strengthening public understanding of legal rights and procedures — such as the provision of Zero FIR — is therefore essential.",
      },
      {
        type: "quote",
        text:
          "Every day, countless people face legal problems not because the law failed them, but because they were unaware of the protection the law already provided.",
      },
      {
        type: "h2",
        text: "The Scale of the Need",
      },
      {
        type: "p",
        text:
          "Hundreds of thousands of legal literacy programmes are organized across India every year — a clear signal that legal awareness is treated as a major public need.",
      },
      {
        type: "stats",
        items: [
          { value: "3,46,506", label: "Legal literacy camps conducted between 2012 and 2016" },
          { value: "~4,91,990", label: "Legal awareness programmes organized in FY 2025–26" },
        ],
      },
      {
        type: "p",
        text:
          "Such large-scale outreach indicates that legal awareness is considered a major public priority. And in a population this vast, the need for awareness extends beyond the law alone — into health, finance, and technology as well.",
      },
      {
        type: "h2",
        text: "Why Awareness Matters",
      },
      {
        type: "p",
        text:
          "If the fundamental question is why awareness matters, the answer is this: the purpose of spreading awareness is not simply to give information — it is to help people make better decisions before they face problems.",
      },
      {
        type: "p",
        text:
          "A person cannot protect a right they do not know they have. Most problems do not arise because people intentionally make poor choices; they arise because people are unaware of the consequences of their actions. A consumer who understands their rights is less likely to be deceived by unfair practices. A citizen who recognizes online fraud is less likely to become a victim. In each case, awareness prevents harm before it occurs.",
      },
      {
        type: "p",
        text:
          "Legal awareness is the understanding of basic rights, duties, and the remedies available under the law. It strengthens society as a whole: an informed public is less vulnerable to exploitation, discrimination, and abuse. The Constitution of India guarantees numerous rights and freedoms, but these constitutional promises can only be realized when citizens understand them. Awareness enables individuals to participate meaningfully in democratic institutions, demand accountability, and engage with public authorities through lawful means.",
      },
      {
        type: "h2",
        text: "A Public-Policy Priority",
      },
      {
        type: "p",
        text:
          "Legal awareness has become a significant public-policy objective in India. Institutions such as the National Legal Services Authority and the State Legal Services Authorities regularly organize legal literacy camps, awareness programmes, and free legal aid initiatives to improve public understanding of the law. These efforts reflect an important principle: access to justice begins with access to legal knowledge.",
      },
      {
        type: "p",
        text:
          "Understanding issues such as data privacy, cyber fraud, and digital evidence is no longer optional. Legal awareness must evolve alongside technological progress to ensure that citizens remain protected in an increasingly digital society.",
      },
      {
        type: "p",
        text:
          "Simplifying legal concepts, communicating them in accessible language, and making legal education available beyond the courtroom and the classroom can significantly reduce the gap between the law and the people it is intended to serve. A society in which people understand the law is more likely to resolve disputes peacefully and participate meaningfully in the democratic process.",
      },
      {
        type: "quote",
        text:
          "Justice does not begin in a courtroom; it begins when people understand the law before they need it.",
      },
      {
        type: "p",
        text:
          "Ultimately, legal awareness is not only about knowing the law. It is about protecting one's dignity, exercising one's rights responsibly, and making informed decisions — long before a problem ever reaches a court.",
      },
    ],
  },
];

/** All articles, newest first. */
export const allArticles: Article[] = [...articles].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

/** Unique category list for filter chips (in first-seen order of newest-first list). */
export const articleCategories: string[] = Array.from(
  new Set(allArticles.map((a) => a.category))
);

export function getArticle(slug: string): Article | undefined {
  return allArticles.find((a) => a.slug === slug);
}

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
