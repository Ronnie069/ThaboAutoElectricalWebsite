/**
 * Thabo's Auto Electrical — Part 3 JavaScript
 * Interactive map, lightbox gallery, accordion, form validation + AJAX-style responses,
 * service filtering, and DOM enhancements.
 */

document.addEventListener("DOMContentLoaded", () => {

    
    // 1. Interactive Map (Leaflet + OpenStreetMap) — Contact page
    
    const mapContainer = document.getElementById("map");
    if (mapContainer && typeof L !== "undefined") {
        
        const workshopLat = -28.2728;
        const workshopLng = 29.1294;

        const map = L.map("map").setView([workshopLat, workshopLng], 15);

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
        }).addTo(map);

        const marker = L.marker([workshopLat, workshopLng]).addTo(map);
        marker.bindPopup(
            "<strong>Thabo's Auto Electrical</strong><br>16 Murray Street, Harrismith Intabazwe<br>Free State, South Africa"
        ).openPopup();
    }

    
    // 2. Gallery Lightbox
    
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.querySelector(".lightbox-close");

    document.querySelectorAll(".gallery-img, .services-grid img").forEach((img) => {
        img.addEventListener("click", () => {
            if (!lightbox || !lightboxImg) return;
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";
        });
    });

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
    if (lightbox) {
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeLightbox();
    });

    
    // 3. Accordion (About page FAQ / expandable content)
    
    document.querySelectorAll(".accordion-header").forEach((header) => {
        header.addEventListener("click", () => {
            const content = header.nextElementSibling;
            const isActive = header.classList.contains("active");

            // Close all other items (optional single-open behaviour)
            document.querySelectorAll(".accordion-header").forEach((h) => {
                h.classList.remove("active");
                h.nextElementSibling.style.maxHeight = null;
            });

            if (!isActive) {
                header.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    
    // 4. Service Filter (Services page)
    
    const filterButtons = document.querySelectorAll(".service-filters button");
    const serviceCards = document.querySelectorAll(".services-grid .service-card");

    filterButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            filterButtons.forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");

            const filter = btn.dataset.filter;

            serviceCards.forEach((card) => {
                if (filter === "all" || card.dataset.category === filter) {
                    card.style.display = "";
                    card.style.animation = "fadeIn 0.4s ease";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });


    // 5. Form Validation + Simulated AJAX Submission
    
    function showError(field, message) {
        field.classList.add("error");
        let errorEl = field.querySelector(".error-message");
        if (!errorEl) {
            errorEl = document.createElement("span");
            errorEl.className = "error-message";
            field.appendChild(errorEl);
        }
        errorEl.textContent = message;
    }

    function clearErrors(form) {
        form.querySelectorAll(".form-field.error").forEach((el) => el.classList.remove("error"));
        form.querySelectorAll(".error-message").forEach((el) => el.remove());
    }

    function validateForm(form) {
        clearErrors(form);
        let valid = true;

        const requiredFields = form.querySelectorAll("[required]");
        requiredFields.forEach((input) => {
            const field = input.closest(".form-field");
            if (!input.value.trim()) {
                showError(field, "This field is required.");
                valid = false;
            }
        });

        // Name validation: 2 characters (name / full name / your name fields)
        const nameInput = form.querySelector('input[name="fullname"], input[name="name"]');
        if (nameInput && nameInput.value.trim() && nameInput.value.trim().length < 2) {
            showError(nameInput.closest(".form-field"), "Name must be at least 2 characters long.");
            valid = false;
        }

        // Date validation
        const dateInput = form.querySelector('input[type="date"]');
        if (dateInput && dateInput.value) {
            const chosen = new Date(dateInput.value + "T00:00:00");
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            if (chosen < today) {
                showError(dateInput.closest(".form-field"), "Please choose today or a future date.");
                valid = false;
            } else if (chosen.getDay() === 0) {
                showError(dateInput.closest(".form-field"), "We are closed on Sundays. Please choose another day.");
                valid = false;
            }
        }

        // Phone validation (10 digits with +27)
        const phone = form.querySelector('input[type="tel"]');
        if (phone && phone.value.trim()) {
            const cleaned = phone.value.replace(/\s+/g, "");
            if (!/^(\+27|0)[1-9]\d{8}$/.test(cleaned)) {
                showError(phone.closest(".form-field"), "Please enter a valid South African phone number.");
                valid = false;
            }
        }

        // Email validation
        const email = form.querySelector('input[type="email"]');
        if (email && email.value.trim()) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email.value.trim())) {
                showError(email.closest(".form-field"), "Please enter a valid email address.");
                valid = false;
            }
        }

        // Message length
        const message = form.querySelector("textarea");
        if (message && message.value.trim() && message.value.trim().length < 10) {
            showError(message.closest(".form-field"), "Please provide more detail (at least 10 characters).");
            valid = false;
        }

        return valid;
    }

    function simulateAjax(form, successMessage) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const responseEl = form.querySelector(".form-response");

        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.textContent = "Sending…";
        }

        // Simulate network delay
        setTimeout(() => {
            if (responseEl) {
                responseEl.className = "form-response success";
                responseEl.textContent = successMessage;
            }
            form.reset();
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.textContent = form.id === "enquiry-form" ? "Send Enquiry" : "Send Message";
            }
        }, 1200);
    }

    // Preventing past dates in the date picker (HTML validation via min attribute)
    const dateField = document.getElementById("date");
    if (dateField) {
        const t = new Date();
        const iso = t.getFullYear() + "-" + String(t.getMonth() + 1).padStart(2, "0") + "-" + String(t.getDate()).padStart(2, "0");
        dateField.setAttribute("min", iso);
    }

    // Enquiry form
    const enquiryForm = document.getElementById("enquiry-form");
    if (enquiryForm) {
        enquiryForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateForm(enquiryForm)) {
                const service = enquiryForm.querySelector("#service")?.value || "service";
                simulateAjax(
                    enquiryForm,
                    `Thank you! Your enquiry for ${service.replace("-", " ")} has been received. We will contact you within 24 hours with an estimated cost and availability.`
                );
            }
        });
    }

    // Contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            if (validateForm(contactForm)) {
                simulateAjax(
                    contactForm,
                    "Thank you for your message. We have received it and will reply to your email shortly. For urgent matters please call the workshop desk."
                );
            }
        });
    }

    
    // 6. Simple scroll-triggered fade-in animations (DOM enhancement)

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll("main > section, .contact-main > section, .services-grid > section").forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

});