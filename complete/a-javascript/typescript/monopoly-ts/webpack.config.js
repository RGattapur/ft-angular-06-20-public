module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.tsx?$/,
				loader: "ts-loader",
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: [".tsx", ".ts", ".js"]
	}
};
