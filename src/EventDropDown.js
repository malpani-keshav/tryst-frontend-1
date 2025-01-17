import React from 'react';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Typography } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';

const largeButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: theme.spacing(2),
    },
  }));

const smallButtonStyle = makeStyles(theme => ({
    root: {
        transition: 'all 0.5s',
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        marginRight: theme.spacing(1),
    },
}));

const linkStyle = makeStyles(theme => ({
    link: {
        textDecoration: "none",
        color: "black"
    },
}));

const StyledMenu = withStyles({
    paper: {
        border: '0px solid #d3d4d5',
        borderRadius: '0px',
        backgroundColor:'#5D8AA8',
    },
    })(props => (
    <Menu
        elevation={1}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        {...props}
    />
    ));

const StyledMenuItem = withStyles(theme => ({
    root: {
        '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
            color: theme.palette.common.white,
        },
        },
    },
    }))(MenuItem);

function EventDropDown(props) {
    const {children, history, ...others} = props;
    const classesLarge = largeButtonStyle();
    const classesSmall = smallButtonStyle();
    const trigger = useScrollTrigger();
    const largeScreen = useMediaQuery('(min-width:600px)');
    const [anchorEl, setAnchorEl] = React.useState(null);
    const linkClasses = linkStyle();


    const handleClick = event => {
        // For the coming soon version just navigate to one page
        setAnchorEl(event.currentTarget);
        // history.push('/events');
    }

    const handleClose = event => {
        setAnchorEl(null);
    }

    if (!trigger && largeScreen) {
        return (
            <div>
                <Button className={classesLarge.root} size="large" onClick={handleClick} {...others}> 	
                    <Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Events</Typography>
                </Button>
                <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem>
                    <Link className={linkClasses.link} to="/events#home">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>All events</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Competitions">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Competitions</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Workshops">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Workshops</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Flagship">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Flagship</Typography></StyledMenuItem>
                    </Link>
                    {/* <Link className={linkClasses.link} to="/events#section4">
                        <StyledMenuItem onClick={handleClose}>Event Section 4</StyledMenuItem>
                    </Link> */}
                </StyledMenu>
            </div>
        );
    } else {
        return (
            <div>
                <Button className={classesSmall.root} size="small" onClick={handleClick} {...others}> 	
                    <Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px"}}>Events</Typography>   
                </Button>
                <StyledMenu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableAutoFocusItem>
                <Link className={linkClasses.link} to="/events#home">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>All events</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Competitions">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Competitions</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Workshops">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Workshops</Typography></StyledMenuItem>
                    </Link>
                    <Link className={linkClasses.link} to="/events#Flagship">
                        <StyledMenuItem onClick={handleClose}><Typography style={{fontFamily:['Josefin Sans','sans-serif'].join(','),fontSize:"17px",color:"#FFFFFF"}}>Flagship</Typography></StyledMenuItem>
                    </Link>
                    {/* <Link className={linkClasses.link} to="/events#section4">
                        <StyledMenuItem onClick={handleClose}>Event Section 4</StyledMenuItem>
                    </Link> */}
                </StyledMenu>
            </div>
        );
    }
}

export default withRouter(EventDropDown);