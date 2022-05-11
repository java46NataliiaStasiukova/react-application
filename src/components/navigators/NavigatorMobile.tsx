import { AppBar, Box, Drawer, IconButton, ListItem, ListItemText, Toolbar } from "@mui/material";
import React from "react";
import { RouteType } from "../../models/RouteType";
import { Link as RouterLink, useLocation} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import { getRouteIndex } from "../../util/functions";
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    const [state, setState] = React.useState(false);
    const location = useLocation();
    const getRouteIndexCallback = React.useCallback(getRouteIndex, [items, location]);
    const index = getRouteIndexCallback(items, location.pathname)
    const toggleDrawer = () => {
      setState(!state);
    };
    function getTabs(): React.ReactNode{
        return items.map(item => 
            <ListItem style={{color: 'primary'}} key={item.path} component={RouterLink} to={item.path}> 
             {item.icon}
            <ListItemText primary={item.label} style={{marginLeft: '5vh'}}/>
            </ListItem>
        );}
    return (
      <AppBar position="fixed">
      <Toolbar>
          <IconButton onClick={toggleDrawer} style={{color: 'white'}}><MenuIcon style={{marginRight: '20px'}}/>{items[index].label}</IconButton>
       
          <Drawer open={state} onClose={toggleDrawer}>
          <Box onClick={toggleDrawer}>
           {getTabs()}
           </Box>
          </Drawer>
       </Toolbar>
       </AppBar>
      );
}
export default NavigatorMobile;
