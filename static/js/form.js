class form{
    constructor(operation) {
        this.user= {
            first_name: "",
            last_name: "",
            email: "",
            photo_profile: "",
            birthdate: "",
        }
        this.maxSizeImage= 2111775;
        this.operation= operation;
        this.errors=[];
    }
    validacheckForm(){
        this.errors = [];
        let min = 3, max = 249;

        if (this.user.first_name === "") {
            this.errors.push("El nombre es obligatorio.");
        }else{
            if(!this.validLong(this.user.first_name, min)){
                this.errors.push("El nombre debe tener minimo " + min + " carácteres")
            }
            if(this.validLong(this.user.first_name, max)){
                this.errors.push("El nombre debe no tener mas de " + max + " carácteres")
            }
        }
        if (this.user.last_name  === "") {
            this.errors.push("El apellido es obligatorio.");
        }else{
            if(!this.validLong(this.user.last_name, min)){
                this.errors.push("El apellido debe tener minimo " + min + " carácteres")
            }
            if(this.validLong(this.user.last_name, max)){
                this.errors.push("El apellido debe no tener mas de " + max + " carácteres")
            }
        }
        if (this.user.birthdate  === "") {
            this.errors.push("La fecha de Nacimiento es obligatorio.");
        }
        if (this.user.photo_profile === "") {
            this.errors.push("Es obligatorio cargar una imagen menor a " + (Math. trunc(this.maxSizeImage / 1000000))  +" MB");
        }
        if (this.user.email  === "") {
            this.errors.push('El correo electrónico es obligatorio.');
        } else if (!this.validEmail(this.user.email)) {
            this.errors.push('El correo electrónico debe ser válido.');
        }

        if (!this.errors.length) {
            this.save();
            return true;
        }
        return false;
    }
    // Validación del email
    validEmail  (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    // Validacion de longitud del campo
    validLong (input, min = 3) {
        return input.length > min;
    }
    // Resetear el formulario
    resetForm(){
        this.formRef.reset()
        this.user = {
            first_name: "",
            last_name: "",
            email: "",
            photo_profile: "",
        }
    }
    // Verificar el tamaño del archivo, si es menor a 2MB lo convierte a base 64 y lo guarda en user.photo_profile
    upload_avatar(e) {
        localStorage.setItem("image", '');
        let file = e.target.files[0];
        this.user.photo_profile = file;
        let reader = new FileReader();

        if (file['size'] < this.maxSizeImage) {
            reader.onloadend = (file) => {
                //console.log('RESULT', reader.result)
                if(typeof reader.result === 'string'){
                    localStorage.setItem("image", reader.result);
                }
            }
            reader.readAsDataURL(file);

        } else {
            alert('Esta imagen supera los 2 MB')
            //this.errors.push("Esta imagen supera los 2 MB");
        }
    }
    // Carga la imagen base 64
    get_avatar() {
        let img = localStorage.getItem("image")
        if(img === ""){
            return "";
        }
        let photo = (img.length > 100) ? img : "img/profile/" + img;
        return photo;
    }
    save(){
        document.querySelector("form").submit();
        return;
    }

}

export default form;