/* Kit form 10067572 is connected to the automation from the supplied embed. */
const KIT_FORM_ID = "10067703";
const VSL_URL = "";

const form = document.querySelector("#signup-form");
const emailInput = document.querySelector("#email");
const message = document.querySelector("#form-message");
const setMessage = (text, type = "") => { message.textContent = text; message.className = `form-message ${type}`; };

if (form) form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!emailInput.validity.valid || !email) { setMessage("Bitte gib eine gültige E-Mail-Adresse ein.", "error"); emailInput.focus(); return; }
  if (KIT_FORM_ID === "YOUR_KIT_FORM_ID") { setMessage("Die Anmeldung ist noch nicht aktiviert.", "error"); return; }
  const button = form.querySelector("button"); form.setAttribute("aria-busy", "true"); button.disabled = true; button.textContent = "Wird gesendet…"; setMessage("");
  try {
    const response = await fetch(`https://app.kit.com/forms/${encodeURIComponent(KIT_FORM_ID)}/subscriptions`, { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ email_address: email }) });
    if (!response.ok) throw new Error("Kit rejected the subscription");
    setMessage("Geschafft! Schau in deinen Postfach (und in deinem Spam- oder Werbungsordner, falls es nicht ankam).", "success");
    form.removeAttribute("aria-busy");
    button.textContent = "Guide wurde gesendet ✓";
    if (VSL_URL) window.setTimeout(() => window.location.assign(VSL_URL), 900);
  } catch (error) { setMessage("Das hat leider nicht geklappt. Bitte versuche es erneut.", "error"); form.removeAttribute("aria-busy"); button.disabled = false; button.innerHTML = '<span class="button-icon" aria-hidden="true">✉</span> Kostenlosen Guide erhalten <span aria-hidden="true">→</span>'; }
});

const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
