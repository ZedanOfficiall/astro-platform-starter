import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/astro_DCW1XVJv.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

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
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
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
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
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
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"blobs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blobs","isIndex":true,"type":"page","pattern":"^\\/blobs\\/?$","segments":[[{"content":"blobs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blobs/index.astro","pathname":"/blobs","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"edge/australia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/edge/australia","isIndex":true,"type":"page","pattern":"^\\/edge\\/australia\\/?$","segments":[[{"content":"edge","dynamic":false,"spread":false}],[{"content":"australia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/edge/australia/index.astro","pathname":"/edge/australia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"edge/not-australia/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/edge/not-australia","isIndex":true,"type":"page","pattern":"^\\/edge\\/not-australia\\/?$","segments":[[{"content":"edge","dynamic":false,"spread":false}],[{"content":"not-australia","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/edge/not-australia/index.astro","pathname":"/edge/not-australia","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"edge/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/edge","isIndex":true,"type":"page","pattern":"^\\/edge\\/?$","segments":[[{"content":"edge","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/edge/index.astro","pathname":"/edge","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"facade-transformations/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/facade-transformations","isIndex":false,"type":"page","pattern":"^\\/facade-transformations\\/?$","segments":[[{"content":"facade-transformations","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/facade-transformations.astro","pathname":"/facade-transformations","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"grc-collection/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/grc-collection","isIndex":false,"type":"page","pattern":"^\\/grc-collection\\/?$","segments":[[{"content":"grc-collection","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/grc-collection.astro","pathname":"/grc-collection","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"image-cdn/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/image-cdn","isIndex":false,"type":"page","pattern":"^\\/image-cdn\\/?$","segments":[[{"content":"image-cdn","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/image-cdn.astro","pathname":"/image-cdn","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"outdoor-luxury/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/outdoor-luxury","isIndex":false,"type":"page","pattern":"^\\/outdoor-luxury\\/?$","segments":[[{"content":"outdoor-luxury","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/outdoor-luxury.astro","pathname":"/outdoor-luxury","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services\\/?$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/blob","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/blob\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"blob","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/blob.ts","pathname":"/api/blob","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/blobs","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/blobs\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"blobs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/blobs.ts","pathname":"/api/blobs","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/revalidate","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/revalidate\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"revalidate","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/revalidate.ts","pathname":"/api/revalidate","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C8AvSnPz.js"}],"styles":[{"type":"external","src":"/_astro/about.CshvoUA_.css"}],"routeData":{"route":"/revalidation","isIndex":false,"type":"page","pattern":"^\\/revalidation\\/?$","segments":[[{"content":"revalidation","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/revalidation.astro","pathname":"/revalidation","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/user/astro-platform-starter/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/blobs/index.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/edge/australia/index.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/edge/index.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/edge/not-australia/index.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/facade-transformations.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/grc-collection.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/image-cdn.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/outdoor-luxury.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/portfolio.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/revalidation.astro",{"propagation":"none","containsHead":true}],["/home/user/astro-platform-starter/src/pages/services.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/api/blob.ts":"chunks/pages/blob_DseYSFsd.mjs","/src/pages/api/revalidate.ts":"chunks/pages/revalidate_BAExFgRW.mjs","\u0000@astrojs-manifest":"manifest_CRIVwAbm.mjs","/home/user/astro-platform-starter/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_BFdVoGNu.mjs","\u0000@astro-page:src/pages/about@_@astro":"chunks/about_E5UxGy_N.mjs","\u0000@astro-page:src/pages/api/blob@_@ts":"chunks/blob_jDQKrhqR.mjs","\u0000@astro-page:src/pages/api/blobs@_@ts":"chunks/blobs_CyobAaXL.mjs","\u0000@astro-page:src/pages/api/revalidate@_@ts":"chunks/revalidate_C2OB3bod.mjs","\u0000@astro-page:src/pages/blobs/index@_@astro":"chunks/index_BZXcLK1N.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_BWFsxE-9.mjs","\u0000@astro-page:src/pages/edge/australia/index@_@astro":"chunks/index_DKgAhFI9.mjs","\u0000@astro-page:src/pages/edge/not-australia/index@_@astro":"chunks/index_B1iXM1dh.mjs","\u0000@astro-page:src/pages/edge/index@_@astro":"chunks/index_CDwvhinX.mjs","\u0000@astro-page:src/pages/facade-transformations@_@astro":"chunks/facade-transformations_tbuiBNxE.mjs","\u0000@astro-page:src/pages/grc-collection@_@astro":"chunks/grc-collection_CxFzoDeu.mjs","\u0000@astro-page:src/pages/image-cdn@_@astro":"chunks/image-cdn_D0wUGbi_.mjs","\u0000@astro-page:src/pages/outdoor-luxury@_@astro":"chunks/outdoor-luxury_Bf5CVkRz.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"chunks/portfolio_ofAEgaFx.mjs","\u0000@astro-page:src/pages/revalidation@_@astro":"chunks/revalidation_CSzR8m7A.mjs","\u0000@astro-page:src/pages/services@_@astro":"chunks/services_G_l6A8Qa.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_CWjWkSbB.mjs","/astro/hoisted.js?q=3":"_astro/hoisted.CDh711Xq.js","/astro/hoisted.js?q=4":"_astro/hoisted.C8AvSnPz.js","/astro/hoisted.js?q=6":"_astro/hoisted.CZbf3OQZ.js","/astro/hoisted.js?q=2":"_astro/hoisted.DIJneT22.js","/astro/hoisted.js?q=0":"_astro/hoisted.By8uZqdL.js","/astro/hoisted.js?q=5":"_astro/hoisted.1m_Z3GgN.js","/astro/hoisted.js?q=1":"_astro/hoisted.CJTgyvG9.js","/home/user/astro-platform-starter/src/pages/blobs/_components/ShapeEditor.tsx":"_astro/ShapeEditor.BHTzYgH8.js","@astrojs/react/client.js":"_astro/client.J7s0XX1m.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/corgi.Df6EsHSi.jpg","/_astro/about.CshvoUA_.css","/favicon.svg","/_astro/ShapeEditor.BHTzYgH8.js","/_astro/client.J7s0XX1m.js","/_astro/hoisted.1m_Z3GgN.js","/_astro/hoisted.By8uZqdL.js","/_astro/hoisted.C8AvSnPz.js","/_astro/hoisted.CDh711Xq.js","/_astro/hoisted.CJTgyvG9.js","/_astro/hoisted.CZbf3OQZ.js","/_astro/hoisted.DIJneT22.js","/_astro/index.DhYZZe0J.js","/images/corgi.jpg","/about/index.html","/blobs/index.html","/contact/index.html","/edge/australia/index.html","/edge/not-australia/index.html","/edge/index.html","/facade-transformations/index.html","/grc-collection/index.html","/image-cdn/index.html","/outdoor-luxury/index.html","/portfolio/index.html","/services/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false});

export { manifest };
