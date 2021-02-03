import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { rootState } from '../store/rootState';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles({
  liStyle: {
    padding: '10px',
    backgroundColor: '#808080',
  },
  ulStyle: {
    listStyleType: 'none',
    padding: 0,
  },
});
function SidePanel() {
  const classes = useStyle();
  const bookmarks = useSelector((state: rootState) => state.bmksState.bookmarks);
  const history = useHistory();
  return (
    <Box>
      <ul className={classes.ulStyle}>
        {bookmarks.map(
          (bk) =>
            bk.bookmarkName && (
              <li
                className={classes.liStyle}
                onClick={() =>
                  history.replace({
                    pathname: '/main-screen',
                    hash: bk.bookmarkName,
                  })
                }
              >
                <Typography noWrap>{bk.bookmarkName}</Typography>
              </li>
            )
        )}
      </ul>
    </Box>
  );
}

export default SidePanel;
