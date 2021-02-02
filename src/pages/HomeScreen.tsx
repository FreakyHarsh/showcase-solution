import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';

const HomeScreen: FC = () => {
  const history = useHistory();
  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      style={{ height: '100vh' }}
    >
      <Box>
        <Typography variant='overline' component='h2'>
          Type your name and click "Enter" below to begin!
        </Typography>
        <Box display='flex' flexDirection='column' mt={1}>
          <TextField label='Enter your Name' variant='outlined' />
          <Box mt={1} textAlign='center'>
            <Button variant='contained' color='primary' onClick={() => history.push('main-screen')}>
              Enter
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomeScreen;
