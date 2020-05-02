import React from 'react';
import { rerenderEntireTree } from "../render";
import { InfoRow, Progress, Panel, PanelHeader, Group, Button, Div, FormLayout, FormLayoutGroup, Select } from '@vkontakte/vkui';



const PanelStart = (props) => {

    
    //получаем значение
    const handleTargetCodeChange = e => {
        let select = e.currentTarget;

        if (select.value !== '') {
            props.formData.targetCode = select.value;
            props.formData.progress = 20;
            rerenderEntireTree(props.formData);

        } else {
            props.formData.progress = 0;
            props.formData.targetCode = '';
            rerenderEntireTree(props.formData);
        }

    };

    return (

        <Panel id={props.id}>
            <PanelHeader>Цель выхода из дома</PanelHeader>
            <Group>
                <Div>
                    <InfoRow header="Прогресс">
                        <Progress value={props.formData.progress} />
                    </InfoRow>
                </Div>
                <FormLayout>

                    <FormLayoutGroup top="Цель получения пропуска:">
                        <Select placeholder="..."
                            onChange={handleTargetCodeChange}
                            defaultValue={props.formData.targetCode}>
                            <option value="1">Цифровой пропуск для работающих</option>
                            <option value="2">Разовая поездка для посещения медицинской организации</option>
                            <option value="3">Разовая поездка в иных целях</option>
                        </Select>
                    </FormLayoutGroup>
                </FormLayout>
                <Div>
                    <Button size="xl" level="2" onClick={() => props.go('panelDocument')} id='nextBtn' >
                        Дальше
				</Button>
                </Div>
            </Group>
        </Panel>
    );
}

export default PanelStart;