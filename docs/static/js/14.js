(window.webpackJsonp=window.webpackJsonp||[]).push([[14,3],{14:function(n,s,a){"use strict";a.r(s),function(n){a.d(s,"default",(function(){return c}));var p,t,o,e=a(0);class c extends e.a{inited(){n.hub&&n.hub.fire&&n.hub.fire("changed",{level:0,children:[{level:2,title:"配置文件",hash:"%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6"},{level:2,title:"主题配置",hash:"%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE"},{level:2,title:"样式配置",hash:"%E6%A0%B7%E5%BC%8F%E9%85%8D%E7%BD%AE"}]})}}o={},(t="components")in(p=c)?Object.defineProperty(p,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):p[t]=o}.call(this,a(3))},39:function(n,s){n.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE">基本配置</h1> <h2 id="%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6">配置文件</h2> <p>如果没有任何配置，这个网站将会是非常局限的，用户也无法在你的网站上自由导航。为了更好地自定义你的网站，让我们首先在你的文档目录下创建一个 <code>.sdoc</code> 目录，所有 SDoc 相关的文件都将会被放在这里。你的项目结构可能是这样：</p> <pre class="language-shell"><code class="language-shell"><span class="token builtin class-name">.</span>\n├─ docs\n│  ├─ README.md\n│  └─ .sdoc\n│     └─ config.js\n└─ package.json</code></pre> <p>一个 SDoc 网站必要的配置文件是 <code>.sdoc/config.js</code>，它应该导出一个 JavaScript 对象：</p> <pre class="language-js"><code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">\'Hello SDoc\'</span><span class="token punctuation">,</span>\n    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token string">\'/\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span></code></pre> <p>对于上述的配置，如果你运行起 dev server，你应该能看到一个页面，它包含一个页头，里面包含一个标题。</p> <p>参见 [配置] 来查看所有可配置的选项。</p> <h2 id="%E4%B8%BB%E9%A2%98%E9%85%8D%E7%BD%AE">主题配置</h2> <p>一个 SDoc 主题应该负责整个网站的布局和交互细节。在 SDoc 中，目前自带了一个默认的主题（正是你现在所看到的），它是为技术文档而设计的。同时，默认主题提供了一些选项，让你可以去自定义导航栏（navbar）、 侧边栏（sidebar）和 首页（homepage） 等，详情请参见 [默认主题] 。</p> <p>如果你想开发一个自定义主题，可以参考 [自定义主题]。</p> <h2 id="%E6%A0%B7%E5%BC%8F%E9%85%8D%E7%BD%AE">样式配置</h2> <p>样式配置通过自动加载如下两个文件生效： docs/.sdoc/styles/index.less: 将会被自动应用的全局样式文件，会生成在最终的 CSS 文件结尾，具有比默认样式更高的优先级。 docs/.sdoc/styles/vars.less: 用于重写默认颜色常量，或者设置新的 less 颜色常量。</p> <p>你可以调整的一些变量如下:</p> <pre class="language-less"><code class="language-less"><span class="token comment">// 字体</span>\n<span class="token variable">@font-family<span class="token punctuation">:</span></span> Trebuchet MS<span class="token punctuation">,</span> <span class="token operator">-</span>apple<span class="token operator">-</span>system<span class="token punctuation">,</span> BlinkMacSystemFont<span class="token punctuation">,</span> Segoe UI<span class="token punctuation">,</span> PingFang SC<span class="token punctuation">,</span> Hiragino Sans GB<span class="token punctuation">,</span> Microsoft YaHei<span class="token punctuation">,</span> Helvetica Neue<span class="token punctuation">,</span> Helvetica<span class="token punctuation">,</span>\n    Arial<span class="token punctuation">,</span> sans<span class="token operator">-</span>serif<span class="token punctuation">,</span> Apple Color Emoji<span class="token punctuation">,</span> Segoe UI Emoji<span class="token punctuation">,</span> Segoe UI Symbol<span class="token punctuation">;</span>\n<span class="token variable">@code-family<span class="token punctuation">:</span></span> <span class="token string">\'Lucida Console\'</span><span class="token punctuation">,</span> Consolas<span class="token punctuation">,</span> Monaco<span class="token punctuation">,</span> <span class="token string">\'Andale Mono\'</span><span class="token punctuation">,</span> <span class="token string">\'Ubuntu Mono\'</span><span class="token punctuation">,</span> monospace<span class="token punctuation">;</span>\n<span class="token variable">@font-size-base<span class="token punctuation">:</span></span> 16px<span class="token punctuation">;</span>\n\n<span class="token comment">// 颜色</span>\n<span class="token variable">@primary-color<span class="token punctuation">:</span></span> #2196f3<span class="token punctuation">;</span>\n<span class="token variable">@green-6<span class="token punctuation">:</span></span> #52c41a<span class="token punctuation">;</span>\n<span class="token variable">@site-border-color-split<span class="token punctuation">:</span></span> #ebedf0<span class="token punctuation">;</span>\n<span class="token variable">@site-heading-color<span class="token punctuation">:</span></span> #0d1a26<span class="token punctuation">;</span>\n<span class="token variable">@site-text-color<span class="token punctuation">:</span></span> #314659<span class="token punctuation">;</span>\n<span class="token variable">@site-text-color-secondary<span class="token punctuation">:</span></span> #697b8c<span class="token punctuation">;</span>\n\n<span class="token comment">// 样式</span>\n<span class="token variable">@border-radius-sm<span class="token punctuation">:</span></span> 2px<span class="token punctuation">;</span>\n<span class="token variable">@border-radius-lg<span class="token punctuation">:</span></span> 12px<span class="token punctuation">;</span>\n<span class="token variable">@border-radius<span class="token punctuation">:</span></span> 6px<span class="token punctuation">;</span>\n<span class="token variable">@line-height-base<span class="token punctuation">:</span></span> 1.5<span class="token punctuation">;</span></code></pre> <blockquote> <p><strong>警告</strong></p> <p>你应该<strong>只在</strong>这个文件中定义变量。因为 <code>vars.less</code> 将在根的 less 配置文件的末尾引入，作为配置，它将被多个文件使用，所以一旦你在这里写了样式，你的样式就会被多次复制。</p> </blockquote> </div></div> '},51:function(n,s,a){var p=a(1),t=a(39),o=a(14).default;n.exports=a(14),n.exports.default=p(o,t,[])}}]);