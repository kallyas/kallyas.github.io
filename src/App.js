import { Navbar, Introsection, About, Experience, Skills, Projects, Contact, Footer } from './Components';

function App() {
  return (
    <div className="App">
      <header className="header-global">
        <Navbar />
      </header>
      <main>
      <Introsection />
      <section className="section section-lg bg-primary-app pb-0">
        <About />
      </section>
      <div className="section section-lg bg-primary-app">
        <Experience />
      </div>
      <div className="section section-sm bg-primary-app">
        <Skills />
      </div>
      <div className="section section-lg bg-primary-app pb-0">
        <Projects />
      </div>
      <div className="section section-lg bg-primary-app">
        <Contact />
      </div>
      </main>
      <footer className="footer section section-sm bg-primary text-white">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
