//Process.js
import React from 'react';
import ttdesign from '../assets/images/misc/TT design.png';

const Process = () => {
    return (
        <section className="flex-col">
		    <h2>Artist's process</h2>
		    <article className="flex">
		    	<div className="flex-col">
		    		<h3>A design you can be close to.</h3>
		    		<p>Tailored measurements, live video designing, and deep collaboration create a fertile environment to develop a transformative tattoo that speaks to you.</p>
		    		<button>
						{[...Array(4)].map((_, i) => <span key={i} />)}
		    			<p>Learn about my workflow</p>
		    		</button>
		    	</div>
		    	<div>
		    		<img src={ttdesign} alt="Customizing a design" />
		    	</div>
		    </article>
	    </section>
    );
}

export default Process;