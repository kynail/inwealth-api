module.exports = {
  pisteHolding: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    conditionEnfUn,
    conditionEnfDeux,
    conditionPetitEnfant,
    groupeOuiNon,
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
    this.conditionEnfDeux = conditionEnfDeux
    this.conditionPetitEnfant = conditionPetitEnfant
    this.groupeOuiNon = groupeOuiNon
    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}


