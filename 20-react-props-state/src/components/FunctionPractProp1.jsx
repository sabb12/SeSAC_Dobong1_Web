export function FunctionPractProp1({ food }) {
  return <div>{food}</div>;
}
export function FunctionPractProp2({ title, author, price, type }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "RGB(245,245,220)",
        width: 300,
        gap: 5,
      }}
    >
      <div>{title}</div>
      <img
        src="https://contents.kyobobook.co.kr/sih/fit-in/400x0/pdt/9791158511906.jpg"
        width={100}
        height={100}
      />
      <div>
        <h3>나의 하루는 4시 40분에 시작된다</h3>
        <div>저자:{author}</div>
        <div>판매가:{price}</div>
        <div>구분:{type}</div>
      </div>
    </div>
  );
}
