import bala from '@/data/ramayana/bala-kanda.json';
import ayodhya from '@/data/ramayana/ayodhya-kanda.json';
import aranya from '@/data/ramayana/aranya-kanda.json';
import kishkindha from '@/data/ramayana/kishkindha-kanda.json';
import sundara from '@/data/ramayana/sundara-kanda.json';
import yuddha from '@/data/ramayana/yuddha-kanda.json';
import uttara from '@/data/ramayana/uttara-kanda.json';
import overview from '@/data/ramayana/overview.json';

export const ramayanaUpdatedAt = '2026-09-24';
export const ramayanaOverview = overview;
export type GuideSection = {id:string;heading:string;reference?:string;paragraphs:string[]};
export type GuideLink = {label:string;href:string};
export type Source = {label:string;href:string;note:string};
export const ramayanaSources: Record<string,Source> = {
  bala:{label:'Bala Kanda · Sanskrit and translation by Desiraju Hanumanta Rao',href:'https://www.valmikiramayan.net/utf8/baala/baala_contents.htm',note:'77-sarga reading sequence. Use the chapter numbers to locate passages in this presentation.'},
  ayodhya:{label:'Ayodhya Kanda · Sanskrit and translation by K. M. K. Murthy',href:'https://www.valmikiramayan.net/utf8/ayodhya/ayodhya_contents.htm',note:'119-sarga reading sequence.'},
  aranya:{label:'Aranya Kanda · Sanskrit and translation by Desiraju Hanumanta Rao',href:'https://www.valmikiramayan.net/utf8/aranya/aranya_contents.htm',note:'75-sarga reading sequence.'},
  kishkindha:{label:'Kishkindha Kanda · Sanskrit and translation by Desiraju Hanumanta Rao',href:'https://www.valmikiramayan.net/utf8/kish/kishkindha_contents.htm',note:'67-sarga reading sequence; Jambavan’s encouragement in 66.'},
  sundara:{label:'Sundara Kanda · Sanskrit and translation by K. M. K. Murthy',href:'https://www.valmikiramayan.net/utf8/sundara/sundara_contents.htm',note:'68-sarga reading sequence; the ocean crossing opens the book.'},
  yuddha:{label:'Yuddha Kanda · Sanskrit and translation by K. M. K. Murthy',href:'https://www.valmikiramayan.net/utf8/yuddha/yuddha_contents.htm',note:'128-sarga reading sequence; the coronation is in 128.'},
  uttara:{label:'Uttara Kanda · Hari Prasad Shastri translation',href:'https://www.wisdomlib.org/hinduism/book/the-ramayana-of-valmiki/d/doc424761.html',note:'Main numbering 1–111, plus the lettered supplementary chapters identified in the guide.'},
  scholarship:{label:'Robert P. Goldman and Sally J. Sutherland Goldman · Uttarakāṇḍa, Princeton University Press',href:'https://www.jstor.org/stable/j.ctt1gsmwj0',note:'Introduction and contents consulted for textual history and reception. Narrative references on this site do not use this volume’s Critical Edition numbering.'}
};

type RawGuide = {
  slug:string;number:number;name:string;sanskrit:string;title:string;description:string;dek:string;summary:string;
  chapterCount:number;sourceKey:string;editionNote:string;sections:GuideSection[];
  readingMap:(string|number)[][];questions:{question:string;answer:string}[];related:string[][];
};
export type KandaGuide = Omit<RawGuide,'readingMap'|'related'> & {
  readingMap:{from:number;to:number;title:string;summary:string}[];
  related:GuideLink[];
};
const rawGuides:RawGuide[]=[bala,ayodhya,aranya,kishkindha,sundara,yuddha,uttara];
export const kandaGuides:KandaGuide[]=rawGuides.map(guide=>({
  ...guide,
  readingMap:guide.readingMap.map(([from,to,title,summary])=>({from:Number(from),to:Number(to),title:String(title),summary:String(summary)})),
  related:guide.related.map(([label,href])=>({label,href}))
}));
export const getKanda=(slug:string)=>kandaGuides.find(guide=>guide.slug===slug);
export const readingMinutes=(value:unknown)=>Math.max(1,Math.ceil(JSON.stringify(value).split(/\s+/).length/210));

export const ramayanaConnections: Record<string,GuideLink[]> = {
  'hanuman':[
    {label:'How Hanuman first meets Rama',href:'/ramayana/kishkindha-kanda#meeting-hanuman'},
    {label:'Sundara Kanda: Hanuman’s mission in Lanka',href:'/ramayana/sundara-kanda'},
    {label:'Hanuman’s childhood in Uttara Kanda',href:'/ramayana/uttara-kanda#hanuman-childhood'}
  ],
  'parashurama':[{label:'Parashurama’s encounter with Rama in Bala Kanda',href:'/ramayana/bala-kanda#parashurama'}],
  'ramayana-orchestral':[{label:'Read the story behind the music',href:'/ramayana'},{label:'Yuddha Kanda: the war and its aftermath',href:'/ramayana/yuddha-kanda'}],
  'ram-naam':[{label:'Explore the Valmiki Ramayana',href:'/ramayana'},{label:'Sundara Kanda: Hanuman carries Rama’s message',href:'/ramayana/sundara-kanda'}]
};
