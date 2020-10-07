import React, { useEffect, useState } from 'react';
import { Layout } from 'antd';
import { useMediaQuery } from 'react-responsive';

import SidebarMenu from './SidebarMenu';

const AppSidebar = () => {

	const [collapseSidebar, setCollapseSidebar] = useState(false);

	const isMobile = useMediaQuery({
		query : '(max-width: 599px)',
	});

	useEffect(() => {
		setCollapseSidebar(isMobile);
	},[isMobile])

	return(
		<>
			<Layout.Sider collapsible collapsed={collapseSidebar} onCollapse={setCollapseSidebar}>
				<div className="logo" />
				<SidebarMenu />
			</Layout.Sider>
		</>
	)
}

export default AppSidebar;