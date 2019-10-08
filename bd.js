class BancoDeDados {
    constructor() {
        this.alunos = [];
        this.professores = [];
    };

    getAlunos() {
        return this.alunos;
    }

    getAlunoPorId (id) {

    }

    addAluno(aluno) {
        this.alunos.push(aluno);
    }

    getProfessores() {
        return this.professores;
    }

    getprofessorPorId (id) {

    }

    addProfessores(professor) {
        this.professores.push(professor);
    }
}

module.exports = new BancoDeDados();
