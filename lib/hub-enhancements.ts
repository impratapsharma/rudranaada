import type {FaqItem} from '@/components/FaqSection';

export type HubEnhancement={
  quickAnswer:string;
  keyTakeaways:string[];
  faq:FaqItem[];
};

export const hubEnhancements:Record<string,HubEnhancement>={
  mahabharata:{
    quickAnswer:'The Mahabharata is a vast Sanskrit epic centred on the conflict between the Pandavas and Kauravas, but its real subject is dharma under pressure. It contains the Bhagavad Gita and repeatedly asks what righteous action looks like when every available choice carries a cost.',
    keyTakeaways:[
      'The central war is between the Pandavas and Kauravas at Kurukshetra.',
      'The Bhagavad Gita appears within the Mahabharata as Krishna’s teaching to Arjuna before battle.',
      'The epic survives in many manuscript and regional traditions, so not every familiar episode appears identically in every edition.',
      'Its major characters are morally complex rather than cleanly divided into heroes and villains.',
      'RudraNāda approaches the epic through characters, songs and source-aware story guides.'
    ],
    faq:[
      {question:'What is the Mahabharata about?',answer:'At the surface, the Mahabharata tells the struggle between the Pandavas and Kauravas for the Kuru kingdom, culminating in the Kurukshetra war. At a deeper level it explores dharma, kinship, vows, power, loyalty, grief and the consequences of action.'},
      {question:'Who wrote the Mahabharata?',answer:'Indian tradition attributes the Mahabharata to Vyasa, who is also a character within the epic. The text itself developed over a long period and survives in many manuscript traditions, so modern scholarship distinguishes traditional authorship from the complex history of textual transmission.'},
      {question:'Where is the Bhagavad Gita in the Mahabharata?',answer:'The Bhagavad Gita appears in the Bhishma Parva, before the main fighting begins. Arjuna loses the will to fight after seeing relatives, teachers and friends across the battlefield, and Krishna responds with the teaching known as the Gita.'},
      {question:'Are all Mahabharata versions the same?',answer:'No. The Mahabharata survives in numerous manuscripts and regional traditions. The Bhandarkar Oriental Research Institute Critical Edition compares manuscript evidence to reconstruct an earlier textual form, while popular translations may preserve passages not retained in the Critical Edition.'},
      {question:'Is Karna a hero or a villain?',answer:'The epic resists that simple division. Karna is courageous, generous and deeply loyal, but he also supports serious wrongdoing and participates in Draupadi’s humiliation. His power as a character comes from holding those virtues and failures together.'},
      {question:'What does dharma mean in the Mahabharata?',answer:'Dharma can mean duty, moral order, right conduct and the responsibilities created by one’s role and relationships. The Mahabharata is compelling because those duties often collide, making the right action difficult to identify in advance.'}
    ]
  },
  ramayana:{
    quickAnswer:'The Ramayana is the story of Rama’s exile, Sita’s abduction, the search for her, the war in Lanka and the return to Ayodhya. It is also a meditation on duty, kingship, loyalty, love and the cost of living by an ideal.',
    keyTakeaways:[
      'Valmiki’s Sanskrit Ramayana is a foundational version of the story.',
      'Later works such as Tulsidas’s Ramcharitmanas and Kamban’s Tamil Ramavataram shape how millions encounter Rama today.',
      'Rama, Sita, Hanuman, Lakshmana, Bharata and Ravana each carry different moral and devotional questions.',
      'Regional Ramayana traditions often differ in detail without belonging to one single uniform version.',
      'RudraNāda labels those layers instead of merging them into one voice.'
    ],
    faq:[
      {question:'Who wrote the Ramayana?',answer:'Indian tradition attributes the Sanskrit Ramayana to the sage Valmiki. It is the foundational Sanskrit epic, but it is not the only Ramayana tradition. Many later retellings developed in Sanskrit and regional languages.'},
      {question:'What is the main story of the Ramayana?',answer:'Rama is exiled from Ayodhya with Sita and Lakshmana. Ravana abducts Sita and takes her to Lanka. Rama forms an alliance that includes Hanuman and the vanara forces, defeats Ravana, rescues Sita and eventually returns to Ayodhya.'},
      {question:'What is the difference between the Valmiki Ramayana and Ramcharitmanas?',answer:'The Valmiki Ramayana is the foundational Sanskrit epic. Tulsidas’s Ramcharitmanas is a much later devotional retelling in Awadhi. They share the broad story but differ in language, theology, emphasis and many narrative details.'},
      {question:'Why is Hanuman so important in the Ramayana?',answer:'Hanuman combines extraordinary strength with service, intelligence and devotion. He becomes Rama’s messenger, finds Sita in Lanka and repeatedly acts without making himself the centre of the story, which is why he became an enduring ideal of bhakti and seva.'},
      {question:'Is Vijayadashami connected with Rama?',answer:'Yes, in many Dussehra and Ramlila traditions Vijayadashami remembers Rama’s victory over Ravana. Valmiki’s Ramayana narrates Ravana’s defeat in the Yuddha Kanda, while the festival association is especially strong in later public performance and regional traditions.'}
    ]
  },
  mantras:{
    quickAnswer:'A mantra is a sacred utterance or formula used in recitation, contemplation or ritual. It should not be confused with every Sanskrit hymn or devotional phrase: stotra, nāma-japa and mahāvākya describe different forms of sacred language and practice.',
    keyTakeaways:[
      'Mantra, stotra, nāma-japa and mahāvākya are related but distinct categories.',
      'Pronunciation matters, but living traditions may differ in how sounds are connected in practice.',
      'Counts such as 108 can support discipline but are not a universal rule for every mantra.',
      'A mantra’s grammatical meaning and its later symbolic interpretations should be kept distinct.',
      'Practice instructions can depend on lineage, context and initiation.'
    ],
    faq:[
      {question:'What is a mantra?',answer:'A mantra is a sacred utterance, formula or sound used in recitation, meditation or ritual. Some mantras have clear grammatical meanings, while others are valued for sound, ritual function and transmission as well as meaning.'},
      {question:'What is the difference between a mantra and a stotra?',answer:'A mantra is usually a compact sacred formula or utterance. A stotra is a hymn of praise, often poetic and substantially longer. Kalabhairava Ashtakam, for example, is a stotra rather than a short mantra.'},
      {question:'What is nāma-japa?',answer:'Nāma-japa is the repeated remembrance or recitation of a divine name, such as Rama or Krishna. The emphasis is on repetition of the name itself rather than on a longer hymn or philosophical statement.'},
      {question:'Why are mantras sometimes repeated 108 times?',answer:'108 is a traditional sacred count used in many japa practices and malas, but it is not a universal requirement for every mantra. A teacher or lineage may prescribe a particular count for a specific practice.'},
      {question:'Do I need initiation to chant a mantra?',answer:'It depends on the mantra and tradition. Many widely used devotional names and public mantras are recited freely, while some tantric or lineage-specific mantras are traditionally transmitted through initiation. Follow the requirements of the tradition you are practising within.'},
      {question:'Does the meaning of a mantra matter?',answer:'Meaning can matter deeply, especially for mantras with clear Sanskrit grammar. At the same time, traditional practice may also emphasize sound, repetition, attention and transmission. It is useful to distinguish literal meaning from later symbolic associations.'}
    ]
  },
  festivals:{
    quickAnswer:'Hindu festivals are not a single uniform calendar of identical customs. Their dates follow lunar or lunisolar calculations, while their stories and practices can change across regions, temples, languages and family traditions.',
    keyTakeaways:[
      'Festival dates can shift each year because they follow tithis rather than the Gregorian calendar alone.',
      'The same festival may carry different stories or ritual emphases in different regions.',
      'Navratri can include Navadurga worship, Durga Puja, Garba, Golu, Ayudha Puja and Ramlila.',
      'Regional variation is part of the tradition, not necessarily a contradiction.',
      'Exact puja timings should be checked against a reliable local panchang.'
    ],
    faq:[
      {question:'Why do Hindu festival dates change every year?',answer:'Many Hindu festivals are calculated using lunar tithis, solar movement and local sunrise rather than fixed Gregorian dates. Because those astronomical cycles do not line up perfectly with the civil calendar, festival dates shift from year to year.'},
      {question:'Why is the same Hindu festival celebrated differently across India?',answer:'Regional languages, temple traditions, local histories, devotional lineages and family customs all shape festival practice. One sacred season can therefore carry several legitimate ritual and narrative traditions.'},
      {question:'Is Navratri the same as Durga Puja?',answer:'They overlap in the same sacred season but are not identical in practice. Durga Puja is especially prominent in Bengal and focuses intensely on the Goddess during the later days, while Navratri includes many other regional forms of worship.'},
      {question:'What is the difference between Dussehra and Vijayadashami?',answer:'The terms often refer to the same tenth-day festival, but regional emphasis differs. Some traditions foreground Rama’s victory over Ravana, others Devi’s victory over Mahishasura, and others connect the day with learning, weapons, tools or royal ceremony.'},
      {question:'Why can a festival span two calendar dates?',answer:'A tithi can begin or end at any time during a Gregorian day and may cross sunrise. Ritual calendars often use the tithi present at sunrise or another rule specific to the observance, so one festival period can overlap two civil dates.'}
    ]
  },
  guru:{
    quickAnswer:'Guru Bodha is RudraNāda’s space for the teacher-student relationship: humility without passivity, inquiry without arrogance, and practice that turns borrowed knowledge into lived understanding.',
    keyTakeaways:[
      'Bhagavad Gita 4.34 places humility, inquiry and service together.',
      'The guru ideal is about more than charisma or information.',
      'Reverence and discernment can coexist.',
      'A student still has to practise and understand for themselves.',
      'Guru Bodha is RudraNāda’s editorial series name, not a canonical scripture.'
    ],
    faq:[
      {question:'What is a guru?',answer:'A guru is a spiritual teacher or guide. Different Indian traditions define the role differently, but the classical ideal usually involves teaching, practice, inquiry and a relationship aimed at understanding rather than mere information transfer.'},
      {question:'What is the difference between a guru and an ordinary teacher?',answer:'An ordinary teacher may transmit knowledge or skill. A guru, in the spiritual sense, is sought for guidance that joins teaching with practice and transformation. The distinction varies by tradition and should not be reduced to a title.'},
      {question:'Does a disciple have to obey a guru without question?',answer:'No single Indian tradition can be reduced to one rule, and the Bhagavad Gita itself combines humility with paripraśna, sustained inquiry. Reverence does not require intellectual passivity.'},
      {question:'What qualities should a guru have?',answer:'The Mundaka Upanishad describes an ideal teacher as grounded in the teaching and established in Brahman. Traditional criteria vary, but depth, ethical conduct and lived understanding matter more than personality or spectacle.'},
      {question:'What does Guru Bodha mean?',answer:'Bodha can carry meanings such as knowledge, understanding, awakening or instruction. Guru Bodha is RudraNāda’s editorial name for reflections on teachers, students, practice and the movement from hearing a teaching to understanding it.'}
    ]
  },
  'deity-krishna':{
    quickAnswer:'Krishna appears across Indian tradition as child, friend, lover, statesman, charioteer, teacher and the divine itself. In the Bhagavad Gita he becomes Arjuna’s guide at the moment when moral certainty collapses.',
    keyTakeaways:['Krishna is central to the Mahabharata and Bhagavad Gita.','Different traditions emphasize different moods of Krishna devotion.','The Gita presents him as teacher, charioteer and divine revelation.','RudraNāda explores Krishna through both epic and meditative music.'],
    faq:[
      {question:'Who is Krishna?',answer:'Krishna is a major deity in Hindu traditions and is especially associated with Vaishnavism. He appears prominently in the Mahabharata, Bhagavad Gita and Bhagavata Purana, among many other texts and devotional traditions.'},
      {question:'What is Krishna’s role in the Bhagavad Gita?',answer:'Krishna serves as Arjuna’s charioteer and teacher. When Arjuna loses the will to fight, Krishna teaches him about the self, action, knowledge, devotion, yoga and the nature of the divine.'},
      {question:'Why is Krishna called Govinda and Gopala?',answer:'Krishna has many names associated with different stories and devotional moods. Govinda and Gopala are especially connected with Krishna as protector of cows and the pastoral world of Vrindavan.'},
      {question:'Is Krishna the same in the Mahabharata and Bhagavata Purana?',answer:'The same divine figure appears in both, but the texts emphasize different dimensions. The Mahabharata strongly foregrounds Krishna as statesman, ally and teacher, while the Bhagavata Purana gives much more space to childhood and devotional narratives.'}
    ]
  },
  'deity-shiva':{
    quickAnswer:'Shiva is worshipped as ascetic, householder, yogi, dancer, destroyer, teacher and the still consciousness beyond change. Shaiva traditions often hold these apparently opposite forms together rather than choosing only one.',
    keyTakeaways:['Shiva combines ascetic and household life.','Bhairava represents a fierce dimension of Shiva.','Om Namah Shivaya is one of the best-known Shaiva mantras.','Shiva symbolism often centres on impermanence, discipline and transformation.'],
    faq:[
      {question:'Who is Shiva?',answer:'Shiva is one of the major deities of Hindu traditions and the central deity of Shaivism. He is worshipped in many forms, including yogi, householder, Nataraja, Dakshinamurti and Bhairava.'},
      {question:'What does Om Namah Shivaya mean?',answer:'The simplest meaning is “Salutations to Shiva” or “I bow to Shiva.” The core phrase Namaḥ Śivāya has a Vedic root in Sri Rudram and later becomes central to Shaiva mantra practice.'},
      {question:'Who is Bhairava?',answer:'Bhairava is a fierce form associated with Shiva and with themes of time, fear, protection, transgression and sacred boundaries. Different Shaiva and tantric traditions interpret Bhairava in different ways.'},
      {question:'Why is Shiva shown with ash?',answer:'Ash is commonly associated with impermanence, renunciation and the cremation ground. The symbolism reminds devotees that forms pass away and that spiritual life includes confronting mortality rather than hiding it.'}
    ]
  },
  'deity-devi':{
    quickAnswer:'Devi means Goddess and can refer to the divine feminine in many forms, including Durga, Kali, Lakshmi, Saraswati and Parvati. In Shakta traditions, the Goddess is worshipped as Shakti, divine power itself.',
    keyTakeaways:['Devi is not one single mood or icon.','Durga and Kali are fierce forms associated with protection and transformation.','Shakti refers to divine power or energy.','Navratri is one of the major festival seasons centred on the Goddess.'],
    faq:[
      {question:'What does Devi mean?',answer:'Devi simply means “Goddess.” It can refer to a specific goddess or to the divine feminine more broadly, depending on the text and tradition.'},
      {question:'Is Durga the same as Kali?',answer:'They are distinct forms with different iconography and narratives, but many Shakta traditions understand them as manifestations of the same supreme Goddess or Shakti.'},
      {question:'What is Shakti?',answer:'Shakti means power, capacity or energy. In Shakta theology it can refer to the divine power through which the cosmos manifests and acts, and ultimately to the Goddess herself.'},
      {question:'Why are some forms of Devi fierce?',answer:'Fierce forms such as Kali and Durga express protection, destruction of harmful forces, confrontation with fear and transformation. Their imagery is not reducible to anger alone.'}
    ]
  },
  'deity-hanuman':{
    quickAnswer:'Hanuman is the great devotee of Rama, remembered for strength, intelligence, courage and service. His importance comes not only from what he can do, but from the fact that his power is consistently offered to something larger than himself.',
    keyTakeaways:['Hanuman is central to the Ramayana tradition.','His strength is inseparable from seva and bhakti.','He finds Sita in Lanka and becomes Rama’s messenger.','Rama’s name is central to Hanuman devotion.'],
    faq:[
      {question:'Who is Hanuman?',answer:'Hanuman is a central figure in the Ramayana and one of the most widely worshipped deities in Hindu traditions. He is known for devotion to Rama, extraordinary strength, intelligence and selfless service.'},
      {question:'Why is Hanuman so devoted to Rama?',answer:'The Ramayana tradition presents Hanuman’s relationship with Rama as an ideal of bhakti and seva. His identity becomes centred on serving Rama’s purpose rather than displaying power for himself.'},
      {question:'What is Hanuman’s most important role in the Ramayana?',answer:'Among his many roles, Hanuman crosses the ocean to Lanka, finds Sita, gives her Rama’s message and returns with crucial information. That mission makes him the bridge between separation and reunion.'},
      {question:'Why do devotees chant Rama’s name in Hanuman worship?',answer:'Hanuman devotion is deeply connected with Rama because Hanuman is remembered as Rama’s servant and devotee. Repeating Rama’s name therefore naturally becomes part of many Hanuman bhakti traditions.'}
    ]
  },
  'deity-narasimha':{
    quickAnswer:'Narasimha is the man-lion form of Vishnu who appears to protect Prahlada and destroy Hiranyakashipu. The story turns the tyrant’s elaborate conditions against him and makes protection, devotion and divine unpredictability central themes.',
    keyTakeaways:['Narasimha is a form of Vishnu.','Prahlada is the devotional centre of the story.','The form bypasses Hiranyakashipu’s protections by refusing neat categories.','Narasimha combines terrifying power with protection of the devotee.'],
    faq:[
      {question:'Who is Narasimha?',answer:'Narasimha is the man-lion form of Vishnu, best known from the story of Prahlada and Hiranyakashipu. He appears in a form that is neither fully human nor animal in order to overcome conditions meant to make the tyrant invulnerable.'},
      {question:'Who is Prahlada?',answer:'Prahlada is the son of Hiranyakashipu and a devoted worshipper of Vishnu. His refusal to abandon devotion despite persecution makes him the spiritual centre of the Narasimha story.'},
      {question:'Why does Narasimha appear as half-man and half-lion?',answer:'Hiranyakashipu’s boon protects him from being killed by a man or animal and under several other conditions. Narasimha appears in a form that falls outside those categories, showing that the divine cannot be contained by a clever legal formula.'},
      {question:'Why is Narasimha so fierce?',answer:'The fierceness is directed toward the destruction of oppressive power and the protection of Prahlada. Devotional traditions therefore hold terror and refuge together in the same form.'}
    ]
  },
  'deity-parashurama':{
    quickAnswer:'Parashurama is a warrior-sage and avatar of Vishnu whose stories bring tapas, vengeance, justice and the misuse of power into the same frame. He is one of the traditions’ deliberately difficult figures.',
    keyTakeaways:['Parashurama is traditionally counted among Vishnu’s avatars.','He is both Brahmin and warrior, complicating simple social categories.','His stories repeatedly ask when punishment becomes excess.','Later epic traditions also remember him as a teacher of warriors.'],
    faq:[
      {question:'Who is Parashurama?',answer:'Parashurama is a warrior-sage traditionally regarded as an avatar of Vishnu. He is associated with the axe, intense tapas and stories of violent conflict with Kshatriya rulers.'},
      {question:'Why is Parashurama considered controversial?',answer:'His narratives involve vengeance, large-scale violence and repeated punishment of rulers. That makes him difficult to reduce to a simple heroic model and raises questions about justice, anger and excess.'},
      {question:'Why is Parashurama both Brahmin and warrior?',answer:'Traditional accounts identify him with a Brahmin lineage while also presenting him as an extraordinary warrior. The combination is one reason his character resists simple social or moral classification.'},
      {question:'Does Parashurama appear in the Mahabharata?',answer:'Yes. Later epic tradition remembers Parashurama as a formidable teacher associated with warriors including Bhishma and Karna, though the details belong to specific narrative contexts within the Mahabharata tradition.'}
    ]
  }
  about:{
    quickAnswer:'RudraNāda is a devotional music and editorial project that brings original music, Indian epics, sacred stories, mantras and reflective writing into the same space. Music opens the door; careful reading helps the listener understand what the story, text or tradition actually says.',
    keyTakeaways:[
      'RudraNāda creates original devotional and epic music.',
      'The site connects songs with stories, meanings, texts and traditions.',
      'Scripture, later retellings and RudraNāda artistic interpretation are kept distinct.',
      'Pratap Sharma is the founder and editor behind the long-form writing.',
      'The aim is deeper remembrance and understanding, not religious trivia.'
    ],
    faq:[
      {question:'What is RudraNāda?',answer:'RudraNāda is a devotional music and editorial project focused on Indian epics, deities, mantras, sacred stories and spiritual reflection. It combines original music with long-form, source-aware writing.'},
      {question:'Is RudraNāda only a YouTube music channel?',answer:'No. Music is the starting point, but RudraNāda also publishes Mahabharata and Ramayana stories, deity guides, mantra explainers, festival research and Guru Bodha reflections.'},
      {question:'Who writes RudraNāda articles?',answer:'RudraNāda long-form articles are published under Pratap Sharma, founder and editor of the project.'},
      {question:'How does RudraNāda handle scripture and later retellings?',answer:'The editorial approach is to distinguish what primary texts say from later tradition, regional retellings, popular belief and RudraNāda’s own artistic interpretation instead of merging them into a single version.'},
      {question:'Why combine devotional music with research?',answer:'Music can make a story emotionally immediate. Research and writing can then slow the reader down enough to understand context, language, textual differences and the meaning behind the song.'}
    ]
  }
};

export const getHubEnhancement=(key:string)=>hubEnhancements[key];
