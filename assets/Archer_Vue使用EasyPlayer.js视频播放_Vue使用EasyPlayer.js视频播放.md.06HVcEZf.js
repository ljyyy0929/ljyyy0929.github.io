import{_ as a,o as s,c as n,R as e}from"./chunks/framework.lPQqlWxT.js";const g=JSON.parse('{"title":"Vue使用EasyPlayer.js视频播放","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"Archer/Vue使用EasyPlayer.js视频播放/Vue使用EasyPlayer.js视频播放.md","filePath":"Archer/Vue使用EasyPlayer.js视频播放/Vue使用EasyPlayer.js视频播放.md"}'),p={name:"Archer/Vue使用EasyPlayer.js视频播放/Vue使用EasyPlayer.js视频播放.md"},l=e(`<h1 id="vue使用easyplayer-js视频播放" tabindex="-1">Vue使用EasyPlayer.js视频播放 <a class="header-anchor" href="#vue使用easyplayer-js视频播放" aria-label="Permalink to &quot;Vue使用EasyPlayer.js视频播放&quot;">​</a></h1><h2 id="参考文档" tabindex="-1">参考文档 <a class="header-anchor" href="#参考文档" aria-label="Permalink to &quot;参考文档&quot;">​</a></h2><p>官方文档: <a href="https://github.com/EasyDarwin/EasyPlayer.js" target="_blank" rel="noreferrer">https://github.com/EasyDarwin/EasyPlayer.js</a></p><p>官网演示: <a href="http://open.tsingsee.com/sdk/easyplayer/#player" target="_blank" rel="noreferrer">http://open.tsingsee.com/sdk/easyplayer/#player</a></p><h2 id="参考文章" tabindex="-1">参考文章 <a class="header-anchor" href="#参考文章" aria-label="Permalink to &quot;参考文章&quot;">​</a></h2><p><a href="https://segmentfault.com/a/1190000042515097" target="_blank" rel="noreferrer">https://segmentfault.com/a/1190000042515097</a></p><p><a href="https://juejin.cn/post/7089598535967965191?searchId=202406122050571940A012D087CB801959" target="_blank" rel="noreferrer">https://juejin.cn/post/7089598535967965191?searchId=202406122050571940A012D087CB801959</a></p><p><a href="https://cloud.tencent.com/developer/article/1882029" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1882029</a></p><p><a href="https://blog.csdn.net/wbx_wlg/article/details/133069540" target="_blank" rel="noreferrer">https://blog.csdn.net/wbx_wlg/article/details/133069540</a></p><p><a href="https://juejin.cn/post/7357735854717353996" target="_blank" rel="noreferrer">https://juejin.cn/post/7357735854717353996</a></p><p><a href="https://cloud.tencent.com/developer/article/1815155" target="_blank" rel="noreferrer">https://cloud.tencent.com/developer/article/1815155</a></p><h2 id="详细步骤" tabindex="-1">详细步骤 <a class="header-anchor" href="#详细步骤" aria-label="Permalink to &quot;详细步骤&quot;">​</a></h2><ol><li>npm安装easyplayer、copy-webpack-plugin</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install @easydarwin/easyplayer --save</span></span></code></pre></div><ol start="2"><li>EasyPlayer.js需要配置一些文件才能使用 下依赖，不要大于6.0版本的，不然会有bug</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>npm install copy-webpack-plugin@5.1.2 --save-dev</span></span></code></pre></div><ol start="3"><li>在vue.config.js文件中配置</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const CopyWebpackPlugin = require(&#39;copy-webpack-plugin&#39;)</span></span>
<span class="line"><span>configureWebpack: {</span></span>
<span class="line"><span>  plugins:[</span></span>
<span class="line"><span>        new CopyWebpackPlugin([</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            from: &#39;node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer.wasm&#39;,</span></span>
<span class="line"><span>            to: &#39;./libs/EasyPlayer/&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            from: &#39;node_modules/@easydarwin/easyplayer/dist/component/crossdomain.xml&#39;,</span></span>
<span class="line"><span>            to: &#39;./libs/EasyPlayer/&#39;</span></span>
<span class="line"><span>          },</span></span>
<span class="line"><span>          {</span></span>
<span class="line"><span>            from: &#39;node_modules/@easydarwin/easyplayer/dist/component/EasyPlayer-lib.min.js&#39;,</span></span>
<span class="line"><span>            to: &#39;./libs/EasyPlayer/&#39;</span></span>
<span class="line"><span>          }</span></span>
<span class="line"><span>        ])</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span>}</span></span></code></pre></div><ol start="4"><li>需要在public/index.html 引入EasyPlayer-lib.min.js 可以直接在node_modules里找到@easydarwin下的dist/compent/EasyPlayer-lib.min.js 复制到pubilc目录下,还有需要EasyPlayer.wasm同样放到public目录下</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   &lt;script src=&quot;./EasyPlayer-lib.min.js&quot;&gt;&lt;/script&gt;</span></span></code></pre></div><ol start="5"><li>在vue中使用</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>   &lt;easy-player video-url=&quot;http://www.jxwwpt.com/hdl/stream/jxsb01.flv&quot; :live=&quot;true&quot;&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import EasyPlayer from &#39;@easydarwin/easyplayer&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>components: { EasyPlayer },</span></span></code></pre></div><ol start="6"><li>绑定回调事件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;easy-player  </span></span>
<span class="line"><span>	ref=&quot;easyPlayer&quot;  </span></span>
<span class="line"><span>	v-if=&quot;isReset&quot;  </span></span>
<span class="line"><span>	:video-url=&quot;m3u8Url&quot;  </span></span>
<span class="line"><span>	:live=&quot;true&quot;  </span></span>
<span class="line"><span>	:autoplay=&quot;false&quot;  </span></span>
<span class="line"><span>	@play=&quot;onPlayerPlay($event)&quot;  </span></span>
<span class="line"><span>&gt;&lt;/easy-player&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>onPlayerPlay(e) {  </span></span>
<span class="line"><span>	console.log(e, &#39;播放事件回调：&#39;, &#39;play&#39;);  </span></span>
<span class="line"><span>	// 调用父组件的方法  </span></span>
<span class="line"><span>	this.$parent.pauseVideo2(this.m3u8Url);  </span></span>
<span class="line"><span>},</span></span></code></pre></div>`,24),t=[l];function i(r,o,c,d,u,y){return s(),n("div",null,t)}const m=a(p,[["render",i]]);export{g as __pageData,m as default};
