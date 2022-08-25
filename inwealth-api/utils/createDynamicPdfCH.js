const PDFMerger = require('pdf-merger-js')

const {
  primaryColor,
  secondaryColor,
  thirdColor,
  whiteColor,
  highlightColor,
} = require('../config')

const HummusRecipe = require('hummus-recipe')
const fs = require('fs')
const path = require('path')
const pdfDir = path.join(__dirname, `../static/pdf`)
const templatePath = pdfDir + '/TempalteInwCh.pdf' // renommer le document TemplateInw Vs TempalteInw

const { niveauFortuneEnum } = require('../enums')
const { secteurActiviteEnum } = require('../enums')
const { detentionImmoExploitationEnum } = require('../enums')
const { typeSocieteEnum } = require('../enums')
const { situationEnum } = require('../enums')
const { regimeMatrimonialEnum } = require('../enums')
const { paysEnum } = require('../enums')
const { nationaliteEnum } = require('../enums')
const imagePath = path.join(__dirname, '../static/images')

const createDynamicPdf = async ({ userID, data, piste }) => {
  try {
    const profilePdfPath = await createProfilePdf({ userID, data })
    const enjeuxPdfPath = await createEnjeuxPdf({ userID, data })
    const objectifPdfPath = await createObjectifPatPage({ userID, piste })
    const pistePdfPath = await createPistePdf({ userID, piste, data })
    const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
    const outputPath = `${outputDir}/Reflexion patrimoniale.pdf`
    const merger = new PDFMerger()
    await merger.add(profilePdfPath)
    await merger.add(enjeuxPdfPath)
    await merger.add(objectifPdfPath)
    await merger.add(pistePdfPath)
    await merger.save(outputPath)
    return outputPath
  } catch (e) {
    console.error(e)
    return null
  }
}

