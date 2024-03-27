import { useForm } from "react-hook-form";

export default function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onValid = (data) => {
    console.log("valid: ", data);
  };

  const onInvalid = (data) => {
    console.log("invalid: ", data);
    console.log(data.username?.message);
  };

  return (
    <>
      <h1>useForm 사용해보기</h1>
      {/*
        handleSubmit(func1[, func2]: 인자로 두 개의 함수를 받을 수 있음)
        - func1: 필수, 유효할 때 실행
        - func2: 선택, 유효하지 않을 때 실행
      */}
      <form onSubmit={handleSubmit(onValid, onInvalid)}>
        {/* <form> */}
        <input
          type="text"
          placeholder="username"
          {...register("username", {
            required: "이름을 입력해주세요.",
            minLength: {
              value: 2,
              message: "이름은 필수 항목입니다",
            },
          })}
          onChange={(e) => {}}
        />
        {errors.username?.message}
        <br />
        <input
          type="number"
          placeholder="userage"
          {...register("userage", {
            required: "0이상의 숫자만 입력 가능",
            validate: {
              number: (value) => {
                return value > 0 || "0이상의 숫자만 입력 가능.";
              },
            },
          })}
          onChange={(e) => {}}
        />
        {errors.userage?.message}
        <button type="submit">제출</button>
      </form>
    </>
  );
}
