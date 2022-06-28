module.exports = {
  pisteRegimeMat: function (
    nomPiste,
    url,
    residenceFiscale,
    parcoursCeder,
    parcoursDonner,
    situation,
    situation2,
    situation3,
    cteLegale,
    cteUniverselle,
    separationBien,
    participationAcquet,
    pisteExperte,
    pistePrioritaire,
    pisteNonPrioritaire,
  ) {
    this.nomPiste = nomPiste
    this.url = url
    this.residenceFiscale = residenceFiscale
    this.parcoursCeder = parcoursCeder
    this.parcoursDonner = parcoursDonner
    this.situation = situation
    this.situation2 = situation2 // une piste peut s'appliquer à plusieurs situation sinon return nil
    this.situation3 = situation3
    this.cteLegale = cteLegale
    this.cteUniverselle = cteUniverselle
    this.separationBien = separationBien
    this.participationAcquet = participationAcquet
    this.pisteExperte = pisteExperte
    this.pistePrioritaire = pistePrioritaire
    this.pisteNonPrioritaire = pisteNonPrioritaire
  },
}