const createProfilePdf = async ({ userID, data }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/profil.pdf`
  try {
    fs.mkdirSync(outputDir)

    // fs.mkdirSync(path.join(outputDir, '.directory'))
  } catch (e) {
    console.log(e)
  }

  const merger = new PDFMerger()
  await merger.add(templatePath, '1 to 6') // 1 to 6 Vs 5 to 10
  await merger.save(outputPath)
  let pdfDoc = await new HummusRecipe(outputPath, outputPath)
  let yLine = 160
  let lineSpacing = 23

  // Familiale et patrimoniale

  pdfDoc
    .editPage(4) // ok puisque l'on reprend la pagination à compter de la page de couverture
    .rectangle(265, 160, 675, 308, { fill: '#FFFFFF' })
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      `Votre résidence fiscale : ${paysEnum[data?.residenceFiscale] || ''}`,
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      `Votre nationalité : ${nationaliteEnum[data?.nationalite] || ''}`,
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.changementResidence
        ? `Vous envisagez un changement de résidence fiscale : ${
            paysEnum[data?.changementResidence] || ''
          }`
        : "Vous n'envisagez pas de changement de résidence fiscale",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.elementEtranger
        ? `Vous avez un lien d’extranéité dans votre situation : ${
            paysEnum[data?.elementEtranger] || ''
          }`
        : "Vous n'avez pas de lien d’extranéité dans votre situation",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(`Vous avez : ${data?.age || 0} ans`, 285, yLine, {
      color: '#2F2064',
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 602,
        height: 24,
      },
    })
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      `Votre situation familiale : ${
        situationEnum[data?.situationFamille] || ''
      }`,
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.regimeMatrimonial
        ? `Votre régime matrimonial : ${
            regimeMatrimonialEnum[data?.regimeMatrimonial] || ''
          }`
        : '',
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      `Âge de votre "partenaire/conjoint/concubin" : ${
        data?.ageConjoint || 0
      }`,
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.enfantMineur || data?.enfantMajeur
        ? `Vous avez un/des enfant(s) : ${
            data?.enfantMineur || 0
          } mineurs(s), ${data?.enfantMajeur || 0} majeurs(s)`
        : "Vous n'avez pas d'enfant",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.enfantPrecedentUnion
        ? `Vous avez un/des enfant(s) d'une précédente union`
        : "Vous n'avez pas d'enfant(s) d'une précédente union",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.enfantHandicape
        ? `Vous avez un/des enfant(s) handicapé(s)`
        : "Vous n'avez pas d'enfant(s) handicapé",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .text(`•`, 265, yLine, {
      color: secondaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 20,
        height: 24,
      },
    })
    .text(
      data?.nbrePetitEnfant
        ? `Vous avez un/des petit(s)-enfant(s) : ${
            data?.nbrePetitEnfant || ''
          }`
        : "Vous n'avez pas de petit(s)-enfant(s)",
      285,
      yLine,
      {
        color: '#2F2064',
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 602,
          height: 24,
        },
      },
    )
    .endPage()

  //Professionnelle

  yLine = 163
  lineSpacing = 21
  pdfDoc
    .editPage(5) //ok
    .rectangle(427, yLine - 3, 300, 25, { fill: '#FFFFFF' })
    .text(
      secteurActiviteEnum[data?.secteurActivite] || 'Non renseigné',
      427,
      yLine,
      {
        color: primaryColor,
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 300,
          height: 20,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .rectangle(736, yLine, 200, 20, { fill: '#FFFFFF' })
    .text(
      typeSocieteEnum[data?.formeJuridique] || 'Non renseignée',
      736,
      yLine,
      {
        color: primaryColor,
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 200,
          height: 20,
        },
      },
    )
  yLine += lineSpacing + 0.5
  pdfDoc
    .rectangle(667, yLine, 235, 20, { fill: '#FFFFFF' })
    .text(data?.groupeOuiNon ? 'oui' : 'non', 667, yLine, {
      color: primaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 235,
        height: 20,
      },
    })
  yLine += lineSpacing + 0.75
  pdfDoc
    .rectangle(480, yLine, 150, 20, { fill: '#FFFFFF' })
    .text(`${data?.pourcentageDetention || 0}%`, 480, yLine, {
      color: primaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 150,
        height: 20,
      },
    })
  yLine += lineSpacing + 0.25
  pdfDoc
    .rectangle(525, yLine, 200, 20, { fill: '#FFFFFF' })
    // .rectangle(525, yLine, 200, 20, { fill: '#576656' })
    .text(
      `${
        detentionImmoExploitationEnum[data?.immobilierExploitation] ||
        'Non renseigné'
      }`,
      525,
      yLine,
      {
        color: primaryColor,
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 200,
          height: 20,
        },
      },
    )
    .endPage()

  yLine = 185
  lineSpacing = 22

  // Financiere

  pdfDoc
    .editPage(6)
    .rectangle(770, 5, 190, 60, { fill: whiteColor })
    .rectangle(747, yLine - 3, 200, 25, { fill: whiteColor })
    .text(
      niveauFortuneEnum[data?.niveauFortune] || 'Non renseignée',
      747,
      yLine,
      {
        color: primaryColor,
        size: 12,
        textBox: {
          textAlign: 'left center',
          width: 200,
          height: 20,
        },
      },
    )
  yLine += lineSpacing
  pdfDoc
    .rectangle(374, yLine - 3, 150, 25, { fill: whiteColor })
    .text(`${handleK(data?.valorisationSteGroupe || 0)}€`, 374, yLine, {
      color: primaryColor,
      size: 12,
      textBox: {
        textAlign: 'left center',
        width: 150,
        height: 20,
      },
    })
  pdfDoc
    .rectangle(421, 354, 150, 30, { fill: thirdColor })
    .text(`${handleK(data?.chargeDontImpot || 0)}€`, 421, 354, {
      color: '#000000',
      size: 12,
      textBox: {
        textAlign: 'center center',
        width: 150,
        height: 30,
      },
    })
  pdfDoc
    .rectangle(734, 354, 150, 30, { fill: thirdColor })
    .text(`${handleK(data?.revenuNetHorsImpot || 0)}€`, 734, 354, {
      color: '#000000',
      size: 12,
      textBox: {
        textAlign: 'center center',
        width: 150,
        height: 30,
      },
    })
  pdfDoc
    .rectangle(422, 392, 150, 20, { fill: primaryColor })
    .text(
      `${handleK(
        (data?.revenuNetHorsImpot || 0) - (data?.chargeDontImpot || 0),
      )}€`,
      422,
      393,
      {
        color: '#FFFFFF',
        size: 12,
        textBox: {
          textAlign: 'center center',
          width: 150,
          height: 20,
          // style: { lineWidth: 2 },
        },
      },
    )

  pdfDoc.endPage().endPDF((e) => {
    console.error(e)
  })

  return outputPath
}

const handleK = (value) => (value >= 1_000 ? `${value / 1_000} K` : `${value}`)

