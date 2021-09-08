import Vue from "vue";

import {router} from "./router/main";

import App from "@/js/components/App";
import AppPage from "@/js/components/App-Page";

Vue.component("AppPage", AppPage);

const app = new Vue({
	el: "#app",
	router,
	components: {App},
});

