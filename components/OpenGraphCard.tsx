export function OpenGraphCard({eyebrow,title,subtitle}:{eyebrow:string;title:string;subtitle?:string}){
  return <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'72px 78px',background:'#fbfaf7',color:'#211d18',fontFamily:'Georgia, serif'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontFamily:'Arial, sans-serif',fontSize:24,letterSpacing:3,textTransform:'uppercase',color:'#a66b16',fontWeight:700}}>
      <span>{eyebrow}</span><span>RudraNāda</span>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:24,maxWidth:1040}}>
      <div style={{fontSize:title.length>72?54:64,lineHeight:1.04,letterSpacing:-2,fontWeight:700}}>{title}</div>
      {subtitle&&<div style={{fontFamily:'Arial, sans-serif',fontSize:26,lineHeight:1.4,color:'#74695e',maxWidth:930}}>{subtitle}</div>}
    </div>
    <div style={{display:'flex',height:8,width:180,background:'#a66b16',borderRadius:999}}/>
  </div>;
}
