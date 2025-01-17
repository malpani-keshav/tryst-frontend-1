import React, { Component, useState } from 'react'
import { Button, TextField, FormControl, Grid, Typography, Container, makeStyles, Paper, Fade } from '@material-ui/core';
import { Link } from "react-router-dom";
import NavBar from '../TopNavBar';

const useStyle = makeStyles (() => ({
    overlay:{
        position: 'relative',
        marginTop:40
        
    },
    paper:{
        position:"absolute",
        bottom:0,
        top:0,
        left:0,
        right:0,
        backgroundColor:"#7BC5AE"
    },
    input:{
        "&:-webkit-autofill": {
            WebkitBoxShadow: "0 0 0 1000px #7BC5AE inset"
        }
    },
    link:{
        textDecoration:"none",

    }
    
}))
export default function SignIn(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailError,setEmailError]=useState("");
    const [passwordError,setPasswordError]=useState("");
    const emailRegex=/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    
    const handleSubmit=()=>{
        //to do
    }
    
    const classes=useStyle();
    return(
        <Paper className={classes.paper}>
            <NavBar threshold={0}/>
            <Fade in={true} timeout={2000}>
                <Container maxWidth="xs"className={classes.overlay} >
                    <Typography component="h1" variant="h3" >
                        Sign In
                    </Typography>
                    <br/>
                    <form onSubmit={handleSubmit}>
                        <FormControl style={{margin:10}}>
                            <Grid container className={classes.grid}>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email Address"
                                        value={email}
                                        required
                                        fullWidth
                                        inputProps={{ className: classes.input }}
                                        variant="outlined"
                                        onChange={e=>setEmail(e.target.value)}
                                        error={emailError.length===0?false:true}
                                        helperText={emailError}
                                        onBlur={()=>{setEmailError(email.length===0||!emailRegex.test(email)?"Invalid Email":"")}}
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    
                                </Grid>
                                <br/>
                                <Grid item xs={12}>
                                    <br/>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        placeholder="At least 8 characters long"
                                        value={password}
                                        required
                                        inputProps={{ className: classes.input }}
                                        variant="outlined"
                                        fullWidth
                                        onChange={e=>setPassword(e.target.value)}
                                        error={passwordError.length===0?false:true}
                                        helperText={passwordError}
                                        onBlur={()=>setPasswordError(password.length<8?"Password must be at least 8 characters long":"")}
                                        type="password"
                                        autoComplete="current-password"
                                    />
                                </Grid>
                            </Grid>
                            <br/>
                            <Button className=".zoom" type="submit" variant="contained" color="primary" component="span" >
                                Submit
                            </Button>
                            <Grid container style={{marginTop:10}}>
                                <Grid item xs alignContent="flex-start" >
                                    <Link href="#" variant="body2" className={classes.link}>
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link to="/signUp" variant="body2" className={classes.link} >
                                        Don't have an account? Sign Up
                                    </Link>
                                </Grid>
                            </Grid>
                        </FormControl>
                    </form>
                </Container>
            </Fade>
        </Paper>
            
    )
}