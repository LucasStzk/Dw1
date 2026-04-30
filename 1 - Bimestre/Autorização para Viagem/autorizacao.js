   const cpfdoatleta = document.getElementById('cpfdoatleta');
        const nomedoatleta = document.getElementById('nomedoatleta');
        const idade = document.getElementById('idade');
        const nomedoresponsavel = document.getElementById('nomedoresponsavel');
        const cidadedeorigem = document.getElementById('cidadedeorigem');
        const cidadededestino = document.getElementById('cidadededestino');
        const modalidadeesportiva = document.getElementById('modalidadeesportiva');
        const saida = document.getElementById('saida');
         categoria='';
   
        function enviarFormulario() {
            if (cpfdoatleta.value === '' || nomedoatleta.value === '' || idade.value === '' || nomedoresponsavel.value === '' || cidadedeorigem.value === '' || cidadededestino.value === '' || modalidadeesportiva.value === '') {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            } else {
                // Salvar dados no localStorage
                localStorage.setItem('categoria', categoria);
                localStorage.setItem('cpfdoatleta', cpfdoatleta.value);
                localStorage.setItem('nomedoatleta', nomedoatleta.value);
                localStorage.setItem('idade', idade.value);
                localStorage.setItem('nomedoresponsavel', nomedoresponsavel.value);
                localStorage.setItem('cidadedeorigem', cidadedeorigem.value);
                localStorage.setItem('cidadededestino', cidadededestino.value);
                localStorage.setItem('modalidadeesportiva', modalidadeesportiva.value);
                window.location.href = 'index.html';
            }
        }
        function limitarCPF(cpf) {
            if (cpf.value.length > 11) {
                cpf.value = cpf.value.slice(0, 11);
            }
        }
        cpfdoatleta.addEventListener('input', function() {
            limitarCPF(cpfdoatleta);
        });
        idade.addEventListener('blur', function() {
            limitarIdade(idade);
        });
        function limitarIdade(idade) {
            if (idade.value < 7) {
                alert('A idade mínima para participar é de 7 anos.');
                idade.value = '';
                categoria = '';
            } else if (idade.value > 18) {
                alert('A idade máxima para participar é de 18 anos.');
                idade.value = '';
                categoria = '';
            } else {
                if (idade.value >= 7 && idade.value <= 11) {
                    categoria = 'Infantil';
                } else if (idade.value >= 12 && idade.value <= 13) {
                    categoria = 'Pré-Adolescente';
                } else if (idade.value >= 14 && idade.value <= 17) {
                    categoria = 'Adolescente';
                } else if (idade.value === '18') {
                    categoria = 'Junior';
                }
            }
        }
       
