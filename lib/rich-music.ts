export type LyricSection = { label: string; lines: string[] };
export type MeaningSection = { heading: string; text: string };
export type ScriptureReference = { verse: string; title: string; note: string; url: string };
export type FaqItem = { question: string; answer: string };

export type RichMusicContent = {
  slug: string;
  displayTitle: string;
  seoTitle: string;
  metaDescription: string;
  dek: string;
  editorialNote: string;
  lyrics: LyricSection[];
  meanings: MeaningSection[];
  context: string[];
  references: ScriptureReference[];
  faq: FaqItem[];
};

const uthParth: RichMusicContent = {
  slug: 'uth-parth',
  displayTitle: 'Uth Parth',
  seoTitle: 'Uth Parth: Lyrics, Meaning & Bhagavad Gita Context',
  metaDescription: 'Watch Uth Parth by RudraNāda and explore the lyrics, English meaning, Kurukshetra story context, Vishwaroopa imagery and Bhagavad Gita references behind the song.',
  dek: 'Krishna’s call to Arjuna on Kurukshetra, told through battlefield imagery, devotion and themes drawn from the Bhagavad Gita.',
  editorialNote: 'Uth Parth is a creative devotional retelling, not a line-by-line translation of the Bhagavad Gita. The lyric imagery is RudraNāda’s artistic interpretation. Scripture references below show the passages that inspired particular ideas.',
  lyrics: [
    {
      label: 'Intro',
      lines: [
        'Kurukshetra ro raha tha…',
        'Dharti kaanp rahi thi…',
        'Aur us yudh ke madhya mein…',
        'Ek saarathi muskura raha tha…',
      ],
    },
    {
      label: 'Verse 1',
      lines: [
        'Rath ke pahiye thahar gaye',
        'Teer zameen ko chhoo gaye',
        'Arjun ki aankhon mein andhera',
        'Apne bhi lagne lage paraaye',
        'Haath kaanpe, hriday toota',
        'Veerata bhi dar gayi',
        'Tab Madhav ne dheere se kaha',
        '“Tu sharir nahi, tu aatma hai Parth…”',
      ],
    },
    {
      label: 'Pre-Chorus',
      lines: [
        'Jab dharam andhere mein kho jaaye',
        'Jab mann bhay se ghir jaaye',
        'Tab bansuri waala aata hai',
        'Muskura ke sach dikhaata hai…',
      ],
    },
    {
      label: 'Chorus',
      lines: [
        'Govind bolo! Hari Gopal bolo!',
        'Ran mein khada hai Kanhaiya',
        'Chakra ghoomta, kaal bhi jhukta',
        'Geeta ki jyoti jagati re',
        'Na tu marta, na tu maarega',
        'Atma amar, sadaa re…',
        'Govind bolo! Hari Gopal bolo!',
      ],
    },
    {
      label: 'Verse 2',
      lines: [
        'Karm kar, phal ki chinta chhod de',
        'Agni mein jala de saari vyatha',
        'Jo aaya hai, woh jaayega',
        'Saty hi shesh rahega',
        'Suraj bhi ruk gaya sunne ko',
        'Devta jhuk gaye charnon mein',
        'Ek saarathi ke mukh se nikla',
        'Brahmand ka sabse gehra raaz…',
      ],
    },
    {
      label: 'Bridge',
      lines: [
        'Vishwaroop jab aankhon mein chhaya',
        'Arjun ka rom-rom kaanp utha',
        'Sau soorya ek saath chamke',
        'Kaal swayam charnon mein aaya',
        'Krishna bole, awaaz ghan ghor:',
        '“Uth Parth! Yudh abhi baaki hai…',
        'Moh ko chhod, dharm ko sambhaal…”',
      ],
    },
    {
      label: 'Final Chorus',
      lines: [
        'Govind bolo! Hari Gopal bolo!',
        'Shankh baaje Kurukshetra mein',
        'Darr ko jala, moh ko mita',
        'Naam le Vasudev ka re',
        'Hare Krishna Hare Krishna',
        'Krishna Krishna Hare Hare',
        'Geeta ka gyaan amar rahega',
        'Dharti se aakash tak…',
      ],
    },
    {
      label: 'Outro',
      lines: [
        'Yada yada hi dharmasya…',
        'Glānir bhavati bhārata…',
        'Abhyutthānam adharmasya…',
        'Hare Krishna… Hare Krishna…',
      ],
    },
  ],
  meanings: [
    {
      heading: 'The battlefield is also an inner crisis',
      text: 'The opening does not begin with victory. It begins with paralysis. Arjuna sees people he loves and reveres across the battlefield, and his certainty collapses. The song turns that hesitation into a dramatic stillness before Krishna begins to speak.',
    },
    {
      heading: 'You are not reduced to the body',
      text: '“Tu sharir nahi, tu aatma hai Parth” condenses one of the Gita’s central early teachings: the self is not destroyed when the body is destroyed. The chorus develops that idea with “Na tu marta, na tu maarega.”',
    },
    {
      heading: 'Act without being consumed by the result',
      text: '“Karm kar, phal ki chinta chhod de” points toward karma-yoga. The song is not saying consequences are irrelevant. It dramatizes Krishna’s demand that Arjuna act according to duty without making possession of the result the basis of action.',
    },
    {
      heading: 'Vishwaroopa changes the scale of the story',
      text: 'The bridge moves from one warrior’s fear to a cosmic vision. The image of many suns and the appearance of Time are drawn from Chapter 11, where Arjuna sees Krishna’s universal form and confronts a reality much larger than his individual viewpoint.',
    },
    {
      heading: '“Uth Parth” is the pivot',
      text: 'The title means, in spirit, “Rise, Parth.” It captures the movement from collapse to action. The Gita itself addresses Arjuna as Pārtha and tells him to arise after abandoning weakness of heart.',
    },
  ],
  context: [
    'At the beginning of the Bhagavad Gita, the armies are already assembled at Kurukshetra. Arjuna asks Krishna to place the chariot between them. When he sees relatives, elders, teachers and friends on both sides, grief overwhelms him. His body trembles, his mind reels and the Gandiva bow slips from his hand.',
    'That is the dramatic point from which Uth Parth begins. The song compresses a long philosophical dialogue into a cinematic arc: despair, Krishna’s teaching on the self, action without attachment, the universal form, and finally the command to rise.',
    'The song should therefore be heard as an interpretation inspired by the Gita, not as a substitute for the text. Some lyric lines closely echo particular verses; others combine themes from several chapters or use new poetic imagery.',
  ],
  references: [
    {
      verse: 'Bhagavad Gita 1.28–1.30',
      title: 'Arjuna’s collapse before the battle',
      note: 'Arjuna sees his own kinsmen arrayed for battle, becomes physically overwhelmed and says the Gandiva is slipping from his hand. This is the textual background for the song’s opening stillness.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&etsiva=1&field_chapter_value=1&field_nsutra_value=30&language=dv',
    },
    {
      verse: 'Bhagavad Gita 2.3',
      title: '“Arise, O Partha”',
      note: 'Krishna addresses Arjuna as Pārtha and tells him to cast off weakness of heart and arise. “Uth Parth” is RudraNāda’s compact Hindi dramatic rendering of that turning point.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&field_chapter_value=2&field_nsutra_value=3&language=dv',
    },
    {
      verse: 'Bhagavad Gita 2.19',
      title: 'The self neither slays nor is slain',
      note: 'The chorus line “Na tu marta, na tu maarega” is a lyrical paraphrase of this teaching, not a literal translation of the Sanskrit verse.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?etadi=1&etsiva=1&field_chapter_value=2&field_nsutra_value=19&language=dv',
    },
    {
      verse: 'Bhagavad Gita 2.47',
      title: 'Action without attachment to its fruits',
      note: 'This is the clearest textual anchor for “Karm kar, phal ki chinta chhod de.” The verse emphasizes action, non-attachment to results and avoiding attachment to inaction.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&etsiva=1&field_chapter_value=2&field_nsutra_value=47&language=dv',
    },
    {
      verse: 'Bhagavad Gita 4.7',
      title: 'When dharma declines',
      note: 'The outro invokes the opening of this verse: “Yadā yadā hi dharmasya…” It is intentionally a partial invocation rather than a presentation of the full shloka.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?etgb=1&field_chapter_value=4&field_nsutra_value=7&language=dv&setgb=1',
    },
    {
      verse: 'Bhagavad Gita 11.12',
      title: 'The radiance of a thousand suns',
      note: 'The bridge’s “Sau soorya ek saath chamke” directly draws on the Gita’s image of a thousand suns blazing simultaneously as a comparison for the radiance of the universal form.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&etsiva=1&etssa=1&field_chapter_value=11&field_nsutra_value=12&language=dv',
    },
    {
      verse: 'Bhagavad Gita 11.32',
      title: 'Krishna as Time',
      note: 'The song’s imagery of kāla connects to Krishna’s declaration in the universal-form chapter that he is Time, already engaged in the destruction of the assembled warriors.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&etsiva=1&etssa=1&field_chapter_value=11&field_nsutra_value=32&language=dv&setgb=1',
    },
    {
      verse: 'Bhagavad Gita 18.73',
      title: 'Arjuna is ready to act',
      note: 'Near the end of the Gita, Arjuna says his delusion is destroyed, his doubt is gone and he will act. That resolution is the larger arc behind the song’s final rise.',
      url: 'https://www.gitasupersite.iitk.ac.in/srimad?choose=1&etgb=1&etsiva=1&field_chapter_value=18&field_nsutra_value=73&language=dv',
    },
  ],
  faq: [
    {
      question: 'What does “Uth Parth” mean?',
      answer: '“Uth” means “rise” or “get up,” while Pārtha is a name used for Arjuna. In the song, “Uth Parth” is Krishna’s dramatic call for Arjuna to move from paralysis toward action.',
    },
    {
      question: 'Why did Arjuna hesitate to fight at Kurukshetra?',
      answer: 'Arjuna saw relatives, teachers, elders and friends on the opposing side and was overcome by grief, compassion and moral confusion. The first chapter of the Bhagavad Gita describes his physical and emotional collapse before Krishna begins his teaching.',
    },
    {
      question: 'Is “Na tu marta, na tu maarega” an exact Bhagavad Gita verse?',
      answer: 'No. It is RudraNāda’s Hindi lyrical paraphrase. Its closest direct textual anchor is Bhagavad Gita 2.19, which teaches that the self neither slays nor is slain.',
    },
    {
      question: 'Which Bhagavad Gita verse inspired “Karm kar, phal ki chinta chhod de”?',
      answer: 'The strongest connection is Bhagavad Gita 2.47, which teaches action without attachment to the fruits of action and warns against attachment to inaction.',
    },
    {
      question: 'What is Vishwaroopa in Uth Parth?',
      answer: 'Vishwaroopa is Krishna’s universal form in Chapter 11 of the Bhagavad Gita. Arjuna is granted divine sight and sees an overwhelming cosmic form containing the worlds, divine beings and the warriors moving toward destruction.',
    },
    {
      question: 'Is Uth Parth a translation of the Bhagavad Gita?',
      answer: 'No. It is an original RudraNāda composition inspired by the setting and teachings of the Gita. The page identifies specific verses behind its imagery so listeners can distinguish the scripture from the song’s artistic interpretation.',
    },
  ],
};

const richMusic: Record<string, RichMusicContent> = {
  [uthParth.slug]: uthParth,
};

export const getRichMusic = (slug: string) => richMusic[slug];
