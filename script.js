const config = {
    title: "Inform your content with qualitative data",
    question: "There are several tools you can use to understand which content your audience is actively engaging with.",
    image_on: true,
    image: "https://a.storyblok.com/f/112136/373x445/175f800354/lucia-8.png",
    selection_title: "Select the tool name below to see how:",
    selection_options: [
        "Buzzsumo",
        "Mentionlytics",
        "Audiense",
        "Google Trends"
    ],
    answer_options: [
        "See how content is shared and engaged with.",
        "Useful for monitoring your own content for measurement and benchmarking.",
        "A great Twitter tool to monitor trends, build and segment lists of key users, monitor content performance and more.",
        "Can show you how many people are talking about a topic. You can cross reference it with Reddit, Quora or a social media platform to validate the data and make a call on how impactful that content is."
    ],
    answer_background_colour: "rgba(37, 81, 123, 0.5)",
    answer_font_colour: "white",
    background_colour: "rgba(37, 81, 123, 1)",
    background_image: "https://a.storyblok.com/f/112136/1920x1409/5ba98e7f92/texture-bg-5efdcf3715f790-74747584-606d864d1b22d1-55861802.jpg",
    check_box_fill_colour: "green"
}

const body = document.querySelector('body');
const title = document.getElementById('title');
const question = document.getElementById('question');
const image = document.getElementById('image');
const headerContainer = document.getElementById('headerContainer');
const selectionArea = document.getElementById('selectionArea');
const answerContainer = document.getElementById('answerContainer');
const answer = document.createElement("p");

body.style.backgroundColor = config.background_colour;
body.style.backgroundImage = `url(${config.background_image})`;
title.textContent = config.title;
question.textContent = config.question;
answerContainer.style.backgroundColor = config.answer_background_colour;
answer.style.color = config.answer_font_colour;

if (config.image_on === true) {
    image.src = config.image
} else {
    image.style.display = "none";
}

const selectionTitleContainer = document.getElementById('selectionTitleContainer')
const selectorTitle = document.createElement("p")
selectorTitle.textContent = config.selection_title;
selectionTitleContainer.appendChild(selectorTitle)

const checkPath = document.createElementNS('http://www.w3.org/2000/svg', "path")
checkPath.setAttributeNS(null, "d", "M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z")


let i = 0;
config.selection_options.forEach(element => {
    const selectionSection = document.createElement("div");
    selectionSection.className = 'selectionSection';

    const selectionText = document.createElement("p");
    selectionText.textContent = config.selection_options[i];
    selectionText.style.marginLeft = '0.2rem';
    selectionArea.appendChild(selectionSection);

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")
    svg.setAttributeNS(null, "fill", "currentColor");
    svg.setAttributeNS(null, "height", "16");
    svg.setAttributeNS(null, "width", "16");

    const boxPath = document.createElementNS('http://www.w3.org/2000/svg', "path");
    boxPath.setAttributeNS(null, "d", "M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z");

    selectionSection.appendChild(svg);
    svg.appendChild(boxPath);
    selectionSection.appendChild(selectionText);
    i++;

    selectionSection.addEventListener('click', event => {
        const selected = Array.from(selectionArea.children);
        answerContainer.style.display = 'block';

        selected.forEach(element => {
            element.firstChild.style.backgroundColor = 'transparent';
        })

        if (event) {
            svg.appendChild(checkPath);
            svg.style.backgroundColor = config.check_box_fill_colour;
            answerContainer.appendChild(answer);

        } else {
            svg.removeChild(checkPath);
        }

        const correctIndex = selected.findIndex(element => {
            if (element.firstChild.style.backgroundColor === config.check_box_fill_colour) {
                return true
            }
        })
        console.log(correctIndex)
        answer.textContent = config.answer_options[correctIndex]
    })

});