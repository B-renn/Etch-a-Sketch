	const container = document.querySelector('#container');


	for (var i = 1; i <= 256; i++) {
		const div = document.createElement('div');
		div.classList.add('etch');
		div.classList.add(`num_${i}`);
		div.style.backgroundColor = 'black';
		if (i <= 16){
			div.style.gridColumnStart = i;
			div.style.gridColumnEnd = i + 1;
		}

		else if (i > 16){
			div.style.gridColumnStart = i % 16;
			div.style.gridColumnEnd = (i % 16) + 1;

			if (div.style.gridColumnStart == 0){
				div.style.gridColumnStart = 16;
				div.style.gridColumnEnd = 17;
			}
		}

		container.appendChild(div);	
	}


	function mouseOver(e){
		this.style.backgroundColor = 'white';
		
	}


	function resetColor(e){
		const divs = document.querySelectorAll('.etch');
		divs.forEach(div => {
		div.style.backgroundColor='black';
		});


	}

	function resizeGrid(e) {
		// body...
		const grid = document.querySelector('#container');
		let newSize = prompt("pick a new grid size");
		grid.style.gridTemplateColumns = `repeat(${newSize},[col-start] 1fr)`;
		grid.style.gridTemplateRows = `repeat(${newSize},[col-start] 1fr)`;

		if (newSize > 16){

			let gridPixelIncrease = (newSize * newSize) - 256;
			let rowSizeIncrease = newSize - 16;
			let columnSizeIncrease = newSize - 16;

			for (var i = 1; i <= 16; i++) {
				for (var k = 1; k <= columnSizeIncrease ; k++) {
					const div = document.createElement('div');
					div.classList.add('newEtch');
					div.classList.add(`num_${i + k +256}`);
					div.style.backgroundColor = 'black';
					div.style.gridRowStart = i;
					div.style.gridRowEnd = i + 1;
					div.style.gridColumnStart = k + 16;
					div.style.gridColumnEnd = (k + 16) + 1;
					container.appendChild(div);	
					console.log(`i = ${i}`);
					console.log(`k = ${k}`);
					
				}
			}
			for (var i = 17; i <= newSize; i++) {
				for (var k = 1; k <= newSize ; k++) {
					const div = document.createElement('div');
					div.classList.add('newEtch');
					div.classList.add(`num_${i + k + 256}`);
					div.style.backgroundColor = 'black';
					div.style.gridRowStart = i;
					div.style.gridRowEnd = i + 1;
					div.style.gridColumnStart = k;
					div.style.gridColumnEnd = k + 1;
					container.appendChild(div);	

				}
			}

			const divs = document.querySelectorAll('.newEtch');	
			divs.forEach(div => {
			div.addEventListener('mouseover',mouseOver)
			});	

		}
	}


	const divs = document.querySelectorAll('.etch');

	// we use the .forEach method to iterate through each button
	divs.forEach(div => {
	div.addEventListener('mouseover',mouseOver)
	});

	const resetButton = document.querySelector('#resetButton');
	resetButton.addEventListener('click',resetColor);

	resetButton.addEventListener('click',resizeGrid);