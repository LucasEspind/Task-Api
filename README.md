# Task-Api

Primeiro configure o arquivo .env como o .env.example mostra

Depois vá para o terminal e digite

docker-compose up

Após isso será gerado automaticamente uma tabela com dados pré prontos para testes e você poderá usar ferramentas como Postman ou Insomnia para testar a API

Para testar os métodos utilize:

Ver todas as tasks (método GET):

localhost:(porta que você configurou)/api/v1/tasks

Ver apenas uma task específica (método GET):

localhost:(porta que você configurou)/api/v1/tasks/(id da task)


Criar uma nova task (método POST):

localhost:(porta que você configurou)/api/v1/tasks

E passar os parâmetros pelo body do request, title (título) e description(descrição) da task

Atualizar uma task (método PUT):

localhost:(porta que você configurou)/api/v1/tasks/(id da task)

E passar os parâmetros pelo body do request, não serão necessários todos os parâmetros, pois a API atualizará apenas aqueles enviados

Concluir uma task (método PUT):

localhost:(porta que você configurou)/api/v1/tasks/(id da task)/completed

Deletar uma task (método DELETE):

localhost:(porta que você configurou)/api/v1/tasks/(id da task)
