import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import '../App.css'
import {
  // BrowserRouter as Router,
  // Switch,
  // Route,
  Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit">
          <Link className="Navlink" to="/">Home</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link className="Navlink" to="/project">Projects</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link className="Navlink" to="/contacts">Contacts</Link>
          </Typography>
          <Typography variant="h6" color="inherit">
          <Link className="Navlink" to="/Formcontact">FormContact</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
