import React from 'react';
import { shallow } from 'enzyme';

import Navigation from 'views/components/Navigation.jsx';

const LINKS = [ '/', '/route1', '/route3' ];
const ROUTINGDATA = {
	'/': {
		external: false,
		page: {
			title: 'Home'
		}
	},
	'/route1': {
		external: false,
		page: {
			title: 'Contact'
		}
	},
	'/route2': {
		external: false,
		page: {
			title: 'About'
		}
	},
	'/route3': {
		external: true,
		page: {
			title: 'Info'
		}
	},
	'/route4': {
		external: false,
		page: {
			title: 'More info'
		}
	}
};

describe('given a Navigation component', () => {
	let navigation;

	describe('when it NOT provided with a set of URI`s', () => {
		before(() => navigation = shallow(<Navigation linkList={ [] } routes={ {} } />));

		it('should NOT render any links', () => {
			assert(navigation.find('li').isEmpty());
		});
	});

	describe('when it is provided with a set of URI`s', () => {
		before(() => navigation = shallow(<Navigation linkList={ LINKS } routes={ ROUTINGDATA } />));

		it('should render the correct number of links', () => {
			expect(navigation.find('li')).to.have.length(LINKS.length);
		});

		it('should contain the correct route for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.props().to).to.equal(LINKS[index]);
			});
		});

		it('should render the correct title for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.children().text()).to.equal(ROUTINGDATA[LINKS[index]].title);
			});
		});

		it('should contain the correct external setting for each link', () => {
			navigation.find('Link').forEach((node, index) => {
				expect(node.props().external).to.equal(ROUTINGDATA[LINKS[index]].external);
			});
		});
	});

});
