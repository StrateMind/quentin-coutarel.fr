/* Contenu commun aux trois portfolios de Quentin Coutarel.
   Une seule source : les trois pages (lumière, notes de version, réseau) lisent ce fichier.
   Étiquettes : b = business, p = projet, d = produit, g = direction et croissance. */
window.CV = {
  person: {
    name: "Quentin Coutarel",
    first: "Quentin",
    last: "Coutarel",
    initials: "QC",
    city: "Rabastens (81)",
    email: "q.coutarel@gmail.com",
    site: "https://stratemind.fr",
    siteLabel: "stratemind.fr",
    base: "Product Owner certifié, fondateur du studio Stratemind",
    edition: "novembre 2026"
  },

  /* Les adresses des pages, pour qu'elles se citent entre elles.
     Depuis le 09/11/2026, les trois pages publiques sont sur quentin-coutarel.fr (voir site.js) ;
     les autres restent des pages privées, et site.js retire leurs liens de la copie publiée. */
  links: {
    reseau: "https://quentin-coutarel.fr/",
    lumiere: "https://quentin-coutarel.fr/lumiere/",
    /* Le CV classique, seul lien de pied de page des pages réseau et lumière (décision du 09/11/2026). */
    orbite: "https://quentin-coutarel.fr/cv/",
  },

  /* Les cinq lectures demandées, puis trois lectures bonus (mélanges de deux rôles). */
  lenses: {
    business: {
      id: "business", order: 1, title: "Business Developer", short: "Business", match: "b",
      pitch: "Je transforme un marché en rendez-vous, puis en chiffre d'affaires.",
      summary: "Depuis 2008, le terrain commercial : la vente, la banque et les moyens de paiement, le marketing opérationnel, puis la direction d'une activité qui traitait 150 appels par jour pour 2 M€ de chiffre d'affaires annuel. Aujourd'hui, je conçois les outils commerciaux de mon studio : trouver les prospects, auditer leur site, bâtir des argumentaires fondés sur leur situation réelle, et suivre chaque affaire jusqu'au paiement.",
      kpis: [["2 M€", "de chiffre d'affaires annuel sur l'activité que je pilotais"], ["150", "appels entrants traités chaque jour"], ["10", "commerciaux coachés"]],
      skills: ["Prospection et qualification", "Relation client et partenaires", "Marketing opérationnel", "Banque et paiement (IOBSP)", "Argumentaires et offres", "Pilotage d'équipes commerciales", "Prospection conforme au RGPD"],
      projects: ["scaleupizer", "guide", "devis", "webizy", "cube", "fiatlux", "leadfactory", "adminizy"],
      seek: "Un poste de Business Developer dans une entreprise qui vend du logiciel, du service ou du conseil, où l'on attend du commercial qu'il comprenne le produit qu'il vend."
    },
    projet: {
      id: "projet", order: 2, title: "Chef de projet", short: "Projet", match: "p",
      pitch: "Je tiens les délais, les équipes et la parole donnée.",
      summary: "Six ans à coordonner des équipes de développement et des équipes commerciales, puis le système d'information et la communication web d'un réseau d'une centaine de franchisés. Je planifie selon les priorités, je découpe en tâches datées, je tranche seul ou par consensus, et j'écris ce qui a été décidé pour que chacun avance avec la même information. Au studio Stratemind, je mène une vingtaine de projets de front depuis un poste de pilotage que j'ai conçu pour ça.",
      kpis: [["100", "franchisés dont je gérais le SI et la communication web"], ["15", "personnes coachées : 5 développeurs, 10 commerciaux"], ["≈ 20", "projets menés de front au studio Stratemind"]],
      skills: ["Agile et Scrum", "Planification et priorisation", "Coordination d'équipes de développement", "Registres de décisions", "Recrutement et formation", "Documentation et transmission", "Gestion des ressources humaines"],
      projects: ["stratedeck", "compte", "guide", "espace", "cube", "webizy", "devis", "arcade"],
      seek: "Un poste de Chef de projet (web, digital ou SI) où il faut faire travailler ensemble des métiers, des développeurs et des clients."
    },
    produit: {
      id: "produit", order: 3, title: "Chef de produit", short: "Produit", match: "d",
      pitch: "Je pars du terrain, je tranche, je mesure.",
      summary: "Product Owner certifié (icPO) et formé à la psychologie, je commence par comprendre les gens qui utiliseront le produit. Chez Mtarget, j'ai fait évoluer l'existant et lancé de nouveaux outils internes et de nouvelles plateformes de distribution, à partir des retours du terrain. Au studio Stratemind, je conçois une gamme complète, créer son site, le recevoir clé en main, le faire vivre, et je règle chaque mécanique sur des mesures avant de la livrer.",
      kpis: [["icPO", "Product Owner certifié, Scrum"], ["3", "produits qui forment une gamme : Cube, Webizy, Adminizy"], ["23 → 3 %", "de faillites chez les débutants de Factio, après un réglage mesuré"]],
      skills: ["Recueil des besoins et retours terrain", "Backlog et user stories", "Référentiels et process métier", "UX et parcours", "Prototypage rapide", "Mesure et équilibrage", "Rédaction de spécifications"],
      projects: ["cube", "webizy", "adminizy", "guide", "scaleupizer", "arcade", "ardoise", "dimanche"],
      seek: "Un poste de Chef de produit ou de Product Owner, au contact des utilisateurs, avec une équipe qui livre."
    },
    builder: {
      id: "builder", order: 4, title: "Product Builder", short: "Builder", match: "bpd", combined: true,
      pitch: "Je trouve le client, je cadre le projet, je fais naître le produit. Puis je recommence.",
      summary: "Mon parcours a suivi l'ordre dans lequel un produit se construit. Comprendre les gens : une licence de psychologie. Leur vendre : le commerce, la banque, le marketing. Organiser ceux qui fabriquent : chef de projet pendant sept ans. Décider de ce qu'on fabrique : Product Owner. Le studio Stratemind réunit les trois métiers : des produits en ligne, l'outil commercial qui leur trouve des clients et le poste de pilotage qui les fait avancer.",
      kpis: [["2 M€", "de chiffre d'affaires annuel piloté"], ["100", "franchisés équipés en SI et en web"], ["16", "réalisations présentées ici, du prototype au service en ligne"]],
      skills: ["Vente et relation client", "Agile et Scrum", "Product ownership", "Coordination d'équipes", "UX et parcours", "Prototypage rapide", "Mesure"],
      projects: ["scaleupizer", "cube", "stratedeck", "guide", "webizy", "adminizy", "compte", "arcade", "devis", "espace"],
      seek: "Un poste où vendre, organiser et concevoir ne sont pas trois services séparés : produit, projet ou business, dans une équipe qui construit."
    },
    growth: {
      id: "growth", order: 5, title: "Head of Product & Growth", short: "Growth", match: "g", combined: true,
      pitch: "Je dirige des équipes qui font un produit, et je relie ce produit à ses clients.",
      summary: "J'encadre, je recrute et je forme depuis 2008 : une équipe en cabinet, puis quinze personnes entre développement et vente, puis le service web d'un réseau de franchisés. Côté croissance, j'ai piloté une activité de 2 M€ de chiffre d'affaires annuel, et au studio Stratemind j'ai conçu toute la boucle : un guide qui oriente le visiteur en trois questions, un outil de prospection qui alimente la gamme, une offre gratuite qui ouvre sur l'offre payante. Ce qui ne se mesure pas ne s'améliore pas.",
      kpis: [["2008", "première équipe encadrée, recrutée et formée"], ["2 M€", "de chiffre d'affaires annuel piloté"], ["1 boucle", "attirer, orienter, convertir, fidéliser"]],
      skills: ["Direction d'équipes", "Recrutement et formation", "Stratégie produit", "Acquisition et conversion", "Offres et prix", "Pilotage par la mesure", "Partenariats"],
      projects: ["guide", "scaleupizer", "stratedeck", "webizy", "adminizy", "cube", "devis", "compte"],
      seek: "Un poste de direction produit et croissance, où il faut faire grandir une équipe et un chiffre d'affaires en même temps."
    },
    /* Lectures bonus : deux rôles mélangés. */
    client: {
      id: "client", order: 6, title: "Chef de projet client", short: "Client", match: "bp", bonus: true,
      pitch: "Je tiens la relation et je tiens le planning.",
      summary: "Le client final, les partenaires, les délais et les équipes : chez Mtarget comme chez 1984 Agency, j'étais celui qui fait le lien entre ce qui a été vendu et ce qui est livré.",
      kpis: [["100", "franchisés suivis"], ["2 M€", "de chiffre d'affaires annuel"], ["15", "personnes coachées"]],
      skills: ["Relation client et partenaires", "Planification et priorisation", "Coordination d'équipes de développement", "Documentation et transmission"],
      projects: ["devis", "espace", "cube", "webizy", "stratedeck"],
      seek: "Un poste de Chef de projet client ou de Customer Success."
    },
    po: {
      id: "po", order: 7, title: "Product Owner", short: "PO", match: "pd", bonus: true,
      pitch: "Mon titre chez Mtarget, et ma certification.",
      summary: "Entre le métier et les développeurs : un backlog clair, des référentiels écrits, une coordination quotidienne et des améliorations tirées du terrain. Certifié icPO depuis 2020.",
      kpis: [["icPO", "certifié depuis 2020"], ["17 mois", "Product Owner chez Mtarget"], ["≈ 20", "projets pilotés au studio"]],
      skills: ["Product ownership", "Agile et Scrum", "Backlog et user stories", "Référentiels et process métier"],
      projects: ["stratedeck", "cube", "compte", "arcade", "espace"],
      seek: "Un poste de Product Owner dans une équipe agile."
    },
    marketing: {
      id: "marketing", order: 8, title: "Product Marketing", short: "Marketing", match: "bd", bonus: true,
      pitch: "Je sais ce que fait le produit, et comment le dire à qui l'achète.",
      summary: "Le marketing opérationnel des Cirques Medrano, la pertinence des résultats de Google, puis au studio une page d'accueil qui oriente en trois questions et des argumentaires tirés de l'audit de chaque prospect.",
      kpis: [["3 questions", "pour orienter un visiteur"], ["20", "secteurs lus par le guide"], ["≈ 50", "constats d'audit traduits en arguments"]],
      skills: ["Marketing opérationnel", "Argumentaires et offres", "UX et parcours", "Offres et prix"],
      projects: ["guide", "scaleupizer", "webizy", "dimanche", "cvquest"],
      seek: "Un poste de Product Marketing Manager."
    }
  },

  experiences: [
    {
      id: "stratemind", from: "2025-01", to: null, role: "Fondateur et Product Owner", org: "Studio Stratemind", place: "Indépendant, télétravail", contract: "Auto-entreprise",
      rel: { b: 3, p: 3, d: 3, g: 3 },
      lines: {
        business: "Un outil de prospection, un guide qui oriente les visiteurs, des devis et des paiements en ligne.",
        projet: "Une vingtaine de projets menés de front, pilotés depuis un seul écran.",
        produit: "Une gamme de trois produits en ligne, et quatre jeux en développement.",
        builder: "Le studio où les trois métiers se rejoignent : vendre, organiser, concevoir.",
        growth: "Une boucle de croissance complète : attirer, orienter, convertir, fidéliser."
      },
      bullets: [
        { t: "Conception et exploitation d'une gamme de services en ligne : Cube pour créer son site, Webizy pour le recevoir clé en main, Adminizy pour le faire vivre.", k: "dbg", type: "add" },
        { t: "Conception de ScaleUpizer, l'outil commercial du studio : trouver des prospects, auditer leur site, argumenter, envoyer dans les règles du RGPD, suivre chaque affaire.", k: "bd", type: "add" },
        { t: "Un parcours d'acquisition : un guide qui recommande le bon service en trois questions, lu selon vingt secteurs et trois tailles d'entreprise.", k: "bdg", type: "add" },
        { t: "Une vingtaine de projets pilotés en parallèle depuis un poste de pilotage unique : santé, jalons, décisions, idées.", k: "pg", type: "add" },
        { t: "Un compte unique « Se connecter avec Stratemind » qui relie les services entre eux.", k: "pd", type: "add" },
        { t: "Missions pour des clients : développement de projets et de business, commercial et traitement de données (ésotérisme, bien-être, santé, développement personnel, dating, formation en ligne).", k: "bp", type: "add" },
        { t: "Un registre de décisions daté par projet ; chaque étape publique rejoint le journal du studio.", k: "pg", type: "chg" }
      ],
      projects: ["cube", "webizy", "adminizy", "scaleupizer", "guide", "compte", "stratedeck", "devis", "espace", "arcade", "ardoise", "dimanche"]
    },
    {
      id: "mtarget", from: "2023-08", to: "2024-12", role: "Product Owner", org: "Mtarget", place: "Labège", contract: "CDI",
      rel: { b: 2, p: 3, d: 3, g: 2 },
      lines: {
        business: "Les relations avec le client final et les partenaires, et de nouvelles plateformes de distribution.",
        projet: "La coordination quotidienne des équipes de développement.",
        produit: "L'existant amélioré en continu, de nouveaux outils lancés à partir du terrain.",
        builder: "Product Owner : entre le client, le métier et les développeurs.",
        growth: "De nouvelles plateformes de distribution, et des équipes alignées chaque jour."
      },
      bullets: [
        { t: "Maintien et amélioration continue des produits existants.", k: "d", type: "chg" },
        { t: "Création de nouveaux outils internes et de nouvelles plateformes de distribution.", k: "dbg", type: "add" },
        { t: "Relations avec le client final et les partenaires.", k: "b", type: "add" },
        { t: "Création et présentation de référentiels et de process métier.", k: "dp", type: "add" },
        { t: "Coordination quotidienne des équipes de développement.", k: "pg", type: "chg" },
        { t: "Transmission claire de l'information aux collaborateurs, pour la continuité des opérations.", k: "pg", type: "chg" },
        { t: "Propositions d'amélioration fondées sur les retours du terrain.", k: "d", type: "chg" },
        { t: "Rédaction et mise en forme de documents adaptés à chaque usage.", k: "p", type: "chg" }
      ],
      projects: []
    },
    {
      id: "1984", from: "2021-01", to: "2022-01", role: "Chef de projet web", org: "1984 Agency", place: "Chartres, télétravail", contract: "CDI",
      rel: { b: 2, p: 3, d: 2, g: 2 },
      lines: {
        business: "La communication marketing et web d'un réseau d'une centaine de franchisés.",
        projet: "Le SI et le web d'une centaine de franchisés, planifiés selon les priorités.",
        produit: "Des innovations numériques intégrées au service d'un réseau de franchisés.",
        builder: "Un réseau de cent franchisés : leurs outils, leur web, leur communication.",
        growth: "Les décisions d'un service entier, prises seul ou par consensus."
      },
      bullets: [
        { t: "Gestion du système d'information et de la communication marketing et web d'un réseau d'une centaine de franchisés.", k: "pbg", type: "res" },
        { t: "Planification des activités quotidiennes du service selon les priorités.", k: "p", type: "chg" },
        { t: "Définition précise des tâches à effectuer, dans le respect des délais et des attentes.", k: "pd", type: "chg" },
        { t: "Identification des difficultés et prise de décision, seul ou par consensus.", k: "pg", type: "chg" },
        { t: "Intégration des innovations technologiques et numériques, et apprentissage rapide de nouveaux outils.", k: "d", type: "add" }
      ],
      projects: []
    },
    {
      id: "lanet", from: "2014-04", to: "2020-03", role: "Chef de projet informatique", org: "Lanet EOOD", place: "Freelance, télétravail", contract: "Freelance",
      rel: { b: 3, p: 3, d: 2, g: 3 },
      lines: {
        business: "150 appels entrants par jour, 2 M€ de chiffre d'affaires annuel, 10 commerciaux coachés.",
        projet: "Six ans à coordonner 5 développeurs et 10 commerciaux, en agile.",
        produit: "Des architectures évolutives, des produits plus efficaces et plus rentables.",
        builder: "Le premier poste où vente, équipe et produit tenaient ensemble.",
        growth: "Quinze personnes recrutées, formées, encadrées ; 2 M€ de chiffre d'affaires annuel."
      },
      bullets: [
        { t: "Gestion de 150 appels entrants par jour, pour 2 M€ de chiffre d'affaires annuel.", k: "bg", type: "res" },
        { t: "Coaching des équipes de développement (5 personnes) et commerciales (10 personnes).", k: "pgb", type: "res" },
        { t: "Recrutement, formation et encadrement des collaborateurs.", k: "gp", type: "add" },
        { t: "Conception d'architectures performantes et évolutives : accès, trafic, facturation et stockage sécurisé des données.", k: "dp", type: "add" },
        { t: "Identification et résolution de problèmes de conception, pour des produits plus efficaces et plus rentables.", k: "db", type: "chg" },
        { t: "Organisation agile des objectifs de développement.", k: "pd", type: "chg" }
      ],
      projects: []
    },
    {
      id: "amex", from: "2013-02", to: "2014-03", role: "Attaché commercial", org: "AMEX", place: "Toulouse", contract: "",
      rel: { b: 3, p: 0, d: 1, g: 1 },
      lines: {
        business: "Banque et services de paiement, en intermédiaire certifié IOBSP.",
        projet: "Un cadre réglementé, où chaque étape se documente.",
        produit: "Comprendre un produit financier avant de le proposer.",
        builder: "Vendre un produit réglementé : la rigueur avant l'argument.",
        growth: "Banque et services de paiement, en intermédiaire certifié."
      },
      bullets: [
        { t: "Intermédiaire en opérations de banque et services de paiement (certification IOBSP).", k: "b", type: "add" }
      ],
      projects: []
    },
    {
      id: "arena", from: "2012-01", to: "2013-01", role: "Responsable commercial", org: "Arena Productions", place: "Toulouse", contract: "",
      rel: { b: 3, p: 1, d: 1, g: 2 },
      lines: {
        business: "Marketing opérationnel et promotion des ventes des Cirques Medrano.",
        projet: "Des opérations de promotion à monter et à tenir dans le temps.",
        produit: "Faire connaître un spectacle : le produit, son public, son message.",
        builder: "Remplir des chapiteaux : le marketing au contact du public.",
        growth: "La promotion des ventes d'un spectacle en tournée."
      },
      bullets: [
        { t: "Marketing opérationnel et promotion des ventes pour Arena Productions (Cirques Medrano).", k: "bg", type: "add" }
      ],
      projects: []
    },
    {
      id: "lionbridge", from: "2011-03", to: "2012-01", role: "Internet Assessor", org: "Lionbridge", place: "Freelance, télétravail", contract: "Freelance",
      rel: { b: 1, p: 0, d: 2, g: 0 },
      lines: {
        business: "Comprendre ce que Google juge pertinent pour un internaute.",
        projet: "Un travail à distance, cadré par des protocoles précis.",
        produit: "Juger la pertinence des résultats de Google, du point de vue de l'utilisateur.",
        builder: "La pertinence vue par celui qui cherche.",
        growth: "Les coulisses de la recherche en ligne."
      },
      bullets: [
        { t: "Études de pertinence des résultats du moteur de recherche de Google.", k: "d", type: "add" }
      ],
      projects: []
    },
    {
      id: "bonnecaze", from: "2008-09", to: "2011-02", role: "Manager d'équipe", org: "Cabinet Bonnecaze", place: "Toulouse", contract: "",
      rel: { b: 2, p: 2, d: 1, g: 3 },
      lines: {
        business: "Les stratégies de rétention client, coordonnées au quotidien.",
        projet: "De nouveaux outils de rendez-vous et de contacts clients, intégrés à l'équipe.",
        produit: "De nouveaux systèmes, intégrés au quotidien d'une équipe.",
        builder: "Premier poste de manager : une équipe, ses outils, ses clients.",
        growth: "Premier poste de manager : recruter, motiver, former."
      },
      bullets: [
        { t: "Gestion de l'embauche et du recrutement, de la motivation et de la formation des employés.", k: "gp", type: "add" },
        { t: "Intégration de nouveaux systèmes pour la planification des rendez-vous et la gestion des contacts clients.", k: "pd", type: "add" },
        { t: "Coordination des stratégies de rétention.", k: "bg", type: "chg" }
      ],
      projects: []
    }
  ],

  education: [
    { id: "icpo", date: "2020-01", title: "icPO, certification Product Owner", detail: "Agile, gestion de projets et des équipes, Scrum", org: "Scrum League, Paris", k: "dp", rel: { b: 0, p: 2, d: 3, g: 1 } },
    { id: "iobsp", date: "2014-01", title: "IOBSP", detail: "Intermédiaire en opérations de banque et services de paiement", org: "Babylone, Toulouse", k: "b", rel: { b: 3, p: 0, d: 0, g: 0 } },
    { id: "licence", date: "2006", title: "Licence de Sciences humaines", detail: "Psychologie clinique et du développement", org: "Université Toulouse le Mirail", k: "dbg", rel: { b: 1, p: 0, d: 2, g: 1 } }
  ],

  /* Qualités du CV, valables pour toutes les lectures. */
  traits: ["Synthèse et analyse", "Pédagogie et écoute", "Créativité et esprit critique", "Adaptabilité et bon relationnel", "Curiosité, toujours à la recherche d'améliorations"],

  projects: [
    {
      id: "cube", name: "Cube", tagline: "Créer son site en conversation ou au constructeur visuel", family: "Gamme sites",
      status: "online", statusLabel: "En ligne", url: "https://cube.stratemind.fr", urlLabel: "cube.stratemind.fr",
      what: "Un studio de création de sites vitrines où la conversation avec l'IA et le constructeur visuel travaillent sur le même modèle de site. Autour : l'historique des versions, le référencement, les modules, la publication jusqu'au nom de domaine, la délégation au studio avec un journal de chaque modification, et un plan média à plafond strict.",
      proof: [["2 modes", "sur un seul modèle de site"], ["5 étapes", "du brief à la mise en ligne"]],
      k: "dbp", rel: { b: 2, p: 2, d: 3, g: 2 }
    },
    {
      id: "webizy", name: "Webizy", tagline: "Un site professionnel livré clé en main", family: "Gamme sites",
      status: "beta", statusLabel: "Ouverture prochaine", url: "https://webizy.stratemind.fr", urlLabel: "webizy.stratemind.fr",
      what: "Trois façons de construire sur le même document (discussion, design, code), un devis calculé et figé avant le paiement, puis un site livré, hébergé et nommé au nom du client. Les agences peuvent l'utiliser à leurs couleurs.",
      proof: [["1 devis", "figé avant le paiement"], ["0 abonnement", "pour garder son site en ligne"]],
      k: "bdg", rel: { b: 3, p: 1, d: 3, g: 2 }
    },
    {
      id: "adminizy", name: "Adminizy", tagline: "Modifier son site sans ouvrir ses fichiers", family: "Gamme sites",
      status: "beta", statusLabel: "Ouverture prochaine",
      what: "Un administrateur prépare le profil du site et valide les champs modifiables ; le client retrouve un éditeur guidé, un aperçu cliquable et une bibliothèque de médias, sur Windows comme dans le navigateur. Une offre gratuite est proposée après chaque site livré par Webizy.",
      proof: [["2 supports", "Windows et navigateur"], ["0 €", "l'offre d'entrée, proposée après livraison"]],
      k: "dbg", rel: { b: 2, p: 1, d: 3, g: 2 }
    },
    {
      id: "scaleupizer", name: "ScaleUpizer", tagline: "Trouver des clients et les convaincre", family: "Clients",
      status: "dev", statusLabel: "En développement",
      what: "La recherche de prospects dans les sources publiques (Sirene, BODACC, OpenStreetMap), l'audit de leur site en cinq axes, des argumentaires fondés sur leur situation réelle, des envois plafonnés et validés un par un, et le suivi de chaque affaire. Une demande écrite en une phrase devient une campagne chiffrée, prête à valider. Les prospects sans échange depuis trois ans sont effacés automatiquement.",
      proof: [["5 axes", "SEO, sécurité, technique, visibilité IA, conversion"], ["≈ 50", "constats d'audit traduits en arguments"], ["3 canaux", "e-mail, SMS, trame d'appel"]],
      k: "bdg", rel: { b: 3, p: 2, d: 3, g: 3 }, from: ["leadfactory", "fiatlux"]
    },
    {
      id: "guide", name: "stratemind.fr", tagline: "Le site du studio et son guide", family: "Studio",
      status: "online", statusLabel: "En ligne", url: "https://stratemind.fr", urlLabel: "stratemind.fr",
      what: "La page d'accueil remplace le menu par une conversation : un regard animé pose trois questions et recommande le bon service, avec ses raisons. Vingt secteurs et trois tailles d'entreprise changent ce qu'il dit. Le site du studio présente six piliers, les filiations entre projets et un journal qui se remplit seul à partir des fiches de chaque projet.",
      proof: [["3 questions", "pour trouver le bon service"], ["20 × 3", "secteurs et tailles d'entreprise"]],
      k: "bdg", rel: { b: 3, p: 2, d: 3, g: 3 }
    },
    {
      id: "stratedeck", name: "Stratedeck", tagline: "Tous les projets, un seul écran", family: "Studio",
      status: "internal", statusLabel: "Usage interne",
      what: "Le poste de pilotage du studio. Il lit la documentation de chaque projet là où elle vit, sans la recopier, et montre la santé, les jalons, les feuilles de route et les idées, sur ordinateur comme sur téléphone. Aucune action ne part sans validation.",
      proof: [["1 source", "de vérité par projet"], ["0 envoi", "sans validation"]],
      k: "pgd", rel: { b: 0, p: 3, d: 2, g: 3 }
    },
    {
      id: "compte", name: "Compte Stratemind", tagline: "Un seul compte pour tous les services", family: "Studio",
      status: "beta", statusLabel: "En ligne, en recette",
      what: "« Se connecter avec Stratemind » : un service d'identité au standard OpenID Connect, que Cube, Webizy et Adminizy rejoignent. Double authentification, appareils révocables, export et suppression du compte par l'utilisateur.",
      proof: [["3 services", "reliés par un seul compte"], ["42 tests", "sur le service d'identité"]],
      k: "pd", rel: { b: 1, p: 3, d: 2, g: 1 }
    },
    {
      id: "devis", name: "Devis Stratemind", tagline: "Devis, factures et paiement du premier jalon", family: "Clients",
      status: "internal", statusLabel: "Usage interne",
      what: "L'éditeur de devis et de factures du studio : jalons, aperçu, PDF en deux styles, factures numérotées et figées, lien de paiement qui débloque le démarrage du projet. Un devis peut s'ouvrir directement depuis le résumé laissé par le guide du site.",
      proof: [["2 styles", "de document au choix"], ["1 lien", "de paiement par jalon"]],
      k: "bp", rel: { b: 3, p: 2, d: 1, g: 2 }
    },
    {
      id: "espace", name: "Mon espace", tagline: "Le guichet client du studio", family: "Clients",
      status: "beta", statusLabel: "En test",
      what: "L'espace où chaque client retrouve ses projets, ses maquettes, ses devis et ses documents, avec le compte Stratemind.",
      proof: [["61 tests", "sur la première version"], ["4 rubriques", "projets, maquettes, devis, documents"]],
      k: "pdb", rel: { b: 2, p: 3, d: 2, g: 1 }
    },
    {
      id: "arcade", name: "Arcade", tagline: "Quatre jeux Android sur un même socle", family: "Jeux et récits",
      status: "dev", statusLabel: "En développement", url: "https://stratemind.fr/arcade/", urlLabel: "stratemind.fr/arcade",
      what: "Factio, des courses de quadriges dans la Rome antique ; Insula, une île de la pierre aux étoiles ; Bulle, un poisson rouge à soigner, pour les enfants de 6 ans ; Coterie, des héros et des donjons tirés au hasard. Chaque mécanique est réglée sur un banc d'équilibrage avant d'être jouée.",
      proof: [["23 → 3 %", "de faillites chez les débutants de Factio, grâce à l'héritage entre parties"], ["116 i/s", "sur un téléphone Android, avec 12 chars en course"]],
      k: "dp", rel: { b: 0, p: 2, d: 3, g: 1 }
    },
    {
      id: "ardoise", name: "Ardoise", tagline: "Apprendre du CP à la 3e", family: "Jeux et récits",
      status: "dev", statusLabel: "En développement",
      what: "Un logiciel d'apprentissage construit objectif par objectif d'après les programmes officiels, du CP à la 3e. Au CP : 57 activités et 10 leçons animées et parlées, qui servent aussi aux jeux du studio.",
      proof: [["57", "activités au CP"], ["CP → 3e", "programmes relevés objectif par objectif"]],
      k: "d", rel: { b: 0, p: 1, d: 3, g: 0 }
    },
    {
      id: "dimanche", name: "Dimanche", tagline: "Des poèmes à lire et à regarder", family: "Jeux et récits",
      status: "online", statusLabel: "En ligne", url: "https://dimanche.stratemind.fr", urlLabel: "dimanche.stratemind.fr",
      what: "Cinq grands poèmes (Rilke, Verlaine, Villon, Pessoa, Poe), chacun dans sa langue : la traduction apparaît au fil du défilement et l'image se dessine pendant la lecture.",
      proof: [["5 poèmes", "5 mondes graphiques"], ["4 langues", "traduites au défilement"]],
      k: "d", rel: { b: 1, p: 0, d: 2, g: 0 }
    },
    {
      id: "cvquest", name: "CV Quest", tagline: "Un CV qui se joue", family: "Jeux et récits",
      status: "demo", statusLabel: "Deux démos jouables",
      what: "Un parcours devenu jeu de plateau : on lance les dés, on avance, on découvre formations et expériences, puis une frise permet de tout relire. D'abord en pixel art, puis en diorama 3D.",
      proof: [["2 versions", "plateau, puis diorama 3D"], ["0 serveur", "tout tourne dans le navigateur"]],
      k: "db", rel: { b: 1, p: 0, d: 2, g: 0 }
    },
    {
      id: "livrevivant", name: "Livre vivant", tagline: "Un livre illustré qui se joue", family: "Jeux et récits",
      status: "dev", statusLabel: "En création",
      what: "Un moteur de livres illustrés où le lecteur observe, choisit, agit et joue. Premier tome : La Veilleuse de Vaudrès.",
      proof: [["1 moteur", "pour toute une collection"], ["Tome 1", "La Veilleuse de Vaudrès"]],
      k: "d", rel: { b: 0, p: 0, d: 2, g: 0 }
    },
    {
      id: "leadfactory", name: "LeadFactory", tagline: "Les entreprises d'un territoire, jusqu'à l'export", family: "Clients",
      status: "merged", statusLabel: "Prototype, fondu dans ScaleUpizer", into: "scaleupizer",
      what: "Un logiciel de bureau qui filtre les entreprises françaises par secteur et par territoire grâce à l'API publique Sirene, cherche les coordonnées publiées et exporte le tout. Il a appris au studio à trouver.",
      proof: [["18", "préréglages métier"], ["Sirene", "API publique de l'INSEE"]],
      k: "b", rel: { b: 3, p: 0, d: 1, g: 1 }
    },
    {
      id: "fiatlux", name: "FiatLux", tagline: "Le scanner de visibilité", family: "Clients",
      status: "merged", statusLabel: "Prototype, fondu dans ScaleUpizer", into: "scaleupizer",
      what: "Un logiciel de bureau qui repère la technique d'un site et ses signaux de référencement, calcule un score sur 100 et construit un plan d'action priorisé, jusqu'au pitch personnalisé. Il a appris au studio à auditer.",
      proof: [["/100", "score de visibilité"], ["Lot", "une liste de domaines d'un coup"]],
      k: "bd", rel: { b: 3, p: 0, d: 2, g: 1 }
    }
  ],

  /* Les besoins d'un recruteur, pour le calcul d'itinéraire de la page réseau et les dossiers de candidature.
     Une puce répond à un besoin quand elle contient l'un de ses mots (re) ; l = ligne de prédilection ;
     form = formations qui y répondent ; projets = stations du tramway à allumer. */
  needs: [
    { id: "clients", nom: "Trouver des clients", l: "b", re: /client|commercial|vente|prospect|appels|marketing|acquisition|rétention|banque/i, form: ["iobsp"], projets: ["scaleupizer", "guide", "devis", "espace"] },
    { id: "equipe", nom: "Recruter et faire grandir une équipe", l: "e", re: /recrut|embauche|coaching|encadrement|motivation/i, form: [], projets: [] },
    { id: "dev", nom: "Coordonner des développeurs", l: "p", re: /équipes de développement|objectifs de développement/i, form: ["icpo"], projets: ["stratedeck"] },
    { id: "produit", nom: "Concevoir un produit en ligne", l: "d", re: /conception|plateformes|services en ligne/i, form: ["icpo"], projets: ["cube", "webizy", "adminizy", "compte"] },
    { id: "ameliorer", nom: "Améliorer un produit existant", l: "d", re: /amélioration|retours du terrain|pertinence|résolution de problèmes|innovations/i, form: [], projets: [] },
    { id: "cadrer", nom: "Cadrer : process, priorités, décisions", l: "p", re: /process|référentiel|planification|priorités|tâches|décision|organisation agile|documents/i, form: ["icpo"], projets: ["stratedeck"] },
    { id: "projets", nom: "Piloter des projets web et SI", l: "p", re: /projets pilotés|développement de projets|système d.information|objectifs de développement/i, form: ["icpo"], projets: ["stratedeck", "espace"] }
  ],

  /* Billet et dossier de candidature, portés par l'adresse de la page (une ancre simple : lettres, chiffres, tirets).
       #billet-<entreprise>--<poste>--<besoins>[--plein]                 la page réseau seule ;
       #dossier-<entreprise>--<poste>--<besoins>--<b100-p40-d70|plein>   les pages réseau et lumière.
     « plein » : lecture Head of Product & Growth (plein feu). Les textes se lisent sans accents, sauf s'ils
     sont codés (%C3%A9) ; les pages les affichent en capitales. Fabriqués par dossier.js. */
  lireDossier(h) {
    const m = /^(billet|dossier)-(.+)$/.exec(h || "");
    if (!m) return null;
    const champs = m[2].split("--");
    if (champs.length < 3 || !champs[0]) return null;
    const texte = (s) => {
      let t = s; try { t = decodeURIComponent(s); } catch (e) { /* texte laissé tel quel */ }
      t = t.replace(/-/g, " ").trim();
      return /['’]/.test(t) ? t : t.replace(/\b([cdjlmnst]) (?=[aeiouyhàâéèêîôû])/gi, "$1’");
    };
    const besoins = [...new Set(champs[2].split("-"))].filter((id) => this.needs.some((n) => n.id === id)).slice(0, 3);
    if (!besoins.length) return null;
    const r = champs[3] || "", g = /^b(\d{1,3})-p(\d{1,3})-d(\d{1,3})$/.exec(r);
    const borne = (v) => Math.max(0, Math.min(100, +v));
    return {
      type: m[1], entreprise: texte(champs[0]), poste: texte(champs[1] || ""), besoins,
      plein: r === "plein", reglage: g ? { b: borne(g[1]), p: borne(g[2]), d: borne(g[3]) } : null,
      brut: { e: champs[0], p: champs[1] || "", r }
    };
  },
  ecrireDossier(o) {
    const slug = (s) => String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    const champs = [o.brut ? o.brut.e : slug(o.entreprise), o.brut ? o.brut.p : slug(o.poste), o.besoins.join("-")];
    if (o.plein) champs.push("plein");
    else if (o.reglage) champs.push(`b${o.reglage.b}-p${o.reglage.p}-d${o.reglage.d}`);
    return o.type + "-" + champs.join("--");
  },
  /* Le réglage des projecteurs d'un dossier. Les métiers des besoins choisis sont à 100 ; les autres gardent
     leur part dans les puces et formations citées, plafonnée à 40 (sous le seuil d'allumage de la page lumière,
     qui reste donc sur la lecture des besoins). « Recruter et faire grandir une équipe » donne le plein feu. */
  reglageDe(ids) {
    const n = { b: 0, p: 0, d: 0 };
    const besoins = this.needs.filter((x) => ids.includes(x.id));
    const maison = besoins.map((x) => x.l);
    if (maison.includes("e")) return { b: 100, p: 100, d: 100, plein: true };
    const compter = (k) => ["b", "p", "d"].forEach((c) => { if (k.includes(c)) n[c]++; });
    this.experiences.forEach((e) => e.bullets.forEach((b) => { if (besoins.some((x) => x.re.test(b.t))) compter(b.k); }));
    this.education.forEach((f) => { if (besoins.some((x) => x.form.includes(f.id))) compter(f.k); });
    const m = Math.max(1, n.b, n.p, n.d);
    const v = (c) => (maison.includes(c) ? 100 : Math.min(40, Math.round((n[c] / m) * 10) * 10));
    return { b: v("b"), p: v("p"), d: v("d"), plein: false };
  }
};
