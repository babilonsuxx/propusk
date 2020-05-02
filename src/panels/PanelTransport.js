import React from 'react';
import { Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup,  Input } from '@vkontakte/vkui';


const panelTransport=(props)=>(
	
	<Panel id={props.id}>
		<PanelHeader
			left={
				<PanelHeaderBack onClick={() => props.go('panelDocument')} />
			}>
			Данные о транспорте
		</PanelHeader>
		<Group>
			

			<FormLayout>
				<FormLayoutGroup top="Номер транспортного средства (если используется):">
					<Input type="text" defaultValue=""  placeholder="Р043МП177"/>
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
			<Div>
				<Button size="xl" level="2" onClick={() => props.go('panelTransport')} id='nextBtn' >
					Дальше
				</Button></Div>
		</Group>
	</Panel>
)

export default panelTransport;