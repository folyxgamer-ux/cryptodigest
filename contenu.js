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
    titre: "Consolidation après le choc",

    intro: "Après être tombé sous les 60 000 $ hier, le Bitcoin (BTC-USD) montre des signes de stabilisation.",

    marche: {
      btc: "$ 60 700",
      eth: "$1 554 ",
      tendance: "Baissier",
      commentaire: "Le marché affiche une santé en baisse, quand ca descend ca remonte apres"
    },

    alertes: [
      "Clarity Act date de fin le 6 juillet",
      "30 juin echeance MiCA",
      "surveiller Quivalis"

    ],

    actualites: [
      "Bitcoin : Il s'échange actuellement autour de 53 100 € (~57 400 $), regagnant environ 1,2 % par rapport au point bas de la veille.",
      "Ethereum (ETH-USD) : Suit une trajectoire similaire, se maintenant au-dessus des 3 400 $. La communauté surveille de près l'accumulation de tokens par les institutions sur les plateformes de staking liquide.",
      "Expansion : De nouveaux fonds de trésorerie tokenisés ont été annoncés sur les réseaux de couche 2 (Layer 2) comme Base et Arbitrum.",
      "Performance : Les tokens liés aux infrastructures RWA, tels que Chainlink (NASDAQ:LINK) et Ondo Finance, affichent une meilleure résistance que le reste du marché DeFi classique.",
      "Solana (SOL-USD) : Après sa hausse notable d'hier, Solana subit une légère prise de profit mais conserve son statut de favori pour les transactions à haute fréquence et les memecoins de nouvelle génération.",
      "Layer 2 : L'activité sur les réseaux secondaires d'Ethereum atteint des sommets, portée par des frais de transaction extrêmement bas suite aux optimisations techniques de 2026.",
      "Capitalisation totale : Environ 2 502 à 2 511 milliards de dollars, avec une progression de 2,4 % sur la dernière journée",
      "Législation US : Le GENIUS Act est désormais loi, encadrant les émetteurs de stablecoins, tandis que le CLARITY Act progresse avec un soutien bipartisan",
      "raken et MiCA : En Europe, Kraken confirme sa stratégie de 'sérieux' en étant totalement conforme à la réglementation MiCA, capitalisant sur la clarté réglementaire pour regagner des parts de marché",
      "Ethereum, le Coffre-Fort : Il reste le leader incontesté en capital avec 55,6 milliards de dollars de TVL DeFi (68 % du marché mondial)",
      "Une vague massive de recrutements révèle que les sociétés de trading ne considèrent plus Polymarket comme un simple outil de pari de niche Alors que l'augmentation des volumes sur Polymarket et Kalshi attire les sociétés quantitatives vers les marchés de prédiction, celles-ci ne se concentrent pas sur les résultats des événements ; elles exploitent plutôt les inefficiences du marché pour en tirer profit.",
      "Le président exécutif de Strategy a soutenu que quatre camps distincts jouent chacun un rôle vital dans le succès à long terme du bitcoin.",
      "Les flux sur les plateformes d'échange et les mouvements de stablecoins lors de la vente de cette semaine ne révèlent aucune fuite massive de capitaux quittant les cryptomonnaies pour se diriger vers le cash. Des plateformes telles que Robinhood et Coinbase ne publieront pas leurs chiffres avant le mois de juillet.",
      "Le chercheur ayant découvert le bug de Zcash grâce à l'IA ajoute Monero à sa file d'audit Taylor Hornby, qui a découvert la faille Orchard ayant fait chuter Zcash de 38 %, affirme que d’autres cryptomonnaies axées sur la confidentialité figurent également sur sa liste.",


    ],

    conseil: "faite attention la ou vous acheter et ce que vous achetr",

    conclusion: "Le marché reste dans une phase de consolidation après le choc initial. Les investisseurs adoptent une approche prudente, surveillant de près les développements réglementaires et les mouvements institutionnels. La semaine à venir sera cruciale pour déterminer si cette stabilisation se transformera en une reprise durable ou si la pression baissière continuera à dominer."
  },


  // ──────────────────────────────────────────────
  //  BILAN DE LA SEMAINE
  // ──────────────────────────────────────────────
  semaine: {
    titre: "BiLan claque géopolitique",

    intro: "Si on prend du recul sur les 7 derniers jours, la baisse se confirme avec une perte moyenne de 4 % à 5 % sur les actifs majeurs.",

    marche: {
      btc_7j: "-3.7 %",
      eth_7j: "-4.4%",
      // dominance: "58,1 %",
      commentaire: "Si on prend du recul sur les 7 derniers jours, la baisse se confirme avec une perte moyenne de 4 % à 5 % sur les actifs majeurs."
    },

    evenements: [
      "Jeudi 5 juin — Rapport emploi US (NFP) 14h30",
      "Vendredi 6 juin — Conférence Consensus 2026 à Austin"
    ],

    actualites: [
      "Le point de rupture : La chute sous les 76 000 $ a été provoquée en début de semaine par les frappes militaires américaines au Moyen-Orient. Cela a relancé les craintes de l'inflation globale, forçant les capitaux à fuir les actifs risqués.",
      "La surprise BNB : Au milieu du rouge, la BNB Chain a sauvé les meubles cette semaine grâce à l'annonce historique du dépôt de l'ETF Spot par VanEck, ce qui lui a permis de surperformer temporairement le reste des altcoins.",
      "L'indice de Peur : L'indicateur Fear & Greed s'est enfoncé cette semaine dans la zone de la 'Peur' à 30/100. Les traders particuliers ont déserté les marchés à court terme.",
    ],

    // analyse: "💡 Le cycle semble confirmé. Après le halving d'avril 2024, nous suivons le schéma classique avec une explosion 12-18 mois après. Les signaux on-chain (NUPL, MVRV) pointent vers un sommet de cycle autour de Q1 2027. Restez investis mais gérez le risque.",

    // conclusion: "Semaine très positive. Le marché retrouve de la confiance. La semaine prochaine sera décisive avec les NFP et la conférence Consensus."
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
      "HYPE"
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
