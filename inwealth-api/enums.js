exports.residenceFiscaleEnum = {
  france: 'France',
  suisse: 'Suisse',
  belgique: 'Belgique',
  luxembourg: 'Luxembourg',
  monaco: 'Monaco',
}

exports.niveauFortuneEnum = {
  entre2et5: 'entre 2 et 5 M€',
  entre5et10: 'entre 5 et 10 M€',
  entre10et20: 'entre 10 et 20 M€',
  sup20: '> à 20 M€',
}

exports.paysEnum = {
  france: 'France',
  suisse: 'Suisse',
  belgique: 'Belgique',
  luxembourg: 'Luxembourg',
  monaco: 'Monaco',
  uk: 'Royaume-Uni',
  middleEast: 'Middle-East',
  russie: 'Russie',
  italie: 'Italie',
  espagne: 'Espagne',
  allemagne: 'Allemagne',
  portugal: 'Portugal',
}

exports.nationaliteEnum = {
  france: 'France', // "Vous êtes de nationalité : France"
  suisse: 'Suisse',
  belgique: 'Belgique',
  luxembourg: 'Luxembourg',
  monaco: 'Monaco',
  uk: 'Royaume-Uni',
  middleEast: 'Middle-East',
  russie: 'Russie',
  italie: 'Italie',
  espagne: 'Espagne',
  allemagne: 'Allemagne',
}

exports.civiliteEnum = {
  celibataire: 'Monsieur',
  divorce: 'Madame',
  veuf: 'Mademoiselle',
}

exports.situationEnum = {
  celibataire: 'Célibataire', // "Vous êtes célibataire"
  divorce: 'Divorcé(e)', // "Vous êtes divorcé(e)"
  veuf: 'Veuf(ve)', // "Vous êtes veuf(ve)"
  marie: 'Marié', // "Vous êtes mariés"
  pacse: 'Pacsé', // "Vous êtes pacsé"
  concubinage: 'Concubinage', // "Vous vivez en concubinage"
}

exports.regimeMatrimonialEnum = {
  communauteReduite: 'Communauté réduite aux acquêts', // "Votre régime matrimonial : communauté réduite aux acquêts"
  separationBien: 'Sépration de biens', // "Votre régime matrimonial : sépration de biens"
  participationAcquet: 'Participation aux acquêts', // "Votre régime matrimonial : participation aux acquêts"
  communauteUniverselle: 'Communauté universelle', // "Votre régime matrimonial : communauté universelle"
}

exports.competenceEnum = {
  avocat: 'AVOCAT',
  notaire: 'NOTAIRE',
  expertCompable: 'EXPERT-COMPTABLE',
  familyOffice: 'FAMILY-OFFICE',
  gerantPortefeuille: 'GÉRANT DE PORTEFEUILLE',
}

exports.detentionImmoExploitationEnum = {
  societe: "À l'actif de la société", // "Vous détenez de l'immobilier d'exploitation : à l'actif de la société"
  horsSociete: 'En dehors de la société', // "Vous détenez de l'immobilier d'exploitation : en dehors de la société"
  societeEtHorsSociete: "À l'actif et en dehors de la société", // "Vous détenez de l'immobilier d'exploitation : à l'actif et en dehors de la société"
}

exports.typeSocieteEnum = {
  sa: 'Société Anonyme (SA)',
  sarl: 'Société à Responsabilité Limitée (SARL)',
  sas: 'Société par Actions Simplifiée (SAS)',
  commandite: 'Société en commandite par actions',
}

exports.regimeFiscalEnum = {
  impotRevenu: 'Impôt sur le Revenu (IR)',
  impotSociete: 'Impôt sur les sociétés (IS)',
}

exports.secteurActiviteEnum = {
  industrie: 'Industrie',
  BTP: 'BTP',
  Negoce: 'Négoce et distribution',
  sante: 'Santé',
  restauration: 'Restauration',
  hotellerie: 'Hôtellerie',
  services: 'Services',
  informatique: 'Informatique',
  autre: 'Autres',
}

