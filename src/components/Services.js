export default function Services() {
  const services = [
    {
      num: "01 / APP",
      name: "App Development",
      desc: "Native and cross-platform mobile products that feel fast, look sharp and scale without friction.",
      tags: ["Flutter", "React Native", "Swift", "Kotlin"]
    },
    {
      num: "02 / WEB",
      name: "Web &amp; Platforms",
      desc: "Marketing sites, SaaS dashboards and e-commerce platforms engineered for speed and conversion.",
      tags: ["Next.js", "Laravel", "WordPress", "Webflow"]
    },
    {
      num: "03 / OPS",
      name: "Automation &amp; AI",
      desc: "CRM integrations, workflow automation and AI agents that quietly remove weeks of manual work.",
      tags: ["n8n", "Zapier", "GPT APIs", "Make"]
    },
    {
      num: "04 / GROW",
      name: "Digital Marketing",
      desc: "Performance campaigns, SEO and social strategy that treat attention as a scarce, expensive asset.",
      tags: ["SEO", "Meta Ads", "Google Ads", "Analytics"]
    },
    {
      num: "05 / BRAND",
      name: "Brand &amp; Design",
      desc: "Identity systems, motion and design languages built to survive channel drift and time.",
      tags: ["Identity", "Motion", "UI/UX", "3D"]
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services-head reveal">
          <div>
            <div className="sec-label mono">What we do</div>
            <h2>Capabilities,<br /><span className="italic">not limitations.</span></h2>
          </div>
          <p style={{maxWidth: 380, color: 'rgba(239,236,228,.65)'}}>Five integrated practices. Engage us on a single service or hand over your entire digital stack.</p>
        </div>
        <div className="services-list">
          {services.map((service, idx) => (
            <div key={idx} className="service reveal">
              <div className="service-num">{service.num}</div>
              <div className="service-name">{service.name}</div>
              <div className="service-desc">{service.desc}</div>
              <div className="service-tags">
                {service.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
              <div className="service-arrow">↗</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
