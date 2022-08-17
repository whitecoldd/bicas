/* import * as React from 'react';
import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';

import "../../../assets/css/MuiDrop.css"

export default function MuiDrop({ DropBtn, DropContent, dropOpen }) {
    const [open, setOpen] = React.useState(dropOpen);

    const handleClick = () => {
        setOpen((prev) => !prev);
    };

    React.useEffect(() => {
        setOpen(dropOpen)
    }, [dropOpen])

    const handleClickAway = () => {
        setOpen(false);
    };

    const styles = {
        position: 'absolute',
        top: 45,
        right: 0,
        left: 0,
        zIndex: 1,
        // border: '1px solid',
        // p: 1,
        // bgcolor: 'background.paper',
    };

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <button type="button" className="dropBtn" onClick={handleClick}>
                    {DropBtn}
                </button>

                {open ? (
                    <Box sx={styles}>
                        {DropContent}
                    </Box>
                ) : null}
            </Box>
        </ClickAwayListener>
    );
} */


import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import "../../../assets/css/MuiDrop.css"

export default function MuiDrop({ DropBtn, DropItems, dropOpen }) {
    const [anchorEl, setAnchorEl] = React.useState(dropOpen);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // console.log(DropItems.props.children[0]);

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                {DropBtn}
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >

                {DropItems}

                {/* <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem> */}
            </Menu>
        </div>
    );
}