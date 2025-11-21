document.addEventListener("DOMContentLoaded", () => {

    const toggleBtn = document.getElementById("theme-toggle");
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
    }

    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            toggleBtn.textContent = "Light Mode";
            localStorage.setItem("theme", "dark");
        } else {
            toggleBtn.textContent = "Dark Mode";
            localStorage.setItem("theme", "light");
        }
    });

    const downloadBtn = document.getElementById("download-pdf");
    downloadBtn.addEventListener("click", () => {
        const element = document.body;
        const opt = {
            margin: 0.5,
            filename: 'My_Resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(element).save();
    });

    const jobs = document.querySelectorAll(".job");
    function showToast(message) {
        const toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => toast.classList.add("show"), 100);
        setTimeout(() => {
            toast.classList.remove("show");
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    }

    jobs.forEach(job => {
        job.addEventListener("click", () => {
            const companyName = job.querySelector("h3").textContent.split("—")[1]?.trim() || "this company";
            showToast(`Learn more about my role at ${companyName}`);
        });
    });
});


