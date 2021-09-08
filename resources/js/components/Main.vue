<template>
	<div class="content">
		<p>{{ title }}</p>
	</div>
</template>

<script>

export default {
	name: "Main",
	props: {
		title: {
			type: String,
		},
	},
};
</script>

<style lang="scss" scoped>
.app {
	padding: 20px 0;

	.header {
		.logo {
			display: flex;

			&__title {
				&-citizen {

				}
			}
		}
	}

}

</style>