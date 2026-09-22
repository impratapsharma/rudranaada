export type LyricSection = { label: string; lines: string[]; transliteration?: string[] };
export type MeaningSection = { heading: string; text: string };
export type ScriptureReference = { verse: string; title: string; note: string; url?: string; source?: string };
export type FaqItem = { question: string; answer: string };

export type RichMusicContent = {
  slug: string;
  displayTitle: string;
  seoTitle: string;
  metaDescription: string;
  dek: string;
  editorialNote: string;
  quickAnswer: string;
  keyTakeaways: string[];
  contextHeading: string;
  lyricsIntro: string;
  meaningsHeading: string;
  referencesHeading: string;
  referencesIntro: string;
  sourceNote: string;
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
  quickAnswer: 'Uth Parth is RudraNāda’s dramatic retelling of Arjuna’s crisis on Kurukshetra and Krishna’s call to rise. The song draws on Bhagavad Gita themes including the immortal self, action without attachment, Vishwaroopa and Krishna as Time, while keeping RudraNāda’s lyrical interpretation separate from the scripture itself.',
  keyTakeaways: [
    'The title means, in spirit, “Rise, Parth,” with Pārtha being a name of Arjuna.',
    'The song begins with Arjuna’s collapse before the battle and moves toward action.',
    '“Na tu marta, na tu maarega” is a lyrical paraphrase, not a literal Gita verse.',
    'The karma line is anchored most clearly in Bhagavad Gita 2.47.',
    'The cosmic imagery draws strongly from Chapter 11 and the Vishwaroopa vision.',
  ],
  contextHeading: 'The moment before Krishna speaks',
  lyricsIntro: 'The words as they appear in RudraNāda’s original composition.',
  meaningsHeading: 'What the song is saying',
  referencesHeading: 'Where the Bhagavad Gita enters the song',
  referencesIntro: 'These are the verses that sit behind the song’s ideas. A lyrical paraphrase is still labelled as a paraphrase.',
  sourceNote: 'Primary reference: Bhagavad Gita text and translations were checked against IIT Kanpur’s Gita Supersite. RudraNāda’s lyrics and explanatory prose are presented separately from scripture.',
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

const kalabhairavaAshtakam: RichMusicContent = {
  slug: 'kalabhairava-ashtakam',
  displayTitle: 'Kalabhairava Ashtakam',
  seoTitle: 'Kalabhairava Ashtakam: Lyrics, Meaning & Kashi Bhairava Context',
  metaDescription: 'Listen to RudraNāda’s Carnatic Kalabhairava Ashtakam and read the Sanskrit lyrics, transliteration, verse meanings, Kashi Bhairava context and FAQs.',
  dek: 'Eight verses to Kāla Bhairava, guardian of Kashi, rendered by RudraNāda in a powerful Carnatic setting.',
  editorialNote: 'Kalabhairava Ashtakam is a traditional Sanskrit stotra. The widely recited “Devarājasevyamāna…” text is commonly attributed to Adi Shankaracharya; textual witnesses also preserve a closely similar version in the Śivarahasya. RudraNāda’s music is a modern rendition of the traditional hymn, not a newly written lyric.',
  quickAnswer: 'Kalabhairava Ashtakam is an eight-verse Sanskrit hymn in praise of Kāla Bhairava, the fierce Shiva form revered as lord and guardian of Kashi. Each principal verse returns to the refrain “Kāśikāpurādhinātha Kālabhairavaṃ bhaje” — “I worship Kāla Bhairava, lord of the city of Kashi.”',
  keyTakeaways: [
    'Aṣṭakam means an eight-verse hymn; this is a stotra, not a short mantra.',
    'The hymn repeatedly addresses Kāla Bhairava as the lord of Kashi.',
    'Its imagery joins fierceness with compassion, protection, dharma, liberation and freedom from the bonds of karma.',
    'The hymn is widely attributed to Adi Shankaracharya, while a closely similar recension is also preserved in the Śivarahasya.',
    'RudraNāda’s recording presents the traditional Sanskrit text in a Carnatic musical setting.',
  ],
  contextHeading: 'Who is Kāla Bhairava in this hymn?',
  lyricsIntro: 'The traditional Sanskrit text used for this RudraNāda rendition, followed by a readable transliteration. Minor textual variants exist across editions and recitation traditions.',
  meaningsHeading: 'What the eight verses are saying',
  referencesHeading: 'Text, tradition and Kashi',
  referencesIntro: 'These notes separate what the hymn itself says from later devotional tradition and modern editorial explanation.',
  sourceNote: 'Research references: Śrī Kālabhairavāṣṭakam textual tradition; Complete Works of Shankaracharya, vol. 18, p. 89 as noted by Sanskrit Documents; the closely similar Śivarahasya recension; and the official Kashi portal for the living tradition of Kāla Bhairava as Kashi’s guardian. External links are intentionally not reproduced here.',
  context: [
    'The hymn does not introduce Bhairava as a vague symbol of fear. It names a precise devotional figure: Kāla Bhairava, lord of Kashi. The refrain at the end of every verse keeps returning to place — Kāśikā, the sacred city — so the geography is part of the theology.',
    'Kāla can mean time and is also associated with death. The second verse calls Bhairava kāla-kāla, “the death of Time” or the one before whom Time itself is overcome. The hymn therefore holds two scales at once: the fierce guardian encountered in devotion and the reality that stands beyond ordinary mortality.',
    'The text also refuses to make fierceness the whole story. Bhairava is described as compassionate, a giver of bhukti and mukti — worldly well-being and liberation — a protector of dharma, a releaser from the bonds of karma and a destroyer of the pride of death.',
    'In the living sacred geography of Varanasi, Kāla Bhairava is traditionally revered as the Kotwal, the guardian or magistrate of Kashi. That later devotional language resonates strongly with the hymn’s repeated address to him as Kāśikā-purādhinātha, lord of the city of Kashi.',
  ],
  lyrics: [
    {
      label: 'Verse 1',
      lines: [
        'देवराजसेव्यमानपावनाङ्घ्रिपङ्कजं',
        'व्यालयज्ञसूत्रमिन्दुशेखरं कृपाकरम् ।',
        'नारदादियोगिवृन्दवन्दितं दिगम्बरं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ १॥',
      ],
      transliteration: [
        'devarājasevyamānapāvanāṅghripaṅkajaṃ',
        'vyālayajñasūtraminduśekharaṃ kṛpākaram |',
        'nāradādiyogivṛndavanditaṃ digambaraṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 1 ||',
      ],
    },
    {
      label: 'Verse 2',
      lines: [
        'भानुकोटिभास्वरं भवाब्धितारकं परं',
        'नीलकण्ठमीप्सितार्थदायकं त्रिलोचनम् ।',
        'कालकालमम्बुजाक्षमक्षशूलमक्षरं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ २॥',
      ],
      transliteration: [
        'bhānukoṭibhāsvaraṃ bhavābdhitārakaṃ paraṃ',
        'nīlakaṇṭhamīpsitārthadāyakaṃ trilocanam |',
        'kālakālamambujākṣamakṣaśūlamakṣaraṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 2 ||',
      ],
    },
    {
      label: 'Verse 3',
      lines: [
        'शूलटङ्कपाशदण्डपाणिमादिकारणं',
        'श्यामकायमादिदेवमक्षरं निरामयम् ।',
        'भीमविक्रमं प्रभुं विचित्रताण्डवप्रियं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ३॥',
      ],
      transliteration: [
        'śūlaṭaṅkapāśadaṇḍapāṇimādikāraṇaṃ',
        'śyāmakāyamādidevamakṣaraṃ nirāmayam |',
        'bhīmavikramaṃ prabhuṃ vicitratāṇḍavapriyaṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 3 ||',
      ],
    },
    {
      label: 'Verse 4',
      lines: [
        'भुक्तिमुक्तिदायकं प्रशस्तचारुविग्रहं',
        'भक्तवत्सलं स्थितं समस्तलोकविग्रहम् ।',
        'विनिक्वणन्मनोज्ञहेमकिङ्किणीलसत्कटिं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ४॥',
      ],
      transliteration: [
        'bhuktimuktidāyakaṃ praśastacāruvigrahaṃ',
        'bhaktavatsalaṃ sthitaṃ samastalokavigraham |',
        'vinikvaṇanmanojñahemakiṅkiṇīlasatkaṭiṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 4 ||',
      ],
    },
    {
      label: 'Verse 5',
      lines: [
        'धर्मसेतुपालकं त्वधर्ममार्गनाशकं',
        'कर्मपाशमोचकं सुशर्मदायकं विभुम् ।',
        'स्वर्णवर्णशेषपाशशोभिताङ्गमण्डलं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ५॥',
      ],
      transliteration: [
        'dharmasetupālakaṃ tvadharmamārganāśakaṃ',
        'karmapāśamocakaṃ suśarmadāyakaṃ vibhum |',
        'svarṇavarṇaśeṣapāśaśobhitāṅgamaṇḍalaṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 5 ||',
      ],
    },
    {
      label: 'Verse 6',
      lines: [
        'रत्नपादुकाप्रभाभिरामपादयुग्मकं',
        'नित्यमद्वितीयमिष्टदैवतं निरञ्जनम् ।',
        'मृत्युदर्पनाशनं करालदंष्ट्रमोक्षदं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ६॥',
      ],
      transliteration: [
        'ratnapādukāprabhābhirāmapādayugmakaṃ',
        'nityamadvitīyamiṣṭadaivataṃ nirañjanam |',
        'mṛtyudarpanāśanaṃ karāladaṃṣṭramokṣadaṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 6 ||',
      ],
    },
    {
      label: 'Verse 7',
      lines: [
        'अट्टहासभिन्नपद्मजाण्डकोशसन्ततिं',
        'दृष्टिपातनष्टपापजालमुग्रशासनम् ।',
        'अष्टसिद्धिदायकं कपालमालिकाधरं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ७॥',
      ],
      transliteration: [
        'aṭṭahāsabhinnapadmajāṇḍakośasantatiṃ',
        'dṛṣṭipātanaṣṭapāpajālamugraśāsanam |',
        'aṣṭasiddhidāyakaṃ kapālamālikādharaṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 7 ||',
      ],
    },
    {
      label: 'Verse 8',
      lines: [
        'भूतसङ्घनायकं विशालकीर्तिदायकं',
        'काशिवासलोकपुण्यपापशोधकं विभुम् ।',
        'नीतिमार्गकोविदं पुरातनं जगत्पतिं',
        'काशिकापुराधिनाथकालभैरवं भजे ॥ ८॥',
      ],
      transliteration: [
        'bhūtasaṅghanāyakaṃ viśālakīrtidāyakaṃ',
        'kāśivāsalokapuṇyapāpaśodhakaṃ vibhum |',
        'nītimārgakovidaṃ purātanaṃ jagatpatiṃ',
        'kāśikāpurādhināthakālabhairavaṃ bhaje || 8 ||',
      ],
    },
    {
      label: 'Phalaśruti',
      lines: [
        'कालभैरवाष्टकं पठन्ति ये मनोहरं',
        'ज्ञानमुक्तिसाधनं विचित्रपुण्यवर्धनम् ।',
        'शोकमोहदैन्यलोभकोपतापनाशनं',
        'प्रयान्ति कालभैरवाङ्घ्रिसन्निधिं नरा ध्रुवम् ॥',
      ],
      transliteration: [
        'kālabhairavāṣṭakaṃ paṭhanti ye manoharaṃ',
        'jñānamuktisādhanaṃ vicitrapuṇyavardhanam |',
        'śokamohadainyalobhakopatāpanāśanaṃ',
        'prayānti kālabhairavāṅghrisannidhiṃ narā dhruvam ||',
      ],
    },
  ],
  meanings: [
    {heading:'Verse 1 — the lord of Kashi',text:'Bhairava is praised as one whose sacred feet are honoured by the gods, adorned with the moon and serpent imagery associated with Shiva, compassionate, worshipped by sages and yogis, and sovereign of Kashi.'},
    {heading:'Verse 2 — beyond time and death',text:'The hymn describes him as radiant, three-eyed and capable of carrying the devotee across the ocean of worldly existence. The phrase kāla-kāla places him beyond the ordinary power of time and death.'},
    {heading:'Verse 3 — fierce power and tāṇḍava',text:'Weapons and implements fill the imagery, but the verse moves toward dance: Bhairava is terrible in power and delighting in an extraordinary tāṇḍava. Destruction here is not mere violence; it belongs to a cosmic rhythm.'},
    {heading:'Verse 4 — bhukti and mukti',text:'The hymn explicitly joins worldly well-being and liberation. Bhairava is bhaktavatsala, affectionate toward devotees, while his form is described on a cosmic scale.'},
    {heading:'Verse 5 — dharma and the bonds of karma',text:'Bhairava protects the bridge of dharma, destroys the path of adharma and releases the karmapāśa, the binding noose of karma. Protection in this verse is moral as well as physical.'},
    {heading:'Verse 6 — the pride of death is broken',text:'The fierce teeth remain, but so does mokṣa. Bhairava is praised as the destroyer of death’s arrogance and the giver of liberation, making fear and freedom part of the same devotional image.'},
    {heading:'Verse 7 — terrifying laughter, purifying glance',text:'The scale becomes cosmic: his laughter shatters worlds, his glance destroys the web of sin, and he bears a garland of skulls. The verse makes Bhairava’s terrifying imagery inseparable from purification and spiritual power.'},
    {heading:'Verse 8 — guardian, judge and ancient lord',text:'The final verse names him leader of the bhūtas, purifier of merit and demerit for those who dwell in Kashi, knower of the path of right conduct and ancient lord of the world.'},
    {heading:'The phalaśruti — what the hymn says recitation gives',text:'The closing verse praises recitation as a means toward knowledge and liberation and says it destroys grief, delusion, poverty of spirit, greed, anger and suffering. These are claims made by the traditional hymn itself, not modern medical or psychological guarantees.'},
  ],
  references: [
    {verse:'Śrī Kālabhairavāṣṭakam',title:'The “Devarājasevyamāna…” recension',note:'The standard eight-verse text used in this rendition. Its colophon and traditional transmission attribute it to Shankaracharya.',source:'Traditional Sanskrit text; Complete Works of Shankaracharya, vol. 18, p. 89.'},
    {verse:'Textual transmission',title:'A closely similar version in the Śivarahasya',note:'Sanskrit textual catalogues note a parallel recension in Śivarahasya, aṃśa 11, chapter 34, verses 53–61. This is why the page describes authorship as traditional attribution rather than pretending the transmission is completely simple.',source:'Śivarahasya parallel recension; Sanskrit textual catalogues.'},
    {verse:'Refrain',title:'“Kāśikāpurādhinātha Kālabhairavaṃ bhaje”',note:'Every principal verse returns to worship of Kāla Bhairava as the lord of Kashi. The refrain is the architectural centre of the hymn.',source:'Kalabhairava Ashtakam, verses 1–8.'},
    {verse:'Verse 2',title:'Kāla-kāla: the one before whom Time is overcome',note:'The verse combines Shiva imagery, transcendence of worldly existence and the striking title kāla-kāla, often understood as the death of Time or death itself.',source:'Kalabhairava Ashtakam, verse 2.'},
    {verse:'Verses 5–6',title:'Dharma, karma and liberation',note:'These verses praise Bhairava as protector of dharma, releaser from karmic bonds, destroyer of the pride of death and giver of mokṣa.',source:'Kalabhairava Ashtakam, verses 5–6.'},
    {verse:'Living Kashi tradition',title:'The Kotwal of Kashi',note:'The official Kashi portal describes Kāla Bhairava as the fierce Shiva manifestation revered as Kashi’s Kotwal, or guardian. That living tradition echoes the hymn’s repeated address to him as lord of the city.',source:'Kashi Official Web Portal, Shri Kaal Bhairav Temple.'},
  ],
  faq: [
    {question:'What is Kalabhairava Ashtakam?',answer:'Kalabhairava Ashtakam is an eight-verse Sanskrit stotra praising Kāla Bhairava, the fierce Shiva form associated especially with Kashi. Each verse ends by worshipping him as Kāśikā-purādhinātha, lord of the city of Kashi.'},
    {question:'Who wrote Kalabhairava Ashtakam?',answer:'The hymn is widely and traditionally attributed to Adi Shankaracharya, and a Shankaracharya recension appears in collected works. A closely similar version is also preserved in the Śivarahasya, so careful source-aware writing should acknowledge that textual transmission rather than state authorship without qualification.'},
    {question:'What does “Kalabhairava” mean?',answer:'Kāla can mean time and is also associated with death. Bhairava is a fierce form of Shiva. In the hymn, Kāla Bhairava is presented as a reality before whom even ordinary time and death lose their final authority.'},
    {question:'What does “Ashtakam” mean?',answer:'Aṣṭakam literally indicates a composition built around eight verses or sections. Kalabhairava Ashtakam has eight principal praise verses, followed in many recensions by a phalaśruti describing the fruits of recitation.'},
    {question:'Is Kalabhairava Ashtakam a mantra?',answer:'It is more precisely a stotra, a hymn of praise. A mantra is usually a shorter sacred formula used in recitation or ritual. Calling every Sanskrit devotional composition a mantra erases an important distinction.'},
    {question:'Why is Kashi mentioned in every verse?',answer:'The refrain repeatedly calls Bhairava the lord of Kashi. In the living tradition of Varanasi, Kāla Bhairava is revered as the city’s Kotwal or guardian, so Kashi is not incidental scenery; it is central to how this form of Bhairava is worshipped.'},
    {question:'When is Kalabhairava Ashtakam recited?',answer:'It is recited in Bhairava worship and is especially associated in many traditions with Bhairava Ashtami or Kalashtami observances. Practice varies by temple, lineage and region, so RudraNāda does not present one universal schedule as mandatory.'},
    {question:'Is RudraNāda’s version the original melody?',answer:'No. The Sanskrit stotra is traditional; RudraNāda’s Carnatic setting is a modern musical interpretation. The words belong to the inherited hymn, while the musical arrangement belongs to this rendition.'},
  ],
};

const richMusic: Record<string, RichMusicContent> = {
  [uthParth.slug]: uthParth,
  [kalabhairavaAshtakam.slug]: kalabhairavaAshtakam,
};

export const getRichMusic = (slug: string) => richMusic[slug];
