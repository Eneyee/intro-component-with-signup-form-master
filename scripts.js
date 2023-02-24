const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");

form.addEventListener('submit', (e) => {
	e.preventDefault();
	inputs.forEach((input) => {
		
		if (!input.value) {
			input.parentElement.classList.add('error');
			input.parentElement.classList.add('toggle');
		} else {
			input.parentElement.classList.remove('error');
			input.parentElement.classList.remove('toggle');
			if (input.type == 'email') {
				if (validateEmail(input.value)) {
					input.parentElement.classList.remove('error');
					input.parentElement.classList.remove('toggle');
				} else {
					input.parentElement.classList.add('error');
					input.parentElement.classList.add('toggle');
				}
			}
		}
	});
});
