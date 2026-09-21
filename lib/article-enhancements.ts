export type ArticleFaq={question:string;answer:string};
export type ArticleEnhancement={
  quickAnswer:string;
  keyTakeaways:string[];
  faq:ArticleFaq[];
};

const articleEnhancements:Record<string,ArticleEnhancement>={
  'navratri-2026-nine-forms-of-durga':{
    quickAnswer:'Sharad Navratri 2026 begins on 11 October and culminates in Vijayadashami on 20 October. The nine nights honour the Goddess through many regional traditions, including Navadurga worship, Durga Puja, Garba, Golu, Ayudha Puja and Ramlila.',
    keyTakeaways:[
      'Sharad Navratri 2026 begins on 11 October; Vijayadashami falls on 20 October.',
      'The Navadurga names come from an older devotional-textual tradition; annual colour charts are later popular customs.',
      'Durga Puja, Garba, Golu, Mysuru Dasara, Ayudha Puja and Ramlila are regional expressions of the same sacred season.',
      'Vijayadashami can remember both Devi’s victory over Mahishasura and Sri Rama’s victory over Ravana.',
      'Exact puja timings depend on local tithi and sunrise calculations.'
    ],
    faq:[
      {question:'When does Navratri 2026 start and end?',answer:'Sharad Navratri 2026 begins on Sunday, 11 October. Vijayadashami, also called Dussehra in many regions, falls on Tuesday, 20 October. Because Hindu calendars follow lunar tithis and local sunrise, individual observances can span parts of two Gregorian dates.'},
      {question:'Who are the nine forms of Durga worshipped during Navratri?',answer:'The nine forms commonly called Navadurga are Shailaputri, Brahmacharini, Chandraghanta, Kushmanda, Skandamata, Katyayani, Kalaratri, Mahagauri and Siddhidatri.'},
      {question:'Is Durga Puja the same as Navratri?',answer:'They overlap in the same sacred season but are not identical in practice. Durga Puja is especially prominent in Bengal and concentrates ritual attention on the Goddess during the later days. Navratri also includes many other regional traditions such as Garba, Golu, Ayudha Puja and temple observances.'},
      {question:'Why is Vijayadashami connected with Sri Rama?',answer:'In many Dussehra and Ramlila traditions, Vijayadashami remembers Sri Rama’s victory over Ravana. Valmiki’s Ramayana narrates Ravana’s defeat in the Yuddha Kanda, while the public festival tradition developed strongly through later retellings and Ramlila performance.'},
      {question:'Are the nine Navratri colours mentioned in scripture?',answer:'The popular annual sequence of nine colours is a later regional custom rather than a universal scriptural command. The colours can still be meaningful as community practice, but they should be distinguished from the older textual tradition of the Navadurga names.'},
      {question:'Why can nine nights appear across ten calendar dates?',answer:'Hindu festival calendars follow lunar tithis and local sunrise rather than a midnight-to-midnight civil calendar. A tithi can begin or end during a Gregorian day, and one tithi may extend across two sunrises.'}
    ]
  },
  'karna-mahabharata-story-text-popular-retellings':{
    quickAnswer:'Karna is one of the Mahabharata’s most morally complex figures: abandoned at birth, raised outside the royal world, publicly recognised by Duryodhana, extraordinarily generous, fiercely loyal, and also responsible for serious acts of cruelty. The epic becomes weaker when he is reduced to either a perfect victim or a simple villain.',
    keyTakeaways:[
      'Karna is born to Kunti and Surya, but raised by Adhiratha and Radha.',
      'Duryodhana’s public recognition of Karna helps explain Karna’s lifelong loyalty to him.',
      'The famous Draupadi svayamvara rejection varies across manuscript traditions and should be treated carefully.',
      'Karna’s generosity and courage coexist with his role in Draupadi’s humiliation and Duryodhana’s hostility.',
      'His final tragedy is shaped by both fate and repeated personal choices.'
    ],
    faq:[
      {question:'Who were Karna’s real parents?',answer:'In the Mahabharata, Karna is born to Kunti after she invokes Surya before her marriage. He is then raised by Adhiratha and Radha. His biological origin matters to the plot, but the people who raise him remain central to his identity.'},
      {question:'Why was Karna so loyal to Duryodhana?',answer:'Duryodhana publicly recognises Karna when others question his status and makes him king of Anga. That act gives Karna dignity and standing at a moment of humiliation, creating a bond of gratitude and friendship that later becomes political loyalty.'},
      {question:'Did Draupadi reject Karna because he was a Suta?',answer:'That famous scene appears in several popular versions, but the manuscript history is complicated. The rejection passage is disputed and is treated differently in the Critical Edition. It is safer to say the tradition contains more than one textual form of this episode.'},
      {question:'Why did Karna give away his kavach and kundal?',answer:'Indra approaches Karna in disguise and asks for his natural armour and earrings. Karna gives them away despite knowing they protect his life. The scene is traditionally celebrated as an example of his generosity, but it also shows how strongly he is bound to his identity as someone who never refuses a worthy request.'},
      {question:'Was Karna good or bad?',answer:'The Mahabharata does not make that question easy. Karna is generous, brave and loyal, but he also supports grave wrongdoing and participates in Draupadi’s humiliation. His power as a character comes from holding those truths together rather than erasing one side.'},
      {question:'How does Karna die?',answer:'Karna dies during his final battle with Arjuna. The scene gathers together his rivalry with Arjuna, earlier curses, battlefield circumstances and Krishna’s argument that Karna cannot invoke dharma only when it benefits him.'}
    ]
  },
  'om-namah-shivaya-meaning-origin-panchakshara':{
    quickAnswer:'Om Namah Shivaya means, in plain language, “Salutations to Shiva” or “I bow to Shiva.” Its core five-syllable form, Namaḥ Śivāya, has a Vedic root in Sri Rudram, while many symbolic interpretations around the five syllables belong to later Shaiva traditions.',
    keyTakeaways:[
      'Namaḥ means salutation, reverence or bowing; Śivāya directs that reverence to Shiva.',
      'The Vedic root is the phrase Namaḥ Śivāya in Sri Rudram.',
      'Na, Ma, Śi, Vā and Ya form the famous Panchakshara, or five-syllable, mantra.',
      'Elemental mappings and other symbolic systems are later Shaiva interpretations, not literal word-by-word translations.',
      'Practices such as 108 repetitions depend on lineage and context; the mantra is not valid only at one fixed count.'
    ],
    faq:[
      {question:'What does Om Namah Shivaya mean?',answer:'The simplest translation is “Salutations to Shiva” or “I bow to Shiva.” Namaḥ expresses reverence or bowing, while Śivāya means “to Shiva.” The opening Om is the sacred syllable commonly placed before the five-syllable formula in later practice.'},
      {question:'Why is Om Namah Shivaya called the Panchakshara mantra?',answer:'Pañca means five and akṣara can mean syllable or sound-unit. The five syllables are Na, Ma, Śi, Vā and Ya. When Om is added, the commonly chanted form contains an additional sacred syllable, but the core formula is still called Panchakshara.'},
      {question:'Is Om Namah Shivaya found in the Vedas?',answer:'The core phrase Namaḥ Śivāya has a Vedic root in the Namakam section of Sri Rudram in the Taittiriya Samhita. The exact popular form with Om reflects later Shaiva transmission and practice.'},
      {question:'Do the five syllables represent the five elements?',answer:'That correspondence belongs to later Shaiva contemplative traditions. It is a real interpretive system, but it is not the literal grammatical meaning of the Sanskrit phrase Namaḥ Śivāya.'},
      {question:'Do I have to chant Om Namah Shivaya 108 times?',answer:'No universal rule makes the mantra valid only at 108 repetitions. A lineage may prescribe a count for a particular practice, while a devotee may repeat it fewer times or without counting. The purpose of counting is to support attention, not to turn japa into a score.'},
      {question:'How should Om Namah Shivaya be pronounced?',answer:'A useful Sanskrit form is Oṃ Namaḥ Śivāya. The ś is a soft “sh” sound, and the ā in Śivāya is long. Living traditions vary in connected pronunciation, so follow your lineage if you have one.'}
    ]
  },
  'guru-bodha-what-does-a-guru-give':{
    quickAnswer:'In classical Indian spiritual traditions, a guru is not merely a source of information. The teacher is approached for guidance that joins knowledge, inquiry, discipline and lived understanding. The student is expected to be humble, but not intellectually asleep.',
    keyTakeaways:[
      'Bhagavad Gita 4.34 places humility, inquiry and service together.',
      'The classical ideal of a teacher includes both grounding in the teaching and lived establishment in it.',
      'Reverence does not require switching off discernment.',
      'A guru can point, correct and illuminate, but cannot outsource the student’s own seeing.',
      'Guru Bodha is RudraNāda’s editorial name for reflections on this teacher-student relationship.'
    ],
    faq:[
      {question:'What is a guru?',answer:'A guru, in the classical spiritual sense, is a teacher sought not only for information but for guidance in understanding and practice. Different Indian traditions define the role differently, but the relationship usually involves learning, discipline, inquiry and transformation.'},
      {question:'Does a disciple have to obey a guru without question?',answer:'The Bhagavad Gita does not present the student as intellectually passive. In 4.34, Krishna joins humility with paripraśna, sustained inquiry, and service. Reverence and questioning can belong to the same relationship.'},
      {question:'What qualities should a spiritual teacher have?',answer:'The Mundaka Upanishad describes the ideal teacher with terms commonly understood as grounded in the teaching and established in Brahman. The emphasis is not simply on charisma or eloquence, but on depth of understanding and lived realisation.'},
      {question:'What does “Acharya Devo Bhava” mean?',answer:'The phrase is commonly translated as “regard the teacher as divine” or “let the teacher be to you as a deity.” It expresses deep reverence for the teacher, but it appears within a broader ethical teaching that also values blameless conduct and discernment.'},
      {question:'What does Guru Bodha mean on RudraNāda?',answer:'Guru Bodha is RudraNāda’s editorial series on teachers, students, inquiry, discipline and lived understanding. Bodha can carry senses of knowledge, understanding, awakening or instruction. It is our series title, not the name of a single canonical scripture.'}
    ]
  },
  'why-rudranaada-exists':{
    quickAnswer:'RudraNāda exists to bring devotional music, India’s epics and careful interpretation into the same place. A song can make a story emotionally present; the writing then helps the listener understand the text, tradition and meaning behind what they heard.',
    keyTakeaways:[
      'RudraNāda begins with original devotional and epic music.',
      'The website gives listeners the story, context and textual references behind the music.',
      'Scripture, later tradition and RudraNāda’s artistic interpretation are kept distinct.',
      'The goal is not more religious trivia, but deeper remembrance and understanding.'
    ],
    faq:[
      {question:'What is RudraNāda?',answer:'RudraNāda is a devotional music and editorial project focused on Indian epics, deities, mantras, sacred stories and spiritual reflection. It combines original music with long-form writing and source-aware interpretation.'},
      {question:'Is RudraNāda only a music channel?',answer:'No. Music is the doorway, but RudraNāda also publishes stories, character studies, mantra guides, festival explainers, Guru Bodha reflections and research-led articles on the Mahabharata, Ramayana and devotional traditions.'},
      {question:'How does RudraNāda handle scripture and retellings?',answer:'We try to distinguish what a text explicitly says from later tradition, regional retellings, popular belief and RudraNāda’s own artistic interpretation. When a detail belongs to a later layer, we say so.'},
      {question:'Why combine music and long-form writing?',answer:'Music can make a story emotionally immediate, while writing can slow the reader down enough to understand context, sources and differences between traditions. The two formats serve different parts of the same encounter.'},
      {question:'Who writes RudraNāda articles?',answer:'Long-form RudraNāda articles are published under Pratap Sharma, founder and editor of RudraNāda.'}
    ]
  }
};

export const getArticleEnhancement=(slug:string)=>articleEnhancements[slug];
