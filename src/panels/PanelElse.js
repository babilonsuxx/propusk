import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderButton,Group,CellButton} from '@vkontakte/vkui';


const PanelElse=(props)=>(

<Panel id={props.id}>
				<PanelHeader>Документ</PanelHeader>
				<Group>
					<CellButton onClick={() => props.go('panelTransport') }>
						back
            </CellButton>
				</Group>
			</Panel>
)

export default PanelElse;