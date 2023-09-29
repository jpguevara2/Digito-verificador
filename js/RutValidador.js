class RutValidador{
    constructor(rut){
        this.rut = rut;
        this.esValido = this.validar();

    }

    //calcular el digito verificador
    validar() {
        const rutBase = this.rut.split``;

        let suma = 0;
        let multiplicador = 2;

            for (let i = rutBase.length - 1; i >= 0; i--) {
                suma += parseInt(rutBase[i], 10) * multiplicador;
             multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
            }

        const resultado = 11 - (suma % 11);

        const digitoCalculado = resultado === 11 ? '0' : resultado === 10 ? 'K' : resultado.toString();

        return digitoCalculado;
    }

}