import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import { queryAllByAltText } from '@testing-library/react';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import AddEducationModal from '../components/AddEducationModal';
import SidePanel from '../components/SidePanel';
import { rootState } from '../store/rootState';
import BookmarkDetail from '../components/BookmarkDetail';

const MainScreen: FC = () => {
  const name = useSelector((state: rootState) => state.nameState.name);
  // const useQuery = () => {
  //   const location = useLocation();
  //   console.log(location);
  //   return new URLSearchParams(location.hash);
  // };
  // const query = useQuery();
  return (
    <Container style={{ textAlign: 'center', paddingTop: '1rem' }}>
      <Typography>Welcome to {name}'s education page</Typography>
      <AddEducationModal />
      <Box display='flex' mt={2}>
        <Box flexGrow={1} style={{ backgroundColor: 'red' }} maxWidth='30%'>
          <SidePanel />
        </Box>
        <Box flexGrow={3} style={{ backgroundColor: 'green' }}>
          <BookmarkDetail />
        </Box>
      </Box>
      <Box height='100vh' style={{ backgroundColor: 'blue' }} />
      <div id='app'>sdfsdf</div>
    </Container>
  );
};

export default MainScreen;
