import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import logo from './logo.png';
import ForumIcon from '@material-ui/icons/Forum';


function Header() {
    return (
        <div className="header">
        <IconButton>
            <PersonIcon fontSize="large" className="headerIcon"/>
        </IconButton>
        <IconButton>
             <img src={logo} alt="" className='headerLogo' />
        </IconButton>
        <IconButton>
            <ForumIcon/>
        </IconButton>
        </div>
    )
}

export default Header
