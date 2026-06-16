// ============================================================
//  CRYPTODIGEST — Fichier de contenu
//  Édite ce fichier dans VSCode, puis ouvre index.html
//  dans ton navigateur (double-clic ou Live Server).
// ============================================================

const CRYPTO_DATA = {

  // ──────────────────────────────────────────────
  //  RÉSUMÉ DU JOUR
  // ──────────────────────────────────────────────
  jour: {
    titre: "Résumé du marché des cryptomonnaies",

    intro: "Le marché des cryptomonnaies a connu une semaine dynamique, marquée par des fluctuations de prix et des développements significatifs. Les investisseurs ont été attentifs aux tendances du marché, aux nouvelles réglementations et aux événements géopolitiques qui ont influencé les performances des principales cryptomonnaies. Malgré les défis, le marché a montré des signes de résilience, offrant des opportunités pour ceux qui restent informés et stratégiques dans leurs décisions d'investissement.",

    marche: {
      btc: "$ 66 077",
      eth: "$1 803 ",
      tendance: "haussiere",
      commentaire: "Le marché affiche une santé haussière avec des signes de stabilisation."
    },

    alertes: [
      "Clarity Act date de fin le 6 juillet",
      "30 juin echeance MiCA",
      "surveiller Quivalis",
      "Le quantique , la cryptomonaie dois ce mefier BTC dois etre ameliorer pour resister aux attaque quantique",
      "Ce week-end (Annonce) : Déclaration de Donald Trump sur l'accord de paix USA-Iran.",
      "17 Juin : Première réunion du FOMC (la Fed) présidée par le nouveau président Kevin Warsh.",
      "19 Juin : Date officielle prévue pour la signature de l'accord de paix.",
      "60 prochains jours : Durée de la trêve prolongée pendant laquelle les discussions pour un accord final vont continuer. fin le 30 juillet.",
    ],

    actualites: [
      "Ripple investit dans Flutterwave, propulsant son stablecoin et le XRP Ledger dans les paiements à travers l'Afrique L'accord valorise Flutterwave à 3,2 milliards de dollars et intégrera RLUSD de Ripple ainsi que le réseau XRP Ledger pour accélérer les paiements transfrontaliers à travers l'Afrique.",
      "Coinbase rejoint la course aux actions tokenisées avec des actions onchain et le versement de dividendes La plateforme d’échange de cryptomonnaies a déclaré que les investisseurs détiendront les actions et percevront des dividendes, soulignant ainsi l’élan croissant en faveur des titres tokenisés.",
      "Binance affirme que sa demande réglementaire européenne est conforme malgré un rapport faisant état d'un rejet grec Une demande de licence crypto auprès de l’UE, soumise par la plus grande plateforme d’échange de cryptomonnaies au monde, est sur le point d’être rejetée par le régulateur grec HCMC, selon un rapport de Reuters.",
      "La plus grande refonte du protocole Ethereum depuis des années entre dans sa phase finale de développement Les développeurs entrent dans la phase finale des travaux sur Glamsterdam, la prochaine mise à niveau majeure du réseau, alors que les équipes commencent à tester une version du fork dans un environnement fermé.",
      "State Street vise le boom des réserves de stablecoins avec un nouveau fonds du marché monétaire Le gestionnaire d'actifs rejoint BlackRock, Franklin Templeton et d'autres acteurs en lice pour gérer les réserves soutenant le marché croissant des stablecoins.",
      "Cette IA vous construit une entreprise, la gère et règle les paiements en USDC Le fondateur de Locus, soutenu par Y Combinator, permet aux utilisateurs d’envoyer une idée d’entreprise par iMessage, SMS ou Telegram, et l’IA s’occupe du reste.",
      "BlackRock est prévu pour faire ses débuts un nouvel ETF bitcoin  BTC mardi prochain.Le fonds offre bien plus qu'une simple exposition à la cryptomonnaie ; il est conçu pour générer des revenus supplémentaires grâce à la volatilité du bitcoin. L'iShares Bitcoin Premium Income ETF (BITA) offre une exposition au prix du bitcoin en détenant des actions de l'ETF spot bitcoin existant de BlackRock, IBIT.Il génère également des revenus en vendant des options d'achat contre ces avoirs.",
      "Les acheteurs de Bitcoin ont ajouté plus de 250 000 BTC entre 59 000 $ et 67 000 $ alors que l'accumulation reprend Les données de Glassnode montrent un achat généralisé à travers les cohortes de détaillants et de baleines, avec le score de tendance d'accumulation atteignant son niveau le plus élevé depuis le début de la correction actuelle.",
      "Le Bitcoin rebondit après la hausse des taux au Japon, avec XLM, INJ, UNI en progression XLM de Stellar, INJ d'Injective et UNI d'Uniswap figurent parmi les meilleures performances des 100 plus grandes cryptomonnaies par capitalisation boursière.",
      "Tether Gold dispose désormais d’un marché d’options dédié sur Bybit Ces options, réglées en USDT, permettent aux traders de couvrir les risques et de spéculer sur les prix de l'or.",
      "Marchés en direct : le Bitcoin chute en dessous de 66 000 $ tandis que SpaceX progresse grâce à l'accord avec Cursor Ether, XRP, Solana et Hyperliquid ont tous enregistré des entrées de fonds, mais la sortie de bitcoin s'explique principalement par le GBTC de Grayscale.",
      "XRP rend ses gains après un rallye de 10 % alors que les traders prennent leurs profits près de 1,25 $ La demande asiatique et les flux entrants des ETF ont aidé à propulser le XRP au - dessus de 1, 20 $, mais le token a eu du mal à maintenir ses sommets après avoir rencontré une nouvelle pression vendeuse près d'une zone de résistance clé.",
      "Prise de bénéfices sur le bitcoin, l’ether et le solana alors que les traders attendent la signature en Iran Un accord entre les États - Unis et l’Iran a fait baisser le pétrole et fait monter les actions, mais le rebond du bitcoin reste hésitant.Les sorties des fonds négociés en bourse(ETF) viennent de marquer une pause après une série record, et les analystes estiment que le marché souhaite que l’accord soit signé avant de l’intégrer dans les prix.",
      "Le Bitcoin progresse après que la Banque du Japon a relevé les taux d'intérêt à un niveau inédit depuis 31 ans La Banque du Japon a relevé son taux directeur de 25 points de base pour le porter à 1 %, soit le niveau le plus élevé depuis 1995.",
      "Un mystérieux trader de Polymarket a transformé 4 millions de dollars en 9 millions après le tirage au sort surprenant de l'Espagne en Coupe du Monde Un compte âgé de quelques jours a transformé environ 4 millions de dollars en un bénéfice de 9 millions de dollars en pariant contre l’Espagne, un trade atypique qui suscite la curiosité des enquêteurs on - chain se demandant s’il s’agissait de chance ou d’informations privilégiées.",
      "La plateforme Coins.ph a intégré le bitcoin et l'ethereum au réseau national de paiement QR Ph, permettant des transactions chez près de 700 000 commerçants aux Philippines. Le système utilise une liquidation automatisée en temps réel pour protéger les commerçants et les consommateurs contre la volatilité des marchés. Les transactions effectuées couvrent des dépenses quotidiennes telles que les courses alimentaires, les frais de scolarité et les équipements domestiques.",
      "Mise à jour technique de la blockchain Le XRP Ledger a officiellement renommé son programme principal, passant de « ripple daemon » à « xrpl daemon ». Cette modification vise à distinguer clairement le réseau public indépendant de l'entreprise commerciale Ripple. Objectifs réglementaires et décentralisation La Fondation XRPL cherche à démontrer la décentralisation totale du réseau auprès des tribunaux et de la SEC américaine. Ce changement de nom est également destiné à encourager l'adoption du protocole par de nouveaux développeurs tiers. Optimisation des performances La mise à jour technique réduit la consommation de mémoire vive(RAM) du programme de 30 % à 40 %. Cette amélioration technique permet au système de fonctionner plus rapidement. Accumulation par les grands détenteurs Les portefeuilles détenant au moins 1 million de XRP contrôlent désormais 74, 1 % de l'offre totale. Ces grands investisseurs ont accumulé 1, 53 milliard de pièces supplémentaires au cours des six derniers mois. Dynamique du marché Le prix du XRP a enregistré une hausse de 13 % en une journée, atteignant le niveau de 1, 28 dollar. Les analystes de Santiment attribuent ce rebond à une amélioration du contexte géopolitique global.",

    ],

    conseil: "Pour les investisseurs en cryptomonnaies, il est crucial de rester informés des développements géopolitiques et économiques qui peuvent influencer le marché. L'accord de paix entre les États-Unis et l'Iran a démontré comment les événements mondiaux peuvent avoir un impact direct sur les prix des actifs numériques. Il est recommandé de diversifier les portefeuilles, de surveiller les tendances du marché et d'adopter une approche prudente face à la volatilité. Les investisseurs devraient également envisager d'utiliser des outils d'analyse technique et fondamentale pour prendre des décisions éclairées et gérer les risques associés aux investissements en cryptomonnaies.",

    conclusion: "En conclusion, la semaine écoulée a été marquée par des événements géopolitiques significatifs qui ont influencé le marché des cryptomonnaies. L'accord de paix entre les États-Unis et l'Iran a entraîné une hausse du Bitcoin et d'autres actifs numériques, soulignant l'importance de rester attentif aux développements mondiaux. Les investisseurs doivent continuer à surveiller les tendances du marché, diversifier leurs portefeuilles et adopter une approche stratégique pour naviguer dans cet environnement volatil. La prudence et l'information sont essentielles pour maximiser les opportunités et minimiser les risques dans le domaine des cryptomonnaies."
  },


  // ──────────────────────────────────────────────
  //  BILAN DE LA SEMAINE
  // ──────────────────────────────────────────────
  semaine: {
    titre: "Une semaine sacrement boulversée pour le marché des cryptomonnaies",

    intro: "La semaine écoulée a été marquée par des turbulences significatives sur le marché des cryptomonnaies, avec des fluctuations de prix notables et des développements réglementaires qui ont capté l'attention des investisseurs. Malgré ces défis, certains segments du marché ont montré des signes de résilience, offrant des opportunités pour ceux qui restent informés et stratégiques dans leurs décisions d'investissement.",

    marche: {
      btc_7j: "3%",
      eth_7j: "2.1%",
      // dominance: "58,1 %",
      commentaire: "Hausse imminente"
    },

    evenements: [
      "Clarity Act date de fin le 6 juillet",
      "30 juin echeance MiCA",
      "surveiller Quivalis",
      "Le quantique , la cryptomonaie dois ce mefier BTC dois etre ameliorer pour resister aux attaque quantique",
    ],

    actualites: [
      "Le coup de tonnerre : L’IPO de SpaceX et son trésor en Bitcoin 🚀 C'est l'événement qui a fait trembler à la fois Wall Street et la crypto - sphère.Vendredi, SpaceX a fait ses premiers pas historiques au Nasdaq(sous le ticker SPCX), ouvrant en hausse de 11 % à 150 $. La surprise crypto : Le document officiel de la SEC(le gendarme financier américain) a révélé que l'entreprise d'Elon Musk détient secrètement 18 712 Bitcoins dans sa trésorerie, achetés à un prix moyen d'environ 35 324 $ par BTC.",
      "RWA et Cartes Crypto : L'adoption explose 💳 Les cartes crypto au sommet : Une étude a révélé que les dépenses mondiales mensuelles via des cartes crypto(comme celles dont nous parlions!) sont passées en 18 mois de 100 millions à 1, 5 milliard de dollars. La Tokenisation(RWA) : Le secteur de la tokenisation des actifs réels affiche une croissance de 589 % sur un an et demi, s'imposant comme le vrai moteur fondamental du marché.",
      "Le protocole de prêt décentralisé Morpho (très populaire sur Ethereum) a annoncé une levée de fonds massive de 175 millions de dollars auprès de mastodontes du capital-risque comme Paradigm et a16z crypto, propulsant la valorisation du projet à 2 milliards de dollars. La DeFi institutionnelle a le vent en poupe.",
      "Côté Conférences : Ébullition à New York et Berlin 🌍 ETHGlobal New York : Le week - end a été rythmé par l'un des plus grands hackathons Ethereum de l'année à NYC, où des centaines de développeurs se sont réunis pour coder de nouvelles applications décentralisées. Berlin Blockchain Week : L'Europe est aussi à l'honneur puisque la semaine blockchain de Berlin vient tout juste de démarrer(du 12 au 20 juin), rassemblant la communauté Web3 européenne autour des sujets de vie privée et d'infrastructures.",
      "Le 'Rebranding' de la semaine : TON devient GRAM 💎 Le jeton de l'écosystème Telegram, le Toncoin (TON), a officiellement entamé une transition pour changer de nom et redevenir le Gram (GRAM), un clin d'œil historique au projet initial développé par les frères Durov.",
      "Côté Prix (Bitcoin & Co) Après des secousses et de la volatilité qui avaient poussé le Bitcoin brièvement sous la barre des 60 000 € la semaine précédente, le marché s'est stabilisé et a retrouvé des couleurs (actuellement autour des 62 000 - 63 000 €). Les traders ont repris leur souffle, portés par la dynamique positive entourant l'introduction en bourse de SpaceX.",

    ],
    analyse: "L'analyse de la semaine révèle que malgré les turbulences, le marché des cryptomonnaies a montré une résilience notable. Les investisseurs ont été confrontés à des défis réglementaires et à des fluctuations de prix, mais certains segments, notamment la DeFi institutionnelle et la tokenisation des actifs réels, ont enregistré des développements positifs. L'IPO de SpaceX et la révélation de sa trésorerie en Bitcoin ont également eu un impact significatif sur le sentiment du marché, renforçant l'intérêt pour les actifs numériques. Il est essentiel pour les investisseurs de rester informés et de surveiller les évolutions réglementaires et économiques qui pourraient influencer le marché dans les semaines à venir.",

    conclusion: "En conclusion, la semaine écoulée a été riche en événements et en enseignements pour le marché des cryptomonnaies. Les investisseurs doivent rester vigilants face aux développements réglementaires et aux tendances du marché, tout en explorant les opportunités offertes par les segments en croissance tels que la DeFi institutionnelle et la tokenisation des actifs réels. La résilience démontrée par le marché malgré les défis souligne l'importance d'une approche stratégique et informée pour naviguer dans cet environnement dynamique.",
  },


  // ──────────────────────────────────────────────
  //  BILAN DU MOIS
  // ──────────────────────────────────────────────
  mois: {
    titre: "La distribution des institutions",

    intro: "À l'échelle mensuelle, mai aura été le mois de la transition d'une phase d'accumulation agressive à une phase de distribution institutionnelle.",

    marche: {
      btc_30j: "-6.4 %",
      market_cap: "1.4 T$",
      fear_greed: "30/100",
      // commentaire: "Le mois de mai a d'abord déjoué le proverbe 'Sell in May'. La rotation du capital vers les altcoins est enclenchée avec Ethereum, Solana et les tokens DeFi en tête. Le volume DEX atteint un niveau record à 320 Md$ mensuel."
    },

    coins_surveiller: [
      "BTC",
      "ETH",
      "HYPE",
      "SOL"
    ],

    faits_marquants: [
      "L'hémorragie des ETF : C'est le chiffre noir du mois. Les ETF Spot Bitcoin et Ethereum ont enregistré plus de 1,3 milliard de dollars de sorties nettes sur les trente derniers jours. Les fonds spéculatifs ont largement pris leurs bénéfices après les sommets.",
      "La capitulation d'Ethereum : Mai 2026 marque un tournant historique très sombre pour l'ETH. Pour la toute première fois depuis juillet 2025, la dominance d'Ethereum est tombée sous la barre critique des 10 %. Le jeton reste structurellement très faible face au Bitcoin, oscillant péniblement autour de son support technique des 2 000 $.",
      "RWA & Régulation : Le grand sujet de fond aura été le blocage politique. Les banques traditionnelles (menées par le lobbying agressif de JPMorgan) ont réussi à freiner le Digital Asset Market Clarity Act au Sénat américain, retardant l'explosion attendue des protocoles DeFi institutionnels et des actifs du monde réel (RWA).",
    ],

    // perspectives: "💡 Juin s'annonce chaud. La saison des altcoins est historiquement forte en juin-juillet lors des cycles haussiers. Surveiller le dominance BTC : si elle passe sous 55 %, l'altseason est officiellement confirmée. Catalyseurs à venir : approbation ETF SOL (Q3), Ethereum Devcon en juillet.",

    conclusion: "Le mois de mai se termine sur une note défensive. Le marché a besoin d'un nouveau catalyseur frais pour casser sa tendance baissière actuelle. Sur Polymarket, les parieurs misent désormais à 85 % sur un retour du Bitcoin à 70 000 $ avant de revoir les 90 000 $."
  }

}
