export default function SumJSX() {
  function sum(a, b) {
    return a + b;
  }

  let a = 9;
  let b = 4;

  return (
    <div>
      <h2>{sum(3, 5) === 8 ? "정답입니다" : "오답입니다!"}</h2>
      <h2>{a > b && "a가 b보다 큽니다"}</h2>
    </div>
  );
}
