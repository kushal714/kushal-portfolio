/* jQuery-powered interactions shared by all pages */
$(function () {
  // Mobile navigation
  $(".menu-toggle").on("click", function () {
    const isOpen = $(this).attr("aria-expanded") === "true";
    $(this).attr("aria-expanded", String(!isOpen));
    $(this).attr("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    $(".nav-links").stop(true, true).slideToggle(180).toggleClass("open", !isOpen);
  });

  $(".nav-links a").on("click", function () {
    if (window.innerWidth <= 850) {
      $(".nav-links").slideUp(160).removeClass("open");
      $(".menu-toggle").attr("aria-expanded", "false").attr("aria-label", "Open navigation menu");
    }
  });

  // Optional light/dark theme, with the chosen theme remembered in this browser.
  const savedTheme = localStorage.getItem("kss-theme");
  if (savedTheme === "dark") $("body").addClass("dark-theme");
  updateThemeIcon();
  $(".theme-toggle").on("click", function () {
    $("body").toggleClass("dark-theme");
    localStorage.setItem("kss-theme", $("body").hasClass("dark-theme") ? "dark" : "light");
    updateThemeIcon();
  });
  function updateThemeIcon() {
    $(".theme-toggle").text($("body").hasClass("dark-theme") ? "☀" : "☾");
  }

  // Reveal sections as they enter the viewport.
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
  } else {
    $(".reveal").addClass("is-visible");
  }

  // Back-to-top control.
  $(window).on("scroll", function () {
    $(".back-to-top").toggleClass("visible", $(this).scrollTop() > 350);
  });
  $(".back-to-top").on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 500);
  });

  // Print the resume to PDF through the browser's print dialog.
  $(".print-button").on("click", function () { window.print(); });

  // Contact form: validates locally, but sends only after a real Web3Forms key is added.
  $("#contact-form").on("submit", async function (event) {
    event.preventDefault();
    const form = this;
    const status = $("#form-status");
    const accessKey = $(form).find('input[name="access_key"]').val().trim();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    if (!accessKey || accessKey === "ADD_YOUR_WEB3FORMS_ACCESS_KEY") {
      status.text("Your details passed validation, but message delivery is not active yet. Add your Web3Forms access key to contact.html first.");
      return;
    }

    const submitButton = $(form).find('button[type="submit"]');
    submitButton.prop("disabled", true).text("Sending...");
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(form)
      });
      const result = await response.json();
      if (result.success) {
        status.text("Thank you! Your message has been sent.");
        form.reset();
      } else {
        status.text(result.message || "Sorry, the message could not be sent. Please try again.");
      }
    } catch (error) {
      status.text("Unable to send right now. Please email me directly at 9686kushal@gmail.com.");
    } finally {
      submitButton.prop("disabled", false).html('Send Message <span aria-hidden="true">→</span>');
    }
  });
});
