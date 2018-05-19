import React from 'react';
import News from '../../news/news';

export default () => (
	<div>
		<News title={'Тестирование компонента новостей.'}> На данной странице тестируется компонент с новостями.</News>
		<News>
			По умолчанию атрибут <code>title</code> у компонента <code>News</code> установлен как <i>Good News!</i>
		</News>
		<News title={'Да здравствует Bootstrap!'}>
			<b>Bootstrap</b> позволил сделать красивые блоки с новостями. Да здравствует <b>Bootstrap</b>! Да здравствуют
			программисты <b>twitter</b>!
		</News>
	</div>
);
