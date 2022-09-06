// const User = require('../models/User');
const { generatedFileName } = require('../config')

const createDynamicPdfCH = require('../utils/createDynamicPdfCH')
const createDynamicPdfFR = require('../utils/createDynamicPdfFR')
const createDynamicPdfUK = require('../utils/createDynamicPdfUk')
const createDynamicPdfFr = require('../utils/createDynamicPdfFr2')



const db = require('../models')
const fs = require('fs')
const { publicPath } = require('../config')
const { pisteSansConditions } = require('../pistes/pisteSansCondition')
const { pisteDonation } = require('../pistes/pisteDonation')
const { pisteHolding } = require('../pistes/pisteHolding')
const { pisteHorizon } = require('../pistes/pisteHorizon')
const { pisteImmoEntreprise } = require('../pistes/pisteImmoEntreprise')
const { pistePetitsEnfants } = require('../pistes/pistePetitsEnfants')
const { pisteRegimeMat } = require('../pistes/pisteRegimeMat')
const { pisteSituation } = require('../pistes/pisteSituation')
const { pisteAssVie } = require('../pistes/pisteAssVie')
const { France } = require('../models')
const { profile } = require('console')
const pisteSansConditionCh = require('../pistes/pisteSansConditionCh')
const User = db.User
const Finance = db.Finance
const Professionnel = db.Professionnel
const Parcours = db.Parcours
const Piste = db.Piste
// const France = db.France

