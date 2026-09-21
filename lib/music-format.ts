const displayTitles:Record<string,string>={
  'mahakali':'Mahakali',
  'parashurama':'Mahavatar Parashurama',
  'aaya-re-ganpati':'Aaya Re Ganpati',
  'nag-panchami':'Naag Devta Chhaya Rakhna',
  'kalabhairava-ashtakam':'Kalabhairava Ashtakam',
  'ramayana-orchestral':'Ramayana: Orchestral Journey',
  'om-namo-narayanaya-meditation':'Om Namo Narayanaya: Meditation',
  'om-namah-shivaya-meditation':'Om Namah Shivaya: 30-Minute Meditation',
  'aham-brahmasmi':'Aham Brahmasmi',
  'bhishmas-final-moments':"Bhishma's Final Moments",
  'krishna-flute-meditation':'Krishna Flute Meditation',
  'draupadi-agni-ki-putri':'Draupadi: Agni Ki Putri',
  'abhimanyus-last-battle':"Abhimanyu's Last Battle",
  'surya-putra-karna':'Surya Putra Karna',
  'kaala-bhairav':'Kaala Bhairav',
  'om-namo-narayanaya':'Om Namo Narayanaya',
  'ram-naam':'Ram Naam Chant',
  'uth-parth':'Uth Parth',
  'dhuan-utha':'Dhuan Utha',
};

export const getDisplayTitle=(slug:string,fallback:string)=>displayTitles[slug]??fallback;
export const formatDuration=(seconds:number)=>`${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;
export const formatDate=(date:string)=>{
  const [year,month,day]=date.slice(0,10).split('-').map(Number);
  return new Intl.DateTimeFormat('en',{day:'numeric',month:'short',year:'numeric',timeZone:'UTC'}).format(new Date(Date.UTC(year,month-1,day)));
};
