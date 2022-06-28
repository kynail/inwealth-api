module.exports = {
  pisteHorizon: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    conditionEnfUn,
    conditionEnfDeux,
    inf1,
    entre1et3,
    entre3et4,
    entre4et6,
    sup6,
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
    this.inf1 = inf1
    this.entre1et3 = entre1et3
    this.entre3et4 = entre3et4
    this.entre4et6 = entre4et6
    this.sup6 = sup6
    this.groupeOuiNon = groupeOuiNon
    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
