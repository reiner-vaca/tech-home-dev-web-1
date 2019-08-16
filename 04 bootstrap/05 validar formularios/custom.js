function validar() {
    window.addEventListener('load',function() {
        let forms = this.document.getElementsByClassName('needs-validation');

        let validando = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit',function (evt) {
                console.log(form.checkValidity());
                if (form.checkValidity() == false) {
                    evt.preventDefault();
                    evt.stopPropagation();
                }
                form.classList.add('was-validated')
                
            },false);
        });
    },false);
}

validar();