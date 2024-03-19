import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "asdfadfs",
      label: "Can I use React on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "asdfadfs2",
      label: "Can I use Javascript on a project?",
      content: "You can use React on any project you want.",
    },
    {
      id: "asdfadfs3",
      label: "Can I use CSS on a project?",
      content: "You can use React on any project you want.",
    },
  ];
  return <Accordion items={items} />;
}

export default App;
