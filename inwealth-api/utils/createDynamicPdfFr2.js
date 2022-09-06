const PDFMerger = require('pdf-merger-js')
//FR
/*

Enjeu "Détenir l'immobilier d'entreprise"

*/

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
const templatePath = pdfDir + '/TempalteInwFrImmo.pdf' 


const { niveauFortuneEnum } = require('../enums')
const { secteurActiviteEnum } = require('../enums')
const { detentionImmoExploitationEnum } = require('../enums')
const { typeSocieteEnum } = require('../enums')
const { situationEnum } = require('../enums')
const { regimeMatrimonialEnum } = require('../enums')
const { paysEnum } = require('../enums')
const { cantonEnum } = require('../enums')
const { nationaliteEnum } = require('../enums')
const imagePath = path.join(__dirname, '../static/images')

const createDynamicPdf1 = async ({ userID, data, piste }) => {
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
  await merger.add(templatePath, '1 to 6')
  await merger.save(outputPath)
  let pdfDoc = await new HummusRecipe(outputPath, outputPath)
  let yLine = 160
  let lineSpacing = 23

  // Familiale et patrimoniale

  pdfDoc
    .editPage(4)
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
      `Canton : ${cantonEnum[data?.canton] || ''}`,
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
        ? `Vous envisagez un changement de résidence fiscale : ${paysEnum[data?.changementResidence] || ''
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
        ? `Vous avez un lien d’extranéité dans votre situation : ${paysEnum[data?.elementEtranger] || ''
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
      `Votre situation familiale : ${situationEnum[data?.situationFamille] || ''
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
        ? `Votre régime matrimonial : ${regimeMatrimonialEnum[data?.regimeMatrimonial] || ''
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
      `Âge de votre "partenaire/conjoint/concubin" : ${data?.ageConjoint || 0
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
        ? `Vous avez un/des enfant(s) : ${data?.enfantMineur || 0
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
        ? `Vous avez un/des petit(s)-enfant(s) : ${data?.nbrePetitEnfant || ''
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

  // Financiere
  yLine = 185
  lineSpacing = 23
  pdfDoc
    .editPage(5)
    .rectangle(265, 160, 675, 100, { fill: '#FFFFFF' })
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
      `Patrimoine hors endettement (comprenant la valorisation de votre participation) : ${niveauFortuneEnum[data?.niveauFortune] || 'Non renseignée'}`,
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
      `Valorisation de votre participation : ${handleK(data?.valorisationSteGroupe || 0)} CHF`,
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
    .rectangle(421, 354, 150, 30, { fill: thirdColor })
    .text(`${handleK(data?.chargeDontImpot || 0)} CHF`, 421, 354, {
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
    .text(`${handleK(data?.revenuNetHorsImpot || 0)} CHF`, 734, 354, {
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
      )} CHF`,
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

  // yLine += lineSpacing
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
      `NB : Votre revenu net imposable : ${handleK(data?.revenuNetImposable || 0)} CHF`,
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
  await merger.add(templatePath, '6 to 12')
  await merger.save(outputPath)
  const pdfDoc = await new HummusRecipe(outputPath, outputPath)
  
  pdfDoc
    .editPage(7) //confort de vie annuel souhaité

    .rectangle(421, 354, 150, 30, { fill: thirdColor })
    .text(`${handleK(data?.montantTrainDeVie || 0)} CHF`, 421, 354, {
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
    .text(
      `${handleK(
        (data?.revenuNetHorsImpot || 0) - (data?.chargeDontImpot || 0))} CHF`, 734, 354,
      {
        color: '#000000',
        size: 12,
        textBox: {
          textAlign: 'center center',
          width: 150,
          height: 30,
          // style: { lineWidth: 2 },
        },
      },
    )
    .rectangle(194, 187, 188, 38, { fill: '#FFFFFF' })
    .text(`${handleK(((data?.montantTrainDeVie || 0) - ((data?.revenuNetHorsImpot || 0) - (data?.chargeDontImpot || 0))))
      } CHF`, 190, 187, {
      color: secondaryColor,
      size: 28,
      textBox: {
        textAlign: 'center center',
        width: 175,
        height: 35,
      },
    })
    // .rectangle(305, 199, 106, 39, { fill: thirdColor })
    // .text(`${handleK(data?.montantTrainDeVie || 0)} CHF`, 305, 199, {
    //   color: '#FFFFFF',
    //   size: 14,
    //   textBox: {
    //     textAlign: 'center center',
    //     width: 106,
    //     height: 39,
    //   },
    // })
    .endPage()
    .endPDF(() => { })
  return outputPath
}

const createObjectifPatPage = async ({ userID, piste }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/objectifPat.pdf`
  const merger = new PDFMerger()
  await merger.add(templatePath, '13, 14') // Vos pistes + Plan
  await merger.save(outputPath)
  return outputPath
}
const createPistePdf = async ({ userID, piste, data }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  const outputPath = `${outputDir}/piste.pdf`
  const merger = new PDFMerger()
  await merger.add(templatePath, '15 to 19') // les pistes de réflexion + + nom IP + quatrième de couverture 
  await merger.save(outputPath)
  return outputPath
}

module.exports = createDynamicPdf1
