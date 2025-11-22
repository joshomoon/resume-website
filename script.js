const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});

window.addEventListener('load', () => {
    const progresses = document.querySelectorAll('.progress');
    progresses.forEach(p => {
        p.style.width = p.dataset.progress;
    });
});

const jobs = document.querySelectorAll('.job');
const toast = document.getElementById('toast');

jobs.forEach(job => {
    job.addEventListener('click', () => {
        toast.textContent = `Learn more about my role at ${job.dataset.company}`;
        toast.style.opacity = '1';
        setTimeout(() => {
            toast.style.opacity = '0';
        }, 3000);
    });
});

const form = document.getElementById('contact-form');
const formError = document.getElementById('form-error');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
        formError.textContent = 'Name cannot be empty.';
        return;
    }
    if (!emailRegex.test(email)) {
        formError.textContent = 'Please enter a valid email.';
        return;
    }
    if (message.length < 10) {
        formError.textContent = 'Message must be at least 10 characters.';
        return;
    }

    alert('Message sent successfully!');
    formError.textContent = '';
    form.reset();
});

const downloadBtn = document.getElementById('download-pdf');
downloadBtn.addEventListener('click', () => {
    const element = document.body;
    html2pdf().from(element).save('Resume.pdf');
});
