import { Box, Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import AddEducationModal from '../components/AddEducationModal';
import SidePanel from '../components/SidePanel';
import { rootState } from '../store/rootState';
import BookmarkDetail from '../components/BookmarkDetail';

const MainScreen: FC = () => {
  const name = useSelector((state: rootState) => state.nameState.name);

  return (
    <Container style={{ textAlign: 'center', paddingTop: '1rem' }}>
      <Typography>Welcome to {name}'s education page</Typography>
      <AddEducationModal />
      <Box display='flex' mt={2}>
        <Box flexGrow={1} maxWidth='30%'>
          <SidePanel />
        </Box>
        <Box flexGrow={3}>
          <BookmarkDetail />
        </Box>
      </Box>
      <Box height='100vh' />
      <div id='app'>sdfsdf</div>
    </Container>
  );
};

export default MainScreen;
