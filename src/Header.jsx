import React from 'react';
import { AppBar, Toolbar, InputBase, Popover, Typography } from '@material-ui/core';
import { Search, PermIdentityOutlined, LocalMallOutlined, Favorite } from '@material-ui/icons';
import { SearchBar, UserMenu, NavBar, NavItem, UserMenuItem } from './HeaderStyles';
import logo from './Myntra.png'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            anchorEl: false
        }
    }

    handlePopoverOpen = event => {
        this.setState({ anchorEl: true });

    };

    handlePopoverClose = () => {
        this.setState({ anchorEl: false });
    };

    render() {
        return (
            <div>
                <AppBar color='' position='static'>
                    <Toolbar>
                        <div>
                            <img style={{ height: '65px' }} src={logo} alt='Logo' />
                        </div>
                        <div style={NavBar}>
                            <span style={NavItem} >
                                <a style={{ textDecoration: 'none' }} href="/" >MEN</a>
                            </span>
                            <span style={NavItem}>
                                <a style={{ textDecoration: 'none' }} href="/" >WOMEN</a>
                            </span>
                            <span style={NavItem}>
                                <a style={{ textDecoration: 'none' }} href="/" >KIDS</a>
                            </span>
                            <span style={NavItem}>
                                <a style={{ textDecoration: 'none' }} href="/" >HOME AND LIVING</a>
                            </span>
                        </div>
                        <div style={SearchBar} >
                            <span>
                                <Search />
                            </span>
                            <InputBase
                                color='primary'
                                placeholder="Search for Products, brands and more."
                                inputProps={{ 'aria-label': 'search' }}
                                fullWidth='true'
                            />
                        </div>
                        <div style={UserMenu}>
                            <span style={UserMenuItem}>
                                <PermIdentityOutlined fontSize='large'
                                    onMouseEnter={this.handlePopoverOpen}
                                    onMouseLeave={this.handlePopoverClose}
                                />
                                <Popover
                                    id="mouse-over-popover"
                                    open={this.state.anchorEl}
                                    anchorEl={this.state.anchorEl}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    onClose={this.handlePopoverClose}
                                    disableRestoreFocus
                                >
                                    <Typography>I use Popover</Typography>
                                </Popover>
                            </span>
                            <span style={UserMenuItem} >
                                <Favorite fontSize='large' />
                            </span>
                            <span style={UserMenuItem}>
                                <LocalMallOutlined fontSize='large' />
                            </span>
                        </div>
                    </Toolbar>
                </AppBar>
            </div >
        );
    }
}

export default Header;