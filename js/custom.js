console.log('Loaded custom.js');

// Wishes form
const toggleWishesForm = document.getElementById('toggle-wishes');
const wishesForm = document.getElementById('wishes-form');
const thankYouForSubmittingWishes = document.getElementById(
  'thank-you-for-submitting-wishes',
);
const clickToSubmitYours = document.getElementById('click-to-submit-yours');

if (toggleWishesForm) {
  toggleWishesForm.addEventListener('click', function (event) {
    event.preventDefault();
    console.log('clicked');
    const wishesForm = document.getElementById('wishes-form');

    if (
      wishesForm.style.display === 'none' ||
      wishesForm.style.display === ''
    ) {
      wishesForm.style.display = 'block';
    } else {
      wishesForm.style.display = 'none';
    }
  });
}

if (wishesForm) {
  wishesForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('submitted');

    const wishesName = document.getElementById('wishes-name').value;
    const wishesEmail = document.getElementById('wishes-email').value;
    const wishesMessage = document.getElementById('wishes-message').value;

    // Clear previous error messages
    const previousError = document.querySelector('.wishes-form-error-message');
    if (previousError) {
      previousError.remove();
    }

    // Validation on the name
    if (wishesName.length < 5) {
      displayErrorMessage(
        'Name must be at least 5 characters long.',
        wishesForm,
      );
      return;
    }

    // Validation on the email
    if (!wishesEmail.includes('@')) {
      displayErrorMessage('Email must be valid.', wishesForm);
      return;
    }

    // Validation on the message
    if (wishesMessage.length < 10) {
      displayErrorMessage(
        'Message must be at least 10 characters long.',
        wishesForm,
      );
      return;
    }

    console.log({
      form: 'Wishes Form',
      name: wishesName,
      email: wishesEmail,
      message: wishesMessage,
    });

    // Submitted...
    wishesForm.style.display = 'none';
    thankYouForSubmittingWishes.style.display = 'block';
    clickToSubmitYours.style.display = 'none';

    const thankYouName = document.getElementById('thank-you-name');
    thankYouName.innerHTML = wishesName;
  });
}

function displayErrorMessage(message, form) {
  const errorMessage = document.createElement('p');
  errorMessage.className = 'error-message';
  errorMessage.innerHTML = message;
  errorMessage.style.color = 'red';
  errorMessage.style.marginTop = '10px';
  errorMessage.style.marginBottom = '10px';
  form.parentElement.appendChild(errorMessage);
}

// Attending form
const attendingForm = document.getElementById('attending-form');
const thankYouForAttending = document.getElementById('thank-you-for-attending');
const invitation = document.getElementById('invitation');

if (attendingForm) {
  attendingForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submitting attending form...');

    const attendingName = document.getElementById('attending-name').value;
    const attendingEmail = document.getElementById('attending-email').value;
    const attendingPhone = document.getElementById('attending-phone').value;
    const attendingAddress = document.getElementById('attending-address').value;

    // Clear previous error messages
    const previousError = document.querySelector('.error-message');
    if (previousError) {
      previousError.remove();
    }

    // Validation on the name
    if (attendingName.length < 5) {
      displayErrorMessage(
        'Name must be at least 5 characters long.',
        attendingForm,
      );
      return;
    }

    // Validation on the email
    if (!attendingEmail.includes('@')) {
      displayErrorMessage('Email must be valid.', attendingForm);
      return;
    }

    // Validation on the phone
    if (attendingPhone.length < 10) {
      displayErrorMessage(
        'Phone must be at least 10 characters long.',
        attendingForm,
      );
      return;
    }

    // Validation on the address
    if (attendingAddress.length < 10) {
      displayErrorMessage(
        'Address must be at least 10 characters long.',
        attendingForm,
      );
      return;
    }

    console.log({
      form: 'Attending Form',
      name: attendingName,
      email: attendingEmail,
      phone: attendingPhone,
      address: attendingAddress,
    });

    // Submitted...
    attendingForm.style.display = 'none';
    thankYouForAttending.style.display = 'block';
    invitation.style.display = 'none';
  });
}

// Contact form

const contactForm = document.getElementById('contact-form');
const thankYouForContacting = document.getElementById(
  'thank-you-for-contacting-us',
);
const contactFormDiv = document.getElementById('contact-form-div');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log('Submitting contact form...');

    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const contactEmail = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const contactMessage = document.getElementById('message').value;
    const thankYouName = document.getElementById('thank-you-name');

    // Clear previous error messages
    const previousError = document.querySelector('.error-message');
    if (previousError) {
      previousError.remove();
    }

    // Validation on the first name
    if (firstName.length < 3) {
      displayErrorMessage(
        'Name must be at least 3 characters long.',
        contactForm,
      );
      return;
    }

    // Validation on the last name
    if (lastName.length < 3) {
      displayErrorMessage(
        'Name must be at least 3 characters long.',
        contactForm,
      );
      return;
    }

    // Validation on the email
    if (!contactEmail.includes('@')) {
      displayErrorMessage('Email must be valid.', contactForm);
      return;
    }

    // Validation on the subject
    if (subject.length < 5) {
      displayErrorMessage(
        'Subject must be at least 5 characters long.',
        contactForm,
      );
      return;
    }

    // Validation on the message
    if (contactMessage.length < 10) {
      displayErrorMessage(
        'Message must be at least 10 characters long.',
        contactForm,
      );
      return;
    }

    console.log({
      form: 'Contact Form',
      firstName: firstName,
      lastName: lastName,
      email: contactEmail,
      subject: subject,
      message: contactMessage,
    });

    // Submitted...
    // contactForm.style.display = 'none';
    thankYouName.innerHTML = firstName;
    thankYouForContacting.style.display = 'block';
    contactFormDiv.style.display = 'none';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  if (window.location.pathname.includes('contact.html')) {
    mapboxgl.accessToken =
      'pk.eyJ1IjoibW9ncmFkeSIsImEiOiJja214cWk4NjIwcHk4MnZwOWVocGs5MW10In0._6FE_orlusc1hz1YU3NTpw';
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      center: [44.666195, 41.91828], // starting position [lng, lat]. Note that lat must be set between -90 and 90
      zoom: 15, // starting zoom
    });
  }
});
