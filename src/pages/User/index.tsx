import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Header from '../../components/Header'
import styles from './style.module.css'

const User = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth={'xl'} className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1">User Profile</Typography>
              <Typography variant="body2">this is user page</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default User


