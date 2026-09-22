export type FestivalEntry={
  date:string;
  endDate?:string;
  name:string;
  tithi?:string;
  tradition:string;
  region:string;
  meaning:string;
  href?:string;
  note?:string;
};

export const festivalCalendar2026:FestivalEntry[]=[
  {date:'2026-01-14',name:'Makara Sankranti & Pongal',tradition:'Surya · Harvest',region:'Pan-India · especially South India',meaning:'The Sun enters Makara. Harvest traditions mark gratitude, renewal and the turning of the solar year.'},
  {date:'2026-01-23',name:'Vasant Panchami',tithi:'Magha Shukla Panchami',tradition:'Saraswati',region:'North, East & many other regions',meaning:'A spring festival associated with Saraswati, learning, music and the beginning of new study.'},
  {date:'2026-02-15',name:'Maha Shivaratri',tithi:'Phalguna Krishna Chaturdashi',tradition:'Shiva',region:'Pan-India',meaning:'A night of Shiva worship, fasting, vigil and contemplation.',href:'/deities/shiva'},
  {date:'2026-03-03',name:'Holika Dahan',tithi:'Phalguna Purnima',tradition:'Holi',region:'Especially North & West India',meaning:'The bonfire night before Holi, associated with the Prahlada and Holika tradition.'},
  {date:'2026-03-04',name:'Holi',tradition:'Spring · Krishna traditions',region:'Pan-India with strong regional variation',meaning:'The festival of colour and spring, carrying Krishna traditions in some regions and other local meanings elsewhere.',href:'/deities/krishna'},
  {date:'2026-03-19',name:'Ugadi & Gudi Padwa',tithi:'Chaitra Shukla Pratipada',tradition:'New Year',region:'Karnataka · Andhra Pradesh · Telangana · Maharashtra',meaning:'Regional New Year observances marking the first day of Chaitra.'},
  {date:'2026-03-26',name:'Rama Navami',tithi:'Chaitra Shukla Navami',tradition:'Rama',region:'Pan-India',meaning:'Celebrates the birth of Sri Rama. Some Vaishnava calendars observe it on 27 March in 2026.',href:'/ramayana',note:'Smarta date shown. Some Vaishnava calendars differ by one day.'},
  {date:'2026-04-02',name:'Hanuman Jayanti',tithi:'Chaitra Shukla Purnima',tradition:'Hanuman · Rama',region:'Widely observed; regional dates can differ',meaning:'Honours Hanuman, the great devotee of Rama, and the ideals of strength, service and bhakti.',href:'/deities/hanuman'},
  {date:'2026-04-19',name:'Akshaya Tritiya & Parashurama Jayanti',tithi:'Vaishakha Shukla Tritiya',tradition:'Vishnu · Parashurama',region:'Pan-India',meaning:'An auspicious day associated with beginnings, giving and prosperity; also observed as Parashurama Jayanti.',href:'/deities/parashurama'},
  {date:'2026-04-30',name:'Narasimha Jayanti',tithi:'Vaishakha Shukla Chaturdashi',tradition:'Narasimha · Vishnu',region:'Vaishnava traditions',meaning:'Remembers the appearance of Narasimha to protect Prahlada and destroy Hiranyakashipu.',href:'/deities/narasimha'},
  {date:'2026-05-25',name:'Ganga Dussehra',tithi:'Jyeshtha Shukla Dashami',tradition:'Ganga',region:'Especially North India',meaning:'Honours the sacred descent of the Ganga and its purifying presence.'},
  {date:'2026-07-16',name:'Jagannath Ratha Yatra',tithi:'Ashadha Shukla Dwitiya',tradition:'Jagannath · Krishna',region:'Odisha and Jagannath traditions worldwide',meaning:'The chariot festival of Jagannath, Balabhadra and Subhadra.',href:'/deities/krishna'},
  {date:'2026-07-29',name:'Guru Purnima',tithi:'Ashadha Shukla Purnima',tradition:'Guru · Vyasa',region:'Pan-India',meaning:'A day for honouring teachers, gurus and the transmission of knowledge.',href:'/guru'},
  {date:'2026-08-26',name:'Onam',tradition:'Mahabali · Vamana · Harvest',region:'Kerala',meaning:'Kerala’s great harvest festival, remembered through the return of Mahabali and regional Vamana traditions.'},
  {date:'2026-08-28',name:'Raksha Bandhan',tithi:'Shravana Shukla Purnima',tradition:'Family · Protection',region:'Especially North, West & Central India',meaning:'A festival of protective bonds, most commonly marked through the tying of rakhi.'},
  {date:'2026-09-04',name:'Krishna Janmashtami',tithi:'Bhadrapada Krishna Ashtami',tradition:'Krishna',region:'Pan-India',meaning:'Celebrates the birth of Krishna through fasting, night worship, song and dramatic retelling.',href:'/deities/krishna'},
  {date:'2026-09-14',name:'Ganesh Chaturthi',tithi:'Bhadrapada Shukla Chaturthi',tradition:'Ganesha',region:'Pan-India · especially Maharashtra & Karnataka',meaning:'Celebrates Ganesha with home and public worship, music, offerings and immersion traditions.',href:'/music/aaya-re-ganpati'},
  {date:'2026-10-11',name:'Sharad Navratri begins',tithi:'Ashwina Shukla Pratipada',tradition:'Devi · Shakti',region:'Pan-India with major regional variation',meaning:'Nine nights of Goddess worship expressed through Navadurga, Durga Puja, Garba, Golu, Ayudha Puja and other traditions.',href:'/articles/navratri-2026-nine-forms-of-durga'},
  {date:'2026-10-19',name:'Durga Ashtami & Maha Navami',tithi:'Ashwina Shukla Ashtami / Navami',tradition:'Devi',region:'Pan-India · especially Shakta traditions',meaning:'The climactic worship days of Sharad Navratri and Durga Puja.',href:'/articles/navratri-2026-nine-forms-of-durga'},
  {date:'2026-10-20',name:'Vijayadashami / Dussehra',tithi:'Ashwina Shukla Dashami',tradition:'Devi · Rama',region:'Pan-India',meaning:'A festival of victory remembered through Devi’s triumph over Mahishasura and, in many traditions, Sri Rama’s victory over Ravana.',href:'/articles/navratri-2026-nine-forms-of-durga'},
  {date:'2026-10-25',name:'Sharad Purnima / Kojagari',tithi:'Ashwina Shukla Purnima',tradition:'Lakshmi · Krishna traditions',region:'Regional observance across India',meaning:'A full-moon festival associated with Lakshmi in some traditions and Krishna’s rasa traditions in others.',href:'/deities/krishna'},
  {date:'2026-11-08',name:'Diwali & Lakshmi Puja',tithi:'Kartika Krishna Amavasya',tradition:'Lakshmi · Rama · regional traditions',region:'Pan-India',meaning:'The festival of lights carries several regional narratives, including Lakshmi worship and Rama’s return to Ayodhya.'},
  {date:'2026-11-10',name:'Govardhan Puja',tithi:'Kartika Shukla Pratipada',tradition:'Krishna',region:'Especially Vaishnava traditions',meaning:'Remembers Krishna lifting Govardhan and redirects attention from pride toward protection, land and community.',href:'/deities/krishna'},
  {date:'2026-11-11',name:'Bhai Dooj',tithi:'Kartika Shukla Dwitiya',tradition:'Sibling bond',region:'North, West & parts of India',meaning:'A festival celebrating the bond between brothers and sisters.'},
  {date:'2026-11-15',name:'Chhath Puja',tithi:'Kartika Shukla Shashthi',tradition:'Surya',region:'Bihar · Jharkhand · eastern Uttar Pradesh · diaspora',meaning:'A rigorous festival of offerings to the Sun, water, fasting and gratitude.'},
  {date:'2026-11-24',name:'Kartik Purnima',tithi:'Kartika Shukla Purnima',tradition:'Shiva · Vishnu · regional traditions',region:'Pan-India with strong local traditions',meaning:'A sacred full moon associated with pilgrimage, lamps, river worship and several Shaiva and Vaishnava traditions.'},
  {date:'2026-12-20',name:'Gita Jayanti / Mokshada Ekadashi',tithi:'Margashirsha Shukla Ekadashi',tradition:'Krishna · Bhagavad Gita',region:'Vaishnava and Gita traditions',meaning:'Commemorates the teaching of the Bhagavad Gita to Arjuna on Kurukshetra.',href:'/mahabharata'}
];

export const monthNames=['January','February','March','April','May','June','July','August','September','October','November','December'];

export const festivalsByMonth2026=monthNames.map((name,index)=>({
  name,
  month:index+1,
  festivals:festivalCalendar2026.filter(item=>Number(item.date.slice(5,7))===index+1)
}));
