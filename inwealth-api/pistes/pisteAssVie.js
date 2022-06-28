module.exports = {
  pisteAssVie: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    regimeCte,
    regimeSdb,
    age,
    pisteExperte,
    pistePrioritaire,
    pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url

    this.residenceFiscale = residenceFiscale

    this.parcoursCeder = parcoursCeder
    this.parcoursDonner = parcoursDonner

    this.regimeCte = regimeCte
    this.regimeSdb = regimeSdb

    this.age = age // aprés 70 ans la condition est false. Donc les pistes avec un âge > 70 ans s'affichent

    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
