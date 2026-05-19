export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <div className="reveal">
          <div className="sec-label mono">About the studio</div>
          <h2>A team of <span className="italic">builders,</span><br />not vendors.</h2>
        </div>
        <div className="about-text reveal">
          <p><strong>We don't sell hours — we ship outcomes.</strong> Since 2019, VendAxis has partnered with founders, operators and global brands to turn messy business problems into clean, honest digital products.</p>
          <p>From a Flutter app processing thousands of orders a day to a CRM automation that saves teams 40+ hours a week — everything we make is measured in results, not deliverables.</p>
          <div className="stats">
            <div><div className="stat-num">120<span className="italic">+</span></div><div className="stat-label">Projects shipped</div></div>
            <div><div className="stat-num">40<span className="italic">+</span></div><div className="stat-label">Active clients</div></div>
            <div><div className="stat-num">7<span className="italic">yr</span></div><div className="stat-label">Years building</div></div>
          </div>
        </div>
      </div>
    </section>
  );
}
