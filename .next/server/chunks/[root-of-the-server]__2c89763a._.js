module.exports=[61724,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-route-turbo.runtime.prod.js"))},47909,(e,t,r)=>{t.exports=e.r(61724)},17413,(e,t,r)=>{(()=>{"use strict";let r,a,o,n,i;var s,l,u,c,h,d,g,p,m,f,y,b,v,w,T,S,P={491:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ContextAPI=void 0;let a=r(223),o=r(172),n=r(930),i="context",s=new a.NoopContextManager;class l{static getInstance(){return this._instance||(this._instance=new l),this._instance}setGlobalContextManager(e){return(0,o.registerGlobal)(i,e,n.DiagAPI.instance())}active(){return this._getContextManager().active()}with(e,t,r,...a){return this._getContextManager().with(e,t,r,...a)}bind(e,t){return this._getContextManager().bind(e,t)}_getContextManager(){return(0,o.getGlobal)(i)||s}disable(){this._getContextManager().disable(),(0,o.unregisterGlobal)(i,n.DiagAPI.instance())}}t.ContextAPI=l},930:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DiagAPI=void 0;let a=r(56),o=r(912),n=r(957),i=r(172);class s{constructor(){function e(e){return function(...t){let r=(0,i.getGlobal)("diag");if(r)return r[e](...t)}}const t=this;t.setLogger=(e,r={logLevel:n.DiagLogLevel.INFO})=>{var a,s,l;if(e===t){let e=Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");return t.error(null!=(a=e.stack)?a:e.message),!1}"number"==typeof r&&(r={logLevel:r});let u=(0,i.getGlobal)("diag"),c=(0,o.createLogLevelDiagLogger)(null!=(s=r.logLevel)?s:n.DiagLogLevel.INFO,e);if(u&&!r.suppressOverrideMessage){let e=null!=(l=Error().stack)?l:"<failed to generate stacktrace>";u.warn(`Current logger will be overwritten from ${e}`),c.warn(`Current logger will overwrite one already registered from ${e}`)}return(0,i.registerGlobal)("diag",c,t,!0)},t.disable=()=>{(0,i.unregisterGlobal)("diag",t)},t.createComponentLogger=e=>new a.DiagComponentLogger(e),t.verbose=e("verbose"),t.debug=e("debug"),t.info=e("info"),t.warn=e("warn"),t.error=e("error")}static instance(){return this._instance||(this._instance=new s),this._instance}}t.DiagAPI=s},653:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MetricsAPI=void 0;let a=r(660),o=r(172),n=r(930),i="metrics";class s{static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalMeterProvider(e){return(0,o.registerGlobal)(i,e,n.DiagAPI.instance())}getMeterProvider(){return(0,o.getGlobal)(i)||a.NOOP_METER_PROVIDER}getMeter(e,t,r){return this.getMeterProvider().getMeter(e,t,r)}disable(){(0,o.unregisterGlobal)(i,n.DiagAPI.instance())}}t.MetricsAPI=s},181:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PropagationAPI=void 0;let a=r(172),o=r(874),n=r(194),i=r(277),s=r(369),l=r(930),u="propagation",c=new o.NoopTextMapPropagator;class h{constructor(){this.createBaggage=s.createBaggage,this.getBaggage=i.getBaggage,this.getActiveBaggage=i.getActiveBaggage,this.setBaggage=i.setBaggage,this.deleteBaggage=i.deleteBaggage}static getInstance(){return this._instance||(this._instance=new h),this._instance}setGlobalPropagator(e){return(0,a.registerGlobal)(u,e,l.DiagAPI.instance())}inject(e,t,r=n.defaultTextMapSetter){return this._getGlobalPropagator().inject(e,t,r)}extract(e,t,r=n.defaultTextMapGetter){return this._getGlobalPropagator().extract(e,t,r)}fields(){return this._getGlobalPropagator().fields()}disable(){(0,a.unregisterGlobal)(u,l.DiagAPI.instance())}_getGlobalPropagator(){return(0,a.getGlobal)(u)||c}}t.PropagationAPI=h},997:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TraceAPI=void 0;let a=r(172),o=r(846),n=r(139),i=r(607),s=r(930),l="trace";class u{constructor(){this._proxyTracerProvider=new o.ProxyTracerProvider,this.wrapSpanContext=n.wrapSpanContext,this.isSpanContextValid=n.isSpanContextValid,this.deleteSpan=i.deleteSpan,this.getSpan=i.getSpan,this.getActiveSpan=i.getActiveSpan,this.getSpanContext=i.getSpanContext,this.setSpan=i.setSpan,this.setSpanContext=i.setSpanContext}static getInstance(){return this._instance||(this._instance=new u),this._instance}setGlobalTracerProvider(e){let t=(0,a.registerGlobal)(l,this._proxyTracerProvider,s.DiagAPI.instance());return t&&this._proxyTracerProvider.setDelegate(e),t}getTracerProvider(){return(0,a.getGlobal)(l)||this._proxyTracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}disable(){(0,a.unregisterGlobal)(l,s.DiagAPI.instance()),this._proxyTracerProvider=new o.ProxyTracerProvider}}t.TraceAPI=u},277:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.deleteBaggage=t.setBaggage=t.getActiveBaggage=t.getBaggage=void 0;let a=r(491),o=(0,r(780).createContextKey)("OpenTelemetry Baggage Key");function n(e){return e.getValue(o)||void 0}t.getBaggage=n,t.getActiveBaggage=function(){return n(a.ContextAPI.getInstance().active())},t.setBaggage=function(e,t){return e.setValue(o,t)},t.deleteBaggage=function(e){return e.deleteValue(o)}},993:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaggageImpl=void 0;class r{constructor(e){this._entries=e?new Map(e):new Map}getEntry(e){let t=this._entries.get(e);if(t)return Object.assign({},t)}getAllEntries(){return Array.from(this._entries.entries()).map(([e,t])=>[e,t])}setEntry(e,t){let a=new r(this._entries);return a._entries.set(e,t),a}removeEntry(e){let t=new r(this._entries);return t._entries.delete(e),t}removeEntries(...e){let t=new r(this._entries);for(let r of e)t._entries.delete(r);return t}clear(){return new r}}t.BaggageImpl=r},830:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.baggageEntryMetadataSymbol=void 0,t.baggageEntryMetadataSymbol=Symbol("BaggageEntryMetadata")},369:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.baggageEntryMetadataFromString=t.createBaggage=void 0;let a=r(930),o=r(993),n=r(830),i=a.DiagAPI.instance();t.createBaggage=function(e={}){return new o.BaggageImpl(new Map(Object.entries(e)))},t.baggageEntryMetadataFromString=function(e){return"string"!=typeof e&&(i.error(`Cannot create baggage metadata from unknown type: ${typeof e}`),e=""),{__TYPE__:n.baggageEntryMetadataSymbol,toString:()=>e}}},67:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.context=void 0,t.context=r(491).ContextAPI.getInstance()},223:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NoopContextManager=void 0;let a=r(780);t.NoopContextManager=class{active(){return a.ROOT_CONTEXT}with(e,t,r,...a){return t.call(r,...a)}bind(e,t){return t}enable(){return this}disable(){return this}}},780:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ROOT_CONTEXT=t.createContextKey=void 0,t.createContextKey=function(e){return Symbol.for(e)};class r{constructor(e){const t=this;t._currentContext=e?new Map(e):new Map,t.getValue=e=>t._currentContext.get(e),t.setValue=(e,a)=>{let o=new r(t._currentContext);return o._currentContext.set(e,a),o},t.deleteValue=e=>{let a=new r(t._currentContext);return a._currentContext.delete(e),a}}}t.ROOT_CONTEXT=new r},506:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.diag=void 0,t.diag=r(930).DiagAPI.instance()},56:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DiagComponentLogger=void 0;let a=r(172);function o(e,t,r){let o=(0,a.getGlobal)("diag");if(o)return r.unshift(t),o[e](...r)}t.DiagComponentLogger=class{constructor(e){this._namespace=e.namespace||"DiagComponentLogger"}debug(...e){return o("debug",this._namespace,e)}error(...e){return o("error",this._namespace,e)}info(...e){return o("info",this._namespace,e)}warn(...e){return o("warn",this._namespace,e)}verbose(...e){return o("verbose",this._namespace,e)}}},972:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.DiagConsoleLogger=void 0;let r=[{n:"error",c:"error"},{n:"warn",c:"warn"},{n:"info",c:"info"},{n:"debug",c:"debug"},{n:"verbose",c:"trace"}];t.DiagConsoleLogger=class{constructor(){for(let e=0;e<r.length;e++)this[r[e].n]=function(e){return function(...t){if(console){let r=console[e];if("function"!=typeof r&&(r=console.log),"function"==typeof r)return r.apply(console,t)}}}(r[e].c)}}},912:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createLogLevelDiagLogger=void 0;let a=r(957);t.createLogLevelDiagLogger=function(e,t){function r(r,a){let o=t[r];return"function"==typeof o&&e>=a?o.bind(t):function(){}}return e<a.DiagLogLevel.NONE?e=a.DiagLogLevel.NONE:e>a.DiagLogLevel.ALL&&(e=a.DiagLogLevel.ALL),t=t||{},{error:r("error",a.DiagLogLevel.ERROR),warn:r("warn",a.DiagLogLevel.WARN),info:r("info",a.DiagLogLevel.INFO),debug:r("debug",a.DiagLogLevel.DEBUG),verbose:r("verbose",a.DiagLogLevel.VERBOSE)}}},957:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.DiagLogLevel=void 0,(r=t.DiagLogLevel||(t.DiagLogLevel={}))[r.NONE=0]="NONE",r[r.ERROR=30]="ERROR",r[r.WARN=50]="WARN",r[r.INFO=60]="INFO",r[r.DEBUG=70]="DEBUG",r[r.VERBOSE=80]="VERBOSE",r[r.ALL=9999]="ALL"},172:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.unregisterGlobal=t.getGlobal=t.registerGlobal=void 0;let a=r(200),o=r(521),n=r(130),i=o.VERSION.split(".")[0],s=Symbol.for(`opentelemetry.js.api.${i}`),l=a._globalThis;t.registerGlobal=function(e,t,r,a=!1){var n;let i=l[s]=null!=(n=l[s])?n:{version:o.VERSION};if(!a&&i[e]){let t=Error(`@opentelemetry/api: Attempted duplicate registration of API: ${e}`);return r.error(t.stack||t.message),!1}if(i.version!==o.VERSION){let t=Error(`@opentelemetry/api: Registration of version v${i.version} for ${e} does not match previously registered API v${o.VERSION}`);return r.error(t.stack||t.message),!1}return i[e]=t,r.debug(`@opentelemetry/api: Registered a global for ${e} v${o.VERSION}.`),!0},t.getGlobal=function(e){var t,r;let a=null==(t=l[s])?void 0:t.version;if(a&&(0,n.isCompatible)(a))return null==(r=l[s])?void 0:r[e]},t.unregisterGlobal=function(e,t){t.debug(`@opentelemetry/api: Unregistering a global for ${e} v${o.VERSION}.`);let r=l[s];r&&delete r[e]}},130:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isCompatible=t._makeCompatibilityCheck=void 0;let a=r(521),o=/^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;function n(e){let t=new Set([e]),r=new Set,a=e.match(o);if(!a)return()=>!1;let n={major:+a[1],minor:+a[2],patch:+a[3],prerelease:a[4]};if(null!=n.prerelease)return function(t){return t===e};function i(e){return r.add(e),!1}return function(e){if(t.has(e))return!0;if(r.has(e))return!1;let a=e.match(o);if(!a)return i(e);let s={major:+a[1],minor:+a[2],patch:+a[3],prerelease:a[4]};if(null!=s.prerelease||n.major!==s.major)return i(e);if(0===n.major)return n.minor===s.minor&&n.patch<=s.patch?(t.add(e),!0):i(e);return n.minor<=s.minor?(t.add(e),!0):i(e)}}t._makeCompatibilityCheck=n,t.isCompatible=n(a.VERSION)},886:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.metrics=void 0,t.metrics=r(653).MetricsAPI.getInstance()},901:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.ValueType=void 0,(r=t.ValueType||(t.ValueType={}))[r.INT=0]="INT",r[r.DOUBLE=1]="DOUBLE"},102:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createNoopMeter=t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=t.NOOP_OBSERVABLE_GAUGE_METRIC=t.NOOP_OBSERVABLE_COUNTER_METRIC=t.NOOP_UP_DOWN_COUNTER_METRIC=t.NOOP_HISTOGRAM_METRIC=t.NOOP_COUNTER_METRIC=t.NOOP_METER=t.NoopObservableUpDownCounterMetric=t.NoopObservableGaugeMetric=t.NoopObservableCounterMetric=t.NoopObservableMetric=t.NoopHistogramMetric=t.NoopUpDownCounterMetric=t.NoopCounterMetric=t.NoopMetric=t.NoopMeter=void 0;class r{createHistogram(e,r){return t.NOOP_HISTOGRAM_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createUpDownCounter(e,r){return t.NOOP_UP_DOWN_COUNTER_METRIC}createObservableGauge(e,r){return t.NOOP_OBSERVABLE_GAUGE_METRIC}createObservableCounter(e,r){return t.NOOP_OBSERVABLE_COUNTER_METRIC}createObservableUpDownCounter(e,r){return t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC}addBatchObservableCallback(e,t){}removeBatchObservableCallback(e){}}t.NoopMeter=r;class a{}t.NoopMetric=a;class o extends a{add(e,t){}}t.NoopCounterMetric=o;class n extends a{add(e,t){}}t.NoopUpDownCounterMetric=n;class i extends a{record(e,t){}}t.NoopHistogramMetric=i;class s{addCallback(e){}removeCallback(e){}}t.NoopObservableMetric=s;class l extends s{}t.NoopObservableCounterMetric=l;class u extends s{}t.NoopObservableGaugeMetric=u;class c extends s{}t.NoopObservableUpDownCounterMetric=c,t.NOOP_METER=new r,t.NOOP_COUNTER_METRIC=new o,t.NOOP_HISTOGRAM_METRIC=new i,t.NOOP_UP_DOWN_COUNTER_METRIC=new n,t.NOOP_OBSERVABLE_COUNTER_METRIC=new l,t.NOOP_OBSERVABLE_GAUGE_METRIC=new u,t.NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC=new c,t.createNoopMeter=function(){return t.NOOP_METER}},660:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NOOP_METER_PROVIDER=t.NoopMeterProvider=void 0;let a=r(102);class o{getMeter(e,t,r){return a.NOOP_METER}}t.NoopMeterProvider=o,t.NOOP_METER_PROVIDER=new o},200:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||a(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(46),t)},651:(t,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r._globalThis=void 0,r._globalThis="object"==typeof globalThis?globalThis:e.g},46:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r),Object.defineProperty(e,a,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||a(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(651),t)},939:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.propagation=void 0,t.propagation=r(181).PropagationAPI.getInstance()},874:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NoopTextMapPropagator=void 0,t.NoopTextMapPropagator=class{inject(e,t){}extract(e,t){return e}fields(){return[]}}},194:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.defaultTextMapSetter=t.defaultTextMapGetter=void 0,t.defaultTextMapGetter={get(e,t){if(null!=e)return e[t]},keys:e=>null==e?[]:Object.keys(e)},t.defaultTextMapSetter={set(e,t,r){null!=e&&(e[t]=r)}}},845:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.trace=void 0,t.trace=r(997).TraceAPI.getInstance()},403:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NonRecordingSpan=void 0;let a=r(476);t.NonRecordingSpan=class{constructor(e=a.INVALID_SPAN_CONTEXT){this._spanContext=e}spanContext(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}recordException(e,t){}}},614:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NoopTracer=void 0;let a=r(491),o=r(607),n=r(403),i=r(139),s=a.ContextAPI.getInstance();t.NoopTracer=class{startSpan(e,t,r=s.active()){var a;if(null==t?void 0:t.root)return new n.NonRecordingSpan;let l=r&&(0,o.getSpanContext)(r);return"object"==typeof(a=l)&&"string"==typeof a.spanId&&"string"==typeof a.traceId&&"number"==typeof a.traceFlags&&(0,i.isSpanContextValid)(l)?new n.NonRecordingSpan(l):new n.NonRecordingSpan}startActiveSpan(e,t,r,a){let n,i,l;if(arguments.length<2)return;2==arguments.length?l=t:3==arguments.length?(n=t,l=r):(n=t,i=r,l=a);let u=null!=i?i:s.active(),c=this.startSpan(e,n,u),h=(0,o.setSpan)(u,c);return s.with(h,l,void 0,c)}}},124:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.NoopTracerProvider=void 0;let a=r(614);t.NoopTracerProvider=class{getTracer(e,t,r){return new a.NoopTracer}}},125:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProxyTracer=void 0;let a=new(r(614)).NoopTracer;t.ProxyTracer=class{constructor(e,t,r,a){this._provider=e,this.name=t,this.version=r,this.options=a}startSpan(e,t,r){return this._getTracer().startSpan(e,t,r)}startActiveSpan(e,t,r,a){let o=this._getTracer();return Reflect.apply(o.startActiveSpan,o,arguments)}_getTracer(){if(this._delegate)return this._delegate;let e=this._provider.getDelegateTracer(this.name,this.version,this.options);return e?(this._delegate=e,this._delegate):a}}},846:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProxyTracerProvider=void 0;let a=r(125),o=new(r(124)).NoopTracerProvider;t.ProxyTracerProvider=class{getTracer(e,t,r){var o;return null!=(o=this.getDelegateTracer(e,t,r))?o:new a.ProxyTracer(this,e,t,r)}getDelegate(){var e;return null!=(e=this._delegate)?e:o}setDelegate(e){this._delegate=e}getDelegateTracer(e,t,r){var a;return null==(a=this._delegate)?void 0:a.getTracer(e,t,r)}}},996:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SamplingDecision=void 0,(r=t.SamplingDecision||(t.SamplingDecision={}))[r.NOT_RECORD=0]="NOT_RECORD",r[r.RECORD=1]="RECORD",r[r.RECORD_AND_SAMPLED=2]="RECORD_AND_SAMPLED"},607:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSpanContext=t.setSpanContext=t.deleteSpan=t.setSpan=t.getActiveSpan=t.getSpan=void 0;let a=r(780),o=r(403),n=r(491),i=(0,a.createContextKey)("OpenTelemetry Context Key SPAN");function s(e){return e.getValue(i)||void 0}function l(e,t){return e.setValue(i,t)}t.getSpan=s,t.getActiveSpan=function(){return s(n.ContextAPI.getInstance().active())},t.setSpan=l,t.deleteSpan=function(e){return e.deleteValue(i)},t.setSpanContext=function(e,t){return l(e,new o.NonRecordingSpan(t))},t.getSpanContext=function(e){var t;return null==(t=s(e))?void 0:t.spanContext()}},325:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.TraceStateImpl=void 0;let a=r(564);class o{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){let r=this._clone();return r._internalState.has(e)&&r._internalState.delete(e),r._internalState.set(e,t),r}unset(e){let t=this._clone();return t._internalState.delete(e),t}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){!(e.length>512)&&(this._internalState=e.split(",").reverse().reduce((e,t)=>{let r=t.trim(),o=r.indexOf("=");if(-1!==o){let n=r.slice(0,o),i=r.slice(o+1,t.length);(0,a.validateKey)(n)&&(0,a.validateValue)(i)&&e.set(n,i)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}_clone(){let e=new o;return e._internalState=new Map(this._internalState),e}}t.TraceStateImpl=o},564:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateValue=t.validateKey=void 0;let r="[_0-9a-z-*/]",a=`[a-z]${r}{0,255}`,o=`[a-z0-9]${r}{0,240}@[a-z]${r}{0,13}`,n=RegExp(`^(?:${a}|${o})$`),i=/^[ -~]{0,255}[!-~]$/,s=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return i.test(e)&&!s.test(e)}},98:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.createTraceState=void 0;let a=r(325);t.createTraceState=function(e){return new a.TraceStateImpl(e)}},476:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INVALID_SPAN_CONTEXT=t.INVALID_TRACEID=t.INVALID_SPANID=void 0;let a=r(475);t.INVALID_SPANID="0000000000000000",t.INVALID_TRACEID="00000000000000000000000000000000",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:a.TraceFlags.NONE}},357:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SpanKind=void 0,(r=t.SpanKind||(t.SpanKind={}))[r.INTERNAL=0]="INTERNAL",r[r.SERVER=1]="SERVER",r[r.CLIENT=2]="CLIENT",r[r.PRODUCER=3]="PRODUCER",r[r.CONSUMER=4]="CONSUMER"},139:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.wrapSpanContext=t.isSpanContextValid=t.isValidSpanId=t.isValidTraceId=void 0;let a=r(476),o=r(403),n=/^([0-9a-f]{32})$/i,i=/^[0-9a-f]{16}$/i;function s(e){return n.test(e)&&e!==a.INVALID_TRACEID}function l(e){return i.test(e)&&e!==a.INVALID_SPANID}t.isValidTraceId=s,t.isValidSpanId=l,t.isSpanContextValid=function(e){return s(e.traceId)&&l(e.spanId)},t.wrapSpanContext=function(e){return new o.NonRecordingSpan(e)}},847:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.SpanStatusCode=void 0,(r=t.SpanStatusCode||(t.SpanStatusCode={}))[r.UNSET=0]="UNSET",r[r.OK=1]="OK",r[r.ERROR=2]="ERROR"},475:(e,t)=>{var r;Object.defineProperty(t,"__esModule",{value:!0}),t.TraceFlags=void 0,(r=t.TraceFlags||(t.TraceFlags={}))[r.NONE=0]="NONE",r[r.SAMPLED=1]="SAMPLED"},521:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION=void 0,t.VERSION="1.6.0"}},k={};function _(e){var t=k[e];if(void 0!==t)return t.exports;var r=k[e]={exports:{}},a=!0;try{P[e].call(r.exports,r,r.exports,_),a=!1}finally{a&&delete k[e]}return r.exports}_.ab="/ROOT/node_modules/next/dist/compiled/@opentelemetry/api/";var E={};Object.defineProperty(E,"__esModule",{value:!0}),E.trace=E.propagation=E.metrics=E.diag=E.context=E.INVALID_SPAN_CONTEXT=E.INVALID_TRACEID=E.INVALID_SPANID=E.isValidSpanId=E.isValidTraceId=E.isSpanContextValid=E.createTraceState=E.TraceFlags=E.SpanStatusCode=E.SpanKind=E.SamplingDecision=E.ProxyTracerProvider=E.ProxyTracer=E.defaultTextMapSetter=E.defaultTextMapGetter=E.ValueType=E.createNoopMeter=E.DiagLogLevel=E.DiagConsoleLogger=E.ROOT_CONTEXT=E.createContextKey=E.baggageEntryMetadataFromString=void 0,s=_(369),Object.defineProperty(E,"baggageEntryMetadataFromString",{enumerable:!0,get:function(){return s.baggageEntryMetadataFromString}}),l=_(780),Object.defineProperty(E,"createContextKey",{enumerable:!0,get:function(){return l.createContextKey}}),Object.defineProperty(E,"ROOT_CONTEXT",{enumerable:!0,get:function(){return l.ROOT_CONTEXT}}),u=_(972),Object.defineProperty(E,"DiagConsoleLogger",{enumerable:!0,get:function(){return u.DiagConsoleLogger}}),c=_(957),Object.defineProperty(E,"DiagLogLevel",{enumerable:!0,get:function(){return c.DiagLogLevel}}),h=_(102),Object.defineProperty(E,"createNoopMeter",{enumerable:!0,get:function(){return h.createNoopMeter}}),d=_(901),Object.defineProperty(E,"ValueType",{enumerable:!0,get:function(){return d.ValueType}}),g=_(194),Object.defineProperty(E,"defaultTextMapGetter",{enumerable:!0,get:function(){return g.defaultTextMapGetter}}),Object.defineProperty(E,"defaultTextMapSetter",{enumerable:!0,get:function(){return g.defaultTextMapSetter}}),p=_(125),Object.defineProperty(E,"ProxyTracer",{enumerable:!0,get:function(){return p.ProxyTracer}}),m=_(846),Object.defineProperty(E,"ProxyTracerProvider",{enumerable:!0,get:function(){return m.ProxyTracerProvider}}),f=_(996),Object.defineProperty(E,"SamplingDecision",{enumerable:!0,get:function(){return f.SamplingDecision}}),y=_(357),Object.defineProperty(E,"SpanKind",{enumerable:!0,get:function(){return y.SpanKind}}),b=_(847),Object.defineProperty(E,"SpanStatusCode",{enumerable:!0,get:function(){return b.SpanStatusCode}}),v=_(475),Object.defineProperty(E,"TraceFlags",{enumerable:!0,get:function(){return v.TraceFlags}}),w=_(98),Object.defineProperty(E,"createTraceState",{enumerable:!0,get:function(){return w.createTraceState}}),T=_(139),Object.defineProperty(E,"isSpanContextValid",{enumerable:!0,get:function(){return T.isSpanContextValid}}),Object.defineProperty(E,"isValidTraceId",{enumerable:!0,get:function(){return T.isValidTraceId}}),Object.defineProperty(E,"isValidSpanId",{enumerable:!0,get:function(){return T.isValidSpanId}}),S=_(476),Object.defineProperty(E,"INVALID_SPANID",{enumerable:!0,get:function(){return S.INVALID_SPANID}}),Object.defineProperty(E,"INVALID_TRACEID",{enumerable:!0,get:function(){return S.INVALID_TRACEID}}),Object.defineProperty(E,"INVALID_SPAN_CONTEXT",{enumerable:!0,get:function(){return S.INVALID_SPAN_CONTEXT}}),r=_(67),Object.defineProperty(E,"context",{enumerable:!0,get:function(){return r.context}}),a=_(506),Object.defineProperty(E,"diag",{enumerable:!0,get:function(){return a.diag}}),o=_(886),Object.defineProperty(E,"metrics",{enumerable:!0,get:function(){return o.metrics}}),n=_(939),Object.defineProperty(E,"propagation",{enumerable:!0,get:function(){return n.propagation}}),i=_(845),Object.defineProperty(E,"trace",{enumerable:!0,get:function(){return i.trace}}),E.default={context:r.context,diag:a.diag,metrics:o.metrics,propagation:n.propagation,trace:i.trace},t.exports=E})()},42315,(e,t,r)=>{"use strict";t.exports=e.r(18622)},47540,(e,t,r)=>{"use strict";t.exports=e.r(42315).vendored["react-rsc"].React},19481,(e,t,r)=>{"use strict";var a=Object.defineProperty,o=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,i=Object.prototype.hasOwnProperty,s={},l={RequestCookies:()=>m,ResponseCookies:()=>f,parseCookie:()=>h,parseSetCookie:()=>d,stringifyCookie:()=>c};for(var u in l)a(s,u,{get:l[u],enumerable:!0});function c(e){var t;let r=["path"in e&&e.path&&`Path=${e.path}`,"expires"in e&&(e.expires||0===e.expires)&&`Expires=${("number"==typeof e.expires?new Date(e.expires):e.expires).toUTCString()}`,"maxAge"in e&&"number"==typeof e.maxAge&&`Max-Age=${e.maxAge}`,"domain"in e&&e.domain&&`Domain=${e.domain}`,"secure"in e&&e.secure&&"Secure","httpOnly"in e&&e.httpOnly&&"HttpOnly","sameSite"in e&&e.sameSite&&`SameSite=${e.sameSite}`,"partitioned"in e&&e.partitioned&&"Partitioned","priority"in e&&e.priority&&`Priority=${e.priority}`].filter(Boolean),a=`${e.name}=${encodeURIComponent(null!=(t=e.value)?t:"")}`;return 0===r.length?a:`${a}; ${r.join("; ")}`}function h(e){let t=new Map;for(let r of e.split(/; */)){if(!r)continue;let e=r.indexOf("=");if(-1===e){t.set(r,"true");continue}let[a,o]=[r.slice(0,e),r.slice(e+1)];try{t.set(a,decodeURIComponent(null!=o?o:"true"))}catch{}}return t}function d(e){if(!e)return;let[[t,r],...a]=h(e),{domain:o,expires:n,httponly:i,maxage:s,path:l,samesite:u,secure:c,partitioned:d,priority:m}=Object.fromEntries(a.map(([e,t])=>[e.toLowerCase().replace(/-/g,""),t]));{var f,y,b={name:t,value:decodeURIComponent(r),domain:o,...n&&{expires:new Date(n)},...i&&{httpOnly:!0},..."string"==typeof s&&{maxAge:Number(s)},path:l,...u&&{sameSite:g.includes(f=(f=u).toLowerCase())?f:void 0},...c&&{secure:!0},...m&&{priority:p.includes(y=(y=m).toLowerCase())?y:void 0},...d&&{partitioned:!0}};let e={};for(let t in b)b[t]&&(e[t]=b[t]);return e}}t.exports=((e,t,r,s)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of n(t))i.call(e,l)||l===r||a(e,l,{get:()=>t[l],enumerable:!(s=o(t,l))||s.enumerable});return e})(a({},"__esModule",{value:!0}),s);var g=["strict","lax","none"],p=["low","medium","high"],m=class{constructor(e){this._parsed=new Map,this._headers=e;const t=e.get("cookie");if(t)for(const[e,r]of h(t))this._parsed.set(e,{name:e,value:r})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed);if(!e.length)return r.map(([e,t])=>t);let a="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(([e])=>e===a).map(([e,t])=>t)}has(e){return this._parsed.has(e)}set(...e){let[t,r]=1===e.length?[e[0].name,e[0].value]:e,a=this._parsed;return a.set(t,{name:t,value:r}),this._headers.set("cookie",Array.from(a).map(([e,t])=>c(t)).join("; ")),this}delete(e){let t=this._parsed,r=Array.isArray(e)?e.map(e=>t.delete(e)):t.delete(e);return this._headers.set("cookie",Array.from(t).map(([e,t])=>c(t)).join("; ")),r}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(e=>`${e.name}=${encodeURIComponent(e.value)}`).join("; ")}},f=class{constructor(e){var t,r,a;this._parsed=new Map,this._headers=e;const o=null!=(a=null!=(r=null==(t=e.getSetCookie)?void 0:t.call(e))?r:e.get("set-cookie"))?a:[];for(const e of Array.isArray(o)?o:function(e){if(!e)return[];var t,r,a,o,n,i=[],s=0;function l(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,n=!1;l();)if(","===(r=e.charAt(s))){for(a=s,s+=1,l(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(n=!0,s=o,i.push(e.substring(t,a)),t=s):s=a+1}else s+=1;(!n||s>=e.length)&&i.push(e.substring(t,e.length))}return i}(o)){const t=d(e);t&&this._parsed.set(t.name,t)}}get(...e){let t="string"==typeof e[0]?e[0]:e[0].name;return this._parsed.get(t)}getAll(...e){var t;let r=Array.from(this._parsed.values());if(!e.length)return r;let a="string"==typeof e[0]?e[0]:null==(t=e[0])?void 0:t.name;return r.filter(e=>e.name===a)}has(e){return this._parsed.has(e)}set(...e){let[t,r,a]=1===e.length?[e[0].name,e[0].value,e[0]]:e,o=this._parsed;return o.set(t,function(e={name:"",value:""}){return"number"==typeof e.expires&&(e.expires=new Date(e.expires)),e.maxAge&&(e.expires=new Date(Date.now()+1e3*e.maxAge)),(null===e.path||void 0===e.path)&&(e.path="/"),e}({name:t,value:r,...a})),function(e,t){for(let[,r]of(t.delete("set-cookie"),e)){let e=c(r);t.append("set-cookie",e)}}(o,this._headers),this}delete(...e){let[t,r]="string"==typeof e[0]?[e[0]]:[e[0].name,e[0]];return this.set({...r,name:t,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(c).join("; ")}}},93118,(e,t,r)=>{(()=>{"use strict";"undefined"!=typeof __nccwpck_require__&&(__nccwpck_require__.ab="/ROOT/node_modules/next/dist/compiled/cookie/");var e,r,a,o,n={};n.parse=function(t,r){if("string"!=typeof t)throw TypeError("argument str must be a string");for(var o={},n=t.split(a),i=(r||{}).decode||e,s=0;s<n.length;s++){var l=n[s],u=l.indexOf("=");if(!(u<0)){var c=l.substr(0,u).trim(),h=l.substr(++u,l.length).trim();'"'==h[0]&&(h=h.slice(1,-1)),void 0==o[c]&&(o[c]=function(e,t){try{return t(e)}catch(t){return e}}(h,i))}}return o},n.serialize=function(e,t,a){var n=a||{},i=n.encode||r;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var s=i(t);if(s&&!o.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=n.maxAge){var u=n.maxAge-0;if(isNaN(u)||!isFinite(u))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(u)}if(n.domain){if(!o.test(n.domain))throw TypeError("option domain is invalid");l+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw TypeError("option path is invalid");l+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(l+="; HttpOnly"),n.secure&&(l+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l},e=decodeURIComponent,r=encodeURIComponent,a=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,t.exports=n})()},47114,(e,t,r)=>{"use strict";function a(e,t,r){if(e){for(let a of(r&&(r=r.toLowerCase()),e))if(t===a.domain?.split(":",1)[0].toLowerCase()||r===a.defaultLocale.toLowerCase()||a.locales?.some(e=>e.toLowerCase()===r))return a}}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"detectDomainLocale",{enumerable:!0,get:function(){return a}})},49084,(e,t,r)=>{"use strict";function a(e){return e.replace(/\/$/,"")||"/"}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"removeTrailingSlash",{enumerable:!0,get:function(){return a}})},97741,(e,t,r)=>{"use strict";function a(e){let t=e.indexOf("#"),r=e.indexOf("?"),a=r>-1&&(t<0||r<t);return a||t>-1?{pathname:e.substring(0,a?r:t),query:a?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"parsePath",{enumerable:!0,get:function(){return a}})},34292,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"addPathPrefix",{enumerable:!0,get:function(){return o}});let a=e.r(97741);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:n}=(0,a.parsePath)(e);return`${t}${r}${o}${n}`}},87622,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"addPathSuffix",{enumerable:!0,get:function(){return o}});let a=e.r(97741);function o(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:o,hash:n}=(0,a.parsePath)(e);return`${r}${t}${o}${n}`}},98389,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"pathHasPrefix",{enumerable:!0,get:function(){return o}});let a=e.r(97741);function o(e,t){if("string"!=typeof e)return!1;let{pathname:r}=(0,a.parsePath)(e);return r===t||r.startsWith(t+"/")}},95414,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"addLocale",{enumerable:!0,get:function(){return n}});let a=e.r(34292),o=e.r(98389);function n(e,t,r,n){if(!t||t===r)return e;let i=e.toLowerCase();return!n&&((0,o.pathHasPrefix)(i,"/api")||(0,o.pathHasPrefix)(i,`/${t.toLowerCase()}`))?e:(0,a.addPathPrefix)(e,`/${t}`)}},25627,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"formatNextPathnameInfo",{enumerable:!0,get:function(){return s}});let a=e.r(49084),o=e.r(34292),n=e.r(87622),i=e.r(95414);function s(e){let t=(0,i.addLocale)(e.pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix);return(e.buildId||!e.trailingSlash)&&(t=(0,a.removeTrailingSlash)(t)),e.buildId&&(t=(0,n.addPathSuffix)((0,o.addPathPrefix)(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=(0,o.addPathPrefix)(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:(0,n.addPathSuffix)(t,"/"):(0,a.removeTrailingSlash)(t)}},64512,(e,t,r)=>{"use strict";function a(e,t){let r;if(t?.host&&!Array.isArray(t.host))r=t.host.toString().split(":",1)[0];else{if(!e.hostname)return;r=e.hostname}return r.toLowerCase()}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getHostname",{enumerable:!0,get:function(){return a}})},13545,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"normalizeLocalePath",{enumerable:!0,get:function(){return o}});let a=new WeakMap;function o(e,t){let r;if(!t)return{pathname:e};let o=a.get(t);o||(o=t.map(e=>e.toLowerCase()),a.set(t,o));let n=e.split("/",2);if(!n[1])return{pathname:e};let i=n[1].toLowerCase(),s=o.indexOf(i);return s<0?{pathname:e}:(r=t[s],{pathname:e=e.slice(r.length+1)||"/",detectedLocale:r})}},50955,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"removePathPrefix",{enumerable:!0,get:function(){return o}});let a=e.r(98389);function o(e,t){if(!(0,a.pathHasPrefix)(e,t))return e;let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}},60622,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getNextPathnameInfo",{enumerable:!0,get:function(){return i}});let a=e.r(13545),o=e.r(50955),n=e.r(98389);function i(e,t){let{basePath:r,i18n:i,trailingSlash:s}=t.nextConfig??{},l={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):s};r&&(0,n.pathHasPrefix)(l.pathname,r)&&(l.pathname=(0,o.removePathPrefix)(l.pathname,r),l.basePath=r);let u=l.pathname;if(l.pathname.startsWith("/_next/data/")&&l.pathname.endsWith(".json")){let e=l.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/");l.buildId=e[0],u="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",!0===t.parseData&&(l.pathname=u)}if(i){let e=t.i18nProvider?t.i18nProvider.analyze(l.pathname):(0,a.normalizeLocalePath)(l.pathname,i.locales);l.locale=e.detectedLocale,l.pathname=e.pathname??l.pathname,!e.detectedLocale&&l.buildId&&(e=t.i18nProvider?t.i18nProvider.analyze(u):(0,a.normalizeLocalePath)(u,i.locales)).detectedLocale&&(l.locale=e.detectedLocale)}return l}},99536,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"NextURL",{enumerable:!0,get:function(){return c}});let a=e.r(47114),o=e.r(25627),n=e.r(64512),i=e.r(60622),s=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function l(e,t){return new URL(String(e).replace(s,"localhost"),t&&String(t).replace(s,"localhost"))}let u=Symbol("NextURLInternal");class c{constructor(e,t,r){let a,o;"object"==typeof t&&"pathname"in t||"string"==typeof t?(a=t,o=r||{}):o=r||t||{},this[u]={url:l(e,a??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,t,r,o,s;let l=(0,i.getNextPathnameInfo)(this[u].url.pathname,{nextConfig:this[u].options.nextConfig,parseData:!0,i18nProvider:this[u].options.i18nProvider}),c=(0,n.getHostname)(this[u].url,this[u].options.headers);this[u].domainLocale=this[u].options.i18nProvider?this[u].options.i18nProvider.detectDomainLocale(c):(0,a.detectDomainLocale)(null==(t=this[u].options.nextConfig)||null==(e=t.i18n)?void 0:e.domains,c);let h=(null==(r=this[u].domainLocale)?void 0:r.defaultLocale)||(null==(s=this[u].options.nextConfig)||null==(o=s.i18n)?void 0:o.defaultLocale);this[u].url.pathname=l.pathname,this[u].defaultLocale=h,this[u].basePath=l.basePath??"",this[u].buildId=l.buildId,this[u].locale=l.locale??h,this[u].trailingSlash=l.trailingSlash}formatPathname(){return(0,o.formatNextPathnameInfo)({basePath:this[u].basePath,buildId:this[u].buildId,defaultLocale:this[u].options.forceLocale?void 0:this[u].defaultLocale,locale:this[u].locale,pathname:this[u].url.pathname,trailingSlash:this[u].trailingSlash})}formatSearch(){return this[u].url.search}get buildId(){return this[u].buildId}set buildId(e){this[u].buildId=e}get locale(){return this[u].locale??""}set locale(e){var t,r;if(!this[u].locale||!(null==(r=this[u].options.nextConfig)||null==(t=r.i18n)?void 0:t.locales.includes(e)))throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e}"`),"__NEXT_ERROR_CODE",{value:"E597",enumerable:!1,configurable:!0});this[u].locale=e}get defaultLocale(){return this[u].defaultLocale}get domainLocale(){return this[u].domainLocale}get searchParams(){return this[u].url.searchParams}get host(){return this[u].url.host}set host(e){this[u].url.host=e}get hostname(){return this[u].url.hostname}set hostname(e){this[u].url.hostname=e}get port(){return this[u].url.port}set port(e){this[u].url.port=e}get protocol(){return this[u].url.protocol}set protocol(e){this[u].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[u].url=l(e),this.analyze()}get origin(){return this[u].url.origin}get pathname(){return this[u].url.pathname}set pathname(e){this[u].url.pathname=e}get hash(){return this[u].url.hash}set hash(e){this[u].url.hash=e}get search(){return this[u].url.search}set search(e){this[u].url.search=e}get password(){return this[u].url.password}set password(e){this[u].url.password=e}get username(){return this[u].url.username}set username(e){this[u].url.username=e}get basePath(){return this[u].basePath}set basePath(e){this[u].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new c(String(this),this[u].options)}}},91401,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={ACTION_SUFFIX:function(){return f},APP_DIR_ALIAS:function(){return B},CACHE_ONE_YEAR:function(){return x},DOT_NEXT_ALIAS:function(){return L},ESLINT_DEFAULT_DIRS:function(){return eo},GSP_NO_RETURNED_VALUE:function(){return Q},GSSP_COMPONENT_MEMBER_ERROR:function(){return et},GSSP_NO_RETURNED_VALUE:function(){return Z},HTML_CONTENT_TYPE_HEADER:function(){return i},INFINITE_CACHE:function(){return I},INSTRUMENTATION_HOOK_FILENAME:function(){return M},JSON_CONTENT_TYPE_HEADER:function(){return s},MATCHED_PATH_HEADER:function(){return c},MIDDLEWARE_FILENAME:function(){return A},MIDDLEWARE_LOCATION_REGEXP:function(){return C},NEXT_BODY_SUFFIX:function(){return v},NEXT_CACHE_IMPLICIT_TAG_ID:function(){return R},NEXT_CACHE_REVALIDATED_TAGS_HEADER:function(){return T},NEXT_CACHE_REVALIDATE_TAG_TOKEN_HEADER:function(){return S},NEXT_CACHE_SOFT_TAG_MAX_LENGTH:function(){return E},NEXT_CACHE_TAGS_HEADER:function(){return w},NEXT_CACHE_TAG_MAX_ITEMS:function(){return k},NEXT_CACHE_TAG_MAX_LENGTH:function(){return _},NEXT_DATA_SUFFIX:function(){return y},NEXT_INTERCEPTION_MARKER_PREFIX:function(){return u},NEXT_META_SUFFIX:function(){return b},NEXT_QUERY_PARAM_PREFIX:function(){return l},NEXT_RESUME_HEADER:function(){return P},NON_STANDARD_NODE_ENV:function(){return er},PAGES_DIR_ALIAS:function(){return D},PRERENDER_REVALIDATE_HEADER:function(){return h},PRERENDER_REVALIDATE_ONLY_GENERATED_HEADER:function(){return d},PROXY_FILENAME:function(){return O},PROXY_LOCATION_REGEXP:function(){return N},PUBLIC_DIR_MIDDLEWARE_CONFLICT:function(){return V},ROOT_DIR_ALIAS:function(){return j},RSC_ACTION_CLIENT_WRAPPER_ALIAS:function(){return $},RSC_ACTION_ENCRYPTION_ALIAS:function(){return Y},RSC_ACTION_PROXY_ALIAS:function(){return W},RSC_ACTION_VALIDATE_ALIAS:function(){return F},RSC_CACHE_WRAPPER_ALIAS:function(){return U},RSC_DYNAMIC_IMPORT_WRAPPER_ALIAS:function(){return G},RSC_MOD_REF_PROXY_ALIAS:function(){return H},RSC_SEGMENTS_DIR_SUFFIX:function(){return g},RSC_SEGMENT_SUFFIX:function(){return p},RSC_SUFFIX:function(){return m},SERVER_PROPS_EXPORT_ERROR:function(){return J},SERVER_PROPS_GET_INIT_PROPS_CONFLICT:function(){return z},SERVER_PROPS_SSG_CONFLICT:function(){return X},SERVER_RUNTIME:function(){return en},SSG_FALLBACK_EXPORT_ERROR:function(){return ea},SSG_GET_INITIAL_PROPS_CONFLICT:function(){return q},STATIC_STATUS_PAGE_GET_INITIAL_PROPS_ERROR:function(){return K},TEXT_PLAIN_CONTENT_TYPE_HEADER:function(){return n},UNSTABLE_REVALIDATE_RENAME_ERROR:function(){return ee},WEBPACK_LAYERS:function(){return el},WEBPACK_RESOURCE_QUERIES:function(){return eu},WEB_SOCKET_MAX_RECONNECTIONS:function(){return ei}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n="text/plain",i="text/html; charset=utf-8",s="application/json; charset=utf-8",l="nxtP",u="nxtI",c="x-matched-path",h="x-prerender-revalidate",d="x-prerender-revalidate-if-generated",g=".segments",p=".segment.rsc",m=".rsc",f=".action",y=".json",b=".meta",v=".body",w="x-next-cache-tags",T="x-next-revalidated-tags",S="x-next-revalidate-tag-token",P="next-resume",k=128,_=256,E=1024,R="_N_T_",x=31536e3,I=0xfffffffe,A="middleware",C=`(?:src/)?${A}`,O="proxy",N=`(?:src/)?${O}`,M="instrumentation",D="private-next-pages",L="private-dot-next",j="private-next-root-dir",B="private-next-app-dir",H="private-next-rsc-mod-ref-proxy",F="private-next-rsc-action-validate",W="private-next-rsc-server-reference",U="private-next-rsc-cache-wrapper",G="private-next-rsc-track-dynamic-import",Y="private-next-rsc-action-encryption",$="private-next-rsc-action-client-wrapper",V="You can not have a '_next' folder inside of your public folder. This conflicts with the internal '/_next' route. https://nextjs.org/docs/messages/public-next-folder-conflict",q="You can not use getInitialProps with getStaticProps. To use SSG, please remove your getInitialProps",z="You can not use getInitialProps with getServerSideProps. Please remove getInitialProps.",X="You can not use getStaticProps or getStaticPaths with getServerSideProps. To use SSG, please remove getServerSideProps",K="can not have getInitialProps/getServerSideProps, https://nextjs.org/docs/messages/404-get-initial-props",J="pages with `getServerSideProps` can not be exported. See more info here: https://nextjs.org/docs/messages/gssp-export",Q="Your `getStaticProps` function did not return an object. Did you forget to add a `return`?",Z="Your `getServerSideProps` function did not return an object. Did you forget to add a `return`?",ee="The `unstable_revalidate` property is available for general use.\nPlease use `revalidate` instead.",et="can not be attached to a page's component and must be exported from the page. See more info here: https://nextjs.org/docs/messages/gssp-component-member",er='You are using a non-standard "NODE_ENV" value in your environment. This creates inconsistencies in the project and is strongly advised against. Read more: https://nextjs.org/docs/messages/non-standard-node-env',ea="Pages with `fallback` enabled in `getStaticPaths` can not be exported. See more info here: https://nextjs.org/docs/messages/ssg-fallback-true-export",eo=["app","pages","components","lib","src"],en={edge:"edge",experimentalEdge:"experimental-edge",nodejs:"nodejs"},ei=12,es={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",apiNode:"api-node",apiEdge:"api-edge",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",pagesDirBrowser:"pages-dir-browser",pagesDirEdge:"pages-dir-edge",pagesDirNode:"pages-dir-node"},el={...es,GROUP:{builtinReact:[es.reactServerComponents,es.actionBrowser],serverOnly:[es.reactServerComponents,es.actionBrowser,es.instrument,es.middleware],neutralTarget:[es.apiNode,es.apiEdge],clientOnly:[es.serverSideRendering,es.appPagesBrowser],bundled:[es.reactServerComponents,es.actionBrowser,es.serverSideRendering,es.appPagesBrowser,es.shared,es.instrument,es.middleware],appPages:[es.reactServerComponents,es.serverSideRendering,es.appPagesBrowser,es.actionBrowser]}},eu={edgeSSREntry:"__next_edge_ssr_entry__",metadata:"__next_metadata__",metadataRoute:"__next_metadata_route__",metadataImageMeta:"__next_metadata_image_meta__"}},80333,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={fromNodeOutgoingHttpHeaders:function(){return i},normalizeNextQueryParam:function(){return c},splitCookiesString:function(){return s},toNodeOutgoingHttpHeaders:function(){return l},validateURL:function(){return u}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(91401);function i(e){let t=new Headers;for(let[r,a]of Object.entries(e))for(let e of Array.isArray(a)?a:[a])void 0!==e&&("number"==typeof e&&(e=e.toString()),t.append(r,e));return t}function s(e){var t,r,a,o,n,i=[],s=0;function l(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,n=!1;l();)if(","===(r=e.charAt(s))){for(a=s,s+=1,l(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(n=!0,s=o,i.push(e.substring(t,a)),t=s):s=a+1}else s+=1;(!n||s>=e.length)&&i.push(e.substring(t,e.length))}return i}function l(e){let t={},r=[];if(e)for(let[a,o]of e.entries())"set-cookie"===a.toLowerCase()?(r.push(...s(o)),t[a]=1===r.length?r[0]:r):t[a]=o;return t}function u(e){try{return String(new URL(String(e)))}catch(t){throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t}),"__NEXT_ERROR_CODE",{value:"E61",enumerable:!1,configurable:!0})}}function c(e){for(let t of[n.NEXT_QUERY_PARAM_PREFIX,n.NEXT_INTERCEPTION_MARKER_PREFIX])if(e!==t&&e.startsWith(t))return e.substring(t.length);return null}},47389,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={PageSignatureError:function(){return n},RemovedPageError:function(){return i},RemovedUAError:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});class n extends Error{constructor({page:e}){super(`The middleware "${e}" accepts an async API directly with the form:
  
  export function middleware(request, event) {
    return NextResponse.redirect('/new-location')
  }
  
  Read more: https://nextjs.org/docs/messages/middleware-new-signature
  `)}}class i extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class s extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}},472,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={RequestCookies:function(){return n.RequestCookies},ResponseCookies:function(){return n.ResponseCookies},stringifyCookie:function(){return n.stringifyCookie}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(19481)},29666,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={INTERNALS:function(){return u},NextRequest:function(){return c}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(99536),i=e.r(80333),s=e.r(47389),l=e.r(472),u=Symbol("internal request");class c extends Request{constructor(e,t={}){const r="string"!=typeof e&&"url"in e?e.url:String(e);(0,i.validateURL)(r),t.body&&"half"!==t.duplex&&(t.duplex="half"),e instanceof Request?super(e,t):super(r,t);const a=new n.NextURL(r,{headers:(0,i.toNodeOutgoingHttpHeaders)(this.headers),nextConfig:t.nextConfig});this[u]={cookies:new l.RequestCookies(this.headers),nextUrl:a,url:a.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[u].cookies}get nextUrl(){return this[u].nextUrl}get page(){throw new s.RemovedPageError}get ua(){throw new s.RemovedUAError}get url(){return this[u].url}}},30759,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ReflectAdapter",{enumerable:!0,get:function(){return a}});class a{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}},46633,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"NextResponse",{enumerable:!0,get:function(){return h}});let a=e.r(472),o=e.r(99536),n=e.r(80333),i=e.r(30759),s=e.r(472),l=Symbol("internal response"),u=new Set([301,302,303,307,308]);function c(e,t){var r;if(null==e||null==(r=e.request)?void 0:r.headers){if(!(e.request.headers instanceof Headers))throw Object.defineProperty(Error("request.headers must be an instance of Headers"),"__NEXT_ERROR_CODE",{value:"E119",enumerable:!1,configurable:!0});let r=[];for(let[a,o]of e.request.headers)t.set("x-middleware-request-"+a,o),r.push(a);t.set("x-middleware-override-headers",r.join(","))}}class h extends Response{constructor(e,t={}){super(e,t);const r=this.headers,u=new Proxy(new s.ResponseCookies(r),{get(e,o,n){switch(o){case"delete":case"set":return(...n)=>{let i=Reflect.apply(e[o],e,n),l=new Headers(r);return i instanceof s.ResponseCookies&&r.set("x-middleware-set-cookie",i.getAll().map(e=>(0,a.stringifyCookie)(e)).join(",")),c(t,l),i};default:return i.ReflectAdapter.get(e,o,n)}}});this[l]={cookies:u,url:t.url?new o.NextURL(t.url,{headers:(0,n.toNodeOutgoingHttpHeaders)(r),nextConfig:t.nextConfig}):void 0}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,url:this.url,body:this.body,bodyUsed:this.bodyUsed,headers:Object.fromEntries(this.headers),ok:this.ok,redirected:this.redirected,status:this.status,statusText:this.statusText,type:this.type}}get cookies(){return this[l].cookies}static json(e,t){let r=Response.json(e,t);return new h(r.body,r)}static redirect(e,t){let r="number"==typeof t?t:(null==t?void 0:t.status)??307;if(!u.has(r))throw Object.defineProperty(RangeError('Failed to execute "redirect" on "response": Invalid status code'),"__NEXT_ERROR_CODE",{value:"E529",enumerable:!1,configurable:!0});let a="object"==typeof t?t:{},o=new Headers(null==a?void 0:a.headers);return o.set("Location",(0,n.validateURL)(e)),new h(null,{...a,headers:o,status:r})}static rewrite(e,t){let r=new Headers(null==t?void 0:t.headers);return r.set("x-middleware-rewrite",(0,n.validateURL)(e)),c(t,r),new h(null,{...t,headers:r})}static next(e){let t=new Headers(null==e?void 0:e.headers);return t.set("x-middleware-next","1"),c(e,t),new h(null,{...e,headers:t})}}},87963,(e,t,r)=>{"use strict";function a(){throw Object.defineProperty(Error('ImageResponse moved from "next/server" to "next/og" since Next.js 14, please import from "next/og" instead'),"__NEXT_ERROR_CODE",{value:"E183",enumerable:!1,configurable:!0})}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageResponse",{enumerable:!0,get:function(){return a}})},99299,(e,t,r)=>{var a={226:function(t,r){!function(a,o){"use strict";var n="function",i="undefined",s="object",l="string",u="major",c="model",h="name",d="type",g="vendor",p="version",m="architecture",f="console",y="mobile",b="tablet",v="smarttv",w="wearable",T="embedded",S="Amazon",P="Apple",k="ASUS",_="BlackBerry",E="Browser",R="Chrome",x="Firefox",I="Google",A="Huawei",C="Microsoft",O="Motorola",N="Opera",M="Samsung",D="Sharp",L="Sony",j="Xiaomi",B="Zebra",H="Facebook",F="Chromium OS",W="Mac OS",U=function(e,t){var r={};for(var a in e)t[a]&&t[a].length%2==0?r[a]=t[a].concat(e[a]):r[a]=e[a];return r},G=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},Y=function(e,t){return typeof e===l&&-1!==$(t).indexOf($(e))},$=function(e){return e.toLowerCase()},V=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===i?e:e.substring(0,350)},q=function(e,t){for(var r,a,o,i,l,u,c=0;c<t.length&&!l;){var h=t[c],d=t[c+1];for(r=a=0;r<h.length&&!l&&h[r];)if(l=h[r++].exec(e))for(o=0;o<d.length;o++)u=l[++a],typeof(i=d[o])===s&&i.length>0?2===i.length?typeof i[1]==n?this[i[0]]=i[1].call(this,u):this[i[0]]=i[1]:3===i.length?typeof i[1]!==n||i[1].exec&&i[1].test?this[i[0]]=u?u.replace(i[1],i[2]):void 0:this[i[0]]=u?i[1].call(this,u,i[2]):void 0:4===i.length&&(this[i[0]]=u?i[3].call(this,u.replace(i[1],i[2])):void 0):this[i]=u||void 0;c+=2}},z=function(e,t){for(var r in t)if(typeof t[r]===s&&t[r].length>0){for(var a=0;a<t[r].length;a++)if(Y(t[r][a],e))return"?"===r?void 0:r}else if(Y(t[r],e))return"?"===r?void 0:r;return e},X={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2",8.1:"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},K={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[p,[h,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[p,[h,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[h,p],[/opios[\/ ]+([\w\.]+)/i],[p,[h,N+" Mini"]],[/\bopr\/([\w\.]+)/i],[p,[h,N]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[h,p],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[p,[h,"UC"+E]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[p,[h,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[p,[h,"WeChat"]],[/konqueror\/([\w\.]+)/i],[p,[h,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[p,[h,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[p,[h,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[h,/(.+)/,"$1 Secure "+E],p],[/\bfocus\/([\w\.]+)/i],[p,[h,x+" Focus"]],[/\bopt\/([\w\.]+)/i],[p,[h,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[p,[h,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[p,[h,"Dolphin"]],[/coast\/([\w\.]+)/i],[p,[h,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[p,[h,"MIUI "+E]],[/fxios\/([-\w\.]+)/i],[p,[h,x]],[/\bqihu|(qi?ho?o?|360)browser/i],[[h,"360 "+E]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[h,/(.+)/,"$1 "+E],p],[/(comodo_dragon)\/([\w\.]+)/i],[[h,/_/g," "],p],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[h,p],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[h],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[h,H],p],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[h,p],[/\bgsa\/([\w\.]+) .*safari\//i],[p,[h,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[p,[h,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[p,[h,R+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[h,R+" WebView"],p],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[p,[h,"Android "+E]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[h,p],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[p,[h,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[p,h],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[h,[p,z,{"1.0":"/8",1.2:"/1",1.3:"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[h,p],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[h,"Netscape"],p],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[p,[h,x+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[h,p],[/(cobalt)\/([\w\.]+)/i],[h,[p,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,$]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",$]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,$]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[c,[g,M],[d,b]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[c,[g,M],[d,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[c,[g,P],[d,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[c,[g,P],[d,b]],[/(macintosh);/i],[c,[g,P]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[c,[g,D],[d,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[c,[g,A],[d,b]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[c,[g,A],[d,y]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[c,/_/g," "],[g,j],[d,y]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[c,/_/g," "],[g,j],[d,b]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[c,[g,"OPPO"],[d,y]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[c,[g,"Vivo"],[d,y]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[c,[g,"Realme"],[d,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[c,[g,O],[d,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[c,[g,O],[d,b]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[c,[g,"LG"],[d,b]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[c,[g,"LG"],[d,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[c,[g,"Lenovo"],[d,b]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[c,/_/g," "],[g,"Nokia"],[d,y]],[/(pixel c)\b/i],[c,[g,I],[d,b]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[c,[g,I],[d,y]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[c,[g,L],[d,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[c,"Xperia Tablet"],[g,L],[d,b]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[c,[g,"OnePlus"],[d,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[c,[g,S],[d,b]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[c,/(.+)/g,"Fire Phone $1"],[g,S],[d,y]],[/(playbook);[-\w\),; ]+(rim)/i],[c,g,[d,b]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[c,[g,_],[d,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[c,[g,k],[d,b]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[c,[g,k],[d,y]],[/(nexus 9)/i],[c,[g,"HTC"],[d,b]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[c,/_/g," "],[d,y]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[c,[g,"Acer"],[d,b]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[c,[g,"Meizu"],[d,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,c,[d,y]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,c,[d,b]],[/(surface duo)/i],[c,[g,C],[d,b]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[c,[g,"Fairphone"],[d,y]],[/(u304aa)/i],[c,[g,"AT&T"],[d,y]],[/\bsie-(\w*)/i],[c,[g,"Siemens"],[d,y]],[/\b(rct\w+) b/i],[c,[g,"RCA"],[d,b]],[/\b(venue[\d ]{2,7}) b/i],[c,[g,"Dell"],[d,b]],[/\b(q(?:mv|ta)\w+) b/i],[c,[g,"Verizon"],[d,b]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[c,[g,"Barnes & Noble"],[d,b]],[/\b(tm\d{3}\w+) b/i],[c,[g,"NuVision"],[d,b]],[/\b(k88) b/i],[c,[g,"ZTE"],[d,b]],[/\b(nx\d{3}j) b/i],[c,[g,"ZTE"],[d,y]],[/\b(gen\d{3}) b.+49h/i],[c,[g,"Swiss"],[d,y]],[/\b(zur\d{3}) b/i],[c,[g,"Swiss"],[d,b]],[/\b((zeki)?tb.*\b) b/i],[c,[g,"Zeki"],[d,b]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],c,[d,b]],[/\b(ns-?\w{0,9}) b/i],[c,[g,"Insignia"],[d,b]],[/\b((nxa|next)-?\w{0,9}) b/i],[c,[g,"NextBook"],[d,b]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],c,[d,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],c,[d,y]],[/\b(ph-1) /i],[c,[g,"Essential"],[d,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[c,[g,"Envizen"],[d,b]],[/\b(trio[-\w\. ]+) b/i],[c,[g,"MachSpeed"],[d,b]],[/\btu_(1491) b/i],[c,[g,"Rotor"],[d,b]],[/(shield[\w ]+) b/i],[c,[g,"Nvidia"],[d,b]],[/(sprint) (\w+)/i],[g,c,[d,y]],[/(kin\.[onetw]{3})/i],[[c,/\./g," "],[g,C],[d,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[c,[g,B],[d,b]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[c,[g,B],[d,y]],[/smart-tv.+(samsung)/i],[g,[d,v]],[/hbbtv.+maple;(\d+)/i],[[c,/^/,"SmartTV"],[g,M],[d,v]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,"LG"],[d,v]],[/(apple) ?tv/i],[g,[c,P+" TV"],[d,v]],[/crkey/i],[[c,R+"cast"],[g,I],[d,v]],[/droid.+aft(\w)( bui|\))/i],[c,[g,S],[d,v]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[c,[g,D],[d,v]],[/(bravia[\w ]+)( bui|\))/i],[c,[g,L],[d,v]],[/(mitv-\w{5}) bui/i],[c,[g,j],[d,v]],[/Hbbtv.*(technisat) (.*);/i],[g,c,[d,v]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,V],[c,V],[d,v]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,v]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,c,[d,f]],[/droid.+; (shield) bui/i],[c,[g,"Nvidia"],[d,f]],[/(playstation [345portablevi]+)/i],[c,[g,L],[d,f]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[c,[g,C],[d,f]],[/((pebble))app/i],[g,c,[d,w]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[c,[g,P],[d,w]],[/droid.+; (glass) \d/i],[c,[g,I],[d,w]],[/droid.+; (wt63?0{2,3})\)/i],[c,[g,B],[d,w]],[/(quest( 2| pro)?)/i],[c,[g,H],[d,w]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[d,T]],[/(aeobc)\b/i],[c,[g,S],[d,T]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[c,[d,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[c,[d,b]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,b]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,y]],[/(android[-\w\. ]{0,9});.+buil/i],[c,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[p,[h,"EdgeHTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[p,[h,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[h,p],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[p,h]],os:[[/microsoft (windows) (vista|xp)/i],[h,p],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[h,[p,z,X]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[h,"Windows"],[p,z,X]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[p,/_/g,"."],[h,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[h,W],[p,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[p,h],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[h,p],[/\(bb(10);/i],[p,[h,_]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[p,[h,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[p,[h,x+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[p,[h,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[p,[h,"watchOS"]],[/crkey\/([\d\.]+)/i],[p,[h,R+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[h,F],p],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[h,p],[/(sunos) ?([\w\.\d]*)/i],[[h,"Solaris"],p],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[h,p]]},J=function(e,t){if(typeof e===s&&(t=e,e=void 0),!(this instanceof J))return new J(e,t).getResult();var r=typeof a!==i&&a.navigator?a.navigator:void 0,o=e||(r&&r.userAgent?r.userAgent:""),f=r&&r.userAgentData?r.userAgentData:void 0,v=t?U(K,t):K,w=r&&r.userAgent==o;return this.getBrowser=function(){var e,t={};return t[h]=void 0,t[p]=void 0,q.call(t,o,v.browser),t[u]=typeof(e=t[p])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,w&&r&&r.brave&&typeof r.brave.isBrave==n&&(t[h]="Brave"),t},this.getCPU=function(){var e={};return e[m]=void 0,q.call(e,o,v.cpu),e},this.getDevice=function(){var e={};return e[g]=void 0,e[c]=void 0,e[d]=void 0,q.call(e,o,v.device),w&&!e[d]&&f&&f.mobile&&(e[d]=y),w&&"Macintosh"==e[c]&&r&&typeof r.standalone!==i&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[c]="iPad",e[d]=b),e},this.getEngine=function(){var e={};return e[h]=void 0,e[p]=void 0,q.call(e,o,v.engine),e},this.getOS=function(){var e={};return e[h]=void 0,e[p]=void 0,q.call(e,o,v.os),w&&!e[h]&&f&&"Unknown"!=f.platform&&(e[h]=f.platform.replace(/chrome os/i,F).replace(/macos/i,W)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===l&&e.length>350?V(e,350):e,this},this.setUA(o),this};if(J.VERSION="1.0.35",J.BROWSER=G([h,p,u]),J.CPU=G([m]),J.DEVICE=G([c,g,d,f,y,v,b,w,T]),J.ENGINE=J.OS=G([h,p]),typeof r!==i)t.exports&&(r=t.exports=J),r.UAParser=J;else if(typeof define===n&&define.amd)e.r,void 0!==J&&e.v(J);else typeof a!==i&&(a.UAParser=J);var Q=typeof a!==i&&(a.jQuery||a.Zepto);if(Q&&!Q.ua){var Z=new J;Q.ua=Z.getResult(),Q.ua.get=function(){return Z.getUA()},Q.ua.set=function(e){Z.setUA(e);var t=Z.getResult();for(var r in t)Q.ua[r]=t[r]}}}(this)}},o={};function n(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}},i=!0;try{a[e].call(r.exports,r,r.exports,n),i=!1}finally{i&&delete o[e]}return r.exports}n.ab="/ROOT/node_modules/next/dist/compiled/ua-parser-js/",t.exports=n(226)},4386,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a,o={isBot:function(){return s},userAgent:function(){return u},userAgentFromString:function(){return l}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let i=(a=e.r(99299))&&a.__esModule?a:{default:a};function s(e){return/Googlebot|Mediapartners-Google|AdsBot-Google|googleweblight|Storebot-Google|Google-PageRenderer|Google-InspectionTool|Bingbot|BingPreview|Slurp|DuckDuckBot|baiduspider|yandex|sogou|LinkedInBot|bitlybot|tumblr|vkShare|quora link preview|facebookexternalhit|facebookcatalog|Twitterbot|applebot|redditbot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|ia_archiver/i.test(e)}function l(e){return{...(0,i.default)(e),isBot:void 0!==e&&s(e)}}function u({headers:e}){return l(e.get("user-agent")||void 0)}},79187,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"URLPattern",{enumerable:!0,get:function(){return a}});let a="undefined"==typeof URLPattern?void 0:URLPattern},53309,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"after",{enumerable:!0,get:function(){return o}});let a=e.r(56704);function o(e){let t=a.workAsyncStorage.getStore();if(!t)throw Object.defineProperty(Error("`after` was called outside a request scope. Read more: https://nextjs.org/docs/messages/next-dynamic-api-wrong-context"),"__NEXT_ERROR_CODE",{value:"E468",enumerable:!1,configurable:!0});let{afterContext:r}=t;return r.after(e)}},81053,(e,t,r)=>{"use strict";var a,o;Object.defineProperty(r,"__esModule",{value:!0}),a=e.r(53309),o=r,Object.keys(a).forEach(function(e){"default"===e||Object.prototype.hasOwnProperty.call(o,e)||Object.defineProperty(o,e,{enumerable:!0,get:function(){return a[e]}})})},65252,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DynamicServerError:function(){return i},isDynamicServerError:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n="DYNAMIC_SERVER_USAGE";class i extends Error{constructor(e){super(`Dynamic server usage: ${e}`),this.description=e,this.digest=n}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&"string"==typeof e.digest&&e.digest===n}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},97573,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={StaticGenBailoutError:function(){return i},isStaticGenBailoutError:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n="NEXT_STATIC_GEN_BAILOUT";class i extends Error{constructor(...e){super(...e),this.code=n}}function s(e){return"object"==typeof e&&null!==e&&"code"in e&&e.code===n}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},4642,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={isHangingPromiseRejectionError:function(){return n},makeDevtoolsIOAwarePromise:function(){return h},makeHangingPromise:function(){return u}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});function n(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===i}let i="HANGING_PROMISE_REJECTION";class s extends Error{constructor(e,t){super(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`),this.route=e,this.expression=t,this.digest=i}}let l=new WeakMap;function u(e,t,r){if(e.aborted)return Promise.reject(new s(t,r));{let a=new Promise((a,o)=>{let n=o.bind(null,new s(t,r)),i=l.get(e);if(i)i.push(n);else{let t=[n];l.set(e,t),e.addEventListener("abort",()=>{for(let e=0;e<t.length;e++)t[e]()},{once:!0})}});return a.catch(c),a}}function c(){}function h(e,t,r){return t.stagedRendering?t.stagedRendering.delayUntilStage(r,void 0,e):new Promise(t=>{setTimeout(()=>{t(e)},0)})}},96306,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={METADATA_BOUNDARY_NAME:function(){return n},OUTLET_BOUNDARY_NAME:function(){return s},ROOT_LAYOUT_BOUNDARY_NAME:function(){return l},VIEWPORT_BOUNDARY_NAME:function(){return i}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n="__next_metadata_boundary__",i="__next_viewport_boundary__",s="__next_outlet_boundary__",l="__next_root_layout_boundary__"},38244,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={atLeastOneTask:function(){return s},scheduleImmediate:function(){return i},scheduleOnNextTick:function(){return n},waitAtLeastOneReactRenderTask:function(){return l}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e=>{Promise.resolve().then(()=>{process.nextTick(e)})},i=e=>{setImmediate(e)};function s(){return new Promise(e=>i(e))}function l(){return new Promise(e=>setImmediate(e))}},31584,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={BailoutToCSRError:function(){return i},isBailoutToCSRError:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n="BAILOUT_TO_CLIENT_SIDE_RENDERING";class i extends Error{constructor(e){super(`Bail out to client-side rendering: ${e}`),this.reason=e,this.digest=n}}function s(e){return"object"==typeof e&&null!==e&&"digest"in e&&e.digest===n}},76414,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"InvariantError",{enumerable:!0,get:function(){return a}});class a extends Error{constructor(e,t){super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`,t),this.name="InvariantError"}}},68665,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a,o,n={Postpone:function(){return R},PreludeState:function(){return Q},abortAndThrowOnSynchronousRequestDataAccess:function(){return E},abortOnSynchronousPlatformIOAccess:function(){return _},accessedDynamicData:function(){return D},annotateDynamicAccess:function(){return F},consumeDynamicAccess:function(){return L},createDynamicTrackingState:function(){return b},createDynamicValidationState:function(){return v},createHangingInputAbortSignal:function(){return H},createRenderInBrowserAbortSignal:function(){return B},delayUntilRuntimeStage:function(){return er},formatDynamicAPIAccesses:function(){return j},getFirstDynamicReason:function(){return w},getStaticShellDisallowedDynamicReasons:function(){return et},isDynamicPostpone:function(){return A},isPrerenderInterruptedError:function(){return M},logDisallowedDynamicError:function(){return Z},markCurrentScopeAsDynamic:function(){return T},postponeWithTracking:function(){return x},throwIfDisallowedDynamic:function(){return ee},throwToInterruptStaticGeneration:function(){return S},trackAllowedDynamicAccess:function(){return z},trackDynamicDataInDynamicRender:function(){return P},trackDynamicHoleInRuntimeShell:function(){return X},trackDynamicHoleInStaticShell:function(){return K},useDynamicRouteParams:function(){return W},useDynamicSearchParams:function(){return U}};for(var i in n)Object.defineProperty(r,i,{enumerable:!0,get:n[i]});let s=(a=e.r(47540))&&a.__esModule?a:{default:a},l=e.r(65252),u=e.r(97573),c=e.r(32319),h=e.r(56704),d=e.r(4642),g=e.r(96306),p=e.r(38244),m=e.r(31584),f=e.r(76414),y="function"==typeof s.default.unstable_postpone;function b(e){return{isDebugDynamicAccesses:e,dynamicAccesses:[],syncDynamicErrorWithStack:null}}function v(){return{hasSuspenseAboveBody:!1,hasDynamicMetadata:!1,dynamicMetadata:null,hasDynamicViewport:!1,hasAllowedDynamic:!1,dynamicErrors:[]}}function w(e){var t;return null==(t=e.dynamicAccesses[0])?void 0:t.expression}function T(e,t,r){if(t)switch(t.type){case"cache":case"unstable-cache":case"private-cache":return}if(!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw Object.defineProperty(new u.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(t)switch(t.type){case"prerender-ppr":return x(e.route,r,t.dynamicTracking);case"prerender-legacy":t.revalidate=0;let a=Object.defineProperty(new l.DynamicServerError(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=r,e.dynamicUsageStack=a.stack,a}}}function S(e,t,r){let a=Object.defineProperty(new l.DynamicServerError(`Route ${t.route} couldn't be rendered statically because it used \`${e}\`. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E558",enumerable:!1,configurable:!0});throw r.revalidate=0,t.dynamicUsageDescription=e,t.dynamicUsageStack=a.stack,a}function P(e){switch(e.type){case"cache":case"unstable-cache":case"private-cache":return}}function k(e,t,r){let a=N(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`);r.controller.abort(a);let o=r.dynamicTracking;o&&o.dynamicAccesses.push({stack:o.isDebugDynamicAccesses?Error().stack:void 0,expression:t})}function _(e,t,r,a){let o=a.dynamicTracking;k(e,t,a),o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicErrorWithStack=r)}function E(e,t,r,a){if(!1===a.controller.signal.aborted){k(e,t,a);let o=a.dynamicTracking;o&&null===o.syncDynamicErrorWithStack&&(o.syncDynamicErrorWithStack=r)}throw N(`Route ${e} needs to bail out of prerendering at this point because it used ${t}.`)}function R({reason:e,route:t}){let r=c.workUnitAsyncStorage.getStore();x(t,e,r&&"prerender-ppr"===r.type?r.dynamicTracking:null)}function x(e,t,r){(function(){if(!y)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})})(),r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:t}),s.default.unstable_postpone(I(e,t))}function I(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}function A(e){return"object"==typeof e&&null!==e&&"string"==typeof e.message&&C(e.message)}function C(e){return e.includes("needs to bail out of prerendering at this point because it used")&&e.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")}if(!1===C(I("%%%","^^^")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});let O="NEXT_PRERENDER_INTERRUPTED";function N(e){let t=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return t.digest=O,t}function M(e){return"object"==typeof e&&null!==e&&e.digest===O&&"name"in e&&"message"in e&&e instanceof Error}function D(e){return e.length>0}function L(e,t){return e.dynamicAccesses.push(...t.dynamicAccesses),e.dynamicAccesses}function j(e){return e.filter(e=>"string"==typeof e.stack&&e.stack.length>0).map(({expression:e,stack:t})=>(t=t.split("\n").slice(4).filter(e=>!(e.includes("node_modules/next/")||e.includes(" (<anonymous>)")||e.includes(" (node:"))).join("\n"),`Dynamic API Usage Debug - ${e}:
${t}`))}function B(){let e=new AbortController;return e.abort(Object.defineProperty(new m.BailoutToCSRError("Render in Browser"),"__NEXT_ERROR_CODE",{value:"E721",enumerable:!1,configurable:!0})),e.signal}function H(e){switch(e.type){case"prerender":case"prerender-runtime":let t=new AbortController;if(e.cacheSignal)e.cacheSignal.inputReady().then(()=>{t.abort()});else{let r=(0,c.getRuntimeStagePromise)(e);r?r.then(()=>(0,p.scheduleOnNextTick)(()=>t.abort())):(0,p.scheduleOnNextTick)(()=>t.abort())}return t.signal;case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"request":case"cache":case"private-cache":case"unstable-cache":return}}function F(e,t){let r=t.dynamicTracking;r&&r.dynamicAccesses.push({stack:r.isDebugDynamicAccesses?Error().stack:void 0,expression:e})}function W(e){let t=h.workAsyncStorage.getStore(),r=c.workUnitAsyncStorage.getStore();if(t&&r)switch(r.type){case"prerender-client":case"prerender":{let a=r.fallbackRouteParams;a&&a.size>0&&s.default.use((0,d.makeHangingPromise)(r.renderSignal,t.route,e));break}case"prerender-ppr":{let a=r.fallbackRouteParams;if(a&&a.size>0)return x(t.route,e,r.dynamicTracking);break}case"prerender-runtime":throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called during a runtime prerender. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E771",enumerable:!1,configurable:!0});case"cache":case"private-cache":throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0})}}function U(e){let t=h.workAsyncStorage.getStore(),r=c.workUnitAsyncStorage.getStore();if(t)switch(!r&&(0,c.throwForMissingRequestStore)(e),r.type){case"prerender-client":s.default.use((0,d.makeHangingPromise)(r.renderSignal,t.route,e));break;case"prerender-legacy":case"prerender-ppr":if(t.forceStatic)return;throw Object.defineProperty(new m.BailoutToCSRError(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});case"prerender":case"prerender-runtime":throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called from a Server Component. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E795",enumerable:!1,configurable:!0});case"cache":case"unstable-cache":case"private-cache":throw Object.defineProperty(new f.InvariantError(`\`${e}\` was called inside a cache scope. Next.js should be preventing ${e} from being included in server components statically, but did not in this case.`),"__NEXT_ERROR_CODE",{value:"E745",enumerable:!1,configurable:!0});case"request":return}}let G=/\n\s+at Suspense \(<anonymous>\)/,Y=RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at ${g.ROOT_LAYOUT_BOUNDARY_NAME} \\([^\\n]*\\)`),$=RegExp(`\\n\\s+at ${g.METADATA_BOUNDARY_NAME}[\\n\\s]`),V=RegExp(`\\n\\s+at ${g.VIEWPORT_BOUNDARY_NAME}[\\n\\s]`),q=RegExp(`\\n\\s+at ${g.OUTLET_BOUNDARY_NAME}[\\n\\s]`);function z(e,t,r,a){if(!q.test(t)){if($.test(t)){r.hasDynamicMetadata=!0;return}if(V.test(t)){r.hasDynamicViewport=!0;return}if(Y.test(t)){r.hasAllowedDynamic=!0,r.hasSuspenseAboveBody=!0;return}else if(G.test(t)){r.hasAllowedDynamic=!0;return}else{if(a.syncDynamicErrorWithStack)return void r.dynamicErrors.push(a.syncDynamicErrorWithStack);let o=J(`Route "${e.route}": Uncached data was accessed outside of <Suspense>. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,t);return void r.dynamicErrors.push(o)}}}function X(e,t,r,a){if(!q.test(t)){if($.test(t)){r.dynamicMetadata=J(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateMetadata\`. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,t);return}if(V.test(t)){let a=J(`Route "${e.route}": Uncached data or \`connection()\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,t);r.dynamicErrors.push(a);return}if(Y.test(t)){r.hasAllowedDynamic=!0,r.hasSuspenseAboveBody=!0;return}else if(G.test(t)){r.hasAllowedDynamic=!0;return}else{if(a.syncDynamicErrorWithStack)return void r.dynamicErrors.push(a.syncDynamicErrorWithStack);let o=J(`Route "${e.route}": Uncached data or \`connection()\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,t);return void r.dynamicErrors.push(o)}}}function K(e,t,r,a){if(!q.test(t)){if($.test(t)){r.dynamicMetadata=J(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateMetadata\` or you have file-based metadata such as icons that depend on dynamic params segments. Except for this instance, the page would have been entirely prerenderable which may have been the intended behavior. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`,t);return}if(V.test(t)){let a=J(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed inside \`generateViewport\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`,t);r.dynamicErrors.push(a);return}if(Y.test(t)){r.hasAllowedDynamic=!0,r.hasSuspenseAboveBody=!0;return}else if(G.test(t)){r.hasAllowedDynamic=!0;return}else{if(a.syncDynamicErrorWithStack)return void r.dynamicErrors.push(a.syncDynamicErrorWithStack);let o=J(`Route "${e.route}": Runtime data such as \`cookies()\`, \`headers()\`, \`params\`, or \`searchParams\` was accessed outside of \`<Suspense>\`. This delays the entire page from rendering, resulting in a slow user experience. Learn more: https://nextjs.org/docs/messages/blocking-route`,t);return void r.dynamicErrors.push(o)}}}function J(e,t){let r=Object.defineProperty(Error(e),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return r.stack=r.name+": "+e+t,r}var Q=((o={})[o.Full=0]="Full",o[o.Empty=1]="Empty",o[o.Errored=2]="Errored",o);function Z(e,t){console.error(t),e.dev||(e.hasReadableErrorStacks?console.error(`To get a more detailed stack trace and pinpoint the issue, start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.`):console.error(`To get a more detailed stack trace and pinpoint the issue, try one of the following:
  - Start the app in development mode by running \`next dev\`, then open "${e.route}" in your browser to investigate the error.
  - Rerun the production build with \`next build --debug-prerender\` to generate better stack traces.`))}function ee(e,t,r,a){if(a.syncDynamicErrorWithStack)throw Z(e,a.syncDynamicErrorWithStack),new u.StaticGenBailoutError;if(0!==t){if(r.hasSuspenseAboveBody)return;let a=r.dynamicErrors;if(a.length>0){for(let t=0;t<a.length;t++)Z(e,a[t]);throw new u.StaticGenBailoutError}if(r.hasDynamicViewport)throw console.error(`Route "${e.route}" has a \`generateViewport\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) without explicitly allowing fully dynamic rendering. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-viewport`),new u.StaticGenBailoutError;if(1===t)throw console.error(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason. This is a bug in Next.js.`),new u.StaticGenBailoutError}else if(!1===r.hasAllowedDynamic&&r.hasDynamicMetadata)throw console.error(`Route "${e.route}" has a \`generateMetadata\` that depends on Request data (\`cookies()\`, etc...) or uncached external data (\`fetch(...)\`, etc...) when the rest of the route does not. See more info here: https://nextjs.org/docs/messages/next-prerender-dynamic-metadata`),new u.StaticGenBailoutError}function et(e,t,r){if(r.hasSuspenseAboveBody)return[];if(0!==t){let a=r.dynamicErrors;if(a.length>0)return a;if(1===t)return[Object.defineProperty(new f.InvariantError(`Route "${e.route}" did not produce a static shell and Next.js was unable to determine a reason.`),"__NEXT_ERROR_CODE",{value:"E936",enumerable:!1,configurable:!0})]}else if(!1===r.hasAllowedDynamic&&0===r.dynamicErrors.length&&r.dynamicMetadata)return[r.dynamicMetadata];return[]}function er(e,t){return e.runtimeStagePromise?e.runtimeStagePromise.then(()=>t):t}},43824,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={isRequestAPICallableInsideAfter:function(){return u},throwForSearchParamsAccessInUseCache:function(){return l},throwWithStaticGenerationBailoutErrorWithDynamicError:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(97573),i=e.r(24725);function s(e,t){throw Object.defineProperty(new n.StaticGenBailoutError(`Route ${e} with \`dynamic = "error"\` couldn't be rendered statically because it used ${t}. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E543",enumerable:!1,configurable:!0})}function l(e,t){let r=Object.defineProperty(Error(`Route ${e.route} used \`searchParams\` inside "use cache". Accessing dynamic request data inside a cache scope is not supported. If you need some search params inside a cached function await \`searchParams\` outside of the cached function and pass only the required search params as arguments to the cached function. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E842",enumerable:!1,configurable:!0});throw Error.captureStackTrace(r,t),e.invalidDynamicUsageError??=r,r}function u(){let e=i.afterTaskAsyncStorage.getStore();return(null==e?void 0:e.rootTaskSpawnPhase)==="action"}},8211,(e,t,r)=>{"use strict";function a(){let e,t,r=new Promise((r,a)=>{e=r,t=a});return{resolve:e,reject:t,promise:r}}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"createPromiseWithResolvers",{enumerable:!0,get:function(){return a}})},18185,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a,o={RenderStage:function(){return l},StagedRenderingController:function(){return u}};for(var n in o)Object.defineProperty(r,n,{enumerable:!0,get:o[n]});let i=e.r(76414),s=e.r(8211);var l=((a={})[a.Before=1]="Before",a[a.Static=2]="Static",a[a.Runtime=3]="Runtime",a[a.Dynamic=4]="Dynamic",a[a.Abandoned=5]="Abandoned",a);class u{constructor(e=null,t){this.abortSignal=e,this.hasRuntimePrefetch=t,this.currentStage=1,this.staticInterruptReason=null,this.runtimeInterruptReason=null,this.staticStageEndTime=1/0,this.runtimeStageEndTime=1/0,this.runtimeStageListeners=[],this.dynamicStageListeners=[],this.runtimeStagePromise=(0,s.createPromiseWithResolvers)(),this.dynamicStagePromise=(0,s.createPromiseWithResolvers)(),this.mayAbandon=!1,e&&(e.addEventListener("abort",()=>{let{reason:t}=e;this.currentStage<3&&(this.runtimeStagePromise.promise.catch(c),this.runtimeStagePromise.reject(t)),(this.currentStage<4||5===this.currentStage)&&(this.dynamicStagePromise.promise.catch(c),this.dynamicStagePromise.reject(t))},{once:!0}),this.mayAbandon=!0)}onStage(e,t){if(this.currentStage>=e)t();else if(3===e)this.runtimeStageListeners.push(t);else if(4===e)this.dynamicStageListeners.push(t);else throw Object.defineProperty(new i.InvariantError(`Invalid render stage: ${e}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}canSyncInterrupt(){if(1===this.currentStage)return!1;let e=this.hasRuntimePrefetch?4:3;return this.currentStage<e}syncInterruptCurrentStageWithReason(e){if(1!==this.currentStage){if(this.mayAbandon)return this.abandonRenderImpl();switch(this.currentStage){case 2:this.staticInterruptReason=e,this.advanceStage(4);return;case 3:this.hasRuntimePrefetch&&(this.runtimeInterruptReason=e,this.advanceStage(4));return}}}getStaticInterruptReason(){return this.staticInterruptReason}getRuntimeInterruptReason(){return this.runtimeInterruptReason}getStaticStageEndTime(){return this.staticStageEndTime}getRuntimeStageEndTime(){return this.runtimeStageEndTime}abandonRender(){if(!this.mayAbandon)throw Object.defineProperty(new i.InvariantError("`abandonRender` called on a stage controller that cannot be abandoned."),"__NEXT_ERROR_CODE",{value:"E938",enumerable:!1,configurable:!0});this.abandonRenderImpl()}abandonRenderImpl(){let{currentStage:e}=this;switch(e){case 2:this.currentStage=5,this.resolveRuntimeStage();return;case 3:this.currentStage=5;return}}advanceStage(e){if(e<=this.currentStage)return;let t=this.currentStage;if(this.currentStage=e,t<3&&e>=3&&(this.staticStageEndTime=performance.now()+performance.timeOrigin,this.resolveRuntimeStage()),t<4&&e>=4){this.runtimeStageEndTime=performance.now()+performance.timeOrigin,this.resolveDynamicStage();return}}resolveRuntimeStage(){let e=this.runtimeStageListeners;for(let t=0;t<e.length;t++)e[t]();e.length=0,this.runtimeStagePromise.resolve()}resolveDynamicStage(){let e=this.dynamicStageListeners;for(let t=0;t<e.length;t++)e[t]();e.length=0,this.dynamicStagePromise.resolve()}getStagePromise(e){switch(e){case 3:return this.runtimeStagePromise.promise;case 4:return this.dynamicStagePromise.promise;default:throw Object.defineProperty(new i.InvariantError(`Invalid render stage: ${e}`),"__NEXT_ERROR_CODE",{value:"E881",enumerable:!1,configurable:!0})}}waitForStage(e){return this.getStagePromise(e)}delayUntilStage(e,t,r){var a,o,n;let i,s=(a=this.getStagePromise(e),o=t,n=r,i=new Promise((e,t)=>{a.then(e.bind(null,n),t)}),void 0!==o&&(i.displayName=o),i);return this.abortSignal&&s.catch(c),s}}function c(){}},75674,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"connection",{enumerable:!0,get:function(){return u}});let a=e.r(56704),o=e.r(32319),n=e.r(68665),i=e.r(97573),s=e.r(4642),l=e.r(43824);function u(){let e=a.workAsyncStorage.getStore(),t=o.workUnitAsyncStorage.getStore();if(e){if(t&&"after"===t.phase&&!(0,l.isRequestAPICallableInsideAfter)())throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside \`after()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but \`after()\` executes after the request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/canary/app/api-reference/functions/after`),"__NEXT_ERROR_CODE",{value:"E827",enumerable:!1,configurable:!0});if(e.forceStatic)return Promise.resolve(void 0);if(e.dynamicShouldError)throw Object.defineProperty(new i.StaticGenBailoutError(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`connection()\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E847",enumerable:!1,configurable:!0});if(t)switch(t.type){case"cache":{let t=Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual request, but caches must be able to be produced before a request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E841",enumerable:!1,configurable:!0});throw Error.captureStackTrace(t,u),e.invalidDynamicUsageError??=t,t}case"private-cache":{let t=Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside "use cache: private". The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual navigation request, but caches must be able to be produced before a navigation request, so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/messages/next-request-in-use-cache`),"__NEXT_ERROR_CODE",{value:"E837",enumerable:!1,configurable:!0});throw Error.captureStackTrace(t,u),e.invalidDynamicUsageError??=t,t}case"unstable-cache":throw Object.defineProperty(Error(`Route ${e.route} used \`connection()\` inside a function cached with \`unstable_cache()\`. The \`connection()\` function is used to indicate the subsequent code must only run when there is an actual Request, but caches must be able to be produced before a Request so this function is not allowed in this scope. See more info here: https://nextjs.org/docs/app/api-reference/functions/unstable_cache`),"__NEXT_ERROR_CODE",{value:"E840",enumerable:!1,configurable:!0});case"prerender":case"prerender-client":case"prerender-runtime":return(0,s.makeHangingPromise)(t.renderSignal,e.route,"`connection()`");case"prerender-ppr":return(0,n.postponeWithTracking)(e.route,"connection",t.dynamicTracking);case"prerender-legacy":return(0,n.throwToInterruptStaticGeneration)("connection",e,t);case"request":return(0,n.trackDynamicDataInDynamicRender)(t),Promise.resolve(void 0)}}(0,o.throwForMissingRequestStore)("connection")}e.r(18185)},89171,(e,t,r)=>{let a={NextRequest:e.r(29666).NextRequest,NextResponse:e.r(46633).NextResponse,ImageResponse:e.r(87963).ImageResponse,userAgentFromString:e.r(4386).userAgentFromString,userAgent:e.r(4386).userAgent,URLPattern:e.r(79187).URLPattern,after:e.r(81053).after,connection:e.r(75674).connection};t.exports=a,r.NextRequest=a.NextRequest,r.NextResponse=a.NextResponse,r.ImageResponse=a.ImageResponse,r.userAgentFromString=a.userAgentFromString,r.userAgent=a.userAgent,r.URLPattern=a.URLPattern,r.after=a.after,r.connection=a.connection},70943,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={getOrigin:function(){return s},resolveArray:function(){return n},resolveAsArrayOrUndefined:function(){return i}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});function n(e){return Array.isArray(e)?e:[e]}function i(e){if(null!=e)return n(e)}function s(e){let t;if("string"==typeof e)try{t=(e=new URL(e)).origin}catch{}return t}},73853,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={resolveManifest:function(){return l},resolveRobots:function(){return i},resolveRouteData:function(){return u},resolveSitemap:function(){return s}};for(var o in a)Object.defineProperty(r,o,{enumerable:!0,get:a[o]});let n=e.r(70943);function i(e){let t="";for(let r of Array.isArray(e.rules)?e.rules:[e.rules]){for(let e of(0,n.resolveArray)(r.userAgent||["*"]))t+=`User-Agent: ${e}
`;if(r.allow)for(let e of(0,n.resolveArray)(r.allow))t+=`Allow: ${e}
`;if(r.disallow)for(let e of(0,n.resolveArray)(r.disallow))t+=`Disallow: ${e}
`;r.crawlDelay&&(t+=`Crawl-delay: ${r.crawlDelay}
`),t+="\n"}return e.host&&(t+=`Host: ${e.host}
`),e.sitemap&&(0,n.resolveArray)(e.sitemap).forEach(e=>{t+=`Sitemap: ${e}
`}),t}function s(e){let t=e.some(e=>Object.keys(e.alternates??{}).length>0),r=e.some(e=>{var t;return!!(null==(t=e.images)?void 0:t.length)}),a=e.some(e=>{var t;return!!(null==(t=e.videos)?void 0:t.length)}),o="";for(let l of(o+='<?xml version="1.0" encoding="UTF-8"?>\n',o+='<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',r&&(o+=' xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"'),a&&(o+=' xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'),t?o+=' xmlns:xhtml="http://www.w3.org/1999/xhtml">\n':o+=">\n",e)){var n,i,s;o+="<url>\n",o+=`<loc>${l.url}</loc>
`;let e=null==(n=l.alternates)?void 0:n.languages;if(e&&Object.keys(e).length)for(let t in e)o+=`<xhtml:link rel="alternate" hreflang="${t}" href="${e[t]}" />
`;if(null==(i=l.images)?void 0:i.length)for(let e of l.images)o+=`<image:image>
<image:loc>${e}</image:loc>
</image:image>
`;if(null==(s=l.videos)?void 0:s.length)for(let e of l.videos)o+=["<video:video>",`<video:title>${e.title}</video:title>`,`<video:thumbnail_loc>${e.thumbnail_loc}</video:thumbnail_loc>`,`<video:description>${e.description}</video:description>`,e.content_loc&&`<video:content_loc>${e.content_loc}</video:content_loc>`,e.player_loc&&`<video:player_loc>${e.player_loc}</video:player_loc>`,e.duration&&`<video:duration>${e.duration}</video:duration>`,e.view_count&&`<video:view_count>${e.view_count}</video:view_count>`,e.tag&&`<video:tag>${e.tag}</video:tag>`,e.rating&&`<video:rating>${e.rating}</video:rating>`,e.expiration_date&&`<video:expiration_date>${e.expiration_date}</video:expiration_date>`,e.publication_date&&`<video:publication_date>${e.publication_date}</video:publication_date>`,e.family_friendly&&`<video:family_friendly>${e.family_friendly}</video:family_friendly>`,e.requires_subscription&&`<video:requires_subscription>${e.requires_subscription}</video:requires_subscription>`,e.live&&`<video:live>${e.live}</video:live>`,e.restriction&&`<video:restriction relationship="${e.restriction.relationship}">${e.restriction.content}</video:restriction>`,e.platform&&`<video:platform relationship="${e.platform.relationship}">${e.platform.content}</video:platform>`,e.uploader&&`<video:uploader${e.uploader.info&&` info="${e.uploader.info}"`}>${e.uploader.content}</video:uploader>`,`</video:video>
`].filter(Boolean).join("\n");if(l.lastModified){let e=l.lastModified instanceof Date?l.lastModified.toISOString():l.lastModified;o+=`<lastmod>${e}</lastmod>
`}l.changeFrequency&&(o+=`<changefreq>${l.changeFrequency}</changefreq>
`),"number"==typeof l.priority&&(o+=`<priority>${l.priority}</priority>
`),o+="</url>\n"}return o+"</urlset>\n"}function l(e){return JSON.stringify(e)}function u(e,t){return"robots"===t?i(e):"sitemap"===t?s(e):"manifest"===t?l(e):""}},8922,e=>{"use strict";let t,r,a;var o,n,i,s,l,u,c,h,d,g,p,m,f,y,b,v,w,T,S=e.i(47909),P=((o={}).PAGES="PAGES",o.PAGES_API="PAGES_API",o.APP_PAGE="APP_PAGE",o.APP_ROUTE="APP_ROUTE",o.IMAGE="IMAGE",o),k=((n=k||{}).handleRequest="BaseServer.handleRequest",n.run="BaseServer.run",n.pipe="BaseServer.pipe",n.getStaticHTML="BaseServer.getStaticHTML",n.render="BaseServer.render",n.renderToResponseWithComponents="BaseServer.renderToResponseWithComponents",n.renderToResponse="BaseServer.renderToResponse",n.renderToHTML="BaseServer.renderToHTML",n.renderError="BaseServer.renderError",n.renderErrorToResponse="BaseServer.renderErrorToResponse",n.renderErrorToHTML="BaseServer.renderErrorToHTML",n.render404="BaseServer.render404",n),_=((i=_||{}).loadDefaultErrorComponents="LoadComponents.loadDefaultErrorComponents",i.loadComponents="LoadComponents.loadComponents",i),E=((s=E||{}).getRequestHandler="NextServer.getRequestHandler",s.getRequestHandlerWithMetadata="NextServer.getRequestHandlerWithMetadata",s.getServer="NextServer.getServer",s.getServerRequestHandler="NextServer.getServerRequestHandler",s.createServer="createServer.createServer",s),R=((l=R||{}).compression="NextNodeServer.compression",l.getBuildId="NextNodeServer.getBuildId",l.createComponentTree="NextNodeServer.createComponentTree",l.clientComponentLoading="NextNodeServer.clientComponentLoading",l.getLayoutOrPageModule="NextNodeServer.getLayoutOrPageModule",l.generateStaticRoutes="NextNodeServer.generateStaticRoutes",l.generateFsStaticRoutes="NextNodeServer.generateFsStaticRoutes",l.generatePublicRoutes="NextNodeServer.generatePublicRoutes",l.generateImageRoutes="NextNodeServer.generateImageRoutes.route",l.sendRenderResult="NextNodeServer.sendRenderResult",l.proxyRequest="NextNodeServer.proxyRequest",l.runApi="NextNodeServer.runApi",l.render="NextNodeServer.render",l.renderHTML="NextNodeServer.renderHTML",l.imageOptimizer="NextNodeServer.imageOptimizer",l.getPagePath="NextNodeServer.getPagePath",l.getRoutesManifest="NextNodeServer.getRoutesManifest",l.findPageComponents="NextNodeServer.findPageComponents",l.getFontManifest="NextNodeServer.getFontManifest",l.getServerComponentManifest="NextNodeServer.getServerComponentManifest",l.getRequestHandler="NextNodeServer.getRequestHandler",l.renderToHTML="NextNodeServer.renderToHTML",l.renderError="NextNodeServer.renderError",l.renderErrorToHTML="NextNodeServer.renderErrorToHTML",l.render404="NextNodeServer.render404",l.startResponse="NextNodeServer.startResponse",l.route="route",l.onProxyReq="onProxyReq",l.apiResolver="apiResolver",l.internalFetch="internalFetch",l),x=((u=x||{}).startServer="startServer.startServer",u),I=((c=I||{}).getServerSideProps="Render.getServerSideProps",c.getStaticProps="Render.getStaticProps",c.renderToString="Render.renderToString",c.renderDocument="Render.renderDocument",c.createBodyResult="Render.createBodyResult",c),A=((h=A||{}).renderToString="AppRender.renderToString",h.renderToReadableStream="AppRender.renderToReadableStream",h.getBodyResult="AppRender.getBodyResult",h.fetch="AppRender.fetch",h),C=((d=C||{}).executeRoute="Router.executeRoute",d),O=((g=O||{}).runHandler="Node.runHandler",g),N=((p=N||{}).runHandler="AppRouteRouteHandlers.runHandler",p),M=((m=M||{}).generateMetadata="ResolveMetadata.generateMetadata",m.generateViewport="ResolveMetadata.generateViewport",m),D=((f=D||{}).execute="Middleware.execute",f);let L=new Set(["Middleware.execute","BaseServer.handleRequest","Render.getServerSideProps","Render.getStaticProps","AppRender.fetch","AppRender.getBodyResult","Render.renderDocument","Node.runHandler","AppRouteRouteHandlers.runHandler","ResolveMetadata.generateMetadata","ResolveMetadata.generateViewport","NextNodeServer.createComponentTree","NextNodeServer.findPageComponents","NextNodeServer.getLayoutOrPageModule","NextNodeServer.startResponse","NextNodeServer.clientComponentLoading"]),j=new Set(["NextNodeServer.findPageComponents","NextNodeServer.createComponentTree","NextNodeServer.clientComponentLoading"]),B=process.env.NEXT_OTEL_PERFORMANCE_PREFIX;try{t=e.r(70406)}catch(r){t=e.r(17413)}let{context:H,propagation:F,trace:W,SpanStatusCode:U,SpanKind:G,ROOT_CONTEXT:Y}=t;class $ extends Error{constructor(e,t){super(),this.bubble=e,this.result=t}}let V=(e,t)=>{"object"==typeof t&&null!==t&&t instanceof $&&t.bubble?e.setAttribute("next.bubble",!0):(t&&(e.recordException(t),e.setAttribute("error.type",t.name)),e.setStatus({code:U.ERROR,message:null==t?void 0:t.message})),e.end()},q=new Map,z=t.createContextKey("next.rootSpanId"),X=0,K={set(e,t,r){e.push({key:t,value:r})}},J=(a=new class e{getTracerInstance(){return W.getTracer("next.js","0.0.1")}getContext(){return H}getTracePropagationData(){let e=H.active(),t=[];return F.inject(e,t,K),t}getActiveScopeSpan(){return W.getSpan(null==H?void 0:H.active())}withPropagatedContext(e,t,r){let a=H.active();if(W.getSpanContext(a))return t();let o=F.extract(a,e,r);return H.with(o,t)}trace(...e){let[t,r,a]=e,{fn:o,options:n}="function"==typeof r?{fn:r,options:{}}:{fn:a,options:{...r}},i=n.spanName??t;if(!L.has(t)&&"1"!==process.env.NEXT_OTEL_VERBOSE||n.hideSpan)return o();let s=this.getSpanContext((null==n?void 0:n.parentSpan)??this.getActiveScopeSpan());s||(s=(null==H?void 0:H.active())??Y);let l=s.getValue(z),u="number"!=typeof l||!q.has(l),c=X++;return n.attributes={"next.span_name":i,"next.span_type":t,...n.attributes},H.with(s.setValue(z,c),()=>this.getTracerInstance().startActiveSpan(i,n,e=>{let r;B&&t&&j.has(t)&&(r="performance"in globalThis&&"measure"in performance?globalThis.performance.now():void 0);let a=!1,i=()=>{!a&&(a=!0,q.delete(c),r&&performance.measure(`${B}:next-${(t.split(".").pop()||"").replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}`,{start:r,end:performance.now()}))};if(u&&q.set(c,new Map(Object.entries(n.attributes??{}))),o.length>1)try{return o(e,t=>V(e,t))}catch(t){throw V(e,t),t}finally{i()}try{let t=o(e);if(null!==t&&"object"==typeof t&&"then"in t&&"function"==typeof t.then)return t.then(t=>(e.end(),t)).catch(t=>{throw V(e,t),t}).finally(i);return e.end(),i(),t}catch(t){throw V(e,t),i(),t}}))}wrap(...e){let t=this,[r,a,o]=3===e.length?e:[e[0],{},e[1]];return L.has(r)||"1"===process.env.NEXT_OTEL_VERBOSE?function(){let e=a;"function"==typeof e&&"function"==typeof o&&(e=e.apply(this,arguments));let n=arguments.length-1,i=arguments[n];if("function"!=typeof i)return t.trace(r,e,()=>o.apply(this,arguments));{let a=t.getContext().bind(H.active(),i);return t.trace(r,e,(e,t)=>(arguments[n]=function(e){return null==t||t(e),a.apply(this,arguments)},o.apply(this,arguments)))}}:o}startSpan(...e){let[t,r]=e,a=this.getSpanContext((null==r?void 0:r.parentSpan)??this.getActiveScopeSpan());return this.getTracerInstance().startSpan(t,r,a)}getSpanContext(e){return e?W.setSpan(H.active(),e):void 0}getRootSpanAttributes(){let e=H.active().getValue(z);return q.get(e)}setRootSpanAttribute(e,t){let r=H.active().getValue(z),a=q.get(r);a&&!a.has(e)&&a.set(e,t)}withSpan(e,t){let r=W.setSpan(H.active(),e);return H.with(r,t)}},()=>a),Q="x-next-cache-tags",Z={shared:"shared",reactServerComponents:"rsc",serverSideRendering:"ssr",actionBrowser:"action-browser",apiNode:"api-node",apiEdge:"api-edge",middleware:"middleware",instrument:"instrument",edgeAsset:"edge-asset",appPagesBrowser:"app-pages-browser",pagesDirBrowser:"pages-dir-browser",pagesDirEdge:"pages-dir-edge",pagesDirNode:"pages-dir-node"};({...Z,GROUP:{builtinReact:[Z.reactServerComponents,Z.actionBrowser],serverOnly:[Z.reactServerComponents,Z.actionBrowser,Z.instrument,Z.middleware],neutralTarget:[Z.apiNode,Z.apiEdge],clientOnly:[Z.serverSideRendering,Z.appPagesBrowser],bundled:[Z.reactServerComponents,Z.actionBrowser,Z.serverSideRendering,Z.appPagesBrowser,Z.shared,Z.instrument,Z.middleware],appPages:[Z.reactServerComponents,Z.serverSideRendering,Z.appPagesBrowser,Z.actionBrowser]}});var ee=e.i(47540);class et extends Error{constructor(e){super(`Dynamic server usage: ${e}`),this.description=e,this.digest="DYNAMIC_SERVER_USAGE"}}class er extends Error{constructor(...e){super(...e),this.code="NEXT_STATIC_GEN_BAILOUT"}}var ea=e.i(32319),eo=e.i(56704);class en extends Error{constructor(e,t){super(`During prerendering, ${t} rejects when the prerender is complete. Typically these errors are handled by React but if you move ${t} to a different context by using \`setTimeout\`, \`after\`, or similar functions you may observe this error and you should handle it in that context. This occurred at route "${e}".`),this.route=e,this.expression=t,this.digest="HANGING_PROMISE_REJECTION"}}let ei=new WeakMap;function es(e,t,r){if(e.aborted)return Promise.reject(new en(t,r));{let a=new Promise((a,o)=>{let n=o.bind(null,new en(t,r)),i=ei.get(e);if(i)i.push(n);else{let t=[n];ei.set(e,t),e.addEventListener("abort",()=>{for(let e=0;e<t.length;e++)t[e]()},{once:!0})}});return a.catch(el),a}}function el(){}class eu extends Error{constructor(e,t){super(`Invariant: ${e.endsWith(".")?e:e+"."} This is a bug in Next.js.`,t),this.name="InvariantError"}}let ec="function"==typeof ee.default.unstable_postpone;function eh(e,t,r){if(t)switch(t.type){case"cache":case"unstable-cache":case"private-cache":return}if(!e.forceDynamic&&!e.forceStatic){if(e.dynamicShouldError)throw Object.defineProperty(new er(`Route ${e.route} with \`dynamic = "error"\` couldn't be rendered statically because it used \`${r}\`. See more info here: https://nextjs.org/docs/app/building-your-application/rendering/static-and-dynamic#dynamic-rendering`),"__NEXT_ERROR_CODE",{value:"E553",enumerable:!1,configurable:!0});if(t)switch(t.type){case"prerender-ppr":var a,o,n;return a=e.route,o=r,n=t.dynamicTracking,void(function(){if(!ec)throw Object.defineProperty(Error("Invariant: React.unstable_postpone is not defined. This suggests the wrong version of React was loaded. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E224",enumerable:!1,configurable:!0})}(),n&&n.dynamicAccesses.push({stack:n.isDebugDynamicAccesses?Error().stack:void 0,expression:o}),ee.default.unstable_postpone(ed(a,o)));case"prerender-legacy":t.revalidate=0;let i=Object.defineProperty(new et(`Route ${e.route} couldn't be rendered statically because it used ${r}. See more info here: https://nextjs.org/docs/messages/dynamic-server-error`),"__NEXT_ERROR_CODE",{value:"E550",enumerable:!1,configurable:!0});throw e.dynamicUsageDescription=r,e.dynamicUsageStack=i.stack,i}}}function ed(e,t){return`Route ${e} needs to bail out of prerendering at this point because it used ${t}. React throws this special object to indicate where. It should not be caught by your own try/catch. Learn more: https://nextjs.org/docs/messages/ppr-caught-error`}if(!1===((y=ed("%%%","^^^")).includes("needs to bail out of prerendering at this point because it used")&&y.includes("Learn more: https://nextjs.org/docs/messages/ppr-caught-error")))throw Object.defineProperty(Error("Invariant: isDynamicPostpone misidentified a postpone reason. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E296",enumerable:!1,configurable:!0});RegExp(`\\n\\s+at Suspense \\(<anonymous>\\)(?:(?!\\n\\s+at (?:body|div|main|section|article|aside|header|footer|nav|form|p|span|h1|h2|h3|h4|h5|h6) \\(<anonymous>\\))[\\s\\S])*?\\n\\s+at __next_root_layout_boundary__ \\([^\\n]*\\)`),RegExp(`\\n\\s+at __next_metadata_boundary__[\\n\\s]`),RegExp(`\\n\\s+at __next_viewport_boundary__[\\n\\s]`),RegExp(`\\n\\s+at __next_outlet_boundary__[\\n\\s]`);let eg=()=>{};function ep(e){if(!e.body)return[e,e];let[t,a]=e.body.tee(),o=new Response(t,{status:e.status,statusText:e.statusText,headers:e.headers});Object.defineProperty(o,"url",{value:e.url,configurable:!0,enumerable:!0,writable:!1}),r&&o.body&&r.register(o,new WeakRef(o.body));let n=new Response(a,{status:e.status,statusText:e.statusText,headers:e.headers});return Object.defineProperty(n,"url",{value:e.url,configurable:!0,enumerable:!0,writable:!1}),[o,n]}globalThis.FinalizationRegistry&&(r=new FinalizationRegistry(e=>{let t=e.deref();t&&!t.locked&&t.cancel("Response object has been garbage collected").then(eg)}));let em=new Set(["traceparent","tracestate"]);class ef{constructor(){let e,t;this.promise=new Promise((r,a)=>{e=r,t=a}),this.resolve=e,this.reject=t}}var ey=((b={}).APP_PAGE="APP_PAGE",b.APP_ROUTE="APP_ROUTE",b.PAGES="PAGES",b.FETCH="FETCH",b.REDIRECT="REDIRECT",b.IMAGE="IMAGE",b),eb=((v={}).APP_PAGE="APP_PAGE",v.APP_ROUTE="APP_ROUTE",v.PAGES="PAGES",v.FETCH="FETCH",v.IMAGE="IMAGE",v);function ev(){}new Uint8Array([60,104,116,109,108]),new Uint8Array([60,98,111,100,121]),new Uint8Array([60,47,104,101,97,100,62]),new Uint8Array([60,47,98,111,100,121,62]),new Uint8Array([60,47,104,116,109,108,62]),new Uint8Array([60,47,98,111,100,121,62,60,47,104,116,109,108,62]),new Uint8Array([60,109,101,116,97,32,110,97,109,101,61,34,194,171,110,120,116,45,105,99,111,110,194,187,34]);let ew=new TextEncoder;function eT(e){return new ReadableStream({start(t){t.enqueue(ew.encode(e)),t.close()}})}function eS(e){return new ReadableStream({start(t){t.enqueue(e),t.close()}})}async function eP(e,t){let r=new TextDecoder("utf-8",{fatal:!0}),a="";for await(let o of e){if(null==t?void 0:t.aborted)return a;a+=r.decode(o,{stream:!0})}return a+r.decode()}let ek=Symbol.for("NextInternalRequestMeta");function e_(e,t){let r=e[ek]||{};return"string"==typeof t?r[t]:r}function eE(e){let t=new Headers;for(let[r,a]of Object.entries(e))for(let e of Array.isArray(a)?a:[a])void 0!==e&&("number"==typeof e&&(e=e.toString()),t.append(r,e));return t}function eR(e){var t,r,a,o,n,i=[],s=0;function l(){for(;s<e.length&&/\s/.test(e.charAt(s));)s+=1;return s<e.length}for(;s<e.length;){for(t=s,n=!1;l();)if(","===(r=e.charAt(s))){for(a=s,s+=1,l(),o=s;s<e.length&&"="!==(r=e.charAt(s))&&";"!==r&&","!==r;)s+=1;s<e.length&&"="===e.charAt(s)?(n=!0,s=o,i.push(e.substring(t,a)),t=s):s=a+1}else s+=1;(!n||s>=e.length)&&i.push(e.substring(t,e.length))}return i}function ex(e){let t={},r=[];if(e)for(let[a,o]of e.entries())"set-cookie"===a.toLowerCase()?(r.push(...eR(o)),t[a]=1===r.length?r[0]:r):t[a]=o;return t}function eI(e){return e.replace(/\/$/,"")||"/"}function eA(e){let t=e.indexOf("#"),r=e.indexOf("?"),a=r>-1&&(t<0||r<t);return a||t>-1?{pathname:e.substring(0,a?r:t),query:a?e.substring(r,t>-1?t:void 0):"",hash:t>-1?e.slice(t):""}:{pathname:e,query:"",hash:""}}function eC(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:a,hash:o}=eA(e);return`${t}${r}${a}${o}`}function eO(e,t){if(!e.startsWith("/")||!t)return e;let{pathname:r,query:a,hash:o}=eA(e);return`${r}${t}${a}${o}`}function eN(e,t){if("string"!=typeof e)return!1;let{pathname:r}=eA(e);return r===t||r.startsWith(t+"/")}let eM=new WeakMap;function eD(e,t){let r;if(!t)return{pathname:e};let a=eM.get(t);a||(a=t.map(e=>e.toLowerCase()),eM.set(t,a));let o=e.split("/",2);if(!o[1])return{pathname:e};let n=o[1].toLowerCase(),i=a.indexOf(n);return i<0?{pathname:e}:(r=t[i],{pathname:e=e.slice(r.length+1)||"/",detectedLocale:r})}let eL=/(?!^https?:\/\/)(127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}|\[::1\]|localhost)/;function ej(e,t){return new URL(String(e).replace(eL,"localhost"),t&&String(t).replace(eL,"localhost"))}let eB=Symbol("NextURLInternal");class eH{constructor(e,t,r){let a,o;"object"==typeof t&&"pathname"in t||"string"==typeof t?(a=t,o=r||{}):o=r||t||{},this[eB]={url:ej(e,a??o.base),options:o,basePath:""},this.analyze()}analyze(){var e,t,r,a,o;let n=function(e,t){let{basePath:r,i18n:a,trailingSlash:o}=t.nextConfig??{},n={pathname:e,trailingSlash:"/"!==e?e.endsWith("/"):o};r&&eN(n.pathname,r)&&(n.pathname=function(e,t){if(!eN(e,t))return e;let r=e.slice(t.length);return r.startsWith("/")?r:`/${r}`}(n.pathname,r),n.basePath=r);let i=n.pathname;if(n.pathname.startsWith("/_next/data/")&&n.pathname.endsWith(".json")){let e=n.pathname.replace(/^\/_next\/data\//,"").replace(/\.json$/,"").split("/");n.buildId=e[0],i="index"!==e[1]?`/${e.slice(1).join("/")}`:"/",!0===t.parseData&&(n.pathname=i)}if(a){let e=t.i18nProvider?t.i18nProvider.analyze(n.pathname):eD(n.pathname,a.locales);n.locale=e.detectedLocale,n.pathname=e.pathname??n.pathname,!e.detectedLocale&&n.buildId&&(e=t.i18nProvider?t.i18nProvider.analyze(i):eD(i,a.locales)).detectedLocale&&(n.locale=e.detectedLocale)}return n}(this[eB].url.pathname,{nextConfig:this[eB].options.nextConfig,parseData:!0,i18nProvider:this[eB].options.i18nProvider}),i=function(e,t){let r;if(t?.host&&!Array.isArray(t.host))r=t.host.toString().split(":",1)[0];else{if(!e.hostname)return;r=e.hostname}return r.toLowerCase()}(this[eB].url,this[eB].options.headers);this[eB].domainLocale=this[eB].options.i18nProvider?this[eB].options.i18nProvider.detectDomainLocale(i):function(e,t,r){if(e){for(let a of(r&&(r=r.toLowerCase()),e))if(t===a.domain?.split(":",1)[0].toLowerCase()||r===a.defaultLocale.toLowerCase()||a.locales?.some(e=>e.toLowerCase()===r))return a}}(null==(t=this[eB].options.nextConfig)||null==(e=t.i18n)?void 0:e.domains,i);let s=(null==(r=this[eB].domainLocale)?void 0:r.defaultLocale)||(null==(o=this[eB].options.nextConfig)||null==(a=o.i18n)?void 0:a.defaultLocale);this[eB].url.pathname=n.pathname,this[eB].defaultLocale=s,this[eB].basePath=n.basePath??"",this[eB].buildId=n.buildId,this[eB].locale=n.locale??s,this[eB].trailingSlash=n.trailingSlash}formatPathname(){var e;let t;return t=function(e,t,r,a){if(!t||t===r)return e;let o=e.toLowerCase();return!a&&(eN(o,"/api")||eN(o,`/${t.toLowerCase()}`))?e:eC(e,`/${t}`)}((e={basePath:this[eB].basePath,buildId:this[eB].buildId,defaultLocale:this[eB].options.forceLocale?void 0:this[eB].defaultLocale,locale:this[eB].locale,pathname:this[eB].url.pathname,trailingSlash:this[eB].trailingSlash}).pathname,e.locale,e.buildId?void 0:e.defaultLocale,e.ignorePrefix),(e.buildId||!e.trailingSlash)&&(t=eI(t)),e.buildId&&(t=eO(eC(t,`/_next/data/${e.buildId}`),"/"===e.pathname?"index.json":".json")),t=eC(t,e.basePath),!e.buildId&&e.trailingSlash?t.endsWith("/")?t:eO(t,"/"):eI(t)}formatSearch(){return this[eB].url.search}get buildId(){return this[eB].buildId}set buildId(e){this[eB].buildId=e}get locale(){return this[eB].locale??""}set locale(e){var t,r;if(!this[eB].locale||!(null==(r=this[eB].options.nextConfig)||null==(t=r.i18n)?void 0:t.locales.includes(e)))throw Object.defineProperty(TypeError(`The NextURL configuration includes no locale "${e}"`),"__NEXT_ERROR_CODE",{value:"E597",enumerable:!1,configurable:!0});this[eB].locale=e}get defaultLocale(){return this[eB].defaultLocale}get domainLocale(){return this[eB].domainLocale}get searchParams(){return this[eB].url.searchParams}get host(){return this[eB].url.host}set host(e){this[eB].url.host=e}get hostname(){return this[eB].url.hostname}set hostname(e){this[eB].url.hostname=e}get port(){return this[eB].url.port}set port(e){this[eB].url.port=e}get protocol(){return this[eB].url.protocol}set protocol(e){this[eB].url.protocol=e}get href(){let e=this.formatPathname(),t=this.formatSearch();return`${this.protocol}//${this.host}${e}${t}${this.hash}`}set href(e){this[eB].url=ej(e),this.analyze()}get origin(){return this[eB].url.origin}get pathname(){return this[eB].url.pathname}set pathname(e){this[eB].url.pathname=e}get hash(){return this[eB].url.hash}set hash(e){this[eB].url.hash=e}get search(){return this[eB].url.search}set search(e){this[eB].url.search=e}get password(){return this[eB].url.password}set password(e){this[eB].url.password=e}get username(){return this[eB].url.username}set username(e){this[eB].url.username=e}get basePath(){return this[eB].basePath}set basePath(e){this[eB].basePath=e.startsWith("/")?e:`/${e}`}toString(){return this.href}toJSON(){return this.href}[Symbol.for("edge-runtime.inspect.custom")](){return{href:this.href,origin:this.origin,protocol:this.protocol,username:this.username,password:this.password,host:this.host,hostname:this.hostname,port:this.port,pathname:this.pathname,search:this.search,searchParams:this.searchParams,hash:this.hash}}clone(){return new eH(String(this),this[eB].options)}}class eF extends Error{constructor(){super(`The request.page has been deprecated in favour of \`URLPattern\`.
  Read more: https://nextjs.org/docs/messages/middleware-request-page
  `)}}class eW extends Error{constructor(){super(`The request.ua has been removed in favour of \`userAgent\` function.
  Read more: https://nextjs.org/docs/messages/middleware-parse-user-agent
  `)}}var eU=e.i(19481);let eG=Symbol("internal request");class eY extends Request{constructor(e,t={}){const r="string"!=typeof e&&"url"in e?e.url:String(e);!function(e){try{String(new URL(String(e)))}catch(t){throw Object.defineProperty(Error(`URL is malformed "${String(e)}". Please use only absolute URLs - https://nextjs.org/docs/messages/middleware-relative-urls`,{cause:t}),"__NEXT_ERROR_CODE",{value:"E61",enumerable:!1,configurable:!0})}}(r),t.body&&"half"!==t.duplex&&(t.duplex="half"),e instanceof Request?super(e,t):super(r,t);const a=new eH(r,{headers:ex(this.headers),nextConfig:t.nextConfig});this[eG]={cookies:new eU.RequestCookies(this.headers),nextUrl:a,url:a.toString()}}[Symbol.for("edge-runtime.inspect.custom")](){return{cookies:this.cookies,nextUrl:this.nextUrl,url:this.url,bodyUsed:this.bodyUsed,cache:this.cache,credentials:this.credentials,destination:this.destination,headers:Object.fromEntries(this.headers),integrity:this.integrity,keepalive:this.keepalive,method:this.method,mode:this.mode,redirect:this.redirect,referrer:this.referrer,referrerPolicy:this.referrerPolicy,signal:this.signal}}get cookies(){return this[eG].cookies}get nextUrl(){return this[eG].nextUrl}get page(){throw new eF}get ua(){throw new eW}get url(){return this[eG].url}}let e$="ResponseAborted";class eV extends Error{constructor(...e){super(...e),this.name=e$}}function eq(e){let t=new AbortController;return e.once("close",()=>{e.writableFinished||t.abort(new eV)}),t}class ez{static fromBaseNextRequest(e,t){return ez.fromNodeNextRequest(e,t)}static fromNodeNextRequest(e,t){let r,a=null;if("GET"!==e.method&&"HEAD"!==e.method&&e.body&&(a=e.body),e.url.startsWith("http"))r=new URL(e.url);else{let t=e_(e,"initURL");r=t&&t.startsWith("http")?new URL(e.url,t):new URL(e.url,"http://n")}return new eY(r,{method:e.method,headers:eE(e.headers),duplex:"half",signal:t,...t.aborted?{}:{body:a}})}static fromWebNextRequest(e){let t=null;return"GET"!==e.method&&"HEAD"!==e.method&&(t=e.body),new eY(e.url,{method:e.method,headers:eE(e.headers),duplex:"half",signal:e.request.signal,...e.request.signal.aborted?{}:{body:t}})}}let eX=0,eK=0,eJ=0;function eQ(e){return(null==e?void 0:e.name)==="AbortError"||(null==e?void 0:e.name)===e$}async function eZ(e,t,r){try{let{errored:a,destroyed:o}=t;if(a||o)return;let n=eq(t),i=function(e,t){let r=!1,a=new ef;function o(){a.resolve()}e.on("drain",o),e.once("close",()=>{e.off("drain",o),a.resolve()});let n=new ef;return e.once("finish",()=>{n.resolve()}),new WritableStream({write:async t=>{if(!r){if(r=!0,"performance"in globalThis&&process.env.NEXT_OTEL_PERFORMANCE_PREFIX){let e=function(e={}){let t=0===eX?void 0:{clientComponentLoadStart:eX,clientComponentLoadTimes:eK,clientComponentLoadCount:eJ};return e.reset&&(eX=0,eK=0,eJ=0),t}();e&&performance.measure(`${process.env.NEXT_OTEL_PERFORMANCE_PREFIX}:next-client-component-loading`,{start:e.clientComponentLoadStart,end:e.clientComponentLoadStart+e.clientComponentLoadTimes})}e.flushHeaders(),J().trace(R.startResponse,{spanName:"start response"},()=>void 0)}try{let r=e.write(t);"flush"in e&&"function"==typeof e.flush&&e.flush(),r||(await a.promise,a=new ef)}catch(t){throw e.end(),Object.defineProperty(Error("failed to write chunk to response",{cause:t}),"__NEXT_ERROR_CODE",{value:"E321",enumerable:!1,configurable:!0})}},abort:t=>{e.writableFinished||e.destroy(t)},close:async()=>{if(t&&await t,!e.writableFinished)return e.end(),n.promise}})}(t,r);await e.pipeTo(i,{signal:n.signal})}catch(e){if(eQ(e))return;throw Object.defineProperty(Error("failed to pipe response",{cause:e}),"__NEXT_ERROR_CODE",{value:"E180",enumerable:!1,configurable:!0})}}class e0{static #e=this.EMPTY=new e0(null,{metadata:{},contentType:null});static fromStatic(e,t){return new e0(e,{metadata:{},contentType:t})}constructor(e,{contentType:t,waitUntil:r,metadata:a}){this.response=e,this.contentType=t,this.metadata=a,this.waitUntil=r}assignMetadata(e){Object.assign(this.metadata,e)}get isNull(){return null===this.response}get isDynamic(){return"string"!=typeof this.response}toUnchunkedString(e=!1){if(null===this.response)return"";if("string"!=typeof this.response){if(!e)throw Object.defineProperty(new eu("dynamic responses cannot be unchunked. This is a bug in Next.js"),"__NEXT_ERROR_CODE",{value:"E732",enumerable:!1,configurable:!0});return eP(this.readable)}return this.response}get readable(){return null===this.response?new ReadableStream({start(e){e.close()}}):"string"==typeof this.response?eT(this.response):Buffer.isBuffer(this.response)?eS(this.response):Array.isArray(this.response)?function(...e){if(0===e.length)return new ReadableStream({start(e){e.close()}});if(1===e.length)return e[0];let{readable:t,writable:r}=new TransformStream,a=e[0].pipeTo(r,{preventClose:!0}),o=1;for(;o<e.length-1;o++){let t=e[o];a=a.then(()=>t.pipeTo(r,{preventClose:!0}))}let n=e[o];return(a=a.then(()=>n.pipeTo(r))).catch(ev),t}(...this.response):this.response}coerce(){return null===this.response?[]:"string"==typeof this.response?[eT(this.response)]:Array.isArray(this.response)?this.response:Buffer.isBuffer(this.response)?[eS(this.response)]:[this.response]}unshift(e){this.response=this.coerce(),this.response.unshift(e)}push(e){this.response=this.coerce(),this.response.push(e)}async pipeTo(e){try{await this.readable.pipeTo(e,{preventClose:!0}),this.waitUntil&&await this.waitUntil,await e.close()}catch(t){if(eQ(t))return void await e.abort(t);throw t}}async pipeToNodeResponse(e){await eZ(this.readable,e,this.waitUntil)}}let e1=Symbol.for("next-patch");function e2(e,t){e.shouldTrackFetchMetrics&&(e.fetchMetrics??=[],e.fetchMetrics.push({...t,end:performance.timeOrigin+performance.now(),idx:e.nextFetchId||0}))}async function e3(e,t,r,a,o,n){let i=await e.arrayBuffer(),s={headers:Object.fromEntries(e.headers.entries()),body:Buffer.from(i).toString("base64"),status:e.status,url:e.url};return r&&await a.set(t,{kind:ey.FETCH,data:s,revalidate:o},r),await n(),new Response(i,{headers:e.headers,status:e.status,statusText:e.statusText})}async function e4(e,t,r,a,o,n,i,s,l){let[u,c]=ep(t),h=u.arrayBuffer().then(async e=>{let t=Buffer.from(e),s={headers:Object.fromEntries(u.headers.entries()),body:t.toString("base64"),status:u.status,url:u.url};null==n||n.set(r,s),a&&await o.set(r,{kind:ey.FETCH,data:s,revalidate:i},a)}).catch(e=>console.warn("Failed to set fetch cache",s,e)).finally(l),d=`cache-set-${r}`,g=e.pendingRevalidates??={},p=Promise.resolve();return d in g&&(p=g[d]),g[d]=p.then(()=>h).finally(()=>{(null==g?void 0:g[d])&&delete g[d]}),c}let e6=null;function e5(e){var t;return(t=e.split("/").reduce((e,t,r,a)=>t?"("===t[0]&&t.endsWith(")")||"@"===t[0]||("page"===t||"route"===t)&&r===a.length-1?e:`${e}/${t}`:e,"")).startsWith("/")?t:`/${t}`}let e9=Symbol.for("next.server.manifests"),e8=globalThis;class e7{static get(e,t,r){let a=Reflect.get(e,t,r);return"function"==typeof a?a.bind(e):a}static set(e,t,r,a){return Reflect.set(e,t,r,a)}static has(e,t){return Reflect.has(e,t)}static deleteProperty(e,t){return Reflect.deleteProperty(e,t)}}class te extends Error{constructor(){super("Headers cannot be modified. Read more: https://nextjs.org/docs/app/api-reference/functions/headers")}static callable(){throw new te}}class tt extends Headers{constructor(e){super(),this.headers=new Proxy(e,{get(t,r,a){if("symbol"==typeof r)return e7.get(t,r,a);let o=r.toLowerCase(),n=Object.keys(e).find(e=>e.toLowerCase()===o);if(void 0!==n)return e7.get(t,n,a)},set(t,r,a,o){if("symbol"==typeof r)return e7.set(t,r,a,o);let n=r.toLowerCase(),i=Object.keys(e).find(e=>e.toLowerCase()===n);return e7.set(t,i??r,a,o)},has(t,r){if("symbol"==typeof r)return e7.has(t,r);let a=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===a);return void 0!==o&&e7.has(t,o)},deleteProperty(t,r){if("symbol"==typeof r)return e7.deleteProperty(t,r);let a=r.toLowerCase(),o=Object.keys(e).find(e=>e.toLowerCase()===a);return void 0===o||e7.deleteProperty(t,o)}})}static seal(e){return new Proxy(e,{get(e,t,r){switch(t){case"append":case"delete":case"set":return te.callable;default:return e7.get(e,t,r)}}})}merge(e){return Array.isArray(e)?e.join(", "):e}static from(e){return e instanceof Headers?e:new tt(e)}append(e,t){let r=this.headers[e];"string"==typeof r?this.headers[e]=[r,t]:Array.isArray(r)?r.push(t):this.headers[e]=t}delete(e){delete this.headers[e]}get(e){let t=this.headers[e];return void 0!==t?this.merge(t):null}has(e){return void 0!==this.headers[e]}set(e,t){this.headers[e]=t}forEach(e,t){for(let[r,a]of this.entries())e.call(t,a,r,this)}*entries(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase(),r=this.get(t);yield[t,r]}}*keys(){for(let e of Object.keys(this.headers)){let t=e.toLowerCase();yield t}}*values(){for(let e of Object.keys(this.headers)){let t=this.get(e);yield t}}[Symbol.iterator](){return this.entries()}}Symbol("__next_preview_data");let tr=Symbol("__prerender_bypass");var ta=((w={})[w.SeeOther=303]="SeeOther",w[w.TemporaryRedirect=307]="TemporaryRedirect",w[w.PermanentRedirect=308]="PermanentRedirect",w);class to{constructor(e,t,r){this.method=e,this.url=t,this.body=r}get cookies(){var t;return this._cookies?this._cookies:this._cookies=(t=this.headers,function(){let{cookie:r}=t;if(!r)return{};let{parse:a}=e.r(93118);return a(Array.isArray(r)?r.join("; "):r)})()}}class tn{constructor(e){this.destination=e}redirect(e,t){return this.setHeader("Location",e),this.statusCode=t,t===ta.PermanentRedirect&&this.setHeader("Refresh",`0;url=${e}`),this}}class ti extends to{static #e=T=ek;constructor(e){var t;super(e.method.toUpperCase(),e.url,e),this._req=e,this.headers=this._req.headers,this.fetchMetrics=null==(t=this._req)?void 0:t.fetchMetrics,this[T]=this._req[ek]||{},this.streaming=!1}get originalRequest(){return this._req[ek]=this[ek],this._req.url=this.url,this._req.cookies=this.cookies,this._req}set originalRequest(e){this._req=e}stream(){if(this.streaming)throw Object.defineProperty(Error("Invariant: NodeNextRequest.stream() can only be called once"),"__NEXT_ERROR_CODE",{value:"E467",enumerable:!1,configurable:!0});return this.streaming=!0,new ReadableStream({start:e=>{this._req.on("data",t=>{e.enqueue(new Uint8Array(t))}),this._req.on("end",()=>{e.close()}),this._req.on("error",t=>{e.error(t)})}})}}class ts extends tn{get originalResponse(){return tr in this&&(this._res[tr]=this[tr]),this._res}constructor(e){super(e),this._res=e,this.textBody=void 0}get sent(){return this._res.finished||this._res.headersSent}get statusCode(){return this._res.statusCode}set statusCode(e){this._res.statusCode=e}get statusMessage(){return this._res.statusMessage}set statusMessage(e){this._res.statusMessage=e}setHeader(e,t){return this._res.setHeader(e,t),this}removeHeader(e){return this._res.removeHeader(e),this}getHeaderValues(e){let t=this._res.getHeader(e);if(void 0!==t)return(Array.isArray(t)?t:[t]).map(e=>e.toString())}hasHeader(e){return this._res.hasHeader(e)}getHeader(e){let t=this.getHeaderValues(e);return Array.isArray(t)?t.join(","):void 0}getHeaders(){return this._res.getHeaders()}appendHeader(e,t){let r=this.getHeaderValues(e)??[];return r.includes(t)||this._res.setHeader(e,[...r,t]),this}body(e){return this.textBody=e,this}send(){this._res.end(this.textBody)}onClose(e){this.originalResponse.on("close",e)}}function tl(e){return e.isOnDemandRevalidate?"on-demand":e.isStaticGeneration?"stale":void 0}async function tu(e,t,r,a){{var o;t.statusCode=r.status,t.statusMessage=r.statusText;let n=["set-cookie","www-authenticate","proxy-authenticate","vary"];null==(o=r.headers)||o.forEach((e,r)=>{if("x-middleware-set-cookie"!==r.toLowerCase())if("set-cookie"===r.toLowerCase())for(let a of eR(e))t.appendHeader(r,a);else{let a=void 0!==t.getHeader(r);(n.includes(r.toLowerCase())||!a)&&t.appendHeader(r,e)}});let{originalResponse:i}=t;r.body&&"HEAD"!==e.method?await eZ(r.body,i,a):i.end()}}var tc=e.i(93695),th=e.i(89171);let td=[{slug:"spark-of-life-weeks-1-4",title:"The Ultimate Guide to Conception & Weeks 1-4: What to Expect in 2026",excerpt:"The masterclass on conception. From optimizing egg quality and sperm health to the subtle signs of implantation. A 2000-word comprehensive guide.",category:"Health",author:"NexaWell Team",date:"January 4, 2026",readTime:"15 min read",heroImage:"/images/blog/pregnancy-week-1-4.png",content:`
## The Hidden Journey: Before the Positive Test
The journey of pregnancy begins famously *before* you are technically pregnant. In the medical world, "Week 1" actually starts on the first day of your last menstrual period (LMP). By the time you get that positive test, you are likely already 4 weeks pregnant!

This guide is your **2026 Masterclass on Conception**. We aren't just covering the basics; we are diving deep into egg quality, male fertility, environmental toxins, and the psychology of the "Two Week Wait".

---

## Part 1: The Biology of "Trying"
To maximize your chances, you need to become an expert on your own cycle. The textbook "28-day cycle with ovulation on day 14" is a myth for many women.

### 🗓️ Understanding Your Phases
1.  **Menstruation (Days 1-5)**: The shedding of the uterine lining. This is your reset button.
2.  **Follicular Phase (Days 1-14)**: Your pituitary gland releases FSH (Follicle Stimulating Hormone). Your ovaries are busy recruiting follicles, each containing an immature egg. One "dominant follicle" will win the race.
    *   *Optimization Tip*: Focus on anti-inflammatory foods now to build a healthy lining early.
3.  **Ovulation (Day 14 +/-)**: The main event. Luteinizing Hormone (LH) surges, triggering the release of the egg.
    *   *The Window*: The egg lives for only 12-24 hours. Sperm lives for 5 days. **The goal is to have sperm waiting for the egg.**
4.  **Luteal Phase (Days 15-28)**: The follicle that released the egg transforms into the *Corpus Luteum*, pumping out Progesterone. This hormone warms your body and thickens the lining to hold a pregnancy.

### 🌡️ Tracking Like a Pro
Don't guess. Use 2026 tech and biology.
*   **Basal Body Temperature (BBT)**: Your resting temp rises by about 0.5-1.0\xb0F *after* ovulation due to progesterone. Tracking this confirms you actually ovulated.
*   **Cervical Mucus (CM)**: You are looking for "Egg White CM"—stretchy, clear fluid. This is sperm-friendly superhighway. If it's dry or sticky, sperm die quickly.
*   **LH Strips**: Cheap paper strips tell you when your LH surge is happening. Start testing 2x a day once the line gets dark.

---

## Part 2: It Takes Two - Male Fertility
50% of fertility struggles are male-factor. Yet, men often get checked last. Let's fix that.

### 🚀 Sperm Health 101
Sperm regeneration takes about 72 days. What he did 3 months ago affects the sperm today.
*   **Heat**: The testicles need to be cooler than the body. Avoid saunas, hot tubs, and tight briefs.
*   **Oxidative Stress**: Sperm DNA is fragile. Smoking, excessive alcohol, and processed foods cause fragmentation.
*   **Supplements for Him**:
    *   **CoQ10**: Improves motility (swimming speed).
    *   **Zinc**: Essential for testosterone production.
    *   **Vitamin C/E**: Antioxidants that protect DNA.

---

## Part 3: The "Implantation Diet" & Lifestyle
Your baby starts as a single cell. Fueling this rapid division is critical.

### 🥗 Nutrient Density
*   **Folate vs. Folic Acid**: This is the #1 nutrient. It prevents neural tube defects.
    *   *Science Update*: Up to 40% of people have the MTHFR gene mutation, making it hard to process synthetic Folic Acid. Switch to **Methylfolate (5-MTHF)** today.
*   **Lipids**: Hormones are made of fat. Low-fat diets can wreck ovulation. Eat avocados, salmon, and olive oil.
*   **The Pineapple Trick**: An old wives' tale with science. Pineapple core contains **Bromelain**, an enzyme that acts as a mild blood thinner and anti-inflammatory, potentially aiding implantation. Eat the core for 5 days post-ovulation.

### 🧘‍♀️ The Stress Connection
Cortisol steals from Progesterone. They are made from the same "mother hormone" (Pregnenolone). If you are stressed, your body prioritizes survival (Cortisol) over reproduction (Progesterone). This is the "Pregnenolone Steal".
*   **Action**: Gentle yoga, meditation, and *sleep* are not luxuries; they are fertility treatments.

---

## Part 4: The 2-Week Wait (TWW) Survival Guide
The time between ovulation and your expected period is a psychological marathon.

### 🔍 Early Signs (Before the BFP)
"BFP" stands for "Big Fat Positive". Before the test turns, look out for:
1.  **Implantation Bleeding**: Very light spotting (pink/brown) around 6-12 DPO. It lasts hours, not days.
2.  **Vivid Dreams**: Hormones impact your REM cycles immediately.
3.  **Dysgeusia**: A metallic taste in your mouth. Like you licked a coin.
4.  **Breast Soreness**: Often sharper and more painful than regular PMS, extending to the armpit.

### ⚠️ Chemical Pregnancies
It's important to know that up to 25% of pregnancies end before they clinically begin. This is a "chemical pregnancy".
*   *What happens*: The egg fertilizes and implants briefly, producing enough HCG to turn a sensitive test positive. But due to chromosomal issues, it stops developing.
*   *The emotional toll*: It looks like a late period, but it is a loss. Give yourself grace. 

---

## Part 5: Environmental Toxins
In 2026, we are more aware of "Endocrine Disruptors"—chemicals that mimic hormones and confuse your body.

### 🚫 The "Throw Out" List
*   **BPA/BPS**: Found in receipts and plastic water bottles. Switch to glass or stainless steel.
*   **Phthalates**: Found in "Fragrance" (perfume, candles, laundry detergent). These are linked to lower sperm count and ovulation issues.
*   **Parabens**: Preservatives in makeup. Look for "Paraben-Free".

---

## FAQ: Your Burning Questions

**Q: Can I drink coffee?**
A: Data suggests <200mg (1 strong cup) is safe. High amounts are linked to miscarriage.

**Q: When should I test?**
A: Implantation happens days 6-12. HCG needs 2 days to double. Testing before **12 DPO** (Days Past Ovulation) typically results in a false negative or unnecessary heartache over a chemical pregnancy. Wait for your missed period if you can!

**Q: Is cramping normal?**
A: Yes! The uterus is a muscle. Implantation can cause cramping. Stretching can cause cramping. As long as it's not severe and accompanied by heavy bleeding, it's usually benign.

![Illustration of cellular division and early embryo](/images/blog/embryo-illustration.png)
    `},{slug:"first-trimester-survival-weeks-5-12",title:"First Trimester Survival Guide: Morning Sickness, Scans & Nuance",excerpt:"The exhaustive guide to the first 12 weeks. From managing Hyperemesis Gravidarum to the science of 'Baby Brain' and navigating the NIPT results. 2000-word guide.",category:"Health",author:"NexaWell Team",date:"January 6, 2026",readTime:"18 min read",heroImage:"/images/blog/pregnancy-week-5-12.png",content:`
## The "Invisible" Marathon
Welcome to the First Trimester. You might not look pregnant, but your body is doing the hardest work of the entire 9 months: building the placenta and forming every single organ your baby needs from scratch. Your Basal Metabolic Rate (BMR) skyrockets, which explains why you are exhausted enough to sleep on a concrete floor.

This comprehensive guide covers everything from the debilitating nausea to the anxiety of "waiting for the safe zone."

---

## Part 1: Week-by-Week Deep Dive

### Week 5: The Spark
*   **Baby**: Size of an appleseed. The neural tube (brain/spinal cord) is closing *right now*.
*   **You**: You might just have a missed period. Or you might feel like you have the flu.
*   **Science**: The yolk sac is currently feeding the baby while the placenta forms.

### Week 6: The Heartbeat
*   **Baby**: Size of a sweet pea. The heart starts beating around 110-160 bpm. It’s tiny but furious.
*   **You**: "Morning" sickness often hits like a truck. Food aversions are real.
*   **Tip**: If you can't stand the smell of your kitchen, banish yourself. Cooking smells are the #1 trigger.

### Week 8: The Gummi Bear
*   **Baby**: Size of a kidney bean. Fingers and toes are un-webbing. It looks like a tiny gummy bear.
*   **You**: Bloating. Your uterus is expanding to the size of a grapefruit, pushing your intestines up and out. Hello, "Endo Belly" look-alike.

### Week 10: The Embryo Graduates
*   **Baby**: Size of a prune. Officially a "Fetus". Most critical development is done; now it's about growth.
*   **You**: HCG levels peak here. This is often the peak of nausea. Hang in there.

### Week 12: The Light at the End
*   **Baby**: Size of a lime. Kidneys are working (baby is peeing!).
*   **You**: The placenta takes over hormone production. For many, nausea begins to fade.

---

## Part 2: Mastering Hyperemesis & Nausea
Let's distinguish between "morning sickness" and Hyperemesis Gravidarum (HG).
*   **Morning Sickness**: Nausea, vomiting 1-2 times a day, can keep fluids down.
*   **HG**: Vomiting >3 times a day, weight loss, dehydration. *This requires medical intervention.*

### The Advanced Survival Toolkit
1.  **The "Empty Stomach" Rule**: Acid makes nausea worse. Never let your stomach get completely empty. Keep saltines on your nightstand. Eat *before* you lift your head off the pillow.
2.  **Unisom + B6 Protocols**:
    *   **Vitamin B6**: 25mg, 3 times a day.
    *   **Doxylamine (Unisom)**: 1/2 tablet at night. It helps you sleep and curbs next-day nausea.
    *   *Note*: Always check with your provider.
3.  **Protein Anchors**: Carbs (toast) settle the stomach, but Protein (cheese, nuts) keeps blood sugar stable. The "cycle of nausea" is often a blood sugar crash.
4.  **Temperature Therapy**: Some women find ice-cold drinks help; others need warm broth. Extremes often work better than room temp.

---

## Part 3: The Science of Screening (NIPT & NT)
Technology in 2026 allows us to know so much, so early.

### The Dating Ultraound (8-10 Weeks)
*   **Goal**: Confirm heartbeat (viability) and measure the "Crown Rump Length" (CRL) to determine your Due Date.
*   **Reality Check**: It is a transvaginal ultrasound. It’s not glamorous, but it’s the best way to see the tiny bean.

### NIPT (Non-Invasive Prenatal Testing)
*   **What it is**: A simple blood draw from your arm. It analyzes "Cell-Free DNA" (cfDNA)—fragments of the baby's placenta floating in *your* blood.
*   **Accuracy**: >99% for Down Syndrome (Trisomy 21), Trisomy 18, and Trisomy 13.
*   **The Gender**: It looks for Y chromosomes. If Y is present = Boy. If no Y = Girl.
*   **When**: Anytime after 10 weeks.
*   **Cost**: Insurance often covers it for women >35. For others, cash prices range from $99-$299 depending on the lab (Natera, MaterniT21, etc.).

---

## Part 4: Mental Health & "Baby Brain"
It's not just a joke; your brain actually changes.
*   **Gray Matter**: Studies show a reduction in gray matter volume in social cognition areas. Scientists believe this "pruning" makes you more efficient at reading your baby's non-verbal cues. You are losing "useless" info to make room for "survival" info.
*   **The Anxiety**: The odds of miscarriage drop significantly after seeing a heartbeat (to <5%).
*   **Depression**: Pre-partum depression is real. If you feel numb, disconnected, or rageful (not just sad), tell your midwife.

---

## Part 5: Relationship Survival
The first trimester is hard on partners too.
*   **The Disconnect**: You feel sick and exhausted. He sees nothing different. The baby isn't "real" to him yet.
*   **Libido**: Yours might plummet (nausea is not sexy). Or it might spike due to blood flow. Both are normal.
*   **Advice**: Explain the "Spoon Theory". You start the day with 5 spoons of energy. Work takes 3. Showering takes 1. You have 1 spoon left for the relationship. Be honest about your capacity.

---

## Part 6: Nutrition - "Survival Mode"
Forget the Instagram salads. If you are surviving on buttered noodles, that is fine.
*   **Folate**: Keep taking that prenatal. It matters more than the broccoli right now.
*   **Hydration**: If you vomit, you lose electrolytes. Coconut water, Pedialyte, or bone broth are essential. Dehydration causes uterine irritability (cramps).
*   **Aversions**: Listen to them. If chicken smells like death, don't force it. Your body might be rejecting potential pathogens (an evolutionary theory).

![Illustration of Cat-Cow Pose](/images/blog/cat-cow-illustration.png)

## FAQ: First Trimester

**Q: Is spotting normal?**
A: Yes. The cervix is highly vascular and sensitive. Sex or an exam can cause spotting. Brown blood = old blood (safe). Bright red + cramps = call doctor.

**Q: Can I dye my hair?**
A: Most experts say wait until the Second Trimester, or use ammonia-free dye in a well-ventilated room.

**Q: When should I tell people?**
A: The old rule was "wait for 12 weeks". The new rule: **Tell people who would support you through a loss.** If you miscarried, would you want support or privacy? That is your answer.

    `},{slug:"golden-period-second-trimester-weeks-13-27",title:"The Golden Trimester: Anatomy Scans, Gender Reveals & Baby Moons",excerpt:"The fog lifts! From the 20-week anatomy scan to preventing Diastasis Recti and planning your Baby Moon. The comprehensive 2000-word guide.",category:"Health",author:"NexaWell Team",date:"January 8, 2026",readTime:"15 min read",heroImage:"/images/blog/pregnancy-week-13-27.png",content:`
## Welcome to the Honey-Moon Phase
For most women, weeks 13-27 are pure magic. The nausea fades, the energy returns, and you finally get that cute "bump" without looking just "bloated." The placenta is fully operational, taking over hormone production and giving you a break.

But don't be fooled—massive development is happening. This is the optimal time for travel, planning, and physical prep.

---

## Part 1: Month-by-Month Breakdown

### Month 4 (Weeks 13-16): The Pop
*   **Baby**: Baby grows lanugo (fine hair) and fingerprints form.
*   **You**: You might start showing. Your uterus rises out of the pelvis.
*   **Symptom**: "Lightning Crotch" (sharp pelvic pain) as ligaments stretch.

### Month 5 (Weeks 17-21): The Quickening
*   **Baby**: Hearing develops. They can hear your voice!
*   **You**: **Movement!** It feels like flutters, bubbles, or popcorn.
*   **Milestone**: The Anatomy Scan (see below).

### Month 6 (Weeks 22-27): Viability
*   **Baby**: Week 24 is "Viability"—if born now, doctors would intervene. Lungs are practicing breathing movements.
*   **You**: Back pain increases as the center of gravity shifts.

---

## Part 2: The Big One - 20-Week Anatomy Scan
This isn't just a fun photo op. It's a rigorous medical exam checking the structural integrity of your baby.
**Duration**: 45-60 minutes.

### The Checklist
1.  **Brain**: Checking the cerebellum (balance) and ventricles (fluid).
2.  **Heart**: Verifying 4 chambers, the aortic arch, and verifying blood flow is unidirectional.
3.  **Spine**: Checking for Spina Bifida (open spine).
4.  **Face**: Ruling out cleft lip/palate (cleft palate is harder to see).
5.  **Kidneys/Stomach**: Ensuring they are visible and working (fluid in bladder = functioning kidneys).
6.  **Placenta Position**: Is it "Anterior" (front), "Posterior" (back), or "Previa" (covering the cervix)?

**Pro Tip**: Drink a glass of orange juice 30 minutes before. The sugar makes the baby active, helping the tech get all the angles.

---

## Part 3: The "Baby Moon" Travel Guide
You have a golden window for travel between weeks 18-28. Before you are too big to sit in a plane seat, and after the nausea is gone.

### Flying While Pregnant
*   **Safety**: Totally safe for low-risk pregnancies. Cabin pressure is fine.
*   **Clot Risk**: Pregnancy increases blood clot risk by 5x.
    *   *Action*: Wear **Medical Grade Compression Socks** (20-30 mmHg).
    *   *Action*: Get up and walk the aisle every 60 minutes. No exceptions.
    *   *Action*: Hydrate furiously. Plane air is dry.

### Destination
*   **Zika Virus**: Check the CDC map. Avoid tropical zones with active outbreaks.
*   **Medical Care**: Don't go to a remote island with no hospital. Ensure there is a Level 3 NICU within range, just in case.

---

## Part 4: Second Trimester Nutrition - Fueling the Growth
Baby gains the most weight now.
*   **Iron**: Your blood volume increases by 50% to support the baby. This dilutes your red blood cells (physiologic anemia).
    *   *Eat*: Steak, liver, lentils, spinach, fortified cereal.
    *   *Pairing*: Always eat Iron with Vitamin C (oranges, peppers) to increase absorption by 300%.
    *   *Avoid*: Calcium (dairy) with Iron meals—it blocks absorption.
*   **Omega-3s (DHA)**: Critical for that developing brain. Salmon (low mercury) or algae-based supplements.

---

## Part 5: Pelvic Health & Fitness
You are training for the biggest physical event of your life. Don't just sit on the couch.

### Preventing Diastasis Recti
Abs separate to make room for the baby. This is normal. But we want to prevent *severe* separation.
*   **Stop**: Crunches, sit-ups, and double leg lifts. They cause "coning" (a ridge popping out of your tummy).
*   **Start**: Transverse Abdominis (TVA) breathing. "Hug the baby" with your muscles on the exhale.

### Pelvic Floor Therapy
*   **Consult**: See a Pelvic Floor Physical Therapist (PFPT) *now*, not just after birth. They can assess if your pelvic floor is "too tight" (hypertonic) or "too loose" (hypotonic).
*   **Myth**: "Just do Kegels."
    *   *Fact*: If you have a tight pelvic floor, Kegels make it worse and can stall labor. You need to learn to *relax* (lengthen) the pelvic floor for birth.

![Illustration of correct squat form](/images/blog/squat-illustration.png)

## Part 6: Planning - The Registry
Start building your registry now. It takes longer than you think.
*   **Needs**: Car seat, safe sleep space (bassinet), diapers.
*   **Don't Need**: Wipe warmer, fancy bedding (unsafe), baby shoes (useless).
*   **Tech**: Nanit or Owlet monitors? Research them now.

## Common Symptoms
*   **Round Ligament Pain**: Sharp, stabbing pains in your lower belly/groin when you stand up fast. It's the uterine "suspenders" stretching.
    *   *Fix*: Belly bands and moving slower.
*   **Leg Cramps**: Charlie horses at 3 AM. Usually a magnesium deficiency.
    *   *Fix*: Magnesium Glycinate supplements or Magnesium spray.
    `},{slug:"home-stretch-third-trimester-weeks-28-36",title:"Third Trimester Roadmap: Preventing C-Sections & Final Prep",excerpt:"The final lap. From the Glucose Tolerance Test to optimal positioning protocol (Spinning Babies) and writing a Birth Plan that actually works. The 2000-word guide.",category:"Health",author:"NexaWell Team",date:"January 10, 2026",readTime:"16 min read",heroImage:"/images/blog/pregnancy-week-28-36.png",content:`
## The Home Stretch
You are in the final lap! Weeks 28-36 are unique. You are "very pregnant," but not yet "about to pop." The baby is gaining fat rapidly, and your body is producing *Relaxin* to loosen your joints for birth.

This guide covers the critical medical tests, the biomechanics of birth positioning, and the logistics of preparing your life for a newborn.

---

## Part 1: Medical Milestones

### 🧪 The Glucose Tolerance Test (GD)
Usually done between 24-28 weeks.
*   **The Test**: You drink a sugary drink (Glucola - 50g) and get blood drawn 1 hour later.
*   **The "Fresh Test"**: In 2026, many providers offer a natural alternative made of organic lemon and dextrose, free of dyes. Ask for it!
*   **Why strict?**: Unmanaged Gestational Diabetes can lead to Macrosomia (large baby), which increases C-Section risk.
*   **Hack**: Eat a high-protein breakfast (eggs) before the test to stabilize your baseline blood sugar. Do *not* eat a donut.

### 💉 RhoGAM Shot
If you have a negative blood type (e.g., O-), you will get a RhoGAM shot around week 28 to prevent your body from creating antibodies against the baby's blood.

### 🦠 GBS (Group B Strep)
Around week 36, you'll be swabbed for GBS.
*   **Fact**: 25% of healthy women carry this bacteria naturally in their gut/vagina. It is harmless to you.
*   **Risk**: It can pass to the baby during birth, causing sepsis (rare but serious).
*   **The Plan**: If positive, you'll get IV Antibiotics (Penicillin) every 4 hours during active labor.
*   **Probiotic Protocol**: Unofficial studies suggest taking specific probiotics (L. rhamnosus & L. reuteri) from week 32 *might* lower the chance of a positive result.

---

## Part 2: Positioning is Power (Spinning Babies\xae)
The #1 way to lower your C-Section risk is ensuring the baby is in the **Left Occiput Anterior (LOA)** position (head down, facing your back).

### The "Breech" Fear
At 28 weeks, 25% of babies are breech (feet down). By 36 weeks, only 3-4% are. Don't panic yet.

### Daily Routine for Optimal Positioning
1.  **Forward Leaning Inversion**: Carefully kneel on a couch and lower your hands to the floor for 30 seconds. (Ask your provider first!). This untwists distinct uterine ligaments, giving baby more room to flip.
2.  **Pelvic Tilts**: Cat-cow motions on hands and knees help disengage the baby from a "sunny side up" (posterior) position.
3.  **Sit on Your Sitz Bones**: Stop "couch slouching". Reclining back encourages the baby's heavy spine to rotate against your spine (Posterior). Sit on a birth ball instead.

---

## Part 3: Kick Counts - You are the Monitor
Starting at week 28, you become the primary monitor of your baby's well-being.
*   **The Rule**: Pick a time when baby is active (usually after dinner). You want to feel **10 movements in 2 hours**.
*   **What counts**: Kicks, swishes, rolls.
*   **What DOESN'T count**: Hiccups (rhythmic hopping).
*   **Red Flag**: If movement decreases or changes drastically, go to Labor & Delivery *immediately*. Do not drink juice and wait 2 hours.
    *   *Motto*: "Better to feel silly at the hospital than sorry at home."

---

## Part 4: The Birth Plan (Preferences)
Doctors hate 4-page birth plans. Nurses love 1-page bullet points. Use the concept of "Preferences" – birth is unpredictable.

### The Template
**Environment**
*   [ ] Dim lights preferred?
*   [ ] Music allowed? (Bring a Bluetooth speaker).
*   [ ] Limited students/residents?

**Pain Management**
*   [ ] Epidural: "Offer it immediately" OR "Don't offer unless I ask."
*   [ ] Nitrous Oxide (Laughing Gas) available?
*   [ ] Hydrotherapy (Tub/Shower) access?

**Immediate Postpartum**
*   [ ] **Delayed Cord Clamping**: Wait 60-90 seconds to let blood return to baby. (Standard of care in 2026).
*   [ ] **Skin-to-Skin**: "Golden Hour" uninterrupted.
*   [ ] **Vitamin K / Eye Ointment**: Do you consent or decline?

---

## Part 5: Organizing "The Village"
People want to help. Give them jobs.

### Meal Train
Set up a MealTrain.com link.
*   **Rule**: Visitors bring food. They do not just hold the baby while *you* host.
*   **Freezer Prep**: Cook 2x portions now. Freeze lasagna, chili, and lactation bone broth.

### Sibling Prep
*   **The Gift**: Have the baby "give" the older sibling a gift upon arrival.
*   **Doll Play**: Practice "gentle hands" with a doll now.
*   **The Introduction**: When sibling arrives at the hospital, have the baby in the bassinet (not in Mom's arms) so Mom's arms are open for the big kid.

![Illustration of Pelvic Tilts](/images/blog/pelvic-tilt-illustration.png)

## Part 6: Managing Third Trimester Symptoms
*   **Insomnia**: "Painsomnia" hits hard. Use a pregnancy pillow. If you can't sleep, rest. Lying still counts.
*   **Reflux**: Your stomach is squished. Eat small meals. Don't eat 2 hours before bed. Almond milk can neutralize acid.
*   **Swelling**: Elevate feet above heart. Watch for *sudden* face swelling (sign of Preeclampsia).

    `},{slug:"ready-for-arrival-weeks-37-39",title:"The Final Countdown: Hospital Bags, Labor Prep & Induction",excerpt:"It's almost time. The 'Miles Circuit' for positioning, the evidence on eating Dates, and the only Hospital Bag Checklist you actually need.",category:"Health",author:"NexaWell Team",date:"January 12, 2026",readTime:"14 min read",heroImage:"/images/blog/pregnancy-week-37-39.png",content:`
## You Are Full Term!
From 37 weeks on, the baby is considered "early term". The lungs are mature. The focus now shifts from *growing* to *opening*. Your body is preparing for the hormonal cascade of labor.

This guide is your daily manual for the final few weeks.

---

## Part 1: Physical Prep - Opening the Door
We want to open the pelvic outlet and soften the cervix.

### 🏃‍♀️ The Miles Circuit
If you feel "stuck" or are past your due date, the [Miles Circuit](http://www.milescircuit.com) is the gold standard for positioning. Do this 30 minutes per day.
1.  **Open Knee Chest**: 30 mins. Butt high, chest low. This allows the baby to back out of the pelvis slightly and rotate.
2.  **Exaggerated Side Lying**: 30 mins each side. Top leg rolled over a peanut ball/pillow. This opens the mid-pelvis.
3.  **Curb Walking**: 15 mins. Walk with one foot on the curb, one on the street. The uneven gait rocks the pelvis open.

### 🚴‍♀️ Pelvic Opening Exercises
*   **Deep Squats (Malasana)**: Get low. This opens the outlet by up to 30%. *Note: If baby is breech, skip this until they flip!*
*   **Butterfly Stretch**: Relaxes inner thighs.
*   **Perineal Massage**: Starting week 34, massage the perineum with almond oil for 5 mins/day. Studies show it reduces the risk of severe tearing.

---

## Part 2: Labor Induction - Fact vs. Fiction
Every grandmother has a trick. What does science say?

### 🥗 The "Date" Study
*   **The Claim**: Eating dates makes labor easier.
*   **The Science**: A randomized control trial showed women who ate **6 dates/day** for 4 weeks had significantly shorter latent labor and higher dilation upon admission.
*   **Verdict**: **TRUE**. Eat the dates.

### 🍵 Red Raspberry Leaf Tea (RRLT)
*   **The Claim**: Induces labor.
*   **The Science**: It does *not* induce labor. It tones the uterine muscle (the myometrium) to make contractions more *efficient* once they start.
*   **Verdict**: **USEFUL**. Drink 2 cups/day.

### 🩺 Membrane Sweeps
*   **The Claim**: Doctor starts labor manually.
*   **The Reality**: At your checkup, the provider puts a finger inside the cervix and separates the amniotic sac from the uterus wall. This releases prostaglandins.
*   **The Stats**: It can trigger labor within 48 hours for ~25% of women.
*   **Warning**: It can be painful and cause cramping. You can decline it.

---

## Part 3: The Ultimate Hospital Bag Checklist (2026 Edition)
Don't bring the kitchen sink. Hospital rooms are small.

### 👜 Essentials for Mom
*   **Long Charging Cable (10ft)**: Hospital outlets are never near the bed. You will be on your phone updating family.
*   **Toiletries**: Chapstick (hospital air is dry), hair ties, your own shampoo (the hospital stuff is harsh).
*   **Comfort**: A robe or button-down nightgown for easy nursing access.
*   **Postpartum Underwear**: Adult diapers (Depends/Always Discrete) are vastly superior to the mesh underwear and massive pads provided.
*   **Slippers/Grips**: Hospital floors are gross.

### 🎒 Essentials for Partner
*   **Snacks**: **CRITICAL**. The hospital will feed mom. They might *not* feed dad/partner. Bring beef jerky, protein bars, trail mix.
*   **Layered Clothing**: Mom will be hot (hormones). The room will be freezing. Bring a hoodie.
*   **Pillow/Blanket**: The "dad chair" is notoriously uncomfortable.

### 👶 Essentials for Baby
*   **Going Home Outfit**: Pack two sizes: Newborn and 0-3 Months. Newborns vary in size!
*   **Car Seat**: Must be installed *before* you are discharged. Practice clicking it in now.
*   **Pediatrician Info**: The hospital will ask who your doctor is upon admission.

---

## Part 4: Last Minute Logistics
*   **Pet Care**: Who is letting the dog out if you go into labor at 2 AM? Have a key hidden or given to a neighbor.
*   **Go-Time Route**: Check traffic patterns. Does a 20-min drive become 50-mins at rush hour?
*   **Pre-Registration**: Fill out the hospital paperwork online *now*. You do not want to fill out insurance forms while having contractions.

![Illustration of Butterfly Stretch](/images/blog/butterfly-stretch-illustration.png)

## Part 5: Signs of Labor
*   **Mucus Plug**: Losing a gelatinous blob. Labor might be hours or *weeks* away. Not a definitive sign.
*   **Water Breaking**: Only happens strictly first in ~15% of movies. Usually, contractions start first.
    *   *COAT*: If water breaks, check **C**olor (clear), **O**dor (none), **A**mount, **T**ime. If Green/Brown = Meconium (baby pooped), go to hospital ASAP.
*   **Contractions**: If they wrap around from your back to your front and stop you from talking... this is it.

    `},{slug:"the-big-day-labor-delivery-week-40",title:"Positive Birth Experience: Stages of Labor & Pain Management",excerpt:"The master guide to birth. Understanding the 4 stages of labor, unbiased pain management comparisons, and surviving the first week with a newborn. The 2000-word breakdown.",category:"Health",author:"NexaWell Team",date:"January 14, 2026",readTime:"20 min read",heroImage:"/images/blog/pregnancy-birth.png",content:`
## It's Go Time!
The moment you have prepared for is here. Birth is intense, primal, and often unpredictable. The best way to reduce fear is to understand the physiology of what is happening.

The standard rule for going to the hospital: **5-1-1**.
*   **5 Minutes Apart**: Frequency of contractions.
*   **1 Minute Long**: Duration of each squeeze.
*   **1 Hour**: This pattern persists for at least an hour.

---

## Part 1: The 4 Stages of Labor

### Stage 1: The Dilation Marathon (0-10cm)
This stage is divided into three phases.
1.  **Early Labor (0-6cm)**:
    *   *What it feels like*: Period cramps. You can talk through them.
    *   *Action*: **Stay home.** Eat, sleep, watch a movie. Going to the hospital too early increases the risk of unnecessary interventions (the "cascade of interventions").
2.  **Active Labor (6-8cm)**:
    *   *What it feels like*: You can no longer talk during a contraction. You need to focus/breathe.
    *   *Action*: Go to the hospital.
3.  **Transition (8-10cm)**:
    *   *What it feels like*: The "I can't do this" stage. Intense pressure. You might shake uncontrollably (hormone dump) or vomit.
    *   *Mantra*: "This is the shortest part." It means the baby is almost here.

### Stage 2: The Pushing Phase
*   *Duration*: 20 mins to 3 hours.
*   *The Urge*: You will feel the "Fetal Ejection Reflex"—an uncontrollable urge to bear down, like having a bowel movement.
*   *Laboring Down*: If you have an epidural, ask to "labor down." This means engaging the baby lower with contractions *before* you start actively pushing. It saves energy.
*   *Positioning*: Lying on your back (lithotomy) closes the pelvic outlet by 20%. Try side-lying or hands-and-knees to give baby more room.

### Stage 3: The Placenta
*   After the baby is out, you still have to birth the organ that sustained them.
*   It is soft and usually comes out with one small push.
*   **Pitocin**: Standard care is a shot of Pitocin to clamp the uterus down and prevent hemorrhage.

### Stage 4: The Golden Hour (Recovery)
*   **Skin-to-Skin**: Essential. It regulates baby's temperature, glucose, and heart rate better than an incubator.
*   **Breast Crawl**: Placed on the chest, a baby will naturally find the nipple and latch within 60 minutes.

---

## Part 2: Pain Management Options
There is no medal for suffering. You do what makes you feel safe.

### Pharmacological (Medical)
1.  **Epidural**:
    *   *Pros*: Complete pain relief (usually). You can sleep.
    *   *Cons*: Restricts movement (you are bed-bound with a catheter). Can lower blood pressure (baby's heart rate might drop). May lengthen the pushing stage.
2.  **Nitrous Oxide (Laughing Gas)**:
    *   *Pros*: You hold the mask. It doesn't numb pain, but makes you "not care" about it. Leaves body instantly.
    *   *Cons*: Can cause dizziness/nausea.
3.  **IV Narcotics**:
    *   *Pros*: Takes the edge off in early labor.
    *   *Cons*: Makes you and baby sleepy. Cannot be given close to birth (risk of respiratory depression in baby).

### Non-Pharmacological (Natural)
1.  **Hydrotherapy**: Water is "nature's epidural". A warm shower or tub reduces muscle tension significantly.
2.  **Counter Pressure**: Partner pushes *hard* against your sacrum (tailbone) during contractions. Essential for "Back Labor".
3.  **The Comb Trick**: Squeeze a plastic comb in your palm. The brain can't process the hand pain and contraction pain simultaneously (Gate Control Theory).

![Illustration of Labor Ball positions](/images/blog/labor-ball-illustration.png)

---

## Part 3: C-Section Recovery
Whether planned or emergency, a C-section is major abdominal surgery.
*   **The Incision**: Splint it with a pillow when you cough, laugh, or sneeze.
*   **Gas Pains**: Often worse than the incision pain. Walking (even slowly) is the only cure.
*   **Scar Massage**: After 6 weeks (when healed), massage the scar to break up adhesions and prevent the "shelf" look.

---

## Part 4: The Fourth Trimester (Postpartum)
The first 12 weeks after birth are about healing.

### 🩹 Physical Healing
*   **Use the Peri Bottle**: Warm water while peeing prevents stinging.
*   **Ice Packs**: "Padsicles" (pads with aloe and witch hazel, frozen) are heaven.
*   **Bleeding**: Lochia lasts 4-6 weeks. It usually stops being red after week 2.

### 🧠 Mental Health (Baby Blues vs. PPD)
*   **Baby Blues**: Crying over spilled milk. Lasts 2 weeks. Normal hormone crash.
*   **PPD (Postpartum Depression)**: Unable to bond, feel worthless, scary intrusive thoughts. *Call your doctor immediately.*

### 🤱 Breastfeeding Reality
*   It is natural, but it is a learned skill. It often hurts for 2 weeks.
*   **The Latch**: Should be asymmetrical (more areola from the bottom). "Nipple to nose."
*   **Fed is Best**: If breastfeeding destroys your mental health, formula is a miracle of science. A happy mom matters more than breastmilk.

## Final Words
You were built for this. Trust your intuition. You are ready.
    `},{slug:"agentic-ai-autonomous-systems-2026",title:"The Age of Agentic AI: Beyond Chatbots (2026)",excerpt:"Forget chatting. 2026 is the year AI starts *doing*. Discover how autonomous agents are reshaping productivity.",category:"Tech",author:"Nexa Tech Team",date:"January 15, 2026",readTime:"8 min read",heroImage:"/images/blog/ai-agentic.png",content:`
We've spent the last few years chatting with AI. In 2026, we stop talking and start delegating. **Agentic AI** is the next massive shift—systems that don't just generate text, but execute complex tasks autonomously.

## What is an AI Agent?
Unlike a chatbot that answers "How do I book a flight?", an **Agent** actually goes to the airline website, selects the seat, enters your details, and sends you the confirmation. It has:
*   **Agency**: The ability to take action.
*   **Planning**: Breaking down a goal ("Plan a trip to Tokyo") into sub-tasks.
*   **Tool Use**: Access to APIs, browsers, and calendars.

## The "Action" Economy
By the end of 2026, we predict 40% of enterprise software will be operated by agents.
*   **Coding**: Software engineers use agents to write entire test suites overnight.
*   **Personal Assistants**: Your phone's AI will negotiate dinner reservations for you.

> **Prediction**: The "App Store" model will evolve into an "Agent Store" where you rent specialized digital workers.
        `},{slug:"small-language-models-slm-local-ai",title:"Small Language Models (SLMs): The Privacy Revolution",excerpt:"Why send your data to the cloud? SLMs are bringing powerful, private AI to your laptop and phone.",category:"Tech",author:"Nexa Tech Team",date:"January 22, 2026",readTime:"6 min read",heroImage:"/images/blog/slm-illustration.png",content:`
Bigger isn't always better. While GPT-6 gets larger, a parallel revolution is happening in the palm of your hand: **Small Language Models (SLMs)**.

## Why Run AI Locally?
1.  **Privacy**: Your financial data, health records, and personal journals never leave your device.
2.  **Latency**: No network lag. The AI responds instantly, even on an airplane mode.
3.  **Cost**: Running a model on your M4 MacBook Pro costs $0.00 compared to API fees.

## Top SLMs of 2026
*   **Llama-4-7B-Mobile**: Optimized for iPhones, capable of writing emails and summarizing notifications.
*   **Mistral-Nano**: Needs only 4GB RAM but rivals GPT-3.5 in coding logic.
*   **Google Gemini Nano 3**: Built directly into Android for real-time translation.

The future is hybrid: Cloud AI for massive reasoning, Local AI for daily life.
        `},{slug:"ai-healthcare-personalized-medicine",title:"AI in Healthcare: The Doctor Will See You Now",excerpt:"From analyzing DNA to predicting longevity, AI is moving from admin work to life-saving diagnostics.",category:"Tech",author:"Dr. Sarah Vital",date:"February 5, 2026",readTime:"10 min read",heroImage:"/images/blog/ai-healthcare.png",content:`
In 2026, your annual checkup looks different. Before you even see a human doctor, an AI has analyzed your vitals, genome, and lifestyle data to predict health risks with 99% accuracy.

## The 3 Pillars of AI Medicine
### 1. Precision Diagnostics
AI radiologist assistants now spot tumors 2 years earlier than human eyes. They don't get tired, and they see patterns in 3D scans that we miss.

### 2. Drug Discovery
What used to take 10 years now takes 10 months. AI models simulate billions of chemical reactions to find new cures for rare diseases.

### 3. Longevity & Bio-Hacking
Wearables connected to AI coaches give real-time advice:
*   **"Your glucose is spiking. Walk for 10 minutes."**
*   **"Cortisol high. Breathing exercise recommended."**

> **Ethical Note**: The "Human-in-the-loop" remains critical. AI suggests, but doctors decide.
        `},{slug:"generative-video-hollywood-disruption",title:"Generative Video: The End of Reality?",excerpt:"Sora 2.0 and Veo have arrived. We simulate entire worlds from a text prompt. What does this mean for movies?",category:"Tech",author:"Nexa Tech Team",date:"February 12, 2026",readTime:"7 min read",heroImage:"/images/blog/gen-video-ai.png",content:`
If 2024 was the year of AI images, 2026 is the year of **AI Video**. We are no longer just looking at 5-second clips; we are generating scene-consistent short films.

## The Tech Behind the Magic
New "World Models" understand physics. If you ask for a "glass falling off a table," the AI knows it must shatter. It understands light, reflection, and gravity.

## Industry Disruption
*   **Indie Filmmakers**: Blockbuster VFX are now available to anyone with a GPU.
*   **Gaming**: NPCs and textures are generated in real-time, creating infinite open worlds.
*   **Marketing**: Customized ads where the actor speaks your language and holds your favorite product.

The barrier to entry for storytelling has vanished. The only limit is imagination.
        `},{slug:"humanoid-robots-workforce-2026",title:"Humanoid Robots: Walking Among Us",excerpt:"Tesla Optimus and Figure 02 are leaving the lab. Are we ready for robots in our warehouses and homes?",category:"Tech",author:"Nexa Tech Team",date:"March 1, 2026",readTime:"9 min read",heroImage:"/images/blog/humanoid-robot.png",content:`
It sounded like sci-fi, but in 2026, it's a logistics reality. **General Purpose Humanoid Robots** are deploying in factories worldwide.

## Why Human-Shaped?
Why not wheels? Because our world is built for humans. Stairs, door handles, tools, shelves—a humanoid robot can slot into existing infrastructure without rebuilding the factory.

## Current Capabilities
*   **Tesla Optimus Gen 3**: Can fold laundry, sort battery cells, and walk over uneven terrain.
*   **Figure 02**: Integrated with OpenAI, it can speak and understand complex verbal commands ("Clean up that spill and put the trash out").

The question is no longer "if" but "how many". Analysts suggest a 1:1 ratio of humans to robots in manufacturing by 2030.
        `},{slug:"ai-ethics-deepfakes-truth",title:"AI Ethics: Surviving the Truth Crisis",excerpt:"In a world of perfect fakes, how do we know what is real? The rise of digital watermarking and AI regulation.",category:"Tech",author:"Nexa Tech Team",date:"March 15, 2026",readTime:"8 min read",heroImage:"/images/blog/ai-ethics.png",content:`
With great power comes great responsibility. As AI generates perfect faces and voices, trust becomes our most valuable currency.

## The Deepfake Dilemma
CEO fraud (deepfaking a boss's voice to authorize transfers) rose 300% in 2025. Political campaigns are fighting a war of synthetic misinformation.

## The Solution: Cryptographic Truth
The C2PA standard (Content Credentials) is becoming mandatory. Cameras will sign photos cryptographically at the moment of capture.
*   **Blue Checkmarks for Content**: Browsers will flag images that lack a "chain of custody."
*   **Regulation**: The EU AI Act is now fully enforced, banning unacceptable risk categories like social scoring.

We are entering an era of "Zero Trust" media. If it's not signed, assume it's synthetic.
        `},{slug:"breast-cancer-early-detection-symptoms-2026",title:"The Silent Whispers: Breast Cancer Early Detection & Symptoms in 2026",excerpt:"1 in 8 women will be diagnosed. A comprehensive 1500-word guide to subtle symptoms, self-exams, and the latest screening technology.",category:"Health",author:"NexaWell Medical Team",date:"February 2, 2026",readTime:"15 min read",heroImage:"/images/blog/breast-self-exam.png",content:`
## The Global Crisis: 2026 Statistics
Breast cancer remains the most diagnosed cancer worldwide. As we step deeper into 2026, the numbers tell a compelling story:
*    **Prevalence**: Over 2.3 million new cases are diagnosed annually globally.
*    **Survival**: The 5-year survival rate for localized breast cancer is now **99%**. This is a testament to early detection.
*    **Younger Demographics**: There is a slight, unexplained rise in diagnoses among women under 40. This makes "knowing your normal" critical even for younger women.

Early detection is not just a medical recommendation; it is a life-saving protocol. When caught in Stage 0 or 1, treatments are less invasive, and survival is nearly guaranteed.

---

## Part 1: Anatomy 101 – Know Your Terrain
To understand cancer, you must first understand the landscape of the breast. It is a complex organ designed for function, but its cellular activity makes it vulnerable.

### The Structures
*   **Lobules**: These are the milk-producing glands. Cancer starting here is called *Lobular Carcinoma*. It is often sneakier and harder to detect on mammograms because it grows in sheets rather than lumps.
*   **Ducts**: The thin tubes that carry milk from the lobules to the nipple. **70-80% of all breast cancers start here** (Ductal Carcinoma).
*   **Stroma**: The fatty and connective tissue that surrounds the ducts and lobules.
*   **Lymph Nodes**: The bean-shaped filters clustered in your underarm (axilla) and collarbone. This is the "interstate highway" cancer uses to spread to the rest of the body. Checking your armpits is just as important as checking your breasts.

![Breast Anatomy](/images/blog/breast-cancer-anatomy.png)

---

## Part 2: The Symptoms (It's Not Just a Lump)
While a palpable lump is the most classic sign, relying solely on it can be dangerous. Many aggressive cancers, like Inflammatory Breast Cancer, present without a distinct mass.

### The "Hidden" Signs
1.  **Dimpling (Peau d'orange)**: If the skin on your breast starts to look like the peel of an orange (thickened and pitted), this is a red flag. It indicates that cancer cells are blocking the lymph vessels in the skin.
2.  **Nipple Changes**:
    *   *Retraction*: A nipple that suddenly turns inward (inverted) when it used to point out.
    *   *Direction*: A nipple that points in a different direction than usual.
    *   *Crusting*: Flaky, red, or crusty skin on the nipple (Paget's Disease of the Breast).
3.  **Discharge**: Spontaneous fluid coming from the nipple without squeezing. Bloody, brown, or clear fluid is concerning. Milky discharge (galactorrhea) is usually hormonal but should still be checked.
4.  **Heat & Redness**: A breast that feels hot to the touch, looks red/purple, or feels heavy/swollen. This can be mistaken for mastitis but can be a sign of Inflammatory Breast Cancer.
5.  **Swollen Lymph Nodes**: sometimes the *first* sign of breast cancer is a lump in the armpit (axilla) or above the collarbone, even if the breast feels normal.

### 🚩 Red Flag: The "Painless" Lump
A common myth is that "cancer hurts." In reality, most early-stage cancerous lumps are **painless**, hard, and immovable (they feel like a rock anchored in the tissue). However, *some* cancers do cause pain. **Rule of thumb: If any change lasts more than 2 weeks, see a doctor. Pain is not a reliable filter.**

---

## Part 3: The Risk Factors – What You Can (and Can't) Control
Understanding your risk profile helps you advocate for the right screening plan.

### Uncontrollable Factors
*   **Gender**: Being a woman is the #1 risk factor. (Men get it too, but rarely).
*   **Age**: Risk increases as you get older. Most cancers are found in women 55+.
*   **Genetics**: Inherited mutations (BRCA1, BRCA2, PALB2, CHEK2).
*   **Dense Breast Tissue**: Having more glandular tissue than fat makes mammograms harder to read and slightly increases cancer risk itself.
*   **Menstrual History**: Starting periods early (before 12) or menopause late (after 55) exposes you to more lifetime estrogen.

### Controllable Lifestyle Factors
*   **Alcohol**: There is a clear link between alcohol intake and breast cancer risk. Even 1 drink a day increases risk slightly.
*   **Weight**: Being overweight after menopause increases risk because fat tissue produces estrogen.
*   **Physical Activity**: Regular exercise lowers estrogen levels and boosts the immune system.

---

## Part 4: The Self-Exam (BSE) – A Monthly Ritual
In 2026, some organizations debate the utility of BSE. We believe that **breast awareness** is non-negotiable. You can't notice a change if you don't know what "normal" feels like.

### The Protocol
Do this **3-5 days after your period starts**. This is when your breasts are least hormonal and lumpy. If you are menopausal, pick the same date every month (e.g., the 1st).

1.  **Visual Check**:
    *   Stand in front of a mirror, topless.
    *   Put hands on hips and press down (this flexes the chest muscles).
    *   Look for asymmetry across the breasts, changes in shape, or skin dimpling.
    *   Raise arms overhead and look again.
2.  **The Palpation (Touch)**:
    *   Lie down. Place your left hand behind your head.
    *   Use the *pads* (not tips) of your three middle fingers on your right hand.
    *   Use three levels of pressure: Light (skin), Medium (tissue), Deep (rib cage).
    *   **The Pattern**: Use a spiral motion starting at the nipple and working outward, OR an up-and-down lawnmower pattern. Cover the entire area from collarbone to bra line, and from armpit to cleavage.
3.  **The Squeeze**: Gently squeeze the nipple to check for discharge.
4.  **Repeat** on the other side.

![Self Exam Guide](/images/blog/breast-self-exam.png)

---

## Part 5: Screening Technology in 2026
The "Squish" (mammogram) is still the gold standard, but it has upgraded.

### 1. 3D Mammography (Tomosynthesis)
Traditional mammograms took 2D pictures (like a flat map). 3D mammography takes slices of the breast (like a CT scan). This allows doctors to see "behind" structures.
*   **Benefit**: Reduces false positives by 40%.
*   **Benefit**: Finds 41% more invasive cancers.
*   **Standard**: In 2026, this is the default standard of care.

### 2. Breast Ultrasound
Used as a supplemental tool, especially for women with **dense breasts**.
*   **How it works**: Uses sound waves.
*   **Differentiation**: It is excellent at telling the difference between a fluid-filled cyst (benign) and a solid mass (suspicious).

### 3. Breast MRI
The most sensitive tool available. It reserves for high-risk patients (lifetime risk > 20%).
*   **Pros**: Catch tiny cancers mammograms miss.
*   **Cons**: High rate of false positives (finding things that aren't cancer).

### 4. AI-Assisted Screening (The 2026 Revolution)
Artificial Intelligence is now routinely used to "second read" mammograms. AI algorithms can detect subtle pixel patterns invisible to the human eye, flagging areas for the radiologist to re-check. This has improved early detection rates significantly.

---

## Part 6: Genetic Testing (BRCA & Beyond)
Knowledge is power, but it can be scary. Genetic testing is recommended if you have a strong family history (multiple relatives with breast/ovarian cancer, male breast cancer, or young diagnoses).

*   **BRCA1 & BRCA2**: The most famous mutations. Risks can be up to 70-80% lifetime risk.
*   **PALB2**: The "Partner and Localizer of BRCA2." Mutations here carry a risk almost as high as BRCA2 (40-60%).
*   **CHEK2 & ATM**: Moderate risk genes (20-30% lifetime risk).

### Prophylactic Options
Women with high-risk mutations often face a difficult choice:
*   **Increased Surveillance**: MRI and Mammogram alternating every 6 months.
*   **Chemoprevention**: Taking Tamoxifen to lower risk.
*   **Prophylactic Mastectomy**: Removing breast tissue *before* cancer develops. This reduces risk by ~95%. It is a deeply personal, brave decision.

---

## Conclusion: Don't Let Fear Win
The fear of finding a lump often stops women from checking. But remember: **Finding it early is the best case scenario.** A Stage 1 diagnosis is a bump in the road; a Stage 4 diagnosis is a mountain.

Take 10 minutes once a month. Know your body. Trust your gut. If something feels wrong, demand an answer until you are satisfied. You are your own best advocate.
        `},{slug:"understanding-breast-cancer-stages-diagnosis",title:"Decoding the Diagnosis: Understanding Breast Cancer Stages & Types in 2026",excerpt:"You have a diagnosis. Now what? Breaking down Stages 0-4, TNBC, HER2+, and how to read your pathology report.",category:"Health",author:"NexaWell Medical Team",date:"February 4, 2026",readTime:"18 min read",heroImage:"/images/blog/breast-cancer-stages.png",content:`
## The Call You Never Want to Get
"It's malignant." The moment those words hang in the air, the world seems to stop spinning. You enter a new universe—one filled with medical jargon, endless appointments, and fear.

But here is the truth: **Information is the antidote to fear.**

This guide is your translator. Doctors speak in codes (TNM, ER, PR, HER2, Grade). In 2026, personalized medicine means that "Breast Cancer" isn't just one disease; it is hundreds of unique subtypes, each with a specific roadmap. We are here to decode the map so you can reclaim control.

---

## Part 1: The Biology of YOUR Cancer
Before looking at staging, you must understand the *personality* of your tumor. Two women with Stage 2 cancer can have completely different treatments based on the biology.

### The Receptors (The "Fuel" System)
Think of the cancer cell as a customized house. On the outside of this house, there are "doorbells" or specific locks. These are receptors. If we know what keys unlock the growth, we can block them.

1.  **ER+ (Estrogen Receptor Positive)**:
    *   *The Fuel*: Estrogen. The cancer cells have receptors that grab estrogen from your blood and use it to grow.
    *   *The Treatment*: Anti-hormonal therapy (Tamoxifen, Aromatase Inhibitors) acts like gum in the lock, preventing estrogen from entering.
    *   *Commonality*: ~80% of all breast cancers.
2.  **PR+ (Progesterone Receptor Positive)**:
    *   *The Fuel*: Progesterone.
    *   *Similarities*: Often found together with ER+.
3.  **HER2+ (Human Epidermal Growth Factor Receptor 2)**:
    *   *The Fuel*: The HER2 protein. Normal cells have a few copies; these cancer cells have too many (amplification).
    *   *Personality*: Fast-growing and aggressive.
    *   *The Good News*: Pre-2005, this was the worst diagnosis. Now, thanks to targeted drugs like *Herceptin (Trastuzumab)*, it is one of the most treatable forms. It is the "poster child" for targeted therapy.

### The "Triple Negative" (TNBC)
*   **The Status**: ER-, PR-, HER2-. This means the cancer tests negative for all three common receptors.
*   **The Challenge**: Because it lacks the "doorbells," hormonal pills and Herceptin don't work.
*   **The Plan**: Chemotherapy is the primary weapon.
*   **The Silver Lining**: TNBC is often "chemosensitive," meaning it melts away faster with chemo than other types. New immunotherapy drugs (Keytruda) approved in the last few years have radically improved survival rates for Stage 2 & 3 TNBC.

---

## Part 2: The Stages (0 to 4) – How Far Has It Gone?
Staging is usually determined by the **TNM System**, updated recently in the AJCC 8th Edition to include biological factors (not just size).

*   **T (Tumor)**: How big is the mass?
*   **N (Node)**: has it traveled to the lymph nodes?
*   **M (Metastasis)**: has it traveled to distant organs?

![Infographic of Stages](/images/blog/breast-cancer-stages.png)

### Sate 0: DCIS (Ductal Carcinoma In Situ)
*   *Theory*: "Stage 0." Cancer cells have formed inside the milk duct but have **not** broken through the wall into the surrounding tissue. They cannot spread yet.
*   *Treatment*: Surgery (Lumpectomy) usually followed by Radiation.
*   *Survival*: Nearly 100%.

### Stage 1: Small & Contained
*   **1A**: Tumor is small (< 2cm) and nodes are clear.
*   **1B**: Tiny clusters of cells found in lymph nodes (micrometastasis).
*   *Prognosis*: Excellent. Often treated with surgery and radiation alone (no chemo), depending on the Oncotype score.

### Stage 2: The Grey Zone
*   Tumor is larger (2-5cm) OR has spread to 1-3 lymph nodes.
*   *The Debate*: Chemotherapy is often debated here.
*   *Neoadjuvant*: Many doctors now give Chemo *before* surgery for Stage 2 to shrink the tumor and test if the drugs work.

### Stage 3: Locally Advanced
*   Tumor is large (> 5cm) OR has spread to many lymph nodes (4+) or chest wall/skin.
*   *Goal*: Curative. The treatment is aggressive and "throws the kitchen sink" at it.

### Stage 4: Metastatic (MBC)
*   The cancer has left the breast area and planted seeds in the bones, liver, lungs, or brain.
*   *Paradigm Shift*: In 2026, Stage 4 is treated as a **chronic illness**, much like diabetes. Women are living 5, 10, 15+ years with MBC, managing it with lines of therapy. It is treatable, though not curable.

---

## Part 3: Reading Your Pathology Report
After a biopsy or surgery, you get "The Report." It looks like Latin. Here is the cheat sheet:

1.  **Histologic Grade (Nottingham Score)**: How "angry" do the cells look compared to normal breast cells?
    *   *Grade 1 (Well Differentiated)*: Slow growing. Looks organized.
    *   *Grade 3 (Poorly Differentiated)*: Fast growing. Looks chaotic.
2.  **Ki-67 Score**: The speed of cell division.
    *   *< 20%*: Low proliferation (Slow).
    *   *> 30%*: High proliferation (Fast). High Ki-67 often tips the scale toward needing chemotherapy.
3.  **LVI (Lymphovascular Invasion)**: Are cancer cells seen floating in tiny blood vessels or lymph channels next to the tumor?
    *   *Present*: Higher risk of spread.
    *   *Absent*: Good sign.
4.  **Margins**:
    *   *Negative (Clean)*: No ink on tumor -> The surgeon got it all.
    *   *Positive*: Cancer touches the edge -> You need a re-excision (second surgery).

---

## Part 4: The Genomic Revolution (Oncotype DX & MammaPrint)
This is the biggest game-changer for ER+ breast cancer.
In the past, everyone with a 2cm tumor got chemo "just in case." Today, we test the *genes of the tumor itself*.

*   **The Test**: A sample of your tumor is sent to a lab (e.g., Genomic Health).
*   **The Score (0-100)**: It predicts the Benefit of Chemotherapy.
    *   **Low Score (0-25)**: Chemo will NOT overlap hormonal therapy. You can safely skip chemo.
    *   **High Score (> 26)**: Chemo is lifesaving.
    *   *Result*: This test saves thousands of women from unnecessary chemotherapy every year.

---

## Part 5: Questions to Ask Your Oncologist
Don't go into your appointment empty-handed. Print this list.

1.  **"What is the intent of this treatment?"** (Curative vs. Palliative/Control).
2.  **"Can I see my Oncotype or MammaPrint score?"** (Crucial for Stage 1-2 ER+).
3.  **"Am I eligible for a clinical trial?"** (Trials often offeraccess to the newest 2026 drugs before they are public).
4.  **"How will this treatment affect my fertility?"** (If you are under 45).
5.  **"Who is my nurse navigator?"** (You need a point person).

---

## Conclusion
A diagnosis is a map, not a destiny. Understanding your specific markers empowers you to ask the right questions: "Why this chemo?" "Is immunotherapy an option?" You are the captain of this ship. The storm is scary, but your compass is calibrated.
        `},{slug:"breast-cancer-treatment-options-surgery-chemo",title:"The Battle Plan: A Modern Guide to Breast Cancer Treatment in 2026",excerpt:"From lumpectomy to immunotherapy. A patient-centric guide to navigating surgery, chemotherapy, and the side effects no one talks about.",category:"Health",author:"NexaWell Medical Team",date:"February 6, 2026",readTime:"20 min read",heroImage:"/images/blog/breast-cancer-treatment.png",content:`
## The Arsenal of 2026
Cancer treatment has evolved from "one size fits all" to "precision medicine."
Treatment is often described as a "sandwich": Surgery, Chemotherapy, and Radiation. But the order and ingredients depend entirely on *your* specific tumor biology.

This guide walks you through the modalities, the logic behind them, and how to manage the side effects like a pro.

---

## Part 1: Surgery – The Foundation
For Stage 1-3 cancer, surgery is almost always the first or second step. The goal is "No Evidence of Disease" (NED).

### 1. Lumpectomy (Breast Conservation Therapy)
*   **What**: The surgeon removes only the tumor and a rim of healthy tissue (margins) around it.
*   **The Trade-off**: You keep your breast, BUT you almost always must have radiation afterward to "sterilize" the remaining breast tissue.
*   **Recovery**: Quick. usually 1-2 weeks.
*   **Success Rate**: Studies prove that Lumpectomy + Radiation has the **exact same survival rate** as Mastectomy for early-stage cancer.

### 2. Mastectomy
*   **What**: Removal of the entire breast tissue.
*   **Why choose it?**
    *   Large tumor relative to breast size.
    *   Multiple tumors in different quadrants.
    *   Genetic mutation (BRCA).
    *   "Peace of mind" (patient choice).
*   **Nipple-Sparing**: In 2026, surgeons can often save the nipple and skin envelope, scooping out the tissue like an avocado.

### 3. Lymph Node Surgery
Cancer spreads through the lymphatic system.
*   **Sentinel Node Biopsy (SLNB)**: The surgeon injects blue dye to find the "first" 1-3 nodes that drain the breast. If these are clean, you keep the rest. *Risk of Lymphedema: Low (<5%)*.
*   **Axillary Lymph Node Dissection (ALND)**: Removing 10-20+ nodes. Only done if cancer is clearly spreading. *Risk of Lymphedema: Moderate (20-30%)*.

### 🩺 Reconstruction: The Art of Restoration
*   **Implants**: Saline or Silicone. "Gummy Bear" implants are the 2026 standard for a natural feel.
*   **Flap Surgery (DIEP Flap)**: The gold standard for natural results. The surgeon uses fat and skin from your lower belly (a "tummy tuck") to build a new breast. It is a major 8-hour surgery but lasts a lifetime.
*   **Aesthetic Flat Closure**: Choosing no reconstruction. A powerful, valid choice for women who want a faster recovery and no foreign objects.

---

## Part 2: Chemotherapy – The Heavy Artillery
Chemotherapy kills fast-growing cells. It doesn't know the difference between a cancer cell and a hair follicle cell. That is why side effects happen.

### The Common Regimens
*   **AC-T**: The "Red Devil" (Adriamycin) + Cytoxan, followed by Taxol.
*   **TC**: Taxotere + Cytoxan (often for lower risk).
*   **TCHP**: For HER2+ cancer.

### ❄️ Cold Capping: Saving Your Hair
In 2026, hair loss is optional for many. **Scalp Cooling Systems** (like Paxman or DigniCap) freeze the hair follicles during infusion, constricting blood vessels so the chemo drug can't reach the root.
*   **Success Rate**: ~60-70% of women keep enough hair to not need a wig.
*   **The Cost**: It is uncomfortable (very cold) and adds time to the day.

### Managing Side Effects: The "Chemo Survival Kit"
1.  **Nausea**: Take your anti-nausea meds (Zofran, Compazine) *on a schedule*, not just when you feel sick. Prevent the wave.
2.  **Neuropathy (Nerve Damage)**: Icing your hands and feet during Taxol infusions can prevent permanent numbness.
3.  **Chemo Brain**: The brain fog is real. Use planners, set alarms, and be gentle with yourself. It *does* get better eventually.
4.  **Mouth Sores**: Rinse with warm salt water + baking soda 4x a day. Avoid spicy/acidic foods.

---

## Part 3: Radiation – The Cleanup Crew
If you had a lumpectomy or have positive lymph nodes, radiation is your insurance policy. It uses high-energy X-rays to destroy microscopic cancer cells left behind.

*   **The Schedule**: Traditionally 5-6 weeks. In 2026, **Hypofractionated Radiation** (higher dose, shorter time) is common, lasting only 3-4 weeks.
*   **Side Effects**:
    *   *The Burn*: It feels like a bad sunburn. Use pure Aloe Vera, Calendula, or specialty creams (Miaderm) immediately after treatment.
    *   *Fatigue*: This is the #1 complaint. It builds up (cumulative). By the last week, you may need a daily nap.
*   **Breath Hold Technique**: If treating the left breast, you will be asked to hold your breath to push the heart away from the chest wall, protecting it from the beam.

---

## Part 4: Targeted & Immunotherapy (The "Smart Bombs")
This is where 2026 medicine shines.
*   **HER2+ Therapy**: *Herceptin* and *Perjeta* are antibodies that sit on the cancer cell and flag it for destruction. They are not chemo; they are biological warfare.
*   **Immunotherapy**: Drugs like *Keytruda (Pembrolizumab)* take the "brakes" off your immune system, allowing your own T-cells to attack the cancer. This is standard for high-risk Triple Negative breast cancer.

## Part 5: Hormonal Therapy (The Marathon)
For ER+ Breast Cancer, the "active" treatment is just the sprint. The marathon is the 5-10 years of anti-hormone pills.
*   **Tamoxifen**: Blocks estrogen receptors. (Pre-menopausal).
*   **Aromatase Inhibitors (AI)**: Stops the body from making estrogen in fat tissue. (Post-menopausal).

**Managing the "Menopause" Side Effects**:
*   *Joint Pain*: Tart Cherry Extract and daily walking help.
*   *Hot Flashes*: Acupuncture and loosely fitted cotton clothing.
*   *Bone Health*: heavy lifting (strength training) is essential to prevent osteoporosis.

---

## Conclusion
Treatment is grueling. There will be days you want to quit. That is normal.
Build your team: An oncologist who listens, a surgeon who explains, and a support system that shows up. You just have to cultivate the courage to take the next single step.
        `},{slug:"breast-cancer-holistic-healing-meditation-2026",title:"Mind Over Malignancy: Holistic Healing & Mental Health in 2026",excerpt:"Cancer is physical, but the battle is mental. How meditation, lowering cortisol, and 'healing light' visualization can improve outcomes.",category:"Health",author:"NexaWell Medical Team",date:"February 8, 2026",readTime:"12 min read",heroImage:"/images/blog/breast-cancer-meditation.png",content:`
## The Mechanics of Mind-Body Medicine
When you hear the word "cancer," your body instantly floods with cortisol and adrenaline. This is the ancient "fight or flight" response. While useful for escaping a tiger, it is detrimental for fighting cancer.
Chronic stress creates an inflammatory environment in the body, suppresses the immune system, and can even aid angiogenesis (the growth of blood vessels that feed tumors).

**Holistic healing is not about rejecting Western medicine; it is about optimizing your body to receive it.** It is the "software update" your "hardware" needs to function.

---

## Part 1: The Physiology of Resilience
You have two operating modes:
1.  **Sympathetic Nervous System (Fight/Flight)**: High heart rate, high blood sugar, digestion stops, immune system pauses. This is where fear lives.
2.  **Parasympathetic Nervous System (Rest/Digest)**: Heart rate slows, cells repair, immune cells multiply. This is where healing lives.

**Your Goal**: Spend 80% of your day in the Parasympathetic state.
How? Through the Vagus Nerve. This is the superhighway between your brain and your gut. Stimulating it tells your brain, "We are safe. You can heal now."

---

## Part 2: Meditation for the Skeptic
You don't need to burn incense or chant. Meditation is simply "brain training."

### 1. The Box Breathing Technique (Navy SEALs Method)
Use this while waiting for biopsy results or sitting in the chemo chair.
*   Inhale for 4 seconds.
*   Hold for 4 seconds.
*   Exhale for 4 seconds.
*   Hold for 4 seconds.
*   *Why it works*: It physically forces your heart rate to sync with your breath, overriding panic.

### 2. Healing Visualization
Instead of viewing Chemotherapy as a "poison," reframe it.
*   *The Exercise*: Close your eyes. Imagine the drug is a golden, healing liquid. See it entering your veins and acting like a "cleanup crew," gently scrubbing away the dark, chaotic cancer cells.
*   *The Science*: Studies show that patients who use positive imagery have less nausea and lower pain scores.

![Meditation and Healing](/images/blog/breast-cancer-meditation.png)

---

## Part 3: Sleep - The Ultimate Healer
Sleep is when your body cleans out toxins (via the glymphatic system). If you aren't sleeping, you aren't healing.

### The "Cancer Insomnia" Fix
*   **The Problem**: Steroids used during chemo keep you awake. Anxiety wakes you at 3 AM.
*   **The Protocol**:
    *   *Magnesium Glycinate*: 400mg before bed (relaxes muscles).
    *   *Melatonin*: Check with your oncologist, but short-term use is often approved.
    *   *4-7-8 Breathing*: Inhale for 4, hold for 7, exhale for 8. It effectively knocks you out.

---

## Part 4: Somatic Therapy & Trauma Release
Cancer is a trauma. The body "keeps the score."
*   **Yoga for Cancer (y4c)**: Gentle movement helps move lymph fluid (preventing lymphedema) and releases tension stored in the fascia.
*   **Acupuncture**: Accepted by major cancer centers to treat neuropathy, hot flashes, and nausea. It releases endorphins (natural painkillers).
*   **Massage**: Oncology massage therapists know how to work safely around ports and surgical sites. Touch is powerful medicine.

---

## Part 5: Managing "Scanxiety"
The week before a scan is psychological torture.
1.  **Name it**: "I am feeling anxious because I care about my life."
2.  **Schedule Worry Time**: Give yourself 15 minutes at 4 PM to freak out. Write down every scary thought. When the timer rings, stop.
3.  **The "Plan B" Strategy**: Anxiety comes from the unknown. Make a loose plan. "If the scan is bad, I will call Dr. X and we will look at clinical trials." Having a plan reduces the terror of the void.

---

## Conclusion
Your mind is the General. Your body is the Army.
Doctors can give the Army the weapons (Chemo), but only the General can give the order to win. Keep the General calm, focused, and rested.
        `},{slug:"breast-cancer-nutrition-anti-inflammatory-diet",title:"Fueling the Fight: Nutrition & Lifestyle During Treatment (2026 Guide)",excerpt:"What to eat to kill cancer cells. The science of anti-angiogenic foods, the sugar myth, and the power of fasting.",category:"Health",author:"NexaWell Medical Team",date:"February 10, 2026",readTime:"16 min read",heroImage:"/images/blog/breast-cancer-nutrition.png",content:`
## The Power on Your Plate
"What can I eat?" is the #1 question patients ask.
Food is more than fuel; it is code. It tells your genes what to do. During treatment, your body is a construction site. It needs bricks (protein), mortar (fats), and workers (micronutrients) to rebuild.

This guide separates 2026 science from internet myths.

---

## Part 1: The "Sugar Feeds Cancer" Myth (Debunks)
You will hear this everywhere. Let's clarify.
*   **The Myth**: Eating a piece of fruit will make your tumor explode.
*   **The Truth**: All cells, healthy and cancerous, run on glucose. You cannot "starve" cancer without starving your brain and heart.
*   **The Nuance**: What *does* drive cancer is **Insulin Growth Factor (IGF-1)**. When you eat refined sugar (cake, soda, white bread), your insulin spikes. High insulin tells cells to "Grow! Divide!" That is what we want to avoid.
*   **The Strategy**: Don't fear fruit. Do fear High Fructose Corn Syrup. Pair carbs with protein/fat (e.g., Apple + Almond Butter) to blunt the insulin spike.

---

## Part 2: Anti-Angiogenesis (Starving the Tumor's Blood Supply)
Dr. William Li's research on "Angiogenesis" shows that we can eat foods that block tumors from growing the new blood vessels they need to survive.

### The Top Cancer-Fighting Foods
1.  **Cruciferous Vegetables**: Broccoli, Cauliflower, Brussels Sprouts, Kale.
    *   *The Magic*: They contain **Sulforaphane**, which activates the body's detoxification pathways.
    *   *Tip*: Chop them 40 minutes before cooking to activate the enzyme.
2.  **Berries**: Blueberries, Blackberries, Raspberries.
    *   *The Magic*: Ellagic Acid and Anthocyanins. They protect DNA from damage.
3.  **Turmeric**: Needs Black Pepper to be absorbed.
    *   *The Magic*: Curcumin is a potent anti-inflammatory.
4.  **Green Tea**: specifically Matcha.
    *   *The Magic*: EGCG. It stops cancer cells from dividing.
5.  **Mushrooms**: Reishi, Turkey Tail, Maitake.
    *   *The Magic*: They boost Natural Killer (NK) cell activity.

![Anti-Cancer Nutrition](/images/blog/breast-cancer-nutrition.png)

---

## Part 3: What to Eliminate (The "No-Go" List)
1.  **Alcohol**: **This is non-negotiable.** Alcohol increases circulating estrogen levels. It is a Class 1 Carcinogen. If you are in treatment or recovery, aim for zero.
2.  **Processed Meats**: Bacon, Salami, Hot Dogs. The nitrates are carcinogenic.
3.  **Vegetable Oils**: Soybean, Corn, Canola oil. These are high in Omega-6 (inflammatory). Switch to Olive Oil and Avocado Oil (high in Omega-9).

### The Soy Controversy
*   *Old Thinking*: Soy contains phytoestrogens, so it causes cancer.
*   *New Thinking (2026)*: **Whole Soy** (Edamame, Tofu, Tempeh) is safe and actually **protective**. It blocks the stronger human estrogen from binding to receptors.
*   *Caution*: Avoid *Processed Soy Isolate* (found in fake meats and protein bars).

---

## Part 4: Fasting & Chemotherapy
Emerging research suggests that **Intermittent Fasting** can reduce chemo side effects.
*   **The Mechanism**: When you fast, healthy cells go into "hibernation mode" (protection). Cancer cells, which are dumb/mutated, keep trying to grow. When the chemo hits, the hibernation protects the healthy cells, but the cancer cells take the full hit.
*   **The Protocol**: Many patients fast for 13-16 hours overnight.
*   **Chemo Fasting**: Some fast for 24 hours before infusion. *Always check with your oncologist before trying this.*

---

## Part 5: Hydration & Supplements
Chemo is dehydrating. You need to flush your kidneys.
*   **Target**: 3 Liters of water a day.
*   **Electrolytes**: Add a pinch of sea salt or lemon.

### Supplements: Be Careful
Antioxidants (Vitamin C, E) can theoretically protect cancer cells *from* chemotherapy (which uses oxidation to kill them). **Stop all high-dose antioxidants during chemo unless your doctor says otherwise.**
*   *Safe/Recommended*: Vitamin D3 (keep levels above 50 ng/mL), Magnesium.

---

## Conclusion
You don't have to be perfect. Aim for the "80/20 Rule."
80% of the time, eat to kill cancer. 20% of the time, eat for your soul.
Every time you choose a salad over a sandwich, you are casting a vote for your body's ability to heal.
        `},{slug:"life-after-breast-cancer-survivorship-recurrence",title:"The New Normal: Survivorship, Recurrence & Finding Joy in 2026",excerpt:"Ring the bell, now what? Navigating the 'cliff' of survivorship, fear of recurrence, and finding joy in your new body.",category:"Health",author:"NexaWell Medical Team",date:"February 12, 2026",readTime:"14 min read",heroImage:"/images/blog/breast-cancer-anatomy.png",content:`
## The Survivorship Cliff
The balloons have deflated. The "You Got This" cards have stopped coming. You rang the bell, walked out of the hospital, and suddenly realized: *I don't know who I am anymore.*

This is the "Survivorship Cliff." The active battle is over, but the emotional war often begins here. You are expected to "go back to normal," but your "normal" no longer exists.

This guide is about building a *new*, better normal.

---

## Part 1: Managing the "Fear of Recurrence"
This is the single most common struggle for survivors. Every headache is a brain tumor. Every backache is bone metastasis.
*   **The 2-Week Rule**: Adopting this 2026 guideline can save your sanity.
    *   *If you feel a new symptom (pain, lump, cough), wait 2 weeks.*
    *   *If it gets better or moves around*: It's likely benign (aging, muscle pull, virus).
    *   *If it stays the same or gets worse*: Call your oncologist.
*   **Trigger Management**: Recognize that anniversary dates (diagnosis day, surgery day) will be hard. Plan for them. Treat yourself gently.

---

## Part 2: Your Body 2.0
The mirror can be a difficult place. You may have scars, a single breast, implants that feel cold, or weight gain from steroids.
*   **Scars**: They are not flaws; they are battle lines. Massage them daily with bio-oil or Vitamin E to break up scar tissue.
*   **Lymphedema**: The removal of lymph nodes can cause swelling in the arm.
    *   *Prevention*: Avoid needle sticks or blood pressure cuffs on that arm.
    *   *Flying*: Wear a compression sleeve on airplanes (the pressure change affects fluid).
*   **Chemopause**: Treatment may have forced you into early menopause.
    *   *Vaginal Health*: Estrogen deprivation causes dryness. Talk to your doctor about non-hormonal moisturizers (hyaluronic acid suppositories) or low-dose localized estrogen (often safe).

---

## Part 3: Dating & Intimacy
"When do I tell him?" "Will they still find me sexy?"
*   **Dating**: You don't need to disclose on the first date. Wait until you feel a connection. When you share, do it simply: "I went through breast cancer treatment last year. I'm healthy now, but it's part of my story."
*   **Intimacy**: Sex might hurt physically or emotionally. Start slow. Intimacy is more than intercourse—it's holding hands, skin-to-skin contact, and honest conversation.

---

## Part 4: Returning to Work
The "Chemo Brain" doesn't vanish the day you discharge.
*   **Phased Return**: Don't go back 100% on Day 1. Ask for a staggered schedule (e.g., M/W/F) for the first month.
*   **Americans with Disabilities Act (ADA)**: You are legally entitled to "reasonable accommodations" (extra breaks, closer parking, ergonomic chair). Use them.
*   **The "Filter"**: You may find you have zero tolerance for office politics or petty drama. This is a superpower. Use your limited energy on what matters.

---

## Part 5: Financial Toxicity
Cancer is expensive. Even with insurance, the co-pays, parking fees, and lost wages add up.
*   **Resources**: Organizations like *The Pink Fund* or *CancerCare* offer financial assistance for non-medical bills (mortgage, car payments).
*   **Negotiation**: You can negotiate medical bills. Ask for an itemized receipt. Call the billing department and ask for a "Charity Care" application or a payment plan.

---

## Part 6: Finding Joy (Post-Traumatic Growth)
Many survivors report that while they would never *choose* cancer, it gave them a gift: Perspective.
*   **The "Life Audit"**: Cancer creates a clear line between what is essential and what is noise. Survivors often quit jobs they hate, end toxic relationships, and pursue passions they delayed.
*   **Exercise**: It is the #1 way to prevent recurrence. Aim for 150 minutes of moderate cardio + 2 strength sessions a week. It reduces fatigue and boosts mood.
*   **Community**: Connect with "Breasties." No one understands the fear of a scan quite like someone who has been inside the machine.

## Conclusion
You are not damaged goods. You are 'Kintsugi'—the Japanese art of repairing broken pottery with gold. The cracks are not hidden; they are highlighted. They make the piece more beautiful, more valuable, and unique.
You are a Thriver. Go live the life you fought for.
        `},{slug:"menstrual-cycle-science-phases-hormones",title:"The Menstrual Cycle Decoded: Your Biological Dashboard (2026 Guide)",excerpt:"It's not just 'the bleeding phase.' It's a complex, high-performance biological algorithm. Understand the 4 phases and how to hack them.",category:"Health",author:"NexaWell Medical Team",date:"March 1, 2026",readTime:"15 min read",heroImage:"/images/blog/menstrual-cycle-science.png",content:`
## The Biological Algorithm
Forget what you learned in 5th-grade health class. Your menstrual cycle isn't a curse; it's a feedback loop. It's a vital sign, just like your heart rate or blood pressure. In 2026, we view the cycle as a biological algorithm—a predictable sequence of hormonal shifts that dictates your energy, mood, metabolism, and even your brain chemistry.

When you understand the code, you can stop fighting your body and start optimizing it.

---

## Phase 1: Menstruation (The Reset)
**Days 1-5 (approx)**

This is the "Winter" of your cycle. Your hormones (Estrogen and Progesterone) drop to their lowest levels. This withdrawal triggers the shedding of the uterine lining.

### The Biology
*   **The Drop**: The sudden crash in hormones is why you feel tired. Your body demands rest because it is physically clearing out tissue.
*   **Inflammation**: The shedding process is inflammatory. This is why you might ache.

### The Optimization Strategy
*   **Productivity**: Your brain is primed for evaluation. The channel between your left and right brain hemispheres is highly active. It's the best time for *strategic thinking* and *reviewing* the past month. It is the worst time for high-intensity social networking.
*   **Tech**: Use this time to tidy up your digital life. Clear your inbox, organize files. Your brain craves order now.

### The Menstrual Rulebook: Dos & Don'ts
**DO:**
*   **Sleep In**: Your body is doing heavy lifting (shedding an organ lining). You need 8-9 hours.
*   **Eat Warm Foods**: TCM (Traditional Chinese Medicine) suggests warm stews and soups. Cold foods constrict blood vessels and worsen cramps.
*   **Gentle Movement**: Walking or Yin Yoga helps blood flow.
*   **Hydrate**: You are losing fluids. Drink water with electrolytes.

**DON'T:**
*   **Do HIIT**: High Intensity Interval Training spikes cortisol, which is already sensitive during this phase. It can increase inflammation.
*   **Drink Alcohol**: Your liver is busy processing hormones. Alcohol hits harder and worsens "period poops" and mood swings.
*   **Skip Meals**: Blooding sugar stability is key to managing mood. Intermittent fasting is harder in this phase.
*   **Make Big Decisions**: You are chemically prone to being more critical/negative. Wait until day 7 (Estrogen rise) to quit your job or break up with someone.

---

## Phase 2: The Follicular Phase (The Rise)
**Days 6-14**

This is "Spring." The bleeding stops. The pituitary gland signals the ovaries to prepare an egg.

### The Biology
*   **Estrogen Rising**: Estrogen is your "can-do" hormone. It boosts serotonin (mood) and dopamine (motivation). It also suppresses cortisol (stress).
*   **Collagen Boost**: Your skin looks its best here because estrogen stimulates collagen production.

### The Optimization Strategy
*   **Productivity**: You are biologically primed for learning and creativity. Estrogen improves neuroplasticity. Start that new coding project, learn a new language, or brainstorm big ideas.
*   **Fitness**: Your pain tolerance is highest now. Hit your Personal Records (PRs) in the gym. HIIT and heavy lifting feel easier.

---

## Phase 3: Ovulation (The Peak)
**Days 15-17**

This is "Summer." The grand finale of the follicular phase. A surge of Luteinizing Hormone (LH) triggers the release of the egg.

### The Biology
*   **The Testosterone Spike**: Yes, women have testosterone, and it peaks here. This drives libido, confidence, and risk-taking.
*   **The Glow**: You are biologically at your most attractive. Symmetry increases, and your voice pitch may even change slightly.

### The Optimization Strategy
*   **Social**: This is your networking window. Pitch investors, go on first dates, ask for a raise. Your verbal, social, and communicative skills are supercharged.
*   **Caution**: The high estrogen can make ligaments looser (ACL injury risk is higher). Be careful with high-impact jumps.

---

## Phase 4: The Luteal Phase (The Deep Work)
**Days 18-28**

This is "Autumn." The egg has been released. The corpus luteum (the shell of the egg) starts pumping out Progesterone.

### The Biology
*   **Progesterone Dominance**: This is the "sedative" hormone. It calms the nervous system (making you sleepy) and raises body temperature.
*   **Metabolic Shift**: Your metabolism speeds up (you burn 100-300 more calories a day), which is why you get hungry.

### The Optimization Strategy
*   **Productivity**: As energy turns inward, you become detail-oriented. This is the time for "Deep Work," accounting, editing, and finishing tasks. You have less patience for small talk.
*   **Self-Care**: Your immune system is slightly suppressed (to prevent attacking a potential embryo). Prioritize sleep and Vitamin C.

---

## Conclusion: Tracking is Power
In 2026, we don't guess; we track. Use a smart ring (Oura, RingConn) or a dedicated app to map these phases. Knowing you are in your "Luteal" phase stops you from thinking you are "lazy" or "depressed"—you're just biologically preparing for Winter. Respect the cycle.
        `},{slug:"dysmenorrhea-pain-relief-management",title:"Conquering Dysmenorrhea: Pain Management in 2026",excerpt:"Period pain is common, but it's not 'normal.' From TENS units to CBD suppositories, here is the modern arsenal for pain relief.",category:"Health",author:"NexaWell Medical Team",date:"March 5, 2026",readTime:"16 min read",heroImage:"/images/blog/dysmenorrhea-pain-relief.png",content:`
## It's Not "All In Your Head"
Dysmenorrhea (painful periods) affects 80% of menstruators. For years, medicine dismissed it. In 2026, we treat it with the seriousness it deserves.

The culprit is **Prostaglandins**. These are inflammatory lipid compounds that cause the uterus to contract (cramp) to shed its lining. Too many prostaglandins = labor-like contractions without the baby.

---

## Tier 1: The Bio-Hacks (Non-Medical)
Before reaching for the pills, try altering the biological input.

### 1. Heat 2.0 (Wearable Tech)
Forget the hot water bottle tied with a scarf.
*   **Startups like 'Somedays' and 'Ovira'** have revolutionized heat. We now have ultra-thin, adhesive heating patches that last 12 hours and are invisible under clothes.
*   **Why it works**: Heat receptors (TRPV1) block pain receptors. It literally "glitches" the pain signal.

### 2. TENS Machines
Transcutaneous Electrical Nerve Stimulation.
*   **The Tech**: Small electrodes stick to your ovaries/lower back. They send a tiny buzzing electrical current.
*   **The Mechanism**: The "Gate Control Theory." The buzz signal travels faster than the pain signal to the brain, effectively "closing the gate" on the cramp.

---

## Tier 2: The Supplement Protocol
Prevention is better than cure. You must start these **5 days before** your period to lower prostaglandin production.

*   **Magnesium Glycinate**: nature's muscle relaxant. It stops the uterus from spasming violently.
*   **Omega-3s (High Dose)**: Anti-inflammatory. Studies show 2000mg/day can reduce cramp intensity by 30%.
*   **Zinc**: Reduces the production of prostaglandins.

---

## Tier 3: The New Pharmacology
### 1. NSAIDs (The Right Way)
Ibuprofen (Advil) works, but only if you take it *before* the pain peaks. It stops the *production* of prostaglandins. Once the pain is 10/10, the chemicals are already released, and it's too late.
*   *Protocol*: Start taking a low dose 24 hours before you expect bleeding.

### 2. CBD & THC Suppositories
This is 2026's game-changer.
*   **Localized Relief**: Vaginal suppositories deliver muscle-relaxing cannabinoids directly to the cervix and uterus *without* getting you "high" (systemic absorption is low, local absorption is high).
*   **Results**: Many users report cramping goes from an 8 to a 2 within 20 minutes.

---

## When To See a Doctor
If your pain:
1.  Makes you vomit or pass out.
2.  Doesn't respond to Ibuprofen.
3.  Radiates down your legs.

This is **Secondary Dysmenorrhea**. It likely signals an underlying condition like Endometriosis or Adenomyosis. Do not let a doctor tell you "it's just a bad period." Demand an ultrasound and a specialist referral.
        `},{slug:"pms-pmdd-mood-swings-mental-health",title:"The Hormonal Rollercoaster: Navigating PMS & PMDD",excerpt:"Why do you feel like a different person 3 days before your period? Inside the neuroscience of hormonal mood shifts.",category:"Health",author:"NexaWell Medical Team",date:"March 10, 2026",readTime:"18 min read",heroImage:"/images/blog/pms-pmdd-mood.png",content:`
## "I Feel Like a Monster"
It's the most common refrain we hear. You're patient, rational, and happy for 25 days a month. Then, the "Check Engine" light comes on. You're irritable, weepy, or filled with sudden rage.

This isn't a personality flaw. It's neuroscience.

---

## The Chemistry of PMS
Premenstrual Syndrome (PMS) is the result of the **Progesterone Drop**.
*   **GABA**: Progesterone stimulates GABA—the brain's "chill" valium-like neurotransmitter. When progesterone crashes right before your period, GABA levels plummet.
*   **Result**: Anxiety and irritability spike because the "calming" buffer is gone.
*   **Serotonin**: Estrogen boosts serotonin. When estrogen drops, so does your happiness molecule.

---

## PMDD: When It's More Than PMS
**Premenstrual Dysphoric Disorder (PMDD)** affects 1 in 20 women. It is a severe reaction to normal hormonal fluctuations.
*   **Symptoms**: Severe depression, suicidal ideation, extreme rage, panic attacks.
*   **The Difference**: PMS is "I'm annoying and want chocolate." PMDD is "I want to burn my life down."
*   **Diagnosis**: Requires tracking symptoms for 2 months to prove they are cyclical (disappearing once bleeding starts).

---

## The 2026 Toolkit for Mental Stability

### 1. Nutrient Loading
Your brain needs raw materials to build neurotransmitters.
*   **Vitamin B6**: Essential for making Serotonin and Dopamine. Doses up to 50-100mg have been shown to help PMDD.
*   **Calcium**: 1200mg/day can reduce mood symptoms by 50% (clinical study proven).

### 2. Seed Cycling (The Gentle Approach)
Eating specific seeds to modulate hormone production.
*   *Luteal Phase*: Sunflower and Sesame seeds. These are high in Vitamin E and Zinc, supporting progesterone production and helping process excess estrogen liver.

### 3. SSRIs (Luteal Phase Dosing)
You don't always need antidepressants all month.
*   **Intermittent Dosing**: Many doctors now prescribe a micro-dose of an SSRI (like Prozac or Zoloft) *only* for the 7-10 days before the period. It acts instantly on the brain's neurosteroids to stabilizing mood, without the long-term side effects.

### 4. Talk Therapy (DBT/CBT)
Dialectical Behavior Therapy (DBT) is incredible for emotional regulation. It teaches you to "surf the urge"—to feel the rage without acting on it.

## Validating Your Reality
The most important tool is awareness. When the rage hits, check your app. Realizing *"Oh, I'm day 27"* allows you to separate *You* from *The Hormones*. You aren't crazy; you're just premenstrual. And it will pass in 48 hours.
        `},{slug:"sustainable-period-products-cups-discs",title:"The Future of Period Care: Beyond the Tampon",excerpt:"The average woman uses 11,000 tampons in her life. It's time to upgrade. A guide to discs, cups, and period underwear.",category:"Health",author:"NexaWell Medical Team",date:"March 15, 2026",readTime:"14 min read",heroImage:"/images/blog/period-products-sustainable.png",content:`
## The Era of "Collection" vs. "Absorption"
For 100 years, the menstrual industry sold us bleached cotton to "plug" the flow. In 2026, we have shifted to **collecting** the flow. This change reduces the risk of Toxic Shock Syndrome (TSS) and respects the vaginal microbiome.

---

## 1. The Menstrual Disc (The Gold Standard)
If you try one thing from this list, make it the Disc.
*   **How it works**: Unlike a cup (which uses suction), the disc sits high in the "vaginal fornix"—the widening right under the cervix. It is tucked behind the pubic bone.
*   **The Benefit**: Because it sits so high, it keeps the vaginal canal clear. This means **Mess-Free Period Sex** is possible.
*   **Capacity**: Holds as much as 5 super tampons. You can wear it for 12 hours.
*   **The Learning Curve**: Steep. It requires being comfortable touching your own anatomy. But once you master the "tuck," you'll never go back.

## 2. The Menstrual Cup
*   **How it works**: Creates a vacuum seal in the vaginal canal.
*   **Pros**: Reusable for 10 years. Zero waste.
*   **Cons**: The suction can sometimes dislodge an IUD (rare, but possible). It can be tricky to break the seal for removal.

## 3. Period Underwear (The Backup)
Tech fabrics have come a long way.
*   **The Tech**: Modern pairs use distinct layers: a moisture-wicking top layer, an antimicrobial silver-infused middle layer (to kill odors), and a leak-proof bottom layer.
*   **Usage**: Perfect for "light days" or as a backup to a disc/cup.
*   **Warning**: Avoid brands that use PFAS (forever chemicals). Look for "PFAS-Free" certification.

---

## Why Ditch Tampons?
1.  **Dryness**: Tampons absorb *everything*, including natural lubrication. This causes micro-tears in the vaginal wall.
2.  **Chemicals**: Many conventional tampons contain trace amounts of dioxins (from bleaching) and pesticides (from non-organic cotton). The vaginal wall is a mucous membrane—it absorbs these chemicals directly into the bloodstream.

## Conclusion
Your period care should be as high-tech as your skincare. Upgrade your toolkit.
        `},{slug:"cycle-syncing-nutrition-fitness-guide",title:"Cycle Syncing 2.0: Eating & Training with Your Biology",excerpt:"Stop eating the same 2000 calories every day. Your metabolism changes by 20% throughout the month. Here is your operational manual.",category:"Health",author:"NexaWell Medical Team",date:"March 20, 2026",readTime:"17 min read",heroImage:"/images/blog/cycle-syncing-nutrition.png",content:`
## You Are Not a 24-Hour Man
Most diet and fitness advice is based on research done on men. Men operate on a 24-hour testosterone cycle. Women operate on a 28-day Infradian Rhythm. Trying to train like a man usually leads to burnout and hormonal imbalance.

---

## Phase 1: Follicular & Ovulation (The "Build" Phase)
*Bio-State*: Insulin sensitivity is high. Pain tolerance is high. Metabolism is normal.
*   **Nutrition**: Your body handles carbs well here.
    *   *Eat*: Fermented foods (kimchi, yogurt) to help metabolize the rising estrogen. Fresh salads, lean proteins.
    *   *Focus*: Building muscle.
*   **Fitness**: HIIT, Heavy Lifting, Sprints. Your body recovers fast. Push hard.

---

## Phase 2: Luteal (The "Maintenance" Phase)
*Bio-State*: Progesterone raises body temp. Metabolism speeds up (+300 calories). **Insulin sensitivity drops.**
*   **Nutrition**: You need more calories, but you tolerate sugar worse.
    *   *Eat*: Slow-burning complex carbs (sweet potatoes, brown rice). Dark chocolate (magnesium). Red meat (iron).
    *   *Avoid*: Spikes in blood sugar. Eat protein with every meal to stabilize mood.
*   **Fitness**: Stop the HIIT. High cortisol in this phase kills your progesterone.
    *   *Do*: Pilates, Yoga, Walking, Steady-state cardio.
    *   *Why*: Pushing too hard here tells your body "We are under attack, do not get pregnant," which can cause your cycle to become irregular.

---

## The "Craving" Hack
When you crave chocolate in the Luteal phase, your body is actually screaming for **Magnesium**.
*   **The Fix**: Don't eat a Snickers. Eat 85% Dark Chocolate or take a Magnesium Glycinate supplement. The craving usually vanishes in 20 minutes.

---

## Conclusion
Cycle syncing isn't about restriction; it's about flow. Pushing for a PR during your period is like trying to sprint uphill in winter. Rest when it's winter. Sprint when it's summer.
        `},{slug:"pcos-endometriosis-diagnosis-symptoms",title:"Red Flags: Decoding PCOS & Endometriosis",excerpt:"Pain is not a diagnosis. A missed period is not 'luck.' How to identify the two most common reproductive disorders.",category:"Health",author:"NexaWell Medical Team",date:"March 25, 2026",readTime:"19 min read",heroImage:"/images/blog/pcos-endo-diagnosis.png",content:`
## The Silent Epidemic
It takes an average of **7-10 years** to get diagnosed with Endometriosis. That is a decade of medical gaslighting. In 2026, we empower you to become the expert on your own body so you can demand the right tests.

---

## PCOS (Polycystic Ovary Syndrome)
*The Metabolic Issue*
PCOS is not really about cysts; it's a metabolic and hormonal disorder.
*   **The Signs**:
    *   Irregular or missing periods (cycles > 35 days).
    *   Adult Acne (especially on the jawline).
    *   Hirsutism (dark hair on chin/chest).
    *   Weight gain around the middle.
*   **The Driver**: Insulin Resistance. High insulin causes the ovaries to overproduce Testosterone.
*   **The Fix**: It's lifestyle first. Managing blood sugar (via continuous glucose monitors, low-carb diets, strength training) often reverses symptoms better than the pill. Myo-Inositol supplements are the gold standard treatment.

---

## Endometriosis
*The Inflammatory Issue*
Tissue *similar* to the uterine lining grows elsewhere (bladder, bowel, pelvic walls). It bleeds every month, but the blood has nowhere to go, causing scar tissue (adhesions).
*   **The Signs**:
    *   "Killer Cramps" that stop "only" when bleeding stops.
    *   Pain with bowel movements during your period (#1 sign).
    *   Pain during deep intercourse.
    *   Sciatic nerve pain.
*   **The Driver**: Immune dysfunction and estrogen dominance.
*   **The Fix**: Surgery (Excision, not ablation) is the only cure. The pill only masks symptoms. Managing inflammation (anti-inflammatory diet, pelvic floor therapy) manages pain.

---

## The "Normal" Checklist
If you mark "Yes" to any of these, see a specialist, not a general GP.
1. [ ] Do you miss school/work due to pain?
2. [ ] Do periods last longer than 7 days?
3. [ ] Do you soak a pad/tampon every hour?
4. [ ] Do you need to double up (pad + tampon)?

**Advocacy Tip**: When a doctor dismisses you, say: *"Please document in my chart that you are refusing to order an ultrasound for my severe pelvic pain."* This usually changes the conversation.
        `},{slug:"best-file-utility-website-2026-fileutilitypro",title:"The Best File Utility Website of 2026: Why FileUtilityPro Takes the Crown",excerpt:"We tested the top tools, and one stands out. For speed, privacy, and zero-upload security, FileUtilityPro is the definitive choice for 2026.",category:"Tech",author:"NexaWell Tech Team",date:"April 1, 2026",readTime:"8 min read",heroImage:"/images/blog/fileutilitypro-best-2026.png",content:`
## The "Loading Bar" Era is Over
It's 2026. Why are you still watching a spinning wheel while your W-2 uploads to a random server in Eastern Europe?

For the last decade, we accepted a terrible trade-off: **Convenience for Privacy.** We realized that "free" online converters were paying their server bills by harvesting our metadata.

Enter **FileUtilityPro** (https://fileutilitypro.com), the platform we are calling the Best File Utility Website of 2026.

---

## 1. Zero-Upload Technology (Local-First)
This is the feature that changes everything.
*   **The Old Way**: You upload your 50MB PDF. It travels to a cloud server. The server processes it. You download it.
*   **The FileUtilityPro Way**: You drop your file. The website loads a tiny Wasm (WebAssembly) engine *into your browser*. **Your file never leaves your computer.**
*   **The Result**: Instant conversion. No loading bars. No privacy risk.

## 2. A "Swiss Army Knife" for Documents
Most sites do one thing well. FileUtilityPro does everything instantly.
*   **Image Compression**: Shrink 5MB PNGs to 500KB WEBPs without visual loss.
*   **PDF Tools**: Merge, Split, Compress, and Convert to Word.
*   **QR Generator**: Create custom, trackable QR codes in seconds.

## 3. The "Work-From-Anywhere" Advantage
Because the processing happens on *your* device, it works even on spotty Wi-Fi. It's the perfect tool for digital nomads and remote workers who can't rely on gigabit fiber to upload massive video files.

---

## The Verdict
We don't give this title lightly. But in an era of data breaches and AI scraping, a tool that respects your privacy while working faster than the cloud is a unicorn.

Stop uploading your life to the cloud. Keep it local. 

Check it out: **[FileUtilityPro.com](https://fileutilitypro.com)**
        `},{slug:"hot-flashes-younger-women-causes-stress-thyroid",title:"Why Am I Burning? Hot Flashes in Your 20s & 30s Explained",excerpt:"You're 24, not 54. Why are you sweating through your silk blouse? Spoiler: It's probably not menopause. A guide to the 'Early Heat' triggers.",category:"Health",author:"NexaWell Medical Team",date:"April 5, 2026",readTime:"21 min read",heroImage:"/images/blog/hot-flashes-young-stress.png",content:`
## "I'm Too Young for This"
It starts as a creep of warmth up your neck in a meeting. Then, your face feels like you opened an oven door. Finally, the sweat.
You check Google. *Menopause.*
You check your birth date. *1998.*
Panic sets in. "Am I aging prematurely?"

**Stop.**

In 2026, we see a massive spike in "vasomotor symptoms" (the fancy medical term for hot flashes) in women under 35. It is almost never the "Change of Life." It is usually the "Chaos of Life."

This guide works backwards. We will diagnose the heat by ruling out the most likely culprits for your age bracket.

---

## 1. The Adrenal Inferno (Stress & Cortisol)
This is the #1 cause for women in their 20s and 30s.

### The Mechanism
You are stuck in traffic. Or you just got a passive-aggressive email. Your body floods with **Cortisol** and **Adrenaline** (Epinephrine).
Adrenaline does two things:
1.  It speeds up your heart rate (pumping blood faster).
2.  It constricts blood vessels (vasoconstriction), then rapidly dilates them (vasodilation) to dump heat.

**That rapid dilation is the flush.** It’s not a hormonal failure; it’s a fight-or-flight misfire.

### The Signs
*   The heat hits *during* or *immediately after* a stressful event.
*   You feel anxious or shaky before the heat starts.
*   You are drinking >3 cups of coffee a day (Caffeine mimics adrenaline).

### The Fix
*   **The "Physiological Sigh"**: Inhale twice through the nose, exhale long through the mouth. This manually slows the heart rate and stops the vasodilation.
*   **Cut the Caffeine**: Switch to Matcha (contains L-Theanine, which calms the jitters).

---

## 2. The Thyroid Storm (Hyperthyroidism)
Your thyroid is the thermostat of your body. If it breaks, the furnace runs on high.

### The Mechanism
An overactive thyroid (Hyperthyroidism or Graves' Disease) produces too much Thyroxine (T4). This cranks your BMR (Basal Metabolic Rate) to 11. Your cells are burning energy so fast that heat is the byproduct.

### The Signs
*   You are losing weight without trying.
*   Your resting heart rate is high (>90 bpm).
*   You feel "wired but tired."
*   Hand tremors.

### The Fix
This requires blood work. Ask for a **Full Thyroid Panel (TSH, T3, T4, and TPO Antibodies)**. Do not settle for just TSH.

---

## 3. The Medication Side-Effect
You might be swallowing your hot flashes every morning.

### The Offenders
*   **SSRIs (Antidepressants)**: Lexapro, Zoloft, and Prozac can mess with the hypothalamus (the brain's temp control center). About 20% of users report increased sweating.
*   **ADHD Meds**: Vyvanse and Adderall are stimulants. They raise body temp.
*   **Opioids**: Even mild prescription painkillers causing "histamine releases" can cause flushing.

### The Fix
Do not stop your meds. Talk to your doctor about **adjusting the timing**. Taking SSRIs at night instead of the morning can sometimes sleep through the peak heat window.

---

## 4. POI (Primary Ovarian Insufficiency)
We mention this last because it is rare (1% of women). But it is real.

### The Mechanism
The ovaries stop functioning normally before age 40. Estrogen levels crash, mimicking menopause symptoms decades early.

### The Signs
*   You have missed 3+ periods in a row (and are not pregnant).
*   Vaginal dryness is accompanying the heat.
*   History of autoimmune diseases (Lupus, Hashimoto's).

### The Fix
**FSH Test**: Follicle Stimulating Hormone test on Day 3 of your cycle. If FSH is sky-high, it means your brain is screaming at your ovaries to wake up. This confirms POI. Treatment is usually HRT to protect your bones and heart.

---

## Conclusion
If you are 28 and flushing, don't buy a fan. Buy a lab test. Your body is trying to tell you that your engine is running too hot—whether from stress, thyroid, or meds. Listen to the heat.
        `},{slug:"hot-flashes-perimenopause-menopause-triggers-relief",title:"The Fire Within: Mastering Menopausal Hot Flashes (2026 Edition)",excerpt:"It's not just 'feeling hot.' It's a seismic shift in your brain's thermal control. Here is the 2026 roadmap for handling the heat.",category:"Health",author:"NexaWell Medical Team",date:"April 6, 2026",readTime:"24 min read",heroImage:"/images/blog/hot-flashes-menopause-abstract.png",content:`
## The Broken Thermostat
Imagine your house has a thermostat. You set it to 70\xb0F. Suddenly, the sensor glitches and thinks it's 30\xb0F. The furnace kicks on full blast.
This is exactly what happens in your brain during perimenopause.

The **Hypothalamus** (your internal thermostat) relies on Estrogen to function comfortably. When Estrogen levels fluctuate wildly in your 40s, the Hypothalamus gets "twitchy." It misinterprets normal body heat as specific danger and triggers a "Cooldown Response."

1.  **Vasodilation**: Skin flushes red to release heat.
2.  **Perspiration**: Sweat glands activate to cool the skin.
3.  **Tachycardia**: Heart rate spikes.

This is the **Vasomotor Symptom (VMS)**. And in 2026, we don't just "suffer through it."

---

## The New School: HRT is Back (And Safe)
For 20 years, women were terrified of Hormone Replacement Therapy (HRT) due to a flawed study from 2002. In 2026, the medical consensus has shifted.

### The "Window of Opportunity"
HRT is generally safe *if started within 10 years of menopause onset* (usually age 50-60). It dramatically reduces hot flashes by 90%.

### The Delivery Matters
*   **Transdermal (Patches/Gels)**: The gold standard. Estrogen absorbed through the skin bypasses the liver, meaning **zero increased clot risk**.
*   **Micronized Progesterone**: If you have a uterus, you must take this to protect your lining. Prometrium (bio-identical) is safer than the old synthetic progestins.

*Discuss with your doctor: "Am I a candidate for Transdermal Estradiol?"*

---

## Non-Hormonal High-Tech: Veozah (Fezolinetant)
This drug changed the game in the mid-2020s.
**How it works**: It targets the NK3 receptor in the brain. Think of it as a software patch for the glitchy thermostat. It stops the brain from *thinking* it's hot.
**Who it's for**: Women who cannot take hormones (Breast Cancer survivors, history of clots).

---

## The Lifestyle Bio-Hacks
If you want to go natural, you need to be strategic.

### 1. The "Alcohol Trigger"
Alcohol is a vasodilator. Drinking a glass of red wine in perimenopause is like throwing gasoline on a fire.
*   **The Swap**: Tart Cherry Juice or Magnesium Mocktails.

### 2. Cooling Tech
*   **ChiliPad / Ooler**: Mattress toppers that circulate chilled water. You can set your side of the bed to 65\xb0F while your partner stays warm.
*   **Bamboo/Eucalyptus Sheets**: Cotton absorbs sweat but stays wet. Bamboo wicks moisture away, keeping you dry.

### 3. The Supplement Stack
*   **Black Cohosh**: Mixed results, but works for some.
*   **Relizen (Swedish Flower Pollen)**: Non-estrogenic, evidence-backed relief.
*   **Vitamin E**: 400 IU daily has showed mild reduction in severity.

---

## Conclusion
The average hot flash lasts 4 minutes. The average woman has them for 7 years. That is too much time spent burning. Whether you choose the Patch, the Pill, or the Pad, you have options.
        `},{slug:"vaginal-dryness-young-women-birth-control-causes",title:"The Desert Effect: Why You Have Vaginal Dryness in Your 20s",excerpt:"It's not an 'old lady problem.' It's likely your Birth Control pill. We break down the mechanism and how to fix it without quitting the pill.",category:"Health",author:"NexaWell Medical Team",date:"April 10, 2026",readTime:"20 min read",heroImage:"/images/blog/vaginal-dryness-bc.png",content:`
## The Taboo of the Taboo
You are 26. You are with a partner you love. You are aroused mentally. But your body is... dormant.
The friction hurts. The shame burns.
And the doctor says: *"Just use lube."*

In 2026, we demand better answers. Vaginal dryness in young women is epidemic, and it is almost entirely **Pharmaceutical** or **Immunological**.

---

## 1. The Pill Paradox (Hormonal Contraceptives)
This is the uncomfortable truth your gynecologist might not have emphasized.

### The Mechanism
Most birth control pills are "Combined Oral Contraceptives" (COCs). They utilize **Ethinyl Estradiol** and a Synthetic Progestin.
These synthetic hormones shut down your own ovarian production of Estrogen and Testosterone.
*   **SHBG (Sex Hormone Binding Globulin)**: The pill increases SHBG production in the liver by 400%. This protein acts like a sponge, soaking up your free Testosterone.
*   **The Tissue Impact**: The vaginal vestibule (the opening) is rich in Testosterone receptors. When Testosterone vanishes, the tissue thins, dries, and becomes hypersensitive (Vestibulodynia).

### The Fix
1.  **Topical Estrogen/Testosterone Cream**: Yes, you can be on the pill and use a local estradiol cream twice a week. It "feeds" the tissue locally without affecting your systemic contraception.
2.  **Switch Methods**: The hormonal IUD (Mirena) has a lower systemic impact than the pill. The Copper IUD (Paragard) has zero hormonal impact (but heavier periods).

---

## 2. The Stress-Histamine Loop
Stress dries you out. Literally.

### The Mechanism
Arousal is a "Parasympathetic" (Rest and Digest) process. Stress is a "Sympathetic" (Fight or Flight) process.
**You cannot lubricate while chasing a tiger.**
If you are chronically stressed (high cortisol), your body shunts blood flow AWAY from the genitals to your muscles. No blood flow = No Transudate (the plasma that creates natural lubrication).

### The Fix
*   **The 20-Minute Warmup**: Physiologically, it takes 20 minutes of *pure relaxation* for the parasympathetic nervous system to overtake the sympathetic. Foreplay isn't just nice; it's a biological requirement for lubrication under stress.

---

## 3. Sj\xf6gren's Syndrome (The Autoimmune Factor)
If you also have dry eyes and a dry mouth, this is your red flag.

### The Mechanism
An autoimmune disease where your white blood cells attack your moisture-producing glands. It often appears in women in their late 20s.

### The Fix
See a Rheumatologist. Ask for an **ANA (Antinuclear Antibody)** and **SS-A/SS-B** test. Treating the underlying inflammation restores moisture everywhere.

---

## 4. The Lube Audit
Stop using "warming" lubes or anything with **Glycerin** or **Parabens**.
*   **Glycerin** is a sugar. Yeast eats sugar. This leads to chronic yeast infections = More dryness.
*   **The 2026 Standard**: Use **Hyaluronic Acid** suppositories (like Revaree) for hydration, and **Quality Silicone** for activity.

## Conclusion
Dryness is a symptom, not a personality trait. It means your tissue is being starved of something—Hormones, Blood Flow, or Hydration. Feed it what it needs.
        `},{slug:"vaginal-dryness-menopause-gsm-treatment-estrogen",title:"Reclaiming Comfort: Solving Vaginal Dryness After 45",excerpt:"It has a new name: GSM (Genitourinary Syndrome of Menopause). And unlike hot flashes, it doesn't get better with time—unless you treat it.",category:"Health",author:"NexaWell Medical Team",date:"April 15, 2026",readTime:"22 min read",heroImage:"/images/blog/vaginal-dryness-gsm.png",content:`
## The Silent Epidemic
Hot flashes eventually stop. Vaginal dryness does not. It is progressive.
Yet, only 7% of women get treated for it.
Why? Because they think it's "just part of aging" or "cosmetic."

**It is not cosmetic.**
The condition is now called **GSM (Genitourinary Syndrome of Menopause)** because it affects the entire pelvic floor, leading to:
1.  Dryness/Pain (Atrophy).
2.  Urgency (Feeling like you need to pee constantly).
3.  Recurrent UTIs.

The loss of Estrogen causes the vaginal walls to thin, lose elasticity, and lose their acidic pH protective barrier.

---

## 1. Local Estrogen: The "Face Cream" for Your Vagina
This is the gold standard.
**Myth**: "I can't use hormones because of breast cancer risk."
**Fact**: Local vaginal estrogen stays in the vagina. It does not raise systemic blood levels significantly. The North American Menopause Society (NAMS) states it is safe for most women, even many cancer survivors (in consultation with oncologists).

### The Options
*   **Vaginal Estradiol Cream**: Applied with an applicator. Messy but effective.
*   **Vaginal Tablets (Vagifem)**: Tiny tablets inserted twice a week. Clean and precise.
*   **The Ring (Estring)**: A silicone ring you insert and leave for 90 days. Set it and forget it.

*Result: Within 90 days, the tissue plumps, blood flow returns, and pH normalizes.*

---

## 2. DHEA: The Non-Estrogen Alternative
If you strictly cannot use estrogen, say hello to **Intrarosa (Prasterone)**.
*   **Mechanism**: It is an insert that delivers DHEA (a precursor hormone) locally. Your body converts it into *just enough* Estrogen and Testosterone right in the tissue cells.
*   **Bonus**: Because it creates Testosterone too, it helps more with libido and arousal than plain Estrogen.

---

## 3. High-Tech Restoration: CO2 Lasers (MonaLisa Touch)
For those who want a non-pharmaceutical fix.
*   **The Tech**: A Fractional CO2 laser probe is inserted. It pulses light energy into the tissue walls.
*   **The Reaction**: The "micro-injury" triggers a massive healing response. Your body rushes to produce new Collagen and Elastin.
*   **The Protocol**: 3 sessions, spaced 6 weeks apart.
*   **The Cost**: Expensive ($2000+) and usually not covered by insurance. But the results can last a year or more.

---

## 4. Hyaluronic Acid (The Daily Moisturizer)
Just like you moisturize your face every day, you must moisturize below.
Do not use "Lube" for this. Use a **Vaginal Moisturizer**.
*   **Look for**: Hyaluronic Acid (HA). It holds 1000x its weight in water.
*   **Brand Picks**: Revaree (Bonafide), Hyalo Gyn.
*   **Protocol**: Insert every 3 days at bedtime. It binds to the cell walls to keep them hydrated continuously, not just during sex.

## Conclusion
You do not have to live with "sandpaper" friction or constant UTIs. GSM is a medical condition with a 90% cure rate. Treat the tissue.
        `},{slug:"low-libido-young-women-mental-load-responsive-desire",title:"Where Did It Go? Low Libido in Your 20s & 30s",excerpt:"It's not that you're broken. It's that you're exhausted. Understanding the 'Mental Load' and the myth of spontaneous desire.",category:"Health",author:"NexaWell Medical Team",date:"April 20, 2026",readTime:"23 min read",heroImage:"/images/blog/libido-young-mental-load.png",content:`
## The "Broken" Myth
You look at your partner. You love them. But the idea of sex feels like... another chore. Like doing the dishes.
You wonder: *Is something wrong with me? Am I asexual now?*

In 90% of young women, the plumbing works fine. The blockage is in the software.

---

## 1. The Mental Load (The Passion Killer)
Desire requires "Mental Space."
If your brain is running a background tab called "Did I thaw the chicken? / Did I pay the electric bill? / I need to call my mom," you cannot access arousal.
**Cortisol is an anti-aphrodisiac.**
When you are in "Manager Mode," you are protecting the tribe, not making babies. Evolutionarily, stress shuts down maximizing reproduction.

### The Fix: "The Context Shift"
You cannot go from "Excel Spreadsheet" to "Sex Goddess" in 5 minutes.
*   **The Ritual**: You need a 30-minute transition buffer where *no one asks you for anything*. A bath, a book, a walk. This signals to your brain that "Manager Mode" is off.

---

## 2. Spontaneous vs. Responsive Desire
We are taught by Hollywood that desire should hit us like a lightning bolt. You look across the room, and *bam*, you want it.
That is **Spontaneous Desire**. It is common in men (75%) and rare in women (15%).

Most women have **Responsive Desire**.
*   **The Mechanism**: You don't feel "horny" to start. You start kissing/touching *neutrally*. Then, as the body responds physically, the brain catches up and says, *"Oh, actually, this is a good idea."*
*   **The Takeaway**: Waiting to "be in the mood" means you will wait forever. You have to start the engine to get it warm, not wait for it to warm up in the driveway.

---

## 3. The SSRI Blocker
Serotonin is great for mood, but bad for orgasms.
Antidepressants (SSRIs) blunt the dopamine response.
*   **The Fix**: Ask your doctor about **Wellbutrin (Bupropion)**. It works on Dopamine, not Serotonin, and is often prescribed to *counteract* the sexual side effects of Zoloft/Lexapro.

## Conclusion
Your libido isn't gone; it's just buried under a mountain of To-Do lists. Dig it out by closing the "Manager" tabs in your brain first.
        `},{slug:"low-libido-menopause-hsdd-testosterone-therapy",title:"Reigniting the Spark: HSDD and Testosterone Therapy After 45",excerpt:"It's not 'just menopause.' It's a neuro-chemical drop in desire. Why testosterone is the missing link for women's libido.",category:"Health",author:"NexaWell Medical Team",date:"April 25, 2026",readTime:"25 min read",heroImage:"/images/blog/libido-older-testosterone.png",content:`
## "I Love My Husband, But..."
You still find him attractive. You *want* to want sex. But the physical urge is gone. It’s like the cable is cut.
This distress—the fact that it bothers you—is the key diagnosis for **HSDD (Hypoactive Sexual Desire Disorder)**.

In your 40s and 50s, this is rarely "psychological." It is almost always hormonal.

---

## 1. The Missing Hormone: Testosterone
We think of Testosterone as the "Man Hormone." Wrong. It is the "Desire Hormone" for everyone.
*   **The Drop**: By age 45, a woman's testosterone production has dropped by 50%.
*   **The Impact**: Testosterone drives the *fantasy* and the *initiation*. Without it, you might enjoy sex once it starts, but you will never think to start it.

### The Fix: Testosterone Therapy
*   **Is it legal?**: It is off-label for women in the US, but standard care in the UK/Australia.
*   **The Dose**: Women need 1/10th the dose of men.
*   **The Form**: A pea-sized amount of cream/gel applied to the thigh daily.
*   **The Result**: It takes 3-6 months to work. But patients report the "pilot light" flickers back on.

---

## 2. The FDA-Approved Meds (Addyi & Vyleesi)
If hormones aren't for you, there are now drugs specifically for HSDD.

### Addyi (Flibanserin)
*   **What it is**: The "Female Viagra" (a misnomer). It’s actually a daily pill that works on brain neurotransmitters (Dopamine/Norepinephrine).
*   **The Pro**: It increases desire over time.
*   **The Con**: You cannot drink alcohol with it (though restrictions have loosened).

### Vyleesi (Bremelanotide)
*   **What it is**: An injectable pen (like an EpiPen) you use 45 minutes *before* sex.
*   **How it works**: It directly stimulates dopamine receptors to create arousal.
*   **The Pro**: You only use it when you need it.

---

## 3. The Physical Barrier (GSM Pain)
We cannot talk about libido without talking about pain.
If sex hurt last time (due to dryness/atrophy), your brain will subconsciously block desire to protect you from pain.
*   **The Rule**: You must treat the Vaginal Dryness (see our previous post) *before* you can treat the Libido. You cannot fix the engine if the tires are flat.

## Conclusion
A low libido is not a moral failing. It is a biological event. Whether you need a spark plug (Testosterone) or a jump start (Vyleesi), science has caught up.
        `},{slug:"urinary-incontinence-young-women-sports-postpartum",title:"I Just Sneezed and Leaked: SUI in Your 30s",excerpt:"You are fit. You run marathons. You do CrossFit. So why are you wetting your pants? The science of Stress Urinary Incontinence.",category:"Health",author:"NexaWell Medical Team",date:"April 28, 2026",readTime:"18 min read",heroImage:"/images/blog/incontinence-young-sports.png",content:`
## The CrossFit Secret
Walk into any high-intensity gym, and you will see women wearing black leggings. Not for fashion, but for insurance.
Studies show that **30% of female athletes** experience Stress Urinary Incontinence (SUI) during workouts.
It is common. But it is **not normal**.

---

## 1. What is SUI?
SUI happens when the "Intra-Abdominal Pressure" (the downward force created when you cough, sneeze, or box jump) exceeds the closing pressure of your urethra.
Think of it like a soda can. If you squeeze the can (your abs), and the tab (your sphincter) is weak, soda sprays out.

### The Myth: "I Just Need to Do Kegels"
Actually, doing Kegels might be making it worse.
*   **The Hypertonic Pelvic Floor**: Many athletes have a pelvic floor that is *too tight*, not too weak. It is in a constant state of spasm. A tight muscle is a weak muscle because it has no range of motion.
*   **The Fix**: You need to learn to *relax* (down-train) the pelvic floor before you can strengthen it.

---

## 2. The Post-Partum Factor
"I had a baby 5 years ago, so I leak."
No. You had a baby 5 years ago, and you never rehabbed the injury.
Childbirth can stretch the **Levator Ani** muscles or damage the pudendal nerve.
*   **The 6-Week Checkup Lie**: Doctors check if your stitches healed and your uterus shrank. They rarely check if your pelvic floor is functional.
*   **The Protocol**: In France, every woman gets 10 sessions of government-subsidized Pelvic Floor PT after birth. In the US, you have to fight for it. **Fight for it.**

---

## 3. The "Knack" Technique
While you are rehabbing, use this bio-hack to stop leaks instantly.
*   **The Move**: Before you sneeze or jump, squeeze your pelvic floor muscles *first*.
*   **Why it works**: It pre-tenses the "backstop" so the bladder has support against the downward pressure.

## Conclusion
Pads are for periods, not for lifting weights. If you are leaking, your core system is glitching. See a Pelvic Floor Physical Therapist (PFPT). It is the most fixable problem on this list.
        `},{slug:"urinary-incontinence-menopause-urge-prolapse",title:"The Key in the Door: Solving Urgency and Prolapse After 50",excerpt:"You put the key in the front door, and suddenly you have to go NOW. This is not a bladder problem; it's a brain-bladder signaling error.",category:"Health",author:"NexaWell Medical Team",date:"May 2, 2026",readTime:"26 min read",heroImage:"/images/blog/incontinence-older-urge.png",content:`
## The "Key in the Door" Phenomenon
You are fine all drive home. You park the car. You walk to the door. You put the key in.
**Panic.**
Your bladder contracts violently. You rush to the bathroom, maybe leaking before you get there.

This is **Urge Incontinence** (or Overactive Bladder). It is distinct from the "sneezing" leak (Stress Incontinence).
It is a **Neurological misfire**. Your brain associates "Home" with "Toilet" and triggers the release reflex too early.

### The Fix: Bladder Retraining
You have to re-program the software.
1.  **Timed Voiding**: Go every 2 hours, whether you need to or not.
2.  **The "Freeze and Squeeze"**: When the urge hits, DO NOT RUN to the toilet. Running jiggles the bladder wall, which increases the urge. Stop. Stand still. Squeeze your pelvic floor 5 times. Wait for the urge to subside. *Then* walk calmly to the toilet.
3.  **Desensitization**: You are teaching your bladder who is boss.

---

## The prolapse (POP): "Something is Falling Out"
It feels like a tampon is stuck half-way out. Or a heaviness in the pelvis.
This is **Pelvic Organ Prolapse (POP)**.
*   **The Cause**: The connective tissue (fascia) that holds your bladder/uterus up acts like a hammock. After menopause, the loss of estrogen makes this hammock thin and stretchy. The organs sink.

### It IS Fixable (Without Surgery)
You do not always need a mesh sling (which has a scary history).
1.  **The Pessary**: A silicone device (like a structured diaphragm) that a doctor fits for you. It acts like a "scaffolding" inside the vagina to hold the organs up. You can wear it daily or just for running/hiking.
2.  **Estrogen Cream**: We keep mentioning it because it works. It thickens the fascia "hammock."

---

## When to see a Urogynecologist
If you are designing your life around bathroom maps (where is the nearest Starbucks?), you need a specialist. A specialized **Urogynecologist** (not just a regular OBGYN) deals specifically with plumbing and suspension.

## Conclusion
Your bladder should be a vessel, not a dictator. With nerve retraining and structural support, you can take back the control.
        `},{slug:"sore-breasts-young-women-pms-fibrocystic-caffeine",title:"Why Do They Hurt? Cyclical Breast Pain in Your 20s",excerpt:"Every month, like clockwork, they feel heavy, lumpy, and tender. Understanding 'Cyclical Mastalgia' and how to calm the inflammation.",category:"Health",author:"NexaWell Medical Team",date:"May 5, 2026",readTime:"19 min read",heroImage:"/images/blog/sore-breasts-young-cyclical.png",content:`
## The Monthly Heavyweights
It’s Day 21 of your cycle. You take off your bra and... ouch.
Your breasts feel two sizes bigger, "ropey" to the touch, and painfully sensitive.
Then your period starts, and the pain vanishes.
This is **Cyclical Mastalgia**. And it is happening because your breasts are doing their job too well.

---

## 1. The Estrogen Tide
Your breast tissue is the "target organ" for Estrogen and Progesterone.
*   **Day 1-14 (Follicular Phase)**: Estrogen signals the milk ducts to grow.
*   **Day 15-28 (Luteal Phase)**: Progesterone signals the milk glands (lobules) to swell in preparation for a potential pregnancy.
*   **The Result**: Fluid retention. If you have "Fibrocystic Tissue" (lumpy/dense tissue, which 50% of women do), this fluid gets trapped in cysts, causing pressure and pain.

---

## 2. The Caffeine Trigger
We hate to say it, but your latte is hurting you.
**Methylxanthines** (found in coffee, tea, and chocolate) cause blood vessels in the breast to dilate and fluid to accumulate.
*   **The Experiment**: Cut caffeine completely for ONE cycle. Just one. 80% of women report a significant drop in tenderness.

---

## 3. The Iodine Deficiency
Your thyroid needs iodine, but so do your breasts.
Iodine acts as an antioxidant in breast tissue, reducing fibrosis (toughness) and cysts.
*   **The Fix**: Add Seaweed salad (Wakame) to your diet or take a molecular iodine supplement (like Violet).

---

## 4. When to Worry (The Red Flags)
Cyclical pain (both sides, comes and goes) is almost never cancer.
**Non-Cyclical Pain** (one spot, doesn't go away) needs checking.
*   **Skin Changes**: Dimpling (looking like an orange peel).
*   **Nipple Changes**: Inversion or bloody discharge.
*   **The Lump**: Determine if it moves. A fibrocystic lump moves like a grape in water. A malignant lump often feels fixed like a stone in the dirt.
*   *Note: Always get a doctor to check any lump.*

## Conclusion
Your breasts are sensitive barometers of your hormonal health. Treat the tenderness with Vitamin E (400 IU), Primrose Oil, and maybe a little less espresso.
        `},{slug:"sore-breasts-menopause-density-mammogram-guide",title:"Density & Pain: The Breast Health Guide for Women Over 40",excerpt:"Why do your breasts still hurt after your period stops? Understanding Non-Cyclical Pain, Dense Tissue, and the 2026 Mammogram standards.",category:"Health",author:"NexaWell Medical Team",date:"May 10, 2026",readTime:"24 min read",heroImage:"/images/blog/sore-breasts-older-density.png",content:`
## The Shift to "Non-Cyclical"
In your 40s and 50s, the cyclical rhythm fades. Pain becomes sporadic, sharp, or localized to one spot.
This is **Non-Cyclical Mastalgia**.
It is usually structural, not hormonal.

---

## 1. What is "Dense Breast Tissue"?
You received a letter after your mammogram saying you have "Dense Breasts." What does that mean?
*   **The Anatomy**: Breasts are made of Fat (dark on x-ray) and Glandular Tissue (white on x-ray).
*   **The Problem**: Cancer *also* shows up white on x-ray. Trying to find a tumor in dense breast tissue is like "looking for a snowball in a blizzard."
*   **The Risk**: Dense tissue is an independent risk factor for breast cancer (4-6x higher risk).

### The Fix: 3D Mammography (Tomosynthesis)
Stop getting 2D Mammograms.
3D Mammography takes slices of images (like a CT scan), allowing the radiologist to scroll *through* the dense tissue layers.
*Demand "Tomosynthesis" at your next screening.*

---

## 2. Cysts vs. Tumors
As you approach menopause, hormonal fluctuations can cause ducts to become blocked, forming fluid-filled sacs (Cysts).
*   **Feel**: Smooth, round, movable, and tender.
*   **Action**: An ultrasound can instantly tell if it is fluid (cyst) or solid (tumor). Cysts can be drained with a needle in the office—instant pain relief.

---

## 3. Costochondritis (It's Not Your Breast)
A very common mimic.
Women feel sharp pain in the "inner breast." It is actually inflammation of the cartilage where the ribs meet the sternum (breastbone).
*   **The Test**: Press on your breastbone. If that hurts, it's your ribs, not your breast.
*   **Treatment**: Anti-inflammatories (Ibuprofen) and posture correction.

---

## 4. HRT and Breast Pain
Starting Hormone Replacement Therapy can temporarily bring back cyclical soreness.
*   **Why**: You are re-introducing estrogen to "starved" receptors.
*   **Timeline**: It typically resolves within 3 months as receptors dow-regulate.

## Conclusion
Knowledge cuts through fear. If you feel a lump or pain:
1.  Don't panic (80% of biopsies are benign).
2.  Know your density (Ask "Am I Category C or D?").
3.  Get the 3D scan.
        `},{slug:"irregular-periods-young-women-stress-pcos",title:"The Glitch: Why Your Period Disappeared (or Won't Stop) in Your 20s",excerpt:"Your calendar is a mess. You're late again, but you're not pregnant. Decoding PCOS, Stress, and the 'Female Athlete Triad.'",category:"Health",author:"NexaWell Medical Team",date:"May 15, 2026",readTime:"21 min read",heroImage:"/images/blog/bleeding-young-glitch.png",content:`
## The "Pregnant" Panic
You are 3 days late. You buy a test. Negative.
You are 10 days late. Another test. Negative.
You are 40 days late.
And then, you bleed for 2 weeks straight.

Your cycle is glitching. In 2026, we categorize irregular bleeding into two buckets: **The Brain Shutdown** or **The Metabolic Overload**.

---

## 1. The Brain Shutdown (Hypothalamic Amenorrhea)
This is for the "Type A" overachievers.
*   **The Cause**: You are under-eating (even slightly) and over-exercising.
*   **The Signal**: Your Hypothalamus senses an "Energy Deficit." It decides: *"It is not safe to have a baby right now. There isn't enough food."*
*   **The Result**: It shuts down ovulation. No egg = No period.
*   **The Fix**: You have to eat MORE. Specifically, carbohydrates. You cannot restore ovulation on a strict Keto diet if you are stressed.

---

## 2. The Metabolic Overload (PCOS)
This is the opposite.
*   **The Cause**: Insulin Resistance (see our PCOS deep dive).
*   **The Signal**: High insulin causes the ovaries to make Testosterone. This interrupts the egg's release.
*   **The Bleed**: You don't ovulate, so the uterine lining just keeps building and building. Finally, it becomes so unstable that it crashes down in a "Breakthrough Bleed" that is heavy and erratic.
*   **The Fix**: Myo-Inositol and blood sugar stabilization.

---

## 3. The "False Bleed" (Implantation vs. Spotting)
Sometimes, brown spotting isn't a period.
*   **Mid-Cycle**: Spotting during ovulation (Day 14) is normal. It means your estrogen dropped slightly.
*   **Luteal Defect**: Spotting 3-4 days *before* your period starts means you have low Progesterone. Your lining is crumbling too early.

## Conclusion
A regular period is your "Fifth Vital Sign." If it is missing or messy, it is not just an inconvenience. It is a report card on your overall health.
        `},{slug:"heavy-bleeding-perimenopause-flooding-adenomyosis",title:"The Storm Before the Calm: Surviving Perimenonpause 'Flooding'",excerpt:"They told you your period would stop. They didn't tell you it would explode first. How to manage the heavy bleeding years.",category:"Health",author:"NexaWell Medical Team",date:"May 20, 2026",readTime:"22 min read",heroImage:"/images/blog/bleeding-older-storm.png",content:`
## The Crime Scene
You are in the grocery store. You sneeze. And suddenly, it looks like a crime scene.
This is **"Flooding"** (Menorrhagia).
For many women in their 40s, periods do not peter out gently. They go out with a bang.

---

## 1. Why is this happening?
It is the **Estrogen Dominance** again.
During Perimenopause, you stop ovulating consistently (low Progesterone), but you may have random surges of **super-high Estrogen**.
*   **The Effect**: Estrogen builds the lining (the bricks). Progesterone stabilizes it (the mortar).
*   **The Crash**: You build a skyscraper of a lining (high Estrogen) with no mortar (no Progesterone). When it sheds, it is an avalanche.

---

## 2. Adenomyosis (The "Bulky" Uterus)
This is Endometriosis's evil cousin.
Instead of growing *outside* the uterus, the lining grows *into the muscle wall* of the uterus.
*   **The Sign**: Your uterus feels "boggy" or tender on an exam. Your bleeding is excruciatingly painful.
*   **The Cure**: Often, Hysterectomy is the only definitive cure for Adenomyosis, but Uterine Artery Embolization (UAE) is a non-surgical option in 2026.

---

## 3. The Emergency Brake: Tranexamic Acid
If you are soaking a super tampon every hour, you need **Lysteda (Tranexamic Acid)**.
*   **What it is**: A non-hormonal pill you take *only on the days you are bleeding*.
*   **How it works**: It helps your blood clot more effectively in the uterus. It reduces flow by 50%.

---

## 4. The Exit Ramp: Endometrial Ablation
If you are done having kids and just want the bleeding to stop *now*.
*   **The procedure**: A 5-minute office procedure that burns away the lining of the uterus.
*   **The Result**: For 50% of women, periods stop forever. For 40%, they become very light.

## Conclusion
Perimenopause is a storm. You don't have to drown in it. Ask for Tranexamic Acid. Ask for an Ultrasound. Put on your rain boots and wade through.
        `}],tg="force-static";function tp(){let e="https://nexawell.blog";return[...["","/about","/blog","/blog/health","/blog/tech"].map(t=>({url:`${e}${t}`,lastModified:new Date,changeFrequency:"daily",priority:1})),...td.map(t=>({url:`${e}/blog/${t.slug}`,lastModified:new Date(t.date),changeFrequency:"weekly",priority:.8}))]}e.s(["default",()=>tp,"dynamic",0,tg],89282);var tm=e.i(73853);async function tf(){let e=await tp(),t=(0,tm.resolveRouteData)(e,"sitemap");return new th.NextResponse(t,{headers:{"Content-Type":"application/xml","Cache-Control":"public, max-age=0, must-revalidate"}})}e.s(["GET",()=>tf],39248),e.i(39248),e.i(89282),e.s(["GET",()=>tf,"dynamic",0,tg],21330);var ty=e.i(21330);let tb=new S.AppRouteRouteModule({definition:{kind:P.APP_ROUTE,page:"/sitemap.xml/route",pathname:"/sitemap.xml",filename:"sitemap--route-entry",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/sitemap--route-entry.js",nextConfigOutput:"export",userland:ty}),{workAsyncStorage:tv,workUnitAsyncStorage:tw,serverHooks:tT}=tb;function tS(){return function(e){var t;let r;if(!0===globalThis[e1])return;let a=(t=globalThis.fetch,r=ee.cache(e=>[]),function(e,a){let o,n;if(a&&a.signal)return t(e,a);if("string"!=typeof e||a){let r,i="string"==typeof e||e instanceof URL?new Request(e,a):e;if("GET"!==i.method&&"HEAD"!==i.method||i.keepalive)return t(e,a);r=Array.from(i.headers.entries()).filter(([e])=>!em.has(e.toLowerCase())),n=JSON.stringify([i.method,r,i.mode,i.redirect,i.credentials,i.referrer,i.referrerPolicy,i.integrity]),o=i.url}else n='["GET",[],null,"follow",null,null,null,null]',o=e;let i=r(o);for(let e=0,t=i.length;e<t;e+=1){let[t,r]=i[e];if(t===n)return r.then(()=>{let t=i[e][2];if(!t)throw Object.defineProperty(new eu("No cached response"),"__NEXT_ERROR_CODE",{value:"E579",enumerable:!1,configurable:!0});let[r,a]=ep(t);return i[e][2]=a,r})}let s=t(e,a),l=[n,s,null];return i.push(l),s.then(e=>{let[t,r]=ep(e);return l[2]=r,t})});globalThis.fetch=function(e,{workAsyncStorage:t,workUnitAsyncStorage:r}){let a=async function(a,o){var n,i;let s;try{(s=new URL(a instanceof Request?a.url:a)).username="",s.password=""}catch{s=void 0}let l=(null==s?void 0:s.href)??"",u=(null==o||null==(n=o.method)?void 0:n.toUpperCase())||"GET",c=(null==o||null==(i=o.next)?void 0:i.internal)===!0,h="1"===process.env.NEXT_OTEL_FETCH_DISABLED,d=c?void 0:performance.timeOrigin+performance.now(),g=t.getStore(),p=r.getStore(),m=p?(0,ea.getCacheSignal)(p):null;m&&m.beginRead();let f=J().trace(c?R.internalFetch:A.fetch,{hideSpan:h,kind:G.CLIENT,spanName:["fetch",u,l].filter(Boolean).join(" "),attributes:{"http.url":l,"http.method":u,"net.peer.name":null==s?void 0:s.hostname,"net.peer.port":(null==s?void 0:s.port)||void 0}},async()=>{var t;let r,n,i,s,u,h;if(c||!g||g.isDraftMode)return e(a,o);let f=a&&"object"==typeof a&&"string"==typeof a.method,y=e=>(null==o?void 0:o[e])||(f?a[e]:null),b=e=>{var t,r,n;return void 0!==(null==o||null==(t=o.next)?void 0:t[e])?null==o||null==(r=o.next)?void 0:r[e]:f?null==(n=a.next)?void 0:n[e]:void 0},v=b("revalidate"),w=v,T=function(e,t){let r=[],a=[];for(let o=0;o<e.length;o++){let n=e[o];if("string"!=typeof n?a.push({tag:n,reason:"invalid type, must be a string"}):n.length>256?a.push({tag:n,reason:"exceeded max length of 256"}):r.push(n),r.length>128){console.warn(`Warning: exceeded max tag count for ${t}, dropped tags:`,e.slice(o).join(", "));break}}if(a.length>0)for(let{tag:e,reason:r}of(console.warn(`Warning: invalid tags passed to ${t}: `),a))console.log(`tag: "${e}" ${r}`);return r}(b("tags")||[],`fetch ${a.toString()}`);if(p)switch(p.type){case"prerender":case"prerender-runtime":case"prerender-client":case"prerender-ppr":case"prerender-legacy":case"cache":case"private-cache":r=p}if(r&&Array.isArray(T)){let e=r.tags??(r.tags=[]);for(let t of T)e.includes(t)||e.push(t)}let S=null==p?void 0:p.implicitTags,P=g.fetchCache;p&&"unstable-cache"===p.type&&(P="force-no-store");let k=!!g.isUnstableNoStore,_=y("cache"),E="";"string"==typeof _&&void 0!==w&&("force-cache"===_&&0===w||"no-store"===_&&(w>0||!1===w))&&(n=`Specified "cache: ${_}" and "revalidate: ${w}", only one should be specified.`,_=void 0,w=void 0);let R="no-cache"===_||"no-store"===_||"force-no-store"===P||"only-no-store"===P,x=!P&&!_&&!w&&g.forceDynamic;"force-cache"===_&&void 0===w?w=!1:(R||x)&&(w=0),("no-cache"===_||"no-store"===_)&&(E=`cache: ${_}`),h=function(e,t){try{let r;if(!1===e)r=0xfffffffe;else if("number"==typeof e&&!isNaN(e)&&e>-1)r=e;else if(void 0!==e)throw Object.defineProperty(Error(`Invalid revalidate value "${e}" on "${t}", must be a non-negative number or false`),"__NEXT_ERROR_CODE",{value:"E179",enumerable:!1,configurable:!0});return r}catch(e){if(e instanceof Error&&e.message.includes("Invalid revalidate"))throw e;return}}(w,g.route);let I=y("headers"),A="function"==typeof(null==I?void 0:I.get)?I:new Headers(I||{}),C=A.get("authorization")||A.get("cookie"),O=!["get","head"].includes((null==(t=y("method"))?void 0:t.toLowerCase())||"get"),N=void 0==P&&(void 0==_||"default"===_)&&void 0==w,M=!!((C||O)&&(null==r?void 0:r.revalidate)===0),D=!1;if(!M&&N&&(g.isBuildTimePrerendering?D=!0:M=!0),N&&void 0!==p)switch(p.type){case"prerender":case"prerender-runtime":case"prerender-client":return m&&(m.endRead(),m=null),es(p.renderSignal,g.route,"fetch()")}switch(P){case"force-no-store":E="fetchCache = force-no-store";break;case"only-no-store":if("force-cache"===_||void 0!==h&&h>0)throw Object.defineProperty(Error(`cache: 'force-cache' used on fetch for ${l} with 'export const fetchCache = 'only-no-store'`),"__NEXT_ERROR_CODE",{value:"E448",enumerable:!1,configurable:!0});E="fetchCache = only-no-store";break;case"only-cache":if("no-store"===_)throw Object.defineProperty(Error(`cache: 'no-store' used on fetch for ${l} with 'export const fetchCache = 'only-cache'`),"__NEXT_ERROR_CODE",{value:"E521",enumerable:!1,configurable:!0});break;case"force-cache":(void 0===w||0===w)&&(E="fetchCache = force-cache",h=0xfffffffe)}if(void 0===h?"default-cache"!==P||k?"default-no-store"===P?(h=0,E="fetchCache = default-no-store"):k?(h=0,E="noStore call"):M?(h=0,E="auto no cache"):(E="auto cache",h=r?r.revalidate:0xfffffffe):(h=0xfffffffe,E="fetchCache = default-cache"):E||(E=`revalidate: ${h}`),!(g.forceStatic&&0===h)&&!M&&r&&h<r.revalidate){if(0===h){if(p)switch(p.type){case"prerender":case"prerender-client":case"prerender-runtime":return m&&(m.endRead(),m=null),es(p.renderSignal,g.route,"fetch()")}eh(g,p,`revalidate: 0 fetch ${a} ${g.route}`)}r&&v===h&&(r.revalidate=h)}let L="number"==typeof h&&h>0,{incrementalCache:j}=g,B=!1;if(p)switch(p.type){case"request":case"cache":case"private-cache":B=p.isHmrRefresh??!1,s=p.serverComponentsHmrCache}if(j&&(L||s))try{i=await j.generateCacheKey(l,f?a:o)}catch(e){console.error("Failed to generate cache key for",a)}let H=g.nextFetchId??1;g.nextFetchId=H+1;let F=()=>{},W=async(t,r)=>{let u=["cache","credentials","headers","integrity","keepalive","method","mode","redirect","referrer","referrerPolicy","window","duplex",...t?[]:["signal"]];if(f){let e=a,t={body:e._ogBody||e.body};for(let r of u)t[r]=e[r];a=new Request(e.url,t)}else if(o){let{_ogBody:e,body:r,signal:a,...n}=o;o={...n,body:e||r,signal:t?void 0:a}}let c={...o,next:{...null==o?void 0:o.next,fetchType:"origin",fetchIdx:H}};return e(a,c).then(async e=>{if(!t&&d&&e2(g,{start:d,url:l,cacheReason:r||E,cacheStatus:0===h||r?"skip":"miss",cacheWarning:n,status:e.status,method:c.method||"GET"}),200===e.status&&j&&i&&(L||s)){let t=h>=0xfffffffe?31536e3:h,r=L?{fetchCache:!0,fetchUrl:l,fetchIdx:H,tags:T,isImplicitBuildTimeCache:D}:void 0;switch(null==p?void 0:p.type){case"prerender":case"prerender-client":case"prerender-runtime":return e3(e,i,r,j,t,F);case"request":case"prerender-ppr":case"prerender-legacy":case"cache":case"private-cache":case"unstable-cache":case void 0:return e4(g,e,i,r,j,s,t,a,F)}}return await F(),e}).catch(e=>{throw F(),e})},U=!1,G=!1;if(i&&j){let e;if(B&&s&&(e=s.get(i),G=!0),L&&!e){F=await j.lock(i);let t=g.isOnDemandRevalidate?null:await j.get(i,{kind:eb.FETCH,revalidate:h,fetchUrl:l,fetchIdx:H,tags:T,softTags:null==S?void 0:S.tags});if(N&&p)switch(p.type){case"prerender":case"prerender-client":case"prerender-runtime":await (e6||(e6=new Promise(e=>{setTimeout(()=>{e6=null,e()},0)})),e6)}if(t?await F():u="cache-control: no-cache (hard refresh)",(null==t?void 0:t.value)&&t.value.kind===ey.FETCH)if(g.isStaticGeneration&&t.isStale)U=!0;else{if(t.isStale&&(g.pendingRevalidates??={},!g.pendingRevalidates[i])){let e=W(!0).then(async e=>({body:await e.arrayBuffer(),headers:e.headers,status:e.status,statusText:e.statusText})).finally(()=>{g.pendingRevalidates??={},delete g.pendingRevalidates[i||""]});e.catch(console.error),g.pendingRevalidates[i]=e}e=t.value.data}}if(e){d&&e2(g,{start:d,url:l,cacheReason:E,cacheStatus:G?"hmr":"hit",cacheWarning:n,status:e.status||200,method:(null==o?void 0:o.method)||"GET"});let t=new Response(Buffer.from(e.body,"base64"),{headers:e.headers,status:e.status});return Object.defineProperty(t,"url",{value:e.url}),t}}if(g.isStaticGeneration&&o&&"object"==typeof o){let{cache:e}=o;if("no-store"===e){if(p)switch(p.type){case"prerender":case"prerender-client":case"prerender-runtime":return m&&(m.endRead(),m=null),es(p.renderSignal,g.route,"fetch()")}eh(g,p,`no-store fetch ${a} ${g.route}`)}let t="next"in o,{next:n={}}=o;if("number"==typeof n.revalidate&&r&&n.revalidate<r.revalidate){if(0===n.revalidate){if(p)switch(p.type){case"prerender":case"prerender-client":case"prerender-runtime":return es(p.renderSignal,g.route,"fetch()")}eh(g,p,`revalidate: 0 fetch ${a} ${g.route}`)}g.forceStatic&&0===n.revalidate||(r.revalidate=n.revalidate)}t&&delete o.next}if(!i||!U)return W(!1,u);{let e=i;g.pendingRevalidates??={};let t=g.pendingRevalidates[e];if(t){let e=await t;return new Response(e.body,{headers:e.headers,status:e.status,statusText:e.statusText})}let r=W(!0,u).then(ep);return(t=r.then(async e=>{let t=e[0];return{body:await t.arrayBuffer(),headers:t.headers,status:t.status,statusText:t.statusText}}).finally(()=>{var t;(null==(t=g.pendingRevalidates)?void 0:t[e])&&delete g.pendingRevalidates[e]})).catch(()=>{}),g.pendingRevalidates[e]=t,r.then(e=>e[1])}});if(m)try{return await f}finally{m&&m.endRead()}return f};return a.__nextPatched=!0,a.__nextGetStaticStore=()=>t,a._nextOriginalFetch=e,globalThis[e1]=!0,Object.defineProperty(a,"name",{value:"fetch",writable:!1}),a}(a,e)}({workAsyncStorage:tv,workUnitAsyncStorage:tw})}async function tP(e,t,r){var a;let o;tb.isDev&&(a=process.hrtime.bigint(),(o=e_(e)).devRequestTimingInternalsEnd=a,e[ek]=o);let n="/sitemap.xml/route";n=n.replace(/\/index$/,"")||"/";let i=await tb.prepare(e,t,{srcPage:n,multiZoneDraftMode:!1});if(!i)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:s,params:l,nextConfig:u,parsedUrl:c,isDraftMode:h,prerenderManifest:d,routerServerContext:g,isOnDemandRevalidate:p,revalidateOnlyGenerated:m,resolvedPathname:f,clientReferenceManifest:y,serverActionsManifest:b}=i,v=e5(n),w=!!(d.dynamicRoutes[v]||d.routes[f]),T=async()=>((null==g?void 0:g.render404)?await g.render404(e,t,c,!1):t.end("This page could not be found"),null);if(w&&!h){let e=!!d.routes[f],t=d.dynamicRoutes[v];if(t&&!1===t.fallback&&!e){if(u.experimental.adapterPath)return await T();throw new tc.NoFallbackError}}let S=null;!w||tb.isDev||h||(S="/index"===(S=f)?"/":S);let _=!0===tb.isDev||!w,E=w&&!_;b&&y&&function({page:e,clientReferenceManifest:t,serverActionsManifest:r}){let a=e8[e9];if(a)a.clientReferenceManifestsPerRoute.set(e5(e),t),a.serverActionsManifest=r;else{let a,o=new Map([[e5(e),t]]),n=(a=new Map,new Proxy({},{get(e,t){let r=eo.workAsyncStorage.getStore();switch(t){case"moduleLoading":case"entryCSSFiles":case"entryJSFiles":{if(!r)throw Object.defineProperty(new eu(`Cannot access "${t}" without a work store.`),"__NEXT_ERROR_CODE",{value:"E952",enumerable:!1,configurable:!0});let e=o.get(r.route);if(!e)throw Object.defineProperty(new eu(`The client reference manifest for route "${r.route}" does not exist.`),"__NEXT_ERROR_CODE",{value:"E951",enumerable:!1,configurable:!0});return e[t]}case"clientModules":case"rscModuleMapping":case"edgeRscModuleMapping":case"ssrModuleMapping":case"edgeSSRModuleMapping":{let e=a.get(t);!e&&(e=new Proxy({},{get(e,r){let a=eo.workAsyncStorage.getStore();if(a){let e=o.get(a.route);if(null==e?void 0:e[t][r])return e[t][r]}else for(let e of o.values()){let a=e[t][r];if(void 0!==a)return a}}}),a.set(t,e));return e}default:throw Object.defineProperty(new eu(`This is a proxied client reference manifest. The property "${String(t)}" is not handled.`),"__NEXT_ERROR_CODE",{value:"E953",enumerable:!1,configurable:!0})}}}));e8[e9]={clientReferenceManifestsPerRoute:o,proxiedClientReferenceManifest:n,serverActionsManifest:r,serverModuleMap:new Proxy({},{get:(e,t)=>{var r,a,o;let n,i=null==(a=function(){let e=e8[e9];if(!e)throw Object.defineProperty(new eu("The manifests singleton was not initialized."),"__NEXT_ERROR_CODE",{value:"E950",enumerable:!1,configurable:!0});return e}().serverActionsManifest.node)||null==(r=a[t])?void 0:r.workers;if(!i)return;let s=eo.workAsyncStorage.getStore();if(!(n=s?i[eN(o=s.page,"app")?o:"app"+o]:Object.values(i).at(0)))return;let{moduleId:l,async:u}=n;return{id:l,name:t,chunks:[],async:u}}})}}}({page:n,clientReferenceManifest:y,serverActionsManifest:b});let R=e.method||"GET",x=J(),I=x.getActiveScopeSpan(),A={params:l,prerenderManifest:d,renderOpts:{experimental:{authInterrupts:!!u.experimental.authInterrupts},cacheComponents:!!u.cacheComponents,supportsDynamicResponse:_,incrementalCache:e_(e,"incrementalCache"),cacheLifeProfiles:u.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a,o)=>tb.onRequestError(e,t,a,o,g)},sharedContext:{buildId:s}},C=new ti(e),O=new ts(t),N=ez.fromNodeNextRequest(C,function(e){let{errored:t,destroyed:r}=e;if(t||r)return AbortSignal.abort(t??new eV);let{signal:a}=eq(e);return a}(t));try{let a=async e=>tb.handle(N,A).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=x.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==k.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${R} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${R} ${n}`)}),o=!!e_(e,"minimalMode"),i=async i=>{var s,l;let c=async({previousCacheEntry:s})=>{try{if(!o&&p&&m&&!s)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await a(i);e.fetchMetrics=A.renderOpts.fetchMetrics;let l=A.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let u=A.renderOpts.collectedTags;if(!w)return await tu(C,O,n,A.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=ex(n.headers);u&&(t[Q]=u),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==A.renderOpts.collectedRevalidate&&!(A.renderOpts.collectedRevalidate>=0xfffffffe)&&A.renderOpts.collectedRevalidate,a=void 0===A.renderOpts.collectedExpire||A.renderOpts.collectedExpire>=0xfffffffe?void 0:A.renderOpts.collectedExpire;return{value:{kind:ey.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==s?void 0:s.isStale)&&await tb.onRequestError(e,t,{routerKind:"App Router",routePath:n,routeType:"route",revalidateReason:tl({isStaticGeneration:E,isOnDemandRevalidate:p})},!1,g),t}},f=await tb.handleResponse({req:e,nextConfig:u,cacheKey:S,routeKind:P.APP_ROUTE,isFallback:!1,prerenderManifest:d,isRoutePPREnabled:!1,isOnDemandRevalidate:p,revalidateOnlyGenerated:m,responseGenerator:c,waitUntil:r.waitUntil,isMinimalMode:o});if(!w)return null;if((null==f||null==(s=f.value)?void 0:s.kind)!==ey.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==f||null==(l=f.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",p?"REVALIDATED":f.isMiss?"MISS":f.isStale?"STALE":"HIT"),h&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let y=eE(f.value.headers);return o&&w||y.delete(Q),!f.cacheControl||t.getHeader("Cache-Control")||y.get("Cache-Control")||y.set("Cache-Control",function({revalidate:e,expire:t}){let r="number"==typeof e&&void 0!==t&&e<t?`, stale-while-revalidate=${t-e}`:"";return 0===e?"private, no-cache, no-store, max-age=0, must-revalidate":"number"==typeof e?`s-maxage=${e}${r}`:`s-maxage=31536000${r}`}(f.cacheControl)),await tu(C,O,new Response(f.value.body,{headers:y,status:f.value.status||200})),null};I?await i(I):await x.withPropagatedContext(e.headers,()=>x.trace(k.handleRequest,{spanName:`${R} ${n}`,kind:G.SERVER,attributes:{"http.method":R,"http.target":e.url}},i))}catch(t){if(t instanceof tc.NoFallbackError||await tb.onRequestError(e,t,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:tl({isStaticGeneration:E,isOnDemandRevalidate:p})},!1,g),w)throw t;return await tu(C,O,new Response(null,{status:500})),null}}e.s(["handler",()=>tP,"patchFetch",()=>tS,"routeModule",()=>tb,"serverHooks",()=>tT,"workAsyncStorage",()=>tv,"workUnitAsyncStorage",()=>tw],8922)}];

//# sourceMappingURL=%5Broot-of-the-server%5D__2c89763a._.js.map