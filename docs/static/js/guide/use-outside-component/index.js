!function(n){function s(s){for(var t,e,c=s[0],u=s[1],l=s[2],i=0,k=[];i<c.length;i++)e=c[i],Object.prototype.hasOwnProperty.call(p,e)&&p[e]&&k.push(p[e][0]),p[e]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(n[t]=u[t]);for(r&&r(s);k.length;)k.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var n,s=0;s<o.length;s++){for(var a=o[s],t=!0,c=1;c<a.length;c++){var u=a[c];0!==p[u]&&(t=!1)}t&&(o.splice(s--,1),n=e(e.s=a[0]))}return n}var t={},p={10:0,23:0},o=[];function e(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return n[s].call(a.exports,a,a.exports,e),a.l=!0,a.exports}e.e=function(){return Promise.resolve()},e.m=n,e.c=t,e.d=function(n,s,a){e.o(n,s)||Object.defineProperty(n,s,{enumerable:!0,get:a})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,s){if(1&s&&(n=e(n)),8&s)return n;if(4&s&&"object"==typeof n&&n&&n.__esModule)return n;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:n}),2&s&&"string"!=typeof n)for(var t in n)e.d(a,t,function(s){return n[s]}.bind(null,t));return a},e.n=function(n){var s=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(s,"a",s),s},e.o=function(n,s){return Object.prototype.hasOwnProperty.call(n,s)},e.p="/san-ssr/";var c=window.webpackJsonp=window.webpackJsonp||[],u=c.push.bind(c);c.push=s,c=c.slice();for(var l=0;l<c.length;l++)s(c[l]);var r=u;o.push([57,0]),a()}({20:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,o,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"使用编译产出的组件类存在的问题",hash:"%E4%BD%BF%E7%94%A8%E7%BC%96%E8%AF%91%E4%BA%A7%E5%87%BA%E7%9A%84%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98"},{level:2,title:"使用方式",hash:"%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F",children:[{level:3,title:"编译阶段",hash:"%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5"},{level:3,title:"线上执行",hash:"%E7%BA%BF%E4%B8%8A%E6%89%A7%E8%A1%8C"}]},{level:2,title:"与 markExternalComponent 特性配合使用",hash:"%E4%B8%8E-markexternalcomponent-%E7%89%B9%E6%80%A7%E9%85%8D%E5%90%88%E4%BD%BF%E7%94%A8"}]})}}o={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[p]=o}.call(this,a(2))},45:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E6%89%8B%E5%8A%A8%E4%BC%A0%E5%85%A5%E7%BB%84%E4%BB%B6%E7%B1%BB%E8%BF%9B%E8%A1%8C-render">手动传入组件类进行-render</h1> <h2 id="%E4%BD%BF%E7%94%A8%E7%BC%96%E8%AF%91%E4%BA%A7%E5%87%BA%E7%9A%84%E7%BB%84%E4%BB%B6%E7%B1%BB%E5%AD%98%E5%9C%A8%E7%9A%84%E9%97%AE%E9%A2%98">使用编译产出的组件类存在的问题</h2> <p>在 ssr 过程中，模板可能需要读取组件实例上的属性或方法，因此我们需要在每次渲染时创建组件的一个实例。</p> <p>当编译输出字符串时，会有以下问题：</p> <ul> <li>当输入为 JavaScript 或 TypeScript 时，San-SSR 会将组件类的字符串定义直接输出在产物中，之后在渲染阶段根据这些类创建组件实例。当组件书写方式过于复杂时，解析可能会失败。</li> <li>当输入为 Class 时，San-SSR 会尝试将内存中的类字符串化。该方法只能输出组件自身内容，如果组件类引用了外部变量等，执行阶段会报错。</li> </ul> <p>编译输出为 render 函数时，则可以避免上述问题。</p> <p>基于以上，San-SSR 提供了在执行阶段手动传入组件 Class 进行渲染的能力，此时编译产物中不会含有组件类代码，San-SSR 的产物与组件代码需要一起上到线上执行。</p> <h2 id="%E4%BD%BF%E7%94%A8%E6%96%B9%E5%BC%8F">使用方式</h2> <h3 id="%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5">编译阶段</h3> <pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> MyComponent <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">\'./component\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> sanProject <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SanProject</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> res <span class="token operator">=</span> sanProject<span class="token punctuation">.</span><span class="token function">compileToSource</span><span class="token punctuation">(</span>MyComponent<span class="token punctuation">,</span> <span class="token string">\'js\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    useProvidedComponentClass<span class="token operator">:</span> <span class="token boolean">true</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n\nfs<span class="token punctuation">.</span><span class="token function">writeFileSync</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./output.js\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span></code></pre> <h3 id="%E7%BA%BF%E4%B8%8A%E6%89%A7%E8%A1%8C">线上执行</h3> <p>只需传入根组件即可</p> <pre class="language-typescript"><code class="language-typescript"><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">\'./component\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">\'./output\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> ComponentClass<span class="token operator">:</span> Component <span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <h2 id="%E4%B8%8E-markexternalcomponent-%E7%89%B9%E6%80%A7%E9%85%8D%E5%90%88%E4%BD%BF%E7%94%A8">与 markExternalComponent 特性配合使用</h2> <p>当与 <a href="/san-ssr/guide/%E4%BD%BF%E7%94%A8-markExternalComponent-%E7%89%B9%E6%80%A7%E8%BF%9B%E8%A1%8C%E7%BC%96%E8%AF%91/">markExternalComponent</a> 配合使用时，由于定义外部组件引用的 specifier 为组件类文件，我们需要使用 <a href="/san-ssr/guide/%E6%B8%B2%E6%9F%93%E9%98%B6%E6%AE%B5%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E8%B7%AF%E5%BE%84/">customSSRFilePath</a> 来帮助 San-SSR 找到外部组件所对应的 San-SSR 产物位置：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./component\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./output\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">ComponentClass</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>\n    <span class="token literal-property property">parentCtx</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function">customSSRFilePath</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> specifier <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>specifier<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">\'childA.san\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> specifier <span class="token operator">+</span> <span class="token string">\'.ssr\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <p>如果我们想要完全改变子组件的路径，则可以再配合 <code>customComponentFilePath</code> 方法，替换所使用的子组件类：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> Component <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./component\'</span><span class="token punctuation">)</span>\n<span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./output\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">ComponentClass</span><span class="token operator">:</span> Component<span class="token punctuation">,</span>\n    <span class="token literal-property property">parentCtx</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function">customSSRFilePath</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> specifier<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tagName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>specifier<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">\'childA.san\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> specifier <span class="token operator">+</span> <span class="token string">\'.ssr\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n            <span class="token function">customComponentFilePath</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> specifier<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tagName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>specifier <span class="token operator">===</span> <span class="token string">\'./childA.san\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">if</span> <span class="token punctuation">(</span>tagName <span class="token operator">===</span> <span class="token string">\'x-b\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                        <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./childB.san\'</span><span class="token punctuation">)</span>\n                    <span class="token punctuation">}</span>\n                    <span class="token keyword">return</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./childA.san\'</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> </div></div> '},57:function(n,s,a){var t=a(1),p=a(45),o=a(20).default;n.exports=a(20),n.exports.default=t(o,p,[])}});