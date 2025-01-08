import { useState } from 'react'; // 리액트 hook.
// use로 시작하는 모든 함수는 react hook

// import componentsImg from './assets/components.png';
// 이름이 부여된 export이므로 이름을 중괄호로 감싸야함
import { CORE_CONCEPTS } from './data.js';
import Header from './components/Header/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';
import TabButton from './components/TabButton.jsx';
import { EXAMPLES } from './data.js';



function App() {
  // 두번째 요소인 setSelectedTopic는 함수
  // selectedTopic: 현재 선택된 주제를 저장
  // setSelectedTopic: selectedTopic의 값을 업데이트하는 함수
  // 초기값이 'Please click a button' 인것.
  //
  const [selectedTopic, setSelectedTopic] = useState(); // 컴포넌트 함수 안에서 바로 호출해야 하며 다른 코드 안에 중첩되면 안됨

  //let tabContent = 'Please click a buuton';

  //onSelect 값으로 설정됨
  // 어떤 버튼이 클릭된 것인지 알아야 하기 위해 매개변수를 작성
  // selectedButton
  // 컴포넌트 버튼을 클릭하면 컴포넌트를, JSX 버튼을 클릭하면 JSX를 선택하는 문자열(String)이어야 함
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx','props', 'state'
    {/* 버튼에 따라 다른 값이 나오는지 확인할 수 있음 */ }
    // console.log(selectedButton)

    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  console.log('APP COMPONENT EXECUTING');

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent =
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>
            {EXAMPLES[selectedTopic].code}
          </code>
        </pre>
      </div>
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>

          <ul>
            {/* 자바스크립트 배열은 내장된 매핑 방법을 통해 변환될 수 있으며
            현존하는 배열에 기반하여 새로운 배열을 제공함 */}

            {/* conceptItem 함수는 배열의 모든 항목에 대해 한 번 실행되므로 이 목록을 동적으로 생성하는 빠르고 쉬운 방법 */}
            {/* .map 메소드를 사용하여 데이터를 JSX 코드로 변환 */}
            
            {/* 키 prop 값은 목록 항목을 식별할 수 있는 고유한 값이어야 함
              시스템 내부에서 이 목록을 효율적으로 렌더링하고 업데이트하기 위해 리액트가 사용함
              따라서 여기 있는 모든 항목에는 다른 제목이 있기때문에 title을 고유한 값으로 사용할 수 있음.
              이 고유한 값이 아이템들을 구별하는데 사용할 수 있는 값임 */}
            {CORE_CONCEPTS.map( (conceptItem) => (<CoreConcept key={conceptItem.title} { ...conceptItem} /> ))}

          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* 컴포넌트 열림과 닫힘 텍스트 사이에 무언가를 전달하면 리액트가 출력할 위치를 모르기 때문에
              자동적으로 이 내용이 출력되지 않음.  */}

            {/*<TabButton label="Components"/>*/}

            {/* 익명의 화살표 함수 만들기 */}
            {/* 화살표 함수로 인해 onSelect에 값으로 실행되는 것을 확실하게 함. onClick에서도 실행. */}
            <TabButton isSelected={selectedTopic === 'components'}
              onSelect={() => handleSelect('components')}>Components
            </TabButton>

            {/* 익명 함수 만들기 
              <TabButton onSelect={function() {handleSelect}}>JSX</TabButton>
              */}

            <TabButton isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
            <TabButton isSelected={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>

          {/*{selectedTopic}*/}

          {/* 초기값을 설정하지 않기때문에 이제 selectedTopic 상태를 사용할 수 있음.
              그리고 이것이 undefined(정의되지 않음)과 동일한지 비교하는것*/}
          {/* 첫번째 방법 
                {selectedTopic === undefined} <p>Please select a topic</p> 
              */}
          {/* 선택한 주제가 true가 아니라면 대체 텍스트를 보여주기 위해 삼항 연산자를 사용할 수 있음 
              null은 단순히 아무것도 렌더링되지 않는 것*/}

          {/* && 연산자를 사용하면 : null 제거해도 됨 */}
          {tabContent}
        </section>

        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;