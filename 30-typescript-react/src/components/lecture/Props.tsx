interface Props1 {
  name: string;
}

export function Props1({ name }: Props1) {
  return <h2>hello {name}</h2>;
}

interface Props2 {
  width: string;
  height: string;
  color: string;
}

export function Props2(props: Props2) {
  const divStyle = {
    width: props.width,
    height: props.height,
    backgroundColor: props.color,
  };
  return <h2 style={divStyle}></h2>;
}

interface Props3 {
  width: number;
  height: number;
  color?: string;
  text: string;
}

export function Props3(props: Props3) {
  const { width, height, color, text } = props;
  const divStyle: object = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color ? color : "gray",
    textAlign: "center",
    lineHeight: `${height}px`,
  };
  return <h2 style={divStyle}>{text}</h2>;
}
