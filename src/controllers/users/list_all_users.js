// Classe que ira listar todos os usuarios 
class ListAllUsers{
    listAll( req, res){
        const users = [
            { id: 1, name: 'Renan Augusto' },
            { id: 2, name: 'André Pena' },
            { id: 3, name: 'Caio Fernando Pereira' },
            { id: 4, name: 'Cleudio Faria' },
            { id: 5, name: 'Fagotti' },
            { id: 6, name: 'Linus Torvalds'}
        ];

        res.status(200).json(users);

    }
    listAllById( req, res){
        const users = [
            { id: 1, name: 'Renan Augusto' },
            { id: 2, name: 'André Pena' },
            { id: 3, name: 'Caio Fernando Pereira' },
            { id: 4, name: 'Cleudio Faria' },
            { id: 5, name: 'Fagotti' },
            { id: 6, name: 'Linus Torvalds'}
        ];

        const userId = req.params.id;
        const user = users.find(user => user.id == userId);
        // Verifica se o usuario existe, se não existe retorna um erro 404
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    }
    listAllByName( req, res){
        const users = [
            { id: 1, name: 'Renan Augusto' },
            { id: 2, name: 'André Pena' },
            { id: 3, name: 'Caio Fernando Pereira' },
            { id: 4, name: 'Cleudio Faria' },
            { id: 5, name: 'Fagotti' },
            { id: 6, name: 'Linus Torvalds'}
        ];

        const userName = req.params.name;
        const user = users.find(user => user.name == userName);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user);
    }
}

module.exports = new ListAllUsers()