import {  createContext } from 'react';

import * as langEN from '../language/en.json';
import * as langAr from '../language/ar.json';

export const i18nContext = createContext<any>({langEN, langAr});
