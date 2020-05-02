import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup,  Input } from '@vkontakte/vkui';


const PanelElseWork = (props) => {
	props.formData.progress = 75;
	console.log(props.formData);	
	//получаем и выводим ИНН
	const innChange =e=> {
		let input=e.currentTarget;
		props.formData.inn=input.value;
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
				Сведения о работе
		</PanelHeader>
			<Group>
				<Div>
					<InfoRow header="Прогресс">
						<Progress value={props.formData.progress} />
					</InfoRow>
				</Div>
				

				<FormLayout>
					<FormLayoutGroup top="ИНН организации:">
						<Input  type="text"						 
						placeholder="ИНН (не обязателен для мед. организаций)" 
						defaultValue={props.formData.inn}
						onChange={innChange}
						/>
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Краткое наименование организации:">
						<Input   type="text" 						 
						placeholder="ИП Стабильность" 
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



export default PanelElseWork;