import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AddEducationModal from '../components/AddEducationModal';
import { rootState } from '../store/rootState';

const MainScreen: FC = () => {
  const name = useSelector((state: rootState) => state.nameState.name);
  return (
    <Container style={{ textAlign: 'center', paddingTop: '1rem' }}>
      <Typography>Welcome to {name}'s education page</Typography>
      <AddEducationModal />
      <Box display='flex' mt={2}>
        <Box flexGrow={1} style={{ backgroundColor: 'red' }}>
          lorme
        </Box>
        <Box flexGrow={3} style={{ backgroundColor: 'green' }}>
          lorme
        </Box>
      </Box>
    </Container>
  );
};

export default MainScreen;
