(window.webpackJsonp=window.webpackJsonp||[]).push([[16,2],{15:function(t,e,d){"use strict";d.r(e),function(t){d.d(e,"default",(function(){return r}));var i,l,n,a=d(0);class r extends a.a{inited(){t.hub&&t.hub.fire&&t.hub.fire("changed",{level:0,children:[{level:2,title:"生命周期",hash:"%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F"},{level:2,title:"方法",hash:"%E6%96%B9%E6%B3%95"},{level:2,title:"属性",hash:"%E5%B1%9E%E6%80%A7"}]})}}n={},(l="components")in(i=r)?Object.defineProperty(i,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[l]=n}.call(this,d(2))},41:function(t,e){t.exports=' <div class="content markdown-content"><div class="markdown"><h1 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E3%80%81%E5%B1%9E%E6%80%A7%E5%8F%8A%E6%96%B9%E6%B3%95">生命周期、属性及方法</h1> <h2 id="%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">生命周期</h2> <p>与 San-SSR 相关的生命周期为：compile、inited。</p> <p>在创建组件实例时，会执行 compile。</p> <p>在 render 过程中，会执行 inited。</p> <p>总体执行顺序：</p> <p><img src="https://user-images.githubusercontent.com/9262426/135042920-85d8b312-9d37-48e3-8e32-fc10add7707f.jpg" alt=""/></p> <h2 id="%E6%96%B9%E6%B3%95">方法</h2> <p>与 San-SSR 相关的方法目前只有 initData。</p> <p>每次 render 过程中会执行 initData 得到新的初始化数据。</p> <h2 id="%E5%B1%9E%E6%80%A7">属性</h2> <table> <thead> <tr> <th>名称</th> <th>需要的阶段</th> <th style="text-align:left">说明</th> </tr> </thead> <tbody> <tr> <td>template</td> <td>compile</td> <td style="text-align:left">组件模板</td> </tr> <tr> <td>filters</td> <td>compile、render</td> <td style="text-align:left"><a href="https://baidu.github.io/san/tutorial/component/#%E8%BF%87%E6%BB%A4%E5%99%A8" target="_blank">过滤器</a></td> </tr> <tr> <td>components</td> <td>compile</td> <td style="text-align:left">子组件</td> </tr> <tr> <td>computed</td> <td>compile、render</td> <td style="text-align:left">计算属性</td> </tr> <tr> <td>trimWhitespace</td> <td>compile</td> <td style="text-align:left">定义组件模板解析时对空白字符的 trim 模式</td> </tr> <tr> <td>delimiters</td> <td>compile</td> <td style="text-align:left">定义组件模板解析时插值的分隔符。</td> </tr> </tbody> </table> </div></div> '},54:function(t,e,d){var i=d(1),l=d(41),n=d(15).default;t.exports=d(15),t.exports.default=i(n,l,[])}}]);