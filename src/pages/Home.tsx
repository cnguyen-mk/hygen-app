import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Header from '../components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth={'xl'}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">Home</Typography>
              <Typography variant="body2">Lorem ipsum dolor</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Home
