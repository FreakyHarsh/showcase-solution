import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import AddEducationModal from '../components/AddEducationModal';

const MainScreen: FC = () => {
  return (
    <Container style={{ textAlign: 'center', paddingTop: '1rem' }}>
      <Typography>Welcome to Harsh's education page</Typography>
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
