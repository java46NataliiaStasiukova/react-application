import { Box, Button, Drawer, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { RouteType } from "../../models/RouteType";
import { Link as RouterLink} from "react-router-dom";
//Icons:
import MenuIcon from '@mui/icons-material/Menu';
const NavigatorMobile: React.FC<{items: RouteType[]}> = ({items}) => {
    //TODO
    //write implementation of Navigator for mobile devices
    //Navigator should be based on Drawer
    //const icons: any[] = [ <PlaylistAddCheckIcon/>, <PlaylistAddIcon/>, <QueryBuilderIcon/>, <AttachMoneyIcon/>, <LoginIcon/>, <LogoutIcon/>, <PlaylistAddIcon/> ];
    type Anchor = 'left';
    const [state, setState] = React.useState({left: false});
    const toggleDrawer = (anchor: Anchor, open: boolean) => () => {
      setState({...state, [anchor]: open });
    };
    function getTabs(): React.ReactNode{
        return items.map((item, i) => 
          <Box onClick={toggleDrawer('left', false)}>
            <ListItem style={{color: 'primary'}} key={item.path} component={RouterLink} to={item.path}> 
             {item.icon}
            <ListItemText primary={item.label} style={{marginLeft: '5vh'}}/>
            </ListItem>
          </Box>
        );}
    return (
        <div>
          <Button onClick={toggleDrawer("left", true)} ><MenuIcon style={{marginTop: "0px"}}/>{"Menu"}</Button>
          <Drawer open={state["left"]} onClose={toggleDrawer("left", false)}>
           {getTabs()}
          </Drawer>
        </div>
      );
}
export default NavigatorMobile;
