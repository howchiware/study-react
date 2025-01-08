import reactImg from '../../assets/react-core-concepts.png';
import './Header.css';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    {/* JSX 코드에서 빼서 변수 또는 상수에 저장할 수도 있음음 */}
    const description  = reactDescriptions[genRandomInt(2)];
      
      return (
        <header>
          <img src={reactImg} alt="Stylized atom" />
          <h1>React Essentials</h1>
          <p>
            {/* getRandomInt() 함수는 생성하고자 하는 값의 최대치인 한 가지 인수를 받아들임 */}
            {/* 인덱스가 2까지니까 .. 2! */}
            {description} React concepts you will need for almost any app you are going to build!
          </p>
        </header>
      );
    }