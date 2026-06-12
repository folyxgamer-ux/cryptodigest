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
    titre: "Le Bitcoin se stabilise après une chute sous les 60 000 $",

    intro: "Après une période de forte volatilité, le marché des cryptomonnaies semble se stabiliser. Le Bitcoin a connu une chute significative, passant sous la barre des 60 000 $, mais montre désormais des signes de reprise. Les investisseurs restent prudents face à l'incertitude économique mondiale, mais certains indicateurs suggèrent que le pire pourrait être derrière nous.",

    marche: {
      btc: "$ 62 799",
      eth: "$1 642 ",
      tendance: "stable",
      commentaire: "Le marché affiche une santé stable"
    },

    alertes: [
      "Clarity Act date de fin le 6 juillet",
      "30 juin echeance MiCA",
      "surveiller Quivalis"

    ],

    actualites: [
      "Pour la cryptomonnaie, l'introduction en bourse de SpaceX pourrait aller dans un sens comme dans l'autre, Les mois d’attente sont terminés, et SpaceX s’apprête à être cotée aujourd’hui au Nasdaq après que les investisseurs aient injecté 75 milliards de dollars dans la plus grande introduction en bourse de l’histoire. Ce qui suivra pourrait avoir des répercussions sur les marchés financiers, y compris les cryptomonnaies.",
      "Succès de la levée de fonds sur Binance Le programme d'introduction en bourse (IPO) tokenisée de SpaceX via Binance Wallet a attiré 557 millions de dollars de souscriptions. L'opération a mobilisé 27 689 adresses de portefeuilles numériques. Détails du jeton et participation Le jeton SPCXx, émis par xStocks, est conçu pour refléter la performance boursière de SpaceX. La grande majorité des participants(plus de 81 %) possède des portefeuilles de moins de 20 000 dollars. Les investisseurs ayant engagé entre 20 000 et 100 000 dollars représentent près de 58 % du capital total souscrit.",
      "Le prix de Monero s'envole de 33 % à 438 $ dans un labyrinthe de blanchiment en chaîne de 120 millions de dollars L'enquêteur onchain ZachXBT a retracé les fonds restants à travers les plateformes d'échange, les services d'échange instantané et d'autres blockchains.Tether a ensuite gelé 72 millions de dollars en USDT liés à cette activité. (voila quand on dis que la cryptomonaie et pour le blanchiment c'est encore une preuve que c'est pas le cas)",
      "Alors que le bitcoin se maintient près de 63 000 $, certaines données indiquent des difficultés à venir pour les haussiers Les données on - chain montrent que le prix du marché du bitcoin est à peine au - dessus de son prix réalisé et que la demande s'affaiblit, en particulier de la part des ETF. (est ce que BTC a a touvé son support ? des tehorie sont la)",
      "Metaplanet acquiert Siiibo Securities pour accélérer ses plans dans l'écosystème financier du bitcoin L’acquisition d’environ 13, 1 millions de dollars offre à Metaplanet une plateforme de titres réglementée pour développer des produits d’investissement liés au Bitcoin.",
      "Il existe une méthode simple pour déterminer si le bitcoin a réellement atteint son point le plus bas. À l'heure actuelle, ce n'est pas le cas. L'indice RSI hebdomadaire du Bitcoin contient un niveau critique qui a toujours distingué de manière fiable les régimes de marché haussier et baissier à travers plusieurs cycles. Actuellement, l'indicateur n'a pas encore franchi cette ligne.",
      "Les traders de crypto, ayant vu le bitcoin , la plus grande cryptomonnaie, rebondir durant la nuit à 64 000 $ après être tombé récemment sous les 60 000 $, peuvent se demander si le creux a été atteint et si une nouvelle phase haussière a commencé. Il existe un signal simple pour obtenir cette confirmation. Actuellement, il indique que le rebond n'a pas commencé. Ce signal provient de l'indicateur de momentum largement suivi appelé indice de force relative, ou RSI. Cette mesure peut varier de 0 à 100. Des lectures supérieures à 70 indiquent qu'un actif est en surchauffe et potentiellement survendu, tandis que des lectures inférieures à 30 suggèrent le contraire. Entre ces extrêmes, des niveaux spécifiques émergent souvent comme des lignes de démarcation entre des environnements haussiers et baissiers.",
      "BlackRock dépose une demande pour inscrire son ETF de revenus en bitcoin, avec un lancement prévu la semaine prochaine Un dépôt d'enregistrement d'actions de type 8 - A, dans ce cas pour le Nasdaq, est généralement l'une des dernières étapes avant le lancement d'un ETF. BlackRock a franchi une nouvelle étape vers le lancement de son fonds négocié en bourse dédié aux revenus en bitcoin sur le Nasdaq, en déposant un document d'enregistrement d'actions qui annonce souvent une introduction imminente. Le plus grand gestionnaire d'actifs au monde a déposé le formulaire 8-A pour l’iShares Bitcoin Premium Income ETF ce jeudi, généralement l’une des dernières étapes procédurales avant le lancement effectif d’un ETF.",
      "Une étape historique pour le VOO Le Vanguard S & P 500 ETF(VOO) est devenu le premier fonds négocié en bourse à franchir le cap des 1 000 milliards de dollars d'actifs sous gestion au cours de la première semaine de juin. Bien que le total des actifs ait légèrement fluctué depuis, le fonds confirme sa position de leader pour l'investissement dans les grandes capitalisations américaines",
      "Stratégie des ETF à revenus élevés ProShares propose les ETF Nasdaq - 100 High Income ETF(IQQQ) et S & P 500 High Income ETF(ISPY) pour générer des revenus. Ces fonds utilisent des options d'achat quotidiennes pour générer des revenus tout en conservant un potentiel de croissance du capital.",
      "Historique et développement de Sperax Fondée en 2019, Sperax développe des infrastructures financières décentralisées depuis sept ans avec le soutien d'investisseurs tels que Jump Crypto, Polychain Capital et Amber Group. Le projet a lancé son jeton de gouvernance SPA en 2020 et le stablecoin USDs, pionnier du rendement automatique, en 2021. Après avoir déployé une couche d'agents programmables en 2025 sur Arbitrum et BNB Chain, Sperax a collaboré avec Google Cloud en 2026 pour soutenir l'analytique IA en temps réel.",
      "La société qui fabrique votre télévision intègre la publicité on-chain. Arbitrum a apporté son aide LG Electronics a développé une plateforme publicitaire basée sur la blockchain avec l'aide d'Arbitrum.",
    ],

    conseil: "Pour les investisseurs, il est essentiel de rester informé des développements du marché et de ne pas céder à la panique lors de fluctuations de prix. La diversification du portefeuille et une approche à long terme peuvent aider à atténuer les risques associés à la volatilité des cryptomonnaies. De plus, il est important de surveiller les indicateurs techniques et fondamentaux pour prendre des décisions éclairées sur les points d'entrée et de sortie du marché.",

    conclusion: "En conclusion, bien que le marché des cryptomonnaies ait connu une période de turbulence, les signes de stabilisation sont encourageants. Les investisseurs doivent rester vigilants et continuer à suivre les tendances du marché, tout en adoptant une stratégie d'investissement prudente pour naviguer dans cet environnement volatil."
  },


  // ──────────────────────────────────────────────
  //  BILAN DE LA SEMAINE
  // ──────────────────────────────────────────────
  semaine: {
    titre: "une semaine de baisse mais des signaux positifs",

    intro: "Après une semaine marquée par une forte volatilité et une baisse significative des prix, le marché des cryptomonnaies montre des signes de stabilisation. Malgré les défis, plusieurs indicateurs suggèrent que la tendance baissière pourrait être temporaire.",

    marche: {
      btc_7j: "-15.5%",
      eth_7j: "-18.5",
      // dominance: "58,1 %",
      commentaire: "baisse imminente"
    },

    evenements: [
      "Clarity Act date de fin le 6 juillet",
      "30 juin echeance MiCA",
      "surveiller Quivalis"
    ],

    actualites: [
      "La tension a atteint un point critique aux États-Unis. Le PDG de JPMorgan a officiellement exprimé son opposition au projet de loi CLARITY, illustrant le fossé qui se creuse entre les banques de Wall Street et les partisans de la conformité crypto .À l'inverse, Coinbase a franchi une étape majeure en recevant l'approbation de la CFTC pour proposer des produits dérivés via la plateforme Deribit",
      "Facteurs macroéconomiques : Un rapport sur l'emploi américain plus solide que prévu a réduit les espoirs de baisse des taux de la Fed, renforçant le dollar et pesant lourdement sur les actifs à risque comme les cryptos.",
      "Le marché des RWA tokenisés (hors stablecoins) a atteint une valeur estimée entre 31 et 34 milliards de dollars en mai 2026 .Ethereum reste le réseau dominant pour ce secteur, hébergeant environ 60 % de la valeur totale on - chain .Le segment des bons du Trésor américain, mené par le fonds BUIDL de BlackRock(environ 15 milliards de dollars), reste le principal moteur de cette croissance",
      "Sorties institutionnelles : Les ETF Bitcoin au comptant aux États-Unis ont enregistré des sorties nettes records, totalisant environ 5 milliards de dollars en 14 jours, signalant un retrait massif des investisseurs institutionnels.",
      "Kraken : L'exchange a renforcé sa présence en Europe en étant désormais totalement conforme à la réglementation MiCA .La plateforme mise sur l'innovation avec ses 'bundles' (paniers de crypto-monnaies) et ses Xtocks (actions tokenisées du Nasdaq), cherchant à attirer les investisseurs traditionnels sur la blockchain",
      "Coinbase : En début de semaine (1er juin), la plateforme a officiellement lancé le support de la roupie indienne (INR), facilitant l'accès au marché pour des millions d'utilisateurs en Inde [Conversation History].",
      "Le secteur des dérivés décentralisés voit une compétition accrue entre Hyperliquid et dYdX .Hyperliquid se positionne comme un leader grâce à son expérience de trading proche de celle des plateformes centralisées et à la montée en puissance de son écosystème L1 .Parallèlement, le marché des prédictions reste un secteur clé, où Kalshi et Polymarket se disputent la dominance",
      "Exceptions notables : Malgré la faiblesse générale, certains projets comme Hyperliquid (HYPE) et Stellar (XLM) ont surperformé grâce à des développements spécifiques (nouveaux produits dérivés et partenariats d'infrastructure).",
      "Les analystes surveillent de près les jetons liés à l'IA et aux RWA, identifiés comme les narratifs les plus prometteurs pour la prochaine 'Altseason', avec un potentiel de croissance significatif pour des projets comme Bittensor (TAO) ou Kaspa (KAS).",



    ],
    analyse: "Malgré une semaine difficile pour les marchés de la cryptomonnaie, plusieurs signaux positifs émergent. La stabilisation des prix et l'intérêt renouvelé des investisseurs institutionnels suggèrent que le marché pourrait être en train de trouver un support solide. Cependant, la prudence reste de mise, car les développements réglementaires et macroéconomiques à venir pourraient encore influencer la direction du marché dans les semaines à venir.",

    conclusion: "En résumé, la semaine a été marquée par des défis importants, mais les signes de stabilisation et les développements positifs dans certains segments du marché offrent une lueur d'espoir pour les investisseurs. Il est crucial de rester informé et de surveiller de près les évolutions réglementaires et économiques qui pourraient impacter le marché dans un avenir proche.",
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
