<template>
	<div>
		<ul>
			<li v-for="(attr, idx) of this.$attrs" :key="idx">
				{{ attr }}
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: "AppPage",
};
</script>

<style scoped>

</style>