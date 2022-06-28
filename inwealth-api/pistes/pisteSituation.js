module.exports = {
  pisteSituation: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    marieouinon,
    situation,
    situation2,
    pisteExperte,
    pistePrioritaire,
    pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url

    this.residenceFiscale = residenceFiscale

    this.parcoursCeder = parcoursCeder
    this.parcoursDonner = parcoursDonner

    this.marieouinon = marieouinon

    this.situation = situation
    this.situation2 = situation2 // une piste peut s'appliquer à plusieurs situation sinon return nil

    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
