import Button from "react-bootstrap/Button";

function PrimaryButton(props: any) {
    { textButton } = props
  return (
      <Button variant="primary">{textButton}</Button>
  );
}

export default PrimaryButton;
