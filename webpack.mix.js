const mix = require("laravel-mix");
const path = require("path");

const array = [
	"",
];

const alias = array.reduce(
	(result, name) => {
		result[`${name}`] = path.resolve(
			__dirname,
			"",
		);
		return result;
	},
	{
		"@": path.join(__dirname, "resources"),
	},
);

mix
	.webpackConfig({
		resolve: {alias},
	})
	.js("resources/js/app.js", "public/js")
	.sass("resources/sass/app.scss", "public/css")
	.vue();


