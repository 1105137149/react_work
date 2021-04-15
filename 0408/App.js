import React from 'react';



class App extends React.components {
	render(){
	return(  <div> <Header name={headername}/>
            <Content/>
			<h2>I am a {this.props.color} Car!</h2>
			</div>
);
}
	
}

class Header extends React.components {
	render(){
	return(  <div> <Header name="我是標題2"/>
            <Content/>
			<h1> Header {this.props.name} </h2>
			</div>
);
}
	
}

class Content extends React.components {
	render(){
	return(  <div> <Header name="我是標題3"/>
            <Content/>
			<h2>I am a {this.props.color} Car!</h2>
			</div>
);
}
	
}
function Content (){
	return( 
	<h2>Content</h2>
    <p>The content text!!!</p>
);
	
}


export default App;