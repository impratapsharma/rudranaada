import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  poweredByHeader:false,
  reactStrictMode:true,
  trailingSlash:false,
  async redirects(){
    return [
      {source:'/articles/diwali-2026-date-meaning-five-days-stories',destination:'/festivals/diwali',permanent:true},
      {source:'/articles/dhanteras-2026-date-meaning-dhanvantari',destination:'/festivals/dhanteras',permanent:true},
      {source:'/articles/naraka-chaturdashi-2026-choti-diwali-story',destination:'/festivals/naraka-chaturdashi',permanent:true},
      {source:'/articles/lakshmi-puja-diwali-2026-meaning-rituals',destination:'/festivals/lakshmi-puja',permanent:true},
      {source:'/articles/govardhan-puja-2026-story-annakut',destination:'/festivals/govardhan-puja',permanent:true},
      {source:'/articles/bhai-dooj-2026-story-meaning',destination:'/festivals/bhai-dooj',permanent:true},
      {source:'/articles/kali-puja-2026-diwali-bengal-meaning',destination:'/festivals/kali-puja',permanent:true}
    ];
  },
  async headers(){
    return [{
      source:'/(.*)',
      headers:[
        {key:'X-Content-Type-Options',value:'nosniff'},
        {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
        {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=()'}
      ]
    }];
  }
};

export default nextConfig;
