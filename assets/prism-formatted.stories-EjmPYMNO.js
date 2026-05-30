import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./react-XedgCGTy.js";import{n as r,t as i}from"./iframe-DzyGt2uA.js";import{n as a,t as o}from"./prism-formatted-CRMnlBua.js";var s,c,l,u,d,f,p,m,h;t((()=>{s=e(n()),i(),a(),c=r.meta({title:`Components/PrismFormatted`,component:o,tags:[`autodocs`]}),l=`<p>Given the following code:</p>
<pre><code class="language-python">temp = "5 degrees"
cel = 0
fahr = float(temp)
cel = (fahr - 32.0) * 5.0 / 9.0
print(cel)
</code></pre>
<p>Which line/lines should be surrounded by <code>try</code> block?</p>`,u=c.story({args:{text:l,getCodeBlockAriaLabel:e=>`${e} code example`},parameters:{docs:{source:{code:`<PrismFormatted
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text="<p>Given the following code:</p>
    <pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
    cel = 0
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
    </code></pre>
    <p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>`}}}}),d=c.story({args:{text:l,getCodeBlockAriaLabel:e=>`${e} code example`,hasLineNumbers:!0},parameters:{docs:{source:{code:`<PrismFormatted
  hasLineNumbers
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text="<p>Given the following code:</p>
    <pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
    cel = 0
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
    </code></pre>
    <p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>`}}}}),f=c.story({args:{text:`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>`,getCodeBlockAriaLabel:e=>`${e} code example`},parameters:{docs:{source:{code:'<PrismFormatted\n  getCodeBlockAriaLabel={codeName => `${codeName} code example`}\n  text={`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>`}\n/>'}}}}),p=c.story({decorators:[e=>s.createElement(`details`,null,s.createElement(`summary`,{className:`text-foreground-primary`},`Example code`),s.createElement(e,null))],args:{text:`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>`,getCodeBlockAriaLabel:e=>`${e} code example`},parameters:{docs:{description:{story:`This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. The text content should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.`},source:{code:`<details>
  <summary>Example code</summary>

  <PrismFormatted
    getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
    text={\`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\`}
    />
</details>`}}}}),m=c.story({args:{text:`<section><p>An <code>if</code> statement allows you to run a block of code only when a condition is met. It uses the following syntax:</p><pre><code class="language-js">if (condition) {
  logic
}</code></pre></section>`,getCodeBlockAriaLabel:e=>`${e} code example`,isCollapsible:!0,disclosureLabel:`Example`},parameters:{docs:{source:{code:`<PrismFormatted
  isCollapsible
  disclosureLabel="Example"
  getCodeBlockAriaLabel={codeName => \`\${codeName} code example\`}
  text={\`<section><p>An <code>if</code> statement allows you to run a block of code only when a condition is met. It uses the following syntax:</p><pre><code class="language-js">if (condition) {
  logic
  }</code></pre></section>\`}
/>`}}}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text,
    getCodeBlockAriaLabel: codeName => \`\${codeName} code example\`
  },
  parameters: {
    docs: {
      source: {
        code: \`<PrismFormatted
  getCodeBlockAriaLabel={codeName => \\\`\\\${codeName} code example\\\`}
  text="<p>Given the following code:</p>
    <pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
    cel = 0
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
    </code></pre>
    <p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>\`
      }
    }
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text,
    getCodeBlockAriaLabel: codeName => \`\${codeName} code example\`,
    hasLineNumbers: true
  },
  parameters: {
    docs: {
      source: {
        code: \`<PrismFormatted
  hasLineNumbers
  getCodeBlockAriaLabel={codeName => \\\`\\\${codeName} code example\\\`}
  text="<p>Given the following code:</p>
    <pre><code class=&quot;language-python&quot;>temp = &quot;5 degrees&quot;
    cel = 0
    fahr = float(temp)
    cel = (fahr - 32.0) * 5.0 / 9.0
    print(cel)
    </code></pre>
    <p>Which line/lines should be surrounded by <code>try</code> block?</p>"
/>\`
      }
    }
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: \`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\`,
    getCodeBlockAriaLabel: codeName => \`\${codeName} code example\`
  },
  parameters: {
    docs: {
      source: {
        code: \`<PrismFormatted
  getCodeBlockAriaLabel={codeName => \\\`\\\${codeName} code example\\\`}
  text={\\\`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\\\`}
/>\`
      }
    }
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  decorators: [Story => <details>
                <summary className="text-foreground-primary">Example code</summary>
                <Story />
            </details>],
  args: {
    text: \`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\`,
    getCodeBlockAriaLabel: codeName => \`\${codeName} code example\`
  },
  parameters: {
    docs: {
      description: {
        story: "This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. The text content should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view."
      },
      source: {
        code: \`<details>
  <summary>Example code</summary>

  <PrismFormatted
    getCodeBlockAriaLabel={codeName => \\\`\\\${codeName} code example\\\`}
    text={\\\`<pre><code class="language-html"><p>This story shows how PrismFormatted displays a long line of code when it's rendered inside a disclosure element. This line should not wrap to a new line, but instead, the overflow content is clipped and can be scrolled into view.</p></code></pre>\\\`}
    />
</details>\`
      }
    }
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: \`<section><p>An <code>if</code> statement allows you to run a block of code only when a condition is met. It uses the following syntax:</p><pre><code class="language-js">if (condition) {
  logic
}</code></pre></section>\`,
    getCodeBlockAriaLabel: codeName => \`\${codeName} code example\`,
    isCollapsible: true,
    disclosureLabel: "Example"
  },
  parameters: {
    docs: {
      source: {
        code: \`<PrismFormatted
  isCollapsible
  disclosureLabel="Example"
  getCodeBlockAriaLabel={codeName => \\\`\\\${codeName} code example\\\`}
  text={\\\`<section><p>An <code>if</code> statement allows you to run a block of code only when a condition is met. It uses the following syntax:</p><pre><code class="language-js">if (condition) {
  logic
  }</code></pre></section>\\\`}
/>\`
      }
    }
  }
})`,...m.input.parameters?.docs?.source}}},h=[`Default`,`WithLineNumbers`,`WithLongLineOfCode`,`InsideDisclosureElement`,`Collapsible`]}))();export{m as Collapsible,u as Default,p as InsideDisclosureElement,d as WithLineNumbers,f as WithLongLineOfCode,h as __namedExportsOrder,c as default};