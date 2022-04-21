(window.webpackJsonp=window.webpackJsonp||[]).push([[19,6],{16:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,e,p,o=a(0);class c extends o.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"san.defineComponent",hash:"san.definecomponent"},{level:2,title:"class",hash:"class"},{level:2,title:"区别",hash:"%E5%8C%BA%E5%88%AB"}]})}}p={},(e="components")in(t=c)?Object.defineProperty(t,e,{value:p,enumerable:!0,configurable:!0,writable:!0}):t[e]=p}.call(this,a(2))},41:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E7%BB%84%E4%BB%B6%E7%9A%84%E4%B8%A4%E7%A7%8D%E5%86%99%E6%B3%95">组件的两种写法</h1> <p>有两种方式可以进行组件的定义，得到的都是组件类。San-SSR 在使用他们时<a href="/pages/Under%20the%20hood/how-san-ssr-use-component-class.html">有一定的区别</a>。</p> <h2 id="san.definecomponent">san.defineComponent</h2> <pre class="language-javascript"><code class="language-javascript">san<span class="token punctuation">.</span><span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token string-property property">\'my-component\'</span><span class="token operator">:</span> container <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;my-component>aaa&#123;&#123;name}}&lt;span>&lt;/span>&lt;/my-component></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> <h2 id="class">class</h2> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">class</span> <span class="token class-name">MyComponent</span> <span class="token keyword">extends</span> <span class="token class-name">san<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n    <span class="token keyword">static</span> components <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token string-property property">\'my-component\'</span><span class="token operator">:</span> container <span class="token punctuation">}</span>\n    <span class="token keyword">static</span> template <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;my-component>aaa&#123;&#123;name}}&lt;span>&lt;/span>&lt;/my-component></span><span class="token template-punctuation string">`</span></span>\n<span class="token punctuation">}</span></code></pre> <h2 id="%E5%8C%BA%E5%88%AB">区别</h2> <p>推荐使用 <code>san.defineComponent</code> 来定义组件，如果使用 class，则<strong>所有<a href="/pages/Documentation/lifecycle.html#%E5%B1%9E%E6%80%A7">与 San-SSR 有关的</a>属性都需要为 static</strong>。</p> <p>这是因为在编译阶段 San-SSR 需要能够从类上直接获取到 template、components 等属性。</p> </div></div> '},53:function(n,s,a){var t=a(1),e=a(41),p=a(16).default;n.exports=a(16),n.exports.default=t(p,e,[])}}]);