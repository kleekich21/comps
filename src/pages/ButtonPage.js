import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("click!@");
  };
  return (
    <div>
      <div>
        <Button
          secondary
          outline
          rounded
          onClick={handleClick}
          className="mb-5"
        >
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Checkout!
        </Button>
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

export default ButtonPage;
