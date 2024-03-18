// 방법 1
// export function FunctionProps(props) {
//   // props는 이렇게 생겼다
//   // props = {
//   //     name: "사과",
//   //     price: 1000,
//   //     number: 5,
//   // }
//   return (
//     <div>
//       <h5>{props.name}</h5>
//       <p>
//         {props.number}개에 {props.price}원
//       </p>
//     </div>
//   );
// }

// 방법 2
// export function FunctionProps(props) {
//   const { name, number: count, price } = props;
//   return (
//     <div>
//       <h5>{name}</h5>
//       <p>
//         {count}개에 {price}원
//       </p>
//     </div>
//   );
// }

// 방법 3
export function FunctionProps({ name, number, price }) {
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
    </div>
  );
}

export function FunctionProps2(props) {
  const { name, number, price } = props;
  return (
    <div>
      <h5>{name}</h5>
      <p>
        {number}개에 {price}원
      </p>
      <div>{props.children}</div>
    </div>
  );
}

// props로 넘겨 주지 않고 사용하기
// default props 설정하기
// 컴포넌트이름.defaultProps={정의할 데이터를 객체로 표현}
FunctionProps2.defaultProps = {
  number: 3,
  name: "샤인머스캣",
};
