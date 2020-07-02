import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import MobilRightMenuSlider from '@material-ui/core/Drawer'
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box,
    ListItemIcon
} from '@material-ui/core';

import {
    ArrowBack,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons'
import avatar from '../avatar.png'

///css styles
const useStyles = makeStyles(theme=>({
    menuSliderContainer: {
        width: 250,
        background: '#511',
        height: '100%'

    },
    avatar: {
        display: 'block',
        margin:'0.5rem auto',
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem: {
        color: 'tan'
    }
}))

const menuItems= [
    {
        listIcon: <Home/>,
        listText: "Home",
        listPath: '/'
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "AssignmentInd",
        listPath: '/resume'
    },
    {
        listIcon: <Apps/>,
        listText: "Portofolio",
        listPath: '/portofolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contact",
        listPath: '/contact'
    }
]



const Navbar = () => {
    const [state, setState] = useState({
        right: false
    })

    const toggleSlider = (slider,open)=>()=> {
        setState({...state, [slider]: open})
    }
    const classes = useStyles()

    const sideList = slider => (
        <Box 
        component='div' 
        className={classes.menuSliderContainer}
        onClick={toggleSlider(slider, false)}
        >
            <Avatar className={classes.avatar} src={avatar} alt='Aldi Anugra'/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                        {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText primary={lsItem.listText} className={classes.listItem}/>
                    </ListItem>
                ))}
                
            </List>
        </Box>

    )
    
    return (
        <>
           
            <Box component='nav'>
                <AppBar position='static' style={{background: '#222'}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider('right', true)}>
                            <ArrowBack style={{color: 'tomato'}}></ArrowBack>
                        </IconButton>
                        <Typography variant="h5" style={{color: 'tan'}}>
                            Portofolio
                        </Typography>
                        <MobilRightMenuSlider
                        onClose={toggleSlider('right', false)}
                        anchor='right'
                        open={state.right}>
                                {sideList('right')}
                        </MobilRightMenuSlider>
                        
                    </Toolbar>
                </AppBar>
            </Box>
        
        </>
        
    )
}

export default Navbar
