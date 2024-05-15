import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layout/RootLayout";
import { Home } from "../pages/Home";
import { MovieDetails } from "../pages/movieDetails/MovieDetails";
import { Favorites } from "../pages/Favorites";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/movie/:movieId",
				element: <MovieDetails />
			},
			{
				path: "/favorites",
				element: <Favorites />
			}
		]
	}
])
