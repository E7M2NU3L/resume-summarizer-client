import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AppRegistrationRounded, Book, ExploreRounded, Login, Logout, Menu, NextPlan, Person2 } from '@mui/icons-material'
import { Typography } from '@mui/material';

export default function DrawerComponent() {
  const [open, setOpen] = React.useState(false);
  const [loggedIn, setLogin] = React.useState(true);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleLogin = () => {
    try {
      setLogin(true);
    } catch (error : unknown) {
        if(error instanceof Error){
          console.log(error.message);
        }
        else {
          console.log("Error Unknown");
        }
    }
  }

  const DrawerList = (
    <Box sx={{ width: 250, height: "full", background: "#F4F5F7"}} role="presentation" onClick={toggleDrawer(false)} >
      <List>
    {[
        {
          id: 1,
          content: 'Resume',
          Icon: <Book className='text-admin-1'/>,
        },
        {
          id: 2,
          content: 'CV',
          Icon: <ExploreRounded className='text-admin-1'/>,
        },
        {
          id: 3,
          content: 'Planning',
          Icon: <Person2 className='text-admin-1'/>,
        }
    ].map((text) => (
        <ListItem key={text.id} disablePadding>
            <ListItemButton className="transition-all duration-150 ease-in-out">
                <ListItemIcon className="text-admin-2">
                    {text.Icon}
                </ListItemIcon>
                <Typography
                    className="text-admin-1"
                    sx={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                    }}
                >
                    {text.content}
                </Typography>
            </ListItemButton>
        </ListItem>
    ))}
</List>

      <Divider />
      {(loggedIn === false) ? (
        <React.Fragment>
          <List>
            {['Sign in', 'Login'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <Login className='text-admin-1' /> : <AppRegistrationRounded  className='text-admin-1'/>}
                  </ListItemIcon>
                   <Typography
                    className="text-admin-1"
                    sx={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                    }}
                >
                    {text}
                </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <List>
            {['Go to Console', 'Logout'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <NextPlan className='text-admin-1' /> : <Logout className='text-admin-1'/>}
                  </ListItemIcon>
                   <Typography
                    className="text-admin-1"
                    sx={{
                        fontFamily: "Oswald, sans-serif",
                        fontWeight: 600,
                    }}
                >
                    {text}
                </Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </React.Fragment>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <Menu />
      </Button>
      <Drawer open={open} anchor='right' onClose={toggleDrawer(false)} sx={{
          
      }} >
        {DrawerList}
      </Drawer>
    </div>
  );
}