const listePisteSansCondition = [
  // new pisteSansConditions("lbo", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("reductionCapitalSeule", "", true, true, true, true, false, false, true),
  new pisteSansConditions(
    'assuranceVieIr',
    '',
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ),

  new pisteSansConditions(
    'modeTransmissionCh',
    '',
    false,
    true,
    true,
    true,
    true,
    false,
    false,
  ),

  new pisteSansConditions(
    'impotFortuneCh',
    '',
    false,
    true,
    true,
    true,
    true,
    false,
    false,
  ),

  new pisteSansConditions(
    'momentVenteCh',
    '',
    false,
    true,
    true,
    true,
    true,
    false,
    false,
  ),

  new pisteSansConditions(
    'valoriserCh',
    '',
    false,
    true,
    true,
    true,
    true,
    false,
    false,
  ),


  new pisteSansConditions(
    'estateUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'financingUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'holdRealEstateUks',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'sciUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'giftSciUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'taxesRatesUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),
  new pisteSansConditions(
    'inheritanceUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),
  new pisteSansConditions(
    'giftAndInheritanceUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'costUk',
    '',
    false,
    true,
    true,
    true,
    false,
    true,
    false,
  ),

  new pisteSansConditions(
    'assuranceVie',
    '',
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ),
  new pisteSansConditions(
    'garantieActifPassif',
    '',
    true,
    true,
    false,
    true,
    true,
    false,
    false,
  ),
  new pisteSansConditions(
    'ipvFiscalite',
    '',
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ),
  // new pisteSansConditions("creditVendeur", "", true, true, true, true, false, false, true),
  // new pisteSansConditions( "stePrestation", "", true, true,true, true, false, false, true),
  new pisteSansConditions(
    'nlleActivite',
    '',
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ),
  // new pisteSansConditions("pea", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("fcpDedie", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("avancePat", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("contraCapi", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("adoptionSimple", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("prevoyanceDeces", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("mandatPosthume", "", true, true, true, true, false, false, true),
  // pisteSansConditions(enumNamePisteFr.protectionFuture.rawValue, "", true, true, true, true, false, false, true),
  // new pisteSansConditions("testament", "", true, true, true, true, false,false, true),
  // new pisteSansConditions("protectionFuture", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("acquiImmoUsNp", "", true, true, true, true, false, false, true),
  // new pisteSansConditions( "acquiImmoUsNpBailleur", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("acquiImmoLocSci", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("devPatImmo", "", true, true, true, true, false, false, true),
  new pisteSansConditions(
    'devPatImmoEndettement',
    '',
    true,
    true,
    true,
    true,
    false,
    false,
    true,
  ),
  // new pisteSansConditions("monumentH", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("optionIsSc", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("leaseBack", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("acquiImmPro", "", true, true, true, true, false, false, true),
  // new pisteSansConditions("apportSciIrSciIs", "", true, true, true, true, false, true, false),
  // new pisteSansConditions("creditBail", "http://aidefr.visiopage.fr/#Vue_2", true, true, true, true, true,false, false),

  //cadre de gestion
  new pisteSansConditions(
    'fboImmo',
    '',
    true,
    true,
    true,
    true,
    false,
    false,
    true,
  ),
  
  // new pisteSansConditions("contratCapitalisation", "", true, true, true, true, false, true, false),
]


const listePisteDonation = [
  new pisteDonation(
    'donationAvantCessionEnfant',
    '',
    true,
    true,
    true,
    null,
    true,
    null,
    null,
    null,
    true,
    false,
    false,
  ),
  // new pisteDonation(
  //   'donationAvantCessionNp',
  //   '',
  //   true,
  //   true,
  //   true,
  //   null,
  //   true,
  //   null,
  //   null,
  //   null,
  //   true,
  //   false,
  //   false,
  // ),
  // new pisteDonation(
  //   'donationAvantCessionPp',
  //   '',
  //   true,
  //   true,
  //   true,
  //   null,
  //   true,
  //   null,
  //   null,
  //   null,
  //   true,
  //   false,
  //   false,
  // ),
  // new pisteDonation("clauseAdditionnelle", "", true, true, true, null, true, null, null, null, true, false, false),
  new pisteDonation(
    'paiementDiffere',
    '',
    true,
    true,
    true,
    null,
    true,
    null,
    null,
    null,
    false,
    true,
    false,
  ),
  // new pisteDonation("reductionCapitalUsNp", "", true, true, true, null, true, null, null, null, true, false, false),
  // new pisteDonation(
  //   'dmtgDonataire',
  //   '',
  //   true,
  //   true,
  //   true,
  //   null,
  //   true,
  //   null,
  //   null,
  //   null,
  //   false,
  //   true,
  //   false,
  // ),
  // new pisteDonation("reductionCapitalPostDonation", "", true, true, true, null, true, true, null, null, true, false, false),
  //#warning
  // new pisteDonation("precautionEnfantMineur", "", true, true, true, true, true, null,  null, null, true, false, false),
  // new pisteDonation("donationUst", "", true, true, true, null, true, true, null, null, true, false, false),
  // new pisteDonation("protectionEnfantHandicape", "", true, true, true, null, true, null, null, null, false, true, false),
  // new pisteDonation("protectionGenerationFuture", "", true, true, true, null, true, true, null, null, true, false, false),
  // new pisteDonation("reincorporationDonation", "", true, true, true, null, true, null, null, null, true, false, false),
  // new pisteDonation("donationImmo", "", true, true,  true, null,  true,  null,  null,  null, false, true, false),
  // new pisteDonation("donationNpMobilier", "", true, true, true,  null, true, null,  null, null, false, true, false),
  // new pisteDonation("familleRecomposee", "", true, true, true, null, true, null, null, true, true, false, false),
  // new pisteDonation("donFamiliaux", "", true, true, true, null, true, null, null, null, true, false, false),
  // new pisteDonation("fboImmoEnse", "", true, true, true, null, true, null, null, null, true, false, false),
  new pisteDonation(
    'remploiPdtCessionScpCapi',
    '',
    true,
    true,
    true,
    null,
    true,
    null,
    null,
    null,
    false,
    true,
    false,
  ),
  // new pisteDonation("raar", "", true, true, true, null, null, true, null, null, true, false, false),
]

const listePisteHolding = [
  new pisteHolding(
    'simplificationGroupe',
    '',
    true,
    true,
    true,
    null,
    null,
    null,
    true,
    true,
    false,
    false,
  ),
  // new pisteHolding("contraCapi", "", true, true, true, null, null, null, true, false, true, false)
]

const listePisteHorizon = [
  new pisteHorizon(
    'dutreil',
    '',
    true,
    true,
    true,
    true,
    null,
    null,
    null,
    null,
    null,
    'sup6',
    null,
    true,
    false,
    false,
  ),
]

const listePisteImmoEntreprise = [
  new pisteImmoEntreprise(
    'fboImmoEnse',
    '',
    true,
    true,
    true,
    true,
    true,
    false,
    false,
    true,
    false,
  ),
  // new pisteImmoEntreprise("leaseBack", "", true, true,  true, null, true, false, true, false, false),
  // new pisteImmoEntreprise("creditBail", "", true, true, true, null, true, false, true, false, false),
]

const listePistePetitsEnfants = [
  new pistePetitsEnfants(
    'donationPetitEnfant',
    '',
    true,
    true,
    true,
    true,
    true,
    true,
    false,
    false,
  ),
  // new pistePetitsEnfants("reincorporationDonationTrans", "", true, true, true, true, true, true, false, false),
]

const listePisteRegimeMat = [
  new pisteRegimeMat(
    'ddv',
    '',
    true,
    true,
    true,
    'marie',
    null,
    null,
    'communauteReduite',
    null,
    'separationBien',
    'participationAcquet',
    false,
    true,
    false,
  ),
  // new pisteRegimeMat("mariage", "", true, true, true, "Pacsé", "concubinage", null, null, null, null, null, false, true, false),
  // new pisteRegimeMat("signerPacs", "", true, true, true, "concubinage", null, null, null, null, null, null, false, true, false),
  new pisteRegimeMat(
    'steAcquet',
    '',
    true,
    true,
    true,
    'marie',
    null,
    null,
    null,
    null,
    'separationBien',
    'participationAcquet',
    false,
    true,
    false,
  ),
  // new pisteRegimeMat("cteUniverselle", "", true, true, true, "marie", null, null, null, "communauteUniverselle", null, null, false, true, false),
  new pisteRegimeMat(
    'donationPpConjoint',
    '',
    true,
    true,
    true,
    'marie',
    null,
    null,
    'communauteReduite',
    null,
    'separationBien',
    'participationAcquet',
    false,
    true,
    false,
  ),
  // new pisteRegimeMat("clausePreciput", "", true, true, true, "marie", null, null, "communauteReduite", null, "separationBien", "participationAcquet", false, true, false),
  // new pisteRegimeMat("clauseAlsacienne", "", true, true, true, "marie", null, null, "communauteReduite", null, "separationBien", "participationAcquet", false, true, false),
  // new pisteRegimeMat("assVieBacquet", "", true, true, true, "marie", null, null, "communauteReduite", null, null, null, false, true, false),
]
const listePisteSituation = [
  // new pisteSituation(
  //   'assuranceVie',
  //   '',
  //   true,
  //   true,
  //   true,
  //   false,
  //   null,
  //   null,
  //   true,
  //   false,
  //   false,
  // ),
  // new pisteSituation("mariage", "", true, true, true, null, "pacse", "concubinage", false, true, false),
  new pisteSituation(
    'signerPacs',
    '',
    true,
    true,
    true,
    false,
    'concubinage',
    null,
    false,
    true,
    false,
  ),
]
const listePisteAssVie = [
  new pisteAssVie(
    'assVieAvant70Sdb',
    '',
    true,
    true,
    true,
    null,
    'separationBien',
    true,
    false,
    true,
    false,
  ),
  new pisteAssVie(
    'assVieAvant70Cte',
    '',
    true,
    true,
    true,
    'communauteReduite',
    null,
    true,
    false,
    true,
    false,
  ),



]

exports.profilUser = (req, res) => {
  const user = {
    residenceFiscale: req.body.residenceFiscale,
    nationalite: req.body.nationalite,
    canton: req.body.canton,
    enjeu: req.body.enjeu,
    changementResidence: req.body.changementResidence,
    situationFamille: req.body.situationFamille,
    regimeMatrimonial: req.body.regimeMatrimonial,
    elementEtranger: req.body.elementEtranger,
    enfantMineur: req.body.enfantMineur,
    enfantMajeur: req.body.enfantMajeur,
    enfantHandicape: req.body.enfantHandicape,
    enfantPrecedentUnion: req.body.enfantPrecedentUnion,
    petitEnfant: req.body.petitEnfant,
    nbrePetitEnfant: req.body.nbrePetitEnfant,
    age: req.body.age,
    ageConjoint: req.body.ageConjoint,
    niveauFortune: req.body.niveauFortune,
    locality: req.body.locality,
  }
  // print("OKAAAAAAAAAAAY  ", canton),
  User.create(user)
    .then((dataUser) => {
      const finance = {
        montantTrainDeVie: req.body.montantTrainDeVie,
        wishedLifeStyle: req.body.wishedLifeStyle,
        revenuNetHorsImpot: req.body.revenuNetHorsImpot,
        chargeDontImpot: req.body.chargeDontImpot,
        revenuNetImposable: req.body.revenuNetImposable,
        userId: dataUser.id,
      }
      Finance.create(finance)
        .then(() => {
          const professionnel = {
            valorisationSteGroupe: req.body.valorisationSteGroupe,
            secteurActivite: req.body.secteurActivite,
            detentionImmoExploitation: req.body.detentionImmoExploitation,
            groupe: req.body.groupe,
            formeJuridique: req.body.formeJuridique,
            userId: dataUser.id,
          }
          Professionnel.create(professionnel)
            .then(() => {
              // res.status(200).send({dataUser, dataFinance, dataPro});
              res.status(200).send(dataUser)
            })
            .then(() => {
              const france = {
                id: dataUser.id,
                // cederEntreprise: req.body.cederEntreprise,
                // transmettreEntreprise: req.body.transmettreEntreprise,
              }
              France.create(france)
              .catch((err) => {
                res.status(500).send({
                  message:
                    err.message ||
                    'Some error occurred while creating the parcours.',
                })
              })
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  'Some error occurred while creating the data pro.',
              })
            })
        })
        .catch((err) => {
          res.status(500).send({
            message:
              err.message ||
              'Some error occurred while creating the data finance.',
          })
        })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

exports.updateProfilUser = (req, res) => {
  const user = {
    residenceFiscale: req.body.residenceFiscale,
    nationalite: req.body.nationalite,
    canton: req.body.canton,
    enjeu: req.body.enjeu,
    changementResidence: req.body.changementResidence,
    situationFamille: req.body.situationFamille,
    regimeMatrimonial: req.body.regimeMatrimonial,
    elementEtranger: req.body.elementEtranger || req.body.elementEtrangerPays,
    enfantMineur: req.body.enfantMineur,
    enfantMajeur: req.body.enfantMajeur,
    enfantHandicape: req.body.enfantHandicape,
    enfantPrecedenteUnion: req.body.enfantPrecedenteUnion,
    petitEnfant: req.body.petitEnfant,
    nbrePetitEnfant: req.body.nbrePetitEnfant,
    age: req.body.age,
    ageConjoint: req.body.ageConjoint,
    locality: req.body.locality,
    type: req.body.type,
  }

  User.update(user, { where: { id: req.params.id } })
    .then((dataUser) => {
      const id = req.params.id
      if (dataUser == 1) {
        const finance = {
          valorisationSteGroupe: req.body.valorisationSteGroupe,
          niveauFortune: req.body.niveauFortune,
          revenuNetHorsImpot: req.body.revenuNetHorsImpot,
          revenuNetImposable: req.body.revenuNetImposable,
          chargeDontImpot: req.body.chargeDontImpot,
          montantTrainDeVie: req.body.montantTrainDeVie,
          wishedLifeStyle: req.body.wishedLifeStyle,
        }
        Finance.update(finance, { where: { userId: req.params.id } })
          .then((dataFinance) => {
            if (dataFinance == 1) {
              const professionnel = {
                secteurActivite: req.body.secteurActivite,
                immobilierExploitation:
                  req.body.immobilierExploitation ||
                  req.body.detentionImmoExploitation,
                groupe: req.body.groupe || req.body.groupeOuiNon,
                formeJuridique: req.body.formeJuridique,
                pourcentageDetention: req.body.pourcentageDetention,
              }
              Professionnel.update(professionnel, {
                where: { userId: req.params.id },
              })
                .then((dataPro) => {
                  if (dataPro == 1) {
                    res.send({
                      message: 'Data professionnel was updated successfully.',
                    })
                  } else {
                    res.send({
                      message: `Cannot update User professionnel with id=${id}. Maybe User was not found or req.body is empty!`,
                    })
                  }
                })
                .catch((err) => {
                  res.status(500).send({
                    message:
                      err.message ||
                      'Some error occurred while creating the data pro.',
                  })
                })
              res.send({
                message: 'User was updated successfully.',
              })
            } else {
              res.send({
                message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
              })
            }
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message ||
                'Some error occurred while creating the data finance.',
            })
          })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

exports.situationPatrimoniale = (req, res) => {
  const user = {
    nationalite: req.body.nationalite,
    changementResidence: req.body.changementResidence,
    situationFamille: req.body.situationFamille,
    regimeMatrimonial: req.body.regimeMatrimonial,
    elementEtranger: req.body.elementEtranger,
    enfantMineur: req.body.enfantMineur,
    enfantMajeur: req.body.enfantMajeur,
    enfantHandicape: req.body.enfantHandicape,
    enfantPrecedentUnion: req.body.enfantPrecedentUnion,
    petitEnfant: req.body.petitEnfant,
    age: req.body.age,
    ageConjoint: req.body.ageConjoint,
    niveauFortune: req.body.niveauFortune,
  }
  User.create(user)
    .then((infoPat) => {
      res.status(200).send(infoPat)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while creating the User.',
      })
    })
}

exports.pisteReflexion = (req, res) => {
  User.findOne({ where: { id: req.params.id } })
    .then((data) => {
      const nombreEnfant = data.enfantMajeur + data.enfantMineur
      res.status(200).send({ nombreEnfant })
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while getting the User.',
      })
    })
}

exports.algoSituation = (req) => {
  if (req.body.marie === true) {
    if (req.body.participationAcquet === true) {
      user.situationFamille = 'marie'
      user.regimeMatrimonial = 'participationAcquet'
    } else {
      if (req.body.communauteAcquet === true) {
        user.situationFamille = 'marie'
        user.regimeMatrimonial = 'communauteReduite'
      } else {
        if (req.body.communauteUniv === true) {
          user.situationFamille = 'marie'
          user.regimeMatrimonial = 'communauteUniverselle'
        } else {
          user.situationFamille = 'marie'
          user.regimeMatrimonial = 'separationBien'
        }
      }
    }
  } else {
    if (req.body.pacse === true) {
      if (req.body.date < '01/01/2007') {
        user.situationFamille = 'pacse'
        user.regimeMatrimonial = 'indivision'
      } else {
        user.situationFamille = 'pacse'
        user.regimeMatrimonial = 'separationBien'
      }
    } else {
      if (req.body.celibat === true) {
        if (req.body.unionLibre === true) {
          user.situationFamille = 'unionLibre'
          user.regimeMatrimonial = ''
        } else {
          user.situationFamille = 'celibataire'
          user.regimeMatrimonial = 'celibataire'
        }
      } else {
        if (req.body.divorser === true) {
          user.situationFamille = 'divorce'
          user.regimeMatrimonial = ''
        } else {
          user.situationFamille = 'veuf'
          user.regimeMatrimonial = ''
        }
      }
    }
  }
}

exports.getInfoUser = (req, res) => {
  Professionnel.findOne({
    include: [
      {
        model: User,
        as: 'user',
        where: { id: req.params.id },
      },
    ],
  })
    .then((data) => {
      Finance.findOne({
        where: { userId: req.params.id },
      })
        .then((finance) => {
          Parcours.findOne({
            where: { userId: req.params.id },
          })
            .then(() => {
              const user = data?.dataValues?.user?.dataValues || {}
              delete user.id
              delete data?.dataValues?.user
              delete finance?.dataValues.createdAt
              delete finance?.dataValues.updatedAt
              delete finance?.dataValues.userId
              delete data?.dataValues.userId
              delete data?.dataValues.createdAt
              delete data?.dataValues.updatedAt
              const profil = {
                ...user,
                changementResidenceOuiNon: !!user.changementResidence,
                elementEtrangerOuiNon: !!user.elementEtranger,
                elementEtrangerPays: user.elementEtranger,
                enfantOuiNon: user.enfantMajeur + user.enfantMineur > 0,
                groupeOuiNon: !!data?.dataValues?.groupe,
                ...data?.dataValues,
                ...finance?.dataValues,
                id: user.id,
              }
              delete profil.groupe
              delete profil.elementEtranger
              res.status(200).send(profil)
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send({
                message:
                  'Error retrieving parcours with userId=' + req.params.id,
              })
            })
        })
        .catch((err) => {
          console.log(err)
          res.status(500).send({
            message: 'Error retrieving finance with userId=' + req.params.id,
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with userId=' + req.params.id,
      })
    })
}

exports.getAllInfoUser = (req, res) => {
  const profil = {}
  Professionnel.findOne({
    include: [
      {
        model: User,
        as: 'user',
        where: { id: req.params.id },
      },
    ],
  })
    .then((data) => {
      Finance.findOne({
        where: { userId: req.params.id },
      })
        .then((finance) => {
          Parcours.findOne({
            where: { userId: req.params.id },
          })
            .then((parcours) => {
              profil.residenceFiscale = data.user.residenceFiscale
              profil.nationalite = data.user.nationalite
              profil.canton = data.user.canton
              profil.enjeu = data.enjeu.enjeu
              profil.changementResidence = data.user.changementResidence
              profil.situationFamille = data.user.situationFamille
              profil.regimeMatrimonial = data.user.regimeMatrimonial
              profil.elementEtranger = data.user.elementEtranger
              profil.enfantMineur = data.user.enfantMineur
              profil.enfantMajeur = data.user.enfantMajeur
              profil.enfantHandicape = data.user.enfantHandicape
              profil.enfantPrecedentUnion = data.user.enfantPrecedentUnion
              profil.petitEnfant = data.user.petitEnfant
              profil.nbrePetitEnfant = data.user.nbrePetitEnfant
              profil.age = data.user.age
              profil.ageConjoint = data.user.ageConjoint
              profil.niveauFortune = data.user.niveauFortune
              profil.montantTrainDeVie = finance.montantTrainDeVie
              profil.wishedLifeStyle = req.body.wishedLifeStyle
              profil.revenuNetHorsImpot = finance.revenuNetHorsImpot
              profil.chargeDontImpot = finance.chargeDontImpot
              profil.revenuNetImposable = finance.revenuNetImposable
              profil.valorisationSteGroupe = data.valorisationSteGroupe
              profil.secteurActivite = data.secteurActivite
              profil.detentionImmoExploitation = data.detentionImmoExploitation
              profil.groupe = data.groupe
              profil.formeJuridique = data.formeJuridique
              profil.typeParcours = parcours.typeParcours
              profil.etapeParcours = parcours.etapeParcours
              profil.horizon = parcours.horizon
              res.status(200).send(profil)
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send({
                message:
                  'Error retrieving parcours with userId=' + req.params.id,
              })
            })
        })
        .catch((err) => {
          console.log(err)
          res.status(500).send({
            message: 'Error retrieving finance with userId=' + req.params.id,
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with userId=' + req.params.id,
      })
    })
}

exports.infoProfil = (req, res) => {
  const condition = {}
  const cederTransmettreListe = []
  const protectionConjointListe = []
  const protectionEnfantListe = []
  const investirDansImmobilierListe = []
  const cadreGestionListe = []
  Professionnel.findOne({
    include: [
      {
        model: User,
        as: 'user',
        where: { id: req.params.id },
      },
    ],
  })
    .then((data) => {
      Finance.findOne({
        where: { userId: req.params.id },
      })
        .then((finance) => {
          Parcours.findOne({
            where: { userId: req.params.id },
          })
            .then((parcours) => {
              condition.ageInf70 = data.user.age < 70
              data.user.ageConjoint < 70
                ? (condition.ageConjointInf70 = true)
                : (condition.ageConjointInf70 = false)

              data.user.enfantMajeur + data.user.enfantMineur >= 1
                ? (condition.conditionEnfantUn = true)
                : (condition.conditionEnfantUn = false)
              data.user.enfantMajeur + data.user.enfantMineur >= 2
                ? (condition.conditionEnfantDeux = true)
                : (condition.conditionEnfantDeux = false)
              data.user.enfantMineur >= 1
                ? (condition.conditionEnfantMineur = true)
                : (condition.conditionEnfantMineur = false)
              data.detentionImmoExploitation != null
                ? (condition.immoExploitation = true)
                : (condition.immoExploitation = false)
              parcours.horizon == 'entre 4 et 6 ans' ||
              parcours.horizon == '> à 6 ans'
                ? condition.conditionHorizonsup4 == true
                : condition.conditionHorizonsup4 == false
              parcours.horizon == '> à 6 ans'
                ? (condition.conditionHorizonsup6 = true)
                : (condition.conditionHorizonsup6 = false)

              ///Sans condition
              if (
                parcours.typeParcours === 'Céder son entreprise à un tiers' ||
                (parcours.typeParcours ===
                  'Transmettre son entreprise familiale' &&
                  data.nationalite === 'France')
              ) {
                ///Themes: Ceder entreprise
                cederTransmettreListe.push(
                  'Paiement différé et fractionné droits donation',
                )
                cederTransmettreListe.push(
                  'Réduction de capital aprés donation',
                )
                cederTransmettreListe.push('Réduction de capitale seule')
                cederTransmettreListe.push('Remboursement du compte courant')
                cederTransmettreListe.push(
                  'Fiscalité IPV  *tous les régimes sont abordés -> inciter la visio',
                )

                ///Theme: Protection enfant
                protectionEnfantListe.push('Assurance prévoyance décès')
                protectionEnfantListe.push(
                  'Rédiger un mandat à effet posthume',
                )
                protectionEnfantListe.push(
                  "Mise en place d'un mandat de protection future",
                )
                protectionEnfantListe.push('Rédiger un testament')

                ///Theme: Investir dans l'immobilier
                investirDansImmobilierListe.push(
                  'Acquisition immobilière en nue-propriété - US bailleur social',
                )
                investirDansImmobilierListe.push(
                  "Acquisition immobilier locatif par le biais d'une SCI",
                )
                investirDansImmobilierListe.push(
                  'Développement immobilier locatif version longue',
                )
                investirDansImmobilierListe.push(
                  'Développement immobilier locatif par endettement',
                )
                investirDansImmobilierListe.push('LMP LMNP')
                investirDansImmobilierListe.push('Monuments historiques')

                ///Theme: Cadre de gestion
                cadreGestionListe.push(
                  'Remploi du pdt de cession de vos actifs démembrés SCP et Capi',
                )
                cadreGestionListe.push("Investir au sein d'un PEA")
                cadreGestionListe.push('FCP dédié')
                cadreGestionListe.push('Avance patrimoniale')
                cadreGestionListe.push(
                  "Contrat de capitalisation à l'IS version",
                )

                if (condition.conditionEnfantDeux === true) {
                  cederTransmettreListe.push('DP avant cession NP enfants')
                  cederTransmettreListe.push('DP avant cession PP enfants')
                  protectionEnfantListe.push(
                    'Réincorporation donation simple dans DP',
                  ) //pisteExperte
                  protectionEnfantListe.push(
                    'La renonciation anticipée à l’action en réduction',
                  )

                  if (data.user.petitEnfant === true) {
                    protectionEnfantListe.push(
                      "Réincorporation d'une DP dans une DP transgénérationnelle",
                    ) //pisteExpert
                  }
                }
                if (condition.conditionEnfantUn === true) {
                  protectionEnfantListe.push('Donation US temporaire')
                  protectionEnfantListe.push(
                    'Donation bien immobilier avant cession',
                  )
                  protectionEnfantListe.push("Donation NP d'actifs")
                  protectionEnfantListe.push(
                    "Dons familiaux de sommes d'argent: enfant et/ou petit enfant",
                  )

                  if (condition.conditionEnfantMineur === true) {
                    cederTransmettreListe.push(
                      "Clauses complémentaire à prévoir dans l'acte",
                    )
                  }
                  if (data.user.enfantHandicape === true) {
                    protectionEnfantListe.push('Protection enfant handicapé')
                  }
                  if (data.user.petitEnfant === true) {
                    protectionEnfantListe.push(
                      'Protéger vos enfants et les générations futures',
                    )
                  }
                  if (data.user.enfantLitDifferent === true) {
                    protectionEnfantListe.push(
                      "Transmission dans le cadre d'une famille recomposée",
                    )
                  }
                }
                if (condition.immoExploitation === true) {
                  investirDansImmobilierListe.push(
                    'Acquisition immo exploitation en démembrement',
                  )
                  investirDansImmobilierListe.push(
                    'Cession de son bien immo exploitation à une sci familiale',
                  )
                  investirDansImmobilierListe.push(
                    'Option IS Sociétés civiles',
                  )
                  investirDansImmobilierListe.push('Lease Back')
                  investirDansImmobilierListe.push(
                    "Acquisition de l'immobilier professionnel",
                  )
                  investirDansImmobilierListe.push(
                    'Apport SCI (IR) à une SCI (IS)',
                  )
                  investirDansImmobilierListe.push(
                    "Financement par endettement d'un bien immobilier",
                  )
                  investirDansImmobilierListe.push('Crédit-bail immobilier')
                }
                if (data.groupe === true) {
                  cederTransmettreListe.push('Simplification du groupe')
                  cederTransmettreListe.push('TUP')
                }

                if (condition.ageInf70 === true) {
                  protectionEnfantListe.push(
                    'Assurance-vie (avant 70 ans) - Aménager la clause bénéficiaire ',
                  )
                  if (data.user.situationFamille === 'Marié') {
                    if (
                      data.user.regimeMatrimonial === 'Sépration de biens' ||
                      data.user.regimeMatrimonial ===
                        'Participation aux acquêts'
                    ) {
                      cadreGestionListe.push(
                        'Assurance-vie - Souscription avant 70 ans - SBD',
                      )
                    } else if (
                      data.user.regimeMatrimonial ===
                        'Communauté réduite aux acquêts' ||
                      data.user.regimeMatrimonial === 'Communauté universelle'
                    ) {
                      cadreGestionListe.push(
                        'Assurance-vie - Souscription avant 70 ans -Cté',
                      )
                    }
                  }
                } else if (condition.ageInf70 === false) {
                  protectionEnfantListe.push(
                    'Assurance-vie > 70 ans) - Aménager la clause bénéficiaire',
                  )
                  if (data.user.situationFamille === 'Marié') {
                    if (
                      data.user.regimeMatrimonial === 'Sépration de biens' ||
                      data.user.regimeMatrimonial ===
                        'Participation aux acquêts'
                    ) {
                      cadreGestionListe.push(
                        'Assurance-vie - Souscription après 70 ans - SDB',
                      )
                    } else if (
                      data.user.regimeMatrimonial ===
                        'Communauté réduite aux acquêts' ||
                      data.user.regimeMatrimonial === 'Communauté universelle'
                    ) {
                      cadreGestionListe.push(
                        'Assurance-vie - Souscription après 70 ans - Cté',
                      )
                    }
                  }
                }

                if (data.user.situationFamille === 'Marié') {
                  if (
                    data.user.regimeMatrimonial === 'Communauté universelle' ||
                    data.user.regimeMatrimonial === 'Sépration de biens' ||
                    data.user.regimeMatrimonial === 'Participation aux acquêts'
                  ) {
                    protectionConjointListe.push(
                      'Donation au dernier vivant (DDV)',
                    )
                    protectionConjointListe.push(
                      'Aménager votre régime matrimonial cté universelle',
                    )
                    protectionConjointListe.push(
                      'Donation PP en faveur du conjoint',
                    )
                    protectionConjointListe.push(
                      'Aménager votre régime mat sté acquets + clause préciput',
                    ) //pisteExperte
                  }
                  if (data.user.regimeMatrimonial === 'Sépration de biens') {
                    protectionConjointListe.push(
                      'Aménager votre régime matrimonial sté acquets',
                    )
                  }
                  if (
                    data.user.regimeMatrimonial === 'Sépration de biens' ||
                    data.user.regimeMatrimonial === 'Participation aux acquêts'
                  ) {
                    protectionConjointListe.push(
                      'Apport à la cté BP avec clause alasacienne',
                    ) //pisteExperte
                  }
                  if (
                    data.user.regimeMatrimonial === 'Communauté universelle'
                  ) {
                    protectionEnfantListe.push('Assurance vie Bacquêt')
                  }
                  if (
                    condition.conditionEnfantUn === true &&
                    condition.conditionEnfantMineur === true
                  ) {
                    protectionEnfantListe.push(
                      'Précaution donation bien immobilier enfant mineur',
                    ) //pisteExperte
                  }
                } else if (data.user.situationFamille === 'Concubinage') {
                  protectionEnfantListe.push("L'adoption simple") //pisteExperte
                } else if (
                  data.user.situationFamille === 'Pacsé' ||
                  data.user.situationFamille === 'Concubinage'
                ) {
                  protectionConjointListe.push('Le mariage')
                } else if (
                  data.user.situationFamille === 'Célibataire' ||
                  data.user.situationFamille === 'Veuf(ve)' ||
                  data.user.situationFamille === 'Divorcé(e)'
                ) {
                  protectionConjointListe.push('Signer un PACS')
                }
              } else {
              }
              if (
                parcours.typeParcours === 'Céder son entreprise à un tiers' &&
                data.nationalite === 'France'
              ) {
                cederTransmettreListe.push('Crédit vendeur')
                if (
                  condition.conditionEnfantDeux === true &&
                  condition.conditionHorizonsup6 === true
                ) {
                  cederTransmettreListe.push('Pacte Dutreil')
                  cederTransmettreListe.push(
                    'Dutreil soulte sans réputé acquis',
                  )
                  if (data.groupe === true) {
                    cederTransmettreListe.push('Dutreil interposé') //pisteExperte
                  }
                }
                if (
                  condition.conditionEnfantDeux === true &&
                  condition.conditionHorizonsup4 === true
                ) {
                  cederTransmettreListe.push(
                    'Donation Dutreil sous réputé acquis',
                  ) //pisteExperte
                  cederTransmettreListe.push(
                    'Dutreil soulte avec réputé acquis',
                  ) //pisteExperte
                }
                if (condition.ageInf70 === true) {
                  cederTransmettreListe.push(
                    'Mise en place d’une société de prestations de services',
                  )
                  cederTransmettreListe.push(
                    'Vous redéployer dans de nouvelles activités économiques',
                  )
                }
              } else if (
                parcours.typeParcours ===
                  'Transmettre son entreprise familiale' &&
                data.nationalite === 'France'
              ) {
                cederTransmettreListe.push(
                  'Réduction de capital titres démembrés',
                )
                if (condition.conditionEnfantUn === true) {
                  cederTransmettreListe.push('LBO')
                  cederTransmettreListe.push(
                    'Prise en charge des droits de donation par les donataires',
                  )
                }
                if (
                  condition.conditionEnfantUn === true &&
                  condition.conditionEnfantMineur === true
                ) {
                }
              }

              // res.send({ data, finance, parcours })
              res.send({
                cederTransmettreListe,
                protectionConjointListe,
                protectionEnfantListe,
                investirDansImmobilierListe,
                cadreGestionListe,
              })
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send({
                message:
                  'Error retrieving parcours with userId=' + req.params.id,
              })
            })
        })
        .catch((err) => {
          console.log(err)
          res.status(500).send({
            message: 'Error retrieving finance with userId=' + req.params.id,
          })
        })
      // res.send(data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with userId=' + req.params.id,
      })
    })
}

exports.getChiffre = (req, res) => {
  const data = {}
  Professionnel.findOne({
    include: [
      {
        model: User,
        as: 'user',
        where: { id: req.params.id },
      },
    ],
  })
    .then((dataUser) => {
      Finance.findOne({
        where: { userId: req.params.id },
      })
        .then((finance) => {
          Parcours.findOne({
            where: { userId: req.params.id },
          })
            .then(() => {
              data.valorisationSteGroupe = dataUser.valorisationSteGroupe
              data.niveauFortune = dataUser.user.niveauFortune
              data.montantTrainDeVie = finance.montantTrainDeVie
              data.wishedLifeStyle = req.body.wishedLifeStyle
              data.revenuNetHorsImpot = finance.revenuNetHorsImpot
              data.chargeDontImpot = finance.chargeDontImpot
              data.revenuNetImposable = finance.revenuNetImposable
              res.status(200).send(data)
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send({
                message:
                  'Error retrieving data parcours with userId=' +
                  req.params.id,
              })
            })
        })
        .catch((err) => {
          console.log(err)
          res.status(500).send({
            message:
              'Error retrieving data finance with userId=' + req.params.id,
          })
        })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with userId=' + req.params.id,
      })
    })
}

exports.listePiste = (req, res) => {
  const condition = {}
  const pisteSansConditionExperte = []
  const pisteSansConditionPrioritaire = []
  const pisteSansConditionNonPrioritaire = []
  const pisteDonationExperteSansOption = []
  const pisteDonationExperteAvecOption = []
  const pisteDonationPrioritaireSansOption = []
  const pisteDonationPrioritaireAvecOption = []
  const pisteDonationNonPrioritaireSansOption = []
  const pisteDonationNonPrioritaireAvecOption = []
  const pisteHorizonExperte = []
  const pisteHorizonPrioritaire = []
  const pisteHorizonNonPrioritaire = []
  const pisteRegimeMatExperte = []
  const pisteRegimeMatPrioritaire = []
  const pisteRegimeMatNonPrioritaire = []
  const pisteSituationExperte = []
  const pisteSituationPrioritaire = []
  const pisteSituationNonPrioritaire = []
  const pisteAssVieExperte = []
  const pisteAssViePrioritaire = []
  const pisteAssVieNonPrioritaire = []
  const pisteImmoEnseSocieteExperte = []
  const pisteImmoEnseSocietePrioritaire = []
  const pisteImmoEnseSocieteNonPrioritaire = []
  const pisteHoldingExperte = []
  const pisteHoldingPrioritaire = []
  const pisteHoldingNonPrioritaire = []
  const pistePetitsEnfantsExperte = []




  Professionnel.findOne({
    include: [
      {
        model: User,
        as: 'user',
        where: { id: req.params.id },
      },
    ],
  })
    .then((data) => {
      Finance.findOne({
        where: { userId: req.params.id },
      })
        .then(() => {
          Parcours.findOne({
            where: { userId: req.params.id },
          })
            .then((parcours) => {
              data.user.age < 70
                ? (condition.conditionAge = true)
                : (condition.conditionAge = false)
              data.user.ageConjoint < 70
                ? (condition.conditionAgeConjoint = true)
                : (condition.conditionAgeConjoint = false)

              data.user.enfantMajeur + data.user.enfantMineur >= 1
                ? (condition.conditionEnfantUn = true)
                : (condition.conditionEnfantUn = false)
              data.user.enfantMajeur + data.user.enfantMineur >= 2
                ? (condition.conditionEnfantDeux = true)
                : (condition.conditionEnfantDeux = false)
              data.user.enfantMineur >= 1
                ? (condition.conditionEnfantMineur = true)
                : (condition.conditionEnfantMineur = false)
              data.detentionImmoExploitation != ''
                ? (condition.immoExploitation = true)
                : (condition.immoExploitation = false)
              parcours.typeParcours === 'cederEntreprise' ||
              parcours.typeParcours === 'cederEntrepriseCh' ||
              parcours.typeParcours === 'immoFrUk' ||
              parcours.typeParcours === 'immoEnse'
                ? (condition.conditionParcours = true)
                : (condition.conditionParcours = false)
              data.user.residenceFiscale === 'france'
                ? (condition.conditionResidence = true)
                : (condition.conditionResidence = false)
              data.detentionImmoExploitation === 'societe' ||
              data.detentionImmoExploitation === 'societeEtHorsSociete'
                ? (condition.conditionImmoEntrepriseSociete = true)
                : (condition.conditionImmoEntrepriseSociete = false)
              data.detentionImmoExploitation === 'horsSociete'
                ? (condition.conditionImmoEntrepriseHorsSociete = true)
                : (condition.conditionImmoEntrepriseHorsSociete = false)
              data.user.nbrePetitEnfant >= 1
                ? (condition.conditionPetitEnfant = true)
                : (condition.conditionPetitEnfant = false)
              data.user.situationFamille === 'marie'
                ? (condition.conditionMarieOuiNon = true)
                : (condition.conditionMarieOuiNon = false)

              ///SANS CONDITION
              //Experte
              listePisteSansCondition.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true
                ) {
                  pisteSansConditionExperte.push(piste.nomPiste)
                }
              })

              //Prioritaire
              listePisteSansCondition.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true
                ) {
                  pisteSansConditionPrioritaire.push(piste.nomPiste)
                }
              })
              //Non prioritaire
              listePisteSansCondition.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true
                ) {
                  pisteSansConditionNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///DONATION
              //Experte sans option
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux === condition.conditionEnfantDeux)
                ) {
                  pisteDonationExperteSansOption.push(piste.nomPiste)
                }
              })

              //Experte avec option
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  (piste.enfantMineur === condition.conditionEnfantMineur ||
                    piste.enfantHandicape === data.user.enfantHandicape ||
                    piste.enfantLitDifferent ===
                      data.user.enfantPrecedentUnion)
                ) {
                  pisteDonationExperteAvecOption.push(piste.nomPiste)
                }
              })
              //Prioritaire sans option: " "Pistes sélectinnées d'après votre profil""
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux === condition.conditionEnfantDeux)
                ) {
                  pisteDonationPrioritaireSansOption.push(piste.nomPiste)
                }
              })

              //Prioritaire avec option
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  (piste.enfantMineur === condition.conditionEnfantMineur ||
                    piste.enfantHandicape === data.user.enfantHandicape ||
                    piste.enfantLitDifferent ===
                      data.user.enfantPrecedentUnion)
                ) {
                  pisteDonationPrioritaireAvecOption.push(piste.nomPiste)
                }
              })
              //Non prioritaire sans option:  "Qu'en pensez-vous ?"
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux === condition.conditionEnfantDeux)
                ) {
                  pisteDonationNonPrioritaireSansOption.push(piste.nomPiste)
                }
              })
              //Non prioritaire avec option
              listePisteDonation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  (piste.enfantMineur === condition.conditionEnfantMineur ||
                    piste.enfantHandicape === data.user.enfantHandicape ||
                    piste.enfantLitDifferent ===
                      data.user.enfantPrecedenteUnion)
                ) {
                  pisteDonationNonPrioritaireAvecOption.push(piste.nomPiste)
                }
              })

              ///HORIZON
              //Experte
              listePisteHorizon.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  //horizon
                  (piste.inf1 === parcours.horizon ||
                    piste.entre1et3 === parcours.horizon ||
                    piste.entre3et4 === parcours.horizon ||
                    piste.entre4et6 === parcours.horizon ||
                    piste.sup6 === parcours.horizon)
                ) {
                  pisteHorizonExperte.push(piste.nomPiste)
                }
              })
              //Prioritaire
              listePisteHorizon.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  //horizon
                  (piste.inf1 === parcours.horizon ||
                    piste.entre1et3 === parcours.horizon ||
                    piste.entre3et4 === parcours.horizon ||
                    piste.entre4et6 === parcours.horizon ||
                    piste.sup6 === parcours.horizon)
                ) {
                  pisteHorizonPrioritaire.push(piste.nomPiste)
                }
              })

              //Non prioritaire
              listePisteHorizon.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  (piste.conditionEnfUn === condition.conditionEnfantUn ||
                    piste.conditionEnfDeux ===
                      condition.conditionEnfantDeux) &&
                  //horizon
                  (piste.inf1 === parcours.horizon ||
                    piste.entre1et3 === parcours.horizon ||
                    piste.entre3et4 === parcours.horizon ||
                    piste.entre4et6 === parcours.horizon ||
                    piste.sup6 === parcours.horizon)
                ) {
                  pisteHorizonNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///REGIME MATRIMONIALE
              //Experte
              listePisteRegimeMat.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //situation
                  (piste.situation === data.user.situationFamille ||
                    piste.situation2 === data.user.situationFamille ||
                    piste.situation3 === data.user.situationFamille) &&
                  //regime mat
                  (piste.cteLegale === data.user.regimeMatrimonial ||
                    piste.cteUniverselle === data.user.regimeMatrimonial ||
                    piste.separationBien === data.user.regimeMatrimonial ||
                    piste.participationAcquet === data.user.regimeMatrimonial)
                ) {
                  pisteRegimeMatExperte.push(piste.nomPiste)
                }
              })

              // pisteRegimeMatExperte.shuffle()
              //Prioritaire
              listePisteRegimeMat.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  //situation
                  (piste.situation === data.user.situationFamille ||
                    piste.situation2 === data.user.situationFamille ||
                    piste.situation3 === data.user.situationFamille) &&
                  //regime mat
                  (piste.cteLegale === data.user.regimeMatrimonial ||
                    piste.cteUniverselle === data.user.regimeMatrimonial ||
                    piste.separationBien === data.user.regimeMatrimonial ||
                    piste.participationAcquet === data.user.regimeMatrimonial)
                ) {
                  pisteRegimeMatPrioritaire.push(piste.nomPiste)
                }
              })

              //Non prioritaire
              listePisteRegimeMat.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  //situation
                  (piste.situation === data.user.situationFamille ||
                    piste.situation2 === data.user.situationFamille ||
                    piste.situation3 === data.user.situationFamille) &&
                  //regime mat
                  (piste.cteLegale === data.user.regimeMatrimonial ||
                    piste.cteUniverselle === data.user.regimeMatrimonial ||
                    piste.separationBien === data.user.regimeMatrimonial ||
                    piste.participationAcquet === data.user.regimeMatrimonial)
                ) {
                  pisteRegimeMatNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///SITUATION
              //Experte
              listePisteSituation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //situation
                  // && (piste.situation === data.user.situationFamille || piste.situation2 === data.user.situationFamille)
                  piste.marieouinon === condition.conditionMarieOuiNon
                ) {
                  pisteSituationExperte.push(piste.nomPiste)
                }
              })

              //Prioritaire
              listePisteSituation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  //situation
                  (piste.situation === data.user.situationFamille ||
                    piste.situation2 === data.user.situationFamille)
                ) {
                  pisteSituationPrioritaire.push(piste.nomPiste)
                }
              })

              //Non prioritaire
              listePisteSituation.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  //situation
                  (piste.situation === data.user.situationFamille ||
                    piste.situation2 === data.user.situationFamille)
                ) {
                  pisteSituationNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///ASS - VIE
              //Experte
              listePisteAssVie.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //situation
                  (piste.regimeCte === data.user.regimeMatrimonial ||
                    piste.regimeSdb === data.user.regimeMatrimonial) &&
                  piste.age === condition.conditionAge
                ) {
                  pisteAssVieExperte.push(piste.nomPiste)
                }
              })

              //Prioritaire
              listePisteAssVie.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  //situation
                  (piste.regimeCte === data.user.regimeMatrimonial ||
                    piste.regimeSdb === data.user.regimeMatrimonial) &&
                  piste.age === condition.conditionAge
                ) {
                  pisteAssViePrioritaire.push(piste.nomPiste)
                }
              })

              //Non prioritaire
              listePisteAssVie.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  //situation
                  (piste.regimeCte === data.user.regimeMatrimonial ||
                    piste.regimeSdb === data.user.regimeMatrimonial) &&
                  piste.age === condition.conditionAge
                ) {
                  pisteAssVieNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///IMMOBILIER ENTREPRISE
              //Pistes expertes
              listePisteImmoEntreprise.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //condition enfant un
                  piste.conditionEnfUn === condition.conditionEnfUn &&
                  //immo à l'actif de la société
                  piste.conditionImmoActifSociete ===
                    condition.conditionImmoEntrepriseSociete
                ) {
                  pisteImmoEnseSocieteExperte.push(piste.nomPiste)
                }
              })

              //Piste prioritaire
              listePisteImmoEntreprise.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  //immo à l'actif de la société
                  piste.conditionImmoActifSociete ===
                    condition.conditionImmoEntrepriseSociete
                ) {
                  pisteImmoEnseSocietePrioritaire.push(piste.nomPiste)
                }
              })

              //Pistes non prioritaire
              listePisteImmoEntreprise.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  //immo à l'actif de la société
                  piste.conditionImmoActifSociete ===
                    condition.conditionImmoEntrepriseSociete
                ) {
                  pisteImmoEnseSocieteNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///HOLDING
              //Pistes experte
              listePisteHolding.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //condition holding
                  piste.groupeOuiNon === data.groupe
                ) {
                  pisteHoldingExperte.push(piste.nomPiste)
                }
              })
              //Pistes Prioritaire
              listePisteHolding.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pistePrioritaire === true &&
                  //condition holding
                  piste.groupeOuiNon === data.groupe
                ) {
                  pisteHoldingPrioritaire.push(piste.nomPiste)
                }
              })
              //Pistes non prioritaire
              listePisteHolding.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteNonPrioritaire === true &&
                  //condition holding
                  piste.groupeOuiNon === data.groupe
                ) {
                  pisteHoldingNonPrioritaire.push(piste.nomPiste)
                }
              })

              ///PETITS ENFANTS
              //Pistes experte
              listePistePetitsEnfants.forEach(function (piste) {
                if (
                  (piste.parcoursCeder === condition.conditionParcours ||
                    piste.parcoursDonner === condition.conditionParcours) &&
                  piste.residenceFiscale === condition.conditionResidence &&
                  piste.pisteExperte === true &&
                  //condition enfant
                  piste.conditionEnfDeux === condition.conditionEnfantDeux &&
                  //condition petits-enfants
                  piste.nombrePetitEnfant === condition.conditionPetitEnfant
                ) {
                  pistePetitsEnfantsExperte.push(piste.nomPiste)
                }
              })

              const pisteExperte = pisteSansConditionExperte
                .shuffle()
                .concat(
                  pisteDonationExperteAvecOption.shuffle(),
                  pisteDonationExperteSansOption.shuffle(),
                  pisteSituationExperte.shuffle(),
                  pisteRegimeMatExperte.shuffle(),
                  pisteHorizonExperte.shuffle(),
                  pisteAssVieExperte.shuffle(),
                  pisteImmoEnseSocieteExperte.shuffle(),
                  pisteHoldingExperte.shuffle(),
                  pistePetitsEnfantsExperte.shuffle(),
                )
              const pistePrioritaire = pisteSansConditionPrioritaire
                .shuffle()
                .concat(
                  pisteDonationPrioritaireAvecOption.shuffle(),
                  pisteDonationPrioritaireSansOption.shuffle(),
                  pisteSituationPrioritaire.shuffle(),
                  pisteRegimeMatPrioritaire.shuffle(),
                  pisteHorizonPrioritaire.shuffle(),
                  pisteAssViePrioritaire.shuffle(),
                  pisteImmoEnseSocietePrioritaire.shuffle(),
                  pisteHoldingPrioritaire.shuffle(),
                )
              const pisteNonPrioritaire = pisteSansConditionNonPrioritaire
                .shuffle()
                .concat(
                  pisteDonationNonPrioritaireAvecOption.shuffle(),
                  pisteDonationNonPrioritaireSansOption.shuffle(),
                  pisteSituationNonPrioritaire.shuffle(),
                  pisteRegimeMatNonPrioritaire.shuffle(),
                  pisteHorizonNonPrioritaire.shuffle(),
                  pisteAssVieNonPrioritaire.shuffle(),
                  pisteImmoEnseSocieteNonPrioritaire.shuffle(),
                  pisteHoldingNonPrioritaire.shuffle(),
                )
              const pisteExperteSet = new Set()
              const pistePrioritaireSet = new Set()
              const pisteNonPrioritaireSet = new Set()
              res.send({
                pisteExperte: pisteExperte.filter((piste) => {
                  if (pisteExperteSet.has(piste)) return false
                  pisteExperteSet.add(piste)
                  return true
                }),
                pistePrioritaire: pistePrioritaire.filter((piste) => {
                  if (pistePrioritaireSet.has(piste)) return false
                  pistePrioritaireSet.add(piste)
                  return true
                }),
                pisteNonPrioritaire: pisteNonPrioritaire.filter((piste) => {
                  if (pisteNonPrioritaireSet.has(piste)) return false
                  pisteNonPrioritaireSet.add(piste)
                  return true
                }),
              })
            })
            .catch((err) => {
              console.log(err)
              res.status(500).send({
                message:
                  'Error retrieving parcours with userId=' + req.params.id,
              })
            })
        })
        .catch((err) => {
          console.log(err)
          res.status(500).send({
            message: 'Error retrieving finance with userId=' + req.params.id,
          })
        })
      // res.send(data);
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error retrieving User with userId=' + req.params.id,
      })
    })
}

