import type {Article} from './content';
import {diwaliArticles} from './diwali-articles';
import {researchArticles} from './research-articles';

const evergreenSlugByLegacy:Record<string,string>={
  'diwali-2026-date-meaning-five-days-stories':'diwali',
  'dhanteras-2026-date-meaning-dhanvantari':'dhanteras',
  'naraka-chaturdashi-2026-choti-diwali-story':'naraka-chaturdashi',
  'lakshmi-puja-diwali-2026-meaning-rituals':'lakshmi-puja',
  'govardhan-puja-2026-story-annakut':'govardhan-puja',
  'bhai-dooj-2026-story-meaning':'bhai-dooj',
  'kali-puja-2026-diwali-bengal-meaning':'kali-puja'
};

const evergreenPathByLegacyPath:Record<string,string>={
  '/articles/diwali-2026-date-meaning-five-days-stories':'/festivals/diwali',
  '/articles/dhanteras-2026-date-meaning-dhanvantari':'/festivals/dhanteras',
  '/articles/naraka-chaturdashi-2026-choti-diwali-story':'/festivals/naraka-chaturdashi',
  '/articles/lakshmi-puja-diwali-2026-meaning-rituals':'/festivals/lakshmi-puja',
  '/articles/govardhan-puja-2026-story-annakut':'/festivals/govardhan-puja',
  '/articles/bhai-dooj-2026-story-meaning':'/festivals/bhai-dooj',
  '/articles/kali-puja-2026-diwali-bengal-meaning':'/festivals/kali-puja'
};

const migrateLinks=(article:Article):Article=>({
  ...article,
  slug:evergreenSlugByLegacy[article.slug]??article.slug,
  relatedLinks:article.relatedLinks?.map(link=>({
    ...link,
    href:evergreenPathByLegacyPath[link.href]??link.href
  }))
});

const navratri=researchArticles.find(article=>article.slug==='navratri-2026-nine-forms-of-durga');

export const festivalGuides:Article[]=[
  ...diwaliArticles.map(migrateLinks),
  ...(navratri?[{...navratri,slug:'navratri',relatedLinks:navratri.relatedLinks?.map(link=>({...link,href:link.href==='/articles/navratri-2026-nine-forms-of-durga'?'/festivals/navratri':link.href}))}]:[])
];
export const getFestivalGuide=(slug:string)=>festivalGuides.find(guide=>guide.slug===slug);
