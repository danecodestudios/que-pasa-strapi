/*
 *
 * HomePage
 *
 */

import React, { memo } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";

const HomePage = () => {
  return (
    <div>
      <h1>{pluginId}&apos;PLUGINS EDITOR DE CODIGO</h1>
      <p>QUE PASA NEWS</p>
    </div>
  );
};

export default memo(HomePage);
