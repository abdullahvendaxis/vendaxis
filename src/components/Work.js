export default function Work() {
  const projects = [
    {
      meta: "Fintech · Mobile app",
      title: "Halo Pay — instant UAE transfers"
    },
    {
      meta: "E-commerce · Web",
      title: "Suq Market — multi-vendor platform"
    },
    {
      meta: "SaaS · Automation",
      title: "OpsFlow — CRM + ops engine"
    },
    {
      meta: "Brand · Identity",
      title: "Mira Studio — full brand rebuild"
    }
  ];

  return (
    <section id="work">
      <div className="container">
        <div className="services-head reveal">
          <div>
            <div className="sec-label mono">Selected work</div>
            <h2 style={{fontFamily: '"Anton",sans-serif', fontSize: 'clamp(44px,7vw,110px)', lineHeight: '.95', letterSpacing: '-.035em', fontWeight: 400}}>
              Recent <span className="italic">shipments.</span>
            </h2>
          </div>
          <a href="#" className="btn btn-ghost">View archive →</a>
        </div>
        <div className="work-grid">
          {projects.map((project, idx) => (
            <div key={idx} className="work-card reveal" data-tilt>
              <div className="circle-badge">↗</div>
              <div className="work-meta">{project.meta}</div>
              <div className="work-title">{project.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
