let fn$$ = document.querySelectorAll(".fn-insert-here");

for (let i = 0; i < fn$$.length; i++) {
  let p$$ = document.createElement("p");
  p$$.textContent = "Voy dentro!";
  fn$$[i].appendChild(p$$);
}
