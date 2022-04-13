const container = document.querySelector(".container");

document.querySelector('.open-navbar__icon').addEventListener("click", () => {
	container.classList.add("change");
});

document.querySelector('.close-navbar__icon').addEventListener("click", () => {
	container.classList.remove("change");
});

const colors = ['#6495ed', '#7fffd4', '#ffa07a', '#f08080', '#afeeee'];

let i = 0;

Array.from(document.querySelectorAll('.navbar__link')).forEach((item) => {
	item.style.cssText = `background-color: ${colors[i++]}`;
});

Array.from(document.querySelectorAll(".navigation-btn")).forEach(item => {
	item.onclick = () => {
		item.parentElement.parentElement.classList.toggle("change");
	};
});