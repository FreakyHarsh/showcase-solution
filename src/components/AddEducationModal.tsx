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
import React from 'react';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      maxWidth: '60%',
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
  const [open, setOpen] = React.useState(false);

  const onModalOpen = () => {
    setOpen(true);
  };

  const onModalClose = () => {
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
                <TextField label='Qualification' variant='outlined' fullWidth />
              </Grid>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField label='University' variant='outlined' fullWidth />
              </Grid>
              <Grid item xs={6} className={classes.gridCenter}>
                <TextField
                  variant='outlined'
                  label='Start Date'
                  type='date'
                  InputLabelProps={{
                    shrink: true,
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
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} className={classes.gridCenter}>
                <TextField variant='outlined' label='Description' multiline rows={3} fullWidth />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'end' }}>
                <Button variant='contained' color='primary'>
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
