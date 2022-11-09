/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';

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
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="left"
      id="footer"
    >
      <Container>
        <Segment basic inverted color="grey">
          <FormattedMessage
            id="e-mail: gitec.interlegis@gmail.com"
            defaultMessage="e-mail: gitec.interlegis@gmail.com"
            values={{
            }}
          />{' '}
        </Segment>
        <List horizontal inverted>
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          <div role="listitem" className="item">
            {logged_in && (
              <UniversalLink className="item" href="/logout">
                <FormattedMessage id="Logout" defaultMessage="Logout" />
              </UniversalLink>
            )}
            {!logged_in && (
              <UniversalLink className="item" href="/login">
                <FormattedMessage id="Login" defaultMessage="Login" />
              </UniversalLink>
            )}
          </div>
          <div role="listitem" className="item">
            <a className="item" href="/sitemap">
              <FormattedMessage
                id="Mapa do Site"
                defaultMessage="Mapa do Site"
              />
            </a>
          </div>
        </List>
      </Container>
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
