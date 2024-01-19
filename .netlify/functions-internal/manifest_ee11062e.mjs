import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_6a89e662.mjs';
import 'clsx';
import 'mime';
import { compile } from 'path-to-regexp';
import 'html-escaper';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

new TextEncoder();

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return toPath;
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    ...serializedManifest,
    assets,
    componentMetadata,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify/functions","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.353d99f1.js"}],"styles":[{"type":"inline","content":"button[data-astro-cid-enahu7k2]{width:auto;margin-left:90%;cursor:pointer;border-radius:10px;border:0;padding:5px 10px;transition:all .2s ease-in-out;background-color:#6137a6}#fr[data-astro-cid-enahu7k2]{text-decoration:none;color:#fff;display:block}button[data-astro-cid-enahu7k2]:hover{transform:scale(.9)}button[data-astro-cid-enahu7k2]:active{transform:scale(1)}#en[data-astro-cid-enahu7k2]{text-decoration:none;display:none;color:#fff}.en #en[data-astro-cid-enahu7k2]{display:block}.fr #fr[data-astro-cid-enahu7k2]{display:none}\nbody{margin:2rem;padding:5rem;background-color:#0606f399}label[data-astro-cid-j7pv25f6]{font-size:medium;margin-right:.5rem}p[data-astro-cid-j7pv25f6]{margin:1rem 5rem;color:#f4f4fa}button[data-astro-cid-j7pv25f6]{font-size:1rem;margin:2rem;padding:.5rem;background-color:#0606f399;border-style:initial;box-shadow:1px 2px #0606f399;border-radius:10%;color:#fff}h1[data-astro-cid-j7pv25f6]{text-align:center;color:#f4f4fa}div[data-astro-cid-j7pv25f6].container{background-color:#f4f4fa;margin-top:3rem;margin-left:auto;margin-right:auto;padding:3rem;width:80%;height:auto;border:1px solid rgb(244,244,250);box-shadow:1px 2px 1px #f4f4fa}div[data-astro-cid-j7pv25f6].container div[data-astro-cid-j7pv25f6]{display:flex;flex-wrap:wrap}.output[data-astro-cid-j7pv25f6]{width:50%}.output[data-astro-cid-j7pv25f6] a[data-astro-cid-j7pv25f6]{margin-left:20%;text-decoration:none;font-size:1rem;padding:.5rem;background-color:#0606f399;border-style:initial;box-shadow:1px 2px #0606f399;border-radius:10%;color:#fff}\n"}],"routeData":{"route":"/","type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/licence","type":"page","pattern":"^\\/licence\\/?$","segments":[[{"content":"licence","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/licence.md","pathname":"/licence","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/main","type":"endpoint","pattern":"^\\/main$","segments":[[{"content":"main","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/main.js","pathname":"/main","prerender":false,"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.a2ba26e5.js"}],"styles":[{"type":"inline","content":"button[data-astro-cid-enahu7k2]{width:auto;margin-left:90%;cursor:pointer;border-radius:10px;border:0;padding:5px 10px;transition:all .2s ease-in-out;background-color:#6137a6}#fr[data-astro-cid-enahu7k2]{text-decoration:none;color:#fff;display:block}button[data-astro-cid-enahu7k2]:hover{transform:scale(.9)}button[data-astro-cid-enahu7k2]:active{transform:scale(1)}#en[data-astro-cid-enahu7k2]{text-decoration:none;display:none;color:#fff}.en #en[data-astro-cid-enahu7k2]{display:block}.fr #fr[data-astro-cid-enahu7k2]{display:none}\nbody{margin:2rem;padding:5rem;background-color:#0606f399}label[data-astro-cid-w42krqtb]{font-size:medium;margin-right:.5rem}p[data-astro-cid-w42krqtb]{margin:1rem 5rem;color:#f4f4fa}button[data-astro-cid-w42krqtb]{font-size:1rem;margin:2rem;padding:.5rem;background-color:#0606f399;border-style:initial;box-shadow:1px 2px #0606f399;border-radius:10%;color:#fff}h1[data-astro-cid-w42krqtb]{text-align:center;color:#f4f4fa}div[data-astro-cid-w42krqtb].container{background-color:#f4f4fa;margin-top:3rem;margin-left:auto;margin-right:auto;padding:3rem;width:80%;height:auto;border:1px solid rgb(244,244,250);box-shadow:1px 2px 1px #f4f4fa}div[data-astro-cid-w42krqtb].container div[data-astro-cid-w42krqtb]{display:flex;flex-wrap:wrap}.output[data-astro-cid-w42krqtb]{width:50%}.output[data-astro-cid-w42krqtb] a[data-astro-cid-w42krqtb]{margin-left:20%;text-decoration:none;font-size:1rem;padding:.5rem;background-color:#0606f399;border-style:initial;box-shadow:1px 2px #0606f399;border-radius:10%;color:#fff}\n"}],"routeData":{"route":"/fr","type":"page","pattern":"^\\/fr\\/?$","segments":[[{"content":"fr","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/fr.astro","pathname":"/fr","prerender":false,"_meta":{"trailingSlash":"ignore"}}}],"base":"/","compressHTML":true,"componentMetadata":[["/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/fr.astro",{"propagation":"none","containsHead":true}],["/Users/flsh/Documents/NER_TEI_app/astroApp/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var r=(i,c,s)=>{let n=async()=>{await(await i())()},t=new IntersectionObserver(e=>{for(let o of e)if(o.isIntersecting){t.disconnect(),n();break}});for(let e of s.children)t.observe(e)};(self.Astro||(self.Astro={})).visible=r;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000empty-middleware":"_empty-middleware.mjs","/src/pages/fr.astro":"chunks/pages/fr_fc50c4c7.mjs","/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_66a5424a.mjs","/src/pages/index.astro":"chunks/pages/index_d590f304.mjs","/src/pages/licence.md":"chunks/pages/licence_f2c434ca.mjs","/src/pages/main.js":"chunks/pages/main_ec1610a1.mjs","\u0000@astrojs-manifest":"manifest_ee11062e.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_94be2da1.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_65b2363e.mjs","\u0000@astro-page:src/pages/licence@_@md":"chunks/licence_4407737b.mjs","\u0000@astro-page:src/pages/main@_@js":"chunks/main_af35f45e.mjs","\u0000@astro-page:src/pages/fr@_@astro":"chunks/fr_97d5a850.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.a2ba26e5.js","/astro/hoisted.js?q=0":"_astro/hoisted.353d99f1.js","astro:scripts/before-hydration.js":""},"assets":["/favicon.svg","/_astro/hoisted.353d99f1.js","/_astro/hoisted.a2ba26e5.js"]});

export { manifest };
