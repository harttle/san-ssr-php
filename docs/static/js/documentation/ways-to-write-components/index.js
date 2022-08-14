!function(n){function a(a){for(var s,p,r=a[0],c=a[1],l=a[2],u=0,d=[];u<r.length;u++)p=r[u],Object.prototype.hasOwnProperty.call(e,p)&&e[p]&&d.push(e[p][0]),e[p]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(n[s]=c[s]);for(i&&i(a);d.length;)d.shift()();return o.push.apply(o,l||[]),t()}function t(){for(var n,a=0;a<o.length;a++){for(var t=o[a],s=!0,r=1;r<t.length;r++){var c=t[r];0!==e[c]&&(s=!1)}s&&(o.splice(a--,1),n=p(p.s=t[0]))}return n}var s={},e={6:0,20:0},o=[];function p(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return n[a].call(t.exports,t,t.exports,p),t.l=!0,t.exports}p.e=function(){return Promise.resolve()},p.m=n,p.c=s,p.d=function(n,a,t){p.o(n,a)||Object.defineProperty(n,a,{enumerable:!0,get:t})},p.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},p.t=function(n,a){if(1&a&&(n=p(n)),8&a)return n;if(4&a&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(p.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&a&&"string"!=typeof n)for(var s in n)p.d(t,s,function(a){return n[a]}.bind(null,s));return t},p.n=function(n){var a=n&&n.__esModule?function(){return n.default}:function(){return n};return p.d(a,"a",a),a},p.o=function(n,a){return Object.prototype.hasOwnProperty.call(n,a)},p.p="/san-ssr/";var r=window.webpackJsonp=window.webpackJsonp||[],c=r.push.bind(r);r.push=a,r=r.slice();for(var l=0;l<r.length;l++)a(r[l]);var i=c;o.push([55,0]),t()}({16:function(n,a,t){"use strict";t.r(a),function(n){t.d(a,"default",(function(){return r}));var s,e,o,p=t(0);class r extends p.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"san.defineComponent",hash:"san.definecomponent"},{level:2,title:"class",hash:"class"},{level:2,title:"区别",hash:"%E5%8C%BA%E5%88%AB"}]})}}o={},(e="components")in(s=r)?Object.defineProperty(s,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):s[e]=o}.call(this,t(2))},42:function(n,a){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E4%B8%A4%E7%A7%8D%E5%86%99%E6%B3%95">组件的两种写法</h1> <p>有两种方式可以进行组件的定义，得到的都是组件类。San-SSR 在使用他们时<a href="/pages/Under%20the%20hood/how-san-ssr-use-component-class.html">有一定的区别</a>。</p> <h2 id="san.definecomponent">san.defineComponent</h2> <pre class="language-javascript"><code class="language-javascript">san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">\'my-component\'</span><span class="token operator">:</span> container <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;my-component>aaa&#123;&#123;name}}&lt;span>&lt;/span>&lt;/my-component></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <h2 id="class">class</h2> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">san<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> components <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">\'my-component\'</span><span class="token operator">:</span> container <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;my-component>aaa&#123;&#123;name}}&lt;span>&lt;/span>&lt;/my-component></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span></code></pre> <h2 id="%E5%8C%BA%E5%88%AB">区别</h2> <p>推荐使用 <code>san.defineComponent</code> 来定义组件，如果使用 class，则<strong>所有<a href="/pages/Documentation/lifecycle.html#%E5%B1%9E%E6%80%A7">与 San-SSR 有关的</a>属性都需要为 static</strong>。</p> <p>这是因为在编译阶段 San-SSR 需要能够从类上直接获取到 template、components 等属性。</p> </div></div> '},55:function(n,a,t){var s=t(1),e=t(42),o=t(16).default;n.exports=t(16),n.exports.default=s(o,e,[])}});