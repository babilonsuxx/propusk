import React from 'react';
import { rerenderEntireTree } from "../render";
import { 
	InfoRow, 
	Progress, 
	Panel, 
	PanelHeader, 
	Button, 
	Div, 
	PanelHeaderBack, 
	Group, 
	FormLayout, 
	FormLayoutGroup, 
	Input } from '@vkontakte/vkui';


const PanelElse = (props) => {
	props.formData.progress = 75;
	console.log(props.formData);	

	const targetChange =e=> {
		let input=e.currentTarget;
		props.formData.target=input.value;
		rerenderEntireTree(props.formData);
	}

	const adressChange=e=>{
		let input=e.currentTarget;
		props.formData.adress=input.value;
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
					<FormLayoutGroup top="Цель выхода:">
						<Input  type="text"
						maxLength="20"						 
						placeholder="Поездка на дачу" 
						defaultValue={props.formData.target}
						onChange={targetChange}
						/>
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Адрес назначения:">
						<Input   type="text" 						 
						placeholder="Опалиха, Пришвина, 11" 
						defaultValue={props.formData.adress}
						onChange={adressChange}
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



export default PanelElse;