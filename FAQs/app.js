const faq_questions = [
    {
        question: "What courses do you offer?",
        answer: "Our e-learning platform offers a wide range of courses across various subjects, including technology, business, arts, sciences, personal development, and more. We also provide specialized courses for certifications and professional development."
    },
    {
        question: "How do I enroll in a course?",
        answer: "To enroll in a course, you first need to create an account on our platform. Once logged in, you can browse through our course catalog, select the course you're interested in, and click on the 'Enroll Now' button. Follow the prompts to complete the enrollment process."
    },
    {
        question: "Are the courses self-paced?",
        answer: "Yes, most of our courses are self-paced, allowing you to learn at your own speed. You can access the course materials anytime and progress through the lessons according to your schedule. However, some courses may have specific deadlines or live sessions, which will be clearly indicated in the course description."
    },
    {
        question: "Do you provide certificates upon course completion?",
        answer: "Yes, we provide certificates of completion for most of our courses. Upon successfully finishing a course, you can download and print your certificate from your account. Some courses may also offer accredited certificates, which will be mentioned in the course details."
    },
    {
        question: "What if I need help during my course?",
        answer: "We have a support system in place to assist you throughout your learning journey. You can reach out to our support team via email, live chat, or our help center. Additionally, each course has a discussion forum where you can interact with instructors and fellow learners to get answers to your questions."
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const accordion = document.querySelector(".accordion");

    faq_questions.forEach(faq => {
        const item = document.createElement("div");
        item.className = "accordion-item";

        const questionButton = document.createElement("button");
        questionButton.className = "accordion-question";
        questionButton.innerHTML = `${faq.question} <img src= "./icons/add.png" alt="Toggle Icon">`;

        const answerDiv = document.createElement("div");
        answerDiv.className = "accordion-answer";
        const answerText = document.createElement("p");
        answerText.textContent = faq.answer;
        answerDiv.appendChild(answerText);

        questionButton.addEventListener("click", () => {
            const isVisible = answerDiv.style.display === "block";  // Check if the current answerDiv is visible
             // Hide all answers and reset their button icons
            document.querySelectorAll(".accordion-answer").forEach(answer => {
                answer.style.display = "none";
                answer.previousElementSibling.querySelector("img").src = "./icons/add.png";
            });
            // Toggle the display of the current answerDiv
            answerDiv.style.display = isVisible ? "none" : "block";
            questionButton.querySelector("img").src = isVisible ? "./icons/add.png" : "./icons/minus.webp";
        });

        item.appendChild(questionButton);
        item.appendChild(answerDiv);
        accordion.appendChild(item);
    });
});
