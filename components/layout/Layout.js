import Head from 'next/head'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'
import { MainContainer } from './styles'
import Text from 'components/text/Text'

const Layout = ({ metaTitle, metaDescription, pageTitle, children }) => {
  return (
    <>
      <Head>
        <title>{metaTitle || ''}</title>
        <meta name='description' content={metaDescription || ''} />
      </Head>
      <MainContainer>
        <Text
          variant='h1'
          color='text'
          fontWeight='500'
          font='secondary'
          sx={{ marginBottom: '15vh' }}
        >
          {pageTitle || ''}
        </Text>
        {children}
      </MainContainer>
    </>
  )
}

Layout.propTypes = {
  metaTitle: PropTypes.string,
  metaDescription: PropTypes.string,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
}

export default Layout
