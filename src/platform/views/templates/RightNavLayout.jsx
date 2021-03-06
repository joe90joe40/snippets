import React from 'react';
import { string, object, bool } from 'prop-types';

import contentRepository from 'common/content/contentRepository';
import Navigation from 'common/components/Navigation';
import LoginForm from 'common/components/LoginForm';

import LazilyLoad, { importLazy, LazilyLoadFactory } from 'platform/views/viewControllers/LazilyLoad';

function RightNav({ route, user, errors, isAuthenticated, page: { key }, layoutClass, config: { mainNavigation, routes } }) {
	return (
		<div id={ route.id }>
			<LoginForm user={ user } errors={ errors } isAuthenticated={ isAuthenticated } />
			<LazilyLoad modules={{ Test: () => importLazy( import('common/components/async/Test')) }}>
				{
					({ Test }) => (
						<Test/>
					)
				}
			</LazilyLoad>
			<div className={ `content ${layoutClass}`}>
				{ contentRepository[key] }
			</div>
			<Navigation linkList= { mainNavigation } routes={ routes } />
		</div>
	);
}

RightNav.displayName = 'RightNav';
RightNav.propTypes = {
	route: object,
	routes: object,
	user: object,
	errors: string,
	isAuthenticated: bool,
	page: object,
	layoutClass: string,
	config: object
};

export default RightNav;
