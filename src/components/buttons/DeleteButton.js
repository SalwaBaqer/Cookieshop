import React from "react";
import { DeleteItemStyled } from "../../styles";

import funkoStore from "../../stores/funkoStore";

const DeleteButton = ({ funkoId }) => {
  return (
    <DeleteItemStyled
      src="https://lh3.googleusercontent.com/proxy/2kgbhmoR97CexSEalG7KBJC3D09xg_eWybmqktwpkqK-Hpfz3rX3l0KTchU3WJ9YNisSGQg8fGfy0tWmELdI2aMsuiAPDGubg5Dy12FWJzgaOg6xsdkhwA-ZCeQFFzbrBI1X"
      alt="Delete"
      onClick={() => funkoStore.deleteFunko(funkoId)}
    />
  );
};

export default DeleteButton;
