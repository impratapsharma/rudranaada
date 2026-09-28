export type IndicScript = 'hindi' | 'telugu' | 'kannada';

const devChars = [
  'ॐ','ँ','ं','ः','ऽ',
  'अ','आ','इ','ई','उ','ऊ','ऋ','ॠ','ऌ','ॡ','ए','ऐ','ओ','औ',
  'क','ख','ग','घ','ङ','च','छ','ज','झ','ञ','ट','ठ','ड','ढ','ण',
  'त','थ','द','ध','न','प','फ','ब','भ','म','य','र','ल','व','श','ष','स','ह','ळ',
  'ा','ि','ी','ु','ू','ृ','ॄ','ॢ','ॣ','े','ै','ो','ौ','्',
  '०','१','२','३','४','५','६','७','८','९'
] as const;

const teluguChars = [
  'ఓం','ఁ','ం','ః','ఽ',
  'అ','ఆ','ఇ','ఈ','ఉ','ఊ','ఋ','ౠ','ఌ','ౡ','ఏ','ఐ','ఓ','ఔ',
  'క','ఖ','గ','ఘ','ఙ','చ','ఛ','జ','ఝ','ఞ','ట','ఠ','డ','ఢ','ణ',
  'త','థ','ద','ధ','న','ప','ఫ','బ','భ','మ','య','ర','ల','వ','శ','ష','స','హ','ళ',
  'ా','ి','ీ','ు','ూ','ృ','ౄ','ౢ','ౣ','ే','ై','ో','ౌ','్',
  '౦','౧','౨','౩','౪','౫','౬','౭','౮','౯'
] as const;

const kannadaChars = [
  'ಓಂ','ಁ','ಂ','ಃ','ಽ',
  'ಅ','ಆ','ಇ','ಈ','ಉ','ಊ','ಋ','ೠ','ಌ','ೡ','ಏ','ಐ','ಓ','ಔ',
  'ಕ','ಖ','ಗ','ಘ','ಙ','ಚ','ಛ','ಜ','ಝ','ಞ','ಟ','ಠ','ಡ','ಢ','ಣ',
  'ತ','ಥ','ದ','ಧ','ನ','ಪ','ಫ','ಬ','ಭ','ಮ','ಯ','ರ','ಲ','ವ','ಶ','ಷ','ಸ','ಹ','ಳ',
  'ಾ','ಿ','ೀ','ು','ೂ','ೃ','ೄ','ೢ','ೣ','ೇ','ೈ','ೋ','ೌ','್',
  '೦','೧','೨','೩','೪','೫','೬','೭','೮','೯'
] as const;

function buildMap(target: readonly string[]): Map<string,string> {
  return new Map<string,string>(
    devChars.map((char,index)=>[char,target[index]!] as const)
  );
}

const maps = {
  telugu: buildMap(teluguChars),
  kannada: buildMap(kannadaChars),
};

export const scriptMeta: Record<IndicScript,{
  label:string;
  nativeLabel:string;
  htmlLang:string;
  description:string;
}> = {
  hindi: {
    label:'Hindi / Devanagari',
    nativeLabel:'हिन्दी / देवनागरी',
    htmlLang:'sa-Deva',
    description:'Sanskrit text in Devanagari script',
  },
  telugu: {
    label:'Telugu',
    nativeLabel:'తెలుగు',
    htmlLang:'sa-Telu',
    description:'Sanskrit text in Telugu script',
  },
  kannada: {
    label:'Kannada',
    nativeLabel:'ಕನ್ನಡ',
    htmlLang:'sa-Knda',
    description:'Sanskrit text in Kannada script',
  },
};

export function toIndicScript(text:string, script:IndicScript):string {
  if(script==='hindi') return text;
  const map=maps[script];
  return Array.from(text, char=>map.get(char) ?? char).join('');
}

export function isIndicScript(value:string):value is IndicScript {
  return value==='hindi' || value==='telugu' || value==='kannada';
}
