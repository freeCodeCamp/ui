import fs from "fs";
import path from "path";
import { promisify } from "util";

import { component, story, test, barrel, type } from "./gen-component-template";

const writeFile = promisify(fs.writeFile);

// Grab component name from terminal argument
const [name] = process.argv.slice(2);
if (!name) {
	throw new Error("You must include a component name.");
}

if (!/^[A-Z]/.exec(name)) {
	throw new Error("Component name must be in PascalCase.");
}

const toKebabCase = (pascalCasedName: string) =>
	pascalCasedName
		.replace(/([A-Z][a-z])/g, "-$1") // Add a hyphen before each capital letter
		.toLowerCase()
		.substring(1); // Return the string but exclude the hyphen at the beginning

const kebabCasedName = toKebabCase(name);

const dir = path.join(import.meta.dirname, `../src/${kebabCasedName}`);

// Throw an error if the component's folder already exists
if (fs.existsSync(dir)) {
	throw new Error("A component with that name already exists.");
}

// Create the folder
fs.mkdirSync(dir);

// Create the component file - my-component.tsx
writeFile(`${dir}/${kebabCasedName}.tsx`, component(name));

// Create the type file - types.ts
writeFile(`${dir}/types.ts`, type(name));

// Create the test file - my-component.test.tsx
writeFile(`${dir}/${kebabCasedName}.test.tsx`, test(name));

// Create the Storybook file - my-component.stories.tsx
writeFile(`${dir}/${kebabCasedName}.stories.tsx`, story(name));

// Create the barrel file - index.ts
writeFile(`${dir}/index.ts`, barrel(name, kebabCasedName));

console.log(`The ${name} component has been created successfully! 🎉`);
