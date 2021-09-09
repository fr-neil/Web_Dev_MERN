`use strict`;
//Emmediately invoked functions
//we can't use EIF's more than once, we declare it, and we call it immediately.. that's it!!

//to declare EIF we trick js by wrapping a function in parenthesis
//to call a EIF we call it using parenthesis at the end of function

//eg-
(function () {
  console.log(`This will never run again!`);
})();

(() => console.log(`This won't run again`))();

{
  console.log(`This is preffred over EIF's`);
}
