webpackJsonp([0xdc62f83e8829],{906:function(e,n){e.exports={data:{markdownRemark:{html:'<h1 id="guidelines"><a href="#guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Guidelines</h1>\n<p>Please enforce these guidelines at all times. Small or large, call out what\'s incorrect.</p>\n<p>Every line of code should appear to be written by a single person, no matter the number of contributors.</p>\n<p>This set of rules generate some constraints and conventions. If you run into instances where a convention isn’t obvious or a solution could be handled in a few different ways, contact the PatternFly community, have a conversation about how to handle it and update this guidelines when needed.</p>\n<h2 id="separation-of-ui-structure-concerns"><a href="#separation-of-ui-structure-concerns" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Separation of UI structure concerns</h2>\n<p>PatternFly is made out of isolated and modular structures that fall into 2 categories:</p>\n<ul>\n<li>Layouts</li>\n<li>Components</li>\n</ul>\n<h3 id="layouts"><a href="#layouts" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Layouts</h3>\n<p>Layouts are the containers that allow for organizing and grouping its immediate children on the page.</p>\n<ul>\n<li>A layout never imposes padding or element styles on its children.</li>\n</ul>\n<p>The classes are prefixed with <code>-l</code> (after the patterfly prefix <code>pf-</code>), for example: <code>.pf-l-split</code> or <code>.pf-l-stack</code>.</p>\n<h3 id="components"><a href="#components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components</h3>\n<p>Components are modular and independent structures concerned with how a thing looks.</p>\n<ul>\n<li>A component always touches all four sides of its parent container.</li>\n<li>The component itself never has backgrounds, widths, floats or margins.</li>\n<li>Elements inside a component never use top margins. The first element touches the top of its component.</li>\n<li>Components should include semantic markup and necessary Aria tags to implement the <a href="accessibility-guide.md">accessibility guidelines</a>.</li>\n</ul>\n<p>The parent container of a component is prefixed with <code>-c</code> (after the patterfly prefix <code>pf-</code>), for example: <code>.pf-c-alert</code> or <code>.pf-c-button</code>.</p>\n<h3 id="when-to-create-a-new-component"><a href="#when-to-create-a-new-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>When to create a new component</h3>\n<p>As a general rule, create an extension to an element with BEM modifiers if it’s a change of color or scale. If the change generates a new entity, then create a new component.</p>\n<p>Repetition is better than the wrong abstraction.</p>\n<h2 id="additional-features"><a href="#additional-features" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additional features</h2>\n<h3 id="utilities"><a href="#utilities" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Utilities</h3>\n<p>PatternFly is made up of isolated components that don\'t allow dependencies. Therefore, the use of helpers or utility classes is discouraged.</p>\n<p>However, from time to time it is recognized that an exception to the Patternfly styling may be needed for a special case. For those instances, utility classes are supplied to assist in allowing minor styling changes without creating the need for adding custom CSS.</p>\n<p>A utility class is prefixed with <code>-u</code> (after the patterfly prefix <code>pf-</code>), for example: <code>.pf-u-align-content-center</code>.</p>\n<h3 id="demos"><a href="#demos" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demos</h3>\n<p>Demos show how components and layouts can be put together to build more complex structures. </p>\n<ul>\n<li>A demo never includes its own styles. If styling is necessary to implement a desired demo, then new components or layouts, or variants of the components or layouts used, should be created instead.</li>\n<li>A demo doesn\'t add any accessibility tags that aren\'t already in the components. All accessibility should be handled at the component level.</li>\n</ul>\n<h2 id="variables"><a href="#variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Variables</h2>\n<p>PatternFly follows a two-layer theming system where <strong>global variables</strong> always inform <strong>component variables</strong>. Each one of those layers follow a set of very specific rules.</p>\n<h3 id="global-variables"><a href="#global-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Global variables</h3>\n<p>The main reason to have global variables is to maintain consistency. They adhere to the following rules:</p>\n<ul>\n<li>\n<p>They are prefixed with the word <code>global</code> and follow the formula <code>$pf-global--concept--PropertyCamelCase--modifier--state</code>.</p>\n<ul>\n<li>a <code>concept</code> is something like a <code>spacer</code> or <code>main-title</code>;</li>\n<li>a <code>PropertyCamelCase</code> is something like <code>BackgroundColor</code> or <code>FontSize</code>.</li>\n<li>a <code>modifier</code> is something like  <code>sm</code>, or <code>lg</code>;</li>\n<li>and a <code>state</code> is something like  <code>hover</code>, or <code>expanded</code>;</li>\n</ul>\n</li>\n<li>They are concepts, never tied to an element or component. This is incorrect: <code>$pf-global--h1--FontSize</code>, this is correct: <code>$pf-global--FontSize--3xl</code>.</li>\n</ul>\n<p>For example a global variable setup would look like:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss">  <span class="token comment">/* $pf-global--concept--size */</span>\n  <span class="token property">--pf-global--spacer--lg</span><span class="token punctuation">:</span> .5rem<span class="token punctuation">;</span>\n  <span class="token property">--pf-global--spacer--xl</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n  <span class="token property">--pf-global--spacer--2xl</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>\n\n  <span class="token comment">/* $pf-global--PropertyCamelCase--modifier */</span>\n  <span class="token property">--pf-global--FontSize--3xl</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>\n  <span class="token property">--pf-global--FontSize--2xl</span><span class="token punctuation">:</span> 1.8rem<span class="token punctuation">;</span>\n  <span class="token property">--pf-global--FontSize--lg</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>\n\n  <span class="token comment">/* pf-global--PropertyCamelCase--state */</span>\n  <span class="token property">--pf-global--BackgroundColor--hover</span><span class="token punctuation">:</span> #ccc<span class="token punctuation">;</span>\n\n  <span class="token comment">/* $pf-global--PropertyCamelCase--modifier */</span>\n  <span class="token property">--pf-global--Color--100</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>\n\n  <span class="token comment">/* $pf-global--concept--modifier */</span>\n  <span class="token property">--pf-global--primary-color--100</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<h3 id="component-variables"><a href="#component-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Component variables</h3>\n<p>The second layer is scoped to themeable component properties and follow these rules:</p>\n<ul>\n<li>\n<p>They follow this formula <code>$pf-c-block__element--modifier--state--PropertyCamelCase</code>.</p>\n<ul>\n<li>The <code>pf-c-block__element--modifier</code> is the selector name is something like <code>pf-c-alert__actions</code>;</li>\n<li>a <code>state</code> is something like <code>hover</code> or <code>active</code>;</li>\n</ul>\n</li>\n<li>The variable always has a default value.</li>\n<li>The value of component scoped variables is <strong>always</strong> defined by a global variable.</li>\n</ul>\n<p>For example:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token comment">/* Component scoped variables are always defined by global variables */</span>\n  <span class="token property">--pf-alert--Padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-global--spacer--xl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--pf-alert--hover--BackgroundColor</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-global--BackgroundColor--hover<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">--pf-alert__title--FontSize</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-global--FontSize--2xl<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment">/* --block--PropertyCamelCase */</span>\n<span class="token selector">.alert </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-alert--Padding<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* --block--state--PropertyCamelCase */</span>\n<span class="token selector">.alert </span><span class="token punctuation">{</span>\n  <span class="token selector"><span class="token parent important">&amp;</span>:hover </span><span class="token punctuation">{</span>\n    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-alert--hover--BackgroundColor<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token comment">/* --block__element--PropertyCamelCase */</span>\n<span class="token selector">.alert__title </span><span class="token punctuation">{</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--pf-alert__title--FontSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This setup allows for consistency across components, it generates a common language between designers and developers, and it gives granular control to authors.</p>\n<h3 id="comment-all-magic-values"><a href="#comment-all-magic-values" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comment all magic values</h3>\n<p>If a situation arises where a value needs entering into the style sheets that isn\'t already defined in the global variables this should serve as a red flag to you.</p>\n<p>In the case where a \'magic\' value needs entering, ensure a comment is added on the line above to explain its relevance.</p>\n<h2 id="harry-roberts-guidelines"><a href="#harry-roberts-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Harry Robert\'s Guidelines</h2>\n<p>PatternFly follows <a href="https://cssguidelin.es/">Harry Robert\'s CSS Guidelines</a> with some exceptions, deviations and additions.</p>\n<h3 id="exceptions"><a href="#exceptions" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Exceptions</h3>\n<p>PatternFly doesn\'t follow these rules:</p>\n<ul>\n<li><a href="https://cssguidelin.es/#able-of-contents">Table of contents</a></li>\n<li><a href="https://cssguidelin.es/#titling">Titling</a></li>\n<li><a href="https://cssguidelin.es/#anatomy-of-a-ruleset">Anatomy of a Ruleset</a></li>\n<li><a href="https://cssguidelin.es/#multi-line-css">Multi-line CSS</a></li>\n<li><a href="https://cssguidelin.es/#indenting">Indenting</a></li>\n<li><a href="https://cssguidelin.es/#meaningful-whitespace">Meaningful Whitespace</a></li>\n<li><a href="https://cssguidelin.es/#characters-wide">80 Characters Wide</a></li>\n</ul>\n<h3 id="deviations-from-harry-roberts-guidelines"><a href="#deviations-from-harry-roberts-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Deviations from Harry Robert\'s Guidelines</h3>\n<h4 id="html"><a href="#html" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>HTML</h4>\n<p><strong>Practicality over purity</strong>. Strive to maintain HTML standards and semantics, but not at the expense of practicality. Use the least amount of markup with the fewest intricacies whenever possible.</p>\n<h4 id="comment-and-organization"><a href="#comment-and-organization" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Comment and Organization</h4>\n<p>Code is written and maintained by people. Ensure your code is descriptive, well commented, and approachable by others. Great code comments convey context or purpose. Do not simply reiterate a component or class name.</p>\n<p>Be sure to write in complete sentences for larger comments and succinct phrases for general notes.</p>\n<p>Follow this comment structure:</p>\n<ol>\n<li>Block</li>\n<li>Sections</li>\n<li>Line</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="prism-language-sass"><code class="prism-language-sass"><span class="token comment">// Section level Comment</span>\n<span class="token selector">.selector {</span>\n<span class="token property-line">  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5; <span class="token operator">/</span><span class="token operator">/</span> Line level Comment</span>\n<span class="token property-line">  <span class="token property">color</span><span class="token punctuation">:</span> #333;</span>\n<span class="token selector">}</span>\n</code></pre>\n      </div>\n<h5 id="1-section"><a href="#1-section" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Section</h5>\n<p>This comment is a section divider or describes a block of code.</p>\n<ul>\n<li>Leave one blank lines above.</li>\n</ul>\n<h5 id="2-line"><a href="#2-line" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Line</h5>\n<p>Describes a specific line of code.</p>\n<h3 id="additions-to-harry-roberts-guidelines"><a href="#additions-to-harry-roberts-guidelines" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Additions to Harry Robert\'s Guidelines</h3>\n<h4 id="lintable-css-rules"><a href="#lintable-css-rules" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Lintable CSS rules</h4>\n<p>The <a href="https://stylelint.io/">CSS linter</a> is PatternFly\'s single source of truth for CSS syntax, declaration order, and other CSS rules like disallow type selectors, disallow vendor prefixes, and more.</p>\n<h4 id="shorthand-notation"><a href="#shorthand-notation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Shorthand notation</h4>\n<p>Limit the use of shorthand declarations to instances where you must explicitly set all the available values. Common overused shorthand properties include:</p>\n<ul>\n<li><code>padding</code></li>\n<li><code>margin</code></li>\n<li><code>font</code></li>\n<li><code>background</code></li>\n<li><code>border</code></li>\n<li><code>border-radius</code></li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-sass"><code class="prism-language-sass"><span class="token comment">// Bad</span>\n<span class="token selector">.element {</span>\n<span class="token property-line">  <span class="token property">margin</span><span class="token punctuation">:</span> 0 0 10px;</span>\n<span class="token property-line">  <span class="token property">background</span><span class="token punctuation">:</span> red;</span>\n<span class="token property-line">  <span class="token property">background</span><span class="token punctuation">:</span> </span><span class="token url">url("image.jpg")</span><span class="token selector">;</span>\n<span class="token property-line">  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px 3px 0 0;</span>\n<span class="token selector">}</span>\n\n<span class="token comment">// Good</span>\n<span class="token selector">.element {</span>\n<span class="token property-line">  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 10px;</span>\n<span class="token property-line">  <span class="token property">background-color</span><span class="token punctuation">:</span> red;</span>\n<span class="token property-line">  <span class="token property">background-image</span><span class="token punctuation">:</span> </span><span class="token url">url("image.jpg")</span><span class="token selector">;</span>\n<span class="token property-line">  <span class="token property">border-top-left-radius</span><span class="token punctuation">:</span> 3px;</span>\n<span class="token property-line">  <span class="token property">border-top-right-radius</span><span class="token punctuation">:</span> 3px;</span>\n<span class="token selector">}</span>\n</code></pre>\n      </div>\n<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties">Mozilla Developer Network</a> and <a href="https://csswizardry.com/2016/12/css-shorthand-syntax-considered-an-anti-pattern/">Harry Robert</a> both have great articles on shorthand properties for those unfamiliar with notation and behaviour.</p>\n<h3 id="sass"><a href="#sass" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sass</h3>\n<p>PatternFly uses <a href="http://sass-lang.com/">Sass</a> to preprocess CSS.</p>\n<p>As a general rule don\'t overcomplicate Sass, keep it easy to parse for a normal human.</p>\n<h4 id="nesting"><a href="#nesting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Nesting</h4>\n<p>As a general rule avoid Sass nesting to increase specificity. Try not to nest more than three layers deep.</p>\n<p>Limit nesting to the following use cases:</p>\n<ol>\n<li>Modifiers</li>\n<li>Media queries</li>\n<li>States, pseudo-classes, and pseudo-elements</li>\n<li>Combinators</li>\n</ol>\n<h5 id="1-modifiers-and-elements-of-a-block"><a href="#1-modifiers-and-elements-of-a-block" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>1. Modifiers and elements of a block</h5>\n<ul>\n<li>Do not use <a href="https://css-tricks.com/the-sass-ampersand/">Sass’s parent selector</a> mechanism to construct BEM elements.</li>\n<li>Do use that method to create compound selectors with modifier classes.</li>\n</ul>\n<div class="gatsby-highlight">\n      <pre class="prism-language-sass"><code class="prism-language-sass"><span class="token comment">// Good</span>\n<span class="token selector">.pf-nav {</span>\n  <span class="token selector">...</span>\n\n  <span class="token selector">&amp;.pf-m-vertical {</span>\n    <span class="token selector">...</span>\n  <span class="token selector">}</span>\n<span class="token selector">}</span>\n\n<span class="token selector">.pf-nav__item {</span>\n  <span class="token selector">...</span>\n<span class="token selector">}</span>\n\n<span class="token comment">// Bad</span>\n<span class="token selector">.pf-nav {</span>\n  <span class="token selector">...</span>\n\n  <span class="token selector">&amp;__item {</span>\n    <span class="token selector">...</span>\n  <span class="token selector">}</span>\n<span class="token selector">}</span>\n\n<span class="token selector">.pf-m-nav.pf-m-vertical {</span>\n  <span class="token selector">...</span>\n<span class="token selector">}</span>\n</code></pre>\n      </div>\n<h5 id="2-media-queries"><a href="#2-media-queries" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>2. Media queries</h5>\n<p>Component-specific media queries should be nested inside the component block. Remember that PatternFly is mobile first. <strong>Do progressive enhancement, not gracefully degradation.</strong></p>\n<p>Patternfly has 5 breakpoints:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss">  <span class="token property"><span class="token variable">$pf-global-breakpoint--xs</span></span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>\n  <span class="token property"><span class="token variable">$pf-global-breakpoint--sm</span></span><span class="token punctuation">:</span> 576px<span class="token punctuation">;</span>\n  <span class="token property"><span class="token variable">$pf-global-breakpoint--md</span></span><span class="token punctuation">:</span> 768px<span class="token punctuation">;</span>\n  <span class="token property"><span class="token variable">$pf-global-breakpoint--lg</span></span><span class="token punctuation">:</span> 992px<span class="token punctuation">;</span>\n  <span class="token property"><span class="token variable">$pf-global-breakpoint--xl</span></span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>To make sure you are writing mobile first, always do <code>min-width</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-scss"><code class="prism-language-scss"><span class="token selector">.pf-nav </span><span class="token punctuation">{</span>\n  ...\n\n  <span class="token comment">// Styles for small view ports and up</span>\n  <span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> <span class="token variable">$pf-global-breakpoint--xs</span><span class="token punctuation">)</span></span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h5 id="4-states-pseudo-classes-and-pseudo-elements"><a href="#4-states-pseudo-classes-and-pseudo-elements" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>4. States, pseudo-classes and pseudo-elements</h5>\n<p>States of a component should be included as a nested element. This includes hover, focus, and active states:</p>\n<div class="gatsby-highlight">\n      <pre class="prism-language-sass"><code class="prism-language-sass"><span class="token selector">.pf-button {</span>\n<span class="token property-line">  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$color</span>;</span>\n\n<span class="token property-line">  <span class="token property">&amp;</span><span class="token punctuation">:</span><span class="token property">hover,</span></span>\n<span class="token property-line">  <span class="token property">&amp;</span><span class="token punctuation">:</span><span class="token property">focus</span> {</span>\n<span class="token property-line">    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token variable">$lighter-color</span>;</span>\n  <span class="token selector">}</span>\n<span class="token selector">}</span>\n</code></pre>\n      </div>\n<p>Classes that duplicate a state should be named with the prefix <code>pf-m-</code>. For example, a class <code>pf-m-active</code> can be used to apply the <code>:active</code> styling.</p>\n<h4 id="sass-variables"><a href="#sass-variables" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Sass variables</h4>\n<p>We create global Sass variables to keep a Bootstrap theme in sync. These values also inform our component level variables .</p>\n<h4 id="mixin-and-extend"><a href="#mixin-and-extend" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>@mixin and @extend</h4>\n<p>Since our components are isolated and modular try to avoid <code>@mixin</code> and <code>@extend</code> because they generate a dependency.</p>\n<h2 id="references"><a href="#references" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>References</h2>\n<p>This guide is inspired by people we follow and respect:</p>\n<ul>\n<li><strong><a href="http://markdotto.com/">Mark Otto</a>:</strong> <a href="http://codeguide.co/">Code Guideline</a></li>\n<li><strong><a href="http://csswizardry.com/">Robert Harris</a>:</strong> <a href="http://cssguidelin.es/">CSS Guidelines</a></li>\n<li><strong><a href="http://gravitydept.com/">Gravity Department</a></strong>: <a href="http://manuals.gravitydept.com/code/css/style-guide">Style Guide Field Manual</a></li>\n<li><strong><a href="http://hugogiraudel.com/">Hugo Giraudel</a>:</strong> <a href="https://sass-guidelin.es/">SASS Guidelines</a></li>\n</ul>',
fields:{path:"/guidelines",type:"page",contentType:"page"}}},pathContext:{pagePath:"/guidelines",type:"page",contentType:"page"}}}});
//# sourceMappingURL=path---guidelines-d37d2ef5128f350c8847.js.map