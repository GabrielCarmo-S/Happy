import React from 'react';

import { Link } from 'react-router-dom';
import '../styles/pages/sucess.css';

function Success() {
  return (

    <div id="page-success">
      <div className="content-wrapper">
        <main>
          <h1>Ebaaa!</h1>
          <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>
          <button className="btn-voltar">
            <Link to="/app" className="voltar-app">
              Voltar para o mapa
          </Link>
          </button>
        </main>
      </div>
    </div>

  );
}



export default Success;