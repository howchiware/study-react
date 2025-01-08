import { useState } from "react";

import { EXAMPLES } from "../data";
import TabButton from './TabButton.jsx';
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {

    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
        console.log(selectedTopic);
    }

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
        <Section title="Examples" id="examples">
            {/* {tabContent}를 이곳에 붙인 이유: 목적이 모든 종류의 탭에 적용되어 앱의 다양한 위치에 있는 내용을 제어하기 위함함  */}
            <Tabs
                buttonsContainer="menu"
                buttons={
                    <>
                        <TabButton isSelected={selectedTopic === 'components'} onClick={() => handleSelect('components')}>Components</TabButton>
                        <TabButton isSelected={selectedTopic === 'jsx'} onClick={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton isSelected={selectedTopic === 'props'} onClick={() => handleSelect('props')}>Props</TabButton>
                        <TabButton isSelected={selectedTopic === 'state'} onClick={() => handleSelect('state')}>State</TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    );
}