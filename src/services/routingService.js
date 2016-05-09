import director from 'director';
import routes from 'configuration/routes';
import NavigateAction from 'actions/NavigateAction';

let bindEvents = { routes: routes };

for (let route in routes) {
	if (routes.hasOwnProperty(route)) {
		let _route = route === '' ? routes[route] : route;
		let callback = new CallbackObj(_route);
		bindEvents[route] = callback.fn;
	}
}

function CallbackObj(_route) {
	this.fn = () => NavigateAction.navigateTo(_route);
}

delete bindEvents.routes;

export default new director.Router(bindEvents).configure({ html5history: true });
