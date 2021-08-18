import React, { useState } from 'react';
import './App.css';
import Odai from './odai.json'

const odaiList = Odai.odai;

type Props = {
  name: string
}

const Header = () => {
  return (
    <h1>{ "自己紹介お題ジェネレータ" }</h1>
  );
}

const Title = (props: Props) => {
  return (
    <h2>はじめまして、私は「{props.name}」です！</h2>
  );
}

type InputProps = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, onChange}: InputProps) => {
  return (
    <p>
      <label>
        名前：<input type="text" value={value} onChange={onChange}></input>
      </label>
    </p>
  );
}

const TalkThemeList = (props: any) => {
  return (
    <div>
      <h3>お題一覧</h3>
      <ul>
          {props.list.map((odai: string) => (
            <li>{odai}</li>
          ))}
        </ul>
    </div>
  );
}


const TalkTheme = () => {
  const [index, setIndex] = useState(0);
  const clickChange = () => {
    setIndex(index<odaiList.length-1?index+1:0);
    // odaiList.splice(index-1, 1);  // リストから消していくけど、Listの方も更新する必要がある
  }
  return (
    <div>
      <h2>お題：{odaiList[index]}</h2>
      <div className="answerButton" onClick={clickChange}>答える</div>
      <div className="passButton" onClick={clickChange}>パス</div>
    </div>
  );
}

const App = () => {
  const [name, setName] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <Input value={name} onChange={handleChange}/>
      <Title name={name} />
      <TalkTheme />
      <TalkThemeList list={odaiList} />
    </div>
  );
}

export default App;
