export default function Log( {turns}) {

    return (
        <ol id="log">
            {/** 각각의 데이터는 turn에 저장, `` 템플릿 리터럴 문법법 */}
            {turns.map(turn => (<li key={`${turn.square.row}${turn.square.col}`}>
                {turn.player} selecxted {turn.square.row}, {turn.square.col}
            </li>
            ))}
        </ol>
    );
}