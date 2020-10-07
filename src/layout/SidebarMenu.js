import { Menu } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { applicationMenu } from '../router/routerConst';

const SidebarMenu = () => {
	const renderSideBarMenu = (sideMenu) => {
        return sideMenu.map((item, index) => drawMenuItem(item, index))
    }

    const drawMenuItem = (item, index) => {
        if (item.children.length > 0) {
            return (
                <Menu.SubMenu key={item.id} icon={item.icon} title={item.text}>
                    {renderSideBarMenu(item.children)}
                </Menu.SubMenu>
            )
        } else {
            return (
                <Menu.Item key={item.id} icon={item.icon}>
                    <Link to={item.route}>
                        {item.text}
                    </Link>
                </Menu.Item>
            )
        }

	}
	
	return (
		<Menu defaultSelectedKeys={[]} mode={'inline'}>
			{renderSideBarMenu(applicationMenu)}
		</Menu>
	)
}

export default SidebarMenu;