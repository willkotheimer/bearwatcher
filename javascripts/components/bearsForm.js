
import { addBears } from './addBears.js'
import { makeRiver } from './addBearsToDom.js';


const makeBearsForm = () => {

  const BearsForm = `<div class="jumbotron jumbotron-fluid">
  <header>
        <h1>Bearwatcher <i class="fas fa-binoculars"></i></h1>
    </header>
  <form>
    <div class="form-group">
      <label for="addName">Bear Name</label>
      <input type="text" class="form-control" id="name" aria-describedby="emailHelp" placeholder="Grizzly">
    </div>
    <div class="form-group">
      <label for="imageUrl">URL to image</label>
      <input type="text" class="form-control" id="imageUrl"" placeholder="https://rb.gy/ppzpuz"><button type="submit" id="submit" class="btn btn-primary">Submit</button>
    </div>
    
    
  </form></div>`;

  $('#bearsform').append(BearsForm);

  $("#submit").click(function (e) {
    e.preventDefault()
    const name = $("#name").val();
    const imageUrl = $("#imageUrl").val();
    if (name != undefined && imageUrl != undefined) {
      addBears();
    }

  });
  makeRiver();

}

export { makeBearsForm }