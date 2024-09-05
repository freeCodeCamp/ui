import { getCodeLanguageFromString } from "./utils";

const langMap = [
	["js", "JavaScript"],
	["javascript", "JavaScript"],
	["css", "CSS"],
	["html", "HTML"],
	["python", "python"],
	["py", "python"],
	["xml", "XML"],
	["jsx", "JSX"],
	["scss", "SCSS"],
	["sql", "SQL"],
	["http", "HTTP"],
	["json", "JSON"],
	["pug", "pug"],
];

describe("getCodeLanguageFromString", () => {
	test.each(langMap)("%p should be mapped to %p", (langCode, langName) => {
		const codeBlock = `<pre>
        <code class="language-${langCode}">some code</code>
      </pre>`;

		expect(getCodeLanguageFromString(codeBlock)).toBe(langName);
	});

	it("should return the programming language name correctly even if the string contains paragraphs", () => {
		const language = getCodeLanguageFromString(`
      <p>Foo</p>
      <pre>
        <code class="language-js">
          function favoriteAnimal(animal = 'Giant Panda') {
            return animal + " is my favorite animal!"
          }
        </code>
      </pre>
      <p>Bar</p>`);

		expect(language).toBe("JavaScript");
	});
});
