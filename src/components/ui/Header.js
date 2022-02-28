import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import Typography from "@material-ui/core/Typography";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from "@material-ui/styles";
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'

import logo from "../../assets/logo.svg"

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

 const useStyles = makeStyles(theme => ({
   toolbarMargin: {
     ...theme.mixins.toolbar,
     marginBottom: "3em"
   },
   logo: {
     height: "7em"
   },
   tabContainer: {
     marginLeft: 'auto'
   },
   tab: {
    ...theme.typography.tab,
     minWidth: 10,
     marginLeft: '25px'
   }
 }))

export default function Header(props) {
  const classes = useStyles()
  return (
    <React.Fragment>
      <ElevationScroll>
          <AppBar position="fixed" color="primary">
              <Toolbar disableGutters>
                <img alt="company logo" className={classes.logo} src={logo} />
                <Tabs className={classes.tabContainer}>
                  <Tab className={classes.tab} label="Home" />
                  <Tab className={classes.tab} label="Services" />
                  <Tab className={classes.tab} label="The Revolution" />
                  <Tab className={classes.tab} label="About Us" />
                  <Tab className={classes.tab} label="Contact Us" />
                </Tabs>
                <Button>
                  Free Estimate
                </Button>
                {/* <Typography variant="h3" color="secondary"> */}
                  {/* Arc Development
                </Typography> */}
              </Toolbar>
          </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}