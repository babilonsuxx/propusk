import React from 'react';
import { rerenderEntireTree } from "../render";
import { Textarea, InfoRow, Progress, Panel, PanelHeader, Button, Div, PanelHeaderBack, Group, FormLayout, FormLayoutGroup, Select, Input } from '@vkontakte/vkui';


const PanelResult = (props) => {
    props.formData.progress = 100;

    const goBack = e => {
        let whereWeBack = '';

        if (props.formData.targetCode == 1) {
            whereWeBack = 'panelElseWork'
        }
        else if (props.formData.targetCode == 2) {
            whereWeBack = 'panelElseMed'
        }
        else if (props.formData.targetCode == 3) {
            whereWeBack = 'panelElse'
        } else {
            whereWeBack = 'panelStart'
        }
        //console.log(whereWeGo);
        props.go(whereWeBack);
    }
    const doResult=e=>{
		let result='';
		
		if (props.formData.targetCode==1) {
            result=
            'Пропуск*'+
            props.formData.targetCode+
            '*'+props.formData.documentType+
            '*'+props.formData.documentSeries+
            '*'+props.formData.documentNumber+
            '*'+props.formData.carNumber+
            '*'+props.formData.troyka+
            '*'+props.formData.strelka+
            '*'+props.formData.inn+
            '*'+props.formData.orgName;
		}
		else if (props.formData.targetCode==2) {
			result=
            'Пропуск*'+
            props.formData.targetCode+
            '*'+props.formData.documentType+
            '*'+props.formData.documentSeries+
            '*'+props.formData.documentNumber+
            '*'+props.formData.bDate+
            '*'+props.formData.carNumber+
            '*'+props.formData.troyka+
            '*'+props.formData.strelka+
            '*'+props.formData.orgName;
		}
		else if (props.formData.targetCode==3) {
			result=
            'Пропуск*'+
            props.formData.targetCode+
            '*'+props.formData.documentType+
            '*'+props.formData.documentSeries+
            '*'+props.formData.documentNumber+
            '*'+props.formData.carNumber+
            '*'+props.formData.troyka+
            '*'+props.formData.strelka+
            '*'+props.formData.target+
            '*'+props.formData.adress;
		} else {
           // props.go('panelStart');
            
		}
        props.formData.result=result;
       
	}
    doResult();
    
    const resultChange=(e)=>{
        let input=e.currentTarget;
		props.formData.result=input.value;
		rerenderEntireTree(props.formData);

    }
    const copyResult=(e)=>{
        let copyText = document.getElementById("resultText");
        copyText.select();
        document.execCommand("copy");

    }


    return (
        <Panel id={props.id}>
            <PanelHeader
                left={
                    <PanelHeaderBack onClick={goBack} />
                }>
                Код для SMS
		</PanelHeader>
            <Group>
                <Div>
                    <InfoRow header="Прогресс">
                        <Progress value={props.formData.progress} />
                    </InfoRow>
                </Div>
                <FormLayout>
                    <Textarea id="resultText" top="Результат:" placeholder="" defaultValue={props.formData.result}  onChange={resultChange}/>
                </FormLayout>

                <Div>
                    <Button size="xl" level="2" onClick={copyResult}  >
                        Скопировать
				</Button></Div>
            </Group>
        </Panel>
    );
};



export default PanelResult;