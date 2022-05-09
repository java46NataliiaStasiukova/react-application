import { Box, Button, Drawer, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { RouteType } from "../../models/RouteType";
import { Link as RouterLink} from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    const [state, setState] = React.useState(false);
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
        <div>
          <Button onClick={toggleDrawer} ><MenuIcon style={{marginTop: "0px"}}/>{"Menu"}</Button>
          <Drawer open={state} onClose={toggleDrawer}>
          <Box onClick={toggleDrawer}>
           {getTabs()}
           </Box>
          </Drawer>
        </div>
      );
}
export default NavigatorMobile;
