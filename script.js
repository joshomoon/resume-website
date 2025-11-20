const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    document.body.classList.toggle('light');
});

window.addEventListener('load', () => {
    document.querySelectorAll('.progress').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width');
    });
});

const toast = document.getElementById('toast');
document.querySelectorAll('.job').forEach(job => {
    job.addEventListener('click', () => {
        toast.textContent = `Learn more about my role at ${job.dataset.company}`;
        toast.style.opacity = 1;
        setTimeout(() => {
            toast.style.opacity = 0;
        }, 3000);
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    if(name.value.trim() === '') {
        name.nextElementSibling.textContent = 'Name cannot be empty.';
        valid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if(!emailPattern.test(email.value.trim())) {
        email.nextElementSibling.textContent = 'Enter a valid email.';
        valid = false;
    }

    if(message.value.trim().length < 10) {
        message.nextElementSibling.textContent = 'Message must be at least 10 characters.';
        valid = false;
    }

    if(valid) {
        alert('Message sent successfully!');
        form.reset();
    }
});

const downloadBtn = document.getElementById('download-pdf');
downloadBtn.addEventListener('click', () => {
    html2pdf().from(document.body).save('Resume.pdf');
});
