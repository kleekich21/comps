import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button secondary outline rounded>
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>Checkout!</Button>
      </div>
      <div>
        <Button secondary outline>
          LogIn
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Cancel!
        </Button>
      </div>
    </div>
  );
}

export default App;
