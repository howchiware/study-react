{/* 개폐 중괄호는 첫 번째 매개변수의 함수를 구조 분해할 때 사용됨 */}
{/* 아래 속성과 같은 이름을 부여해야 함 */}
export default function CoreConcept({image, title, description}) {
  return (
  <li>
    <img src={image} alt={title} />
    <h3>{title}</h3>
    <p>{description}</p>
  </li>
  );
}