import React from 'react';



function App (){
	return(            <Header/>
            <Content/>
);
	
}


function Header (){
	return(    <h1>Header</h1>
);
	
}
function Content (){
	return(                <h2>Content</h2>
            <p>The content text!!!</p>
);
	
}


export default App;