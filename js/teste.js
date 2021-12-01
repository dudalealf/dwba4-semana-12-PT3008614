class Ads extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div class="componentes">
        <h2><strong>Componentes curriculares</strong></h2>
        <table>
          <tr>
            <th>DISCIPLINA</th>
            <th>CARGA</th>
            <th>PERÍODO</th>
          </tr>
          <tr>
            <td>Sistemas Operacionais</td>
            <td>66.7</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Laboratório de Estruturas de Dados e Programação</td>
            <td>33.3</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Inglês</td>
            <td>33.3</td>
            <td>Noturno</td>
          </tr>
          <tr>
            <td>Introdução a banco de dados</td>
            <td>66.7</td>
            <td>Noturno</td>
          </tr>
        </table>
      </div>
    );
  }
}

ReactDOM.render(<Ads />, document.getElementById('componenteCurricular'))