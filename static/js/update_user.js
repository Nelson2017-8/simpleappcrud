import form from "./form.js"
$(function() {
    const formclass = new form("update")
    const titleForm = $("#title-form")
    const Photo = $("#photo_profile")
    const Preview = $("#preview")
    const Submit = $("#btn-form")
    const errors = $(".errors")

    const first_name = $("#first_name")
    const last_name = $("#last_name")
    const email = $("#email")
    const photo_profile = $("#photo_profile")
    const birthdate = $("#birthdate")

    const init = ()=> {
        titleForm.html("Actualizar Usuario")
        Submit.html("Actualizar")
        Preview.attr("src", $("[name='image']").val())
        email.attr("type", "email")
 
    }
    Photo.change((e)=>{
        formclass.upload_avatar(e)
        formclass.get_avatar()
        setInterval(()=>{
            Preview.attr("src", localStorage.getItem('image'))
        }, 800)

    });
    window.onload = init()
	
});