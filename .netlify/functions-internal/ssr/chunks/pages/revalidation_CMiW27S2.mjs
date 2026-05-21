import { e as createAstro, f as createComponent, r as renderTemplate, h as addAttribute, i as renderHead, j as renderSlot, m as maybeRenderHead, u as unescapeHTML, k as renderComponent } from '../astro_DCW1XVJv.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */
import { Marked } from 'marked';
import markedShiki from 'marked-shiki';
import { getHighlighter } from 'shiki';
import { c as cacheHeaders, r as randomInt } from './blobs_Dw0acZMB.mjs';

const $$Astro$2 = createAstro();
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "OSOOL \u2014 Architectural Facades & GRC Solutions | \u0623\u0635\u0648\u0644",
    description = "OSOOL is the Middle East's premier luxury architectural facade studio specializing in Egyptian neoclassical design, GRC systems, and palace-inspired villa transformations.",
    page = "home"
  } = Astro2.props;
  return renderTemplate`<html lang="en" dir="ltr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title><meta name="description"${addAttribute(description, "content")}><meta name="theme-color" content="#080808"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><!-- Preconnect for performance --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><!-- SEO --><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:type" content="website"><meta property="og:site_name" content="OSOOL Studio"><meta name="twitter:card" content="summary_large_image">${renderHead()}</head> <body class="bg-o-black text-ivory overflow-x-hidden"> <!-- Scroll progress --> <div id="scroll-progress"></div> <!-- Custom cursor --> <div id="cursor-dot"></div> <div id="cursor-ring"></div> <!-- Loading screen --> <div id="loader" aria-hidden="true"> <div class="loader-logo-en">OSOOL</div> <div class="loader-line"></div> <div class="loader-logo-ar">أصول</div> <div class="loader-tagline">Architectural Facades &amp; GRC Solutions</div> </div> <!-- WhatsApp float --> <a id="whatsapp-float" href="https://wa.me/966500000000" target="_blank" rel="noopener noreferrer" aria-label="Contact on WhatsApp"> <svg width="28" height="28" viewBox="0 0 24 24" fill="white"> <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path> </svg> </a> <!-- Navigation --> <nav id="osool-nav"> <a href="/" class="nav-logo" aria-label="OSOOL Home"> <span>OSOOL</span> <span class="nav-logo-ar">أصول</span> </a> <ul class="nav-links"> <li><a href="/"${addAttribute(page === "home" ? "text-gold" : "", "class")}>Home</a></li> <li><a href="/about"${addAttribute(page === "about" ? "text-gold" : "", "class")}>About</a></li> <li><a href="/services"${addAttribute(page === "services" ? "text-gold" : "", "class")}>Services</a></li> <li><a href="/portfolio"${addAttribute(page === "portfolio" ? "text-gold" : "", "class")}>Portfolio</a></li> <li><a href="/grc-collection"${addAttribute(page === "grc" ? "text-gold" : "", "class")}>GRC</a></li> <li><a href="/outdoor-luxury"${addAttribute(page === "outdoor" ? "text-gold" : "", "class")}>Outdoor</a></li> <li><a href="/contact" class="nav-cta">Consultation</a></li> </ul> <button class="nav-burger" id="nav-burger" aria-label="Toggle menu" aria-expanded="false"> <span></span> <span></span> <span></span> </button> </nav> <!-- Mobile menu --> <div id="mobile-menu" role="dialog" aria-label="Navigation menu"> <a href="/" onclick="closeMobileMenu()">Home</a> <a href="/about" onclick="closeMobileMenu()">About</a> <a href="/services" onclick="closeMobileMenu()">Services</a> <a href="/portfolio" onclick="closeMobileMenu()">Portfolio</a> <a href="/grc-collection" onclick="closeMobileMenu()">GRC Collection</a> <a href="/outdoor-luxury" onclick="closeMobileMenu()">Outdoor Luxury</a> <a href="/facade-transformations" onclick="closeMobileMenu()">Transformations</a> <a href="/contact" onclick="closeMobileMenu()" style="color: var(--gold); margin-top: 1rem;">Get Consultation</a> </div> <!-- Main content --> <main> ${renderSlot($$result, $$slots["default"])} </main> <!-- Footer --> <footer class="footer-luxury"> <div class="section-pad max-w-screen-xl mx-auto"> <!-- Footer top --> <div class="grid grid-cols-1 md:grid-cols-3 gap-16 pb-16 border-b border-o-border"> <!-- Brand --> <div class="md:col-span-1"> <div class="mb-6"> <div class="font-cormorant text-4xl text-gold tracking-widest font-light">OSOOL</div> <div class="font-amiri text-2xl text-sandstone mt-1" dir="rtl">أصول</div> </div> <p class="body-luxury text-sm mb-6 max-w-xs">
The Middle East's premier studio for luxury architectural facades, GRC decorative systems,
              and palace-inspired design transformations.
</p> <p class="font-amiri text-bronze text-sm leading-relaxed" dir="rtl">
الوجهة الأولى للواجهات المعمارية الفاخرة وأنظمة GRC في الشرق الأوسط
</p> </div> <!-- Services --> <div> <div class="label-en mb-6">Our Services</div> <ul class="space-y-3"> ${[
    ["Luxury Facade Design", "/services"],
    ["GRC Decorative Systems", "/grc-collection"],
    ["Facade Transformations", "/facade-transformations"],
    ["Palace Entrance Design", "/services"],
    ["Outdoor Luxury Structures", "/outdoor-luxury"],
    ["AI Architectural Visualization", "/services"]
  ].map(([label, href]) => renderTemplate`<li> <a${addAttribute(href, "href")} class="body-luxury text-sm hover:text-gold transition-colors duration-300 block"> ${label} </a> </li>`)} </ul> </div> <!-- Contact --> <div> <div class="label-en mb-6">Contact OSOOL</div> <div class="space-y-4"> <div> <div class="text-gold-muted text-xs tracking-widest uppercase mb-1">WhatsApp</div> <a href="https://wa.me/966500000000" class="body-luxury text-sm hover:text-gold transition-colors">+966 50 000 0000</a> </div> <div> <div class="text-gold-muted text-xs tracking-widest uppercase mb-1">Email</div> <a href="mailto:info@osoolstudio.com" class="body-luxury text-sm hover:text-gold transition-colors">info@osoolstudio.com</a> </div> <div> <div class="text-gold-muted text-xs tracking-widest uppercase mb-1">Studio</div> <p class="body-luxury text-sm">Riyadh, Saudi Arabia</p> </div> </div> <!-- Social --> <div class="flex gap-4 mt-8"> ${[
    { label: "Instagram", href: "#", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" }
  ].map(({ label, href, icon }) => renderTemplate`<a${addAttribute(href, "href")} target="_blank" rel="noopener noreferrer"${addAttribute(label, "aria-label")} class="w-10 h-10 border border-o-border flex items-center justify-center text-sandstone hover:border-gold hover:text-gold transition-all duration-300"> <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"> <path${addAttribute(icon, "d")}></path> </svg> </a>`)} </div> </div> </div> <!-- Footer bottom --> <div class="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"> <p class="text-bronze text-xs tracking-widest uppercase">
