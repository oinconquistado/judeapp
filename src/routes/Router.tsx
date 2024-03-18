import Login from "pages/Login/Login";
// Import the necessary modules
import { NonIndexRouteObject, createBrowserRouter } from "react-router-dom";

// Create the route object
const routeObject: NonIndexRouteObject[] = [
	{
		path: "/",
		element: <Login />,
	},
];

// Create the router instance
const router = createBrowserRouter(routeObject);

// Export the router instance
export default router;
