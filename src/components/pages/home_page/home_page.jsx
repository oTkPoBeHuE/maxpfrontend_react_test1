import React, { PureComponent } from 'react';

const specificationURL = 'https://vk.com/@maxpfrontend-testovoe-zadanie-1';
const communityURL = 'https://vk.com/maxpfrontend';
const vkURL = 'https://vk.com/otkpobehue';

export default () => (
	<blockquote class="blockquote text-center">
		<p>
			Данный проект выполнен в рамках <a href={specificationURL}> тестового задания </a>
			<br /> сообщества{' '}
			<a href={communityURL}>
				<i>Обучение “Без воды” - Frontend / React / Redux</i>
			</a>.
		</p>
		<footer class="blockquote-footer">
			<a href={vkURL}>Пахотин Иван</a> <time datetime="2018-05-19">19 мая 2018</time>
		</footer>
	</blockquote>
);