exports.pisteInfosEnum = {
  nlleActivite: {
    title:
      'Apporter vos titres à une société pour démarrer une nouvelle activité',
    objectif: 'PRÉPARER LA SOCIÉTÉ À LA TRANSMISSION',
    pages: [20, 21, 22, 23],
  },
  garantieActifPassif: {
    title: "Rédiger la clause de garantie d'actif passif",
    objectif: 'PRÉPARER LA SOCIÉTÉ À LA TRANSMISSION',
    pages: [24],
  },
  ipvFiscalite: {
    title: 'Céder les titres de PME de moins de 10 ans',
    objectif: 'MAITRISER VOTRE IMPOSITION',
    pages: [25, 26],
  },
  assuranceVie: {
    title: "Souscrire un contrat d'assurance vie",
    objectif: 'INVESTIR LE PRODUIT DE CESSION',
    pages: [27],
  },
  assVieIr: {
    title: "Effectuer des rachats périodiques sur un contrat d'assurance-vie",
    objectif: 'MAINTENIR VOTRE CONFORT DE VIE',
    pages: [28, 29, 30],
  },
  assVieAvant70Cte: {
    title: "Souscrire un contrat d'assurance-vie pour protéger vos proches",
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [],
  },
  assVieAvant70Sdb: {
    title: "Souscrire un contrat d'assurance-vie pour protéger vos proches",
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [],
  },
  inconnu1: {
    title: "Effectuer des rachats périodiques sur un contrat d'assurance vie",
    objectif: 'MAINTENIR VOTRE CONFORT DE VIE',
    pages: [],
  },
  donationAvantCessionEnfant: {
    title: 'Donner aux enfants des titres avant leur cession',
    objectif: 'TRANSMETTRE À VOS PROCHES',
    pages: [40, 41, 42, 43, 44],
  },
  fboImmoEntreprise: {
    title: "Céder l'immobilier d'entreprise à une SCI familiale",
    objectif: 'TRANSMETTRE À VOS PROCHES',
    pages: [45, 46, 47, 48, 49],
  },
  paiementDiffere: {
    title: 'Acquitter les droits de donation en différé et fractionné',
    objectif: 'DIFFERER VOTRE IMPOSITION',
    pages: [50],
  },
  remploiPdtCessionScpCapi: {
    title:
      'Souscrire un contrat de capitalisation : remploi du produit de cession démembré',
    objectif: 'INVESTIR LE PRODUIT DE CESSION',
    pages: [51],
  },
  dutreil: {
    title:
      "Conclure un Pacte Dutreil : 75% d'abattement sur l'assiette taxable",
    objectif: 'PRÉPARER LA SOCIÉTÉ À LA TRANSMISSION',
    pages: [52, 53, 54],
  },
  donationPpConjoint: {
    title: 'Donner au conjoint des titres avant leur cession',
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [55, 56],
  },
  ddv: {
    title:
      'Augmenter les droits du conjoint dans la succession : la donation au dernier vivant',
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [57],
  },
  devPatImmoEndettement: {
    title: 'Acquérir un bien immobilier locatif',
    objectif: 'DÉVELOPPER VOTRE PATRIMOINE PRIVÉ',
    pages: [61, 62, 63],
  },
  pacs: {
    title: 'Conclure un pacs',
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [64],
  },
  simplificationGroupe: {
    title: "Simplifier l'organigramme du groupe",
    objectif: 'PRÉPARER LA SOCIÉTÉ À LA TRANSMISSION',
    pages: [65, 66],
  },
  donationPetitEnfant: {
    title: 'Donner en faveur de vos petits-enfants',
    objectif: 'TRANSMETTRE À VOS PROCHES',
    pages: [67, 68],
  },
  fboImmo: {
    title: "Céder l'immobilier locatif à une SCI familiale",
    objectif: 'DÉVELOPPER VOTRE PATRIMOINE PRIVÉ',
    pages: [69, 70, 71],
  },
  steAcquet: {
    title: 'Aménager votre régime séparatiste : la clause de société acquêts',
    objectif: 'PROTÉGER VOS PROCHES',
    pages: [72],
  },
}
