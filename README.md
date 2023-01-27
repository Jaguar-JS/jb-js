# Magic Form
JavaScript for Beginners

# About
  Every good site has an online form to fill out — whether for registering, ordering food,  or making payments. Forms can be very large; if you accidentally reload a page, you can lose all the data. A sad story, isn't it? To resolve this, let's create a form that will retain the data, when it closes unexpectedly.
  
# Objectives

  To pass this stage, you need to implement the concept of saving and loading data to and from the local storage. Once users enter any data into the fields, immediately update this data in the local storage. After reloading the page, you should get data from the local storage and change the input fields values. Pay attention when users visit the website for the first time. In this case, there will be no data in local storage. In that case, all fields should be empty.
  
  Create another HTML file that shows the submit history to users.

Each data submission should be represented as a div block with the submit-history-card class. Each div block should contain the following elements:

<p> element with the card-first-name class. Inside this tag, show the first name from the submitted form;
<p> element with the card-last-name class. Inside this tag, show the last name from the submitted form;
<p> element with the card-email class. Inside this tag, show the email from the submitted form.
<p> element with the card-phone class. Inside this tag, show the phone from the submitted form.
<p> element with the card-company class. Inside this tag, show the company from the submitted form.
<p> element with the card-address class. Inside this tag, show the address from the submitted form.
<button> element with the delete-button class. Clicking on it should do nothing for now.
Both pages should contain the navigation bar with the following elements:

<a> tag with the form-link ID. When users click on this link, navigate them to the main page with the form. To do so, you should set the href attribute value to the path of the main HTML file;
<a> tag with the history-link ID. When this link is clicked you should navigate to the history page. To do so you should set the href attribute value to the path to the history HTML file.
Once users visit the history page, get all the history of the submission and create a div block with the submit-history-card class for each submission. Add it to the DOM.

After submitting the main page, clear all the input fields on the form.

  On the history page, each submit card should contain a button with the delete-button class. When users click on this button, delete the card related to the button. Also, don't forget to delete this submission from the local storage, so it won't be shown after reloading.

  When users open two browser tabs with the HTML form and change data in one of them, the data also should be updated in the other tab. Check every 100 ms whether the data in the local storage is changed; if so, update the data in the form.
