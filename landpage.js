// Testimonial data
const testimonials = [
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This platform is an absolute game-changer for competitive programmers. The extensive range of problems and challenges offered here truly hones your skills and prepares you for any coding competition. With detailed solutions and an active community, it's the perfect environment to sharpen your coding prowess.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Engineer",
    photo: "https://randomuser.me/api/portraits/women/67.jpg",
    text: "I can't express enough how valuable this platform has been for me. As someone deeply passionate about algorithms and data structures, I've found the diverse set of problems here both stimulating and enriching. The intuitive interface and seamless experience make it my go-to destination for honing my problem-solving skills.",
  },
  {
    name: "Renee Sims",
    position: "Cloud Engineer",
    photo: "https://randomuser.me/api/portraits/women/8.jpg",
    text: "If you're serious about excelling in competitive coding, look no further. This platform not only provides a comprehensive set of problems but also fosters a supportive community where you can exchange ideas and strategies. It's been instrumental in my journey towards becoming a better competitive coder.",
  },
  {
    name: "Sasha Ho",
    position: "PhD Student",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "I've tried numerous competitive programming platforms, but none come close to the quality and depth offered here. From beginner-friendly challenges to advanced algorithmic puzzles, there's something for everyone. The platform's commitment to excellence is evident in every aspect, making it my preferred choice for honing my coding skills.",
  },
  {
    name: "Veeti Seppanen",
    position: "Frontend Developer",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "As a seasoned programmer, I'm always on the lookout for platforms that challenge and inspire me. This platform exceeds all expectations with its vast array of problems and unparalleled learning resources. Whether you're a novice or a seasoned coder, you'll find endless opportunities to push your boundaries and elevate your skills.",
  },
];

let currentIndex = 0;

// Function to display a testimonial
function displayTestimonial(index) {
  const testimonial = testimonials[index];
  document.getElementById("testimonial-photo").src = testimonial.photo;
  document.getElementById("testimonial-name").textContent = testimonial.name;
  document.getElementById("testimonial-position").textContent =
    testimonial.position;
  document.getElementById("testimonial-quote").textContent = testimonial.text;
}

// Show the first testimonial initially
displayTestimonial(currentIndex);

// Event listener for "Next" button
document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % testimonials.length; // Cycle through
  displayTestimonial(currentIndex);
});

// Event listener for "Previous" button
document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length; // Cycle through
  displayTestimonial(currentIndex);
});

// Auto-switch testimonials every 3 seconds
setInterval(() => {
  currentIndex = (currentIndex + 1) % testimonials.length; // Cycle through
  displayTestimonial(currentIndex);
}, 3000);

// JS Contact Section Starts Here

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  // Form submission handler
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    let isValid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      nameError.style.display = "block";
      isValid = false;
    } else {
      nameError.style.display = "none";
    }

    // Validate email
    if (!emailInput.value.trim()) {
      emailError.style.display = "block";
      isValid = false;
    } else {
      emailError.style.display = "none";
    }

    // Validate message
    if (!messageInput.value.trim()) {
      messageError.style.display = "block";
      isValid = false;
    } else {
      messageError.style.display = "none";
    }

    // If form is valid, show success message and reset form
    if (isValid) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully!",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset the form after successful submission
      form.reset();
    }
  });

  // Remove error message on focus
  nameInput.addEventListener("focus", () => (nameError.style.display = "none"));
  emailInput.addEventListener(
    "focus",
    () => (emailError.style.display = "none")
  );
  messageInput.addEventListener(
    "focus",
    () => (messageError.style.display = "none")
  );
});

// Copyright Js Goes Here...

// Get the current year using JavaScript Date API
const currentYear = new Date().getFullYear();

// Select the element where the year should appear
const copyrightYearElement = document.getElementById("copyright-year");

// Set the inner text of the element to the current year
copyrightYearElement.textContent = currentYear;
