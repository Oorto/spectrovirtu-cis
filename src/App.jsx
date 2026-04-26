import { useEffect } from "react";

const logo = "/assets/spectrovirtu-logo-2026-moss.svg?v=1";
const darkLogo = "/assets/spectrovirtu-logo-2026-dark.svg?v=1";

const colors = [
  { name: "Primary Deep Forest", hex: "#264E3C", role: "Signature tone for identity, emphasis, and controlled contrast" },
  { name: "Deep Moss", hex: "#1B3A2D", role: "Reserved dark field for formal applications and reverse use" },
  { name: "Warm Off-White", hex: "#F4F1EC", role: "Primary field color for whitespace, paper, and calm presentation" },
  { name: "Soft Sage", hex: "#B8C9C1", role: "Supporting tone for diagrams, dividers, and quiet highlights" },
  { name: "Warm Grey", hex: "#CFCBC5", role: "Neutral layer for technical grids, material notes, and captions" },
  { name: "Charcoal", hex: "#2A2A2A", role: "Primary text color for legibility and editorial restraint" }
];

const applications = [
  "Identity manual",
  "Project proposal",
  "Business card",
  "Brochure spread",
  "Tablet website UI",
  "Instagram grid",
  "Engineering sheet"
];

function SectionHeader({ number, eyebrow, title, note }) {
  return (
    <div className="section-header reveal">
      <span>{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {note ? <p className="section-note">{note}</p> : null}
      </div>
    </div>
  );
}

function LogoMark({ className = "", compact = false, dark = false }) {
  return (
    <img
      className={`brand-logo ${compact ? "brand-logo--compact" : ""} ${className}`}
      src={dark ? darkLogo : logo}
      alt="SpectroVirtu"
    />
  );
}

function App() {
  useEffect(() => {
    const symbol = document.querySelector(".scroll-symbol");
    if (!symbol) return;

    let frame = 0;
    const update = () => {
      const maxScroll = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = window.scrollY / maxScroll;
      symbol.style.setProperty("--symbol-y", `${progress * -64}vh`);
      symbol.style.setProperty("--symbol-rotate", `${progress * 540}deg`);
      frame = 0;
    };

    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="scroll-symbol" aria-hidden="true">
        <img src="/assets/spectrovirtu-symbol-moss.svg?v=1" alt="" />
      </div>

      <header className="site-nav">
        <a href="#cover" aria-label="SpectroVirtu CIS cover">
          <LogoMark compact />
        </a>
        <nav>
          <a href="#essence">Essence</a>
          <a href="#logo">Logo</a>
          <a href="#system">System</a>
          <a href="#board">Board</a>
        </nav>
      </header>

      <main>
        <section className="cover" id="cover">
          <div className="cover-grid" aria-hidden="true" />
          <div className="cover-inner reveal">
            <LogoMark />
          <div className="cover-copy">
              <h1>Corporate Identity System</h1>
              <p>Solar identity for architectural integration.</p>
            </div>
          </div>
        </section>

        <section className="panel essence" id="essence">
          <SectionHeader
            number="01"
            eyebrow="Brand Essence"
            title="A restrained identity for light, surface, and performance."
            note="SpectroVirtu treats solar technology as part of the architectural language: integrated, precise, and visually composed."
          />
          <div className="essence-layout">
            <article className="statement reveal">
              <span>Philosophy</span>
              <p>
                Solar is composed into the surface, proportion, and performance of architecture.
              </p>
            </article>
            <div className="tagline reveal">
              <span>Tagline</span>
              <strong>Light integrated with form.</strong>
            </div>
          </div>
        </section>

        <section className="panel logo-system" id="logo">
          <SectionHeader
            number="02"
            eyebrow="Logo System"
            title="Logo use is defined by clarity and space."
            note="Maintain the original mark. Control scale, margin, and contrast."
          />
          <div className="logo-cards">
            <article className="logo-card reveal">
              <p>Primary logo</p>
              <div className="logo-stage">
                <LogoMark />
              </div>
            </article>
            <article className="logo-card logo-card--dark reveal">
              <p>Dark field placement</p>
              <div className="logo-stage">
                <LogoMark dark />
              </div>
            </article>
          </div>
          <div className="rules-grid">
            <article className="rule-card reveal">
              <span>Clear space</span>
              <div className="clearspace">
                <LogoMark compact />
              </div>
              <p>Maintain one symbol-width of clear space around every side of the signature.</p>
            </article>
            <article className="rule-card reveal">
              <span>Minimum size</span>
              <div className="size-rule">
                <LogoMark compact />
                <small>Digital minimum 140px / Print minimum 35mm</small>
              </div>
            </article>
          </div>
        </section>

        <section className="panel color-system">
          <SectionHeader
            number="03"
            eyebrow="Color System"
            title="A quiet palette built from depth, paper, and technical softness."
          />
          <div className="swatch-grid">
            {colors.map((color) => (
              <article className="swatch reveal" key={color.hex}>
                <div className="swatch-color" style={{ background: color.hex }} />
                <div>
                  <h3>{color.name}</h3>
                  <strong>{color.hex}</strong>
                  <p>{color.role}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="ratio reveal" aria-label="Usage ratio">
            <span style={{ flexBasis: "60%" }}>60% Warm field</span>
            <span style={{ flexBasis: "25%" }}>25% Deep green</span>
            <span style={{ flexBasis: "10%" }}>10% Sage / Grey</span>
            <span style={{ flexBasis: "5%" }}>5% Accent</span>
          </div>
        </section>

        <section className="panel typography">
          <SectionHeader
            number="04"
            eyebrow="Typography System"
            title="Measured typography for architectural clarity."
          />
          <div className="type-specimen reveal">
            <p className="type-label">Headline / Avenir Next or geometric sans-serif</p>
            <h2>Type with quiet precision.</h2>
            <p className="body-sample">
              Body / Inter. The system favors short lines, open spacing, and precise hierarchy for proposals, specifications, and digital interfaces.
            </p>
            <small>Caption / uppercase tracking / metadata, measurements, and system notes</small>
          </div>
          <div className="hierarchy reveal">
            <span>H1 88 / 0.98</span>
            <span>H2 48 / 1.05</span>
            <span>Body 18 / 1.7</span>
            <span>Caption 11 / 0.18em</span>
          </div>
        </section>

        <section className="panel layout-system" id="system">
          <SectionHeader
            number="05"
            eyebrow="Layout System"
            title="Structure begins with spacing."
            note="A 12-column grid, asymmetric alignment, generous negative space, and fine divider lines define the proposal rhythm."
          />
          <div className="grid-demo reveal">
            {Array.from({ length: 12 }).map((_, index) => (
              <span key={index}>{String(index + 1).padStart(2, "0")}</span>
            ))}
            <div className="grid-block grid-block--a">Visual field</div>
            <div className="grid-block grid-block--b">Specification</div>
            <div className="grid-block grid-block--c">Signature area</div>
          </div>
          <div className="spacing-rules reveal">
            <span>Base unit 8px</span>
            <span>Section padding 96-160px</span>
            <span>Hairline dividers 1px</span>
            <span>Asymmetry 4/8 or 5/7</span>
          </div>
        </section>

        <section className="panel visual-language">
          <SectionHeader
            number="06"
            eyebrow="Visual Language"
            title="Facade rhythm, photovoltaic surfaces, material tactility, and directional light."
          />
          <div className="visual-grid">
            <article className="visual-tile facade reveal">
              <span>Facade composition</span>
            </article>
            <article className="visual-tile bipv reveal">
              <span>Photovoltaic surface studies</span>
            </article>
            <article className="visual-tile texture reveal">
              <span>Material tactility</span>
            </article>
            <article className="visual-tile shadow reveal">
              <span>Light direction</span>
            </article>
          </div>
        </section>

        <section className="panel applications">
          <SectionHeader
            number="07"
            eyebrow="Brand Applications"
            title="Applications for presentation, specification, and client communication."
          />
          <div className="mockup-stage">
            {applications.map((item, index) => (
              <article className={`mockup mockup--${index + 1} reveal`} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{item}</h3>
                <div className="mock-lines" />
              </article>
            ))}
          </div>
        </section>

        <section className="panel digital">
          <SectionHeader
            number="08"
            eyebrow="Digital Identity"
            title="Digital surfaces that preserve the same quiet discipline."
          />
          <div className="device-layout">
            <article className="browser-preview reveal">
              <div className="browser-top">
                <span />
                <span />
                <span />
              </div>
              <div className="browser-body">
                <LogoMark compact />
                <h3>Solar surfaces for architecture</h3>
                <button>View System</button>
              </div>
            </article>
            <article className="phone-preview reveal">
              <LogoMark compact />
              <div className="phone-image" />
              <p>Surface system library</p>
            </article>
            <div className="component-board reveal">
              <button>Primary Action</button>
              <button className="ghost">Secondary Action</button>
              <div className="mini-card">
                <span>Information card</span>
                <p>Matte surface, fine border, and clear technical hierarchy.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="brand-board" id="board">
          <SectionHeader
            number="09"
            eyebrow="Final Brand Board"
            title="SpectroVirtu identity system overview."
            note="Logo, color, typography, layout, visual language, applications, and digital interface behavior in one system."
          />
          <div className="board-grid reveal">
            <div className="board-logo">
              <LogoMark />
              <p>Corporate Identity System</p>
            </div>
            <div className="board-colors">
              {colors.slice(0, 5).map((color) => (
                <span key={color.hex} style={{ background: color.hex }} />
              ))}
            </div>
            <div className="board-type">
              <strong>Aa</strong>
              <p>Avenir Next / Inter</p>
            </div>
            <div className="board-image" />
            <div className="board-mockup">
              <span>Proposal</span>
              <span>Cards</span>
              <span>UI</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
