//recibe los parametros, hace el calculo y lo entrega
function validarRut (){
    const rut = document.getElementById('rut').value;
    const dv = document.getElementById('dv');
    let rutValidador = new RutValidador(rut)
    const digito = rutValidador.validar();
    dv.value=digito;
}