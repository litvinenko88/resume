// Вот пример компонента React, который изменяет позицию
//  "relative right" при каждом клике на кнопку. Условия 
//  для количества объектов в массиве также учтены:

jsx
import React, { useState } from 'react';

function App() {
  const [position, setPosition] = useState(0);
  const objects = []; // Предположим, что здесь у нас есть массив из объектов

  const handleClick = (button) => {
    if (button === 'next') {
      if (position + 1 < objects.length) {
        setPosition(position + 1);
      }
    } else if (button === 'previous') {
      if (position - 1 >= 0) {
        setPosition(position - 1);
      }
    }
  };

  const style = {
    position: 'relative',
    right: position * 100 + '%',
    transition: 'right 0.5s ease-in-out', // Анимация для плавного перехода
  };

  return (
    <div>
      <div className="object" style={style}>
        {/* Здесь отображается текущий объект из массива */}
      </div>
      <button onClick={() => handleClick('previous')}>Previous</button>
      <button onClick={() => handleClick('next')}>Next</button>
    </div>
  );
}

export default App;

// В этом примере используется хук useState, 
// чтобы хранить позицию объекта и функция setPosition 
// для ее обновления при клике на кнопку. Позиция обновляется 
// при каждом клике на "Previous" или "Next", но только если 
// количество объектов в массиве позволяет (проверка на objects.length). 
// Затем используется стиль CSS для изменения позиции объекта на странице.