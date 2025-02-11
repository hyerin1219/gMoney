import { useLoginCheck } from "../../src/components/common/componentWrap/hocs";
import RegistrationComponent from "../../src/components/units/registration/registrationComponent";

export default function RegistrationPage() {
  useLoginCheck();
  
  return <RegistrationComponent />;
}
