import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup, Input } from '@vkontakte/vkui';


const panelTransport = (props) => {
	props.formData.progress = 50;

	const carNumberChange=e=>{
		let input=e.currentTarget;
		props.formData.carNumber=input.value;
		rerenderEntireTree(props.formData);
	}
	const troykaChange=e=>{
		let input=e.currentTarget;
		props.formData.troyka=input.value;		
		rerenderEntireTree(props.formData);
	}
	const strelkaNumberChange=e=>{
		let input=e.currentTarget;
		props.formData.strelka=input.value;		
		rerenderEntireTree(props.formData);
	}
	const chooseElse=e=>{
		let whereWeGo='';
		
		if (props.formData.targetCode==1) {
			whereWeGo='panelElseWork'
		}
		else if (props.formData.targetCode==2) {
			whereWeGo='panelElseMed'
		}
		else if (props.formData.targetCode==3) {
			whereWeGo='panelElse'
		} else {
			whereWeGo='panelStart'
		}
		//console.log(whereWeGo);
		 props.go(whereWeGo);
	}


	return (

<Panel id={props.id}>
	<PanelHeader
		left={
			<PanelHeaderBack onClick={() => props.go('panelDocument')} />
		}>
		Данные о транспорте
		</PanelHeader>
	<Group>

		<Div>
			<InfoRow header="Прогресс">
				<Progress value={props.formData.progress} />
			</InfoRow>
		</Div>
		<FormLayout>
			<FormLayoutGroup top="Номер транспортного средства (если используется):">
				<Input type="text" 
				defaultValue={props.formData.carNumber} 
				placeholder="Р043МП177" 
				onChange={carNumberChange}
				/>
			</FormLayoutGroup>
		</FormLayout>

		<FormLayout>
			<FormLayoutGroup top="Номер карты «Тройка» (если есть):">
				<Input type="text" 
				defaultValue={props.formData.troyka} 
				placeholder="1234567890" 
				onChange={troykaChange} />
			</FormLayoutGroup>
		</FormLayout>
		<FormLayout>
			<FormLayoutGroup top="Номер карты «Стрелка» (если есть):">
				<Input type="text" 
				defaultValue={props.formData.strelka} 
				placeholder="12345678901" 
				onChange={strelkaNumberChange}
				/>
			</FormLayoutGroup>
		</FormLayout>
		<Div>
			<Button size="xl" level="2" onClick={chooseElse} id='nextBtn' >
				Дальше
				</Button></Div>
	</Group>
</Panel>
)}

export default panelTransport;