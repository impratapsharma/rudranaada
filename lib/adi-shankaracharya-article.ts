import type {Article} from './content';

const sr='https://www.sringeri.net';
const bio=sr+'/history/sri-adi-shankaracharya/biography/abridged-madhaviya-shankara-digvijayam';
const disciples=sr+'/history/sri-adi-shankaracharya/primary-disciples';
const as='https://www.advaitasharada.sringeri.net';
const source={
  life:bio,
  kashi:bio+'/part-2',
  debates:bio+'/part-3',
  mother:bio+'/part-4',
  final:bio+'/part-5',
  biography:sr+'/history/sri-adi-shankaracharya/biography',
  parents:'https://www.kamakoti.org/souv/2-4.html',
  kanchi:'https://kamakoti.org/peeth/origin.html',
  chinmaya:'https://chinfo.org/the-life-and-journey-of-sri-adi-shankaracharya/',
  stanford:'https://plato.stanford.edu/entries/shankara/',
  iep:'https://iep.utm.edu/advaita-vedanta/',
  sureshwara:disciples+'/sri-sureshwaracharya',
  padmapada:disciples+'/sri-padmapadacharya',
  hastamalaka:disciples+'/sri-hastamalakacharya',
  totaka:disciples+'/sri-totakacharya',
  sringeri:sr+'/history',
  works:sr+'/history/sri-adi-shankaracharya/works-of-sri-adi-shankaracharya',
  amnaya:sr+'/history/amnaya-peethams',
  dls:'https://www.dlshq.org/saints/sankara/',
  mundaka:as+'/read/mundaka-bhashya/1/',
  brahmasutra:as+'/read/brahmasutra-bhashya/1/',
  liberation:as+'/read/brahmasutra-bhashya/4/',
  chandogya:as+'/read/chandogya-bhashya/6/',
  aitareya:as+'/read/aitareya-bhashya/3/',
  brihadaranyaka:as+'/read/brihadaranyaka-bhashya/1/',
  mandukya:as+'/read/mandukya-karika-bhashya/1/',
  manisha:as+'/read/pancharatna-stotrani/11/',
  dakshinamurti:as+'/read/sridaksinamurtistotram/1/',
  gita:as+'/read/bhagavadgita-bhashya/1/',
  catalog:as+'/',
  puri:'https://www.govardhanpeeth.org/en/about-us-en/swami-nischalananda-saraswati',
  puriLineage:'https://govardhanpeeth.org/en/about/adi-shankaracharya-successor',
  puriMath:'https://govardhanpeeth.org/hi/humare-bare-me/govardhan-math-ke-bare-me',
  sringeriNow:sr+'/announcement/mahaganapati-vakyartha-vidwat-sabha-parabhava-samvatsara-2026',
  kanchiNow:'https://www.kamakoti.org/kamakoti/news/2026/vasantotsavam-of-67054-20260602.html',
  kanchiSadas:'https://kamakoti.org/kamakoti/news/2026/guruvara-sadas-97521-20260927.html',
  dwarka:'https://shreesharadapithmathdwarka.org/',
  dwarkaLeader:'https://garudalife.in/author/swami-sadananda-saraswati',
  dwarkaVisit:sr+'/events/shankaracharya-dwarka-sringeri',
  jyotir:'https://1008.guru/',
  jyotirOther:'https://badarijyotirmath.org/2025/',
  kalady:sr+'/jagadgurus/sri-sacchidananda-shivabhinava-nrisimha-bharati-mahaswamiji/kalady',
  digital:as+'/itihasa/',
  kedarnath:'https://www.pib.gov.in/PressReleasePage.aspx?PRID=1769432',
};
const ref=(label:string,url:string)=>`[${label}](${url})`;

