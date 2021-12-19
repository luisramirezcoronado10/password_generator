var app = new Vue({
    el: '#app',
    data: {
        mayusculas: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z'],
        minusculas: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'],
        numeros: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
        simbolos: ['*', '+', '-', '/', '@', '_', '?', '!', '[', '{', '(', ')', '}', ']', ',', ';', '.', '>', '<', '~', '°', '^', '&', '$', '#', '"'],
        password_generate: [],
        length_password: 15
    },
    methods: {
        generatePassword: function(){
            var password_generate_tmp =  [];
            var caracteres = [...this.mayusculas,...this.minusculas,...this.numeros,...this.simbolos];
            console.log(caracteres);
            for (let index = 0; index < this.length_password; index++) {
                password_generate_tmp.push(caracteres[this.randomNumber(0,caracteres.length - 1)]);
            }

            this.password_generate = password_generate_tmp.join('');
            console.log(this.password_generate);
        },

        randomNumber: function(min, max){
            return Math.floor(Math.random()* (max - min + 1)) + min;
        }
    },
    
    created: function(){
        this.generatePassword();
    },

});