import { Container, makeStyles, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import AddEducationModal from '../components/AddEducationModal';

const useStyles = makeStyles({});
const MainScreen: FC = () => {
  return (
    <Container maxWidth='xs'>
      <Typography>Welcome to Harsh's education page</Typography>
      <AddEducationModal />
    </Container>
  );
};

export default MainScreen;
