interface Props {
  text: string;
  children?: React.ReactNode;
}

function Title(props: Props) {
  return (
    <h1 className="text-center m-3">
      {props.text}
      <span>
        <small className="text-muted d-block">{props.children}</small>0
      </span>
    </h1>
  );
}

export default Title;
