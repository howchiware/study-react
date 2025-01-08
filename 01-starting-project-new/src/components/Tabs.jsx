export default function Tabs({ children, buttons, buttonsContainer }) {
    {/* buttonsContainer라는 내장 요소를 찾는 것이 아니라 속성 안에 있는 값을 검색하여
    커스텀 컴포넌트로 식별하게끔 하는 것 */}
    {/* 대문자로 시작해야 함 ButtonContainer 안에 buttonsContainer가 있는 것*/ }
    const ButtonContainer = buttonsContainer;

    return (
        <>
            {/* 이 래퍼 요소가 포함되어 있어야만 분리된 버튼 및 내용이 시행되기 때문 */}
            <ButtonContainer> {buttons}</ButtonContainer>
            {children}
        </>
    );
}