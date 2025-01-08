/*
/* 모든 커스텀 컴포넌트가 props을 받기 때문에 여기도 props를 받아야 함 
export default function TabButton(props) {
    /* children prop은 컴포넌트 텍스트 사이 내용을 의미(지금 예시로는 Components) 
    return <li><button>{props.children}</button></li>;
}
*/

/*두번째 방법 
onClick 이름은 마음대로. children은 이름 바꿀 수 없는 prop임 */
export default function TabButton({ children, onSelect, isSelected}) {
    //console.log('TABBUTTON COMPONENT EXECUTING');

    return (
        <li>
            {/* handleClick() 이런식으로 괄호를 추가하면 안됨. 
        함수를 값으로 사용하고 싶기 때문에 함수의 이름을 사용해야 함 */}

            {/* index.css의 #examples menu button.active */}
            {/* 버튼이 선택 안됐다면 클래스가 없는 것이고 선택이 됐으면 클래스가 있는것 */}
            <button className={isSelected ? 'active' : undefined} onClick={onSelect}>
                {children}
            </button>
        </li>
    );
}


/* 세번째 방법. label 추가
<TabButton label="Components"> 
export default function TabButton({label}) {
    return (
    <li>
        <button>
            {label}
        </button>
    </li>
    );
}*/