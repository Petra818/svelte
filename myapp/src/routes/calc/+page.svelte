<script>
	// let displayText= $state('')
	let input1 = $state('');
	let input2 = $state('');
	let operator = $state('');
	let result = $state('');

	// $inspect("displayText="+displayText);
	$inspect('input1=' + input1);
	$inspect('input2=' + input2);
	$inspect('operator=' + operator);
	$inspect('result=' + result);

	function handleKeyDown(event) {
		if (event.key === '1') {
			// displayText+='1'
			console.log('klavesa 1 stlacena');
		}
		if (event.key === '2') {
			// displayText+='1'
			console.log('klavesa 2 stlacena');
		}
		if (event.key === '3') {
			// displayText+='1'
			console.log('klavesa 3 stlacena');
		}
		if (event.key === '4') {
			// displayText+='1'
			console.log('klavesa 4 stlacena');
		}
	}
	function handleButtonClick(number) {
		console.log(`Button ${number}bol stlaceny!`);
		if (number === 1) {
			console.log('sprava pre tlacidlo 1');
		} else if (number === 2) {
			console.log('sprava pre tlacidlo 2');
		} else if (number === 3) {
			console.log('sprava pre tlacidlo 3');
		}
	}

	function handleClick(value) {
		if (value === '+' || value === '-' || value === '*' || value === '/') {
			operator = value;
		} else if (value === '=') {
			calculate();
		} else if (value === 'C') {
			clearAll();
		} else {
			if (operator === '') {
				input1 += value;
			} else {
				input2 += value;
			}
		}
	}

	function calculate() {
		const num1 = parseFloat(input1);
		const num2 = parseFloat(input2);

		switch (operator) {
			case '+':
				result = num1 + num2;
				break;
			case '-':
				result = num1 - num2;
				break;
			case '*':
				result = num1 * num2;
				break;
			case '/':
				result = num2 !== 0 ? num1 / num2 : 'error';
				break;
		}
		input1 = result.toString();
		input2 = '';
		operator = '';
	}

	function clearAll() {
		input1 = '';
		input2 = '';
		operator = '';
		result = '';
	}
</script>

<svelte:window on:keydown={handleKeyDown} />

<main class="mx-auto flex w-full flex-col items-center justify-center">
	<h1 class="p-20 text-center text-4xl font-bold">CALCULATION</h1>

	<span class="rounded-4xl block w-full border-b-cyan-800"></span>

	<article class="max-w-xl">
		<section class="text-white">
			<div
				class="  relative flex h-[60px] flex-col items-center justify-center rounded-tl-2xl rounded-tr-2xl bg-gray-700 p-6"
			>
				<div class="display">{input1}{operator}{input2}</div>
			</div>
		</section>

		<div class="  relative flex justify-center rounded-bl-2xl rounded-br-2xl bg-black">
			<div class="rounded-4xl flex flex-col items-center bg-black p-6">
				<div class=" grid grid-cols-4 gap-10 text-blue-100">
					<button onclick={() => handleClick('1')}>1</button>
					<button onclick={() => handleClick('2')}>2</button>
					<button onclick={() => handleClick('3')}>3</button>
					<button onclick={() => handleClick('+')}>+</button>

					<button onclick={() => handleClick('4')}>4</button>
					<button onclick={() => handleClick('5')}>5</button>
					<button onclick={() => handleClick('6')}>6</button>
					<button onclick={() => handleClick('-')}>-</button>

					<button onclick={() => handleClick('7')}>7</button>
					<button onclick={() => handleClick('8')}>8</button>
					<button onclick={() => handleClick('9')}>9</button>
					<button onclick={() => handleClick('*')}>*</button>

					<button onclick={() => handleClick('0')}>0</button>
					<button onclick={() => handleClick('C')}>C</button>
					<button onclick={() => handleClick('=')}>=</button>
					<button onclick={() => handleClick('/')}>/</button>
				</div>
			</div>
		</div>
	</article>
</main>
