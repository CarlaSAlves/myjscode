/*a) cria uma função que recebe um argumento name e que imprime para a consola 
"Hello name": (sendo que name é o argumento que é passado à função no momento de 
invocá-la)
*/
const helloName = (name) => {
    return console.log("Hello " + name + "!");
};

//helloName("Carla");

/*b) cria outra função que recebe os argumentos name e language. 
Esta função imprime para a consola olá em PT, ES ou EN consoante os 
argumentos que recebe*/

const multyHello = (name, language) => {
    if (language === "PT") {
        return ("Olá " + name + "!");
    };
    if (language === "ES") {
        return ("Hola " + name + "!");
    };
    if (language === "EN") {
        return ("Hello " + name + "!");
    };
};
console.log(multyHello("Prashanta", "EN"));
