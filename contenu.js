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
    titre: "Régulation, adoption institutionnelle et paris politiques",

    intro: "Cette semaine, l'actualité crypto se joue autant dans les couloirs des parlements que sur les marchés. Entre la Russie qui encadre (a minima) le trading particulier tout en libérant les entreprises pour contourner les sanctions, le Royaume-Uni qui enquête sur la discrimination bancaire des entreprises crypto, et les paris qui s'enflamment sur un possible compromis Trump concernant la loi Clarity, la ligne de fracture entre régulation restrictive et adoption institutionnelle n'a jamais été aussi visible. Pendant ce temps, l'infrastructure de paiement se réinvente en coulisses — de MoneyGram à une nouvelle banque de compensation dédiée aux stablecoins.",

    marche: {
      btc: "$ 66 451",
      eth: "$1 925",
      tendance: "*hausse",
      commentaire: "Le marché affiche une santé haute."
    },

    alertes: [
      "Clarity Act date de fin le 10 aout",
      "surveiller Quivalis",
      "Le quantique , la cryptomonaie dois ce mefier BTC dois etre ameliorer pour resister aux attaque quantique",
      "60 prochains jours : Durée de la trêve prolongée pendant laquelle les discussions pour un accord final vont continuer. fin le 30 juillet.",
      "MiCa change des lignes a surveiller",
      "31 juillet : date limite pour les mineurs de rediriger leur hashrate avant la fermeture du pool de minage SBI Crypto.",
      "fin d'été l'OUSD",
      "a mise à jour des terminaux de paiement (TPE) : Le géant Ingenico (qui fabrique la quasi-totalité des terminaux de cartes bleues que tu vois dans les magasins en France) a déjà créé des logiciels pour intégrer les paiements crypto et stablecoins directement sur l'écran du terminal. Les commerçants n'ont plus qu'à activer l'option.",
      "La réglementation MiCA (l'harmonisation européenne) : L'Europe a mis en place des lois ultra-strictes pour encadrer tout ça. Cela donne le feu vert légal absolu aux banques pour intégrer ces technologies dans leurs applications classiques (comme l'application de la Caisse d'Épargne ou du Crédit Agricole).",
    ],

    actualites: [
      "Le parlement russe adopte une loi sur le marché des cryptomonnaies avec un plafond annuel de 3 800 $ pour les investisseurs particuliers Alors que les citoyens ne peuvent toujours pas utiliser le Bitcoin pour acheter des produits d'épicerie, le Kremlin autorise officiellement les entreprises à utiliser des jetons numériques pour contourner les sanctions et autres obstacles au commerce mondial.",
      "Augustus lève 180 millions de dollars pour créer une banque de compensation pour l'ère de l'IA et des stablecoins La société, récemment valorisée à 1 milliard de dollars, vise à remplacer la banque correspondante traditionnelle par une infrastructure toujours disponible qui connecte les systèmes de paiement traditionnels et les stablecoins. Augustus, une startup développant une banque de compensation agréée au niveau fédéral pour les fintechs et les institutions financières, a déclaré il a levé 180 millions de dollars pour développer son infrastructure de paiement en dollars alors que les stablecoins redéfinissent la finance mondiale",
      "Le PDG de MoneyGram déclare que la blockchain fonctionne mieux lorsque les clients ne savent pas qu'elle est présente Dans une interview accordée à CoinDesk, le PDG de MoneyGram, Anthony Soohoo, a déclaré que leur stratégie blockchain est passée d’une phase d’expérimentation initiale à un effort plus large visant à moderniser l’infrastructure des paiements mondiaux de l’entreprise.",
      "Jack Mallers démissionne de son poste de PDG de XXI Capital alors que les plans de Tether de fusionner trois entreprises bitcoin échouent",
      "Les chances de Clarity augmentent à 43 % sur Polymarket après des rapports non vérifiés indiquant que Trump aurait accepté un accord d’éthique Les parieurs ont porté la probabilité d’adoption du projet de loi sur la structure du marché crypto à 43 % cette année, en hausse par rapport à un creux historique la semaine dernière, bien qu’aucun texte de loi n’ait encore été publié.",
      "Les marchés crypto rebondissent grâce au rapport de progression de Clarity et au redressement des actions technologiques asiatiques La spéculation selon laquelle le Président Donald Trump aurait accepté une disposition éthique cruciale pour le projet de loi sur la structure du marché des cryptomonnaies a soutenu les gains.",
      "Le Parlement britannique lance une enquête sur le goulet d'étranglement bancaire pour les entreprises crypto Le Groupe parlementaire multipartite sur les crypto-monnaies et les actifs numériques du Royaume-Uni (APPG) se concentre sur les banques qui ont refusé l'ouverture de comptes aux entreprises crypto ou qui ont imposé des restrictions sur les transactions en crypto-monnaies.",

    ],


    conseil: "Si tu veux investir ou positionner tes pions intelligemment, observe les technologies qui connectent le monde réel à la blockchain : les stablecoins réglementés (comme l'OUSD ou l'USDC), les plateformes de paiement rapide (Stripe) et la tokenisation des vrais actifs. C'est là que les plus grosses fortunes de la décennie vont se construire, car c'est là que va l'argent de Google, de Visa et des plus grandes banques mondiales.",

    conclusion: "🇷🇺 Russie : les particuliers ne pourront investir en cryptomonnaie qu'à hauteur de 3 800$ par an, une limite stricte. À l'inverse, les entreprises russes obtiennent le feu vert pour utiliser les cryptos dans leurs échanges internationaux, notamment pour contourner les sanctions occidentales. Augustus(startup financière) : a levé 180 millions de dollars pour créer une nouvelle infrastructure qui doit faciliter les transferts d'argent entre banques classiques et cryptomonnaies stables, en modernisant un système jugé lent et dépassé. MoneyGram(transfert d'argent) : son dirigeant explique que la technologie blockchain doit rester invisible pour l'utilisateur final — l'objectif n'est pas d'exhiber la technologie, mais de rendre les transferts d'argent plus rapides et moins chers sans que le client s'en aperçoive.  Un dirigeant important dans le secteur bitcoin(Jack Mallers) quitte son poste, dans un contexte où un projet de fusion entre plusieurs entreprises liées à Tether(la plus grosse cryptomonnaie stable au monde) tombe à l'eau. États - Unis : les investisseurs parient de plus en plus qu'une grande loi encadrant les cryptomonnaies pourrait être votée cette année, après une rumeur (non confirmée) d'un compromis politique avec l'administration Trump. Cet espoir a fait remonter les prix des cryptomonnaies. Royaume - Uni : le gouvernement enquête sur le fait que certaines banques refusent d'ouvrir des comptes aux entreprises du secteur crypto, ou compliquent leurs opérations bancaires — une pratique critiquée qui freine le développement du secteur.",
  },


  // ──────────────────────────────────────────────
  //  BILAN DE LA SEMAINE
  // ──────────────────────────────────────────────
  semaine: {
    titre: "Une semaines bien mouvementé",

    intro: "La semaine écoulée a été marquée par des turbulences significatives sur le marché des cryptomonnaies, avec des fluctuations de prix notables et des développements réglementaires qui ont capté l'attention des investisseurs. Malgré ces défis, certains segments du marché ont montré des signes de résilience, offrant des opportunités pour ceux qui restent informés et stratégiques dans leurs décisions d'investissement.",

    marche: {
      btc_7j: "2.5%",
      eth_7j: "7.8%",
      // dominance: "58,1 %",
      commentaire: "Hausse "
    },

    evenements: [
      "Clarity Act date de fin le 10 aout",
      "surveiller Quivalis",
      "Le quantique , la cryptomonaie dois ce mefier BTC dois etre ameliorer pour resister aux attaque quantique",
      "60 prochains jours : Durée de la trêve prolongée pendant laquelle les discussions pour un accord final vont continuer. fin le 30 juillet.",
      "MiCa change des lignes a surveiller",
      "31 juillet : date limite pour les mineurs de rediriger leur hashrate avant la fermeture du pool de minage SBI Crypto.",
      "fin d'été l'OUSD",
      "a mise à jour des terminaux de paiement (TPE) : Le géant Ingenico (qui fabrique la quasi-totalité des terminaux de cartes bleues que tu vois dans les magasins en France) a déjà créé des logiciels pour intégrer les paiements crypto et stablecoins directement sur l'écran du terminal. Les commerçants n'ont plus qu'à activer l'option.",
      "La réglementation MiCA (l'harmonisation européenne) : L'Europe a mis en place des lois ultra-strictes pour encadrer tout ça. Cela donne le feu vert légal absolu aux banques pour intégrer ces technologies dans leurs applications classiques (comme l'application de la Caisse d'Épargne ou du Crédit Agricole).",
    ],

    actualites: [
      "Le parlement russe adopte une loi sur le marché des cryptomonnaies avec un plafond annuel de 3 800 $ pour les investisseurs particuliers Alors que les citoyens ne peuvent toujours pas utiliser le Bitcoin pour acheter des produits d'épicerie, le Kremlin autorise officiellement les entreprises à utiliser des jetons numériques pour contourner les sanctions et autres obstacles au commerce mondial.",
      "Augustus lève 180 millions de dollars pour créer une banque de compensation pour l'ère de l'IA et des stablecoins La société, récemment valorisée à 1 milliard de dollars, vise à remplacer la banque correspondante traditionnelle par une infrastructure toujours disponible qui connecte les systèmes de paiement traditionnels et les stablecoins. Augustus, une startup développant une banque de compensation agréée au niveau fédéral pour les fintechs et les institutions financières, a déclaré il a levé 180 millions de dollars pour développer son infrastructure de paiement en dollars alors que les stablecoins redéfinissent la finance mondiale",
      "Le PDG de MoneyGram déclare que la blockchain fonctionne mieux lorsque les clients ne savent pas qu'elle est présente Dans une interview accordée à CoinDesk, le PDG de MoneyGram, Anthony Soohoo, a déclaré que leur stratégie blockchain est passée d’une phase d’expérimentation initiale à un effort plus large visant à moderniser l’infrastructure des paiements mondiaux de l’entreprise.",
      "Jack Mallers démissionne de son poste de PDG de XXI Capital alors que les plans de Tether de fusionner trois entreprises bitcoin échouent",
      "Les chances de Clarity augmentent à 43 % sur Polymarket après des rapports non vérifiés indiquant que Trump aurait accepté un accord d’éthique Les parieurs ont porté la probabilité d’adoption du projet de loi sur la structure du marché crypto à 43 % cette année, en hausse par rapport à un creux historique la semaine dernière, bien qu’aucun texte de loi n’ait encore été publié.",
      "Les marchés crypto rebondissent grâce au rapport de progression de Clarity et au redressement des actions technologiques asiatiques La spéculation selon laquelle le Président Donald Trump aurait accepté une disposition éthique cruciale pour le projet de loi sur la structure du marché des cryptomonnaies a soutenu les gains.",
      "Le Parlement britannique lance une enquête sur le goulet d'étranglement bancaire pour les entreprises crypto Le Groupe parlementaire multipartite sur les crypto-monnaies et les actifs numériques du Royaume-Uni (APPG) se concentre sur les banques qui ont refusé l'ouverture de comptes aux entreprises crypto ou qui ont imposé des restrictions sur les transactions en crypto-monnaies.",

    ],
    // analyse: 
    conclusion: "Semaine dominée par l’attentisme, les risques liés à la régulation, les enjeux de sécurité, et une forte activité sur l’écosystème tokens/DeFi. Urgence : surveiller la sortie réglementaire US, la sécurité contractuelle et les flux au sein du RWA..",
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



    conclusion: "Le mois de mai se termine sur une note défensive. Le marché a besoin d'un nouveau catalyseur frais pour casser sa tendance baissière actuelle. Sur Polymarket, les parieurs misent désormais à 85 % sur un retour du Bitcoin à 70 000 $ avant de revoir les 90 000 $."
  }

}
