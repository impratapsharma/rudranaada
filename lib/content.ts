export type ArticleSource={label:string;note?:string};
export type ArticleLink={label:string;href:string};
export type ArticleImage={src:string;alt:string;caption?:string};
export type ArticleSection={heading?:string;paragraphs:string[];items?:string[];image?:ArticleImage};
export type Article={
  slug:string;
  title:string;
  seoTitle?:string;
  dek:string;
  description:string;
  publishedAt:string;
  updatedAt?:string;
  readingMinutes:number;
  category:string;
  author?:string;
  featuredImage?:ArticleImage;
  tags:string[];
  body:ArticleSection[];
  sources?:ArticleSource[];
  relatedLinks?:ArticleLink[];
};

export {music,fullSongs,shorts,getMusic} from './music';
export type {MusicEntry} from './music';
import {researchArticles} from './research-articles';

const originalArticles:Article[]=[
  {slug:'why-rudranaada-exists',title:'Why We Sing the Old Stories',dek:'Because a story remembered only as information grows distant. A story sung can enter the breath.',description:'Why RudraNāda brings music, story and reflection together around India’s epic and devotional traditions.',publishedAt:'2026-09-21',readingMinutes:5,category:'RudraNāda',author:'Pratap Sharma',tags:['RudraNāda','Indian epics','devotional music'],body:[
    {paragraphs:['The stories of Krishna, Rama, Shiva, Devi and Hanuman have never lived only in books. They have travelled through recitation, song, temple courtyards, family memory, festivals, theatre, argument and prayer. Every generation has received them through a living voice.','RudraNāda began with a simple feeling: music can make an old story suddenly feel present. A line enters the ear, an image stays behind, and a question begins. Who was Karna before the battlefield? Why did Arjuna lower his bow? What does Kali destroy? Why does Hanuman’s strength always bend toward service?']},
    {heading:'A song should open a door',paragraphs:['We do not want the music to be the end of the encounter. If a song moves you, the next step should be waiting: the story behind it, the words, the source, the meaning, the places where tradition agrees and the places where it does not.','That is what this website is for. You may arrive because of a four-minute song and leave having read a verse of the Gita, discovered a character you misunderstood, or found a mantra you want to sit with quietly.']},
    {heading:'Devotion deserves care',paragraphs:['A mantra is not a caption. A deity is not an aesthetic. An epic is not a pile of trivia waiting to be turned into content.','So we try to keep three things separate when they need to be separate: what a text actually says, what later traditions and regional retellings add, and what RudraNāda creates as artistic interpretation. Devotion is not weakened by this care. It becomes more trustworthy.']},
    {heading:'The aim is remembrance',paragraphs:['There is already more information in the world than anyone can hold. RudraNāda is not trying to add noise to that mountain. We want to make a few things worth remembering.','A song you return to. A story that becomes clearer with age. A line that waits beside you during a difficult decision. A name of the divine that slowly changes the quality of attention. If RudraNāda can become a place for that kind of return, it has done enough.']}
  ]},
  {slug:'guru-bodha-what-does-a-guru-give',title:'Guru Bodha: What Does a Guru Actually Give?',dek:'Not borrowed certainty. The old texts ask for humility, inquiry, service and a teacher rooted in what they teach.',description:'A source-aware introduction to the guru in Indian spiritual traditions through Bhagavad Gita 4.34, Mundaka Upanishad 1.2.12 and Taittiriya Upanishad 1.11.',publishedAt:'2026-09-21',readingMinutes:7,category:'Guru Bodha',author:'Pratap Sharma',tags:['Guru','Guru Bodha','Bhagavad Gita','Upanishads','spiritual teacher'],body:[
    {paragraphs:['A teacher can give information. A guru, in the classical spiritual sense, is sought when information is no longer the whole problem.','You may know the words and still not know how to live them. You may understand a teaching intellectually and remain unchanged by it. The guru enters at that difficult distance between knowing about something and seeing it for oneself.']},
    {heading:'The student is not asked to become passive',paragraphs:['Bhagavad Gita 4.34 is often remembered for reverence toward the teacher, but the verse contains another word that matters just as much: paripraśna, sustained inquiry. Krishna joins humility, questioning and service in the same instruction.','That is a useful correction to two opposite mistakes. Pride refuses to learn. Blind obedience refuses to ask. The verse leaves room for neither.']},
    {heading:'The teacher must be rooted, not merely impressive',paragraphs:['Mundaka Upanishad 1.2.12 describes the teacher with two demanding qualities: śrotriya, one grounded in the teaching and its tradition, and brahmaniṣṭha, one established in Brahman.','The distinction matters. Spiritual language can be learned as performance. The Upanishadic ideal points beyond eloquence toward a teacher whose life and understanding are not strangers to one another.']},
    {heading:'Reverence does not erase discernment',paragraphs:['The Taittiriya Upanishad tells the departing student, “ācārya devo bhava,” to regard the teacher with the reverence due to the divine. In the same teaching, the student is also told to follow only conduct that is blameless.','Reverence and discernment therefore need not be enemies. A sacred relationship is not made safer by turning off judgment. It is made deeper when humility is joined to clarity.']},
    {heading:'Why we call this series Guru Bodha',paragraphs:['Guru Bodha is RudraNāda’s name for this series. Bodha can carry the sense of understanding, knowledge, awakening or instruction. We use it for reflections on the guru, the student, practice, inquiry and the slow work by which teaching becomes lived understanding.','It is an editorial name, not a claim that “Guru Bodha” is a single canonical genre or scripture.']},
    {heading:'The final work cannot be outsourced',paragraphs:['A true teaching may point, correct, unsettle, encourage and illuminate. But no teacher can perform another person’s seeing for them.','The paradox of the guru is that guidance becomes complete when dependence on borrowed understanding begins to fall away. The finger points. The student still has to look.']}
  ],sources:[
    {label:'Bhagavad Gita 4.34',note:'Humility, inquiry and service in approaching a teacher.'},
    {label:'Mundaka Upanishad 1.2.12',note:'Approaching a teacher who is śrotriya and brahmaniṣṭha.'},
    {label:'Taittiriya Upanishad 1.11',note:'The convocation teaching that includes ācārya devo bhava and guidance on blameless conduct.'},
    {label:'Bodha, Sanskrit lexicons',note:'Meanings include knowledge, understanding, awakening and instruction.'}
  ],relatedLinks:[{label:'Explore Guru Bodha',href:'/guru'}]}
];

export const articles:Article[]=[...researchArticles.filter(article=>article.category!=='Festivals'),...originalArticles];

export const deityHubs=[
  {slug:'krishna',name:'Krishna',description:'Friend, charioteer, teacher and the divine presence at the heart of the Bhagavad Gita.'},
  {slug:'shiva',name:'Shiva',description:'Stillness and storm, ascetic and householder, dissolution and the silence that remains.'},
  {slug:'devi',name:'Devi',description:'The Divine Mother approached through tenderness, power, protection and fierce transformation.'},
  {slug:'hanuman',name:'Hanuman',description:'Strength offered in service, courage without vanity and devotion centered on Rama.'},
  {slug:'narasimha',name:'Narasimha',description:'The fierce protection of Prahlada and a form that breaks every condition placed around the divine.'},
  {slug:'parashurama',name:'Parashurama',description:'A warrior-sage whose stories refuse simple answers about anger, justice, power and dharma.'}
];

export const getArticle=(slug:string)=>articles.find(a=>a.slug===slug);
