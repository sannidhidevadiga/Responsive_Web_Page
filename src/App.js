import './App.css';

function App() {
  return (
    <div className="app">
      <header className="ep-header">
        <div className="header-container">
          <div className="logo">
            <img src="/logo1.png" alt="NAVEX Logo" />
          </div>
          <nav className="epNav">
            <a href="#">Make a Report</a>
            <a href="#">Follow up on a Report</a>
            <a href="#">Code of Conduct</a>
            <a href="#">FAQs</a>
          </nav>
        </div>
      </header>


      <main className="main-content">
        <section className="commitment">
          <h1>Our Commitment</h1>
          <p>
            <strong>_CLIENTNAME_</strong> is an organization with strong values of responsibility and integrity. 
            Our <a href="#">Code of Conduct</a> contains general guidelines for conducting business with the highest standards of ethics.
          </p>
          <p>
            <strong>_CLIENTNAME_</strong> is committed to an environment where open, honest communications are the expectation, not the exception. 
            We want you to feel comfortable in approaching your supervisor or management in instances where you believe violations of policies or standards have occurred.
          </p>
          <p>
            In situations where you prefer to place an anonymous report in confidence, you are encouraged to use this hotline, hosted by a third party hotline provider, EthicsPoint. 
            You are encouraged to submit reports relating to violations stated in our <a href="#">Code of Conduct</a>, 
            as well as asking for guidance related to policies and procedure and providing positive suggestions and stories.
          </p>
          <p>
            The information you provide will be sent to us by EthicsPoint on a totally confidential and anonymous basis if you should choose. 
            You have our guarantee that your comments will be heard.
          </p>
          <p>
            See the <a href="#">EthicsPoint FAQs</a> for more information.
          </p>
        </section>

        <aside className="report-box">
          <h2>To Make a Report</h2>
      <div className="report-option">
        <div className="report-icon-wrapper">
          <img src="/transparent-laptop.png" alt="Online icon" className="report-icon" />
        </div>
        <div className="report-option-content">
          <h3>Online</h3>
          <button>Make a Report</button>
        </div>
      </div>

      <div className="report-option">
        <div className="report-icon-wrapper">
          <img src="/transparent-phone.png" alt="Phone icon" className="report-icon" />
        </div>
        <div className="report-option-content">
          <h3>By Phone</h3>
        </div>
      </div>

        </aside>
      </main>

      <footer className="ep-footer">
        <div className="footer-container">
          <p><strong>EthicsPoint is NOT a 911 or Emergency Service:</strong></p>
          <p>
            Do not use this site to report events presenting an immediate threat to life or property. Reports submitted through this service may not receive an immediate response. If you require emergency assistance, please contact your local authorities.
          </p>
          <div className="footer-bottom">
        <p className="copyright">
          Copyright © 2000-2023 NAVEX Global, Inc. All Rights Reserved.
        </p>
        <div className="footer-links">
          <a href="#">Privacy Statement</a> | 
          <a href="#">Acceptable Use Policy</a> | 
          <a href="#">Cookie Statement</a> | 
          <a href="#">Contact NAVEX</a>
        </div>
      </div>

        </div>
      </footer>


    </div>
  );
}

export default App;
