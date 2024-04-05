import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface Props {
  imgSrc: string;
  title: string;
  desc: string;
}

const CardDiv = styled.div`
  width: 240px;
  background-color: whitesmoke;
  height: 300px;
  margin: 1rem;
  box-shadow: 0px 0px 10px #aaaa;
  border-radius: 10px;
  padding: 0 0.5rem;
  cursor: pointer;
`;

interface divProps {
  src: string;
}
const ImgDiv = styled.div<divProps>`
  width: 80%;
  height: 150px;
  border: 1px solid black;
  margin: 0 auto;
  background-image: url(${(props: divProps) => props.src});
  background-size: cover;
  background-position: center;
`;

const DescP = styled.div`
  margin-top: auto 0.5rem;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; // 2줄이 넘어가면 맡줄임표시
`;

export default function Card({ imgSrc, title, desc }: Props) {
  const navi = useNavigate();
  return (
    // 현재위치에서 +/title로 이동시키기 위해서
    <CardDiv onClick={() => navi(`${title}`)}>
      <ImgDiv src={imgSrc}>imgSrc</ImgDiv>
      <h3>{title}</h3>
      <DescP>{desc}</DescP>
    </CardDiv>
  );
}
