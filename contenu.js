// ============================================================
//  CRYPTODIGEST — Fichier de contenu
//  Édite ce fichier dans VSCode, puis ouvre index.html
//  dans ton navigateur (double-clic ou Live Server).
//  Mise à jour : 31 juillet 2026 — rattrapage semaine manquée
// ============================================================

const CRYPTO_DATA = {

  // ──────────────────────────────────────────────
  //  RÉSUMÉ DU JOUR (avec rattrapage de la semaine manquée)
  // ──────────────────────────────────────────────
  jour: {
    titre: "Piratage de l'education nationale : une semaine chargée",

    intro: "La semaine écoulée a été marquée par des événements significatifs dans le monde de la cryptomonnaie et de la cybersécurité. Le piratage de l'Éducation nationale a mis en lumière les vulnérabilités des systèmes informatiques, tandis que le marché des cryptomonnaies a connu des fluctuations notables, influencées par les décisions de la Réserve fédérale et les mouvements des flux ETF. Les investisseurs et les utilisateurs de portefeuilles doivent rester vigilants face aux risques émergents et aux développements réglementaires.",

    marche: {
      btc: "$63 957",
      eth: "$1 877",
      tendance: "*baissier court terme",
      commentaire: "Repli depuis le pic à 65 000$ cause du clarity."
    },

    alertes: [
      "Clarity Act — échéance de la trêve sénatoriale le 10 août",
      "8 aout : date limite pour les mineurs redirigeant leur hashrate avant la fermeture du pool SBI Crypto",
      "Faille Coldcard (Coinkite) : si tu utilises ce wallet, migre tes fonds en urgence via un canal sécurisé (voir actu du jour)",
      "Fin d'été : lancement attendu du token Open USD (OUSD)",
      "Le risque quantique reste une échéance de fond à surveiller pour la robustesse à long terme du Bitcoin",
      "MiCA : nouvelles lignes directrices européennes à surveiller",
    ],

    actualites: [
      "Hack de l’Éducation nationale : Une cyberattaque contre l’Éducation nationale aurait permis le vol des données personnelles de 1,22 million d’élèves et de 4,35 millions d’identifiants de personnels. Déjà derrière la revendication visant la DGFiP il y a quelques jours, le hacker ZeroBytes affirme avoir conservé pendant plusieurs jours un accès VPN à différents systèmes du ministère.",
      "Strategy a levé 334 millions de dollars via son programme ATM sur l'action MSTR la semaine dernière, mais n'a acheté aucun Bitcoin. L'argent sert à racheter du STRC, financer les dividendes préférentiels et renforcer la réserve en dollars. Un virage assumé pour Michael Saylor, qui laisse son stock de BTC intact",
      "Dans un billet publié ce 17 août, 5 économistes et analystes de la Banque centrale européenne posent une question qui dérange : l'euphorie autour de l'IA est-elle rationnelle, ou annonce-t-elle la prochaine bulle Internet ? Leur réponse est sans détour : une correction des marchés est probable. Et cette fois, les investisseurs européens sont directement exposés.",
      "BitMine Immersion Technologies confirme son statut de première trésorerie axée sur Ethereum (ETH) de la planète. La société dirigée par Thomas « Tom » Lee détient désormais 5,82 millions d'ETH, soit 4,8 % de l'offre en circulation. Elle se rapproche de plus en plus de son objectif symbolique de 5 % tous les ethers.",
      "Détenir un agrément MiCA ne confère pas l’immunité réglementaire et s’accompagne au contraire de nombreuses obligations. L’Österreichische Finanzmarktaufsicht (FMA), le gendarme financier autrichien, en a offert un exemple vendredi en annonçant avoir infligé une amende de 70 000 dollars à Bitpanda.",
      "Le protocole historique de la finance décentralisée, Compound, annonce un remaniement important de son équipe dirigeante, accompagné d’un programme de financement présenté comme le plus important de son histoire. Le but de cette opération : participer au développement d’une DeFi institutionnelle.",
      "Interpellée par un investisseur dont les 219 000 dollars placés dans MSTR ne valent plus que 60 000 dollars, Strategy refuse de donner la priorité aux actionnaires ordinaires. L’entreprise veut d’abord stabiliser STRC et développer son activité de crédit, quitte à demander encore plusieurs années de patience.",

    ],

    conseil: "Pour les détenteurs de cryptomonnaies, il est crucial de rester informés des développements récents et de prendre des mesures proactives pour sécuriser leurs actifs. La diversification des portefeuilles, la mise à jour régulière des logiciels de sécurité, et la vigilance face aux arnaques et aux vulnérabilités sont essentielles pour naviguer dans cet environnement volatil. Les investisseurs doivent également suivre de près les évolutions réglementaires, notamment le Clarity Act et les directives MiCA, afin d'anticiper les impacts potentiels sur le marché.",
    conclusion: "La semaine écoulée a été marquée par des événements significatifs dans le monde de la cryptomonnaie et de la cybersécurité. piratage de l'éducation nationale , la fin de BitMEX ferme le chapitre du 'Far West' crypto à fort levier, la faille Coldcard rappelle qu'aucun système n'est invulnérable même après des années sans incident, et la Fed historiquement divisée ajoute une vraie incertitude macro pour les semaines à venir. Le mois d'août s'annonce chargé avec l'échéance du Clarity Act le 10.",
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
      "8 aout : date limite pour les mineurs de rediriger leur hashrate avant la fermeture du pool de minage SBI Crypto.",
      "fin d'été l'OUSD",
      "a mise à jour des terminaux de paiement (TPE) : Le géant Ingenico (qui fabrique la quasi-totalité des terminaux de cartes bleues que tu vois dans les magasins en France) a déjà créé des logiciels pour intégrer les paiements crypto et stablecoins directement sur l'écran du terminal. Les commerçants n'ont plus qu'à activer l'option.",
      "La réglementation MiCA (l'harmonisation européenne) : L'Europe a mis en place des lois ultra-strictes pour encadrer tout ça. Cela donne le feu vert légal absolu aux banques pour intégrer ces technologies dans leurs applications classiques (comme l'application de la Caisse d'Épargne ou du Crédit Agricole).",
    ],

    actualites: [
      " Bitcoin oscille entre 61 500 $ et 64 500 $, sans franchir de nouveaux sommets, la volatilité reste modérée. Reprise technique sur ETF US (+197 M$) après huit semaines de sorties, soutien à la zone des 64 000 $ mais aucune tendance claire ne se dégage ; la prudence prévaut en attendant une sortie nette de la zone 60–70 k$",
      "Ethereum rebondit vers 1 800 $, boosté par les entrées sur les ETF américain, mais le marché reste prudent .",
      "Progression de la tokenisation : SWIFT lance officiellement son infrastructure blockchain (Hyperledger Besu x Chainlink CCIP) connectant 17 grandes banques pour des dépôts tokenisés, accélération notable du secteur RWA .",
      " DAC8 (UE) : collecte généralisée des données fiscales sur les détenteurs crypto depuis janvier, avec début des transferts inter-gouvernementaux en 2027. Risques d'exfiltration et de fuite des KYC documentés (ex : Ledger, Coinbase, Waltio) déjà observés .",
      "Virtual Protocol (VIRTUAL) s'envole (+16 %), migration majeure de tokens sur le cross-chain Chainlink, intégration Robinhood Chain IA. Volume à +385 % ; résistance clé à 0,65$ surveillée pour un breakout court terme .",
      "Crypto scams et hacks récurrents : attaque supply-chain sur jscrambler (npm), hameçonnage SecondFi, piratage Bonzo Lend (Hedera) via manipulation oracles, pertes cumulées importantes .",
      "CLARITY Act (régulation crypto US) : le texte piétine au Sénat (il manque 7 voix Démocrates), contexte polarisé par l'enrichissement crypto de Trump ; vote renvoyé, échéance critique avant le 10 août .",
      "Pression réglementaire accrue sur la DeFi (CFTC, CME, ICE tentent de forcer Hyperliquid à s'enregistrer), avec arbitrages attendus sans consensus législatif .",
      "Signalement de pression vendeuse si BTC repasse sous 61 k $, prudence de rigueur (analyse Santiment : pas d'accumulation whale, rally technique fragile) .",
      " Flambée du nombre de scams et sentiment exacerbé autour de l'impunité perçue, selon les retours d'utilisateurs .",
    ],
    conclusion: "Semaine dominée par l'attentisme, les risques liés à la régulation, les enjeux de sécurité, et une forte activité sur l'écosystème tokens/DeFi. Urgence : surveiller la sortie réglementaire US, la sécurité contractuelle et les flux au sein du RWA..",
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