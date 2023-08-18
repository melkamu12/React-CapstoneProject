import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import getFlagImageUrl from './Flags';
import './Country.css';

function Country({
  geonameId,
  countryCode,
  countryName,
  currencyCode,
  areaInSqKm,
  continentName,
  population,
}) {
  const flagImageUrl = getFlagImageUrl(countryCode);

  const countryLink = (
    <NavLink to={`country/${geonameId}`}>
      <div className="country-info">
        <img className="country-image" src={flagImageUrl} alt={countryName} />
        <p className="country-name">{countryName}</p>
      </div>
      <p className="currency-code">{currencyCode}</p>
    </NavLink>
  );

  const countryDetails = (
    <div className="country-details">
      <p className="area">
        Sureface Area:
        {areaInSqKm}
        km²
      </p>
      <p className="continent">
        Continent:
        {continentName}
      </p>
      <p className="population">
        Population:
        {population}
      </p>
    </div>
  );

  return (
    <li>
      <div className="country-card">
        {countryLink}
        {countryDetails}
      </div>
    </li>
  );
}

Country.propTypes = {
  countryCode: PropTypes.string,
  countryName: PropTypes.string.isRequired,
  currencyCode: PropTypes.string.isRequired,
  areaInSqKm: PropTypes.string.isRequired,
  continentName: PropTypes.string.isRequired,
  population: PropTypes.string,
  geonameId: PropTypes.number.isRequired,
};

Country.defaultProps = {
  countryCode: 0,
  population: 'not specificed',
};

export { Country, getFlagImageUrl };
