import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { FormLayout, FormLayoutGroup, Input,Select } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Введите данные11</PanelHeader>
		{fetchedUser &&
			<Group title="User Data Fetched with VK Bridge">
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}

		<Group title="Введите данные">
			<FormLayout>
				<FormLayoutGroup top="Цель получения пропуска:">
					<Select placeholder="работа/мед.организация/другое" id="targe1t">
						<option value="1">Цифровой пропуск для работающих</option>
						<option value="2">Разовая поездка для посещения медицинской организации</option>
						<option value="3">Разовая поездка в иных целях</option>
					</Select>
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Тип документа, удостоверяющего личность:">
				<Select placeholder="Паспорт/загран/другое">
				<option value="1">Паспорт гражданина РФ</option>
				<option value="2">Иностранный паспорт</option>
				<option value="3">Иной документ</option>
			</Select>
				</FormLayoutGroup>
			</FormLayout>

			
			<Div>
				<Button size="xl" level="2" onClick={go} data-to="persik">
					Скопировать
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
