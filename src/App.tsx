import React from 'react';
import logo from './logo.svg';
import './App.css';
type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

type twoWayPlayer = Pitcher1 & Batter1;
function App() {
  const isFlag1: boolean = true;
  const isFlag2: boolean = false;
  const num1: number = 10;
  const str1: string = 'aaa';
  // const str2: string = -10;
  // const str3: string = false;
  let temp: string[] = ['adf', 'kdk', 'iku'];
  let temp2: Array<string> = ['adf', 'kdk', 'iku'];

  // let taple: [string, number] = ['satake', 9999, true];

  let profile1: any = 123456;
  let profile2: any = '123456';
  let profile3: any = false;

  let profile4: any = ['asdf', 'adf'];

  // const test = (): void => {
  //   return 'Hello';
  // };

  const test1 = (): null => {
    return null;
  };

  const test2 = (): undefined => {
    return undefined;
  };

  // const error = (number: string): never => {
  //   throw new Error();
  // };

  // console.log(error);

  type TestType = {
    id: number;
    name: string;
    age: number;
  };

  interface TestTypeInterface {
    id: number;
    name: string;
  }

  let object1: TestTypeInterface = { id: 1, name: 'satake' };

  let object2: {
    id: number;
    name: string;
  } = { id: 1, name: 'satake' };

  const kansu = (): number => 43;

  let numberAny: any = kansu();
  let numberUnknown: any = kansu();

  let sum1 = 10 + numberAny;
  let sum2 = 10 + numberUnknown;

  let sasaki: twoWayPlayer = {
    throwingSpeed: 150,
    battingAverage: 3.12,
  };

  let name: string | number = 'sasaki';
  name = 100;
  // name = false;

  let nitiyoubi: '日' = '日';
  let yes: true = true;
  let week: '日' | '月' | '火' | '水' | '木' | '金' | '土' = '日';

  enum Month {
    January = 1,
    February,
    March,
    April,
    May,
    June,
    July,
    August,
    September,
    November,
    December,
  }

  console.log(Month.April);

  // pra1
  type MondaiType = {
    id: number;
    name: string;
    url: string;
    isStart: false;
  };

  interface MondaiInterface {
    id: number;
    name: string;
    url: string;
    isStart: false;
  }

  const mondai: MondaiInterface = {
    id: 1,
    name: 'mondai',
    url: 'https://mondai.com',
    isStart: false,
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
