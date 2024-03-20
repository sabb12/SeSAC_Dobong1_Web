import { FunctionProps } from "./FunctionProps";

export default function PropsMap({ arr }) {
  console.log("잘들어오나요? ", arr);
  return (
    <div>
      {arr.map((element, idx) => {
        return (
          <ul key={idx}>
            <li>이름: {element.name}</li>
            <li>개수: {element.number}</li>
            <li>각격: {element.price}</li>
          </ul>
        );
      })}
      {arr.map((element, idx) => {
        return (
          <FunctionProps
            name={element.name}
            price={element.price}
            number={element.number}
          />
        );
      })}
      {!arr && <h1>배열이 전달되지 않았습니다</h1>}
    </div>
  );
}
