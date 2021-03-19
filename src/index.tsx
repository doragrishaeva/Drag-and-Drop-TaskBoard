import React from 'react';
import ReactDom from 'react-dom';

import { App } from "@/App";

const appNode = document.getElementById('app');

ReactDom.render(<App />, appNode);
