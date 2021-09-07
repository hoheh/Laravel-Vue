import Vue from "vue";

import Main from "./components/Main";

window.Vue = new Vue({
	render: h => h(Main),
}).$mount("#app");
