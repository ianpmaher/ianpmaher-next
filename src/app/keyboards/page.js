import KeyboardsList from "./KeyboardLists";

const KeyboardPage = (props) => {
  return (
    <div>
      <h1>Mechanical Keyboards</h1>
      <p>They click and clack.</p>
      <p className="sick-animation">They thock.</p>
      <KeyboardsList />
    </div>
  );
};

export default KeyboardPage;
