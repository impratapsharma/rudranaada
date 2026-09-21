import {ImageResponse} from 'next/og';

export const alt = 'RudraNāda — Stories, Music & Meaning';
export const size = {width: 1200, height: 630};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:'100%',
          height:'100%',
          display:'flex',
          background:'#0e0d0c',
          color:'#f5efe6',
          padding:'72px 84px',
          position:'relative',
          fontFamily:'Georgia, serif',
        }}
      >
        <div style={{
          position:'absolute',
          right:'78px',
          top:'62px',
          width:'350px',
          height:'350px',
          border:'2px solid rgba(225,170,93,.45)',
          borderRadius:'50%',
          display:'flex',
          alignItems:'center',
          justifyContent:'center',
          color:'#e1aa5d',
          fontSize:'120px',
        }}>ॐ</div>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'flex-end',maxWidth:'780px'}}>
          <div style={{fontSize:'28px',letterSpacing:'6px',textTransform:'uppercase',color:'#e1aa5d',marginBottom:'24px'}}>
            Story · Sound · Meaning
          </div>
          <div style={{fontSize:'82px',lineHeight:1.03,fontWeight:700,letterSpacing:'-3px'}}>
            RudraNāda
          </div>
          <div style={{fontSize:'38px',lineHeight:1.2,color:'#c9beb0',marginTop:'20px'}}>
            Stories, music and meaning from India’s epics and devotional traditions.
          </div>
        </div>
      </div>
    ),
    size
  );
}
