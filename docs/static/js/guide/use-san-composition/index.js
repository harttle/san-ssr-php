!function(n){function s(s){for(var t,e,c=s[0],u=s[1],l=s[2],r=0,k=[];r<c.length;r++)e=c[r],Object.prototype.hasOwnProperty.call(p,e)&&p[e]&&k.push(p[e][0]),p[e]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(i&&i(s);k.length;)k.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var n,s=0;s<o.length;s++){for(var a=o[s],t=!0,c=1;c<a.length;c++){var u=a[c];0!==p[u]&&(t=!1)}t&&(o.splice(s--,1),n=e(e.s=a[0]))}return n}var t={},p={11:0,25:0},o=[];function e(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.e=function(){return Promise.resolve()},e.m=n,e.c=t,e.d=function(n,s,a){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(1&s&&(n=e(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)e.d(a,t,function(s){return n[s]}.bind(null,t));return a},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="/san-ssr/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var i=u;o.push([57,0]),a()}({18:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,o,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"compileToRender",hash:"compiletorender"},{level:2,title:"compileToSource",hash:"compiletosource"}]})}}o={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(2))},44:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E4%BD%BF%E7%94%A8-san-composition">使用 San-Composition</h1> <p>目前 San-Composition <strong>只支持以组件类作为输入</strong>进行编译。</p> <p>对于 San-Composition 文档中的例子：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> san <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span>\n    defineComponent<span class="token punctuation">,</span>\n    template<span class="token punctuation">,</span>\n    data<span class="token punctuation">,</span>\n    computed<span class="token punctuation">,</span>\n    filters<span class="token punctuation">,</span>\n    watch<span class="token punctuation">,</span>\n    components<span class="token punctuation">,</span>\n    method<span class="token punctuation">,</span>\n    onCreated<span class="token punctuation">,</span>\n    onAttached\n<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san-composition\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token comment">// 定义模板</span>\n    template<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">\n        &lt;div>\n            &lt;span>count: &#123;&#123; count }} &lt;/span>\n            &lt;input type="text" value="{= count =}" />\n            &lt;div>double: &#123;&#123; double }} &lt;/div>\n            &lt;div>triple: &#123;&#123; count|triple }} &lt;/div>\n            &lt;button on-click="increment"> +1 &lt;/button>\n            &lt;my-child>&lt;/my-child>\n        &lt;/div>\n    </span><span class="token template-punctuation string">`</span></span>\n\n    <span class="token comment">// 初始化数据</span>\n    <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">data</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 添加方法</span>\n    <span class="token function">method</span><span class="token punctuation">(</span><span class="token string">\'increment\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 监听数据变化</span>\n    <span class="token function">watch</span><span class="token punctuation">(</span><span class="token string">\'count\'</span><span class="token punctuation">,</span> <span class="token parameter">newVal</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'count updated: \'</span><span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 添加计算数据</span>\n    <span class="token function">computed</span><span class="token punctuation">(</span><span class="token string">\'double\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> count<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 添加过滤器</span>\n    <span class="token function">filters</span><span class="token punctuation">(</span><span class="token string">\'triple\'</span><span class="token punctuation">,</span> <span class="token parameter">n</span> <span class="token operator">=></span> n <span class="token operator">*</span> <span class="token number">3</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 定义子组件</span>\n    <span class="token function">components</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token string-property property">\'my-child\'</span><span class="token operator">:</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">template</span><span class="token punctuation">(</span><span class="token string">\'&lt;div>My Child&lt;/div>\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> san<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token comment">// 生命周期钩子方法</span>\n    <span class="token function">onAttached</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onAttached\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token function">onAttached</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'another onAttached\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n    <span class="token function">onCreated</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'onCreated\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> san<span class="token punctuation">)</span>\n\nmodule<span class="token punctuation">.</span>exports <span class="token operator">=</span> Component</code></pre> <h2 id="compiletorender">compileToRender</h2> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> SanProject <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san-ssr\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> san <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app.js\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> project <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SanProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">compileToRenderer</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'San\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <h2 id="compiletosource">compileToSource</h2> <p>当 <code>compileToSource</code> 时，必须配合<a href="/pages/Guides/use-outside-component.html">手动传入组件类进行-render</a>特性来使用。</p> <p>编译阶段：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// compile</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> SanProject <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san-ssr\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> project <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SanProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> renderStr <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">compileToSource</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token string">\'js\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">useProvidedComponentClass</span><span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nfs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./output.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> renderStr<span class="token punctuation">)</span></code></pre> <p>渲染阶段：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// render</span>\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./app\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./output\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'San\'</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">ComponentClass</span><span class="token operator">:</span> MyComponent\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> </div></div> '},57:function(n,s,a){var t=a(1),p=a(44),o=a(18).default;n.exports=a(18),n.exports.default=t(o,p,[])}});