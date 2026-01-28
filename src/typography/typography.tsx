import React from "react";

export const Typography = (): JSX.Element => {
	return (
		<div className="p-4">
			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Headings</div>
				<h1>Heading 1</h1>
				<h2>Heading 2</h2>
				<h3>Heading 3</h3>
				<h4>Heading 4</h4>
				<h5>Heading 5</h5>
				<h6>Heading 6</h6>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Paragraph</div>
				<p>
					This is a paragraph of text. It demonstrates the default styling
					applied to paragraph elements by the base stylesheet. Lorem ipsum
					dolor sit amet, consectetur adipiscing elit.
				</p>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Links</div>
				<p>
					This is a paragraph with{" "}
					<a href="https://www.freecodecamp.org">a link</a> in it.
				</p>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Text Formatting</div>
				<p>
					<strong>This text is bold</strong> and <b>this is also bold</b>.
				</p>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Lists</div>
				<h3>Unordered List</h3>
				<ul>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ul>

				<h3>Ordered List</h3>
				<ol>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ol>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Code</div>
				<p>
					Inline code example: <code>{`const example = "Hello World";`}</code>
				</p>
				<pre>
					<code>{`function greet(name) {
  return "Hello, " + name;
}`}</code>
				</pre>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Blockquote</div>
				<blockquote>
					This is a blockquote. It is used to highlight quoted text or important
					information.
				</blockquote>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Label</div>
				<label htmlFor="example-input">Example Label</label>
				<input
					id="example-input"
					type="text"
					placeholder="Enter text here"
					className="border-1 border-gray-450 p-2 w-full"
				/>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Legend</div>
				<fieldset className="border-1 border-gray-450 p-4">
					<legend>Form Section</legend>
					<p>Content within a fieldset with a legend element.</p>
				</fieldset>
			</section>

			<hr />

			<section className="mb-6">
				<div className="text-lg font-bold mb-4">Ruby Annotation (Furigana)</div>
				<p>
					Japanese text with furigana annotations:{" "}
					<ruby>
						漢字<rt>かんじ</rt>
					</ruby>
					です。
				</p>
				<p>
					The word{" "}
					<ruby>
						東京<rt>とうきょう</rt>
					</ruby>{" "}
					means Tokyo.
				</p>
				<h3>Ruby in Lists</h3>
				<ul>
					<li>
						<ruby>
							日本<rt>にほん</rt>
						</ruby>
						: Japan
					</li>
					<li>
						<ruby>
							勉強<rt>べんきょう</rt>
						</ruby>
						: Study
					</li>
					<li>
						<ruby>
							先生<rt>せんせい</rt>
						</ruby>
						: Teacher
					</li>
				</ul>
			</section>
		</div>
	);
};
