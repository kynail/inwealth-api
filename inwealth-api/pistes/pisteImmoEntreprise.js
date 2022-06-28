module.exports = {
  pisteImmoEntreprise: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    conditionEnfUn,
    conditionImmoActifSociete,
    conditionImmoActifHorsSociete,
    pisteExperte,
    pistePrioritaire,
    pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url
    this.residenceFiscale = residenceFiscale
    this.parcoursCeder = parcoursCeder
    this.parcoursDonner = parcoursDonner
    this.conditionEnfUn = conditionEnfUn
    this.conditionImmoActifSociete = conditionImmoActifSociete
    this.conditionImmoActifHorsSociete = conditionImmoActifHorsSociete
    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
