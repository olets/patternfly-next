webpackJsonp([0xe99af70b8bc8],{595:function(e,t){e.exports="<h2 id=overview>Overview</h2> <p>A level is a layout that distributes the space between children evenly and it centers children on the x-axis. By default it positions the children horizontally, but on smaller devices it will position the children vertically.</p> <h2 id=usage>Usage</h2> <table> <thead> <tr> <th>Class</th> <th>Applied To</th> <th>Outcome</th> </tr> </thead> <tbody> <tr> <td><code>.pf-l-level</code></td> <td><code>&lt;div&gt;</code>, <code>&lt;section&gt;</code>, or <code>&lt;article&gt;</code></td> <td>Initializes the level layout</td> </tr> <tr> <td><code>.pf-l-level__item</code></td> <td><code>&lt;div&gt;</code></td> <td>Explicitly sets a child of the level. This class isn&#39;t necessary, but it is included to keep inline with BEM convention, and to provide an entity that will later be used for applying modifiers.</td> </tr> <tr> <td><code>.pf-m-gutter</code></td> <td><code>.pf-l-level</code></td> <td>Adds space between children</td> </tr> </tbody> </table> "},230:function(e,t,l){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.Docs=void 0;var n=l(4),r=a(n),i=l(8),o=a(i),s=l(9),d=a(s),c=l(796),u=a(c),p=l(795),v=a(p),m=l(794),f=a(m),h=l(541),g=a(h),b=l(540),k=a(b),x=l(539),P=a(x),w=l(595),y=a(w);l(718);var E=t.Docs=y.default;t.default=function(){var e=(0,g.default)(),t=(0,k.default)(),l=(0,P.default)();return r.default.createElement(o.default,{docs:E,className:"is-layout-page"},r.default.createElement(d.default,{heading:"Level Example",description:"(with 2 children)",handlebars:u.default},e),r.default.createElement(d.default,{heading:"Level Example",description:"(with 3 children)",handlebars:v.default},t),r.default.createElement(d.default,{heading:"Level Example with Gutters",description:"(with 3 children)",handlebars:f.default},l))}},539:function(e,t,l){var a=l(1);e.exports=(a.default||a).template({1:function(e,t,a,n,r){var i;return(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,l,a,n){return"    content with gutter\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i;return null!=(i=e.invokePartial(l(67),t,{name:"level",hash:{modifierClass:"pf-m-gutter"},fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},794:function(e,t){e.exports='{{#> level modifierClass="pf-m-gutter"}}\n  {{#> level-item}}\n    content with gutter\n  {{/ level-item}}\n  {{#> level-item}}\n    content with gutter\n  {{/ level-item}}\n  {{#> level-item}}\n    content with gutter\n  {{/ level-item}}\n{{/ level}}'},540:function(e,t,l){var a=l(1);e.exports=(a.default||a).template({1:function(e,t,a,n,r){var i;return(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,l,a,n){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i;return null!=(i=e.invokePartial(l(67),t,{name:"level",fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},795:function(e,t){e.exports="{{#> level}}\n  {{#> level-item}}\n    content\n  {{/ level-item}}\n  {{#> level-item}}\n    content\n  {{/ level-item}}\n  {{#> level-item}}\n    content\n  {{/ level-item}}\n{{/ level}}"},541:function(e,t,l){var a=l(1);e.exports=(a.default||a).template({1:function(e,t,a,n,r){var i;return(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")+(null!=(i=e.invokePartial(l(22),t,{name:"level-item",fn:e.program(2,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:"")},2:function(e,t,l,a,n){return"    content\n"},compiler:[7,">= 4.0.0"],main:function(e,t,a,n,r){var i;return null!=(i=e.invokePartial(l(67),t,{name:"level",fn:e.program(1,r,0),inverse:e.noop,data:r,helpers:a,partials:n,decorators:e.decorators}))?i:""},usePartial:!0,useData:!0})},796:function(e,t){e.exports="{{#> level}}\n  {{#> level-item}}\n    content\n  {{/ level-item}}\n  {{#> level-item}}\n    content\n  {{/ level-item}}\n{{/ level}}"},22:function(e,t,l){var a=l(1);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,l,a,n){var r;return'<div class="pf-l-level__item">\n'+(null!=(r=e.invokePartial(a["@partial-block"],t,{name:"@partial-block",data:n,indent:"  ",helpers:l,partials:a,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},67:function(e,t,l){var a=l(1);e.exports=(a.default||a).template({compiler:[7,">= 4.0.0"],main:function(e,t,l,a,n){var r,i;return'<div class="pf-l-level '+e.escapeExpression((i=null!=(i=l.modifierClass||(null!=t?t.modifierClass:t))?i:l.helperMissing,"function"==typeof i?i.call(null!=t?t:e.nullContext||{},{name:"modifierClass",hash:{},data:n}):i))+'">\n'+(null!=(r=e.invokePartial(a["@partial-block"],t,{name:"@partial-block",data:n,indent:"  ",helpers:l,partials:a,decorators:e.decorators}))?r:"")+"</div>\n"},usePartial:!0,useData:!0})},718:function(e,t){}});
//# sourceMappingURL=component---src-patternfly-layouts-level-examples-index-js-321567ead7e55efc937b.js.map