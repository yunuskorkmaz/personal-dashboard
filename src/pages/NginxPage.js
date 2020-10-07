import React, { useEffect, useState } from 'react'
import { Button, List } from 'antd';


const { ipcRenderer } = window.require('electron')

// const { ipcRenderer } = window.require('electron')

const Nginx = () => {

	const [data, setdata] = useState([]);
	const [loading, setLoading] = useState(null)

	useEffect(() => {
		getConfigFiles();
	},[])

	const getConfigFiles =  () => {
		// const result =  ipcRenderer.sendSync('getNginxConfigs',{})
		// setdata(result || [])
	}

	const run = async (file,index) =>{
		
		// ipcRenderer.send('setNginxConfig',{ file });
		// ipcRenderer.on('onSetNginxConfig',(event,data) => {
		// 	console.log(data)
		// })
	}

	return (
		<>
			<div style={{margin: '16px'}}>
				<List
					header={<div>Header</div>}
					bordered
					dataSource={data}
					renderItem={(item,i) => (
						<List.Item 
							actions={[
								<Button loading={loading === i} disabled={loading === null ? false: loading !== i } onClick={() => run(item,i)} type="primary" >Run</Button>
							]}
							>
							{item}
						</List.Item>
					)}
				/>
			</div>

			
		</>
	)
}

export default Nginx;