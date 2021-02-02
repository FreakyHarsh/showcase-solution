import { Box, Button, Grid, TextField, Typography } from '@material-ui/core';
import React, { FC, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { nameActionTypes } from '../store/actionTypes/nameActionTypes';
import { nameState } from '../store/reducers/name.reducer';
import { rootState } from '../store/rootState';

const HomeScreen: FC = () => {
  const history = useHistory();
  const name = useSelector((state: rootState) => state.nameState.name);
  const dispatch = useDispatch();
  const [localName, setLocalName] = useState('');
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
          <TextField
            label='Enter your Name'
            variant='outlined'
            onChange={(e) => setLocalName(e.target.value)}
          />
          <Box mt={2} textAlign='center'>
            <Button
              variant='contained'
              color='primary'
              onClick={() => {
                dispatch({ type: nameActionTypes.SET_NAME, payload: localName });
                history.push('main-screen');
              }}
            >
              Enter
            </Button>
            {name}
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default HomeScreen;
