import React from 'react';
import ReactDOM from 'react-dom';
//./Componets...이라고 쓰지 않아도 되는건 jsconfig에서 root를 src로 설정했기 때문이다.
import App from 'Components/App';

ReactDOM.render(<App />, document.getElementById('root'));
