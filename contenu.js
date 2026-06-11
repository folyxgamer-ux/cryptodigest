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
      "Lancement des contrats à terme sur indices crypto CME Group a lancé des contrats à terme sur indices Nasdaq Crypto réglés en espèces. Chaque contrat suit simultanément la performance du Bitcoin, de l'Ethereum, du Solana, du XRP et de quatre autres actifs numériques majeurs",
      "Lancement de fonds thématiques sur l'espace Global X a annoncé la création du Global X Space Tech ETF(ASX: MOON) pour offrir une exposition à l'écosystème spatial commercial. BlackRock a lancé l'iShares Space Technologies UCITS ETF (STAR), qui suit l'indice STOXX Global Space Satellites and Drones Index. Le fonds STAR permet une intégration rapide des entreprises entrant en bourse, souvent dans un délai de 10 à 30 jours après leur cotation.",
      "Expansion stratégique en Inde La coentreprise Jio BlackRock Asset Management prévoit de lancer ses premiers ETF en Inde dès le mois d'août. Le groupe cible le marché indien, où les fonds passifs représentent actuellement environ 18, 5 % des actifs gérés du secteur des fonds communs de placement. Jio BlackRock prévoit également de développer des produits transfrontaliers au sein de la zone franche financière de GIFT City pour attirer les investisseurs internationaux.",
      " U.S. Tiger Research a fixé mardi une fourchette de valorisation à long terme pour le Bitcoin entre 227.000 $ et 378.000 $ par unité, sur la base d’une hypothèse selon laquelle l’actif numérique capterait entre 15 % et 25 % de la valeur totale du marché de l’or au fil du temps.",
      "L’analyste Bo Pei de la firme a indiqué que cette thèse suppose que le Bitcoin devienne une allocation minoritaire significative par rapport à l’or auprès des institutions, des gestionnaires de patrimoine privé et des ménages. Le cadre de valorisation repose sur une capitalisation boursière illustrative de l’or de 31.800 milliards $ et sur l’offre fixe de 21 millions de bitcoins.",
      "Jason Somensatto, directeur de la politique chez Coin Center, a plaidé devant la Commission des voies et moyens de la Chambre des représentants pour une exonération des gains en capital sur les transactions en cryptomonnaies inférieures à 600 dollars. Cette mesure permettrait aux utilisateurs d'effectuer des achats du quotidien avec du Bitcoin sans avoir à déclarer les plus-values ou moins-values réalisées sur chaque transaction.",
      "Le Parlement japonais a adopté en première lecture un projet de loi classant les crypto-actifs comme instruments financiers. Ce cadre juridique harmonisera les règles de trading avec celles des actions, incluant une imposition des plus - values plafonnée à 20 % à l'horizon 2028. La législation durcit les sanctions contre le délit d'initié et les ventes non enregistrées, dont les peines maximales pourraient atteindre dix ans d'emprisonnement.",
      "Impact sur le marché et les produits financiers La nouvelle classification ouvre la voie à la création de fonds négociés en bourse(ETF) basés sur les crypto - monnaies, avec des premières cotations attendues dès l'année prochaine via le Japan Exchange Group.",
      "Le secteur des échanges crypto, qui compte actuellement 27 acteurs comme Binance Japan, Coincheck et BitFlyer, devrait subir une consolidation significative en raison des exigences accrues en matière d'audit. L'Agence des services financiers soutient cette transition pour stimuler l'innovation tout en assurant une croissance saine du marché national.",
      "Autorisation de Coinbase pour les contrats à terme Le 10 juin 2026, le PDG de Coinbase, Brian Armstrong, a annoncé l'approbation réglementaire pour proposer des contrats à terme perpétuels sur cryptomonnaies aux États-Unis.",
      "Cette mesure permet à Coinbase d'unifier les liquidités américaines et internationales tout en offrant un cadre conforme aux normes nationales. Nouveau dépôt d'ETF Bitcoin par Hedgeye Hedgeye Asset Management a déposé une demande auprès de la SEC le 10 juin 2026 pour un ETF Bitcoin couvert utilisant des stratégies d'options. Ce produit vise à limiter le risque de baisse et à générer des rendements grâce à une gestion active, complétant ainsi la gamme existante de la firme comme KSPY, HEFT et ADDS.",
      "DBS Bank proposera le trading de 'DBS Physical Gold Tokens' à ses clients particuliers à partir du second semestre 2026. Chaque jeton est adossé à un gramme d'or physique conservé dans un coffre-fort de la banque à Singapour. Le produit sera disponible sur la plateforme digibank et pourrait être étendu au DBS Digital Exchange.",
      "Crypto pour les Conseillers : ETF Crypto Les ETF crypto mondiaux ont connu des sorties importantes en mai, mais les expositions diversifiées ont montré une résilience relative ; nous analysons ce que les données indiquent pour les investisseurs à long terme.",
      "Un projet de loi de la Chambre des représentants des États-Unis créerait une task force contre le vol de cryptomonnaies regroupant plusieurs agences d’application de la loi Une nouvelle législation proposée par un duo bipartisan créerait un groupe multipartite sous l'autorité du procureur général des États-Unis pour prendre la tête des affaires de vol de cryptomonnaies.",
      "Les actions de SpaceX arrivent sur Solana le même jour que leur introduction en bourse sur le Nasdaq Les entreprises rendant cela possible déclarent que les actions éligibles peuvent également être reconverties en tokens, créant ainsi un pont entre les comptes de courtage traditionnels et les marchés basés sur la blockchain.",
      "Le développeur de Canton Network lève 355 millions de dollars pour intégrer Wall Street sur la blockchain L'investissement intervient alors que les blockchains conçues pour les grandes banques et institutions connaissent un engouement, avec Tempo de Stripe et Arc de Circle levant des centaines de millions de dollars.",
      "Tether conduit une levée de fonds de 1,4 milliard de dollars dans la société allemande de robotique Neura L’investissement s’inscrit dans le cadre de l’expansion du géant des stablecoins vers des secteurs en dehors de la cryptomonnaie.",
      "Ondo Finance recrute l'ancien directeur des ETF d'Invesco pour développer des produits d'investissement onchain John Hoffman dirigera l'expansion d'Ondo, passant de la tokenisation d'actifs individuels à des portefeuilles d'investissement complets et des stratégies.",
    ],

    conseil: "Pour les investisseurs, il est essentiel de rester informé des développements réglementaires et économiques qui pourraient influencer le marché des cryptomonnaies. La diversification du portefeuille et la gestion prudente des risques sont plus importantes que jamais dans ce contexte de volatilité accrue. Il est également recommandé de suivre de près les indicateurs techniques et fondamentaux pour identifier les opportunités d'achat ou de vente, tout en gardant à l'esprit que le marché peut être imprévisible à court terme.",

    conclusion: "En conclusion, bien que le marché des cryptomonnaies ait traversé une période de turbulence, les signes de stabilisation et les développements positifs suggèrent que les investisseurs pourraient être sur la voie d'une reprise. Cependant, la prudence reste de mise, et il est crucial de rester vigilant face aux évolutions du marché et aux facteurs externes qui pourraient continuer à influencer les prix dans les semaines à venir."
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
