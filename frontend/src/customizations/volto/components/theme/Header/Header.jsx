/**
 * Header component.
 * @module components/theme/Header/Header
 */

 import React, { Component } from 'react';
 import { Container, Segment } from 'semantic-ui-react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faAccessibleIcon
} from '@fortawesome/free-brands-svg-icons'; 
import {
  faCircle,
  faHands
} from '@fortawesome/free-solid-svg-icons'; 
 import {
   Anontools,
   LanguageSelector,
   Logo,
   Navigation,
   SearchWidget,
 } from '@plone/volto/components';
 
 /**
  * Header component class.
  * @class Header
  * @extends Component
  */
 class Header extends Component {
   /**
    * Property types.
    * @property {Object} propTypes Property types.
    * @static
    */
   static propTypes = {
     token: PropTypes.string,
     pathname: PropTypes.string.isRequired,
   };
 
   /**
    * Default properties.
    * @property {Object} defaultProps Default properties.
    * @static
    */
   static defaultProps = {
     token: null,
   };
 
   /**
    * Render method.
    * @method render
    * @returns {string} Markup for the component.
    */
   render() {
     return (
<header>
  <nav class="Triad navbar_global">
    <div>
      <div class="u-hideLower">
        <div class="Rail Rail--fenced"><a class="link link-deep" href="#view" accesskey="1">Ir para o conteúdo principal</a><a class="link link-deep" href="#search" accesskey="2">Busca</a><a class="link link-deep" href="#footer" accesskey="3">Rodapé</a></div>
      </div>
    </div>
    <div>
      <div class="u-hideUpper"><a class="navbar-icons btn btn-secondary" href="#search" title="Buscar"><i class="fas fa-search"></i></a></div>
      <div class="u-hideLower">
        <ul class="flex-unstyled li-spacer">
          <li><a class="flex-item--center link link-deep" href="javascript:setBaseFontSize('',1);" title="Fonte normal">A</a></li>
          <li><a class="flex-item--center link link-deep" href="javascript:setBaseFontSize('largeText',%201);" title="Fonte maior">A+</a></li>
          <li><a class="flex-item--center link link-deep" href="acessibilidade" title="Acessibilidade"><FontAwesomeIcon icon={faAccessibleIcon} />&nbsp;Acessibilidade</a></li>
          <li><a class="flex-item--center link link-deep" href="#" title="Contraste"><FontAwesomeIcon icon={faCircle} />&nbsp;Contraste</a></li>
          <li><a class="flex-item--center link link-deep js-vlibras" href="https://www.gov.br/governodigital/pt-br/vlibras" role="button" title="VLibras"><FontAwesomeIcon icon={faHands} />&nbsp;VLibras</a></li>
        </ul>
      </div>
    </div>
  </nav>
 
  <div class="u-hideLower">
    <nav class="navbar_control navbar_control--tertiary navbar_control--spacer" id="principal">
      <div class="control_item">
        <Navigation pathname={this.props.pathname} />    
      </div>
      <div class="control_item control_item--3 justify-content-center">
       <ul class="fence fence--xl fence-border--lg fence-color--cousin">
          <li><a class="link link-deep--facebook" href="https://www.facebook.com/interlegisonline/"><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a class="link link-deep--instagram" href="https://www.instagram.com/interlegis_/"><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a class="link link-deep--youtube" href="https://www.youtube.com/channel/UCggZpGPjK5eF1vWoONIqIbw/"><FontAwesomeIcon icon={faYoutube} /></a></li>
     </ul>
      </div>
      <div id="search">
      <div className="tools-search-wrapper">
        <div className="search">
          <SearchWidget />
        </div>
     </div>
     </div>
    </nav>
  </div>
  <Container>
    <div className="header">
      <div className="logo-nav-wrapper">
        <div className="logo">
          <Logo />
          <p>Portal da Comunidade Interlegis de Tecnologia</p>
        </div>
      </div>
    </div>
  </Container>
</header>
     );
   }
 }
 
 export default connect((state) => ({
   token: state.userSession.token,
 }))(Header);