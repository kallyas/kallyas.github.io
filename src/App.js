import { Navbar, Introsection, About, Experience, Skills, Projects } from './Components';

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
      </main>
    </div>
  );
}

export default App;
