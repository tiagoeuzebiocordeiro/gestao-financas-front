import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";

class CadastroUsuario extends React.Component {

    state = {
        nome: '',
        email: '',
        senha: '',
        confirmaSenha: ''
    }

    cadastrar = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div className="container">
                <Card title="Cadastro de Usuário">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="bs-component">

                                <FormGroup label="Nome" htmlFor="inputNome">
                                    <input placeholder="Digite o nome..." type="text" className="form-control" id="inputNome" name="nome" onChange={e => this.setState({nome: e.target.value})}></input>
                                </FormGroup>

                                <FormGroup label="Email: *" htmlFor="inputEmail">
                                    <input placeholder="Digite o email..." type="email" id="inputEmail" name="email" className="form-control" onChange={e => this.setState({email: e.target.value})}></input>
                                </FormGroup>

                                <FormGroup label="Senha: *" htmlFor="inputSenha">
                                    <input placeholder="Digite a senha..." type="password" id="inputSenha" name="senha" className="form-control" onChange={e => this.setState({senha: e.target.value})}></input>
                                </FormGroup>

                                <FormGroup label="Confirma Senha: *" htmlFor="inputConfirmaSenha">
                                    <input style={{marginBottom: '20px'}} placeholder="Digite a senha novamente..." type="password" id="inputConfirmaSenha" name="confirmaSenha" className="form-control" onChange={e => this.setState({confirmaSenha: e.target.value})}></input>
                                </FormGroup>
                                <button onClick={this.cadastrar} type="button" className="btn btn-success">Cadastrar</button>
                                <button style={{marginLeft: '5px'}} type="button" className="btn btn-warning">Voltar</button>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>  
        );
    }
}
export default CadastroUsuario;