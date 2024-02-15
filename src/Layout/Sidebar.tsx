import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TakingInput from './TakingInput';
import { Grid } from '@mui/material';
import MyCalendar from './MyCalendar';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MessageIcon from '@mui/icons-material/Message';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AppsIcon from '@mui/icons-material/Apps';
import SubHeader from './SubHeader';
import { DateRangeIcon } from '@mui/x-date-pickers';
import { Groups3, SpaceDashboard } from '@mui/icons-material';

const drawerWidth = 89;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const PersistentDrawerLeft:React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const arr = [0, 1, 2, 3, 4, 5, 6,7,8, 9, 10, 11];
  const [year, setYear] = React.useState<string>('2023');
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  
    const handleChanger = (event: React.ChangeEvent<HTMLInputElement>) => {
      setAuth(event.target.checked);
    };
  
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
  const handleChange = (event: any) => {
    setYear(event.target.value );
    return event.target.value
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MSR ICON
          </Typography>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
          >
                <HelpOutlineIcon />
          </IconButton>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
          >
                <MessageIcon />
          </IconButton>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
          >
                <ManageAccountsIcon />
          </IconButton>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                color="inherit"
          >
                <AppsIcon />
          </IconButton>
          {auth && (
            <div>
              
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
      
        sx={{
          width: drawerWidth,
          display:"flex",
          justifyContent:"space-around",
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <div style={{display:"flex", flexDirection:"column", justifyContent:"space-between", height:"100vh"}}>
        <div>
        <DrawerHeader sx={{ justifyContent:"center"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <MenuIcon />: <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          
            <ListItem sx={{justifyContent:"center"}}>
              <ListItemButton>
                <ListItemIcon>
                  <DateRangeIcon /> 
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{justifyContent:"center"}}>
              <ListItemButton>
                <ListItemIcon>
                  <SpaceDashboard /> 
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem sx={{justifyContent:"center"}}>
              <ListItemButton>
                <ListItemIcon>
                  <Groups3 /> 
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
        
        </List>
        
        </div>

        <ListItem>
        <ListItemButton style={{backgroundColor:"blue", height:"50px", width:"50px", borderRadius:"50%", margin:"auto", marginBottom:"20px", display:"flex", justifyContent:"center"}}>
          <h2 style={{color:"white", textWrap:"balance", display:"flex", alignItems:"center"}}>?</h2>
        </ListItemButton>
        </ListItem>
        </div>
      </Drawer>
      
      <Main open={open}>
        <DrawerHeader />
        <SubHeader/>
        <TakingInput value={year} handleChange={handleChange}/>
        <Grid container spacing={2} sx={{justifyContent:"center"}}>
       {
      arr.map((value)=><MyCalendar key={value} year={Number(year)} value={value} />)
      } 

      </Grid>
      </Main>
    </Box>
  );
}
export default PersistentDrawerLeft;