import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup, Select, Input } from '@vkontakte/vkui';


const PanelDocument = (props) => {
	props.formData.progress = 25;
	
	
	//получаем и обновляем значение типа документа 
	const documentTypeChange = e => {
		let select = e.currentTarget;
		if (select.value !== '') {
			props.formData.documentType = select.value;			
		} else {
			props.formData.documentType = '';			
		}			
		rerenderEntireTree(props.formData);	
	};
	//получаем и выводим серию документа
	const documentSeriesChange =e=> {
		let input=e.currentTarget;
		props.formData.documentSeries=input.value;
	//	console.log(props.formData.documentSeries);
		rerenderEntireTree(props.formData);
	}
	//получаем и выводим 
	const documentNumberChange=e=>{
		let input=e.currentTarget;
		props.formData.documentNumber=input.value;
	//	console.log(props.formData.documentNumber);
		rerenderEntireTree(props.formData);
	}

	return (
		<Panel id={props.id}>
			<PanelHeader
				left={
					<PanelHeaderBack onClick={() => props.go('panelStart')} />
				}>
				Документ 
		</PanelHeader>
			<Group>
				<Div>
					<InfoRow header="Прогресс">
						<Progress value={props.formData.progress} />
					</InfoRow>
				</Div>
				<FormLayout>
					<FormLayoutGroup top="Тип документа, удостоверяющего личность:">
						<Select placeholder="..."
							defaultValue={props.formData.documentType}
							onChange={documentTypeChange}
						>
							<option value="1">Паспорт гражданина РФ</option>
							<option value="2">Иностранный паспорт </option>
							<option value="3">Иной документ</option>
						</Select>
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Серия документа, удостоверяющего личность:">
						<Input  type="text"						 
						placeholder="1234" 
						defaultValue={props.formData.documentSeries}
						onChange={documentSeriesChange}
						/>
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Номер документа, удостоверяющего личность:">
						<Input   type="text" 						 
						placeholder="123456" 
						defaultValue={props.formData.documentNumber}
						onChange={documentNumberChange}
						/>
					</FormLayoutGroup>
				</FormLayout>
				<Div>
					<Button size="xl" level="2" onClick={() => props.go('panelTransport')} id='nextBtn' >
						Дальше
				</Button></Div>
			</Group>
		</Panel>
	);
};



export default PanelDocument;