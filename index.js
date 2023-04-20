// pop up render
document.getElementById("initial-popup").innerHTML = `
      <div class="popup-container">
          <div class="inner-popup-container">
          <h2>Introducing "Invoice-It-Up ⬆"</h2>
          <h4>The ultimate software for creating your own business invoices!</h4>
          
          <p>Say goodbye to boring and tedious invoice creation, and hello to a more efficient and enjoyable invoicing experience.</p>
          
          <p>With Invoice-It-Up, you can create a professional-looking invoice in minutes. You can also save your information for future use, making invoicing a breeze.</p>
          
          <p>But that's not all! You don't need to be a tech expert to use it.</p>
          
          <p>So what are you waiting for?</p>
          
          <p>Try Invoice-It-Up today and simplify your invoicing process, while adding a little bit of fun and personality to your business transactions!</p>

          </div>
          <div class="popup-btn-box">
          <button class="popupBtn" id="popup-btn">Button</button>
          </div>
      </div>
`;

// Event Listener pop up button

const popupBtn = document
  .getElementById("popup-btn")
  .addEventListener("click", function () {
    document.querySelector(".main-details-input").style.display = "block";
    document.querySelector(".popup-container").style.display = "none";
  });

// USER DETAIL INPUT - thsi will help the user create their form:

// USER INPUTS

document.querySelector(".main-details-input").innerHTML = `
  
    <div class="details-input-container">
      <div class="user-business-details-input">
            <h2>Input Your Details</h2>
            <p>
            Explainer text. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
            </p>

            <label for="invoice-number">Invoice Number:</label
            ><input type="number" id="invoice-number" required/>

            <label for="tax-percentage">Tax Percentage %:</label
            ><input type="number" id="tax-percentage" required/>

            <label for="terms-link">Terms & Conditions Link:</label
            ><input type="url" id="terms-link" required/>

            <label for="issue-date">Issue Date:</label
            ><input type="date" id="issue-date" required/>

            <label for="due-date">Due Date:</label
            ><input type="date" id="due-date" required/>
            
            <label for="user-business-name">Your Business Name:</label
            ><input type="text" id="user-business-name" required/>
            
            <label for="user-name">Your Name:</label
            ><input type="text" id="user-name" required/>
            
            <label for="user-street-name">Street:</label
            ><input type="text" id="user-street-name" />
            
            <label for="user-city-name">City:</label
            ><input type="text" id="user-city-name" required/>
            
            <label for="user-postcode">Postcode</label
            ><input type="text" id="user-postcode" required/>
            
            <label for="user-email">Email</label
            ><input type="email" id="user-email" required/>
            
            <label for="user-telephone">Telephone</label
            ><input type="telephone" id="user-telephone" required/>
      </div>
  
      <div class="recipient-business-details-input">
            <h2>Input Recipient Details</h2>
            <p>
            Explainer text. Lorem ipsum dolor sit amet consectetur adipisicing
            elit.
            </p>
            <label for="recipient-business-name">Recipient Business Name:</label
            ><input type="text" id="recipient-business-name" required/>
            
            <label for="user-name">Recipient Name:</label
            ><input type="text" id="recipient-name" required/>
            
            <label for="user-street-name">Street:</label
            ><input type="text" id="recipient-street-name" required/>
            
            <label for="user-city-name">City:</label
            ><input type="text" id="recipient-city-name" required/>
            
            <label for="user-postcode">Postcode</label
            ><input type="text" id="recipient-postcode" required/>
      </div>

            <button class="submitDetailsBtn" id="submit-details-btn">Create Invoice!</button>

    </div>
 
  `;

const invoiceNumber = document.getElementById("invoice-number");
const issueDate = document.getElementById("issue-date");
const dueDate = document.getElementById("due-date");
const userBusinessName = document.getElementById("user-business-name");
const userName = document.getElementById("user-name");
const userStreetName = document.getElementById("user-street-name");
const userCityName = document.getElementById("user-city-name");
const userPostcode = document.getElementById("user-postcode");
const userEmail = document.getElementById("user-email");
const userTelephone = document.getElementById("user-telephone");
const recipientBusinessName = document.getElementById(
  "recipient-business-name"
);
const recipientName = document.getElementById("recipient-name");
const recipientStreetName = document.getElementById("recipient-street-name");
const recipientCityName = document.getElementById("recipient-city-name");
const recipientPostcode = document.getElementById("recipient-postcode");
const taxPercentage = document.getElementById("tax-percentage");
const termsLink = document.getElementById("terms-link");

//   USER OUTPUTS
document
  .getElementById("submit-details-btn")
  .addEventListener("click", function () {
    document.querySelector("header").style.display = "block";
    document.querySelector(".user-input-bar").style.display = "block";
    document.querySelector(".create-invoice-btn").style.display = "block";

    document.querySelector(".user-details-output-container").innerHTML = `
    <div class="user-outputs">
    <p>Invoice Number: ${invoiceNumber.value}</p>

        <div class="date-details">  
            <p>Issue Date: ${issueDate.value}</p>
            <p class="red-text"><strong>Due Date:</strong> ${dueDate.value}</p>
        </div>

        <div class="user-details-col">
            <div>
                <h4>Correspondent</h4>
                <p>${userBusinessName.value}</p>
                <p>${userName.value}</p>
            </div>
            <div>
                <h4>Address</h4>
                <p>${userStreetName.value}</p>
                <p>${userCityName.value}</p>
                <p>${userPostcode.value}</p>
            </div>
        </div>

        <div class="contact-details">
            <p>${userEmail.value}</p>
            <p>${userTelephone.value}</p>
        </div>

        <div class="recipient-details-col">
            <div>
                <h4>Recipient</h4>
                <p>${recipientBusinessName.value}</p>
                <p>${recipientName.value}</p>
            </div>
            <div>
                <h4>Address</h4>
                <p>${recipientStreetName.value}</p>
                <p>${recipientCityName.value}</p>
                <p>${recipientPostcode.value}</p>
            </div>
        </div>

        <div class="tax-terms-details">
            <h4>Fiscal & Legal</h4>
            <p>Tax: ${taxPercentage.value}%</p>
            <p>T&C(url): ${termsLink.value}</p>
        </div>
    </div>
    `;

    document.querySelector(".main-details-input").style.display = "none";

    // change H1 header (invoice)
    document.getElementById("new-business-name").innerHTML = `
      ${userBusinessName.value}`;
  });
// outputs
