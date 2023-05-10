function validate_fname(){
    let form = document.getElementById("input_fname");
    let help = document.getElementById("help_fname");
    var fname;
    if (form.value != ""){
        form.classList.remove("border-danger");
        help.classList.remove("text-danger");
        fname = form.value;
    } else {
        form.classList.add("border-danger");
        help.classList.add("text-danger");
    }
}

function validate_lname(){
    let form = document.getElementById("input_lname");
    let help = document.getElementById("help_lname");
    var lname;
    if (form.value != ""){
        form.classList.remove("border-danger");
        help.classList.remove("text-danger");
        lname = form.value;
    } else {
        form.classList.add("border-danger");
        help.classList.add("text-danger");
    }
}

function validate_sex(){
    let radio1 = document.getElementById("radio_male");
    let radio2 = document.getElementById("radio_female");
    let radio3 = document.getElementById("radio_null");
    let help2 = document.getElementById("help_sex");
    var sex;
    if (radio1.checked){
        help2.classList.remove("text-danger");
        sex = "Male";
    }
    if (radio2.checked){
        help2.classList.remove("text-danger");
        sex = "Female";
    }
    if (radio3.checked){
        help2.classList.remove("text-danger");
        sex = "Prefer not to say";
    }
}

function validate_email(){
    let form = document.getElementById("input_email");
    let help = document.getElementById("help_email");
    let radio1 = document.getElementById("radio_male");
    let radio2 = document.getElementById("radio_female");
    let radio3 = document.getElementById("radio_null");
    let help2 = document.getElementById("help_sex");
    const filter  = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var email;
    if (filter.test(form.value)){
        form.classList.remove("border-danger");
        help.classList.remove("text-danger");
        email = form.value;
    } else {
        form.classList.add("border-danger");
        help.classList.add("text-danger");
    }
    /*
    Because I can't say that the Sex is required since I don't know if the user skipped it or not,
    I will use this function instead.
    */
    if (!(radio1.checked || radio2.checked || radio3.checked)){
        help2.classList.add("text-danger");
    }
    //Email filter source: https://gist.github.com/ktroye/6007958
    //I just now realized that there's already a filter in the instructions
}

function get_contact(){
    let form = document.getElementById("input_contact");
    var contact;
    if (form.value != ""){
        contact = form.value;
    }
}

function submit(){
    return false;
}