#### Setup

- Globally install Typescript using NPM.

		npm install -g typescript
		
- Create a folder that contains a code.ts Typescript file. 
- Create a Typescript configuration file named tsconfig.json in the same folder.

		{
			"compilerOptions": {
			"target": "es6"
			},
			"include":[ 
				"*.ts"
			],
		}

- Run the Typescript compiler in watch mode from the terminal

		tsc -w

- Open a 2nd terminal window in the same folder. Run the transpiled code in Node.

		node code.js
