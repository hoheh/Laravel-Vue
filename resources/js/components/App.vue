<template>
	<div class="app">
		<app-header/>
		<div class="app__content">
			<slot/>
		</div>

		<div class="app_spinner"></div>
	</div>
</template>

<script>
import AppHeader from "./AppHeader";

export default {
	name: "App",
	components: {
		"app-header": AppHeader,
	},
	props: {
		names: {
			type: String,
			default: "",
		},
	},
};
</script>

<style scoped>

</style>