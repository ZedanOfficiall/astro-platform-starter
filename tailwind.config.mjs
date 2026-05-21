import { readFileSync } from 'fs';

const noiseBitmap = readFileSync('./src/assets/noise.png', { encoding: 'base64' });
const noiseDataUri = 'data:image/png;base64,' + noiseBitmap;

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gold:         '#C9A96E',
        'gold-light': '#E8D5A3',
        'gold-pale':  '#F2E8D0',
        'gold-dark':  '#9E7B3A',
        'gold-muted': '#7A6035',
        ivory:        '#F5F0E8',
        sandstone:    '#D4C4A0',
        bronze:       '#8B7355',
        'o-black':    '#080808',
        'o-deep':     '#0D0D0D',
        'o-dark':     '#111111',
        'o-warm':     '#1A1208',
        'o-card':     '#161616',
        'o-border':   '#252525',
      },
      fontFamily: {
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        playfair:  ['"Playfair Display"',  'Georgia', 'serif'],
        amiri:     ['"Amiri"',             'serif'],
      },
      backgroundImage: {
        'noise':          `url('${noiseDataUri}')`,
        'gold-gradient':  'linear-gradient(135deg, #C9A96E 0%, #E8D5A3 40%, #9E7B3A 70%, #C9A96E 100%)',
        'dark-luxury':    'linear-gradient(160deg, #080808 0%, #1A1208 50%, #080808 100%)',
        'hero-atm':       'radial-gradient(ellipse 80% 60% at 65% 85%, rgba(201,169,110,.13) 0%, transparent 68%), radial-gradient(ellipse 50% 40% at 15% 95%, rgba(139,115,85,.08) 0%, transparent 60%), linear-gradient(180deg, #080808 0%, #0D0B06 55%, #080808 100%)',
      },
      animation: {
        shimmer:       'shimmer 4s linear infinite',
        float:         'float 8s ease-in-out infinite',
        'pulse-gold':  'pulseGold 3s ease-in-out infinite',
        'line-in':     'lineIn 1.2s ease forwards',
        'fade-up':     'fadeUp 0.9s cubic-bezier(.16,1,.3,1) forwards',
        'fade-in':     'fadeIn 0.8s ease forwards',
        'scale-in':    'scaleIn 1s cubic-bezier(.16,1,.3,1) forwards',
        'loader-up':   'loaderUp .9s cubic-bezier(.76,0,.24,1) forwards',
      },
      keyframes: {
        shimmer:  { '0%':{ backgroundPosition:'-200% center' }, '100%':{ backgroundPosition:'200% center' } },
        float:    { '0%,100%':{ transform:'translateY(0)' }, '50%':{ transform:'translateY(-14px)' } },
        pulseGold:{ '0%,100%':{ opacity:'.5' }, '50%':{ opacity:'1' } },
        lineIn:   { from:{ transform:'scaleX(0)', transformOrigin:'left' }, to:{ transform:'scaleX(1)', transformOrigin:'left' } },
        fadeUp:   { from:{ opacity:'0', transform:'translateY(60px)' }, to:{ opacity:'1', transform:'translateY(0)' } },
        fadeIn:   { from:{ opacity:'0' }, to:{ opacity:'1' } },
        scaleIn:  { from:{ opacity:'0', transform:'scale(.95)' }, to:{ opacity:'1', transform:'scale(1)' } },
        loaderUp: { from:{ transform:'translateY(0)' }, to:{ transform:'translateY(-100%)' } },
      },
    },
  },
  plugins: [],
};
