import { Breadcrumb, Container } from "react-bootstrap";
import Header from "../components/Header";
import Dropdown from "../components/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Breadcrumb style={{ paddingTop: '10px' }}>
          <Breadcrumb.Item>
            <FontAwesomeIcon icon={faHome} style={{ marginRight: '5px', textDecoration: 'none' }} /> 
           
          </Breadcrumb.Item> Home
          <Breadcrumb.Item active>Master Entries</Breadcrumb.Item>
          <Breadcrumb.Item active>Module Permissions</Breadcrumb.Item>
        </Breadcrumb>
        <Dropdown />
      </Container>
    </>
  );
};

export default App;
