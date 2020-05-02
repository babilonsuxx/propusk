import React, { useState, useEffect } from 'react';
//import bridge from '@vkontakte/vk-bridge';
import View from '@vkontakte/vkui/dist/components/View/View';
//import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import PanelStart from './panels/PanelStart';
import PanelDocument from './panels/PanelDocument';
import PanelTransport from './panels/PanelTransport';
import PanelElse from './panels/PanelElse';
import PanelElseWork from './panels/PanelElseWork';
import PanelElseMed from './panels/PanelElseMed';
import PanelResult from './panels/PanelResult';
//import formData from "./state/FormData";

/*import Home from './panels/Home';
import Persik from './panels/Persik';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	
	const handleSeriaChange = e => {
		let input=e.currentTarget;
		input.setState({login: input.login});
		console.log(input.value);
	};

	return (
		<View activePanel={activePanel} popout={popout}>
			<Home id='home' fetchedUser={fetchedUser} go={go} handleSeriaChange={handleSeriaChange} />
			<Persik id='persik' go={go} />
		</View>
	);
} */





const App = (formData) => {
	//первый экран
	const [activePanel, setActivePanel] = useState('panelStart');	
	//переход
	const go = e => {
		setActivePanel(e);
	};
	

	return (
		<View activePanel={activePanel}>
			<PanelStart  id="panelStart" go={go} formData={formData.formData} />
			<PanelDocument  id="panelDocument" go={go} formData={formData.formData}/>
			<PanelTransport  id="panelTransport" go={go} formData={formData.formData}/>
			<PanelElse  id="panelElse" go={go} formData={formData.formData}/>
			<PanelElseMed  id="panelElseMed" go={go} formData={formData.formData}/>
			<PanelElseWork  id="panelElseWork" go={go} formData={formData.formData}/>
			<PanelResult  id="panelResult" go={go} formData={formData.formData}/>
			
		</View>
	);
}

export default App;

