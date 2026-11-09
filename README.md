# 🆔 Dígito Verificador RUT Chile

Herramienta ligera desarrollada para calcular y validar de forma automática el Dígito Verificador (DV) del Rol Único Tributario (RUT) chileno a partir de su cuerpo numérico.

# Digito-verificador![Sin título](https://github.com/jpguevara2/Digito-verificador/assets/45580750/f643559c-4853-4e48-b7f2-266261445bb6)
![Captura1](https://github.com/jpguevara2/Digito-verificador/assets/45580750/3c815edd-1f64-47b8-857c-e46a9d67734c)
![Captura1](https://github.com/jpguevara2/Digito-verificador/assets/45580750/c5774bc0-0a11-4112-bd1f-237b94d4e9df)


## 🎯 Problema y Solución

* **El Problema:** En sistemas de registro administrativos, financieros o de control de identidad en Chile, ingresar un RUT sin validar su dígito verificador genera inconsistencias en bases de datos e errores de registro de usuarios.
* **La Solución:** Una aplicación enfocada que recibe el número de RUT (cuerpo numérico), procesa la fórmula del Módulo 11 y retorna instantáneamente el dígito correspondiente (del 0 al 9 o la letra 'K').

## ⚙️ Funcionalidades y Lógica de Negocio

* **Cálculo de Algoritmo Módulo 11:** Implementación exacta de la serie numérica de multiplicación (2, 3, 4, 5, 6, 7) de derecha a izquierda sobre el cuerpo del RUT.
* **Manejo de Casos Espejo y Excepciones:** Procesamiento correcto de resultados donde el residuo matemático equivale a `10` (retornando la letra **K**) o `11` (retornando el número **0**).
* **Sanitización y Validación de Entrada:** Limpieza de caracteres no numéricos (puntos, guiones, espacios) antes de ejecutar el algoritmo para evitar errores de ejecución.

https://jpguevara2.github.io/Digito-verificador/
