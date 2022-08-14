!function(n){function s(s){for(var t,o,c=s[0],l=s[1],r=s[2],i=0,k=[];i<c.length;i++)o=c[i],Object.prototype.hasOwnProperty.call(p,o)&&p[o]&&k.push(p[o][0]),p[o]=0;for(t in l)Object.prototype.hasOwnProperty.call(l,t)&&(n[t]=l[t]);for(u&&u(s);k.length;)k.shift()();return e.push.apply(e,r||[]),a()}function a(){for(var n,s=0;s<e.length;s++){for(var a=e[s],t=!0,c=1;c<a.length;c++){var l=a[c];0!==p[l]&&(t=!1)}t&&(e.splice(s--,1),n=o(o.s=a[0]))}return n}var t={},p={5:0,19:0},e=[];function o(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(){return Promise.resolve()},o.m=n,o.c=t,o.d=function(n,s,a){o.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},o.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},o.t=function(n,s){if(1&s&&(n=o(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)o.d(a,t,function(s){return n[s]}.bind(null,t));return a},o.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return o.d(s,"a",s),s},o.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},o.p="/san-ssr/";var c=window.webpackJsonp=window.webpackJsonp||[],l=c.push.bind(c);c.push=s,c=c.slice();for(var r=0;r<c.length;r++)s(c[r]);var u=l;e.push([53,0]),a()}({14:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,e,o=a(0);class c extends o.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"compileToRender 与 compileToSource",hash:"compiletorender-%E4%B8%8E-compiletosource"},{level:2,title:"区别",hash:"%E5%8C%BA%E5%88%AB",children:[{level:3,title:"输入为组件类时",hash:"%E8%BE%93%E5%85%A5%E4%B8%BA%E7%BB%84%E4%BB%B6%E7%B1%BB%E6%97%B6"},{level:3,title:"输入为文件路径时",hash:"%E8%BE%93%E5%85%A5%E4%B8%BA%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%E6%97%B6"}]}]})}}e={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[p]=e}.call(this,a(2))},40:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E6%94%AF%E6%8C%81%E7%9A%84%E4%B8%89%E7%A7%8D%E8%BE%93%E5%85%A5%E6%96%B9%E5%BC%8F%E5%8F%8A%E5%8C%BA%E5%88%AB">支持的三种输入方式及区别</h1> <p>在之前的示例中，传入 <code>SanProject</code> 的内容为组件类：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> <span class="token punctuation">{</span> SanProject <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san-ssr\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> san <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> MyComponent <span class="token operator">=</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;div>Hello &#123;&#123; name }}&lt;/div></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\n<span class="token comment">// SanProject 类提供了你会用到的所有接口</span>\n<span class="token keyword">const</span> project <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SanProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 输入是组件对象</span>\n<span class="token comment">// 输出是一个 render 函数。该函数接受数据对象作为参数，返回 HTML 字符串。</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">compileToRenderer</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'San\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <p>事实上，San-SSR 支持三种输入，分别为组件类、JavaScript 文件路径与 TypeScript 文件路径：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// app.js</span>\n<span class="token keyword">const</span> san <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san\'</span><span class="token punctuation">)</span>\n<span class="token keyword">let</span> MyComponent <span class="token operator">=</span> san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">"&lt;div>Hello &#123;&#123; name }}&lt;/div>"</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\nexports <span class="token operator">=</span> module<span class="token punctuation">.</span>exports <span class="token operator">=</span> MyComponent</code></pre> <pre class="language-javascript"><code class="language-javascript"><span class="token comment">// index.js</span>\n<span class="token keyword">const</span> <span class="token punctuation">{</span> SanProject <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'san-ssr\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'path\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> project <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SanProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment">// 此时传入的是一个文件路径</span>\n<span class="token comment">// 得到的是 render 函数文件内容</span>\n<span class="token keyword">const</span> renderStr <span class="token operator">=</span> project<span class="token punctuation">.</span><span class="token function">compileToSource</span><span class="token punctuation">(</span>require<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">\'./app.js\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n<span class="token comment">// const renderStr = project.compileToSource(require.resolve(\'./app.ts\'))</span>\n\nfs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'output.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> renderStr<span class="token punctuation">)</span>\n\n\n<span class="token comment">// 在服务器端执行以下代码进行渲染</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./output.js\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">\'San\'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <h2 id="compiletorender-%E4%B8%8E-compiletosource">compileToRender 与 compileToSource</h2> <ul> <li>compileToRender 只支持输入组件类。</li> <li>compileToSource 支持输入组件类、JavaScript 文件路径以及 TypeScript 文件路径。</li> </ul> <h2 id="%E5%8C%BA%E5%88%AB">区别</h2> <p>根据不同的输入，San-SSR 的行为是不同的。</p> <h3 id="%E8%BE%93%E5%85%A5%E4%B8%BA%E7%BB%84%E4%BB%B6%E7%B1%BB%E6%97%B6">输入为组件类时</h3> <p>此时 San-SSR 接收到的是已经在内存中的类，组件的 template、components 等信息可以直接在类上通过属性读取。</p> <p>优点：</p> <ul> <li>可以通过递归的方式遍历整个组件树。</li> <li>获取到的是代码执行后的结果，San-SSR 对于组件的写法是无感的。</li> </ul> <p>缺点：</p> <ul> <li>San-SSR 并不知道当前类及其子组件所对应的文件信息，也就是“不知道这些组件类是从哪里来的”。</li> <li>当使用 compileToSource 时，San-SSR 需要尝试将内存中的类转换为字符串定义，有一定局限性。</li> <li>由于需要将组件加载到内存中，因此可能在线下编译阶段执行组件代码，其依赖必须完备（仅仅是为了 require 不报错）。</li> </ul> <h3 id="%E8%BE%93%E5%85%A5%E4%B8%BA%E6%96%87%E4%BB%B6%E8%B7%AF%E5%BE%84%E6%97%B6">输入为文件路径时</h3> <p>此时 San-SSR 会尝试读取文件内容，其输入是组件文件的字符串，组件的 template、components 等信息需要通过静态分析的方式获取哦。</p> <p>优点：</p> <ul> <li>San-SSR 知道组件的明确路径。</li> <li>San-SSR 知道组件定义文件内容。</li> <li>可以单文件编译，不需要加载完整的组件树。</li> </ul> <p>缺点：</p> <ul> <li>组件写法需要相对固定，过于复杂时，无法通过静态分析获取到 template、components 等信息。</li> </ul> </div></div> '},53:function(n,s,a){var t=a(1),p=a(40),e=a(14).default;n.exports=a(14),n.exports.default=t(e,p,[])}});