import {
  makeStyles,
  Theme,
  createStyles,
  Modal,
  Fade,
  Button,
  Grid,
  TextField,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../store/rootState';
import { bookmarksActionTypes } from '../store/actionTypes/bookmarksActionTypes';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      maxWidth: '70%',
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(3, 4),
    },
    gridCenter: { textAlign: 'center' },
  })
);
function AddEducationModal() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [qualification, setQualification] = useState('');
  const [university, setUniversity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');
  const [achivements, setAchivements] = useState('');
  const onModalOpen = () => {
    setOpen(true);
  };
  const onModalClose = () => {
    setOpen(false);
  };
  const bookmarks = useSelector((state: rootState) => state.bmksState.bookmarks);
  const onSave = () => {
    dispatch({
      type: bookmarksActionTypes.SET_BOOKMARK,
      payload: bookmarks.concat({
        bookmarkName: university,
        detail: {
          qualification,
          university,
          startDate,
          endDate,
          learnings: [major, minor, achivements],
        },
      }),
    });
    setOpen(false);
  };
  return (
    <div>
      <Button variant='contained' color='primary' onClick={onModalOpen}>
        Add new education
      </Button>
      <Modal
        open={open}
        onClose={onModalClose}
        aria-labelledby='simple-modal-title'
        aria-describedby='simple-modal-description'
        className={classes.modal}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField
                  label='Qualification'
                  variant='outlined'
                  fullWidth
                  onChange={(e) => setQualification(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField
                  label='University'
                  variant='outlined'
                  fullWidth
                  onChange={(e) => setUniversity(e.target.value)}
                />
              </Grid>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='Start Date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                  }}
                  fullWidth
                />
              </Grid>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='End Date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={(e) => setEndDate(e.target.value)}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='Major'
                  fullWidth
                  onChange={(e) => setMajor(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='Minor'
                  fullWidth
                  onChange={(e) => setMinor(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='Achievements'
                  fullWidth
                  onChange={(e) => setAchivements(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'end' }}>
                <Button variant='contained' color='primary' onClick={onSave}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}

export default AddEducationModal;
