import { Avatar, Divider, ListItemIcon, Menu, MenuItem, Tooltip } from "@mui/material";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoMdLogOut, IoMdPersonAdd, IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const MenuI = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar /> My account
        </MenuItem>
        <Divider />
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoMdPersonAdd fontSize="small" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoMdSettings fontSize="small" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <IoMdLogOut fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
  )
};

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex justify-between items-center px-5 py-5 w-full bg-black'>
      <img src="/imgs/logo.png" alt="logo" width={90} />
      {/* <Link to={'/user'}> */}
      <Tooltip title="Account settings">
        <p className="flex items-center gap-1 cursor-pointer"
          onClick={handleClick}
        >
          <FaRegUser /> Mark Ogilo</p>
          <Menu />
      </Tooltip>
        {/* <Button
          variant='outlined'
          size='small'
          className='h-fit w-fit'
          sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'black', color: 'white', borderColor: 'white' } }}
        >Login</Button> */}
      {/* </Link> */}

      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            backgroundColor: 'black',
            color: 'white',
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'black',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} sx={{
          "&:hover": { backgroundColor: "#242424" }
        }}>
          <Avatar /> Profile
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{
          "&:hover": { backgroundColor: "#242424" }
        }}>
          <Avatar /> My account
        </MenuItem>
        <Divider className="bg-gray-500" />
        <MenuItem onClick={handleClose} sx={{
          "&:hover": { backgroundColor: "#242424" }
        }}>
          <ListItemIcon>
            <IoMdPersonAdd color="white" />
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose} sx={{
          "&:hover": { backgroundColor: "#242424" }
        }}>
          <ListItemIcon>
            <IoMdSettings color="white" />
          </ListItemIcon>
          Settings
        </MenuItem>
        <Link to={'/'}>
          <MenuItem onClick={handleClose} sx={{
            "&:hover": { backgroundColor: "#242424" }
          }}>
            <ListItemIcon>
              <IoMdLogOut color="white" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </div>
  )
}

export default Header