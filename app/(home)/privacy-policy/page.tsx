import { company, companyAddress, getHost } from '@/app/layout/ServerHost';

export default async function PrivacyPolicy() {
  const host = await getHost();
  const domain = host.includes('sorapix') ? 'sorapix.ai' : 'ifantasy.ai';
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
          <h3 id="privacy-policy">
            <span>Privacy Policy</span>
          </h3>
          <h1 id="privacy-policy-2">
            <strong>
              <span>Privacy Policy</span>
            </strong>
          </h1>
          <h3 id="last-updated-october-23rd-2023">
            <strong>
              <span>Last updated: October 23rd, 2023</span>
            </strong>
          </h3>
          <p>
            <span>
              This Privacy Policy describes our policies and procedures
              regarding the collection, use, and disclosure of your information
              when you use the Service and describes your privacy rights and how
              the law protects you. This section explains. We use your personal
              information to provide and improve the service. By using the
              Service, you consent to the collection and use of information in
              accordance with this Privacy Policy.
            </span>
          </p>
          <h3 id="interpretation--definitions-2">
            <strong>
              <span>Interpretation &amp; Definitions</span>
            </strong>
          </h3>
          <p>
            <span>In accordance with these Terms &amp; Conditions:</span>
          </p>
          <ul>
            <li>
              <p>
                <span>
                  Account means a unique account created for you to access our
                  Service or part of our Service.
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
                  A cookie is a small file that a website places on your
                  computer, mobile device or other device that contains details
                  of, among other things, your browsing history on that website.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Personal data is any information relating to an identified or
                  identifiable person.
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
                  Service Provider means a natural or legal person who processes
                  data on behalf of the Company. To facilitate the Service,
                  provide the Service on our behalf, perform services related to
                  the Service, or assist us in analyzing how the Service is used
                  , refers to third-party companies or individuals employed by
                  us.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Face Data refers to automatically collected data generated
                  through the use of the Service or by the Service
                  infrastructure itself (eg, page visit time).
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  The Website is {domain}. You can access it at {domain}.
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
          <h3 id="personal-data-collection-and-usage">
            <strong>
              <span>Personal Data collection and usage</span>
            </strong>
          </h3>
          <p>
            <span>
              While using our Service, we may ask you to provide us with certain
              personally identifiable information that can be used to contact or
              identify you. Personally identifiable information includes, but is
              not limited to: Face Data
            </span>
          </p>
          <h3 id="usage-data-collection-and-usage">
            <strong>
              <span>Face Data collection and usage</span>
            </strong>
          </h3>
          <p>
            <span>
              Face Data is collected automatically when you use the Service.
              Face Data may include information such as your device&apos;s
              Internet Protocol address (such as your IP address), browser type,
              browser version, the pages of the Service that you visit, the time
              and date of your visit, and the time spent on those pages. I have.
              Unique device identifier and other diagnostic data. If you access
              the Service via a mobile device, the type of mobile device you are
              using, your mobile device unique ID, your mobile device IP
              address, your mobile phone operating system, the type of mobile
              internet browser you are using, unique device identifiers, and
              other diagnostic data. We may also collect information that your
              browser sends when you access our Services or when you use or
              through your mobile device.
            </span>
          </p>
          <p>
            <span>
              Data Collection and Use: The images users upload are collected for
              the specific purpose of applying virtual clothing changes using
              our AI technology. These images are not used for advertising, user
              profiling, or any other activities beyond the stated
              functionality.{' '}
            </span>
          </p>
          <p>
            <span>
              How We Use Your Information: Images are processed to generate the
              desired clothing change effect. The processing is carried out
              automatically by our servers, and the images are encrypted during
              transmission to protect user privacy.{' '}
            </span>
          </p>
          <p>
            <span>
              Data Sharing and Disclosure: We do not share or sell user-uploaded
              images. The images may only be shared if legally required or with
              the user&apos;s explicit consent, such as for compliance with
              regulations or handling specific user requests.{' '}
            </span>
          </p>
          <p>
            <span>
              Data Storage and Security: Images are stored in a secure
              environment using [mention specific technologies or services if
              relevant]. We use encryption and other security measures to
              prevent unauthorized access to the data.{' '}
            </span>
          </p>
          <p>
            <span>
              Data Retention: To maintain user privacy and data security,
              uploaded images are deleted from our systems after 24 hours. This
              limited retention period ensures that we only keep the data long
              enough to provide the necessary service and nothing more.
            </span>
          </p>
          <p>
            <span></span>
          </p>
          <h3 id="tracking-technologies-and-cookies">
            <strong>
              <span>Tracking Technologies and Cookies</span>
            </strong>
          </h3>
          <ul>
            <li>
              <p>
                <span>
                  Cookies or browser cookies. Cookies are small files placed on
                  your device. You can refuse all cookies or instruct your
                  browser to indicate that cookies are being sent. However, if
                  you do not accept cookies, you may not be able to use some of
                  our services. Our services may use cookies unless your browser
                  is set to refuse cookies.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Web beacon. Certain areas of our Service and emails may
                  contain small electronic files called web beacons (also known
                  as clear GIFs, pixel tags and single pixel GIFs). -email and
                  other related website statistics (for example, recording the
                  popularity of certain sections and checking the integrity of
                  our systems and servers);
                </span>
              </p>
            </li>
          </ul>
          <p>
            <span>
              Cookies can be &quot;Persistent&quot; or &quot;Session&quot;
              Cookies. Persistent Cookies remain on Your personal computer or
              mobile device when You go offline, while Session Cookies are
              deleted as soon as You close Your web browser. You can learn more
              about cookies on TermsFeed website article. We use both Session
              and Persistent Cookies for the purposes set out below:
            </span>
          </p>
          <ul>
            <li>
              <p>
                <span>
                  Necessary / Essential Cookies Type: Session Cookies
                  Administered by: Us Purpose: These Cookies are essential to
                  provide You with services available through the Website and to
                  enable You to use some of its features. They help to
                  authenticate users and prevent fraudulent use of user
                  accounts. Without these Cookies, the services that You have
                  asked for cannot be provided, and We only use these Cookies to
                  provide You with those services.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Cookies Policy / Notice Acceptance Cookies Type: Persistent
                  Cookies Administered by: Us Purpose: These Cookies identify if
                  users have accepted the use of cookies on the Website.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Functionality Cookies Type: Persistent Cookies Administered
                  by: Us Purpose: These Cookies allow us to remember choices You
                  make when You use the Website, such as remembering your login
                  details or language preference. The purpose of these Cookies
                  is to provide You with a more personal experience and to avoid
                  You having to re-enter your preferences every time You use the
                  Website.
                </span>
              </p>
            </li>
          </ul>
          <p>
            <span>
              For more information about the cookies we use and your choices
              regarding cookies, please visit our Cookies Policy or the Cookies
              section of our Privacy Policy.
            </span>
          </p>
          <h3 id="use-of-your-personal-data">
            <strong>
              <span>Use of Your Personal Data</span>
            </strong>
          </h3>
          <p>
            <span>
              The Company may use Personal Data for the following purposes:
            </span>
          </p>
          <ul>
            <li>
              <p>
                <span>
                  To provide and maintain our Service, including to monitor the
                  usage of our Service.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  To manage Your Account: to manage Your registration as a user
                  of the Service. The Personal Data You provide can give You
                  access to different functionalities of the Service that are
                  available to You as a registered user.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  For the performance of a contract: the development, compliance
                  and undertaking of the purchase contract for the products,
                  items or services You have purchased or of any other contract
                  with Us through the Service.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  To contact You: To contact You by email, telephone calls, SMS,
                  or other equivalent forms of electronic communication, such as
                  a mobile application&apos;s push notifications regarding
                  updates or informative communications related to the
                  functionalities, products or contracted services, including
                  the security updates, when necessary or reasonable for their
                  implementation.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  To provide You with news, special offers and general
                  information about other goods, services and events which we
                  offer that are similar to those that you have already
                  purchased or enquired about unless You have opted not to
                  receive such information.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  To manage Your requests: To attend and manage Your requests to
                  Us.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  For other purposes: We may use Your information for other
                  purposes, such as data analysis, identifying usage trends,
                  determining the effectiveness of our promotional campaigns and
                  to evaluate and improve our Service, products, services,
                  marketing and your experience.
                </span>
              </p>
            </li>
          </ul>
          <p>
            <span>
              We may share Your personal information in the following
              situations:
            </span>
          </p>
          <ul>
            <li>
              <p>
                <span>
                  With Service Providers: We may share Your personal information
                  with Service Providers to monitor and analyze the use of our
                  Service, to contact You.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  For business transfers: We may share or transfer Your personal
                  information in connection with, or during negotiations of, any
                  merger, sale of Company assets, financing, or acquisition of
                  all or a portion of Our business to another company.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  With Affiliates: We may share Your information with Our
                  affiliates, in which case we will require those affiliates to
                  honor this Privacy Policy. Affiliates include Our parent
                  company and any other subsidiaries, joint venture partners or
                  other companies that We control or that are under common
                  control with Us.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  With business partners: We may share Your information with Our
                  business partners to offer You certain products, services or
                  promotions.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  With other users: when You share personal information or
                  otherwise interact in the public areas with other users, such
                  information may be viewed by all users and may be publicly
                  distributed outside.
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  With Your consent: We may disclose Your personal information
                  for any other purpose with Your consent.
                </span>
              </p>
            </li>
          </ul>
          <h3 id="retention-of-your-personal-data">
            <strong>
              <span>Retention of Your Personal Data</span>
            </strong>
          </h3>
          <p>
            <span>
              The Company will retain Your Personal Data only for as long as is
              necessary for the purposes set out in this Privacy Policy. We will
              retain and use Your Personal Data to the extent necessary to
              comply with our legal obligations (for example, if we are required
              to retain your data to comply with applicable laws), resolve
              disputes, and enforce our legal agreements and policies. The
              Company will also retain Face Data for internal analysis purposes.
              Face Data is generally retained for a shorter period of time,
              except when this data is used to strengthen the security or to
              improve the functionality of Our Service, or We are legally
              obligated to retain this data for longer time periods.
            </span>
          </p>
          <h3 id="transfer-of-your-personal-data">
            <strong>
              <span>Transfer of Your Personal Data</span>
            </strong>
          </h3>
          <p>
            <span>
              Your information, including Personal Data, is processed at the
              Company&apos;s operating offices and in any other places where the
              parties involved in the processing are located. It means that this
              information may be transferred to — and maintained on — computers
              located outside of Your state, province, country or other
              governmental jurisdiction where the data protection laws may
              differ than those from Your jurisdiction. Your consent to this
              Privacy Policy followed by Your submission of such information
              represents Your agreement to that transfer. The Company will take
              all steps reasonably necessary to ensure that Your data is treated
              securely and in accordance with this Privacy Policy and no
              transfer of Your Personal Data will take place to an organization
              or a country unless there are adequate controls in place including
              the security of Your data and other personal information.
            </span>
          </p>
          <h3 id="disclosure-of-your-personal-data">
            <strong>
              <span>Disclosure of Your Personal Data</span>
            </strong>
          </h3>
          <h3 id="business-transactions">
            <strong>
              <span>Business Transactions</span>
            </strong>
          </h3>
          <p>
            <span>
              If the Company is involved in a merger, acquisition or asset sale,
              Your Personal Data may be transferred. We will provide notice
              before Your Personal Data is transferred and becomes subject to a
              different Privacy Policy.
            </span>
          </p>
          <h3 id="law-enforcement">
            <strong>
              <span>Law enforcement</span>
            </strong>
          </h3>
          <p>
            <span>
              Under certain circumstances, the Company may be required to
              disclose Your Personal Data if required to do so by law or in
              response to valid requests by public authorities (e.g. a court or
              a government agency).
            </span>
          </p>
          <h3 id="other-legal-requirements">
            <strong>
              <span>Other legal requirements</span>
            </strong>
          </h3>
          <p>
            <span>
              The Company may disclose Your Personal Data in the good faith
              belief that such action is necessary to:
            </span>
          </p>
          <ul>
            <li>
              <p>
                <span>Comply with a legal obligation</span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Protect and defend the rights or property of the Company
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Prevent or investigate possible wrongdoing in connection with
                  the Service
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>
                  Protect the personal safety of Users of the Service or the
                  public
                </span>
              </p>
            </li>
            <li>
              <p>
                <span>Protect against legal liability</span>
              </p>
            </li>
          </ul>
          <h3 id="security-of-your-personal-data">
            <strong>
              <span>Security of your personal data</span>
            </strong>
          </h3>
          <p>
            <span>
              The security of Your Personal Data is important to Us, but
              remember that no method of transmission over the Internet, or
              method of electronic storage is 100% secure. While We strive to
              use commercially acceptable means to protect Your Personal Data,
              We cannot guarantee its absolute security.
            </span>
          </p>
          <h3 id="childrens-privacy">
            <strong>
              <span>Children&apos;s Privacy</span>
            </strong>
          </h3>
          <p>
            <span>
              Our Service does not address anyone under the age of 18. We do not
              knowingly collect personally identifiable information from anyone
              under the age of 18. If You are a parent or guardian and You are
              aware that Your child has provided Us with Personal Data, please
              contact Us. If We become aware that We have collected Personal
              Data from anyone under the age of 18 without verification of
              parental consent, We take steps to remove that information from
              Our servers. If We need to rely on consent as a legal basis for
              processing Your information and Your country requires consent from
              a parent, We may require Your parent&apos;s consent before We
              collect and use that information.
            </span>
          </p>
          <h3 id="links-to-other-websites">
            <strong>
              <span>Links to Other Websites</span>
            </strong>
          </h3>
          <p>
            <span>
              Our Service may contain links to other websites that are not
              operated by Us. If You click on a third party link, You will be
              directed to that third party&apos;s site. We strongly advise You
              to review the Privacy Policy of every site You visit. We have no
              control over and assume no responsibility for the content, privacy
              policies or practices of any third party sites or services.
            </span>
          </p>
          <h3 id="changes-to-this-privacy-policy">
            <strong>
              <span>Changes to this Privacy Policy</span>
            </strong>
          </h3>
          <p>
            <span>
              We may update Our Privacy Policy from time to time. We will notify
              You of any changes by posting the new Privacy Policy on this page.
              We will let You know via email and/or a prominent notice on Our
              Service, prior to the change becoming effective and update the
              &quot;Last updated&quot; date at the top of this Privacy Policy.
              You are advised to review this Privacy Policy periodically for any
              changes. Changes to this Privacy Policy are effective when they
              are posted on this page.
            </span>
          </p>
          <h3 id="contact-us-2">
            <strong>
              <span>Contact Us</span>
            </strong>
          </h3>
          <p>
            <span>
              If you have any questions about this Privacy Policy, You can
              contact us: By email: customer@{domain}
            </span>
          </p>
          <h4 id="terms-of-service-2">
            <strong>
              <span>Company&apos;s Legal Name</span>
            </strong>
          </h4>
          <p>
            <span>{await company()}</span>
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
