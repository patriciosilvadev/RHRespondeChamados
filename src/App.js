import React, { Component } from 'react';
import Menu, { Cabecalho, Rodape } from './Layout/Menu.js';
import './css/App.css';
import './css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons';
import TabelaIndex from './ChamadosRH/TabelaIndex.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {PageChamado} from './ChamadosRH/PageChamado.js';
import Botoes from './Layout/Botoes.js';
import './css/Botoes.css';

library.add(fas);

class App extends Component {
  
  render() {
    return (
      
      <div className="container-fluir">
        <Cabecalho/>
        <Menu>
          <Botoes label="Relatórios" styleName="btn-menu" />
          <Botoes label="Acompanhamento" styleName="btn-menu" />
          <Botoes label="Respostas Automaticas" styleName="btn-menu" />
        </Menu>
        <div className="row">
          <div className="col-2">
            <div className="menu-l">
              <label>Chamados RH</label>
              <Botoes label="Todos" styleName="btn-l-menu btn-block"/>
              <Botoes label="Meus Chamados" styleName="btn-l-menu btn-block"/>
              <Botoes label="Chamatos 'Setor'" styleName="btn-l-menu btn-block"/>
              <Botoes label="Chamados Fechados" styleName="btn-l-menu btn-block"/>
              <Botoes label="Abertos" styleName="btn-l-menu btn-block"/>
              <Botoes label="Em Atendimento" styleName="btn-l-menu btn-block"/>
              <Botoes label="Pendentes" styleName="btn-l-menu btn-block"/>
            </div>

            
            
            
          </div>
          <div className="col-10">
            <BrowserRouter>
              <Switch>
                  <Route path="/" exact={true} component={TabelaIndex} />
                  <Route path="/DetalhamentoChamado" component={PageChamado} />
              </Switch>
            </BrowserRouter>
          </div>
        </div>
        
        <Rodape/>
      </div>
    );
  }
}

export default App;
