// ============================================================
//  CRYPTODIGEST — Fichier de contenu
//  Édite ce fichier dans VSCode, puis ouvre index.html
//  dans ton navigateur (double-clic ou Live Server).
//  Mise à jour : 31 juillet 2026
// ============================================================

const CRYPTO_DATA = {

  // ──────────────────────────────────────────────
  //  RÉSUMÉ DU JOUR
  // ──────────────────────────────────────────────
  jour: {
    titre: "Powell laisse place à Warsh : le marché encaisse sa première vraie dissidence de la Fed",

    intro: "Le marché crypto digère aujourd'hui les secousses de la semaine : la Fed a maintenu ses taux mercredi avec un vote historiquement divisé (9 contre 3, du jamais-vu depuis 10 ans), et le trading institutionnel a franchi un cap symbolique en représentant désormais 72% de tout le volume crypto échangé. Pendant ce temps, un exploit DeFi de 24 millions de dollars sur Ostium rappelle que la vigilance technique reste de mise, même en pleine phase de maturation du secteur.",

    marche: {
      btc: "$63 650",
      eth: "$1 877",
      tendance: "*baissier court terme",
      commentaire: "Repli après le pic à 67 000$ de la semaine dernière, dans le sillage de la décision de la Fed et d'un dégonflement des flux ETF."
    },

    alertes: [
      "Clarity Act — échéance de la trêve sénatoriale le 10 août",
      "31 juillet (aujourd'hui) : date limite pour les mineurs redirigeant leur hashrate avant la fermeture du pool SBI Crypto",
      "Fin d'été : lancement attendu du token Open USD (OUSD)",
      "Le risque quantique : le Bitcoin devra à terme être renforcé pour résister aux futures attaques d'ordinateurs quantiques",
      "MiCA : nouvelles lignes directrices européennes à surveiller",
      "TPE Ingenico : logiciel de paiement stablecoin déjà prêt, activable par les commerçants français",
    ],

    actualites: [
      "La Fed maintient ses taux entre 3,50% et 3,75% pour la 5e réunion consécutive, lors de la première décision présidée par Kevin Warsh (confirmé au Sénat 54-45 après le départ de Powell) — 3 membres ont voté pour une hausse, une dissension inédite depuis 10 ans.",
      "Le trading institutionnel atteint un niveau record de 72% du volume total du marché crypto selon CoinDesk, réduisant la volatilité extrême historique du secteur.",
      "La plateforme de trading décentralisé Ostium subit un exploit de 24 millions de dollars — les smart contracts eux-mêmes n'étaient pas en cause selon les premiers éléments.",
      "Morgan Stanley lance des ETF Ethereum et Solana à seulement 0,14% de frais avec option de staking, défiant BlackRock sur son propre terrain.",
      "Les ETF Bitcoin prolongent leur série de sorties nettes entamée le 23 juillet : 526 millions de dollars envolés en quatre séances.",
    ],

    conseil: "Dans un marché où les institutionnels pèsent désormais 72% des volumes, les mouvements de prix reflètent de plus en plus les arbitrages de Wall Street (Fed, ETF, rotation BTC/ETH) plutôt que la spéculation retail pure. Garde un œil sur les flux ETF quotidiens (Farside Investors) — ils sont devenus un baromètre plus fiable du sentiment de marché que les réseaux sociaux.",

    conclusion: "Journée de digestion post-Fed, sans panique mais avec une vraie nervosité institutionnelle. Le vote 9-3, du jamais-vu depuis une décennie, signale des tensions internes à la Fed qui pourraient peser sur la visibilité macro des prochaines semaines — un facteur à surveiller autant que les catalyseurs propres à la crypto.",
  },


  // ──────────────────────────────────────────────
  //  BILAN DE LA SEMAINE
  // ──────────────────────────────────────────────
  semaine: {
    titre: "Semaine du couperet : Fed historique, ETF en fuite et BitMEX tire sa révérence",

    intro: "Semaine chargée en catalyseurs macro et structurels. Le Bitcoin a oscillé entre 63 000$ et 67 000$ au gré des annonces, la Fed a livré sa décision la plus disputée depuis 10 ans, et le secteur a vu à la fois un symbole de maturité (72% de volumes institutionnels) et un symbole de fin d'époque (la fermeture annoncée de BitMEX après 11 ans).",

    marche: {
      btc_7j: "-3.2%",
      eth_7j: "-2.0%",
      commentaire: "Semaine en repli, marquée par une sortie nette de 526 M$ sur les ETF Bitcoin en 4 séances et une rotation institutionnelle prudente entre BTC et ETH."
    },

    evenements: [
      "Clarity Act — date limite de la trêve sénatoriale : 10 août",
      "31 juillet : fermeture du pool de minage SBI Crypto — derniers jours pour rediriger le hashrate",
      "Le risque quantique reste une échéance de fond à surveiller pour la robustesse à long terme du Bitcoin",
      "MiCA : nouvelles lignes directrices européennes en préparation",
      "Fin d'été : lancement attendu du token Open USD (OUSD)",
    ],

    actualites: [
      "BitMEX annonce la fermeture de la plateforme au 23 septembre 2026, après 11 ans d'activité — trading en mode 'reduce-only' dès le 26 août, aucun repreneur annoncé.",
      "La Fed tient sa décision de politique monétaire la plus disputée en 10 ans (vote 9-3), sous la présidence de Kevin Warsh, dans un climat de tension avec la Maison Blanche sur le rythme des baisses de taux.",
      "Le trading institutionnel crypto atteint un record de 72% du volume total mondial, marquant un tournant structurel pour la stabilité du secteur.",
      "Les ETF Bitcoin spot US basculent en sorties nettes à partir du 23 juillet, effaçant 526 millions de dollars en quatre séances, après plusieurs semaines de flux positifs.",
      "Les ETF Ethereum affichent malgré tout un bilan mensuel positif (+342,9 millions de dollars depuis début juillet), même si la dernière séance de la semaine est repassée dans le rouge (-32,9 M$).",
      "Morgan Stanley dégaine ses ETF Ethereum et Solana à 0,14% de frais avec staking inclus, une offensive directe contre la domination de BlackRock sur ce segment.",
    ],

    conclusion: "Semaine charnière : la fin de BitMEX ferme symboliquement le chapitre du 'Far West' crypto à fort levier, pendant que la Fed rappelle que la macro US reste un risque à part entière pour les marchés — 312 millions de dollars de liquidations ont déjà sanctionné les positions trop optimistes cette semaine. À surveiller : la réaction des flux ETF dans les prochains jours pour jauger si la sortie nette est un ajustement ponctuel ou le début d'une tendance plus longue.",
  },


  // ──────────────────────────────────────────────
  //  BILAN DU MOIS
  // ──────────────────────────────────────────────
  mois: {
    titre: "Juillet 2026 : l'institutionnalisation franchit un nouveau palier, malgré des montagnes russes réglementaires",

    intro: "Juillet aura été le mois où la bascule institutionnelle est devenue mesurable et incontestable (72% des volumes), tout en révélant ses propres failures de croissance : dépôt et suspension express des modèles Claude Mythos/Fable, retrait de Binance de sa demande MiCA en Grèce, fermeture de BitMEX, et une Fed historiquement divisée en toute fin de mois. Entre ces secousses, les briques structurantes (chartes bancaires Circle/Ripple/Paxos, ETF à bas coûts de Morgan Stanley, ouverture de Vanguard) ont continué de s'empiler.",

    marche: {
      btc_mois: "≈ -2 % (de ~65k à ~63,6k)",
      eth_mois: "≈ -3 % (de ~1 930$ à ~1 877$)",
      fear_greed: "Neutre à prudent",
      commentaire: "Mois en dents de scie : creux à 62 500$ le 13 juillet (tensions Iran/USA), pic à plus de 67 000$ mi-juillet porté par les flux ETF, puis repli en fin de mois après la décision de la Fed."
    },

    coins_surveiller: [
      "BTC",
      "ETH",
      "SOL",
      "HYPE"
    ],

    faits_marquants: [
      "Institutionnalisation record : le trading institutionnel a atteint 72% du volume total du marché crypto fin juillet, un niveau jamais vu, réduisant mécaniquement la volatilité extrême historique du secteur.",
      "Bascule réglementaire américaine : Circle, Ripple et Paxos ont obtenu leur charte de banque de dépôt fédérale (OCC) le 10 juillet, renforçant la légitimité institutionnelle des stablecoins USDC et consorts — sans toutefois leur donner une garantie de dépôt façon FDIC.",
      "Le Clarity Act progresse mais reste suspendu : Trump aurait accepté une clause d'éthique clé réclamée par les sénateurs Lummis et Moreno, faisant grimper les probabilités d'adoption sur Polymarket de 33% à 43-48% — le texte doit encore franchir le Sénat avant la pause du 10 août.",
      "Fin d'une époque : BitMEX, pionnier des dérivés crypto à effet de levier, a annoncé sa fermeture définitive au 23 septembre après 11 ans, plombé par son passif réglementaire (AML) plutôt que par un problème de sécurité.",
      "Vanguard change de doctrine : le géant historiquement le plus hostile à la crypto a ouvert l'accès aux ETF crypto spot à ses 50 millions de clients et recrute un responsable dédié aux actifs numériques.",
      "Binance recule face à MiCA : la plateforme a retiré sa demande de licence en Grèce fin juin, anticipant un refus lié au passif réglementaire de CZ — un revers symbolique pour le plus gros exchange mondial en Europe.",
      "Rotation ETF en dents de scie : après des sorties nettes de plus de 4 milliards de dollars fin mai/début juin, les ETF ont connu un rebond mi-juillet (+105 M$ sur l'ETH en une semaine) avant une nouvelle vague de sorties fin juillet (-526 M$ sur le BTC en 4 séances).",
    ],

    conclusion: "Juillet confirme la tendance de fond de 2026 : la crypto devient un marché de grands acteurs institutionnels avant tout, avec une volatilité en baisse structurelle mais toujours ponctuée de secousses réglementaires (MiCA, Clarity Act) et politiques (Fed divisée). Le mois d'août s'annonce charnière avec l'échéance du Clarity Act le 10 et la fermeture de BitMEX qui se profile en toile de fond.",
  }

}