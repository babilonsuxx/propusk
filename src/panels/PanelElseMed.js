import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';


const PanelElseMed = (props) => {
	props.formData.progress = 75;
	console.log(props.formData);	
	//получаем и выводим ИНН
	const bDateChange =e=> {
		let input=e.currentTarget;
		props.formData.bDate=input.value;
		rerenderEntireTree(props.formData);
	}
	//получаем и выводим краткое наименование
	const orgNameChange=e=>{
		let input=e.currentTarget;
		props.formData.orgName=input.value;
		rerenderEntireTree(props.formData);
	}

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={
					<PanelHeaderBack onClick={() => props.go('panelTransport')} />
				}>
				Дополнительные данные
		</PanelHeader>
			<Group>
				<Div>
					<InfoRow header="Прогресс">
						<Progress value={props.formData.progress} />
					</InfoRow>
				</Div>
				

				<FormLayout>
					<FormLayoutGroup top="Ваша дата рождения:">
						<Input  type="text"						 
						placeholder="15.08.1969" 
						defaultValue={props.formData.bDate}
						onChange={bDateChange}
						/>
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Краткое наименование Мед. организации:">
						<Input   type="text" 						 
						placeholder="ГУЗ Больница № 16" 
						defaultValue={props.formData.orgName}
						onChange={orgNameChange}
						/>
					</FormLayoutGroup>
				</FormLayout>
				<Div>
					<Button size="xl" level="2" onClick={() => props.go('panelResult')} id='nextBtn' >
						Перейти к результату
				</Button></Div>
			</Group>
		</Panel>
	);
};



export default PanelElseMed;