import React, { useEffect, useState, useContext } from 'react'
import ReactPDF, {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
  Svg,
  Path,
  Image,
} from '@react-pdf/renderer'

import { BuilderContext } from './../../App'
// import roboto from '../fonts/Roboto-Bold.ttf'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer'
import { Right as SectionRight } from './Sections/Right_'
import { Left as SectionLeft } from './Sections/Left_'

// Font.register({
//   family: 'Roboto',
//   fonts: [
//     {
//       src: roboto,
//     },
//   ],
// })
// Create styles
import styles from '../../styles'
// Create Document Component

const PreviewScreen = () => {
  const ctx = useContext(BuilderContext)
  return (
    <div style={{ flexGrow: '1' }}>
      <PDFViewer
        showToolbar={false}
        style={{
          width: '100%',
          height: '100%',
          // fontFamily: 'Roboto',
        }}
      >
        <ResumeTemplate builder={ctx} />
      </PDFViewer>
      <PDFDownloadLink
        document={<ResumeTemplate builder={ctx} />}
        fileName='somename.pdf'
      >
        {({ loading }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  )
}

const ResumeTemplate = ({ builder }) => (
  <Document style={styles.document}>
    <Page size='A4' style={styles.page}>
      <BuilderContext.Provider value={builder}>
        <SectionLeft />
        <SectionRight />
      </BuilderContext.Provider>
    </Page>
  </Document>
)

export default PreviewScreen
