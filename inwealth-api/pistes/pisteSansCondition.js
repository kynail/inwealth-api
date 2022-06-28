module.exports = {
  pisteSansConditions: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    sansCondition,
    pisteExperte,
    pistePrioritaire,
    pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url
    this.residenceFiscale = residenceFiscale
    this.parcoursCeder = parcoursCeder
    this.parcoursDonner = parcoursDonner
    this.sansCondition = sansCondition
    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },

  // listePisteSansCondition = [
  //     new pisteSansConditions("LBO", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Réduction de capitale seule", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Remboursement du compte courant", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Fiscalité IPV  *tous les régimes sont abordés -> inciter la visio", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Crédit vendeur", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions( "Mise en place d’une société de prestations de services", "", true, true,true, true, false, false, true),
  //     new pisteSansConditions("Vous redéployer dans de nouvelles activités économiques", "", true, true, true, true, false,false, true),
  //     new pisteSansConditions("Investir au sein d'un PEA", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("FCP dédié", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Avance patrimoniale", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Contrat de capitalisation à l'IS version", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("L'adoption simple", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Assurance prévoyance décès", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Rédiger un mandat à effet posthume", "", true, true, true, true, false, false, true),
  //     // pisteSansConditions(enumNamePisteFr.protectionFuture.rawValue, "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Rédiger un testament", "", true, true, true, true, false,false, true),
  //     new pisteSansConditions("Mise en place d'un mandat de protection future", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Acquisition immo exploitation en démembrement", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions( "Acquisition immobilière en nue-propriété - US bailleur social", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Acquisition immobilier locatif par le biais d'une SCI", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Développement immobilier locatif version longue", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Développement immobilier locatif par endettement", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Monuments historiques", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Option IS Sociétés civiles", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Lease Back", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Acquisition de l'immobilier professionnel", "", true, true, true, true, false, false, true),
  //     new pisteSansConditions("Apport SCI (IR) à une SCI (IS)", "", true, true, true, true, false, true, false),
  //     new pisteSansConditions("Crédit-bail immobilier", "http://aidefr.visiopage.fr/#Vue_2", true, true, true, true, true,false, false)
  // ]
}
