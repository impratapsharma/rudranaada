import type {Article} from './content';
import {bhajaBody1} from './bhaja-govindam-body-1';
import {bhajaBody2} from './bhaja-govindam-body-2';
import {bhajaBody3} from './bhaja-govindam-body-3';
import {bhajaBody4} from './bhaja-govindam-body-4';
import {bhajaBody5} from './bhaja-govindam-body-5';
import {bhajaBody6} from './bhaja-govindam-body-6';
import {bhajaBody7} from './bhaja-govindam-body-7';
import {bhajaBody8} from './bhaja-govindam-body-8';
import {bhajaBody9} from './bhaja-govindam-body-9';
import {bhajaBody10} from './bhaja-govindam-body-10';
import {bhajaBody11} from './bhaja-govindam-body-11';
import {bhajaFaqA} from './bhaja-govindam-faq-a';
import {bhajaFaqB} from './bhaja-govindam-faq-b';
import {bhajaSourcesA} from './bhaja-govindam-sources-a';
import {bhajaSourcesB} from './bhaja-govindam-sources-b';
import {bhajaRelated} from './bhaja-govindam-related';

export const bhajaGovindamArticle:Article={
  slug:'bhaja-govindam-meaning-adi-shankaracharya',
  title:'Bhaja Govindam: Meaning and Sri Adi Shankaracharya’s Teaching',
  seoTitle:'Bhaja Govindam Meaning: Adi Shankaracharya’s Teaching',
  dek:'Worship Govinda. Remember what lasts. Sri Adi Shankaracharya’s beloved hymn brings devotion, discernment and the urgency of spiritual practice into ordinary life.',
  description:'Explore the meaning of Bhaja Govindam, also called Moha Mudgara: Govinda, satsanga, detachment, bhakti, Advaita and the Guru, with Sringeri references.',
  publishedAt:'2026-10-23',
  readingMinutes:15,
  category:'Guru Bodha',
  tableOfContents:true,
  author:'Pratap Sharma',
  tags:['Bhaja Govindam','Moha Mudgara','Adi Shankaracharya','Govinda','Bhakti','Advaita Vedanta','Guru Bodha','Sringeri'],
  quickAnswer:'Bhaja Govindam means “Worship Govinda” or “Turn toward Govinda.” Traditionally associated with Sri Adi Shankaracharya, the Sanskrit hymn is also called Moha Mudgara, a hammer against delusion. Its verses call the seeker toward devotion, discernment, good company and Self-knowledge, questioning the assumption that wealth, youth or scholarship can provide lasting security.',
  keyTakeaways:[
    'Govinda is a name of Bhagavan Vishnu and Sri Krishna; the refrain invites loving remembrance of the Lord.',
    'The warning about grammar challenges misplaced priorities, while the tradition continues to honour rigorous study.',
    'Satsanga, freedom from binding attachment, devotion and guidance from the Guru are central to the hymn’s teaching.',
    'The familiar 31-verse arrangement has variations in order and attribution; the Kashi grammarian episode is a traditional account.',
    'This guide follows the Advaita and Sringeri understanding and distinguishes the verses from RudraNāda’s practical reflections.'
  ],
  body:[...bhajaBody1,...bhajaBody2,...bhajaBody3,...bhajaBody4,...bhajaBody5,...bhajaBody6,...bhajaBody7,...bhajaBody8,...bhajaBody9,...bhajaBody10,...bhajaBody11],
  faq:[...bhajaFaqA,...bhajaFaqB],
  sources:[...bhajaSourcesA,...bhajaSourcesB],
  relatedLinks:bhajaRelated
};
