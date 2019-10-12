const reasonInput = document.querySelector("#input-reason");
const amountInput = document.querySelector("#input-amount");
const cancelBtn = document.querySelector("#btn-cancel");
const confirmBtn = document.querySelector("#btn-confirm");
const expencesList = document.querySelector("#list-expences");
const showTotalExpences = document.querySelector("#total-expences");
const alertCtrl = document.querySelector("ion-alert-controller");
let totalExpenses = 0;
const clear = () => {
  reasonInput.value = "";
  amountInput.value = "";
};

confirmBtn.addEventListener("click", () => {
  console.log("it works!");
  const providedReason = reasonInput.value;
  const providedAmount = amountInput.value;

  if (
    providedReason.length <= 0 ||
    providedAmount <= 0 ||
    providedAmount.length <= 0
  ) {
    alertCtrl
      .create({
        message: "Please provide valid input",
        header: "Need valid input",
        buttons: ["Okay!"]
      })
      .then(alertElement => {
        alertElement.present();
      });
    return;
  }
  const newItem = document.createElement("ion-item");
  newItem.textContent = providedReason + ": $" + providedAmount;
  expencesList.appendChild(newItem);
  totalExpenses += +providedAmount;
  clear();
  showTotalExpences.textContent = totalExpenses;
});

cancelBtn.addEventListener("click", clear);
