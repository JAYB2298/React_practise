import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon/>
            </IconButton>
            </div>
    )
}
