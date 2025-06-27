import React, { useState } from "react";
import Service from "./Service";
import Contact from "./Contact";
import About from "./About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header";

const Home = () => {

	const[secreto,setSecreto] = useState('tengo un secreto ... ')
	return (
		<div className="text-center">
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/contactanos" element={<Contact />} />
					<Route path="/servicios" element={<Service />} />
					
				</Routes>
				<h1 className="text-center mt-5">Footer</h1>
				<p>
					sabias que: {secreto}
					<button onClick={()=>setSecreto('la tierra es plana')}>revelar secreto</button>
				</p>
			</BrowserRouter>
		</div>
	);
};

export default Home;