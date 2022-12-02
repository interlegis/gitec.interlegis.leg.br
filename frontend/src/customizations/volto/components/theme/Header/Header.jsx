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
  faDiscord,
  faAccessibleIcon
} from '@fortawesome/free-brands-svg-icons'; 
import {
  faCircle,
  faHands,
  faEnvelope,
  faQuestion
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
  <nav class="navbar navbar-default navbar-static-top">
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-1 col-md-offset-1">
          <a accesskey="1" title="Ir para o conteúdo principal [1]" href="#view" >Ir para o conteúdo</a>
          <a accesskey="2" title="Ir para o menu [2]" href="#nav">Menu</a>
          <a accesskey="3" title="Ir para a pesquisa [3]" href="#search">Pesquisa</a>
          <a accesskey="4" title="Ir para o rodapé [4]" href="#footer">Rodapé</a>
        </div>  
        <div class="col-md-5">
          <a title="Aumentar a fonte"  href="#" onclick="if(jQuery('body').hasClass('menor')){jQuery('body').toggleClass('menor')}else{jQuery('body').toggleClass('maior')};">
            <svg class="svg-inline--fa fa-font fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="font" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z"></path></svg>
            +&nbsp;Aumentar Fonte</a>
          <a title="Diminuir a fonte" href="#" onclick="if(jQuery('body').hasClass('maior')){jQuery('body').toggleClass('maior')}else{jQuery('body').toggleClass('menor')};">
            <svg class="svg-inline--fa fa-font f  width: 40%;a-w-14" aria-hidden="true" data-prefix="fa" data-icon="font" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M152 416h-24.013l26.586-80.782H292.8L319.386 416H296c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-26.739L275.495 42.746A16 16 0 0 0 260.382 32h-72.766a16 16 0 0 0-15.113 10.746L42.739 416H16c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h136c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16zm64.353-271.778c4.348-15.216 6.61-28.156 7.586-34.644.839 6.521 2.939 19.476 7.727 34.706l41.335 124.006h-98.619l41.971-124.068z"></path></svg>
            -&nbsp;Diminuir Fonte</a>
          <a title="Ver sobre acessibilidade" href="/acessibilidade">
            <svg class="svg-inline--fa fa-wheelchair fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="wheelchair" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M496.101 385.669l14.227 28.663c3.929 7.915.697 17.516-7.218 21.445l-65.465 32.886c-16.049 7.967-35.556 1.194-43.189-15.055L331.679 320H192c-15.925 0-29.426-11.71-31.679-27.475C126.433 55.308 128.38 70.044 128 64c0-36.358 30.318-65.635 67.052-63.929 33.271 1.545 60.048 28.905 60.925 62.201.868 32.933-23.152 60.423-54.608 65.039l4.67 32.69H336c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16H215.182l4.572 32H352a32 32 0 0 1 28.962 18.392L438.477 396.8l36.178-18.349c7.915-3.929 17.517-.697 21.446 7.218zM311.358 352h-24.506c-7.788 54.204-54.528 96-110.852 96-61.757 0-112-50.243-112-112 0-41.505 22.694-77.809 56.324-97.156-3.712-25.965-6.844-47.86-9.488-66.333C45.956 198.464 0 261.963 0 336c0 97.047 78.953 176 176 176 71.87 0 133.806-43.308 161.11-105.192L311.358 352z"></path></svg>
            &nbsp;Acessibilidade</a>
          <a title="Alto contraste" href="#">
            <svg class="svg-inline--fa fa-adjust fa-w-16" aria-hidden="true" data-prefix="fa" data-icon="adjust" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path></svg>
            &nbsp;Contraste</a>
          <a title="Ir para o site VLibras" href="https://www.gov.br/governodigital/pt-br/vlibras" target="_blank" >
            <svg class="svg-inline--fa fa-sign-language fa-w-14" aria-hidden="true" data-prefix="fa" data-icon="sign-language" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M91.434 483.987c-.307-16.018 13.109-29.129 29.13-29.129h62.293v-5.714H56.993c-16.021 0-29.437-13.111-29.13-29.129C28.16 404.491 40.835 392 56.428 392h126.429v-5.714H29.136c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h154.286v-5.714H57.707c-16.021 0-29.437-13.111-29.13-29.129.297-15.522 12.973-28.013 28.566-28.013h168.566l-31.085-22.606c-12.762-9.281-15.583-27.149-6.302-39.912 9.281-12.761 27.15-15.582 39.912-6.302l123.361 89.715a34.287 34.287 0 0 1 14.12 27.728v141.136c0 15.91-10.946 29.73-26.433 33.374l-80.471 18.934a137.16 137.16 0 0 1-31.411 3.646H120c-15.593-.001-28.269-12.492-28.566-28.014zm73.249-225.701h36.423l-11.187-8.136c-18.579-13.511-20.313-40.887-3.17-56.536l-13.004-16.7c-9.843-12.641-28.43-15.171-40.88-5.088-12.065 9.771-14.133 27.447-4.553 39.75l36.371 46.71zm283.298-2.103l-5.003-152.452c-.518-15.771-13.722-28.136-29.493-27.619-15.773.518-28.137 13.722-27.619 29.493l1.262 38.415L283.565 11.019c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l76.889 98.745-4.509 3.511-94.79-121.734c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l94.443 121.288-4.509 3.511-77.675-99.754c-9.58-12.303-27.223-14.63-39.653-5.328-12.827 9.599-14.929 28.24-5.086 40.881l52.053 66.849c12.497-8.257 29.055-8.285 41.69.904l123.36 89.714c10.904 7.93 17.415 20.715 17.415 34.198v16.999l61.064-47.549a34.285 34.285 0 0 0 13.202-28.177z"></path></svg>
            &nbsp;VLibras</a>
        </div>
      </div>
    </div>
  </nav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3 col-md-offset-4">
          <nav id="nav">
            <Navigation pathname={this.props.pathname} />  
          </nav> 
        </div>
        <div class="col-md-2 col-md-offset-1">
          <a class="link link-deep--contato" href="mailto:gitec.interlegis@gmail.com" title="Entrar em contato"><FontAwesomeIcon icon={faEnvelope} /></a>
          <a class="link link-deep--faq" href="/engitec/perguntas-frequentes" title="Acessar perguntas frequentes sobre o EnGITEC"><FontAwesomeIcon icon={faQuestion} /></a>
          <a class="link link-deep--facebook" href="https://www.facebook.com/interlegisonline/" title="Acessar o Facebook"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a class="link link-deep--instagram" href="https://www.instagram.com/interlegis/" title="Acessar o Instagram"><FontAwesomeIcon icon={faInstagram} /></a>
          <a class="link link-deep--youtube" href="https://www.youtube.com/channel/UCggZpGPjK5eF1vWoONIqIbw/" title="Acessar o canal do YouTube"><FontAwesomeIcon icon={faYoutube} /></a>
          <a class="link link-deep--discord" href="hhttps://discord.gg/QyPKgzzgpg/" title="Acessar o canal do Discord"><FontAwesomeIcon icon={faDiscord} /></a>
        </div>
        <div class="col-md-4">
          <div className="search" id="search">
            <SearchWidget />
          </div>
        </div>
      </div>
    </div>
  <Container>
    <div class="container-fluid">
      <div className="header">
        <div className="logo-nav-wrapper">
          <div className="logo">
            <Logo />
            <p>Portal da Comunidade Interlegis de Tecnologia</p>
          </div>
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