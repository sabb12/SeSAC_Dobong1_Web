import classNames from "classnames";
import Names from "classnames/bind";
import style from "../styles/style.module.css";

export default function ModuleCss() {
  const setting = Names.bind(style);
  const isTrue = true;
  const value = "first";

  return (
    <div className={style.container}>
      <h4>.module.css 적용</h4>
      <div className={style.box2}>
        <div>안녕하세요</div>
      </div>
      <br />
      <div className={`${style.first} ${style.second}`}>
        클래스 여러개 지정1 (백틱사용)
      </div>
      {/* ["first", "second"] >> "first-second"*/}
      <div className={[style.first, style.second].join(" ")}>
        클래스 여러개 지정2(join 이용)
      </div>
      <div className={classNames(style.first, style.second)}>
        classnames 메소드 이용(install 필요)
      </div>
      <div className={setting("first", "second")}>classnames 모듈 사용1</div>
      <div className={setting("first", { second: true })}>
        classnames 모듈 사용2
      </div>
      <div className={setting(value, { second: isTrue })}>
        classnames 모듈 사용2
      </div>
    </div>
  );
}