export const adiShankaracharyaArticle:Article={
  slug:'adi-shankaracharya-life-sannyasa-peethams',
  title:'Adi Shankaracharya: His Life, Sannyasa and Living Legacy',
  seoTitle:'Adi Shankaracharya: Life, Sannyasa, Teachings & Peethams',
  dek:'A mother’s prayer, a young seeker’s renunciation, and a teaching carried across generations. Follow Adi Shankaracharya from the traditions of his birth to the peethams and readers who keep his work alive.',
  description:'Adi Shankaracharya’s life, from his parents’ prayers and sannyasa to Advaita, his disciples, mukti traditions and the peethams carrying his legacy today.',
  publishedAt:'2026-10-02',
  readingMinutes:33,
  category:'Guru Bodha',
  tableOfContents:true,
  author:'Pratap Sharma',
  featuredImage:{src:'/images/gurus/adi-shankaracharya-teaching.webp',alt:'Artistic depiction of the young Adi Shankaracharya teaching four disciples beside a river.',caption:'An AI-assisted RudraNāda illustration of the teaching tradition. This is an artistic evocation, not a historical portrait or a reconstruction of a documented meeting.'},
  tags:['Adi Shankaracharya','Adi Shankara','Advaita Vedanta','Guru Bodha','Sannyasa','Sringeri','Kanchi','Peethams'],
  quickAnswer:'Adi Shankaracharya, also called Adi Shankara and Bhagavatpada, was the great teacher and commentator of Advaita Vedanta. Traditional biographies remember a child of Shivaguru and Aryamba in Kerala who became a sannyasi, studied under Govinda Bhagavatpada, travelled and taught, gathered disciples, and established enduring centres of learning. His exact dates, the sequence of some journeys, and the place of his final departure differ across sources. His commentaries and the living guru–shishya traditions remain central to his legacy.',
  keyTakeaways:[
    'His sannyasa story involves both the famous crocodile episode and a deeper commitment to knowledge of the Self.',
    'Aryamba’s consent, his promise to return, and her final rites are essential parts of the traditional life.',
    'The four directional Amnaya peethams and Kanchi Kamakoti should be described with their own institutional traditions intact.',
    'Advaita’s teaching of liberation helps explain why mukti is not simply another word for the end of his physical life.',
    'The story continues through disciples, commentaries, monasteries, Kalady’s recovery, printed editions and digital Sanskrit libraries.'
  ],
  body:[
    {id:'reading-his-life',heading:'A life remembered in more than one way',paragraphs:[
      'Before he becomes the teacher in the familiar painting, Adi Shankaracharya is a son whom a mother does not want to lose. Before the debates and the peethams, there is a question: what could make a child turn away from the life his family hoped he would lead? His traditional biographies return to that question through prayer, learning, danger, affection and renunciation.',
      `This guide follows those biographies with reverence, while keeping their source traditions visible. A Shankara-vijaya or digvijaya is a sacred account of the acharya’s life and teaching mission. It is not a diary written along his route. Sringeri follows the Madhaviya Shankara Digvijaya, traditionally attributed to Madhava-Vidyaranya. Kanchi preserves other biographical and lineage accounts. ${ref('Sringeri’s introduction to the biography',source.biography)} explains why his writings themselves must also be read to understand him.`,
      'Here, “traditional account” identifies the kind of source being used; it is not a judgment on anyone’s faith. Where the sources differ, the differences are named. Explanations of a story’s significance are offered as editorial readings. No surviving record allows an honest account of every day of his life, but the major episodes can be placed beside the teachings and institutions that give them lasting meaning.'
    ]},
    {id:'before-birth',heading:'Before his birth: Shivaguru and Aryamba’s prayer',paragraphs:[
      `The family story begins with Shivaguru and Aryamba, a Nambudiri Brahmana couple in Kerala who longed for a child. Their prayers took them to Shiva’s shrine at Thrissur, associated with Vadakkumnathan and the name Vrishachaleshvara. In the account by Professor P. Sankaranarayanan published by Kanchi, Shiva appears in a dream and offers a choice: ordinary children with long lives, or a wonderfully gifted son whose earthly life will be short. The parents choose the extraordinary child. The story presents his birth as Shiva’s own descent. ${ref('Kanchi: the life and work of Sri Sankara',source.parents)}`,
      'The promise contains joy and sorrow together. The child is an answer to prayer, yet the parents cannot secure a long future with him. In this reading, the beginning already holds the tension that will return when Aryamba is asked to consent to his renunciation.',
      'The dream has variations. Some tellings emphasise the choice; others emphasise the couple leaving the decision to Shiva. The theological point is his divine mission. It would be misleading to turn a particular version’s dialogue into a universally agreed, word-for-word conversation.'
    ]},
    {id:'shiva-and-the-lineage',heading:'Why devotees see Shiva in Shankaracharya',paragraphs:[
      `Sringeri’s account understands Shankara as Shiva, especially the teaching presence of Dakshinamurti, taking the knowledge of the Self into the world. This is an avatara tradition: it explains who devotees believe he is and why he comes. It is not a recoverable biography of an earlier human lifetime. ${ref('Sringeri: the divine descent',source.life)}`,
      `Dakshinamurti is the guru form of Shiva. The ${ref('Dakshinamurti Stotram',source.dakshinamurti)}, traditionally attributed to Shankara, contemplates the relation between the perceiving Self and the world that appears to it. Its opening image compares the world’s appearance within consciousness to a city seen in a mirror. The hymn brings teaching, contemplation and worship together.`,
      'Read in that light, the image of Shiva becoming a travelling teacher is especially fitting. The guru’s task is to help the student recognise what is already the ground of experience, but has not been understood. The journey is outward across places, and inward through mistaken identification.',
      'The lineage also precedes him. In the Advaita tradition, Govinda Bhagavatpada is his guru and Gaudapada is his paramaguru, his guru’s guru. The Upanishads, Bhagavad Gita and Brahma Sutras already existed as the texts he would interpret. His achievement belongs within that inheritance.'
    ]},
    {id:'dates-and-birthplace',heading:'When and where was Adi Shankaracharya born?',paragraphs:[
      `The familiar dates 788–820 CE appear in Sringeri’s presentation. Modern scholarship generally places him in the eighth century, but does not agree on exact years: Neil Dalal’s ${ref('Stanford Encyclopedia of Philosophy entry',source.stanford)} discusses proposals including approximately 700–750 CE. Kanchi’s institutional chronology gives 509–477 BCE. These are different chronological frameworks, not interchangeable dates.`,
      `Kalady is the birthplace named in Sringeri’s biography and the principal centre of his childhood remembrance. A further Kerala tradition deserves attention: ${ref('Chinmaya International Foundation',source.chinmaya)} identifies Melpazhur Mana, now Adi Sankara Nilayam at Veliyanad, as his birthplace. Readers may therefore encounter two birth-associated places in Kerala. This guide attributes the claims rather than collapsing them into one location.`,
      'Shankara Jayanti is traditionally observed on Vaishakha Shukla Panchami, the fifth day of the bright fortnight of Vaishakha. A recurring lunar observance and an agreed historical birth year are different questions.'
    ],table:{caption:'The main dating frameworks encountered in the sources',headers:['Source or framework','Dates presented','How to read the claim'],rows:[
      ['Sringeri’s popular biographical presentation','788–820 CE','A widely used traditional chronology.'],
      ['Modern academic discussion','Eighth century CE; exact years debated','A broad historical placement, with more than one proposed lifespan.'],
      ['Kanchi Kamakoti chronology','509–477 BCE','The chronology maintained in Kanchi’s own account.']
    ]}},
    {id:'childhood',heading:'A brilliant child, and a household changed by loss',paragraphs:[
      'The traditional life remembers Shivaguru’s death during Shankara’s childhood. Aryamba then carries the responsibility of raising their son. His upanayana introduces him to disciplined Vedic student life, and the biographies describe astonishingly rapid learning. Exact ages and educational milestones vary between tellings; their shared emphasis is his early command of sacred learning.',
      `Two devotional miracle accounts make his compassion visible. In the Kanakadhara story, a poor woman offers the young brahmachari an amla, the little she has. His prayer to Lakshmi brings a shower of golden fruit. In another, his prayer brings the river closer to home for his mother. ${ref('Sringeri: childhood and early renunciation',source.life)}`,
      'The amla story asks the reader to notice the giver before the gold. The woman’s offering costs her something. Shankara’s learning becomes a response to another person’s hardship. Aryamba’s difficulty at the river gives the second story the same intimate scale: before the acharya’s concern stretches across Bharat, it includes the person who raised him.'
    ]},
    {id:'why-sannyasa',heading:'Why did he want to take sannyasa?',paragraphs:[
      'The crocodile is the dramatic occasion in the story. It is not the whole explanation for Shankara’s wish to renounce. The biographies describe that wish as already present. Sannyasa meant leaving the household path and committing himself to the pursuit and teaching of liberating knowledge.',
      `His own commentary on ${ref('Mundaka Upanishad 1.2.12',source.mundaka)} provides a much deeper way to understand this commitment. The passage asks the seeker to examine the results produced by action. Whatever is produced depends on conditions and cannot, by being produced, become the unconditioned. The seeker who recognises this turns to a guru for knowledge of Brahman.`,
      'This is not a claim that work, kindness or family affection are worthless. It distinguishes the results of action from freedom through knowledge. A house can be built. A skill can be acquired. A ritual can produce a result according to its conditions. But if the Self is already Brahman, liberation cannot mean manufacturing a new Self.',
      'Vairagya is the loosening of dependence on limited rewards. Mumukshutva is the longing for moksha, freedom from bondage. These terms help explain the direction of his renunciation without pretending we can reconstruct the private thoughts of a child from a later biography.',
      'The same Upanishadic passage asks for a teacher who is shrotriya, grounded in the teaching, and brahmanishtha, established in Brahman. Shankara’s gloss stresses approaching such a teacher even when one already knows the texts. His story therefore leads from brilliance to discipleship. Talent does not make the guru unnecessary.'
    ]},
    {id:'crocodile-and-consent',heading:'The crocodile, Aryamba’s consent, and the promise',paragraphs:[
      `In the familiar account, a crocodile seizes Shankara while he bathes. He asks Aryamba to permit renunciation in that moment of danger. She agrees; he takes the resolve of sannyasa, and the crocodile releases him. Chinmaya’s account calls this apat-sannyasa, renunciation in an emergency. It is followed by his search for a guru. ${ref('Chinmaya: the childhood account',source.chinmaya)}`,
      `Aryamba is not simply an obstacle in this story. She is a widowed mother facing separation from her only son. The traditional promise is that he will return when she needs him at the end of her life. ${ref('Kanchi’s biographical account',source.parents)} retains that promise alongside her grief.`,
      'The episode holds two commitments in tension: the call to renunciation and the obligation created by love. That tension is why his later return matters. If the biography stopped at the river, it would leave the mother’s part of the story unfinished.',
      'It is also useful to distinguish a resolve taken in danger from the formal discipleship and instruction that follow. The crocodile episode does not replace Govinda Bhagavatpada in the life. It prepares the way for the meeting.'
    ]},
    {id:'govinda-bhagavatpada',heading:'On the Narmada: finding Govinda Bhagavatpada',paragraphs:[
      `The Narmada meeting is associated in Kanchi’s narrative with Omkar Mandhata, or Omkareshwar. Govinda Bhagavatpada receives the young renunciate and instructs him. Sringeri’s account connects his response to the guru’s question about his identity with the ten verses known as the Dasha Shloki. Popular retellings sometimes substitute the Nirvana Shatkam; the identification should follow the particular source being used. ${ref('Sringeri: initiation and study',source.life)}`,
      'The question of identity is the heart of the meeting. A name, a family and a place describe the person who has arrived. Vedantic inquiry asks what the word “I” ultimately refers to. Is it the changing body, the senses, the succession of thoughts, or the consciousness in whose presence those are known?',
      'The disciple’s learning is not portrayed merely as information transfer. Service, attention and instruction belong together. When the guru sends him onward to teach and write, the journey becomes a responsibility received within a parampara, a succession of teachers.'
    ]},
    {id:'kashi',heading:'Kashi: when the teacher recognises a guru before him',paragraphs:[
      `In the traditional Kashi episode, Shankara encounters a man described as a chandala, accompanied by dogs. Asked to move aside, the man questions whether the request concerns his body or the consciousness that is not different in either of them. The encounter is revealed as Shiva’s teaching. ${ref('Sringeri: Shankara at Varanasi',source.kashi)}`,
      `The ${ref('Manisha Panchakam',source.manisha)}, traditionally connected with this encounter, gives the story its enduring force. Its first verse contemplates the consciousness present through waking, dream and deep sleep, and through different living forms. A person firmly established in that recognition is worthy to be the speaker’s guru, whether socially regarded as a chandala or a twice-born person.`,
      'The reversal is striking. The travelling teacher becomes the one addressed by a question. Recognition is not made dependent on the other person’s social prestige. The story asks whether a proclaimed understanding of nonduality is present in the way one sees another human being.',
      'The force of the encounter remains personal: would I recognise a teacher whose appearance and social position defied my expectations? The question belongs beside the metaphysical argument, because the story makes recognition happen between two people.'
    ]},
    {id:'writing-the-bhashyas',heading:'What he wrote, and what a bhashya actually does',paragraphs:[
      `Shankara’s great commentarial project concerns the Prasthanatrayi: the Upanishads, Bhagavad Gita and Brahma Sutras. A bhashya explains a text’s wording and argument, considers objections, and shows how its passages fit together. These works offer a more direct encounter with his thought than a list of miracles. ${ref('Sringeri: works of Adi Shankaracharya',source.works)}`,
      'The task is demanding because the texts teach in different forms. An Upanishad may use dialogue or a compact declaration. The Gita teaches amid Arjuna’s crisis. A Brahma Sutra compresses an argument into very few words. A commentator must explain why a particular reading follows from the passage and its context.',
      `The Upadesha Sahasri is a major independent teaching work generally accepted as his. The status of other works bearing his name is less uniform. Traditional attribution and scholarly judgments about authorship should be stated separately. ${ref('Stanford: life and works',source.stanford)}`,
      `The digvijaya connects the composition of commentaries with Kashi and Badri, and tells of Vyasa testing the young acharya’s explanation of the Brahma Sutras. The recognition and extension of his life belong to the sacred narrative. They express the authority of his teaching; they do not supply an independently dated publication record. ${ref('Sringeri: commentaries and the meeting with Vyasa',source.kashi)}`
    ],table:{caption:'Three kinds of works associated with Shankaracharya',headers:['Kind','Purpose','Examples and attribution'],rows:[
      ['Bhashya','Sustained explanation of a foundational text','Brahma Sutra Bhashya, Bhagavad Gita Bhashya and principal Upanishad commentaries.'],
      ['Prakarana grantha','A focused presentation of Vedantic teaching','Upadesha Sahasri; texts such as Atma Bodha and Vivekachudamani are traditionally attributed, with different scholarly assessments.'],
      ['Stotra','Prayer, praise and contemplation','Bhaja Govindam, Dakshinamurti Stotram, Kanakadhara and other traditionally attributed hymns; each has its own transmission history.']
    ]}},
    {id:'debate-and-knowledge',heading:'What was at stake in his debates?',paragraphs:[
      'Digvijaya literally evokes victory in the directions. In Shankara’s biography it is a teaching journey through argument, encounter and the gathering of disciples. Reducing it to a scoreboard of defeated people misses the philosophical questions.',
      `One central question is whether liberation is produced by action or disclosed by knowledge. In ${ref('Brahma Sutra Bhashya 1.1.4',source.brahmasutra)}, Shankara defends the Upanishads as a means of knowing an already existent reality. The point of a teaching need not be a command to perform a new act. Knowledge itself can remove a mistake.`,
      'If a rope is mistaken for a snake, more effort directed at the imagined snake does not resolve the error. Seeing the rope does. The example is not a suggestion that fear is unimportant; it shows why correcting a misunderstanding requires the right kind of remedy.',
      'His commentaries also examine alternative readings before answering them. This practice gives an opponent a place inside the text. A serious reader should follow the objection and reply, rather than assume that every non-Advaita position is too foolish to deserve an answer.',
      'The biographies celebrate his victories. Historical claims that he single-handedly ended Buddhism throughout India go well beyond what an individual debate story can establish. His achievement can be described strongly and precisely through the writings and traditions that survive.'
    ]},
    {id:'kumarila-mandana-bharati',heading:'Kumarila, Mandana Mishra and Ubhaya Bharati',paragraphs:[
      `Sringeri’s account takes Shankara to Kumarila Bhatta, the great Mimamsa scholar, during Kumarila’s final expiation. Kumarila directs him towards Mandana Mishra. In the ensuing debate, Mandana’s wife Ubhaya Bharati serves as judge; the contest concerns the Veda, action and liberating knowledge. Mandana subsequently becomes the disciple Sureshwaracharya in this tradition. ${ref('Sringeri: the Sureshwaracharya account',source.sureshwara)}`,
      'Ubhaya Bharati is indispensable to the episode. She is remembered as learned enough to evaluate both sides and, in the continuation, to question Shankara herself. Reading her merely as the wife who watched a debate leaves out her intellectual role.',
      'The identification of Mandana with Sureshwara should remain attached to the traditional narrative. Philosophical scholarship also studies the Brahmasiddhi of Mandana and the works of Sureshwara on their own terms. A biographical identification should not make their distinct texts disappear.',
      'The precise location of the debate is also told differently in regional accounts. A neat modern travel itinerary cannot settle that variation. The enduring question is clearer than the disputed address: what can ritual action accomplish, and what requires knowledge of the Self?'
    ]},
    {id:'parakaya-pravesha',heading:'Ubhaya Bharati’s further questions and parakaya pravesha',paragraphs:[
      `In the Madhaviya narrative, Ubhaya Bharati extends the discussion to kama-shastra, knowledge concerning love and embodied life. Shankara asks for time. Through parakaya pravesha, yogic entry into another body, he enters the deceased King Amaruka’s body while his disciples protect his own. The account describes his eventual return and the completion of the encounter. ${ref('Sringeri: the debate with Ubhaya Bharati',source.debates)}`,
      'The disciples’ vigil gives this miraculous episode a second centre of attention. While their guru is away, his body remains in their care. Their task is to protect the possibility of his return.',
      'Its narrative question is demanding: how does someone committed to renunciation answer questions about kinds of experience he has relinquished? The story answers within its own understanding of yogic power and realised detachment. Readers can recognise that framework while keeping Shankara’s philosophical arguments distinct from the miracle that the biography places around them.'
    ]},
    {id:'four-disciples',heading:'Four disciples, four different ways of approaching the guru',paragraphs:[
      'The four principal disciples are not interchangeable figures placed around a master. Their remembered lives give learning, devotion, service and direct recognition different human faces. The following accounts are traditional; the works associated with them also let a reader continue beyond the stories.'
    ],table:{caption:'The principal disciples and their remembered contributions',headers:['Disciple','The traditional story','The teaching that continues'],rows:[
      ['Padmapadacharya',`Known first as Sanandana, he is remembered for crossing the Ganga when called by his guru, with lotuses supporting his steps. The name Padmapada recalls those lotus feet. ${ref('Sringeri’s account',source.padmapada)}`,'The Panchapadika comments on the beginning of Shankara’s Brahma Sutra Bhashya. His legacy includes scholarship as well as devotion.'],
      ['Sureshwaracharya',`The scholar-disciple identified with Mandana in the traditional life. He is honoured at Sringeri as its first peethadhipati. ${ref('Sringeri’s account',source.sureshwara)}`,'The Naishkarmya Siddhi and his vartikas, explanatory verse works on Shankara’s commentaries to the Brihadaranyaka and Taittiriya Upanishads.'],
      ['Hastamalakacharya',`His father Prabhakara brings a largely silent child to Shankara. Asked who he is, the boy answers with clarity about the Self. His name likens this certainty to an amla resting plainly in the hand. ${ref('Sringeri’s account',source.hastamalaka)}`,'The Hastamalakiyam preserves the verses attributed to him. The story invites the reader not to confuse outward silence with an absence of understanding.'],
      ['Totakacharya',`The disciple Giri serves his guru with deep attention. When others underestimate him, the guru’s grace reveals his learning through verses in the Totaka metre. ${ref('Sringeri’s account',source.totaka)}`,'The Totakashtakam is remembered as his hymn to the guru; the Shruti Sara Samuddharana is also associated with him.']
    ]}},
    {id:'padmapada-and-narasimha',heading:'Padmapada, Narasimha, and a teacher’s endangered life',paragraphs:[
      `Another episode connects Padmapada’s devotion with Narasimha. A Kapalika seeks Shankara’s head for a ritual; the biography portrays the acharya’s detachment and the disciple’s extraordinary intervention. Padmapada, empowered by Narasimha, saves his guru. This is a sacred narrative about the disciple’s protective devotion. ${ref('Sringeri: Padmapada’s life',source.padmapada)}`,
      'Earlier, the lotus story celebrates Padmapada’s answer to his guru’s call. Here the direction reverses: the disciple comes to his teacher’s aid. Together, the stories make devotion an attentive, active relationship.',
      'For a reader following RudraNāda’s devotional themes, it is also a meeting point between the guru tradition and the protecting presence of Narasimha. Our [Narasimha guide](/deities/narasimha) follows that deity’s wider story and devotional context.'
    ]},
    {id:'sringeri-and-sharada',heading:'Sringeri: a cobra’s shade and Sharada’s presence',paragraphs:[
      `At Sringeri, the institution’s foundation story begins with a cobra sheltering a frog in labour from the sun beside the Tunga. Shankara sees an extraordinary suspension of natural hostility and chooses the place for a centre of learning. The Kappe Shankara shrine remembers that scene. ${ref('Sringeri’s institutional history',source.sringeri)}`,
      'The image gives the place a moral character before it gives it buildings. A creature that could prey on another instead offers protection. Read devotionally, the scene suggests the kind of atmosphere in which knowledge should grow.',
      'Sharadamba, the goddess of learning, stands at the centre of the peetham’s identity. Worship and rigorous study belong together here. A reader who imagines Advaita as only abstract speculation would miss the puja, recitation, teaching and discipline through which it has been lived.',
      'The southern peetham remembers Sureshwaracharya as its first acharya. Its history matters both as an account of origin and as the self-understanding of an institution that continues to teach.'
    ]},
    {id:'aryamba-final-days',heading:'He returns to Aryamba: the promise is fulfilled',paragraphs:[
      `The Madhaviya account brings Shankara back to his dying mother. He first instructs her about Brahman; when that teaching does not meet her immediate need, the narrative turns to prayer and the presence of the divine in a form she can receive. It describes her peaceful departure with her awareness turned towards Vishnu. ${ref('Sringeri: Shankara’s boon to Aryamba',source.mother)}`,
      'The same account says that relatives refuse to help with her cremation because he is a sannyasi. He performs her last rites himself. Details of the cremation and its aftermath differ across retellings, so a graphic composite of them would add certainty the sources do not share.',
      'The emotional centre is simple: he returns. Renunciation has not cancelled the promise given to his mother. The biography also lets the teacher respond to the person before him, rather than insist that a dying woman receive the teaching in only one form.'
    ]},
    {id:'travels-and-sacred-geography',heading:'His journeys became a sacred geography',paragraphs:[
      'Kalady, the Narmada, Kashi, Badri, Sringeri, Puri, Dwarka, Kashmir, Kanchi and Kedarnath recur across the wider remembrance of Shankara. They do not form one securely dated route. Different biographies arrange journeys differently, while temples and regional traditions preserve their own associations.',
      `In the Madhaviya account, he reaches Sharada’s Sarvajna Peetham in Kashmir and answers scholars before ascending the seat. It celebrates breadth of understanding and the testing of spiritual fitness. ${ref('Sringeri: the Kashmir episode',source.final)}`,
      'Sarvajna Peetham, a seat of all-knowing wisdom, should not automatically be equated with one of the four directional mathas. A seat in a narrative, a temple, a monastery and a pilgrimage dham can be related without being the same institution.',
      'This distinction also prevents a common geographical confusion. The four Amnaya peethams are not simply another name for the Himalayan Chota Char Dham pilgrimage. Joshimath is associated with the northern peetham and the Badri region; Kedarnath is a distinct sacred place.'
    ]},
    {id:'padmapada-manuscript',heading:'A lost manuscript and the guru’s memory',paragraphs:[
      `The Madhaviya account also remembers a quieter crisis. Padmapada leaves his commentary manuscript with his uncle at Srirangam while travelling to Rameshwaram. On returning, he learns that it has been lost in a fire. Shankara consoles him and dictates the portion he remembers hearing, enabling his disciple to recover the work. The story is associated with the Panchapadika. ${ref('Sringeri: Padmapada’s commentary',source.mother)}`,
      'The narrative honours the teacher’s extraordinary memory, but it also turns our attention to a fragile material object. A teaching carried on leaves can burn. A student’s labour can be lost. The relationship between oral learning and written preservation was therefore part of the story long before printing or digital libraries.',
      'The surviving Panchapadika belongs to the commentarial tradition, where its arguments can still be studied. Its importance does not end with the account of how the manuscript was saved.'
    ]},
    {id:'kanchi-traditions',heading:'Kanchi’s place in the story',paragraphs:[
      `Kanchi Kamakoti’s account connects Shankara with Kamakshi, the consecration of the Sri Chakra, a Sarvajna Peetham at Kanchi, and his final residence there. It also recounts a Kailasa journey and five sphatika, or crystal, lingas: Mukti at Kedarnath, Vara in Nepal, Bhoga at Sringeri, Moksha at Chidambaram, and Yoga retained for worship at Kanchi. These are Kanchi’s traditional associations. ${ref('Kanchi: origin and the life of Bhagavatpada',source.kanchi)}`,
      'These details cannot simply be appended to another biography as though every source presents one identical journey. Keeping the attribution visible lets the reader understand Kanchi on its own terms and also understand why a Sringeri-centred account may give the final journey differently.',
      'The presence of both Kashmir and Kanchi Sarvajna Peetham accounts is another reason to read names in context. Shared sacred language does not, by itself, establish that every passage refers to one event.'
    ]},
    {id:'advaita-explained',heading:'What did Adi Shankaracharya teach?',paragraphs:[
      `Advaita means nonduality. In Shankara’s reading of the Upanishads, the Self, Atman, is not ultimately separate from Brahman, the limitless reality. ${ref('Chandogya Upanishad 6 with Shankara’s bhashya',source.chandogya)} develops the teaching through the relation between an underlying reality and its names and forms.`,
      'The familiar clay example is useful. A pot has a name, a shape and a practical function, but it does not have an existence independent of clay. The example points towards dependence; it is not a claim that a pot cannot hold water. Likewise, saying that the world is mithya is not the same as saying it is sheer nonexistence or that suffering can be ignored.',
      `At the beginning of the ${ref('Brahma Sutra Bhashya',source.brahmasutra)}, Shankara discusses adhyasa, the mistaken placing of the qualities of one thing upon another. We identify the Self with the body, senses and mind, and speak as though their changing conditions completely define what we are. He treats this confusion as fundamental to bondage.`,
      'This is more exact than the slogan “everything is an illusion.” The body, thought, action and consequence have their place in ordinary experience. The inquiry asks whether they possess the independent, unchanging reality we habitually assign to them, and whether the witnessing Self is confined to them.',
      'Brahman is not the personal ego enlarged to cosmic size. “I am Brahman” cannot coherently mean that my preferences, temper or private opinions acquire absolute authority. The inquiry challenges the mistaken identification that makes those things the whole meaning of “I.”',
      `Shankara also gives preparation a central place. The opening discussion of Brahma Sutra 1.1.1 concerns discrimination between the enduring and the temporary, dispassion towards rewards, disciplines such as calm and restraint, and the desire for liberation. The later discussion at ${ref('Brahma Sutra 4.1.1',source.liberation)} considers sustained engagement with the teaching.`,
      'Shravana is listening to the teaching under guidance; manana is reasoning through doubts; nididhyasana is sustained contemplation or assimilation. These are not three mechanical boxes to tick. A sentence can be memorised while its meaning remains misunderstood. The teaching has to address that gap.',
      'The result is knowledge, not a newly manufactured Atman. This is why the guru matters, why inquiry matters, and why renunciation is more than a change of clothes. The work concerns the way reality is understood.'
    ]},
    {id:'bhakti-and-stotras',heading:'Why the teacher of Advaita also sings to Bhagavan',paragraphs:[
      `Sringeri’s account presents Shankara as a teacher of devotion as well as knowledge and associates him with shanmata: worship of Shiva, Vishnu, Devi, Surya, Ganapati and Kumara. This is a traditional description of his unifying religious role, not a claim that these deities or their worship first appeared in his lifetime. ${ref('Sringeri: works and worship',source.works)}`,
      'A stotra gives prayer a voice. A bhashya unfolds an argument. Their different forms do not require different ultimate goals. The person praying still needs humility, attention and freedom from self-importance; the person studying still needs those qualities too.',
      `The ${ref('Dakshinamurti Stotram',source.dakshinamurti)} itself joins reverence for the guru with inquiry into consciousness and appearance. The ${ref('Manisha Panchakam',source.manisha)} gives philosophical recognition the form of verse. These texts make the relation easier to see than a general claim that all paths are identical.`,
      'Bhaja Govindam, Kanakadhara, Nirvana Shatkam, Shivananda Lahari and Saundarya Lahari have a central place in devotional remembrance of Shankara. When introducing them, “traditionally attributed to” is often the responsible wording. A hymn’s value in lived worship and the historical question of its authorship are related but distinct matters.',
      'Readers drawn first by sacred sound can continue through RudraNāda’s [stotrams collection](/stotrams) and [Vishnu Sahasranama](/stotrams/vishnu-sahasranama), while keeping each text’s own origin and commentary tradition clear.'
    ]},
    {id:'mukti-meaning',heading:'What does his mukti mean?',paragraphs:[
      'Mukti or moksha means liberation. It should not be used as though Advaita teaches that a realised person first becomes free only when the body dies. The distinction between liberation while living and the end of embodied life is essential to understanding the language used about an acharya.',
      `In the discussion around ${ref('Brahma Sutra Bhashya 4.1.13–19',source.liberation)}, Shankara considers knowledge and karma, including the continuation of karma whose result has already begun. This helps explain how the body’s life can continue after the ignorance that sustained bondage has been removed.`,
      'Jivanmukti names liberation while living. Videhamukti is commonly used for the final ending of embodiment, without another birth for the knower. Neither should be pictured as the true Self travelling from one geographical place to another. Geography belongs to the biography of the body; liberation concerns the removal of ignorance about the Self.',
      'Samadhi has more than one use. It can refer to meditative absorption, and in devotional usage it can also refer to a saint’s final departure or the memorial associated with it. Siddhi and mahasamadhi likewise occur in institutional accounts of a revered teacher’s departure. Context determines what is meant.',
      'When devotees speak of Shankara returning to Shiva, they express the completion of the avatara’s mission. When Advaita speaks of the Self as Brahman, it is speaking at the level of ultimate reality. These ways of speaking need not be forced into a crude travel story about where a liberated soul went next.'
    ]},
    {id:'final-departure',heading:'Kedarnath and Kanchi: accounts of his final departure',paragraphs:[
      `Sringeri’s Madhaviya account concludes the earthly mission at Kedarnath and remembers a lifespan of thirty-two years. Its sacred imagery describes the return of the Shiva avatara to his divine abode. ${ref('Sringeri: the end of the incarnation',source.final)}`,
      `Kanchi’s account places his final siddhi at Kanchipuram, in association with Kamakshi and his own ashrama. It supplies texts and lineage traditions in support of that remembrance. ${ref('Kanchi: the final residence',source.kanchi)}`,
      'These should be presented as distinct traditions. A modern memorial at one place is evidence of the continuing commemoration there; it cannot by itself settle the entire historical question. Nor does a choice of historical dating automatically decide the place of departure.',
      'The shared remembrance of a remarkably brief life remains powerful. But thirty-two belongs to the traditional lifespan, and proposed historical dates should not be silently forced to fit it. The most secure way to continue the story is through what survives: texts, discipleship, institutions and worship.'
    ]},
    {id:'life-timeline',heading:'His life at a glance',paragraphs:[
      'This is a sequence of major themes in the traditional life, not a year-by-year reconstruction. The relative order of later journeys and foundations varies.'
    ],table:{caption:'A traditional life sequence without invented dates',headers:['Stage','What the accounts remember'],rows:[
      ['Before birth','Shivaguru and Aryamba’s prayer to Shiva; the promise of an extraordinary child.'],
      ['Childhood in Kerala','Early learning, loss of his father, Aryamba’s care, and the Kanakadhara tradition.'],
      ['Renunciation','The wish for sannyasa, the crocodile episode, maternal consent and the promise to return.'],
      ['Discipleship','Govinda Bhagavatpada, the Narmada and instruction in Vedanta.'],
      ['Teaching and writing','Kashi and Badri, bhashyas, public inquiry and the gathering of disciples.'],
      ['Travelling teacher','Debate traditions, sacred places, Sharada worship and monastic foundations.'],
      ['Return to his mother','Aryamba’s final days and the fulfilment of his promise.'],
      ['Final departure','A traditionally short lifespan; Kedarnath and Kanchi accounts remain distinct.'],
      ['Continuing legacy','Disciples’ works, peethams, later scholarship, pilgrimage, print and digital study.']
    ]}},
    {id:'four-peethams',heading:'The four Amnaya peethams',paragraphs:[
      `An amnaya is a received sacred tradition; a peetham is a seat, and a matha is a monastic institution. In the four-direction tradition, the peethams preserve learning and the guru–shishya succession across different regions. ${ref('Sringeri’s Amnaya account',source.amnaya)} and ${ref('Govardhan Math’s account',source.puriMath)} describe this institutional purpose.`,
      `The disciple associations below follow the widely used scheme also given by ${ref('Swami Sivananda’s biography',source.dls)}. Individual online summaries are not always consistent about the assignments. Puri’s own ${ref('succession register',source.puriLineage)} begins with Padmapada; Sringeri names Sureshwara in its own history.`,
      'The Veda associations indicate inherited custodial identities. They do not mean a peetham studies only one Veda or that the other Upanishads are excluded from its teaching. The traditional foundation accounts should also be distinguished from the dates of surviving buildings and later renovations.'
    ],table:{caption:'The four directional seats in the commonly transmitted scheme',headers:['Direction and peetham','Location','Traditional first disciple','Associated Veda'],rows:[
      ['South · Sringeri Sharada Peetham','Sringeri, Karnataka','Sureshwaracharya','Yajur Veda'],
      ['West · Dwarka Sharada Peetham','Dwarka, Gujarat','Hastamalakacharya','Sama Veda'],
      ['East · Govardhana Peetham','Puri, Odisha','Padmapadacharya','Rig Veda'],
      ['North · Jyotir Math / Jyotish Peeth','Joshimath and the Badri region, Uttarakhand','Totakacharya','Atharva Veda']
    ]}},
    {id:'mahavakyas',heading:'The four mahavakyas are invitations to inquiry',paragraphs:[
      'Four Upanishadic statements are especially prominent in Advaita teaching. Their point is not to supply a spiritual slogan for the ego. Each needs the context of the Upanishad and the guidance of its teaching tradition.'
    ],table:{caption:'Four great statements, with their textual locations',headers:['Mahavakya','Plain English sense','Upanishadic reference'],rows:[
      ['Prajnanam Brahma','Consciousness is Brahman.',ref('Aitareya Upanishad 3.1.3',source.aitareya)+'; also numbered 3.3 in shorter schemes.'],
      ['Aham Brahmasmi','I am Brahman.',ref('Brihadaranyaka Upanishad 1.4.10',source.brihadaranyaka)],
      ['Tat Tvam Asi','You are That.',ref('Chandogya Upanishad 6.8.7',source.chandogya)+', repeated through the chapter.'],
      ['Ayam Atma Brahma','This Self is Brahman.',ref('Mandukya Upanishad 2',source.mandukya)]
    ]}},
    {id:'peethams-today',heading:'The peethams and their present leadership',paragraphs:[
      'The following names were checked against institutional publications and current public identifications on 2 October 2026. A living institution may have a senior acharya and an initiated successor together; reducing every lineage to one name can obscure that relationship.',
      'Kanchi Kamakoti is included alongside the four directional peethams because it maintains its own Shankara foundation and succession tradition. It should not be omitted, nor silently substituted for one of the four seats.'
    ],table:{caption:'Published leadership and lineage identifications · checked 2 October 2026',headers:['Institution','Names and roles in the checked sources','Source'],rows:[
      ['Sringeri Sharada Peetham','Sri Bharati Tirtha Mahaswamiji, the senior acharya (Mahasannidhanam), and Sri Vidhushekhara Bharati Mahaswamiji (Sannidhanam).',ref('September 2026 institutional announcement',source.sringeriNow)],
      ['Dwarka Sharada Peetham','Swami Sadananda Saraswati is publicly identified as the Shankaracharya of Dwarka Sharada Peetham.',ref('Sringeri’s record of his visit',source.dwarkaVisit)+'; '+ref('current author profile',source.dwarkaLeader)],
      ['Govardhana Peetham, Puri','Swami Nischalananda Saraswati, identified by the peetham as its 145th Shankaracharya.',ref('Govardhana Peetham biography',source.puri)],
      ['Jyotir Math','Swami Avimukteshwarananda Saraswati is identified with the seat by his official website. Competing succession claims exist; this entry records that lineage’s identification.',ref('Official public identification',source.jyotir)],
      ['Kanchi Kamakoti Peetham','Sri Shankara Vijayendra Saraswati, the 70th acharya, with Sri Satya Chandrasekharendra Saraswati, initiated in 2025 and identified as the 71st acharya.',ref('Kanchi’s institutional account',source.kanchi)+'; '+ref('2026 joint puja report',source.kanchiNow)]
    ]}},
    {id:'living-institutions',heading:'What these institutions preserve',paragraphs:[
      `The peethams are not only memorials to a founder. Sringeri’s September 2026 Vakyartha Vidwat Sabha brought scholars into sustained shastric discussion under the acharyas’ guidance. The institutional notice makes the ongoing intellectual work visible. ${ref('Sringeri: 2026 Vidwat Sabha',source.sringeriNow)}`,
      `Kanchi’s report of a ${ref('Guruvara sadas in September 2026',source.kanchiSadas)} likewise records a living setting for traditional learning. At Puri, the institutional site provides a succession register and information about Vedic education. These are different ways in which teaching is made available beyond one teacher’s lifetime.`,
      'Three kinds of continuity should be distinguished. A lineage preserves a succession of teachers. A text preserves words that can be studied and interpreted. An institution supports the conditions in which that study and practice can continue. None is a complete substitute for the other two.',
      'A present-day Shankaracharya carries a title connected with the tradition; he is not the same historical person as Adi Shankara. And the existence of a shared title does not remove the distinctive histories of the different seats. For darshan, events or study, consult the relevant institution’s current official information.'
    ]},
    {id:'dashanami',heading:'The Dashanami names and the wider monastic tradition',paragraphs:[
      `The Dashanami, or ten-name, sannyasa tradition is associated with Shankara’s legacy. The names are Tirtha, Ashrama, Vana, Aranya, Giri, Parvata, Sagara, Saraswati, Bharati and Puri. ${ref('Swami Sivananda’s institutional account',source.dls)} relates them to the four mathas.`,
      'These names help explain why a present-day monk may bear a title such as Saraswati or Bharati. They are not simply modern surnames, and the title Shankaracharya is not a name used by every Dashanami sannyasi.',
      'The wider monastic world has its own long developments. A tradition attributing organisation to a founding acharya should not be turned into a claim that every later monastery, akhara or administrative arrangement was created in exactly its present form by him.'
    ]},
    {id:'after-his-lifetime',heading:'After his lifetime: the teaching keeps developing',paragraphs:[
      'After Shankara’s departure, transmission was active work. Disciples explained their guru’s commentaries, later teachers examined difficult points, and students inherited both a teaching and questions requiring careful thought.',
      `Two influential later streams are associated with Vachaspati Mishra’s Bhamati and Prakashatman’s Vivarana. The latter builds on Padmapada’s Panchapadika. Mandana Mishra’s Brahmasiddhi is also important for understanding the broader Advaita discussion, including differences over knowledge and action. ${ref('Internet Encyclopedia of Philosophy: the later tradition',source.iep)}`,
      `The surviving textual conversation can be seen directly in ${ref('Advaita Sharada’s catalogue',source.catalog)}: Shankara’s bhashyas sit beside Sureshwara’s vartikas, the Panchapadika, Bhamati, Anandagiri’s commentaries, and works by later teachers such as Vidyaranya and Madhusudana Saraswati. The same collection makes clear that “Advaita literature” is much larger than “works written by Shankara.”`,
      'This is a richer meaning of legacy than uninterrupted repetition. A terse passage must still be explained; a misunderstanding must still be answered; a new student still has to see why an argument matters. Fidelity can require patient reasoning.',
      'It is also why later Hindu philosophers who disagree with Advaita should be read as thinkers with their own serious accounts of the scriptures. Shankara’s lasting importance does not depend on pretending that the history of Vedanta ended with him.'
    ]},
    {id:'kalady-recovery',heading:'Kalady’s recovery: the birthplace re-enters public memory',paragraphs:[
      `A particularly tangible later chapter belongs to Sri Sacchidananda Shivabhinava Nrisimha Bharati, the 33rd acharya of Sringeri. The peetham’s account describes the identification and development of the Kalady site and the consecration of shrines to Shankara and Sharada on 21 February 1910. It also remembers Aryamba’s cremation place. ${ref('Sringeri: discovery and establishment of Kalady',source.kalady)}`,
      'The important distinction is between the ancient life remembered at a place and the later work that makes that remembrance accessible. The date of a shrine’s consecration is not automatically the date of the event the shrine commemorates.',
      'Kalady also restores Aryamba to the visitor’s attention. The life of the teacher is remembered beside the story of the mother who gave her reluctant consent and received his promise. The geography keeps the family story close to the philosophical legacy.'
    ]},
    {id:'manuscripts-to-digital',heading:'From palm-leaf manuscripts to a searchable Sanskrit library',paragraphs:[
      `Sringeri’s history of Advaita Sharada describes the collection and publication of Shankara’s works through the efforts of the 33rd acharya and T. K. Balasubrahmanyam. It follows the movement from manuscripts into the Shankara Granthavali volumes, then into modern digital access. ${ref('Advaita Sharada: the project’s history',source.digital)}`,
      'The online project began in 2014; its institutional history records further editions in 2017 and 2019 and a revamped platform in 2026. The current collection brings primary texts and later commentaries into a linked reading environment.',
      'This changes what a serious reader can do. A claim about Shankara can be followed back to the bhashya. A later explanation can be compared with the passage it explains. The reader can distinguish a text, its commentary and a modern summary instead of treating all three as one voice.',
      'Digital access does not replace Sanskrit learning or a competent teacher. It does make the source easier to reach. For a biography concerned with what happened after his mukti, that is a meaningful part of the story: the medium changes, while the work of understanding continues.'
    ]},
    {id:'kedarnath-memorial',heading:'Kedarnath’s modern memorial',paragraphs:[
      `On 5 November 2021, the restored Adi Shankaracharya samadhi and a statue were inaugurated at Kedarnath. The Government of India’s contemporary report records the event; the restoration followed the devastation of the 2013 floods. ${ref('Press Information Bureau: the Kedarnath inauguration',source.kedarnath)}`,
      'This is a securely dated chapter in the history of remembrance. It tells us when the modern memorial was inaugurated and how the Kedarnath tradition continues to be honoured. It should be kept distinct from the much earlier and differently transmitted accounts of his final departure.'
    ]},
    {id:'reading-his-works',heading:'How to begin reading beyond the biography',paragraphs:[
      'Begin with a question rather than an ambitious reading quota. Are you trying to understand renunciation, the Self, devotion, the role of the guru, or liberation? Let that question choose the first passage. A short text studied carefully can offer more than a long list of titles.',
      `For the purpose of approaching a guru, start with ${ref('Mundaka Upanishad 1.2.12 and Shankara’s commentary',source.mundaka)}. For the problem of mistaken identity, read the opening adhyasa discussion of the ${ref('Brahma Sutra Bhashya',source.brahmasutra)}. For a dialogue that gradually unfolds the identity teaching, read ${ref('Chandogya Upanishad 6',source.chandogya)}.`,
      `For devotion joined to contemplation, read the ${ref('Dakshinamurti Stotram',source.dakshinamurti)} with a reliable explanation. For the question of recognising wisdom in another person, turn to the ${ref('Manisha Panchakam',source.manisha)}. These are entry points; the meanings become clearer through sustained study.`,
      'Keep three notes as you read: what the source actually says, how its commentator explains it, and what you are inferring. This small discipline makes room for reverence without surrendering care.',
      'The life returns us to the student. A child seeks a guru. A teacher receives a searching question in Kashi. Disciples carry learning forward. Centuries later, another reader opens a bhashya. Shankara’s legacy is present whenever that encounter becomes an honest inquiry into what the teaching means.'
    ]}
  ],
  faq:[
    {question:'Why did Adi Shankaracharya take sannyasa?',answer:'Traditional accounts describe an early desire for renunciation and the pursuit of liberating knowledge. The crocodile episode provides the occasion for Aryamba’s consent. His commentary on Mundaka Upanishad 1.2.12 helps explain the deeper distinction between finite results produced by action and knowledge of Brahman.'},
    {question:'How old was he when he became a sannyasi?',answer:'Eight is the age most often given in popular traditional accounts. Biographies and institutional chronologies differ in some ages and milestones. The emergency resolve at the river should also be distinguished from subsequent formal initiation and study under Govinda Bhagavatpada.'},
    {question:'Who were his parents and his guru?',answer:'His parents are remembered as Shivaguru and Aryamba. His guru was Govinda Bhagavatpada; Gaudapada is remembered as his paramaguru, the teacher of his teacher.'},
    {question:'Did he return to perform his mother’s final rites?',answer:'Yes, in the traditional biography. He returns to Aryamba near the end of her life and performs her cremation despite resistance based on his status as a sannyasi. Details differ among tellings, but the fulfilment of his promise is central.'},
    {question:'Did Adi Shankaracharya establish four or five peethams?',answer:'The familiar four-direction account names Sringeri, Dwarka, Puri and Jyotir Math. Kanchi Kamakoti maintains its own foundation by Shankara and its own succession tradition. A careful explanation describes the four Amnaya seats and then explains Kanchi separately.'},
    {question:'Where did he attain mukti: Kedarnath or Kanchi?',answer:'Sringeri’s Madhaviya account places the final departure at Kedarnath; Kanchi’s tradition places his siddhi at Kanchipuram. They should be attributed rather than presented as one universally agreed account. Advaita also distinguishes liberation while living from the end of embodied life.'},
    {question:'Did he write every stotra attributed to Shankaracharya?',answer:'Authorship is not equally secure for every work bearing his name. The major commentaries and Upadesha Sahasri have a different evidentiary position from many traditionally attributed hymns and teaching texts. Devotional importance and historical authorship should both be respected as distinct questions.'},
    {question:'What continued after his mukti?',answer:'His disciples’ works, later Advaita commentaries, monastic successions, worship, teaching and pilgrimage continued his legacy. Later milestones include the Kalady shrines consecrated in 1910, printed collections of his works, and the Advaita Sharada digital library launched in 2014 and renewed in 2026.'}
  ],
  relatedLinks:[
    {label:'Gurus & Guru Bodha',href:'/guru'},
    {label:'What does a guru actually give?',href:'/articles/guru-bodha-what-does-a-guru-give'},
    {label:'Shiva: stories, devotion and sacred sound',href:'/deities/shiva'},
    {label:'Narasimha and the protecting presence',href:'/deities/narasimha'},
    {label:'Read the Vishnu Sahasranama',href:'/stotrams/vishnu-sahasranama'},
    {label:'The Bhagavad Gita within the Mahabharata',href:'/mahabharata'}
  ],
  sources:[
    {label:'Sringeri Sharada Peetham — biography and source tradition',href:source.biography,note:'Institutional introduction to the traditional life and the importance of reading Shankara’s works.'},
    {label:'Sringeri — abridged Madhaviya Shankara Digvijayam',href:source.life,note:'Divine descent, childhood, renunciation and Govinda Bhagavatpada. The article attributes miraculous episodes as traditional accounts.'},
    {label:'Sringeri — Shankara Digvijaya, Part 2',href:source.kashi,note:'Kashi, the commentaries, and the meeting with Vyasa.'},
    {label:'Sringeri — Shankara Digvijaya, Part 3',href:source.debates,note:'Mandana Mishra, Ubhaya Bharati, parakaya pravesha and the Kapalika episode.'},
    {label:'Sringeri — Shankara Digvijaya, Part 4',href:source.mother,note:'The traditional return to Aryamba, her final rites, and Padmapada’s lost manuscript.'},
    {label:'Sringeri — Shankara Digvijaya, Part 5',href:source.final,note:'Kashmir’s Sarvajna Peetham and the Kedarnath departure tradition.'},
    {label:'Professor P. Sankaranarayanan — The life and work of Sri Sankara, Kanchi publication',href:source.parents,note:'The parents’ prayer, dream, childhood and renunciation narrative. Its biographical framework is attributed.'},
    {label:'Kanchi Kamakoti — Sri Sankara Bhagavatpada and Sri Kanchi Kamakoti',href:source.kanchi,note:'Kanchi’s chronology, foundation, Kailasa and sphatika linga traditions, final siddhi, and current succession identification.'},
    {label:'Chinmaya International Foundation — The Life and Journey of Sri Adi Shankaracharya',href:source.chinmaya,note:'Apat-sannyasa and the distinct Melpazhur Mana birthplace tradition.'},
    {label:'Neil Dalal — Śaṅkara, Stanford Encyclopedia of Philosophy',href:source.stanford,note:'Academic dating proposals and distinctions concerning the authorship of works.'},
    {label:'Internet Encyclopedia of Philosophy — Advaita Vedanta',href:source.iep,note:'Mandana’s philosophical contribution and the later Bhamati and Vivarana traditions.'},
    {label:'Sringeri — Sri Sureshwaracharya',href:source.sureshwara,note:'Traditional identification, debate and early institutional role.'},
    {label:'Sringeri — Sri Padmapadacharya',href:source.padmapada,note:'Sanandana, the lotus-foot story and the Narasimha protection episode.'},
    {label:'Sringeri — Sri Hastamalakacharya',href:source.hastamalaka,note:'The disciple’s traditional life and the explanation of his name.'},
    {label:'Sringeri — Sri Totakacharya',href:source.totaka,note:'Giri, service to the guru and the Totaka works.'},
    {label:'Sringeri Sharada Peetham — institutional history',href:source.sringeri,note:'The cobra and frog, Sharada worship and the southern peetham.'},
    {label:'Sringeri — Works of Sri Adi Shankaracharya',href:source.works,note:'The traditional classification of works and shanmata. Traditional attribution is not treated as uniform scholarly agreement.'},
    {label:'Sringeri — The Amnaya Peethams',href:source.amnaya,note:'Institutional purpose and the four directions. Individual disciple assignments were cross-checked against other sources.'},
    {label:'Swami Sivananda — Sankara, Divine Life Society',href:source.dls,note:'Cross-check for the commonly used disciple–matha mapping and Dashanami names; its older present-day references are not used as current leadership evidence.'},
    {label:'Mundaka Upanishad Bhashya 1.2.12 — Advaita Sharada Sanskrit text',href:source.mundaka,note:'The limits of action, renunciation, and approaching the guru. Explanations are plain English paraphrases, not quoted translations.'},
    {label:'Brahma Sutra Bhashya — adhyasa introduction and 1.1.1–4',href:source.brahmasutra,note:'Misidentification, qualifications for inquiry, and knowledge rather than the production of a new reality.'},
    {label:'Brahma Sutra Bhashya — Chapter 4',href:source.liberation,note:'4.1.1 on sustained engagement with the teaching; 4.1.13–19 on knowledge and karma.'},
    {label:'Chandogya Upanishad Bhashya — Chapter 6',href:source.chandogya,note:'Names and forms, clay and its modifications, and Tat Tvam Asi.'},
    {label:'Aitareya Upanishad Bhashya — Chapter 3',href:source.aitareya,note:'Prajnanam Brahma in its Upanishadic setting.'},
    {label:'Brihadaranyaka Upanishad Bhashya — Chapter 1',href:source.brihadaranyaka,note:'Aham Brahmasmi, 1.4.10.'},
    {label:'Mandukya Upanishad and Karika Bhashya — Agama Prakarana',href:source.mandukya,note:'Ayam Atma Brahma, Mandukya Upanishad 2.'},
    {label:'Manisha Panchakam — Advaita Sharada Sanskrit text',href:source.manisha,note:'The consciousness teaching and recognition of a guru irrespective of the social categories named in the hymn.'},
    {label:'Dakshinamurti Stotram — Advaita Sharada Sanskrit text',href:source.dakshinamurti,note:'The traditionally attributed hymn joining contemplation with guru devotion.'},
    {label:'Advaita Sharada — primary texts and commentaries catalogue',href:source.catalog,note:'A reader-facing route to the bhashyas, Upanishads, disciples’ texts and later commentaries.'},
    {label:'Govardhana Peetham — institutional account',href:source.puriMath,note:'The four regional seats and associated Vedas. Biographical chronology is institution-specific.'},
    {label:'Govardhana Peetham — succession register',href:source.puriLineage,note:'Padmapada at the beginning of Puri’s own published succession list.'},
    {label:'Govardhana Peetham — Swami Nischalananda Saraswati',href:source.puri,note:'The peetham’s current leadership identification, checked 2 October 2026.'},
    {label:'Sringeri — Mahaganapati Vakyartha Vidwat Sabha, 2026',href:source.sringeriNow,note:'Contemporary institutional evidence for the senior acharya and Sannidhanam and for ongoing shastric learning.'},
    {label:'Kanchi — Vasantotsavam report, June 2026',href:source.kanchiNow,note:'A contemporary report naming both acharyas.'},
    {label:'Kanchi — Guruvara sadas, September 2026',href:source.kanchiSadas,note:'A recent example of continuing traditional teaching.'},
    {label:'Dwarka Sharada Peetham — official website',href:source.dwarka,note:'Institutional reference for the western peetham.'},
    {label:'Sringeri — Shankaracharya of Dwarka at Sringeri, May 2024',href:source.dwarkaVisit,note:'Institutional record identifying Sadananda Saraswati as the Dwarka acharya.'},
    {label:'Garuda — Swami Sadananda Saraswati author profile',href:source.dwarkaLeader,note:'Publisher’s public identification of the Dwarka acharya; checked in the indexed source on 2 October 2026.'},
    {label:'Swami Avimukteshwarananda Saraswati — official website',href:source.jyotir,note:'Public identification with Jyotirmath. The table records this identification rather than adjudicating succession claims.'},
    {label:'Badari Jyotirmath — alternative succession position',href:source.jyotirOther,note:'Consulted only to establish that competing institutional claims are published. This article does not adopt its allegations or offer a legal conclusion.'},
    {label:'Sringeri — Discovery and Establishment of Kalady',href:source.kalady,note:'The shrines’ consecration on 21 February 1910 and the remembrance of Aryamba.'},
    {label:'Advaita Sharada — history of manuscript, print and digital preservation',href:source.digital,note:'The Granthavali project, digital launch in 2014, later editions, and the 2026 renewal.'},
    {label:'Government of India, PIB — Kedarnath inauguration, 5 November 2021',href:source.kedarnath,note:'Contemporary record of the restored samadhi and statue, not proof resolving the ancient departure traditions.'}
  ]
};
