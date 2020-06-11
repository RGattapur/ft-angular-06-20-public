## Webpack & Typescript

- Typescript allows us to define types in our code at compile-time.
- For example, we can type the argument and return type of this arrow function.

		const double = (n: number): number => n * digit;
		
- Rename the file extension of the file: code.ts
- Change import statements to reflect the changed extension.

		import { double } from "./utils.ts";
		
- We need to add Typescript support to our Webpack setup.
- Install Typescript and its associated Webpack loader file.

		npm install typescript ts-loader -D
		
- Modify the Webpack configuration file, keeping the ES6 transpilation code.

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
			
- Add a Typescript configuration file.

		{
			"compilerOptions": {
				"outDir": "./dist/",
				"noImplicitAny": true,
				"module": "es6",
				"target": "es5",
				"jsx": "react",
				"allowJs": true
			}
		}
		
- Run the Webpack build script.
- The bundled code in build\bundle.js should be transpiled from Typescript and ES6 back to plain ES5 code.