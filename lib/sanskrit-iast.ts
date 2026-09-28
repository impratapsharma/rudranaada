const independentVowels:Record<string,string>={
  'अ':'a','आ':'ā','इ':'i','ई':'ī','उ':'u','ऊ':'ū','ऋ':'ṛ','ॠ':'ṝ',
  'ऌ':'ḷ','ॡ':'ḹ','ए':'e','ऐ':'ai','ओ':'o','औ':'au'
};

const consonants:Record<string,string>={
  'क':'k','ख':'kh','ग':'g','घ':'gh','ङ':'ṅ',
  'च':'c','छ':'ch','ज':'j','झ':'jh','ञ':'ñ',
  'ट':'ṭ','ठ':'ṭh','ड':'ḍ','ढ':'ḍh','ण':'ṇ',
  'त':'t','थ':'th','द':'d','ध':'dh','न':'n',
  'प':'p','फ':'ph','ब':'b','भ':'bh','म':'m',
  'य':'y','र':'r','ल':'l','व':'v',
  'श':'ś','ष':'ṣ','स':'s','ह':'h','ळ':'ḷ'
};

const vowelSigns:Record<string,string>={
  'ा':'ā','ि':'i','ी':'ī','ु':'u','ू':'ū','ृ':'ṛ','ॄ':'ṝ',
  'ॢ':'ḷ','ॣ':'ḹ','े':'e','ै':'ai','ो':'o','ौ':'au'
};

const marks:Record<string,string>={
  'ॐ':'oṃ','ँ':'m̐','ं':'ṃ','ः':'ḥ','ऽ':'’',
  '०':'0','१':'1','२':'2','३':'3','४':'4','५':'5','६':'6','७':'7','८':'8','९':'9'
};

/**
 * Deterministic Devanagari Sanskrit → IAST transliteration.
 * This changes script only. It does not translate or reinterpret the Sanskrit.
 */
export function toIast(text:string):string{
  let out='';
  for(let i=0;i<text.length;i++){
    const char=text[i]!;
    const consonant=consonants[char];

    if(consonant){
      out+=consonant;
      const next=text[i+1];
      if(next==='्'){
        i++;
        continue;
      }
      if(next && vowelSigns[next]!==undefined){
        out+=vowelSigns[next];
        i++;
        continue;
      }
      out+='a';
      continue;
    }

    if(independentVowels[char]!==undefined){
      out+=independentVowels[char];
      continue;
    }

    if(vowelSigns[char]!==undefined){
      out+=vowelSigns[char];
      continue;
    }

    if(marks[char]!==undefined){
      out+=marks[char];
      continue;
    }

    if(char==='।'){out+='|';continue;}
    if(char==='॥'){out+='||';continue;}

    out+=char;
  }
  return out;
}
