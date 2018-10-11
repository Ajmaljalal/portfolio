import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

import SideDrawer from './SideDrawer';

class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value,
            
        })
    }

    handleScroll = () => {
        if(window.scrollY > 0){
            this.setState({
                headerShow: true
            })

        } else {
            this.setState({
                headerShow: false
            })
        }
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }


    render() {
        return (
        <div>
            <AppBar
                position = 'fixed'
                style = {{
                    backgroundColor: this.state.headerShow ? '#2f2f2f' : 'transparent',
                    boxShadow: 'none',
                    padding: '10px 0'
                }}
            >
            
                <Toolbar>
                    <div className='header_logo'>
                        <div className='font_righteous header_logo_venue'>Ajmal</div>
                        <div className='header_logo_title'>Your web developer friend</div>
                    </div>

                    <IconButton
                        area_lable='Menu'
                        color='inherit'
                        onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>

                <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value) => this.toggleDrawer(value)}
                 />

            </AppBar>
        </div>
        )
    }
}


export default Header;