Array.prototype.shuffle = function () {
  let i = this.length,
    j,
    temp
  if (i === 0) return this
  while (--i) {
    j = Math.floor(Math.random() * (i + 1))
    temp = this[i]
    this[i] = this[j]
    this[j] = temp
  }
  return this
}

exports.updatePat = (req, res) => {
  const id = req.params.id
  const elementEtranger = {
    elementEtranger: req.body.elementEtranger,
  }

  User.update(elementEtranger, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'User was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error updating User with id=' + id,
      })
    })
}

exports.update = (req, res) => {
  const id = req.params.id

  User.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: 'User was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty!`,
        })
      }
    })
    .catch((err) => {
      console.log(err)
      res.status(500).send({
        message: 'Error updating User with id=' + id,
      })
    })
}

exports.getReflexPatFile = async (req, res) => {
  const id = req.params.id
  if (!id)
    res.status(500).send({
      message: 'UserId was not provided.',
    })
  try {
    const data = await Professionnel.findOne({
      include: [
        {
          model: User,
          as: 'user',
          where: { id: req.params.id },
        },
      ],
    })
    // const user = await User.findOne({

    // })
    const finance = await Finance.findOne({
      where: { userId: req.params.id },
    })

    const parcours = await Parcours.findOne({
      where: { userId: req.params.id },
    })
    const user = data?.dataValues?.user?.dataValues
    // const parcours = data?.dataValues?.parcours.dataValues;
    delete user.id
    delete data?.dataValues?.user
    delete finance?.dataValues.createdAt
    delete finance?.dataValues.updatedAt
    delete finance?.dataValues.userId
    delete data?.dataValues.userId
    delete data?.dataValues.createdAt
    delete data?.dataValues.updatedAt
    const profil = {
      ...user,
      changementResidenceOuiNon: !!user.changementResidence,
      elementEtrangerOuiNon: !!user.elementEtranger,
      elementEtranger: user.elementEtranger,
      enfantOuiNon: user.enfantMajeur + user.enfantMineur > 0,
      groupeOuiNon: !!data?.dataValues?.groupe,
      ...data?.dataValues,
      ...finance?.dataValues,
      id: user.id,
    }
    console.log(profil)
    const pisteData = await Piste.findOne({
      where: { userId: req.params.id },
    })
    const piste = {}
    piste.pisteReflexion = JSON.parse(pisteData.pisteReflexion)
    var generatedFilePath;

    if (user.residenceFiscale === "france" && parcours.typeParcours == "immoEnse") {
      console.log("testest  ", user.residenceFiscale)

      generatedFilePath = await createDynamicPdfFr({
        userID: req.params.id,
        data: profil,
        piste,
      })
    }
    else if (user.residenceFiscale === "france") {
      console.log("testest  ", user.residenceFiscale)

      generatedFilePath = await createDynamicPdfFR({
        userID: req.params.id,
        data: profil,
        piste,
      })
    }
    else if (user.residenceFiscale === "suisse") {
      console.log("testest  ", user.residenceFiscale)
      generatedFilePath = await createDynamicPdfCH({
        userID: req.params.id,
        data: profil,
        piste,
      })
    }
    else {
      generatedFilePath = await createDynamicPdfUK({
        userID: req.params.id,
        data: profil,
        piste,
      })      
    }
    if (!generatedFilePath) {
      res.status(500).send({
        message: 'Error while generating your document. please retry',
      })
      return
    }

    console.log('generatedFilePath: ', generatedFilePath)
    fs.stat(generatedFilePath, (err, stats) => {
      if (err)
        res.status(500).send({
          message: 'Specified file doesnt exist',
        })
      if (stats?.isFile()) {
        setTimeout(() => {
          res.download(generatedFilePath, generatedFileName)
        }, 2000)
      }
    })
  } catch (err) {
    console.log(err)
    res.status(500).send({
      message: 'Error retrieving User with userId=' + req.params.id,
    })
  }
}

exports.findAll = (req, res) => {
  User.findAll()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving User.',
      })
    })
}