© 2025 OSOOL — Architectural Facades & GRC Solutions
</p> <p class="font-amiri text-bronze text-sm" dir="rtl">
© ٢٠٢٥ أصول — واجهات معمارية وحلول GRC
</p> <div class="flex gap-6"> <a href="#" class="text-bronze text-xs tracking-widest uppercase hover:text-gold transition-colors">Privacy</a> <a href="#" class="text-bronze text-xs tracking-widest uppercase hover:text-gold transition-colors">Terms</a> </div> </div> </div> </footer>  </body> </html>`;
}, "/home/user/astro-platform-starter/src/layouts/Layout.astro", void 0);

const $$Astro$1 = createAstro();
const $$Markdown = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Markdown;
  const { content, class: className } = Astro2.props;
  const highlighter = await getHighlighter({
    langs: ["jsx", "js"],
    themes: ["min-dark"]
  });
  const html = await new Marked().use(
    markedShiki({
      highlight(code, lang, props) {
        return highlighter.codeToHtml(code, {
          lang,
          theme: "min-dark"
        });
      }
    })
  ).parse(content);
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(["markdown", className], "class:list")}>${unescapeHTML(html)}</div>`;
}, "/home/user/astro-platform-starter/src/components/Markdown.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Revalidation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Revalidation;
  const tags = ["/revalidation", "cats-related", "all-pets-related"];
  const headers = cacheHeaders(365, tags);
  Object.entries(headers).map(([k, v]) => {
    Astro2.response.headers.set(k, v);
  });
  const explainer = `
This is a server-rendered page, last created at \`${(/* @__PURE__ */ new Date()).toUTCString()}\` with a few extra response headers:

~~~js
${JSON.stringify(headers, null, 2)}
~~~

Meaning: **for browsers,** this is a non-cacheable page. At the **CDN level,** it *is* cacheable for up to a year (and Netlify also automatically busts the cache on new deployments, by default).

But there's something more: the \`Cache-Tag\` header, in tandem with the [purge API](https://docs.netlify.com/platform/caching/#on-demand-invalidation), allows a developer to invalidate at will any
pieces of content (pages, JSON responses, or whatnot) based on the tags associated with them. Tags are completely up to you to decide on, and allow for very powerful patterns.

In real-world applications, you may want to use [stale-while-revalidate](https://docs.netlify.com/platform/caching/#stale-while-revalidate-directive) as well, so that end-users don't experience 
a performance hit as pages are being rebuilt.

Use the button below to invlidate a random tag out of this page's tags, then refresh the page.
`;
  const exampleTag = tags[randomInt(0, tags.length - 1)];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Revalidation" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="mb-10">Revalidating Server Content</h1> ${renderComponent($$result2, "Markdown", $$Markdown, { "content": explainer, "class": "mb-10" })} <button class="revalidate-button btn btn-primary"${addAttribute(exampleTag, "data-tag")}>Invalidate tag: ${exampleTag}</button> <button class="btn btn-primary" onclick="location.reload()">Reload page</button> ` })} `;
}, "/home/user/astro-platform-starter/src/pages/revalidation.astro", void 0);

const $$file = "/home/user/astro-platform-starter/src/pages/revalidation.astro";
const $$url = "/revalidation";

const revalidation = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Revalidation,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Layout as $, $$Markdown as a, revalidation as r };
