export function OpenGraphCard({eyebrow,title,subtitle}:{eyebrow:string;title:string;subtitle?:string}){
  return <div style={{width:'100%',height:'100%',display:'flex',position:'relative',background:'#0e0d0c',color:'#f5efe6',padding:'72px 84px',fontFamily:'Georgia, serif'}}>
    <div style={{position:'absolute',right:'72px',top:'60px',width:'300px',height:'300px',border:'2px solid rgba(225,170,93,.36)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#e1aa5d',fontSize:'96px'}}>ॐ</div>
    <div style={{display:'flex',flexDirection:'column',justifyContent:'space-between',width:'100%'}}>
      <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',fontFamily:'Arial, sans-serif',fontSize:22,letterSpacing:4,textTransform:'uppercase',color:'#e1aa5d',fontWeight:700}}>
        <span>{eyebrow}</span><span>RudraNāda</span>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:22,maxWidth:900}}>
        <div style={{fontSize:title.length>82?48:title.length>58?56:64,lineHeight:1.04,letterSpacing:-2,fontWeight:700}}>{title}</div>
        {subtitle&&<div style={{fontFamily:'Arial, sans-serif',fontSize:25,lineHeight:1.4,color:'#c9beb0',maxWidth:860}}>{subtitle}</div>}
      </div>
      <div style={{display:'flex',height:7,width:170,background:'#e1aa5d',borderRadius:999}}/>
    </div>
  </div>;
}
