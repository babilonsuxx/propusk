import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup, Select, Input } from '@vkontakte/vkui';


const PanelDocument = (props) => {
	let plus1 = 0;
	let progressStep = 0;

	//шевелим прогрессбар 
	const changeProgressBar = e => {
		props.formData.progress+=e;
	}
	
	//получаем и обновляем значение типа документа 
	const documentTypeChange = e => {
		console.log('+'+plus1);
		let select = e.currentTarget;
		if (select.value !== '') {
			props.formData.documentType = select.value;
			if (plus1 == 0) {
				progressStep = 5;
			} else { 
				progressStep = 0 
			};
		} else {
			props.formData.documentType = '';
			progressStep = -5;
			plus1 = 0;
		}
		//props.formData.progress += plus1;
		plus1 = 1;
		changeProgressBar(progressStep);
		rerenderEntireTree(props.formData);
		console.log(props.formData.documentType);
	};

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
						<Input type="number" defaultValue="" placeholder="1234" />
					</FormLayoutGroup>
				</FormLayout>

				<FormLayout>
					<FormLayoutGroup top="Номер документа, удостоверяющего личность:">
						<Input type="number" defaultValue="" placeholder="123456" />
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