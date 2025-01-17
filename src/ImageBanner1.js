import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Fade from '@material-ui/core/Fade';
import { useMediaQuery } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    imageBanner: {
      position: 'relative',
      backgroundColor: theme.palette.grey[800],
      color: theme.palette.common.white,
      backgroundImage: '',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      background: `linear-gradient(
        rgba(0, 0, 0, 0.9),
        rgba(0,0, 0, 0.3)
      )`
    },
    imageBannerContent: {
      position: 'relative',
      padding: theme.spacing(3),
      margin: theme.spacing(8),
      marginTop:(window.screen.height)*0.2,
      marginBottom:(window.screen.height)*0.2,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing(6),
        paddingRight: 0,
      },
    },
  }));
  
//   const post = {
//     title: 'Events @Tryst',
//     description:
//       "We are hosting some amazing events this year",
//     description2:"A CONGLOMATION OF STATE OF ART INNOVATIONS FROM AROUND THE GLOBE",
//     image: 'https://source.unsplash.com/random',
//     imgText: 'main image description',
//     linkText: ''
//   };
  export default function ImageBanner(props) {
    const largeScreen = useMediaQuery('(min-width:500px)');
    const classes = useStyles();
    const { post, ...others } = props;
    const Time=(time)=>{
      const date=new Date(time);
      // console.log(date);
      if(time==""){
        return null
      }
      return date.toLocaleTimeString('en',{ timeStyle: 'short', hour12: true, timeZone: 'UTC' });
    }
    const dateFunction=(date)=>{
      if(date==""){
        return null
      }
      var s=new Date(date)
      return(s.toDateString())
    }
    var temp=0
    return (
      <Paper className={classes.imageBanner} style={{ backgroundImage: `url(${post.image})` }}>
        {/* Increase the priority of the hero background image */}
        {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
        <div className={classes.overlay} />
        <Grid container>
            {/* <Grid item md={2}>  </Grid> */}
            <Grid item md={12} xs={12}>
                <div className={classes.imageBannerContent}>
                <Fade in={true} timeout={1000}>
                        <Typography style={{fontFamily:['Maven Pro','sans-serif'].join(','),fontSize:"25px"}} align="center" color="inherit" gutterBottom>
                            TRYST PRESENTS
                        </Typography>
                    </Fade>
                    <Fade in={true} timeout={1000}>
                        <Typography style={{fontFamily:['Muli','sans-serif'].join(','),fontSize:largeScreen?"65px":"50px"}} variant="h2" align="center" color="inherit" gutterBottom>
                            <b>{post.name}</b>
                        </Typography>
                    </Fade>
                    <Fade in={true} timeout={2000}>
                        <Typography style={{fontFamily:['Gelasio','serif'].join(','),fontSize:"25px"}} align="center" color="inherit" paragraph>
                            {post.subheading}
                        </Typography>
                    </Fade>
                    <Fade in={true} timeout={3000}>
                        <Typography variant="h6" align="center" color="inherit" paragraph>
                            {post.description}
                        </Typography>
                    </Fade>
                    {(post.dtv).map(info=>(
                      <Fade in={true} timeout={4000}>
                          <Typography variant="h6" align="center" color="inherit" paragraph>
                            {dateFunction(info.date)}, {Time(info.start_time)} to {Time(info.end_time)} <br/>
                          </Typography>
                      </Fade>
                    ))}
                    
                </div>
            </Grid>
        </Grid>
      </Paper>
    );
  }
  
  ImageBanner.propTypes = {
    post: PropTypes.object,
  };