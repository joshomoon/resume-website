document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("theme-toggle");
    const downloadBtn = document.getElementById("download-pdf");

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
        updatePDFButtonTheme();
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

        updatePDFButtonTheme();
    });

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

    function updatePDFButtonTheme() {
        if (document.body.classList.contains("dark-mode")) {
            downloadBtn.style.backgroundColor = "#1e7e34";
            downloadBtn.style.color = "#fff";
        } else {
            downloadBtn.style.backgroundColor = "#28a745";
            downloadBtn.style.color = "#fff";
        }
    }
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




