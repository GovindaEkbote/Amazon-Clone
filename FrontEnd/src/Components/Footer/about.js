import React from 'react';
import './styles.css';

export default function About() {
  const changeBackgroundImage = (id, url) => {
    const element = document.getElementById(id);
    if (element) {
      element.style.backgroundImage = `url(${url})`;
    }
  };

  window.onscroll = function () {
    const header = document.getElementById('head');
    if (header) {
      header.style.top = '0px';
      header.style.position = 'sticky';
    }
  };

  window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach((reveal) => {
      const top = reveal.getBoundingClientRect().top;
      if (top < windowHeight - revealPoint) {
        reveal.classList.add('active');
      } else {
        reveal.classList.remove('active');
      }
    });
  });

  return (
    <div className="App">
      <main>
        <div id="front">
          <h1 style={{ textAlign: 'center' }}>Welcome, To E-Com</h1>
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/about-us-1805547-1537820.png"
            alt="Welcome Illustration"
          />
          <p>
            " Our goal is to remove any technical or financial barriers that can
            prevent you from making your own website. Our powerful tools empower
            individuals and business owners to create a website, sell online, or
            reach global audiences. Whether you're a beginner or website expert,
            we're excited to help you on your journey! "
          </p>
        </div>

        <div id="first" className="reveal">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/growing-business-by-digital-marketing-4217800-3501667.png"
            alt="Digital Marketing"
          />
          <div>
            <h1>We Offer Innovative Technology Solutions</h1>
            <p>
              EceraSystem is a full-service digital marketing agency with a long
              history of delivering great results for our clients. We take an
              individualized approach to every customer project. In some cases
              we may focus more on SEO, while in others we’ll dig more into PPC,
              social media or conversion optimization.
            </p>
            <h2>Vegetables (90%)</h2>
            <div className="comm">
              <div id="comm1"></div>
            </div>
            <h2>Electronic (85%)</h2>
            <div className="comm">
              <div id="comm2"></div>
            </div>
            <h2>Mobiles (70%)</h2>
            <div className="comm">
              <div id="comm3"></div>
            </div>
          </div>
        </div>

        <div id="fourth" className="reveal">
          <h2 style={{ color: 'white' }}>TECHNOLOGY INDEX</h2>
          <h1 style={{ color: 'white' }}>
            Real Time Monitoring Your Infrastructure Branded Digital Solutions
          </h1>
          <div id="fourth_cards">
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/data-analysis-27-681042.png"
                alt="Data Analytics"
              />
              <p>Vegitables</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/ui-ux-designer-2755964-2289563.png"
                alt="UI/UX Design"
              />
              <p>Fatilizer</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/web-development-3-478143.png"
                alt="Web Development"
              />
              <p>Electronic</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/qa-testing-3919162-3246433.png"
                alt="Q&A Testing"
              />
              <p>Mobiles</p>
            </div>
            <div>
              <img
                src="https://cdn.iconscout.com/icon/premium/png-64-thumb/team-135-386667.png"
                alt="Dedicated Team"
              />
              <p>DEDICATED TEAM</p>
            </div>
          </div>
        </div>

        <div id="second" className="reveal">
          <div className="container">
            <div>
              <h1>WE PROVIDE</h1>
              <h2>Remote Employee</h2>
              <p>
                A huge pool of talent from every domain available for your
                office. Solve your freelancing problems by letting us help you
                find the most suitable employee or a whole team that won't let
                you down. Everything is managed by Indirect Employee staff!
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/men-and-woman-characters-work-together-on-project-presentation-2706075-2259871.png"
              alt="Remote Employee"
            />
          </div>
          <div className="container">
            <div>
              <h1>WE HAVE</h1>
              <h2>Global Partnership</h2>
              <p>
                Our Global partners are spread across 12 countries and our client base
                is growing day by day. Many of our clients are repeat customers
                and several have come to us through high recommendations and
                referrals. Our clients hail from different domains.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-partnership-2975816-2476892.png"
              style={{ marginTop: '50px' }}
              alt="Global Partnership"
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR GOAL</h1>
              <h2>Same Quality at Low Cost</h2>
              <p>
                We have a unique and revolutionary business principle: ‘Same
                quality but significantly lower cost’. We aim to fulfill the
                long-standing outsourcing vacuum felt by Small Medium
                Enterprises across the country who, till now, were dependent
                mostly on offshore freelancers. The hired professionals match
                their western counterparts in skills, qualifications, and
                experience along with the added advantage of attractive low
                costs.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/business-goal-4352585-3618767.png"
              style={{ marginTop: '80px' }}
              alt="Business Goal"
            />
          </div>
          <div className="container">
            <div>
              <h1>OUR STRENGTHS</h1>
              <h2>Intelligent Use of Technology and Human Resources</h2>
              <p>
                We provide every client with a dedicated, full-time work-from-home team
                from their comfortable place. To successfully achieve this
                objective, we rely on management, infrastructure, hardware, and
                the latest technology to bridge physical distance and time zone
                differences. We provide the experience of making employees work
                from home for the company as real as they work in the company.
              </p>
            </div>
            <img
              src="https://cdni.iconscout.com/illustration/premium/thumb/teamwork-3560853-2989144.png"
              alt="Teamwork"
            />
          </div>
        </div>

        <div id="third" className="reveal">
          <h3 style={{ textAlign: 'center' }}>OUR PROCESS</h3>
          <h1 style={{ textAlign: 'center' }}>
            Driving Client Results Utilizing New Innovation Perspectives
          </h1>
          <div id="third_cards">
            <div>
              <h2>End to End Solutions and Services Guaranteed</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Ahead of The Curve We Future-proof Your IT</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Providing Excellent IT Solutions Tailored For Your Success</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
            <div>
              <h2>Tech Support and Software Development</h2>
              <p>
                Fusce nec tellus sed augue semper porta. Mauris massa.
                Vestibulum lacinia arcu eget nulla. Per inceptos himenaeos.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
