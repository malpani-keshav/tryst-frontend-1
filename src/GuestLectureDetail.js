import React, { useEffect, Fragment } from 'react';
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button, useMediaQuery, Container } from '@material-ui/core';
import GuestLectureSection from './GuestLectureSection'
import NavBar from './TopNavBar';
import axios from 'axios';
import { MetaTags } from 'react-meta-tags';

const theme = createMuiTheme({
    palette: {
      primary: { main: '#2196F3' },
      secondary: { main: '#192841' }
    }
  });
  const useStyles = makeStyles(th => ({
    background:  {
      marginTop:60,
    },
    sections:  {
        marginRight:15,
      },
    container:{
        position:"relative",
        overflowX:"hide"
    },
    img:{
        width:"100%",
        height:"50%",
    },
    topContainer:{
        position:"absolute",
        top:0,
    }
}))
// useEffect(()=>{
//     axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
//     .then(res=>{const data=res.data
//         // console.log(data.data)
//         setData([(data.data)])
//         // console.log(value)
//     });
//   },[])
var id;
export default function GuestLectureDetail(props){

    // const {left_side,backgroundColor}=props;
    const [value,setValue]=React.useState([]);
    const [data,setData]=React.useState([]);
    useEffect(()=>{
        axios.get('https://backend2020.tryst-iitd.org/api/event/view/'+(props.match.params.id))
        .then(res=>{const data=res.data
            console.log(data.data)
            setData(data.data);
            setValue((data.data.photos));
            id=data.data.id;
            // console.log(id)
            // console.log("dbsafjbazvbzvhk")
            // console.log(value)
        });
      },[])
    var left_side=true;
    const classes=useStyles();
    const largeScreen = useMediaQuery('(min-width:500px)');
    const checkDisabled=(deadline)=>{
        // console.log(deadline);
        const deadline_date=new Date(deadline);
        // console.log(deadline_date);
        const today=new Date();
        if(today.getTime()<deadline_date.getTime()){
            return false;
        }
        else{
            return true;
        }
    }
    const dateFunction=(date)=>{
        var s=new Date(date)
        return(s.toDateString())
    }
    const Time=(time)=>{
        const date=new Date(time);
        // console.log(date);
        return date.toLocaleTimeString('en',{ timeStyle: 'short', hour12: true, timeZone: 'UTC' });
    }
    return(
        <ThemeProvider theme={theme}>
            <MetaTags>
                <meta name="title_Page" content="TRYST 2020, IIT Delhi, Guest Lectures" />
            </MetaTags>
            <div style={{position:"fixed", width:"100%",height:"100%",zIndex:"-1",backgroundColor:"#141f33"}}></div>
            <div className={classes.topContainer}>
                <div className={classes.container}>
                    <NavBar threshold={10} backgroundColor="#192841"/>
                    <div  className={classes.background}>
                        {(data.dtv)?(data.dtv).map(info=>(
                            <div>
                                {"General"==info.type?
                                    <Container>
                                        <br/>
                                        <Typography variant="h6" style={{color:"white"}}>Date: {dateFunction(info.date)},  {Time(info.start_time)} to {Time(info.end_time)}  </Typography>
                                         <Typography variant="h6" style={{color:"white"}}>Venue: {info.venue}  </Typography>
                                        {/*<Typography variant="h6" style={{color:"white"}}></Typography>
                                        <Typography variant="h6" style={{color:"white"}}> </Typography> */}
                                        <hr style={{marginTop:5}}></hr>
                                    </Container>
                                :
                                null}
                            </div>
                        )):null}
                    </div>
                    <div className={classes.sections}>
                        {value.map(lecturer=>
                            <>
                            <GuestLectureSection left_side={left_side} lecturer={lecturer}/>
                            {left_side=!left_side}
                            </>
                        )}
                    </div>
                    {data.reg_status?
                        (!checkDisabled(data.reg_deadline)?
                            <div style={{position:"fixed", bottom:40,right:largeScreen?40:20}}>
                                <Button variant="contained" color="secondary" href={"/register/"+props.match.params.id} size="large">Register</Button>
                            </div>
                        :null)
                    :null}
                    {/* {console.log(data)} */}
                </div>
            </div>
        </ThemeProvider>
    )
} 