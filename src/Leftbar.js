import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';

export default function Leftbar() {
    
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem >Dashboard</MenuItem>
                    <SubMenu title="Front End" icon={<FormatItalicIcon/>}>
                        <MenuItem>Website #1</MenuItem>
                        <MenuItem>Website #2</MenuItem>
                    </SubMenu>
                    <SubMenu title="Full stack" >
                        <MenuItem>Website #1</MenuItem>
                        <MenuItem>Website #2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>;    
        </div>
    )
}
