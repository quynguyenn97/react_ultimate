import "react-pro-sidebar/dist/css/styles.css";
import {
    ProSidebar,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from "react-pro-sidebar";

const SideBar = () => {
    return (
        <div>
            <ProSidebar>
                <Menu iconShape="square">
                    <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
                    <SubMenu title="Components" icon={<FaHeart />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </ProSidebar>
            ;
        </div>
    );
};

export default SideBar;
