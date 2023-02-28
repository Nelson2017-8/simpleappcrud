import form from "./form.js"
$(function() {
    const formclass = new form("create")
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
        titleForm.html("Agregar Usuario")
        Submit.html("Guardar")
    }
    Photo.change((e)=>{
        formclass.upload_avatar(e)
        formclass.get_avatar()
        setInterval(()=>{
            Preview.attr("src", localStorage.getItem('image'))
        }, 800)

    });
    $("form").on("submit", function(e){
        e.preventDefault();
        errors.addClass("d-none");
        formclass.user.first_name = first_name.val();
        formclass.user.last_name = last_name.val();
        formclass.user.email = email.val();
        //formclass.photo_profile = photo_profile;
        formclass.user.birthdate = birthdate.val();
        formclass.validacheckForm()

        if(formclass.errors.length > 0){
            $(".errors ul").html("")
            errors.removeClass("d-none");
            $.each(formclass.errors, (index, elem)=>{
                $(".errors ul").append(`<li>${elem}</li>`)
            })
        }

        
    })
    window.onload = init()
	
});