# language: pt

Funcionalidade: Marca Item

    Contexto:         
        Dado cliquei no menu 'Cadastros'
        E cliquei no primeiro sub-menu 'Itens'
        E cliquei no segundo sub-menu 'Marca'

    Cenário: Cadastrando uma marca de item
        Quando clico no botão 'Novo' na tela de Marca Item
        E preencho o campo 'Descrição' com o valor 'Teste Automatizado'
        E clico no botão 'Salvar' no Formulário de Marca Item
        Então armazeno o valor do ID

    Cenário: Editando uma marca de item
        Dado que cliquei no botão 'Filtrar'
        Quando preencho o campo 'Código' do filtro com valor 'IDMARCA'
        E clico no botão Filtrar na janela de filtro

        E seleciono o registro com ultimo id
        E preencho o campo 'Descrição' com o valor 'Teste Automatizado Editado'
        E clico no botão 'Salvar' no Formulário de Marca Item

    Cenário: Excluindo uma marca de item
        Dado que cliquei no botão 'Filtrar'
        E preencho o campo 'Código' do filtro com valor 'IDMARCA'
        E clico no botão Filtrar na janela de filtro

        E seleciono o registro com ultimo id
        E clico no botão 'Excluir' na tela de Marca Item