const createEnjeuxPdf = async ({ userID, data }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/enjeux.pdf`
  const merger = new PDFMerger()
  await merger.add(templatePath, '11 to 17')
  await merger.save(outputPath)
  const pdfDoc = await new HummusRecipe(outputPath, outputPath)
  pdfDoc
    .editPage(3)
    .rectangle(700, 50, 150, 50, { fill: '#FFFFFF' })
    .text(`${handleK(data?.valorisationSteGroupe || 0)}€`, 600, 50, {
      color: secondaryColor,
      size: 32,
      textBox: {
        textAlign: 'center center',
        width: 350,
        height: 50,
      },
    })
    .endPage()

    /*
    la pagination reprend à compter de la page 7 du template pdf suisse
    cad Réflexion Patrimoniale 1 vos enjeux et 2 vos pistes de réflexions
    */

    //slide 16 du template FR : fiscalité liée à la cession
    //ce slide est supprimé dans le template version Suisse car nous ne calculons pas la fiscalité
    // .editPage(6)
    // .rectangle(770, 3, 190, 58, { fill: whiteColor })
    // .rectangle(843, 295, 80, 25, { fill: '#FFFFFF' })
    // .text(
    //   `${handleK((data?.valorisationSteGroupe * 12.8) / 100) || 0}€`,
    //   843,
    //   295,
    //   {
    //     color: secondaryColor,
    //     size: 18,
    //     textBox: {
    //       textAlign: 'left center',
    //       width: 200,
    //       height: 25,
    //     },
    //   },
    // )
    // .rectangle(842, 345, 80, 25, { fill: '#FFFFFF' })
    // .text(
    //   `${handleK((data?.valorisationSteGroupe * 17.2) / 100) || 0}€`,
    //   842,
    //   345,
    //   {
    //     color: secondaryColor,
    //     size: 18,
    //     textBox: {
    //       textAlign: 'left center',
    //       width: 200,
    //       height: 25,
    //     },
    //   },
    // )

    // .rectangle(842, 394, 80, 25, { fill: '#FFFFFF' })
    // .text(
    //   `${handleK((data?.valorisationSteGroupe * 4) / 100) || 0}€`,
    //   842,
    //   403,
    //   {
    //     color: primaryColor,
    //     size: 18,
    //     textBox: {
    //       textAlign: 'left center',
    //       width: 200,
    //       height: 25,
    //     },
    //   },
    // )
    // .rectangle(203, 367, 188, 38, { fill: '#FFFFFF' })
    // .text(
    //   `${handleK((data?.valorisationSteGroupe * 34) / 100) || 0}€ ²`,
    //   203,
    //   367,
    //   {
    //     color: secondaryColor,
    //     size: 32,
    //     textBox: {
    //       textAlign: 'center center',
    //       width: 188,
    //       height: 38,
    //     },
    //   },
    // )
    // .rectangle(600, 102, 150, 20, { fill: '#FFFFFF' })
    // .text(`${handleK(data?.valorisationSteGroupe || 0)}€`, 599, 105, {
    //   color: secondaryColor,
    //   size: 18,
    //   textBox: {
    //     textAlign: 'left center',
    //     width: 155,
    //     height: 20,
    //   },
    // })
    // .endPage()

    /*
    ok la page 7 du template pdf CH est identique à celui du template FR
    */
    // confort de vie annuel souhaité
    .editPage(7)
    .rectangle(203, 367, 188, 38, { fill: '#FFFFFF' })
    .text(`${handleK(data?.montantTrainDeVie || 0)}€ nets`, 203, 367, {
      color: secondaryColor,
      size: 32,
      textBox: {
        textAlign: 'center center',
        width: 188,
        height: 38,
      },
    })
    .rectangle(305, 199, 106, 39, { fill: primaryColor })
    .text(`${handleK(data?.montantTrainDeVie || 0)}€`, 305, 199, {
      color: '#FFFFFF',
      size: 14,
      textBox: {
        textAlign: 'center center',
        width: 106,
        height: 39,
      },
    })
    // .rectangle(203, 367, 188, 38, { fill: '#576656' })
    // .text(
    //   `${handleK((data?.valorisationSteGroupe * 34) / 100) || 0}€ ²`,
    //   203,
    //   367,
    //   {
    //     color: secondaryColor,
    //     size: 32,
    //     textBox: {
    //       textAlign: 'center center',
    //       width: 188,
    //       height: 38,
    //       style: { lineWidth: 2 },
    //     },
    //   },
    // )
    .endPage()
    .endPDF(() => {})
  return outputPath
}

const createObjectifPatPage = async ({ userID, piste }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/objectifPat.pdf`
  const merger = new PDFMerger()
  /*
  les pages 18 et 19 du template FR sont les pages 14 et 15 du template CH
  Vos pistes de réflexion
  + PLAN des pistes cad 4 pour la Suisse
  */
  await merger.add(templatePath, '14, 15') // 14 et 15 Vs 18 et 19
  await merger.save(outputPath)
  // const pdfDoc = await new HummusRecipe(outputPath, outputPath)
  // pdfDoc
  //   .editPage(2)
  //   .rectangle(700, 50, 150, 50, { fill: '#FFFFFF' })
  //   .text(`${0}€`, 600, 50, {
  //     color: secondaryColor,
  //     size: 32,
  //     textBox: {
  //       textAlign: 'center center',
  //       width: 350,
  //       height: 50,
  //     },
  //   })
  //   .endPage()
  //   .endPDF(() => {})
  return outputPath
}
const createPistePdf = async ({ userID, piste, data }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/piste.pdf`
  const merger = new PDFMerger()
  /*
  on assemble les 4 pistes de réflexion CH du template 
  y compris les 2 dernières pages
  cad le tout de 16 à 39
  */
  await merger.add(templatePath, '16 to 39') // 16 à 39 Vs 20 à 31
  await merger.save(outputPath)
  return outputPath
}

module.exports = createDynamicPdf