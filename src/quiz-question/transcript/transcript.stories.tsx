import preview from "#.storybook/preview";

import { Transcript } from "./transcript";

const meta = preview.meta({
	component: Transcript,
	title: "Internal Components/Transcript",
	tags: ["autodocs"],
	parameters: {
		controls: { expanded: true },
	},
});

export default meta;

export const WithoutSpeakers = meta.story({
	args: {
		transcript: `<p>In this lesson, we'll explore the fundamentals of JavaScript.</p>
<p>JavaScript is a versatile programming language used for web development.</p>
<p>It allows you to create interactive and dynamic web pages.</p>
<p>Let's start by understanding variables and data types.</p>`,
	},
	parameters: {
		docs: {
			source: {
				code: `<Transcript
  transcript={\`<p>In this lesson, we'll explore the fundamentals of JavaScript.</p>
<p>JavaScript is a versatile programming language used for web development.</p>
<p>It allows you to create interactive and dynamic web pages.</p>
<p>Let's start by understanding variables and data types.</p>\`}
/>`,
			},
		},
	},
});

export const WithSpeakers = meta.story({
	args: {
		transcript: `<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>
<p><b>Maria:</b> Welcome aboard, Tom. How do you like California so far?</p>
<p><b>Tom:</b> I like it. It's different from Texas, but I like it here.</p>`,
	},
	parameters: {
		docs: {
			source: {
				code: `<Transcript
  transcript={\`<p><b>Tom:</b> Hi, that's right. I'm Tom McKenzie.</p>
<p><b>Maria:</b> Welcome aboard, Tom. How do you like California so far?</p>
<p><b>Tom:</b> I like it. It's different from Texas, but I like it here.</p>\`}
/>`,
			},
		},
	},
});

export const WithChineseAndSpeakers = meta.story({
	args: {
		transcript: `<p><b>Wang Hua:</b> <ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>我是王华<rt>wǒ shì wáng huá</rt></ruby>。</p>
<p><b>Wang Hua:</b> <ruby>请问你叫什么名字<rt>qǐng wèn nǐ jiào shén me míng zì</rt></ruby>？</p>
<p><b>Liu Ming:</b> <ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>我叫刘明<rt>wǒ jiào liú míng</rt></ruby>。</p>`,
	},
	parameters: {
		docs: {
			source: {
				code: `<Transcript
  transcript={\`<p><b>Wang Hua:</b> <ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>我是王华<rt>wǒ shì wáng huá</rt></ruby>。</p>
<p><b>Wang Hua:</b> <ruby>请问你叫什么名字<rt>qǐng wèn nǐ jiào shén me míng zì</rt></ruby>？</p>
<p><b>Liu Ming:</b> <ruby>你好<rt>nǐ hǎo</rt></ruby>，<ruby>我叫刘明<rt>wǒ jiào liú míng</rt></ruby>。</p>\`}
/>`,
			},
		},
	},
});
