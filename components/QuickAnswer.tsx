export function QuickAnswer({answer,takeaways}:{answer:string;takeaways:string[]}){
  return <section className="answerBlock">
    <div className="eyebrow">In brief</div>
    <p className="answerLead">{answer}</p>
    <ul>{takeaways.map(item=><li key={item}>{item}</li>)}</ul>
  </section>;
}
