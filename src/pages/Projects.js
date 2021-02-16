import React from 'react';
import img1 from '../images/img1.JPG';
import img2 from '../images/img2.JPG';
import img3 from '../images/img3.JPG';
import img4 from '../images/img4.JPG';
import img5 from '../images/img5.JPG';
import { Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
export default function Projects() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
     <h1 style={{textAlign:"center", color:"lightseagreen"}}>My Projects</h1>
     <div>
     <Grid container spacing={3}>
     <Grid item xs={6}> <Paper className={classes.paper}>
     <div> <img src={img1} alt="Project-1"  width="400" height="300"/></div>
     </Paper>
         </Grid>
     <Grid  item xs={6}> <Paper className={classes.paper}>
         <div><img src={img2} alt="Project-2" width="400" height="300"/></div></Paper>
         </Grid>
     <Grid item xs={6}><Paper className={classes.paper}>
         <div> <img src={img3} alt="Project-3" width="400" height="300"/></div></Paper>
         </Grid>
     <Grid item xs={6}> <Paper className={classes.paper}>
         <div><img src={img4} alt="Project-4"  width="400" height="300"/></div></Paper>
         </Grid>
     <Grid item xs={6}><Paper className={classes.paper}>
         <div> <img src={img5} alt="Project-5" width="400" height="300"/></div></Paper>
         </Grid>
     </Grid>
     </div>
        </div>
    )
}