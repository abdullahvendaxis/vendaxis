export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "We map the problem, the users and the business goals before touching a pixel or line of code."
    },
    {
      num: "02",
      title: "Design",
      desc: "Rapid prototyping, wireframes and a clickable system you can test before we commit to build."
    },
    {
      num: "03",
      title: "Build",
      desc: "Weekly shippable increments, transparent pricing and a Slack channel where progress happens live."
    },
    {
      num: "04",
      title: "Scale",
      desc: "Analytics, iteration and optimization long after launch — because launch isn't the finish line."
    }
  ];

  return (
    <section>
      <div className="container">
        <div className="reveal">
          <div className="sec-label mono">How we work</div>
          <h2 style={{fontFamily: '"Anton",sans-serif', fontSize: 'clamp(40px,5.5vw,80px)', lineHeight: '1.02', letterSpacing: '-.03em', maxWidth: 860, fontWeight: 400}}>
            Four phases. <span className="italic">Zero</span> surprises.
          </h2>
        </div>
        <div className="process-grid">
          {steps.map((step, idx) => (
            <div key={idx} className="step reveal">
              <div className="step-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
