import Layout from "../components/Layout";
import './ErrorPage.scss'

function Error() {
  return (
    <div>
      <Layout >
        <div className="error-page-container">
          <h1 className="error-page-title">404</h1>
          <p className="error-page-message">Oups! La page que vous demandez n'existe pas.</p>
          <a className="error-page-link" href="/">Retourner sur la page d'accueil</a>
        </div>
      </Layout>
    </div>
  );
}

export default Error;
