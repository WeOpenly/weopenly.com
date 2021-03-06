import React, { Component } from 'react';
import Link from 'gatsby-link';
import { isMobileOnly } from 'react-device-detect';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Feedback from './Feedback';
import withRoot from '../withRoot';

const styles = theme => ({
  footer: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 6,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  containerMobile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  copyright: {
    marginRight: theme.spacing.unit,
  },
  item: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: theme.spacing.unit,
  },
  privacy: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: theme.spacing.unit,
  },
  link: {
    // textDecoration: 'none',
  },
  a: {
    color: 'rgba(30, 30, 50,0.87)',
  },
});


class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Grid container>
        <Grid item xs={0} md={1} />
        <Grid item xs={12} md={10}>
          <footer className={classes.footer}>
            {!isMobileOnly
            ? <Grid container className={classes.container}>
              <Grid item xs={12} md={4} className={classes.copyright}>
                <Typography>
                  Copyright © 2018 Openly Technologies, Inc.
                </Typography>
              </Grid>
              <Grid item xs={12} md={4} className={classes.item}>
                <a href="mailto:team@weopenly.com">
                  <Typography>
                    Contact
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12} md={1} className={classes.item}>
                <Link to="/terms/" className={classes.link}>
                  <Typography>Terms</Typography>
                </Link>
              </Grid>
              <Grid item xs={12} md={1} className={classes.privacy}>
                <Link to="/privacy/" className={classes.link}>
                  <Typography>Privacy</Typography>
                </Link>
              </Grid>
            </Grid>
            : <Grid container className={classes.containerMobile}>
              <Grid item xs={12}>
                <Link to="/terms/" className={classes.link}>
                  <Typography>Terms</Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <Link to="/privacy/" className={classes.link}>
                  <Typography>Privacy</Typography>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <a href="mailto:team@weopenly.com">
                  <Typography>
                    Contact
                  </Typography>
                </a>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  Copyright © 2018 Openly Technologies, Inc.
                </Typography>
              </Grid>
            </Grid>}
          </footer>
        </Grid>
        <Grid item xs={0} md={1} />
      </Grid>
    );
  }
}

export default withRoot(withStyles(styles)(Footer));
