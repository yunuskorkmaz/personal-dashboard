import { Layout } from 'antd';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import ApplicationsPage from '../pages/ApplicationsPage';
import NginxPage from '../pages/NginxPage';
import AppSidebar from './AppSidebar';

import './layout.css'

const AppLayout = (props) => {

	return (
		<>
			<HashRouter>
				<Layout style={{ minHeight: '100vh' }}>
					<AppSidebar />
					<Layout>
						<Layout.Content>
							<Switch>
								<Route exact path={'/'} component={ApplicationsPage} />
								<Route path={'/nginx'} component={NginxPage} />
							</Switch>
						</Layout.Content>
					</Layout>
				</Layout>
			</HashRouter>
		</>
	)
}

export default React.memo(AppLayout);