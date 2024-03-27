import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>here is an import agreement to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
        diam. Cras eget enim at enim laoreet maximus. Pellentesque iaculis quam
        quis lectus tristique aliquet. Duis sollicitudin nisi at est accumsan
        imperdiet. Pellentesque vitae sem at est pulvinar tincidunt. Praesent
        convallis purus diam, ac semper nisl aliquam et. Ut et consectetur nisi,
        ut sodales eros. Sed aliquet velit vel ex rutrum, eu gravida leo
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse vitae ante posuere, tempor nisl dignissim, aliquet arcu.
        Phasellus consectetur malesuada arcu, quis fermentum massa iaculis eu.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
        diam. Cras eget enim at enim laoreet maximus. Pellentesque iaculis quam
        quis lectus tristique aliquet. Duis sollicitudin nisi at est accumsan
        imperdiet. Pellentesque vitae sem at est pulvinar tincidunt. Praesent
        convallis purus diam, ac semper nisl aliquam et. Ut et consectetur nisi,
        ut sodales eros. Sed aliquet velit vel ex rutrum, eu gravida leo
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse vitae ante posuere, tempor nisl dignissim, aliquet arcu.
        Phasellus consectetur malesuada arcu, quis fermentum massa iaculis eu.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
        diam. Cras eget enim at enim laoreet maximus. Pellentesque iaculis quam
        quis lectus tristique aliquet. Duis sollicitudin nisi at est accumsan
        imperdiet. Pellentesque vitae sem at est pulvinar tincidunt. Praesent
        convallis purus diam, ac semper nisl aliquam et. Ut et consectetur nisi,
        ut sodales eros. Sed aliquet velit vel ex rutrum, eu gravida leo
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse vitae ante posuere, tempor nisl dignissim, aliquet arcu.
        Phasellus consectetur malesuada arcu, quis fermentum massa iaculis eu.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
        diam. Cras eget enim at enim laoreet maximus. Pellentesque iaculis quam
        quis lectus tristique aliquet. Duis sollicitudin nisi at est accumsan
        imperdiet. Pellentesque vitae sem at est pulvinar tincidunt. Praesent
        convallis purus diam, ac semper nisl aliquam et. Ut et consectetur nisi,
        ut sodales eros. Sed aliquet velit vel ex rutrum, eu gravida leo
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse vitae ante posuere, tempor nisl dignissim, aliquet arcu.
        Phasellus consectetur malesuada arcu, quis fermentum massa iaculis eu.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non dui
        diam. Cras eget enim at enim laoreet maximus. Pellentesque iaculis quam
        quis lectus tristique aliquet. Duis sollicitudin nisi at est accumsan
        imperdiet. Pellentesque vitae sem at est pulvinar tincidunt. Praesent
        convallis purus diam, ac semper nisl aliquam et. Ut et consectetur nisi,
        ut sodales eros. Sed aliquet velit vel ex rutrum, eu gravida leo
        pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
        Suspendisse vitae ante posuere, tempor nisl dignissim, aliquet arcu.
        Phasellus consectetur malesuada arcu, quis fermentum massa iaculis eu.
      </p>
    </div>
  );
}

export default ModalPage;
