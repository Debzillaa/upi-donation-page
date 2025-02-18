function makeUPIPayment() {
  const amount = document.getElementById("amount").value;
  if (!amount || parseFloat(amount) <= 0) {
    alert("Please enter a valid amount!");
    return;
  }
  const upiLink = `upi://pay?pa=debjit4biz@okhdfcbank&pn=DEBJIT%20SAREN&tn=Donation%20to%20the%20jobless%20guy&am=${amount}&cu=INR`;
  window.location.href = upiLink;
}
