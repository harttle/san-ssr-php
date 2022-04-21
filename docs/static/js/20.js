(window.webpackJsonp=window.webpackJsonp||[]).push([[20,7],{19:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var t,p,e,o=a(0);class c extends o.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"编译阶段",hash:"%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5"},{level:2,title:"运行阶段",hash:"%E8%BF%90%E8%A1%8C%E9%98%B6%E6%AE%B5"}]})}}e={},(p="components")in(t=c)?Object.defineProperty(t,p,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[p]=e}.call(this,a(2))},44:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E6%B8%B2%E6%9F%93%E9%98%B6%E6%AE%B5%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E8%B7%AF%E5%BE%84">渲染阶段自定义组件路径</h1> <p>有时我们希望在线上执行阶段使用不同的组件。例如有两个版本的组件库，希望通过抽样变量决定使用其中的某个版本。</p> <p>San-SSR 提供了 <code>customSSRFilePath</code> API 来支持上述场景。</p> <h2 id="%E7%BC%96%E8%AF%91%E9%98%B6%E6%AE%B5">编译阶段</h2> <ol> <li> <p>输入为代码字符串</p> <p>此时不需要其他额外操作。</p> </li> <li> <p>输入为组件 Class</p> <p>由于我们需要提前 require 组件代码得到 Class， 之后传入 San-SSR 进行编译，因此需要使用 <a href="/san-ssr/guide/%E4%BD%BF%E7%94%A8-markExternalComponent-%E7%89%B9%E6%80%A7%E8%BF%9B%E8%A1%8C%E7%BC%96%E8%AF%91/">markExternalComponent</a> 特性提前标记出外部组件。</p> </li> </ol> <h2 id="%E8%BF%90%E8%A1%8C%E9%98%B6%E6%AE%B5">运行阶段</h2> <p>在调用 render 函数进行渲染时，传入 <code>customSSRFilePath</code>：</p> <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">const</span> render <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'./output\'</span><span class="token punctuation">)</span>\n\n<span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">parentCtx</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">context</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n            <span class="token function">customSSRFilePath</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> specifier<span class="token punctuation">,</span> id<span class="token punctuation">,</span> tagName <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>specifier<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span><span class="token string">\'childA.san\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">return</span> specifier<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">\'childA\'</span><span class="token punctuation">,</span> <span class="token string">\'childB\'</span><span class="token punctuation">)</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span></code></pre> </div></div> '},56:function(n,s,a){var t=a(1),p=a(44),e=a(19).default;n.exports=a(19),n.exports.default=t(e,p,[])}}]);