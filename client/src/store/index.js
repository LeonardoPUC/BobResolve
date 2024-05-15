import { configureStore } from "@reduxjs/toolkit";
import favorite from "./features/favorites";

export default configureStore({
	reducer: {
		favorite,
	}
});
