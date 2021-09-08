import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
	{
		name: "",
		path: "",
		component: "",
	},
];

export const router = new VueRouter({
	mode: "history",
	routes,
});