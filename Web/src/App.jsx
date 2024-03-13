import S2DLogo from "./assets/S2D_Logo.webp"
import  "./styles.css" 

export default function App() {
  return (
    <>
    <link rel="stylesheet" href="./styles.css" />
    
    <div className="whole-page">
      <div className="Header">
        <div className="Logo-Div">
          <a href="#heading"><img className="Logo" src={S2DLogo} /></a>
        </div>
        
        <div className="Heading-Div" id = "heading">
          <h1 className="h1">StackTooDeep</h1>
        </div>
      </div>
    
      <div className="page">
        <div className="main-content">
        <div className="side-panel">
          <ul className="list">
          <li><a href="#Heading">StackTooDeep</a></li>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#challenges">Challenges</a></li>
            <li><a href="#prizes">Prizes</a></li>
            <li><a href="#faq">FAQs</a></li>
            <li><a href="#register">Register</a></li>
          </ul>
          </ul>
        </div>
        </div>
        <div className="rest-of-the-page">
        <h1>StackTooDeep</h1>  
        <hr></hr>  
        
        <main>
        <section className="about" id="about">
          <h2>About StackTooDeep</h2>
          <p>StackTooDeep is a hackathon focused on innovation in blockchain technology. We challenge developers, designers, and entrepreneurs to push the boundaries of what's possible with blockchain and build groundbreaking applications.</p>
        </section>

        <section className="challenges" id="challenges">
          <h2>Challenges</h2>
          <p>We offer a variety of challenges across different areas of blockchain development. Choose the one that excites you the most!</p>
          <ul>
            <li>DeFi: Build a new DeFi protocol or application.</li>
            <li>NFTs: Create innovative NFT use cases.</li>
            <li>Metaverse: Develop tools and experiences for the decentralized metaverse.</li>
            <li>Scalability: Design solutions for scalable blockchain applications.</li>
          </ul>
        </section>

        <section className="prizes" id="prizes">
          <h2>Prizes</h2>
          <p>Compete for exciting prizes and recognition in the blockchain community.</p>
          <ul>
            <li>1st Place: [Prize description]</li>
            <li>2nd Place: [Prize description]</li>
            <li>3rd Place: [Prize description]</li>
            <li>Community Choice Award: [Prize description]</li>
          </ul>
        </section>

        <section className="faq" id="faq">
          <h2>Frequently Asked Questions</h2>
          <ul>
            <li>**What are the eligibility criteria?**</li>
            <li>**What kind of support will be provided during the hackathon?**</li>
            <li>**Who are the judges?**</li>
            <li>**I have another question, how can I contact you?**</li>
          </ul>
        </section>

        <section className="register" id="register">
          <h2>Register for StackTooDeep</h2>
          <p>Don't miss your chance to be part of the future of blockchain. Register now!</p>
          <button>Register Now</button>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; StackTooDeep 2024</p>
      </footer>
          
        </div>  
      </div>
    </div>
    </>
  )
}