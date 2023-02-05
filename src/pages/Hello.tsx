import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Header from '../components/Header'

const Hello = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth={'xl'}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">Hello</Typography>
              <Typography variant="body2">Lorem ipsum dolor</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Hello
