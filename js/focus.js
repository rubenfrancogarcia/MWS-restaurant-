focusSkip = () => {
  const skip = document.querySelector('.skip');
  skip.addEventListener = () => {
    document.getElementById("neighborhoods-select").focus();
  }
}
