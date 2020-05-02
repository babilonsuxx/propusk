import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton,Group,CellButton,Form,Select} from '@vkontakte/vkui';


const PanelElseWork=(props)=>(

<Panel id={props.id}>
				<PanelHeader>Документ</PanelHeader>
				<Group>

				
					<CellButton onClick={() => props.go('panelTransport') }>
						back
            </CellButton>
				</Group>
			</Panel>
)

export default PanelElseWork;