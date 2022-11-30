/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React, { Component } from 'react';
 import { Container, List, Segment , Header, Table, Icon, Image} from 'semantic-ui-react';
 import config from '@plone/volto/registry';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 import { useSelector } from 'react-redux';
 import { UniversalLink } from '@plone/volto/components';
 import LogoInterlegis from '../../../../../../theme/assets/images/logo-interlegis.png';
 import LogoCCBySA from '../../../../../../theme/assets/images/cc-by-sa-footer.png';
 
 const messages = defineMessages({
   copyright: {
     id: 'Copyright',
     defaultMessage: 'Copyright',
   },
 });
 
 /**
  * Component to display the footer.
  * @function Footer
  * @param {Object} intl Intl object
  * @returns {string} Markup of the component
  */
 const Footer = ({ intl }) => {
   const logged_in = useSelector((state) => state.userSession.token);
   const { settings } = config;
   return (
    <Segment className="footer-wrapper">
    <div id="footer">  
    <div className="first-footer">
      <Segment className="portal-footer">
              <Table className="left-table">
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>GITEC</Table.HeaderCell>
                    <Table.HeaderCell>EnGITEC</Table.HeaderCell>
                    <Table.HeaderCell>Desenvolvimento</Table.HeaderCell>
                    <Table.HeaderCell>Interação</Table.HeaderCell>
                    <Table.HeaderCell>Programa Interlegis</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  <Table.Row>
                    <Table.Cell className="table-link-title">
                      <a href="/gitec/historia">História</a>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/engitec/como-comecou">Como começou</a>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/desenvolvimento/como-comecar-a-desenvolver">Como começar a desenvolver</a>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/interacao/como-interagir">Como interagir</a>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="table-link-title">
                      <a href="/gitec/noticias">Notícias</a>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/engitec/edicoes">Edições</a>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell className="table-link-title">
                      <a href="/gitec/eventos">Eventos</a>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/engitec/fotos">Fotos</a>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/engitec/videos">Vídeos</a>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell className="table-link-title">
                      <a href="/engitec/perguntas-frequentes">Perguntas frequentes</a>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                    <Table.Cell>
                    </Table.Cell>
                  </Table.Row>            
                </Table.Body>
              </Table>

      </Segment>
    </div>
    <div className="footer-colophon">
      <div className="colophon-item">
        <a className="colophon-logo interlegis" href="https://www.interlegis.leg.br">
          <Image
            src={LogoInterlegis}
            alt="Interlegis"
            title="Logo Interlegis"
            height={32}
          />
        </a>
        <p className="colophon-info">
          Este site roda sobre o CMS &nbsp;
          <a href="https://plone.org">
            Plone
          </a>
          , software livre de código aberto.
        </p>
      </div>
      <div className="colophon-item">
        <a className="colophon-logo creative-commons" href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">
          <Image
            src={LogoCCBySA}
            alt="Selo Creative Commons BY-SA"
            title="Logo CC by SA"
            height={32}
          />
        </a>
        <p className="colophon-info">
          Os conteúdos e dados deste site estão publicados sob a licença &nbsp;
          <a href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">
            Creative Commons 4.0 — Atribuir Fonte - Compartilhar Igual.
          </a>
        </p>
      </div>
    </div>
    </div>
  </Segment>  
   );
 };
 
 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 Footer.propTypes = {
   /**
    * i18n object
    */
 };
 
 export default injectIntl(Footer);
 