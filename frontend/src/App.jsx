import Main from "./components/MainPage";
import Header from "./components/Header";

function App() {

  let links = [
    { label: 'Home', link: '#home', active: true },
    { label: 'About', link: '#about' },
    { label: 'Portfolio', link: '#portfolio' },
    { label: 'Contact Us', link: '#contact-us' },
  ];

  return (
    <div className="App">
      <Header links={links}></Header>
      <Main></Main>
    </div>
  );
}

export default App;
