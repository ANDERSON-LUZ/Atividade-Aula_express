class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    }

    get() {
        return this.alunos;
    }

    add(aluno) {
        this.alunos.push(aluno);
        this.add = ['Anderson'];
    }

    get() {
        return this.professores;
    }

    add(professor) {
        this.professores.push(professor);
        this.add = ['Jesiel'];
    }
}

module.exports = new BancoDeDados();