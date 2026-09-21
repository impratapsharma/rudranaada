export type FaqItem={question:string;answer:string};

export function FaqSection({items,title='Questions readers ask'}:{items:FaqItem[];title?:string}){
  return <section className="articleFaq">
    <div className="eyebrow">FAQ</div>
    <h2>{title}</h2>
    <div className="faqList">
      {items.map(item=><details key={item.question}>
        <summary>{item.question}</summary>
        <p>{item.answer}</p>
      </details>)}
    </div>
  </section>;
}
