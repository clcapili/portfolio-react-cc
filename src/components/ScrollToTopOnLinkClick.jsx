// component for scroll to top on every page load
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function ScrollToTopOnLinkClick({ to, children, className }) {
  const scrollToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    const linkElement = document.querySelector(`a[href="${to}"]`);

    if (linkElement) {
      linkElement.addEventListener('click', scrollToTop);
    }

    return () => {
      if (linkElement) {
        linkElement.removeEventListener('click', scrollToTop);
      }
    };
  }, [to]);

  return (
    <Link to={to} className={className} onClick={scrollToTop}>
      {children}
    </Link>
  );
}

ScrollToTopOnLinkClick.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ScrollToTopOnLinkClick;
