import {
  company,
  companyAddress,
  companyCountry,
  getHost,
} from '@/app/layout/ServerHost';
export const runtime = 'edge';
export default async function TermOfService() {
  const host = await getHost();
  const domain = host.includes('sorapix') ? 'sorapix.ai' : 'ifantasy.ai';
  const companyName = await company();
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width initial-scale=1" />
      <link
        href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext"
        rel="stylesheet"
        type="text/css"
      />
      <style
        type="text/css"
        dangerouslySetInnerHTML={{
          __html:
            'html {overflow-x: initial !important;}:root { --bg-color: #ffffff; --text-color: #333333; --select-text-bg-color: #B5D6FC; --select-text-font-color: auto; --monospace: "Lucida Console",Consolas,"Courier",monospace; --title-bar-height: 20px; }\n.mac-os-11 { --title-bar-height: 28px; }\nhtml { font-size: 14px; background-color: var(--bg-color); color: var(--text-color); font-family: "Helvetica Neue", Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; }\nh1, h2, h3, h4, h5 { white-space: pre-wrap; }\nbody { margin: 0px; padding: 0px; height: auto; inset: 0px; font-size: 1rem; line-height: 1.42857; overflow-x: hidden; background: inherit; }\niframe { margin: auto; }\na.url { word-break: break-all; }\na:active, a:hover { outline: 0px; }\n.in-text-selection, ::selection { text-shadow: none; background: var(--select-text-bg-color); color: var(--select-text-font-color); }\n#write { margin: 0px auto; height: auto; width: inherit; word-break: normal; overflow-wrap: break-word; position: relative; white-space: normal; overflow-x: visible; padding-top: 36px; }\n#write.first-line-indent p { text-indent: 2em; }\n#write.first-line-indent li p, #write.first-line-indent p * { text-indent: 0px; }\n#write.first-line-indent li { margin-left: 2em; }\n.for-image #write { padding-left: 8px; padding-right: 8px; }\nbody.typora-export { padding-left: 30px; padding-right: 30px; }\n.typora-export .footnote-line, .typora-export li, .typora-export p { white-space: pre-wrap; }\n.typora-export .task-list-item input { pointer-events: none; }\n@media screen and (max-width: 500px) {\n  body.typora-export { padding-left: 0px; padding-right: 0px; }\n  #write { padding-left: 20px; padding-right: 20px; }\n}\n#write li > figure:last-child { margin-bottom: 0.5rem; }\n#write ol, #write ul { position: relative; }\nimg { max-width: 100%; vertical-align: middle; image-orientation: from-image; }\nbutton, input, select, textarea { color: inherit; font: inherit; }\ninput[type="checkbox"], input[type="radio"] { line-height: normal; padding: 0px; }\n*, ::after, ::before { box-sizing: border-box; }\n#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p, #write pre { width: inherit; }\n#write h1, #write h2, #write h3, #write h4, #write h5, #write h6, #write p { position: relative; }\np { line-height: inherit; }\nh1, h2, h3, h4, h5, h6 { break-after: avoid-page; break-inside: avoid; orphans: 4; }\np { orphans: 4; }\nh1 { font-size: 2rem; }\nh2 { font-size: 1.8rem; }\nh3 { font-size: 1.6rem; }\nh4 { font-size: 1.4rem; }\nh5 { font-size: 1.2rem; }\nh6 { font-size: 1rem; }\n.md-math-block, .md-rawblock, h1, h2, h3, h4, h5, h6, p { margin-top: 1rem; margin-bottom: 1rem; }\n.hidden { display: none; }\n.md-blockmeta { color: rgb(204, 204, 204); font-weight: 700; font-style: italic; }\na { cursor: pointer; }\nsup.md-footnote { padding: 2px 4px; background-color: rgba(238, 238, 238, 0.7); color: rgb(85, 85, 85); border-radius: 4px; cursor: pointer; }\nsup.md-footnote a, sup.md-footnote a:hover { color: inherit; text-transform: inherit; text-decoration: inherit; }\n#write input[type="checkbox"] { cursor: pointer; width: inherit; height: inherit; }\nfigure { overflow-x: auto; margin: 1.2em 0px; max-width: calc(100% + 16px); padding: 0px; }\nfigure > table { margin: 0px; }\nthead, tr { break-inside: avoid; break-after: auto; }\nthead { display: table-header-group; }\ntable { border-collapse: collapse; border-spacing: 0px; width: 100%; overflow: auto; break-inside: auto; text-align: left; }\ntable.md-table td { min-width: 32px; }\n.CodeMirror-gutters { border-right: 0px; background-color: inherit; }\n.CodeMirror-linenumber { user-select: none; }\n.CodeMirror { text-align: left; }\n.CodeMirror-placeholder { opacity: 0.3; }\n.CodeMirror pre { padding: 0px 4px; }\n.CodeMirror-lines { padding: 0px; }\ndiv.hr:focus { cursor: none; }\n#write pre { white-space: pre-wrap; }\n#write.fences-no-line-wrapping pre { white-space: pre; }\n#write pre.ty-contain-cm { white-space: normal; }\n.CodeMirror-gutters { margin-right: 4px; }\n.md-fences { font-size: 0.9rem; display: block; break-inside: avoid; text-align: left; overflow: visible; white-space: pre; background: inherit; position: relative !important; }\n.md-fences-adv-panel { width: 100%; margin-top: 10px; text-align: center; padding-top: 0px; padding-bottom: 8px; overflow-x: auto; }\n#write .md-fences.mock-cm { white-space: pre-wrap; }\n.md-fences.md-fences-with-lineno { padding-left: 0px; }\n#write.fences-no-line-wrapping .md-fences.mock-cm { white-space: pre; overflow-x: auto; }\n.md-fences.mock-cm.md-fences-with-lineno { padding-left: 8px; }\n.CodeMirror-line, twitterwidget { break-inside: avoid; }\nsvg { break-inside: avoid; }\n.footnotes { opacity: 0.8; font-size: 0.9rem; margin-top: 1em; margin-bottom: 1em; }\n.footnotes + .footnotes { margin-top: 0px; }\n.md-reset { margin: 0px; padding: 0px; border: 0px; outline: 0px; vertical-align: top; background: 0px 0px; text-decoration: none; text-shadow: none; float: none; position: static; width: auto; height: auto; white-space: nowrap; cursor: inherit; -webkit-tap-highlight-color: transparent; line-height: normal; font-weight: 400; text-align: left; box-sizing: content-box; direction: ltr; }\nli div { padding-top: 0px; }\nblockquote { margin: 1rem 0px; }\nli .mathjax-block, li p { margin: 0.5rem 0px; }\nli blockquote { margin: 1rem 0px; }\nli { margin: 0px; position: relative; }\nblockquote > :last-child { margin-bottom: 0px; }\nblockquote > :first-child, li > :first-child { margin-top: 0px; }\n.footnotes-area { color: rgb(136, 136, 136); margin-top: 0.714rem; padding-bottom: 0.143rem; white-space: normal; }\n#write .footnote-line { white-space: pre-wrap; }\n@media print {\n  body, html { border: 1px solid transparent; height: 99%; break-after: avoid; break-before: avoid; font-variant-ligatures: no-common-ligatures; }\n  #write { margin-top: 0px; border-color: transparent !important; padding-top: 0px !important; padding-bottom: 0px !important; }\n  .typora-export * { -webkit-print-color-adjust: exact; }\n  .typora-export #write { break-after: avoid; }\n  .typora-export #write::after { height: 0px; }\n  .is-mac table { break-inside: avoid; }\n  #write > p:nth-child(1) { margin-top: 0px; }\n  .typora-export-show-outline .typora-export-sidebar { display: none; }\n  figure { overflow-x: visible; }\n}\n.footnote-line { margin-top: 0.714em; font-size: 0.7em; }\na img, img a { cursor: pointer; }\npre.md-meta-block { font-size: 0.8rem; min-height: 0.8rem; white-space: pre-wrap; background: rgb(204, 204, 204); display: block; overflow-x: hidden; }\np > .md-image:only-child:not(.md-img-error) img, p > img:only-child { display: block; margin: auto; }\n#write.first-line-indent p > .md-image:only-child:not(.md-img-error) img { left: -2em; position: relative; }\np > .md-image:only-child { display: inline-block; width: 100%; }\n#write .MathJax_Display { margin: 0.8em 0px 0px; }\n.md-math-block { width: 100%; }\n.md-math-block:not(:empty)::after { display: none; }\n.MathJax_ref { fill: currentcolor; }\n[contenteditable="true"]:active, [contenteditable="true"]:focus, [contenteditable="false"]:active, [contenteditable="false"]:focus { outline: 0px; box-shadow: none; }\n.md-task-list-item { position: relative; list-style-type: none; }\n.task-list-item.md-task-list-item { padding-left: 0px; }\n.md-task-list-item > input { position: absolute; top: 0px; left: 0px; margin-left: -1.2em; margin-top: calc(1em - 10px); border: none; }\n.math { font-size: 1rem; }\n.md-toc { min-height: 3.58rem; position: relative; font-size: 0.9rem; border-radius: 10px; }\n.md-toc-content { position: relative; margin-left: 0px; }\n.md-toc-content::after, .md-toc::after { display: none; }\n.md-toc-item { display: block; color: rgb(65, 131, 196); }\n.md-toc-item a { text-decoration: none; }\n.md-toc-inner:hover { text-decoration: underline; }\n.md-toc-inner { display: inline-block; cursor: pointer; }\n.md-toc-h1 .md-toc-inner { margin-left: 0px; font-weight: 700; }\n.md-toc-h2 .md-toc-inner { margin-left: 2em; }\n.md-toc-h3 .md-toc-inner { margin-left: 4em; }\n.md-toc-h4 .md-toc-inner { margin-left: 6em; }\n.md-toc-h5 .md-toc-inner { margin-left: 8em; }\n.md-toc-h6 .md-toc-inner { margin-left: 10em; }\n@media screen and (max-width: 48em) {\n  .md-toc-h3 .md-toc-inner { margin-left: 3.5em; }\n  .md-toc-h4 .md-toc-inner { margin-left: 5em; }\n  .md-toc-h5 .md-toc-inner { margin-left: 6.5em; }\n  .md-toc-h6 .md-toc-inner { margin-left: 8em; }\n}\na.md-toc-inner { font-size: inherit; font-style: inherit; font-weight: inherit; line-height: inherit; }\n.footnote-line a:not(.reversefootnote) { color: inherit; }\n.reversefootnote { font-family: ui-monospace, sans-serif; }\n.md-attr { display: none; }\n.md-fn-count::after { content: "."; }\ncode, pre, samp, tt { font-family: var(--monospace); }\nkbd { margin: 0px 0.1em; padding: 0.1em 0.6em; font-size: 0.8em; color: rgb(36, 39, 41); background: rgb(255, 255, 255); border: 1px solid rgb(173, 179, 185); border-radius: 3px; box-shadow: rgba(12, 13, 14, 0.2) 0px 1px 0px, rgb(255, 255, 255) 0px 0px 0px 2px inset; white-space: nowrap; vertical-align: middle; }\n.md-comment { color: rgb(162, 127, 3); opacity: 0.6; font-family: var(--monospace); }\ncode { text-align: left; vertical-align: initial; }\na.md-print-anchor { white-space: pre !important; border-width: initial !important; border-style: none !important; border-color: initial !important; display: inline-block !important; position: absolute !important; width: 1px !important; right: 0px !important; outline: 0px !important; background: 0px 0px !important; text-decoration: initial !important; text-shadow: initial !important; }\n.os-windows.monocolor-emoji .md-emoji { font-family: "Segoe UI Symbol", sans-serif; }\n.md-diagram-panel > svg { max-width: 100%; }\n[lang="flow"] svg, [lang="mermaid"] svg { max-width: 100%; height: auto; }\n[lang="mermaid"] .node text { font-size: 1rem; }\ntable tr th { border-bottom: 0px; }\nvideo { max-width: 100%; display: block; margin: 0px auto; }\niframe { max-width: 100%; width: 100%; border: none; }\n.highlight td, .highlight tr { border: 0px; }\nmark { background: rgb(255, 255, 0); color: rgb(0, 0, 0); }\n.md-html-inline .md-plain, .md-html-inline strong, mark .md-inline-math, mark strong { color: inherit; }\n.md-expand mark .md-meta { opacity: 0.3 !important; }\nmark .md-meta { color: rgb(0, 0, 0); }\n@media print {\n  .typora-export h1, .typora-export h2, .typora-export h3, .typora-export h4, .typora-export h5, .typora-export h6 { break-inside: avoid; }\n}\n.md-diagram-panel .messageText { stroke: none !important; }\n.md-diagram-panel .start-state { fill: var(--node-fill); }\n.md-diagram-panel .edgeLabel rect { opacity: 1 !important; }\n.md-fences.md-fences-math { font-size: 1em; }\n.md-fences-advanced:not(.md-focus) { padding: 0px; white-space: nowrap; border: 0px; }\n.md-fences-advanced:not(.md-focus) { background: inherit; }\n.typora-export-show-outline .typora-export-content { max-width: 1440px; margin: auto; display: flex; flex-direction: row; }\n.typora-export-sidebar { width: 300px; font-size: 0.8rem; margin-top: 80px; margin-right: 18px; }\n.typora-export-show-outline #write { --webkit-flex: 2; flex: 2 1 0%; }\n.typora-export-sidebar .outline-content { position: fixed; top: 0px; max-height: 100%; overflow: hidden auto; padding-bottom: 30px; padding-top: 60px; width: 300px; }\n@media screen and (max-width: 1024px) {\n  .typora-export-sidebar, .typora-export-sidebar .outline-content { width: 240px; }\n}\n@media screen and (max-width: 800px) {\n  .typora-export-sidebar { display: none; }\n}\n.outline-content li, .outline-content ul { margin-left: 0px; margin-right: 0px; padding-left: 0px; padding-right: 0px; list-style: none; overflow-wrap: anywhere; }\n.outline-content ul { margin-top: 0px; margin-bottom: 0px; }\n.outline-content strong { font-weight: 400; }\n.outline-expander { width: 1rem; height: 1.42857rem; position: relative; display: table-cell; vertical-align: middle; cursor: pointer; padding-left: 4px; }\n.outline-expander::before { content: ""; position: relative; font-family: Ionicons; display: inline-block; font-size: 8px; vertical-align: middle; }\n.outline-item { padding-top: 3px; padding-bottom: 3px; cursor: pointer; }\n.outline-expander:hover::before { content: ""; }\n.outline-h1 > .outline-item { padding-left: 0px; }\n.outline-h2 > .outline-item { padding-left: 1em; }\n.outline-h3 > .outline-item { padding-left: 2em; }\n.outline-h4 > .outline-item { padding-left: 3em; }\n.outline-h5 > .outline-item { padding-left: 4em; }\n.outline-h6 > .outline-item { padding-left: 5em; }\n.outline-label { cursor: pointer; display: table-cell; vertical-align: middle; text-decoration: none; color: inherit; }\n.outline-label:hover { text-decoration: underline; }\n.outline-item:hover { border-color: rgb(245, 245, 245); background-color: var(--item-hover-bg-color); }\n.outline-item:hover { margin-left: -28px; margin-right: -28px; border-left: 28px solid transparent; border-right: 28px solid transparent; }\n.outline-item-single .outline-expander::before, .outline-item-single .outline-expander:hover::before { display: none; }\n.outline-item-open > .outline-item > .outline-expander::before { content: ""; }\n.outline-children { display: none; }\n.info-panel-tab-wrapper { display: none; }\n.outline-item-open > .outline-children { display: block; }\n.typora-export .outline-item { padding-top: 1px; padding-bottom: 1px; }\n.typora-export .outline-item:hover { margin-right: -8px; border-right: 8px solid transparent; }\n.typora-export .outline-expander::before { content: "+"; font-family: inherit; top: -1px; }\n.typora-export .outline-expander:hover::before, .typora-export .outline-item-open > .outline-item > .outline-expander::before { content: "−"; }\n.typora-export-collapse-outline .outline-children { display: none; }\n.typora-export-collapse-outline .outline-item-open > .outline-children, .typora-export-no-collapse-outline .outline-children { display: block; }\n.typora-export-no-collapse-outline .outline-expander::before { content: "" !important; }\n.typora-export-show-outline .outline-item-active > .outline-item .outline-label { font-weight: 700; }\n.md-inline-math-container mjx-container { zoom: 0.95; }\nmjx-container { break-inside: avoid; }\n.md-alert.md-alert-note { border-left-color: rgb(9, 105, 218); }\n.md-alert.md-alert-important { border-left-color: rgb(130, 80, 223); }\n.md-alert.md-alert-warning { border-left-color: rgb(154, 103, 0); }\n.md-alert.md-alert-tip { border-left-color: rgb(31, 136, 61); }\n.md-alert.md-alert-caution { border-left-color: rgb(207, 34, 46); }\n.md-alert { padding: 0px 1em; margin-bottom: 16px; color: inherit; border-left: 0.25em solid rgb(0, 0, 0); }\n.md-alert-text-note { color: rgb(9, 105, 218); }\n.md-alert-text-important { color: rgb(130, 80, 223); }\n.md-alert-text-warning { color: rgb(154, 103, 0); }\n.md-alert-text-tip { color: rgb(31, 136, 61); }\n.md-alert-text-caution { color: rgb(207, 34, 46); }\n.md-alert-text { font-size: 0.9rem; font-weight: 700; }\n.md-alert-text svg { fill: currentcolor; position: relative; top: 0.125em; margin-right: 1ch; overflow: visible; }\n.md-alert-text-container::after { content: attr(data-text); text-transform: capitalize; pointer-events: none; margin-right: 1ch; }\n\n\n:root {\n    --side-bar-bg-color: #fafafa;\n    --control-text-color: #777;\n}\n\n@include-when-export url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,700,400&subset=latin,latin-ext);\n\n/* open-sans-regular - latin-ext_latin */\n  /* open-sans-italic - latin-ext_latin */\n    /* open-sans-700 - latin-ext_latin */\n    /* open-sans-700italic - latin-ext_latin */\n  html {\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n}\n\nbody {\n    font-family: "Open Sans","Clear Sans", "Helvetica Neue", Helvetica, Arial, \'Segoe UI Emoji\', sans-serif;\n    color: rgb(51, 51, 51);\n    line-height: 1.6;\n}\n\n#write {\n    max-width: 860px;\n  \tmargin: 0 auto;\n  \tpadding: 30px;\n    padding-bottom: 100px;\n}\n\n@media only screen and (min-width: 1400px) {\n\t#write {\n\t\tmax-width: 1024px;\n\t}\n}\n\n@media only screen and (min-width: 1800px) {\n\t#write {\n\t\tmax-width: 1200px;\n\t}\n}\n\n#write > ul:first-child,\n#write > ol:first-child{\n    margin-top: 30px;\n}\n\na {\n    color: #4183C4;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    position: relative;\n    margin-top: 1rem;\n    margin-bottom: 1rem;\n    font-weight: bold;\n    line-height: 1.4;\n    cursor: text;\n}\nh1:hover a.anchor,\nh2:hover a.anchor,\nh3:hover a.anchor,\nh4:hover a.anchor,\nh5:hover a.anchor,\nh6:hover a.anchor {\n    text-decoration: none;\n}\nh1 tt,\nh1 code {\n    font-size: inherit;\n}\nh2 tt,\nh2 code {\n    font-size: inherit;\n}\nh3 tt,\nh3 code {\n    font-size: inherit;\n}\nh4 tt,\nh4 code {\n    font-size: inherit;\n}\nh5 tt,\nh5 code {\n    font-size: inherit;\n}\nh6 tt,\nh6 code {\n    font-size: inherit;\n}\nh1 {\n    font-size: 2.25em;\n    line-height: 1.2;\n    border-bottom: 1px solid #eee;\n}\nh2 {\n    font-size: 1.75em;\n    line-height: 1.225;\n    border-bottom: 1px solid #eee;\n}\n\n/*@media print {\n    .typora-export h1,\n    .typora-export h2 {\n        border-bottom: none;\n        padding-bottom: initial;\n    }\n\n    .typora-export h1::after,\n    .typora-export h2::after {\n        content: "";\n        display: block;\n        height: 100px;\n        margin-top: -96px;\n        border-top: 1px solid #eee;\n    }\n}*/\n\nh3 {\n    font-size: 1.5em;\n    line-height: 1.43;\n}\nh4 {\n    font-size: 1.25em;\n}\nh5 {\n    font-size: 1em;\n}\nh6 {\n   font-size: 1em;\n    color: #777;\n}\np,\nblockquote,\nul,\nol,\ndl,\ntable{\n    margin: 0.8em 0;\n}\nli>ol,\nli>ul {\n    margin: 0 0;\n}\nhr {\n    height: 2px;\n    padding: 0;\n    margin: 16px 0;\n    background-color: #e7e7e7;\n    border: 0 none;\n    overflow: hidden;\n    box-sizing: content-box;\n}\n\nli p.first {\n    display: inline-block;\n}\nul,\nol {\n    padding-left: 30px;\n}\nul:first-child,\nol:first-child {\n    margin-top: 0;\n}\nul:last-child,\nol:last-child {\n    margin-bottom: 0;\n}\nblockquote {\n    border-left: 4px solid #dfe2e5;\n    padding: 0 15px;\n    color: #777777;\n}\nblockquote blockquote {\n    padding-right: 0;\n}\ntable {\n    padding: 0;\n    word-break: initial;\n}\ntable tr {\n    border: 1px solid #dfe2e5;\n    margin: 0;\n    padding: 0;\n}\ntable tr:nth-child(2n),\nthead {\n    background-color: #f8f8f8;\n}\ntable th {\n    font-weight: bold;\n    border: 1px solid #dfe2e5;\n    border-bottom: 0;\n    margin: 0;\n    padding: 6px 13px;\n}\ntable td {\n    border: 1px solid #dfe2e5;\n    margin: 0;\n    padding: 6px 13px;\n}\ntable th:first-child,\ntable td:first-child {\n    margin-top: 0;\n}\ntable th:last-child,\ntable td:last-child {\n    margin-bottom: 0;\n}\n\n.CodeMirror-lines {\n    padding-left: 4px;\n}\n\n.code-tooltip {\n    box-shadow: 0 1px 1px 0 rgba(0,28,36,.3);\n    border-top: 1px solid #eef2f2;\n}\n\n.md-fences,\ncode,\ntt {\n    border: 1px solid #e7eaed;\n    background-color: #f8f8f8;\n    border-radius: 3px;\n    padding: 0;\n    padding: 2px 4px 0px 4px;\n    font-size: 0.9em;\n}\n\ncode {\n    background-color: #f3f4f4;\n    padding: 0 2px 0 2px;\n}\n\n.md-fences {\n    margin-bottom: 15px;\n    margin-top: 15px;\n    padding-top: 8px;\n    padding-bottom: 6px;\n}\n\n\n.md-task-list-item > input {\n  margin-left: -1.3em;\n}\n\n@media print {\n    html {\n        font-size: 13px;\n    }\n    pre {\n        page-break-inside: avoid;\n        word-wrap: break-word;\n    }\n}\n\n.md-fences {\n\tbackground-color: #f8f8f8;\n}\n#write pre.md-meta-block {\n\tpadding: 1rem;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f7f7f7;\n    border: 0;\n    border-radius: 3px;\n    color: #777777;\n    margin-top: 0 !important;\n}\n\n.mathjax-block>.code-tooltip {\n\tbottom: .375rem;\n}\n\n.md-mathjax-midline {\n    background: #fafafa;\n}\n\n#write>h3.md-focus:before{\n\tleft: -1.5625rem;\n\ttop: .375rem;\n}\n#write>h4.md-focus:before{\n\tleft: -1.5625rem;\n\ttop: .285714286rem;\n}\n#write>h5.md-focus:before{\n\tleft: -1.5625rem;\n\ttop: .285714286rem;\n}\n#write>h6.md-focus:before{\n\tleft: -1.5625rem;\n\ttop: .285714286rem;\n}\n.md-image>.md-meta {\n    /*border: 1px solid #ddd;*/\n    border-radius: 3px;\n    padding: 2px 0px 0px 4px;\n    font-size: 0.9em;\n    color: inherit;\n}\n\n.md-tag {\n    color: #a7a7a7;\n    opacity: 1;\n}\n\n.md-toc { \n    margin-top:20px;\n    padding-bottom:20px;\n}\n\n.sidebar-tabs {\n    border-bottom: none;\n}\n\n#typora-quick-open {\n    border: 1px solid #ddd;\n    background-color: #f8f8f8;\n}\n\n#typora-quick-open-item {\n    background-color: #FAFAFA;\n    border-color: #FEFEFE #e5e5e5 #e5e5e5 #eee;\n    border-style: solid;\n    border-width: 1px;\n}\n\n/** focus mode */\n.on-focus-mode blockquote {\n    border-left-color: rgba(85, 85, 85, 0.12);\n}\n\nheader, .context-menu, .megamenu-content, footer{\n    font-family: "Segoe UI", "Arial", sans-serif;\n}\n\n.file-node-content:hover .file-node-icon,\n.file-node-content:hover .file-node-open-state{\n    visibility: visible;\n}\n\n.mac-seamless-mode #typora-sidebar {\n    background-color: #fafafa;\n    background-color: var(--side-bar-bg-color);\n}\n\n.mac-os #write{\n    caret-color: AccentColor;\n}\n\n.md-lang {\n    color: #b4654d;\n}\n\n/*.html-for-mac {\n    --item-hover-bg-color: #E6F0FE;\n}*/\n\n#md-notification .btn {\n    border: 0;\n}\n\n.dropdown-menu .divider {\n    border-color: #e5e5e5;\n    opacity: 0.4;\n}\n\n.ty-preferences .window-content {\n    background-color: #fafafa;\n}\n\n.ty-preferences .nav-group-item.active {\n    color: white;\n    background: #999;\n}\n\n.menu-item-container a.menu-style-btn {\n    background-color: #f5f8fa;\n    background-image: linear-gradient( 180deg , hsla(0, 0%, 100%, 0.8), hsla(0, 0%, 100%, 0)); \n}\n\n\n\n',
        }}
      />
      <div className="typora-export-content">
        <div id="write" className="">
          <h3 id="terms-of-service">
            <span>Terms of service</span>
          </h3>
          <h4 id="terms-of-service-2">
            <strong>
              <span>Terms of Service</span>
            </strong>
          </h4>
          <h4 id="last-updated-dec-2023">
            <strong>
              <span>Last updated: DEC, 2023</span>
            </strong>
          </h4>
          <h4 id="interpretation--definitions">
            <strong>
              <span>Interpretation &amp; Definitions</span>
            </strong>
          </h4>
          <p>
            <span>In accordance with these Terms &amp; Conditions:</span>
          </p>
          <ul>
            <li>
              <p>
                <span>
                  An affiliate is a company that controls, is controlled by, or
                  shares a common control structure with a party.
                  &quot;Control&quot; is defined as the possession of 50% or
                  more of the shares, equity interests, or other securities with
                  voting rights for directors or other management positions.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  The United States is referred to as the &quot;Country.&quot;
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Company refers to {domain} (also referred to as &quot;the
                  Company,&quot; &quot;We,&quot; &quot;Us,&quot; or
                  &quot;Our&quot; in this Agreement).
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Device refers to any item that can access the Service,
                  including a computer, a phone, or a tablet computer.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Feedback refers to comments, ideas, or recommendations that
                  You send Us regarding the qualities, functionality, or
                  features of Our Service.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>The Website is referred to as the Service.</span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Premium mode alludes to the service associated with the
                  reoccurring monthly fee.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>Free mode is a service that can be used for free.</span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Image generation service refers to the underlying AI that
                  generates images. use.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Terms of Use (also referred to as “Terms of Use”) means these
                  Terms of Use constitute the entire agreement between you and
                  {companyName} regarding your use of the Service.{' '}
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Third Party Social Media Service means any service or content
                  (including data, information, products or services) provided
                  by a third party that may be viewed, included or made
                  available through the Service.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  The Website is {domain} . You can access it at {domain} .
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  You refer to the person accessing or using the Service, or
                  {domain} or any other entity on behalf of that person
                  accessing or using the Service, as applicable.
                </span>
              </p>
            </li>
          </ul>
          <h4 id="acknowledgement">
            <strong>
              <span>Acknowledgement</span>
            </strong>
          </h4>
          <p>
            <span>
              These are the Terms of Use that govern your use of this service
              and the agreement that exists between you and {companyName} .
              These General Terms and Conditions set out the rights and
              obligations of all users in connection with their use of the
              Service. Your access to and use of the Service is conditioned on
              your acceptance of and compliance with these Terms of Service.
              These Terms of Service apply to all visitors, users and others who
              access or use the Service. By accessing or using the Service, you
              agree to be bound by these Terms of Service. If you do not agree
              to any part of these Terms of Use, please do not access the
              Service. I declare that I am over 18 years old. {domain} does not
              allow users under the age of 18 to use its services. Your access
              to and use of the Service is conditioned on your acceptance of and
              compliance with the {domain} Privacy Policy. Our Privacy Policy
              describes our policies and procedures regarding the collection,
              use and disclosure of personal information when you use the
              Application or Website and describes your privacy rights and how
              the law protects you. Please read our privacy policy carefully
              before using our services. Stuff not to do: If someone else might
              own the copyright to it, don&apos;t upload it. Don&apos;t upload,
              &apos;hate speech&apos; , or material that is threatening,
              harassing, defamatory, or that encourages violence or crime.
              Don&apos;t upload illegal content or sensitive content such as
              child porn or nonconsensual (&apos;revenge&apos;) porn. Don&apos;t
              impersonate someone else. Also, don&apos;t use the service to host
              image libraries you link to from elsewhere, content for your
              website, advertising, avatars, or anything else that turns us into
              your content delivery network. If you do – and we will be the
              judge – or if you do anything illegal, in addition to any other
              legal rights we may have, we will ban you along with the site
              you&apos;re hotlinking from, delete all your images, report you to
              the authorities if necessary, and prevent you from viewing any
              images hosted on our site.
            </span>
          </p>
          <h4 id="licensing">
            <strong>
              <span>Licensing</span>
            </strong>
          </h4>
          <p>
            <span>
              Subject to your compliance with this Agreement, its terms, and any
              applicable legal restrictions: {companyName} reserves all rights
              to assets created using the service, but allows users to share
              assets on other her websites under the following conditions. (i)
              You must provide proper attribution to {companyName} ; The
              presence of the
              {companyName} watermark on the image is considered good
              attribution and satisfies the good attribution requirement for
              sharing the asset on other sites. (ii) sharing must not violate
              any law or the rights of any third party; (iii) User shall not use
              the Assets for any commercial purpose without the express written
              consent of
              {companyName} . Please note that these terms are in addition to
              the original terms and conditions and must be complied with in
              full. Violation or breach of these terms may result in termination
              of your right to share the Assets on other websites.
            </span>
          </p>
          <h4 id="fee-changes">
            <strong>
              <span>Fee Changes</span>
            </strong>
          </h4>
          <p>
            <span>
              {companyName} may change its service fees at any time in its sole
              discretion. Any changes to the service fees will be effective
              immediately. {companyName} will provide reasonable notice in
              advance of any service fee changes to give you an opportunity to
              decide whether you wish to continue using the service under the
              new fee structure. Your continued use of the Service after any
              service fee changes become effective constitutes your agreement to
              pay the new service fee amounts on a per-use basis.
            </span>
          </p>
          <h4 id="rules-and-conduct">
            <strong>
              <span>Rules and Conduct</span>
            </strong>
          </h4>
          <p>
            <span>
              The image generation service is for personal use only and may not
              be used for commercial purposes without the express written
              consent of {companyName} . You agree not to reverse engineer,
              decompile, disassemble, or otherwise attempt to discover the
              source code of the Image Generation Service or any portion
              thereof. You may not redistribute or make available to others the
              Image Generation Service without the express written permission of
              {companyName} . Any unauthorized commercial use, duplication,
              distribution, public performance or public display of the Image
              Generation Service may result in the termination of your right to
              use the Image Generation Service and also violates the rights of
              {companyName} and/or third parties.{' '}
            </span>
          </p>
          <h4 id="third-party-links">
            <strong>
              <span>Third-party links</span>
            </strong>
          </h4>
          <p>
            <span>
              Our Service may contain links to third party websites or services
              that are not owned or controlled by {companyName} . {companyName}{' '}
              does not control and is not responsible for the content, privacy,
              her policies or practices of her websites or services of third
              parties. Further,{companyName} shall not be liable, directly or
              indirectly, for any damage or loss caused or alleged to be caused
              by or in connection with use of or reliance on any such content,
              goods or services available. You acknowledge and agree that we are
              not responsible for on or through such websites or services. We
              strongly encourage you to read the terms of use and privacy
              policies of any third party website or service you visit.
            </span>
          </p>
          <h4 id="termination">
            <strong>
              <span>Termination</span>
            </strong>
          </h4>
          <p>
            <span>
              We may terminate or suspend your access immediately, without
              notice or liability, for any reason whatsoever, including without
              limitation if you violate these Terms of Service. Upon
              termination, your right to use the Service will immediately
              terminate.
            </span>
          </p>
          <h4 id="limitation-of-liability">
            <strong>
              <span>Limitation of Liability</span>
            </strong>
          </h4>
          <p>
            <span>
              Notwithstanding any damages that You would possibly incur, the
              complete legal responsibility of {companyName} and any of its
              providers beneath any provision of this Terms and Your distinct
              treatment for all the foregoing will be restricted to the quantity
              honestly paid via way of means of You via the Service or one
              hundred USD if You have not bought whatever via the Service. To
              the most quantity accepted via way of means of relevant law, in no
              occasion shall the Company or its providers be chargeable for any
              special, incidental, indirect, or consequential damages whatsoever
              (including, however now no longer restricted to, damages for lack
              of profits, lack of records or different information, for
              enterprise interruption, for non-public injury, lack of
              privateness springing up out of or in any manner associated with
              the usage of or lack of ability to apply the Service,
              third-celebration software program and/or third-celebration
              hardware used with the Service, or in any other case in reference
              to any provision of this Terms), despite the fact that
              {companyName}
              or any dealer has been suggested of the opportunity of such
              damages or even if the treatment fails of its vital purpose. Some
              states do now no longer permit the exclusion of implied warranties
              or problem of legal responsibility for incidental or consequential
              damages, because of this that a number of the above obstacles
              might not apply. In those states, every celebration&apos;s legal
              responsibility could be restricted to the best quantity accepted
              via way of means of law.
            </span>
          </p>
          <h4 id="as-is-and-as-available-disclaimer">
            <strong>
              <span>
                &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer
              </span>
            </strong>
          </h4>
          <p>
            <span>
              The Service is provided to You &quot;AS IS&quot; and &quot;AS
              AVAILABLE&quot; and with all faults and defects without warranty
              of any kind. To the maximum extent permitted under applicable law,
              {companyName} , on its own behalf and on behalf of its Affiliates
              and its and their respective licensors and service providers,
              expressly disclaims all warranties, whether express, implied,
              statutory or otherwise, with respect to the Service, including all
              implied warranties of merchantability, fitness for a particular
              purpose, title and non-infringement, and warranties that may arise
              out of course of dealing, course of performance, usage or trade
              practice. Without limitation to the foregoing, {companyName}{' '}
              provides no warranty or undertaking, and makes no representation
              of any kind that the Service will meet Your requirements, achieve
              any intended results, be compatible or work with any other
              software, applications, systems or services, operate without
              interruption, meet any performance or reliability standards or be
              error free or that any errors or defects can or will be corrected.
              Without limiting the foregoing, neither {companyName} nor any of
              the company&apos;s provider makes any representation or warranty
              of any kind, express or implied: (i) as to the operation or
              availability of the Service, or the information, content, and
              materials or products included thereon; (ii) that the Service will
              be uninterrupted or error-free; (iii) as to the accuracy,
              reliability, or currency of any information or content provided
              through the Service; or (iv) that the Service, its servers, the
              content, or e-mails sent from or on behalf of{companyName} are
              free of viruses, scripts, trojan horses, worms, malware, timebombs
              or other harmful components. Some jurisdictions do not allow the
              exclusion of certain types of warranties or limitations on
              applicable statutory rights of a consumer, so some or all of the
              above exclusions and limitations may not apply to You. In such
              cases, however, the exclusions and limitations set forth in this
              section apply to the fullest extent enforceable under applicable
              law.
            </span>
          </p>
          <h4 id="billing-descriptor">
            <strong>
              <span>Billing descriptor</span>
            </strong>
          </h4>
          <p>
            <span>
              You will be billed by Decoda.AI. The said merchant name will
              appear on your bank statement in accordance with the payment you
              made, and possible future recurring payments.
            </span>
          </p>
          <h4 id="governing-law">
            <strong>
              <span>Governing law</span>
            </strong>
          </h4>
          <p>
            <span>
              This Agreement shall be governed by, and interpreted in accordance
              with, the laws of {await companyCountry()} except with respect to
              its authorization and execution and delivery by Issuer and the
              users&apos; resident countries.
            </span>
          </p>
          <h4 id="dispute-resolution">
            <strong>
              <span>Dispute resolution</span>
            </strong>
          </h4>
          <p>
            <span>
              If you have any concerns or disputes regarding the Service, you
              agree to first contact customer@{domain} to resolve the dispute
              informally.
            </span>
          </p>
          <h4 id="for-european-union-eu-users">
            <strong>
              <span>For European Union (EU) users.</span>
            </strong>
          </h4>
          <p>
            <span>
              If you are a European Union consumer, you can benefit from the
              mandatory provisions of the laws of your country of residence.
            </span>
          </p>
          <h4 id="united-states-federal-government-end-use-provisions">
            <strong>
              <span>United States Federal Government End Use Provisions</span>
            </strong>
          </h4>
          <p>
            <span>
              If You are a U.S. federal government end user, our Service is a
              &quot;Commercial Item&quot; as that term is defined at 48 C.F.R.
              §2.101.
            </span>
          </p>
          <h4 id="united-states-legal-compliance">
            <strong>
              <span>United States Legal Compliance</span>
            </strong>
          </h4>
          <p>
            <span>
              You represent that (i) you are not located in a country that is
              subject to an embargo by the U.S. government or that has been
              designated by the U.S. government as a &quot;terrorist supporting
              country&quot;; and (ii) you are not. and guarantee. You are
              located in a country that is on any U.S. government list of
              prohibited or restricted parties.
            </span>
          </p>
          <h4 id="severability">
            <strong>
              <span>Severability</span>
            </strong>
          </h4>
          <p>
            <span>
              If any provision of these Terms is held to be unenforceable or
              invalid, that provision will be modified and construed to affect
              the purpose of such provision to the fullest extent permitted by
              applicable law; The remaining provisions will remain in full force
              and effect.
            </span>
          </p>
          <h4 id="waiver">
            <strong>
              <span>Waiver</span>
            </strong>
          </h4>
          <p>
            <span>
              Except as provided herein, failure to exercise any right or
              require performance of any obligation under these Terms will
              affect either party&apos;s ability to exercise such right or
              require such performance. and waiver of any breach shall not
              constitute a waiver of any subsequent damages.
            </span>
          </p>
          <h4 id="refund-policy">
            <strong>
              <span>Refund policy</span>
            </strong>
          </h4>
          <p>
            <span>
              Non-refundable, except where required by law. Refund requests for
              certain subscriptions are considered by the Company on a
              case-by-case basis and may be granted at {domain}&apos;s sole
              discretion.
            </span>
          </p>
          <h4 id="translation-interpretation">
            <strong>
              <span>Translation Interpretation</span>
            </strong>
          </h4>
          <p>
            <span>
              These Terms of Service may be translated if we make them available
              on our Service. In case of dispute, you agree that the original
              English text shall prevail.
            </span>
          </p>
          <h4 id={'2257'}>
            <strong>
              <span>2257</span>
            </strong>
          </h4>
          <p>
            <span>
              The operator of {domain} is not the producer (whether primary or
              secondary as defined in 18 U.S.C. § 2257) of any of the content
              found on {domain}. The operator’s activities, with respect to such
              content, are limited to the transmission, storage, retrieval,
              hosting and/or formatting of depictions posted by third party
              users, on areas of the website under the user&apos;s control. In
              addition, {domain} does not host any or store any content.
            </span>
          </p>
          <h4 id="changes-to-these-terms-and-conditions">
            <strong>
              <span>Changes to These Terms and Conditions</span>
            </strong>
          </h4>
          <p>
            <span>
              We reserve the right, at our sole discretion, to modify or replace
              these Terms at any time. If the revision is material, we will use
              reasonable efforts to provide you with at least thirty (30)
              days&apos; notice of the new terms becoming effective. What
              constitutes a material change will be determined at our sole
              discretion. By continuing to access or use our Service after those
              revisions become effective, you agree to be bound by the revised
              terms. If you do not agree to all or any part of the new terms,
              please stop using the Website and Services.
            </span>
          </p>
          <h4 id="contact-us">
            <strong>
              <span>Contact Us</span>
            </strong>
          </h4>
          <p>
            <span>
              You can contact at: customer@{domain} If you have any questions
              about these Terms of Service and other customer service needs.
            </span>
          </p>
          <p>
            <span>
              For business inquiries and our affiliate program, contact us at:
              customer@{domain}
            </span>
          </p>
          <h4 id="terms-of-service-2">
            <strong>
              <span>Company&apos;s Legal Name</span>
            </strong>
          </h4>
          <p>
            <span>{companyName}</span>
          </p>

          <h4 id="terms-of-service-2">
            <strong>
              <span>Address</span>
            </strong>
          </h4>
          <p>
            <span>{await companyAddress()}</span>
          </p>
        </div>
      </div>
    </>
  );
}
