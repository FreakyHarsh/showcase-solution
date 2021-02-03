import { Box, Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../store/rootState';
import { formatDateToMY } from '../utils/formatDateToMY';
import { educationDetailObj } from '../store/reducers/bookmarks.reducer';
import { useLocation } from 'react-router-dom';

function BookmarkDetail() {
  const bookmarks = useSelector((state: rootState) => state.bmksState.bookmarks);

  const location = useLocation();
  console.log(location);
  useEffect(() => {
    const card = document.querySelector(location.hash);
    card?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [location.hash]);
  return (
    <Box style={{ display: 'relative', overflowY: 'scroll' }} height='200px'>
      {bookmarks.map(
        ({
          detail: { qualification, university, startDate, endDate, learnings },
        }: {
          detail: educationDetailObj;
        }) =>
          qualification && (
            <Box
              p={3}
              style={{
                textAlign: 'start',
              }}
            >
              <Card id={university}>
                <CardContent>
                  <Typography variant='h5' style={{ fontWeight: 600 }} component='p'>
                    {qualification} @ {university}
                  </Typography>
                  <Typography variant='body1' component='p'>
                    {formatDateToMY(new Date(startDate))} -
                    {formatDateToMY(new Date()) === formatDateToMY(new Date(endDate))
                      ? 'Present'
                      : formatDateToMY(new Date(endDate))}
                  </Typography>
                  {learnings[0] !== '' && (
                    <Typography variant='caption'>Learnings during this course: </Typography>
                  )}
                  <ul style={{ margin: 0 }}>{learnings.map((item) => item && <li>{item}</li>)}</ul>
                </CardContent>
              </Card>
            </Box>
          )
      )}
    </Box>
  );
}

export default BookmarkDetail;
