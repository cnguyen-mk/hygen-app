---
to: src/pages/<%= Name || 'NewPage' %>/index.tsx
arbitrary: <% title = null, desc = null %>
---
import { Grid, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Header from '../../components/Header'
import styles from './style.module.css'

const <%= Name || 'NewPage' %> = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Container maxWidth={'xl'} className={styles.container}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1"><%= title %></Typography>
              <Typography variant="body2"><%= desc %></Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default <%= Name || 'NewPage' %>


