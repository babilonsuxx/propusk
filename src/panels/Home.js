import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import { FormLayout, FormLayoutGroup, Input, Select } from '@vkontakte/vkui';

const Home = ({ id, go, fetchedUser,handleSeriaChange }) => (

	<Panel id={id}>

		{fetchedUser &&
			<Group>
				<Cell
					before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200} /> : null}
					description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
				>
					{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
				</Cell>
			</Group>}
		<Group>
			<Cell>
			want sleep
				</Cell>

		</Group>

		<Group>
			<FormLayout>
				<FormLayoutGroup top="Цель получения пропуска:">
					<Select placeholder="работа/мед.организация/другое" id="target">
						<option value="1">Цифровой пропуск для работающих</option>
						<option value="2">Разовая поездка для посещения медицинской организации</option>
						<option value="3">Разовая поездка в иных целях</option>
					</Select>
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Тип документа, удостоверяющего личность:">
					<Select placeholder="Паспорт/загран/другое..">
						<option value="1">Паспорт гражданина РФ</option>
						<option value="2">Иностранный паспорт </option>
						<option value="3">Иной документ</option>
					</Select>
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Тип документа, удостоверяющего личность:">
					<Select placeholder="Паспорт/загран/другое..">
						<option value="1">Паспорт гражданина РФ</option>
						<option value="2">Иностранный паспорт</option>
						<option value="3">Иной документ</option>
					</Select>
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Серия документа, удостоверяющего личность:">
					<Input type="text"  onChange={handleSeriaChange}  defaultValue=""/>
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Номер документа, удостоверяющего личность:">
					<Input type="text" defaultValue="" />
				</FormLayoutGroup>
			</FormLayout>

			<FormLayout>
				<FormLayoutGroup top="Номер транспортного средства (если используется):">
					<Input type="text" defaultValue="" />
				</FormLayoutGroup>
			</FormLayout>
			<FormLayout>

				<FormLayoutGroup top="Номер карты «Тройка» (если есть):">
					<Input type="text" defaultValue="" />
				</FormLayoutGroup>
			</FormLayout>
			<FormLayout>

				<FormLayoutGroup top="Номер карты «Стрелка» (если есть):">
					<Input type="text" defaultValue="" />
				</FormLayoutGroup>
			</FormLayout>
			<FormLayout>

				<FormLayoutGroup top="ИНН организации:">
					<Input type="text" defaultValue="" />
				</FormLayoutGroup>
			</FormLayout>
			<FormLayout>

				<FormLayoutGroup top="краткое наименование организации:">
					<Input type="text" defaultValue="" />
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
	handleSeriaChange: PropTypes.func.isRequired,
	
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	})
};

export default Home;
