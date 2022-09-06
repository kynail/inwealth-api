const PDFMerger = require('pdf-merger-js')
//FR
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
const templatePath = pdfDir + '/TempalteInwUk.pdf'

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
      `Tax residency:  ${paysEnum[data?.residenceFiscale] || ''}`,
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
      `Nationality: ${nationaliteEnum[data?.nationalite] || ''}`,
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
        ? `You have an extraneity link in your situation: ${paysEnum[data?.elementEtranger] || ''
        }`
        : "You have no connection of extraneity in your situation",
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
    .text(`Date of birth:  ${data?.age || 0} ans`, 285, yLine, {
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
      `Marital status: ${situationEnum[data?.situationFamille] || ''
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
        ? `Matrimonial property regime:  ${regimeMatrimonialEnum[data?.regimeMatrimonial] || ''
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
      `Date of birth (spouse):  ${data?.ageConjoint || 0
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
        ? `You have a child(s): ${data?.enfantMineur || 0
        } minors, ${data?.enfantMajeur || 0} children over the age of majority`
        : "You have no children",
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
    .editPage(5)//page 5
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
      `Wealth (without liabilities):  ${niveauFortuneEnum[data?.niveauFortune] || 'Non renseignée'}`,
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

  pdfDoc.endPage().endPDF((e) => {
    console.error(e)
  })

  return outputPath
}

// const handleK = (value) => (value >= 1_000 ? `${value / 1_000} K` : `${value}`)

// const createEnjeuxPdf = async ({ userID, data }) => {
//   const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
//   const outputPath = `${outputDir}/enjeux.pdf`
//   const merger = new PDFMerger()
//   await merger.add(templatePath, '7 to 13')
//   await merger.save(outputPath)
//   const pdfDoc = await new HummusRecipe(outputPath, outputPath)
//   pdfDoc
//     .editPage(3) // à compter de la page 7 qui est donc la 1ère page
//     // on affiche la valo en haut à droite
//     .rectangle(700, 50, 200, 50, { fill: '#FFFFFF' })
//     .text(`${handleK(data?.valorisationSteGroupe || 0)} CHF`, 600, 50, {
//       color: secondaryColor,
//       size: 32,
//       textBox: {
//         textAlign: 'center center',
//         width: 350,
//         height: 50,
//       },
//     })
//     .endPage()
//     .editPage(6) // Attention slide fiscalité liée à la cession qui dans le cas de la CH N/A
//     .rectangle(770, 3, 190, 58, { fill: whiteColor })
//     .rectangle(843, 295, 80, 25, { fill: '#FFFFFF' })
//     .text(
//       `${handleK((data?.valorisationSteGroupe * 12.8) / 100) || 0} CHF`,
//       843,
//       295,
//       {
//         color: secondaryColor,
//         size: 18,
//         textBox: {
//           textAlign: 'left center',
//           width: 200,
//           height: 25,
//         },
//       },
//     )
//     .rectangle(842, 345, 80, 25, { fill: '#FFFFFF' })
//     .text(
//       `${handleK((data?.valorisationSteGroupe * 17.2) / 100) || 0} CHF`,
//       842,
//       345,
//       {
//         color: secondaryColor,
//         size: 18,
//         textBox: {
//           textAlign: 'left center',
//           width: 200,
//           height: 25,
//         },
//       },
//     )

//     .rectangle(842, 394, 80, 25, { fill: '#FFFFFF' })
//     .text(
//       `${handleK((data?.valorisationSteGroupe * 4) / 100) || 0} CHF`,
//       842,
//       403,
//       {
//         color: primaryColor,
//         size: 18,
//         textBox: {
//           textAlign: 'left center',
//           width: 200,
//           height: 25,
//         },
//       },
//     )
//     .rectangle(203, 367, 188, 38, { fill: '#FFFFFF' })
//     .text(
//       `${handleK((data?.valorisationSteGroupe * 34) / 100) || 0} CHF ²`,
//       203,
//       367,
//       {
//         color: secondaryColor,
//         size: 32,
//         textBox: {
//           textAlign: 'center center',
//           width: 188,
//           height: 38,
//         },
//       },
//     )
//     .rectangle(600, 102, 150, 20, { fill: '#FFFFFF' })
//     .text(`${handleK(data?.valorisationSteGroupe || 0)} CHF`, 599, 105, {
//       color: secondaryColor,
//       size: 18,
//       textBox: {
//         textAlign: 'left center',
//         width: 155,
//         height: 20,
//       },
//     })
//     .endPage()
//   pdfDoc
//     .editPage(7) //confort de vie annuel souhaité

//     .rectangle(421, 354, 150, 30, { fill: thirdColor })
//     .text(`${handleK(data?.montantTrainDeVie || 0)} CHF`, 421, 354, {
//       color: '#000000',
//       size: 12,
//       textBox: {
//         textAlign: 'center center',
//         width: 150,
//         height: 30,
//       },
//     })
//   pdfDoc
//     .rectangle(734, 354, 150, 30, { fill: thirdColor })
//     .text(
//       `${handleK(
//         (data?.revenuNetHorsImpot || 0) - (data?.chargeDontImpot || 0))} CHF`, 734, 354,
//       {
//         color: '#000000',
//         size: 12,
//         textBox: {
//           textAlign: 'center center',
//           width: 150,
//           height: 30,
//           // style: { lineWidth: 2 },
//         },
//       },
//     )
//     .rectangle(194, 187, 188, 38, { fill: '#FFFFFF' })
//     .text(`${handleK(((data?.montantTrainDeVie || 0) - ((data?.revenuNetHorsImpot || 0) - (data?.chargeDontImpot || 0))))
//       } CHF`, 190, 187, {
//       color: secondaryColor,
//       size: 28,
//       textBox: {
//         textAlign: 'center center',
//         width: 175,
//         height: 35,
//       },
//     })
//     // .rectangle(305, 199, 106, 39, { fill: thirdColor })
//     // .text(`${handleK(data?.montantTrainDeVie || 0)} CHF`, 305, 199, {
//     //   color: '#FFFFFF',
//     //   size: 14,
//     //   textBox: {
//     //     textAlign: 'center center',
//     //     width: 106,
//     //     height: 39,
//     //   },
//     // })
//     .endPage()


//     .endPDF(() => { })
//   return outputPath
// }

const createObjectifPatPage = async ({ userID, piste }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  // const outputPath = `${outputDir}/objectifPat.pdf`
  const merger = new PDFMerger()
  await merger.add(templatePath, '6, 13') // Vos pistes + Plan
  await merger.save(outputPath)
  return outputPath
}
const createPistePdf = async ({ userID, piste, data }) => {
  const outputDir = path.join(__dirname, `../static/pdf/generated/${userID}`)
  // const outputPath = `${outputDir}/piste.pdf`
  const merger = new PDFMerger()
  await merger.add(templatePath, '7 to 24') // les pistes de réflexion + + nom IP + quatrième de couverture 
  await merger.save(outputPath)
  return outputPath
}

module.exports = createDynamicPdf1
